// core/spine.js — GIAO DIỆN CÔNG KHAI DUY NHẤT của xương sống.
//
// HỢP ĐỒNG: màn hình chỉ được gọi Spine.*
// Màn hình KHÔNG được đụng vào localStorage, fetch, hay import trực tiếp
// store/logger/transport. Giữ đúng quy tắc này thì sau muốn đổi chỗ lưu dữ
// liệu (Sheet → Firebase chẳng hạn) chỉ phải sửa trong core/, không phải
// mở lại từng màn hình.

import { CONFIG, RULES } from './config.js';
import { Identity } from './identity.js';
import { Store } from './store.js';
import { Log } from './logger.js';
import { Transport } from './transport.js';
import { storageAvailable, downloadText, todayKey } from './util.js';

let ready = false;

export const Spine = {
  /** Gọi một lần khi trang tải xong. Trả về { ok, needIdentity, error? }. */
  async init() {
    if (!storageAvailable()) {
      return {
        ok: false,
        needIdentity: false,
        error: 'Trình duyệt đang chặn lưu dữ liệu. Em thử tắt chế độ ẩn danh rồi mở lại nhé.',
      };
    }
    Store.load();
    if (!Identity.id) return { ok: true, needIdentity: true };

    Log.boot();
    Store.markActiveToday();
    Transport.startAutoFlush();
    Transport.flush();
    ready = true;
    return { ok: true, needIdentity: false };
  },

  /** Màn hình nhập mã gọi hàm này. Trả về { ok, error? }. */
  async signIn(code) {
    const r = Identity.set(code);
    if (!r.ok) return r;
    Log.boot();
    Store.markActiveToday();
    Transport.startAutoFlush();
    ready = true;
    return { ok: true };
  },

  get id() { return Identity.id; },
  get classId() { return Identity.classId; },
  get state() { return Store.get(); },
  get metrics() { return Store.metrics(); },
  get pending() { return Transport.pending; },
  get isReady() { return ready; },

  // ── Ghi nhận hành vi ────────────────────────────────────────────────

  openModule(module, unit) {
    Log.event('module_open', { module, unit });
  },

  /** Gọi ngay khi câu hỏi hiện lên màn hình — bắt đầu bấm giờ. */
  viewItem(itemId, { module, unit } = {}) {
    Log.startTimer(itemId);
    Log.event('item_view', { module, unit, item_id: itemId });
  },

  /**
   * Gọi khi HS trả lời. Tự tính latency, tự cập nhật XP/streak/cấp độ.
   * Trả về kết quả để màn hình hiển thị hiệu ứng — nhớ hiện SAU khi
   * học sinh đã đọc xong phản hồi đúng/sai.
   */
  answerItem(itemId, { module, unit, response, correct }) {
    const latency = Log.takeLatency(itemId);
    const before = Store.get().items[itemId];
    const attempt_no = (before ? before.attempts : 0) + 1;
    const res = Store.applyAnswer({ itemId, unit, correct });

    Log.event('item_answer', {
      module, unit, item_id: itemId,
      response, correct,
      latency_ms: latency,
      attempt_no,
      xp_delta: res.xp_delta,
      streak_after: res.streak,
    });

    if (res.leveled_up) {
      Log.event('level_up', { extra: { level: res.level, xp: Store.get().xp } });
    }
    return res;
  },

  acceptQuest(questId) {
    Store.update((s) => {
      s.quests[questId] = { ...(s.quests[questId] || {}), accepted: true, date: todayKey() };
    });
    Log.event('quest_accept', { extra: { quest_id: questId } });
  },

  completeQuest(questId, { gold = RULES.GOLD_PER_QUEST, xp = 0 } = {}) {
    Store.update((s) => {
      s.quests[questId] = { ...(s.quests[questId] || {}), done: true };
      s.gold += gold;
    });
    if (xp) Store.addXP(xp);
    Log.event('quest_complete', {
      gold_delta: gold, xp_delta: xp, extra: { quest_id: questId },
    });
  },

  /**
   * Xưởng AI — Miền năng lực 6.
   * hasError: câu này CÓ lỗi cài sẵn hay không. Bắt buộc ghi lại, vì phải
   * tách riêng tỉ lệ đúng trên câu có lỗi và câu sạch khi phân tích.
   */
  aiEvalOpen(taskId, { kind, hasError }) {
    Log.startTimer(taskId);
    Log.event('ai_eval_open', {
      module: 'ai_forge', item_id: taskId, extra: { kind, has_error: !!hasError },
    });
  },

  aiEvalAnswer(taskId, { kind, hasError, correct, chosen, reason, category }) {
    const latency = Log.takeLatency(taskId);
    Log.event('ai_eval_answer', {
      module: 'ai_forge', item_id: taskId,
      correct, latency_ms: latency,
      extra: { kind, has_error: !!hasError, chosen, reason, category },
    });
  },

  submitArtifact(taskId, { unit, aiUse }) {
    Log.event('artifact_submit', {
      module: 'create', unit, item_id: taskId, extra: { ai_use: aiUse },
    });
  },

  purchase(itemKey, cost) {
    const s = Store.get();
    if (s.gold < cost) return { ok: false, error: 'Chưa đủ vàng' };
    Store.update((st) => { st.gold -= cost; });
    Log.event('shop_purchase', { gold_delta: -cost, extra: { item: itemKey } });
    return { ok: true };
  },

  errorShown(code, detail) {
    Log.event('error_shown', { extra: { code, detail } });
  },

  // ── Gửi dữ liệu ─────────────────────────────────────────────────────

  /** Ép gửi ngay. Trả về { sent, kept, ok }. */
  flush() {
    return Transport.flush();
  },

  /** Xem vài dòng đầu hàng đợi — chỉ dùng để gỡ lỗi. */
  peek(n = 3) {
    return Transport.peek(n);
  },

  helpOpen(topic) {
    Log.event('help_open', { extra: { topic } });
  },

  // ── Màn hình "Dữ liệu của tôi" ──────────────────────────────────────

  exportMyData() {
    const dump = {
      exported_at: new Date().toISOString(),
      identity: Identity.get(),
      state: Store.raw(),
      pending_events: Transport.peek(9999),
      app_version: CONFIG.APP_VERSION,
    };
    downloadText(`du-lieu-cua-toi-${Identity.id || 'chua-co-ma'}.json`, JSON.stringify(dump, null, 2));
    Log.event('data_export');
  },

  /** Xoá sạch dữ liệu trên máy. Gửi nốt log trước khi xoá. */
  async deleteMyData() {
    Log.event('data_delete');
    await Transport.flush();
    Store.reset();
    Transport.clear();
    Identity.clear();
    ready = false;
    return { ok: true };
  },

  /** Chỉ dùng khi gỡ lỗi. */
  _debug() {
    return {
      endpoint: CONFIG.ENDPOINT || '(chưa cấu hình)',
      identity: Identity.get(),
      pending: Transport.pending,
      queueHead: Transport.peek(3),
      metrics: Store.metrics(),
    };
  },
};
