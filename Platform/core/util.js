// core/util.js — tiện ích dùng chung, không phụ thuộc module nào khác.

export function uuid() {
  if (globalThis.crypto && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Dự phòng cho trình duyệt cũ trên điện thoại giá rẻ.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function nowISO() {
  return new Date().toISOString();
}

export function todayKey() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** Mô tả thiết bị ở mức thô — đủ để phân tích bất bình đẳng, không đủ để nhận dạng cá nhân. */
export function deviceTag() {
  const w = (window.screen && window.screen.width) || window.innerWidth || 0;
  const touch = navigator.maxTouchPoints > 0 || /Mobi|Android/i.test(navigator.userAgent);
  const kind = w > 0 && w < 768 ? 'mobile' : touch ? 'tablet' : 'desktop';
  return `${kind} ${w}px`;
}

export function debounce(fn, ms) {
  let t = null;
  return (...args) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

/** Đọc JSON từ localStorage, trả về fallback nếu hỏng — không bao giờ ném lỗi. */
export function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (_) {
    return fallback;
  }
}

/** Ghi JSON, trả về false nếu localStorage đầy hoặc bị chặn (chế độ ẩn danh). */
export function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (_) {
    return false;
  }
}

export function storageAvailable() {
  try {
    const k = '__dt_probe__';
    localStorage.setItem(k, '1');
    localStorage.removeItem(k);
    return true;
  } catch (_) {
    return false;
  }
}

export function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
