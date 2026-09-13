// content/loader.js — nạp học liệu JSON + cache ngoại tuyến.
//
// NGOẠI LỆ ĐƯỢC PHÉP: tệp này dùng fetch và localStorage. Nó xử lý HỌC LIỆU,
// không xử lý sự kiện. Xem DATA-DESIGN.md §10. Đừng "sửa" thành Spine.*.
// Tệp này KHÔNG được import bất cứ thứ gì trong core/.

const VER = 'c1.0.1';   // phải khớp CONTENT_VERSION trong core/config.js

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
    const res = await fetch(url);
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
