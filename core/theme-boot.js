// core/theme-boot.js — áp nền sáng/tối ĐỒNG BỘ trong <head>, trước khi trang được vẽ.
//
// Script thường, KHÔNG phải module, và phải đứng TRƯỚC <link> tới css/style.css.
// Nạp muộn hơn thì trang vẽ theo nền của máy trước rồi mới đổi: em đã chọn nền
// tối sẽ thấy trang chớp trắng mỗi lần mở.
//
// Chỉ ĐỌC. Ghi lựa chọn là việc của core/theme.js, gọi qua Spine.setTheme().
// Chưa chọn gì thì không gắn data-theme, và CSS tự theo prefers-color-scheme.
(function () {
  try {
    var t = localStorage.getItem('dt_theme_v1');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    }
  } catch (e) {
    // Máy chặn lưu trữ: cứ theo nền của máy.
  }
})();
