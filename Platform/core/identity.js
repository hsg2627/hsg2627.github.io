// core/identity.js — mã định danh giả. KHÔNG BAO GIỜ lưu tên thật ở đây.
//
// Bảng tra "mã ↔ tên học sinh" do giáo viên giữ riêng, ngoài hệ thống,
// ngoài Google Sheet. Đây là yêu cầu đạo đức khi nghiên cứu trên trẻ vị thành niên.

import { CONFIG } from './config.js';
import { readJSON, writeJSON } from './util.js';

const KEY = 'dt_identity_v1';

let cache = null;

function load() {
  if (cache) return cache;
  cache = readJSON(KEY, null);
  return cache;
}

export const Identity = {
  /** Trả về { pseudo_id, class_id, seat, joined_at } hoặc null nếu chưa nhập. */
  get() {
    return load();
  },

  get id() {
    const v = load();
    return v ? v.pseudo_id : null;
  },

  get classId() {
    const v = load();
    return v ? v.class_id : null;
  },

  /** Kiểm tra định dạng mà không lưu — dùng để bật/tắt nút trong màn hình nhập mã. */
  validate(raw) {
    const s = String(raw || '').trim().toUpperCase();
    const m = CONFIG.ID_PATTERN.exec(s);
    if (!m) {
      return {
        ok: false,
        error: `Mã chưa đúng dạng. Ví dụ đúng: ${CONFIG.ID_EXAMPLE}`,
      };
    }
    return { ok: true, pseudo_id: s, class_id: m[2] + m[3], seat: m[4] };
  },

  /** Lưu mã một lần. Trả về { ok, error? }. */
  set(raw) {
    const v = Identity.validate(raw);
    if (!v.ok) return v;
    const rec = {
      pseudo_id: v.pseudo_id,
      class_id: v.class_id,
      seat: v.seat,
      joined_at: new Date().toISOString(),
    };
    if (!writeJSON(KEY, rec)) {
      return { ok: false, error: 'Máy không cho lưu dữ liệu. Em thử tắt chế độ ẩn danh giúp cô nhé.' };
    }
    cache = rec;
    return { ok: true };
  },

  clear() {
    cache = null;
    try { localStorage.removeItem(KEY); } catch (_) {}
  },
};
