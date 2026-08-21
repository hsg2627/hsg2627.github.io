// core/store.js — trạng thái học tập, lưu bền trong localStorage.
//
// Đây là thứ web cũ thiếu: XP, vàng, streak, tiến độ đều mất khi tải lại trang.
// Mọi thay đổi đi qua Store.update() để chỉ có một chỗ ghi xuống đĩa.

import { RULES } from './config.js';
import { readJSON, writeJSON, todayKey, debounce } from './util.js';

const KEY = 'dt_state_v1';

function blank() {
  return {
    v: 1,
    xp: 0,
    gold: 0,
    level: 1,
    streak: 0,
    streak_max: 0,
    active_days: [],      // ['2026-09-14', ...] — đếm số ngày hoạt động
    units: {},            // { '1': { opened, items_done, correct } }
    items: {},            // { 'U1-VOC-014': { attempts, correct } }
    quests: {},           // { 'daily-2026-09-14': { accepted, done } }
    flags: {},            // { leaderboard_optin: false }
  };
}

let state = null;

/** Ghi xuống đĩa trễ 300ms để không chặn giao diện khi HS trả lời liên tục. */
const persist = debounce(() => {
  writeJSON(KEY, state);
}, 300);

function levelFor(xp) {
  let lv = 1;
  for (let i = 0; i < RULES.LEVELS.length; i++) {
    if (xp >= RULES.LEVELS[i]) lv = i + 1;
  }
  return lv;
}

export const Store = {
  load() {
    const raw = readJSON(KEY, null);
    state = raw && raw.v === 1 ? { ...blank(), ...raw } : blank();
    return state;
  },

  /** Bản chụp chỉ đọc. Màn hình KHÔNG được sửa trực tiếp object này. */
  get() {
    if (!state) Store.load();
    return state;
  },

  /** Cách duy nhất để đổi trạng thái. fn nhận state và sửa tại chỗ. */
  update(fn) {
    if (!state) Store.load();
    fn(state);
    persist();
    return state;
  },

  /** Ghi nhận hôm nay là một ngày hoạt động. */
  markActiveToday() {
    const d = todayKey();
    return Store.update((s) => {
      if (!s.active_days.includes(d)) s.active_days.push(d);
    });
  },

  /**
   * Áp kết quả một câu trả lời: cập nhật XP, streak, cấp độ, thống kê bài.
   * Trả về { xp_delta, gold_delta, streak, level, leveled_up }.
   */
  applyAnswer({ itemId, unit, correct }) {
    let xp_delta = 0;
    let gold_delta = 0;
    let leveled_up = false;
    let prevLevel = Store.get().level;

    Store.update((s) => {
      const it = s.items[itemId] || { attempts: 0, correct: 0 };
      const firstTry = it.attempts === 0;
      it.attempts += 1;
      if (correct) it.correct += 1;
      s.items[itemId] = it;

      const u = s.units[String(unit)] || { opened: true, items_done: 0, correct: 0 };
      u.items_done += 1;
      if (correct) u.correct += 1;
      s.units[String(unit)] = u;

      if (correct) {
        xp_delta += RULES.XP_CORRECT;
        if (firstTry) xp_delta += RULES.XP_ITEM_FIRST_TRY;
        s.streak += 1;
        if (s.streak > s.streak_max) s.streak_max = s.streak;
        if (s.streak % RULES.STREAK_BONUS_EVERY === 0) {
          xp_delta += RULES.STREAK_BONUS_XP;
        }
      } else {
        xp_delta += RULES.XP_WRONG;
        s.streak = 0;
      }

      s.xp += xp_delta;
      s.gold += gold_delta;
      const newLevel = levelFor(s.xp);
      if (newLevel > s.level) {
        s.level = newLevel;
        leveled_up = true;
      }
    });

    const s = Store.get();
    return {
      xp_delta,
      gold_delta,
      streak: s.streak,
      level: s.level,
      leveled_up: leveled_up && s.level > prevLevel,
    };
  },

  addGold(n) {
    return Store.update((s) => { s.gold += n; });
  },

  addXP(n) {
    return Store.update((s) => {
      s.xp += n;
      s.level = levelFor(s.xp);
    });
  },

  /** Chỉ số phục vụ phân tích, tính ngay trên máy để hiển thị màn "Tiến độ". */
  metrics() {
    const s = Store.get();
    const items = Object.values(s.items);
    const attempts = items.reduce((a, b) => a + b.attempts, 0);
    const correct = items.reduce((a, b) => a + b.correct, 0);
    return {
      active_days: s.active_days.length,
      units_touched: Object.keys(s.units).length,
      items_attempted: items.length,
      total_attempts: attempts,
      accuracy: attempts ? correct / attempts : 0,
      streak_max: s.streak_max,
      xp: s.xp,
      gold: s.gold,
      level: s.level,
    };
  },

  reset() {
    state = blank();
    writeJSON(KEY, state);
    return state;
  },

  raw() {
    return JSON.parse(JSON.stringify(Store.get()));
  },
};
