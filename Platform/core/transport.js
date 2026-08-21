// core/transport.js — hàng đợi ngoại tuyến + gửi lô về Apps Script.
//
// NGUYÊN TẮC THIẾT KẾ: "gửi ít nhất một lần, máy chủ khử trùng lặp".
//
// Apps Script trả lời qua một lần chuyển hướng, nên đôi khi trình duyệt
// không đọc được phản hồi dù dữ liệu ĐÃ ghi thành công. Nếu lúc đó ta xoá
// hàng đợi thì mất dữ liệu; nếu ta giữ lại thì có thể gửi trùng.
// Cách xử lý: LUÔN giữ lại khi không chắc, và để máy chủ loại trùng theo
// event_id. Kết quả cuối cùng là mỗi sự kiện vào Sheet đúng một lần.

import { CONFIG } from './config.js';
import { readJSON, writeJSON } from './util.js';

const QKEY = 'dt_queue_v1';

let queue = null;
let sending = false;
let retryDelay = CONFIG.RETRY_BASE_MS;
let timer = null;

function load() {
  if (!queue) queue = readJSON(QKEY, []);
  return queue;
}

function save() {
  if (!writeJSON(QKEY, queue)) {
    // localStorage đầy: bỏ nửa cũ nhất còn hơn kẹt cứng không ghi được gì.
    queue = queue.slice(Math.floor(queue.length / 2));
    writeJSON(QKEY, queue);
  }
}

export const Transport = {
  /** Số sự kiện đang chờ gửi — hiện lên màn hình gỡ lỗi. */
  get pending() {
    return load().length;
  },

  configured() {
    return typeof CONFIG.ENDPOINT === 'string' && CONFIG.ENDPOINT.startsWith('http');
  },

  enqueue(event) {
    load();
    if (queue.length >= CONFIG.QUEUE_MAX) {
      // Ghi lại chính việc mất dữ liệu — im lặng bỏ là điều tệ nhất.
      queue.shift();
      queue.push({
        ...event,
        event_type: 'queue_dropped',
        extra: JSON.stringify({ reason: 'queue_full', max: CONFIG.QUEUE_MAX }),
      });
    } else {
      queue.push(event);
    }
    save();
    if (queue.length >= CONFIG.FLUSH_AT_COUNT) Transport.flush();
  },

  /**
   * Gửi lô đầu hàng đợi. Trả về { sent, kept, ok }.
   * Không bao giờ ném lỗi ra ngoài — mất mạng là chuyện bình thường.
   */
  async flush() {
    load();
    if (sending || queue.length === 0) return { sent: 0, kept: queue.length, ok: true };
    if (!Transport.configured()) return { sent: 0, kept: queue.length, ok: false };

    sending = true;
    const batch = queue.slice(0, 50);
    const payload = JSON.stringify({
      schema_version: CONFIG.SCHEMA_VERSION,
      app_version: CONFIG.APP_VERSION,
      events: batch,
    });

    try {
      // Content-Type text/plain => yêu cầu "đơn giản", trình duyệt không gửi
      // preflight OPTIONS (Apps Script không trả lời được preflight).
      const res = await fetch(CONFIG.ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: payload,
        redirect: 'follow',
      });
      const data = await res.json();
      const accepted = new Set(data && data.accepted ? data.accepted : []);
      if (accepted.size === 0) throw new Error('server accepted nothing');

      queue = queue.filter((e) => !accepted.has(e.event_id));
      save();
      retryDelay = CONFIG.RETRY_BASE_MS;
      sending = false;
      return { sent: accepted.size, kept: queue.length, ok: true };
    } catch (_) {
      // Không rõ đã tới nơi hay chưa => GIỮ LẠI. Máy chủ sẽ khử trùng lặp.
      sending = false;
      retryDelay = Math.min(retryDelay * 2, CONFIG.RETRY_MAX_MS);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => Transport.flush(), retryDelay);
      return { sent: 0, kept: queue.length, ok: false };
    }
  },

  /**
   * Gửi lúc rời trang. sendBeacon chạy được cả khi tab đang đóng,
   * nhưng không đọc được phản hồi — nên vẫn giữ nguyên hàng đợi.
   */
  flushOnExit() {
    load();
    if (queue.length === 0 || !Transport.configured()) return;
    try {
      const blob = new Blob(
        [JSON.stringify({
          schema_version: CONFIG.SCHEMA_VERSION,
          app_version: CONFIG.APP_VERSION,
          events: queue.slice(0, 50),
        })],
        { type: 'text/plain;charset=utf-8' }
      );
      navigator.sendBeacon(CONFIG.ENDPOINT, blob);
    } catch (_) { /* rời trang rồi, không làm gì thêm được */ }
  },

  startAutoFlush() {
    setInterval(() => Transport.flush(), CONFIG.FLUSH_EVERY_MS);
    window.addEventListener('online', () => Transport.flush());
  },

  peek(n = 5) {
    return load().slice(0, n);
  },

  clear() {
    queue = [];
    save();
  },
};
