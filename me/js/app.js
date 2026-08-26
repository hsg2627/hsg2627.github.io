// me/js/app.js — Màn hình "Dữ liệu của tôi"
import { Portal } from '/js/progress.js';

const boot = await Portal.boot({ module: 'me', tab: 'me' });

if (boot.ok) {
  renderMe();
}

function renderMe() {
  const main = document.getElementById('main');
  if (!main) return;

  const spine = Portal.spine;
  const metrics = spine.metrics;
  const state = spine.state;
  const pseudoId = spine.id || 'Chưa đăng nhập';
  const pending = spine.pending;

  const totalItems = metrics.items_answered || 0;
  const accuracyPct = Math.round((metrics.accuracy || 0) * 100);

  main.innerHTML = `
    <h1>👤 Dữ liệu của tôi</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Mã học sinh của em: <strong style="color:var(--navy); font-size:1.05rem;">${pseudoId}</strong>
    </p>

    <!-- Khối 1: Tiến độ học tập -->
    <section class="panel">
      <h2 style="margin-top:0;">📊 Thống kê học tập</h2>
      <div class="metrics-grid">
        <div class="metric-box">
          <span class="metric-val">${state.level || 1}</span>
          <span class="metric-lbl">Cấp độ</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${state.xp || 0}</span>
          <span class="metric-lbl">Tổng XP</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${state.streak_max || 0}</span>
          <span class="metric-lbl">Chuỗi đúng kỷ lục</span>
        </div>
      </div>
      <div class="metrics-grid" style="margin-top:8px;">
        <div class="metric-box">
          <span class="metric-val">${metrics.days_active || 1}</span>
          <span class="metric-lbl">Ngày hoạt động</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems}</span>
          <span class="metric-lbl">Câu đã trả lời</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems > 0 ? accuracyPct + '%' : '--'}</span>
          <span class="metric-lbl">Độ chính xác</span>
        </div>
      </div>
    </section>

    <!-- Khối 2: Trạng thái đồng bộ -->
    <section class="panel">
      <h2 style="margin-top:0;">📡 Trạng thái đồng bộ</h2>
      <p style="font-size:15px; margin-bottom:12px;">
        Số dòng dữ liệu đang chờ gửi lên máy chủ: <strong id="pending-count" style="color:var(--navy); font-size:1.1rem;">${pending}</strong>
      </p>
      <div class="btn-row">
        <button id="btn-flush" class="btn" ${pending === 0 ? 'disabled' : ''}>
          Gửi ngay lên máy chủ
        </button>
      </div>
      <p style="font-size:12.5px; color:var(--muted); margin-top:8px;">
        Dữ liệu sẽ tự động gửi khi có kết nối mạng. Nếu sắp tắt máy hoặc đổi thiết bị, em có thể bấm nút này để gửi ngay.
      </p>
    </section>

    <!-- Khối 3: Quyền riêng tư & Dữ liệu của em -->
    <section class="panel">
      <h2 style="margin-top:0;">🔒 Quyền của em</h2>
      <p style="font-size:15px;">
        Em có toàn quyền tải về bản sao tiến độ hoặc xoá thông tin học tập lưu trên thiết bị này.
      </p>
      <div class="btn-row">
        <button id="btn-export" class="btn ghost">
          📥 Tải dữ liệu của tôi (.json)
        </button>
        <button id="btn-delete" class="btn danger">
          🗑️ Xoá dữ liệu học tập của tôi
        </button>
      </div>
      <p style="font-size:12px; color:var(--muted); margin-top:12px; line-height:1.45;">
        Nút này xoá tiến độ học và mã của em trên máy này. Số liệu thống kê ẩn danh mà trang dùng để biết có bao nhiêu người vào học thì không xoá được từ đây — em hỏi cô nếu muốn biết thêm.
      </p>
    </section>
  `;

  document.getElementById('btn-flush')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-flush');
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = 'Đang gửi...';
    const res = await spine.flush();
    Portal.renderHud();
    Portal.toast(res.sent > 0 ? `Đã gửi thành công ${res.sent} sự kiện!` : 'Đã đồng bộ đầy đủ!');
    renderMe();
  });

  document.getElementById('btn-export')?.addEventListener('click', () => {
    spine.exportMyData();
    Portal.toast('Đang tải tệp dữ liệu...');
  });

  document.getElementById('btn-delete')?.addEventListener('click', () => {
    const ok = confirm(
      'Em có chắc chắn muốn xoá toàn bộ dữ liệu học tập và mã định danh trên máy này không?\n\n' +
      'Tiến độ trên máy sẽ về ban đầu. Em sẽ cần nhập lại mã phiếu để tiếp tục học.'
    );
    if (ok) {
      spine.deleteMyData();
      location.href = '/';
    }
  });
}
