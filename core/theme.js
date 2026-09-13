// core/theme.js — lựa chọn nền sáng/tối.
//
// KHÔNG phải dữ liệu nghiên cứu: không ghi log, không nằm trong dt_state_v1, và
// nút "Xoá dữ liệu học tập" không xoá nó. Màn hình đổi nền qua Spine.setTheme(),
// không gọi thẳng tệp này (hợp đồng ở đầu spine.js).
//
// Cặp với core/theme-boot.js: tệp kia áp lựa chọn trước khi trang vẽ, tệp này ghi.

const KEY = 'dt_theme_v1';

function systemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export const Theme = {
  /** 'light' | 'dark' | null. null = chưa chọn, đang theo nền của máy. */
  get choice() {
    try {
      const t = localStorage.getItem(KEY);
      return t === 'light' || t === 'dark' ? t : null;
    } catch (_) {
      return null;
    }
  },

  /** Nền đang hiển thị thật: 'light' | 'dark'. */
  get current() {
    return Theme.choice || systemTheme();
  },

  /** Đổi nền và nhớ lựa chọn. Máy chặn lưu trữ thì vẫn đổi cho lượt xem này. */
  set(t) {
    if (t !== 'light' && t !== 'dark') return Theme.current;
    document.documentElement.setAttribute('data-theme', t);
    try {
      localStorage.setItem(KEY, t);
    } catch (_) {}
    return t;
  },
};
