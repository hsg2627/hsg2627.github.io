// me/js/app.js — Màn hình "Dữ liệu của tôi"
import { Portal } from '/js/progress.js';

const BUG_LABEL = {
  key:  'Đáp án sai',
  text: 'Tiếng Anh hỏng',
  app:  'Trang chạy sai',
};

function esc(t) {
  return String(t ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

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
  const bugs = spine.myBugReports();

  // Gom thành luồng theo từng bài, trong luồng thì cũ trước mới sau — đọc như
  // một cuộc trò chuyện chứ không phải một chồng phiếu rời.
  const threads = [];
  const byItem = {};
  for (const b of bugs) {
    if (!byItem[b.item_id]) {
      byItem[b.item_id] = {
        itemId: b.item_id, unit: b.unit || '', itemCorrect: !!b.item_correct, msgs: [],
      };
      threads.push(byItem[b.item_id]);
    }
    byItem[b.item_id].msgs.unshift(b);
  }

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

    <!-- Khối 3: Hộp thư báo lỗi -->
    <section class="panel">
      <h2 style="margin-top:0;">📮 Hộp thư của em</h2>
      <p style="font-size:14.5px; color:var(--muted); margin:-4px 0 14px; line-height:1.5;">
        Những lỗi em phát hiện được trong học liệu do AI viết. Em gửi bao nhiêu thư
        cũng <strong>không ảnh hưởng điểm</strong> — đây là việc của người kiểm thử,
        không phải xin phúc khảo.
      </p>
      ${bugs.length === 0 ? `
        <p style="font-size:14.5px; color:var(--muted); margin:0;">
          Em chưa nhắn tin nào. Khi làm Xưởng AI, nếu thấy đáp án chưa đúng hoặc câu
          tiếng Anh nghe kỳ, bấm <strong>💬 Nhắn cho cô về bài này</strong>
          ở cuối phần phản hồi nhé.
        </p>
      ` : `
        <p style="font-size:14.5px; margin:0 0 14px;">
          Em đã nhắn <strong style="color:var(--navy);">${bugs.length}</strong> tin
          về <strong style="color:var(--navy);">${threads.length}</strong> bài.
        </p>
        ${threads.map(t => `
          <div class="thread">
            <div class="thread-head">
              <strong>${esc(t.itemId)}</strong>
              <span>${esc(t.unit)}${t.itemCorrect ? ' · em đã làm đúng bài này' : ''}</span>
            </div>
            ${t.msgs.map(b => `
              <div class="msg from-me">
                <span class="msg-tag">${esc(BUG_LABEL[b.bug_type] || 'Khác')}</span>${esc(b.reason)}
                <span class="msg-meta">${new Date(b.at).toLocaleString('vi-VN', {
                  day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit',
                })} · ✓ đã ghi</span>
              </div>
            `).join('')}
          </div>
        `).join('')}
      `}
    </section>

    <!-- Khối 4: Quyền riêng tư & Dữ liệu của em -->
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
