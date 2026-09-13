// content/loader.js — nạp học liệu JSON + cache ngoại tuyến.
//
// NGOẠI LỆ ĐƯỢC PHÉP: tệp này dùng fetch và localStorage. Nó xử lý HỌC LIỆU,
// không xử lý sự kiện. Xem DATA-DESIGN.md §10. Đừng "sửa" thành Spine.*.
// Tệp này KHÔNG được import bất cứ thứ gì trong core/.

const VER = 'c1.0.2';   // phải khớp CONTENT_VERSION trong core/config.js

export async function loadJSON(relPath) {
  const cleanPath = relPath.startsWith('/') ? relPath.slice(1) : relPath;
  const url = cleanPath.startsWith('content/') ? `/${cleanPath}` : `/content/${cleanPath}`;
  const cacheKey = `content:${cleanPath}:${VER}`;

  // Kiểm tra bộ nhớ đệm cục bộ
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (_) {}

  // Tải từ máy chủ
  try {
    // ?v= theo phiên bản: mỗi lần tăng CONTENT_VERSION là một URL mới, nên cả bộ đệm
    // HTTP của trình duyệt lẫn CDN (max-age=600) đều không trả lại tệp cũ. Thiếu nó,
    // máy tải trong 10 phút đầu sau deploy nhận JSON cũ rồi cất dưới khoá phiên bản
    // MỚI — và giữ mãi, vì khoá cache ở trên không bao giờ hết hạn.
    const res = await fetch(`${url}?v=${VER}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${url}`);
    }
    const data = await res.json();
    try {
      localStorage.setItem(cacheKey, JSON.stringify(data));
    } catch (_) {}
    return data;
  } catch (err) {
    console.error(`[loader] Could not load data from ${url}`, err);
    throw err;
  }
}

export async function manifest() {
  return loadJSON('manifest.json');
}

export async function schedules() {
  return loadJSON('schedules.json');
}

export function purgeOldCache() {
  try {
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('content:') && !k.endsWith(`:${VER}`)) {
        toRemove.push(k);
      }
    }
    for (const k of toRemove) {
      localStorage.removeItem(k);
    }
  } catch (_) {}
}

// DATA-DESIGN §10: xoá khoá học liệu mang phiên bản cũ khi khởi động. Hàm này có từ
// đầu nhưng chưa từng được gọi, nên mỗi lần tăng CONTENT_VERSION lại để thêm một bản
// sao học liệu nằm trong localStorage — chung quota với hàng đợi dữ liệu nghiên cứu.
// Chỉ đụng khoá bắt đầu bằng "content:"; khoá dt_* của xương sống không bị chạm.
purgeOldCache();
