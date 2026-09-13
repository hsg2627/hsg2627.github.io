// core/quest.js — nhiệm vụ hôm nay (SITE-SPEC §9.1): MỘT việc mỗi ngày.
//
// Cả lớp nhận CÙNG một bài trong cùng một ngày: xoay vòng các bài Ngữ pháp của học kỳ
// hiện tại (CONFIG.CURRENT_TERM) theo số ngày, nên số liệu so sánh được giữa các em.
// Xong khi đã trả lời RULES.QUEST_TARGET câu KHÁC NHAU của bài đó trong ngày — làm lại
// một câu không tính hai lần.
//
// Không đồng hồ đếm ngược (§5.10), không phạt khi bỏ ngày, không lấy Xưởng AI: game hoá
// thứ đang được đo ở Miền 6 là làm hỏng chính phép đo.
//
// Toàn hàm thuần, không đụng localStorage hay log — spine.js gọi chúng bên trong
// Store.update() rồi mới ghi sự kiện.

import { CONFIG, RULES } from './config.js';

function localDateKey(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/**
 * Nhiệm vụ của một ngày: { id, module, unit, target }.
 * null nếu học kỳ hiện tại không có bài nào trong QUEST_POOL.
 */
export function questFor(date = new Date()) {
  const pool = (CONFIG.QUEST_POOL || {})[CONFIG.CURRENT_TERM] || [];
  if (!pool.length) return null;
  // Đếm ngày theo lịch ĐỊA PHƯƠNG, không theo mốc UTC: cả lớp cùng đổi bài lúc nửa đêm.
  const dayNo = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  return {
    id: 'daily-' + localDateKey(date),
    module: 'grammar',
    unit: pool[dayNo % pool.length],
    target: RULES.QUEST_TARGET,
  };
}

/**
 * Ghi một câu trả lời vào tiến độ nhiệm vụ. Sửa state TẠI CHỖ — gọi bên trong
 * Store.update(). Trả về true đúng lúc câu này làm nhiệm vụ đủ chỉ tiêu mà chưa được
 * đánh dấu xong; người gọi phải completeQuest() ngay sau đó.
 */
export function recordQuestAnswer(state, quest, { module, unit, itemId }) {
  if (!quest || module !== quest.module || String(unit) !== quest.unit) return false;
  if (!state.quests || typeof state.quests !== 'object') state.quests = {};
  const rec = state.quests[quest.id] || {};
  if (rec.done) return false;
  const items = Array.isArray(rec.items) ? rec.items.slice() : [];
  if (!items.includes(itemId)) items.push(itemId);
  state.quests[quest.id] = { ...rec, unit: quest.unit, items };
  return items.length >= quest.target;
}
