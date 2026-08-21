// core/logger.js — sinh dòng log đúng lược đồ và quản lý phiên học.
//
// Mỗi sự kiện là MỘT dòng trong Google Sheet. Thứ tự trường ở đây phải
// khớp tuyệt đối với mảng COLS trong server/Code.gs.

import { CONFIG, EVENT_TYPES } from './config.js';
import { uuid, nowISO, deviceTag, readJSON, writeJSON } from './util.js';
import { Identity } from './identity.js';
import { Transport } from './transport.js';

const SKEY = 'dt_session_v1';

let session = null;
const openItems = new Map();   // itemId -> thời điểm hiện câu, để tính latency

let sessionIsNew = false;

function newSession() {
  session = { id: uuid(), started: Date.now(), last: Date.now() };
  sessionIsNew = true;
  writeJSON(SKEY, session);
  return session;
}

function currentSession() {
  if (!session) session = readJSON(SKEY, null);
  const now = Date.now();
  if (!session || now - session.last > CONFIG.SESSION_IDLE_MS) {
    if (session) {
      // Phiên cũ đã quá hạn: đóng sổ trước khi mở phiên mới.
      emit('session_end', { extra: { reason: 'idle_timeout' } }, session);
    }
    return newSession();
  }
  session.last = now;
  writeJSON(SKEY, session);
  return session;
}

/** Dựng một dòng log đầy đủ rồi đẩy vào hàng đợi. */
function emit(type, fields = {}, forcedSession = null) {
  if (!EVENT_TYPES.includes(type)) {
    console.warn(`[spine] event_type không hợp lệ: "${type}" — bỏ qua.`);
    return null;
  }
  const s = forcedSession || currentSession();
  const row = {
    event_id: uuid(),
    ts_client: nowISO(),
    pseudo_id: Identity.id || '',
    class_id: Identity.classId || '',
    session_id: s.id,
    event_type: type,
    module: fields.module ?? '',
    unit: fields.unit ?? '',
    item_id: fields.item_id ?? '',
    response: fields.response ?? '',
    correct: fields.correct === true ? 1 : fields.correct === false ? 0 : '',
    latency_ms: fields.latency_ms ?? '',
    attempt_no: fields.attempt_no ?? '',
    xp_delta: fields.xp_delta ?? '',
    gold_delta: fields.gold_delta ?? '',
    streak_after: fields.streak_after ?? '',
    device: deviceTag(),
    app_version: CONFIG.APP_VERSION,
    schema_version: CONFIG.SCHEMA_VERSION,
    // Mọi trường riêng của từng dạng bài đi vào đây dưới dạng JSON.
    // Nhờ vậy thêm dạng bài mới KHÔNG cần đổi lược đồ Sheet.
    extra: fields.extra ? JSON.stringify(fields.extra) : '',
  };
  Transport.enqueue(row);
  return row;
}

export const Log = {
  event: emit,

  /** Gọi một lần lúc khởi động. */
  boot() {
    const s = currentSession();
    // Chỉ ghi session_start khi thật sự vừa mở phiên mới, không ghi lại
    // mỗi lần học sinh chuyển trang trong cùng một phiên.
    if (sessionIsNew) {
      sessionIsNew = false;
      emit('session_start', { extra: { ua_mobile: /Mobi|Android/i.test(navigator.userAgent) } }, s);
    }
    // Đóng phiên khi HS chuyển tab hoặc tắt trình duyệt.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        emit('session_end', { extra: { reason: 'hidden' } });
        Transport.flushOnExit();
      }
    });
    window.addEventListener('pagehide', () => {
      emit('session_end', { extra: { reason: 'pagehide' } });
      Transport.flushOnExit();
    });
  },

  /** Bấm giờ: gọi khi câu hỏi hiện ra. */
  startTimer(itemId) {
    openItems.set(itemId, performance.now());
  },

  /** Lấy và xoá đồng hồ của một câu. Trả về mili giây, hoặc '' nếu chưa bấm. */
  takeLatency(itemId) {
    const t0 = openItems.get(itemId);
    if (t0 == null) return '';
    openItems.delete(itemId);
    return Math.round(performance.now() - t0);
  },
};
