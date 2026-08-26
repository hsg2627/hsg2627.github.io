// js/app.js — Logic trang chủ
import { Portal } from '/js/progress.js';
import { HOME_CARDS } from '/js/data.js';

const boot = await Portal.boot({ module: null, tab: 'home' });

if (boot.ok) {
  renderHome();
}

function renderHome() {
  const main = document.getElementById('main');
  if (!main) return;

  const metrics = Portal.spine.metrics;
  const daysActive = metrics.days_active || 1;
  const totalItems = metrics.items_answered || 0;
  const accuracyPct = Math.round((metrics.accuracy || 0) * 100);

  const questId = 'quest_daily_grammar';
  const state = Portal.spine.state;
  const isQuestDone = state.quests?.[questId]?.done;

  main.innerHTML = `
    <section>
      <h1>Chào em! 👋</h1>
      <p style="color:var(--muted); margin-top:-8px;">
        Hôm nay là ngày học thứ <b>${daysActive}</b> của em. Cùng tiếp tục tích lũy kiến thức nhé!
      </p>

      <div class="metrics-grid">
        <div class="metric-box">
          <span class="metric-val">${daysActive}</span>
          <span class="metric-lbl">Ngày học</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems}</span>
          <span class="metric-lbl">Câu đã làm</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems > 0 ? accuracyPct + '%' : '--'}</span>
          <span class="metric-lbl">Độ chính xác</span>
        </div>
      </div>
    </section>

    <!-- Nhiệm vụ hôm nay -->
    <section class="quest-box">
      <h4>🎯 Nhiệm vụ hôm nay</h4>
      <p>Luyện tập 5 câu <strong>Ngữ pháp · Câu bị động (Passive Voice)</strong> để rèn kỹ năng nhận biết và cấu trúc câu.</p>
      ${isQuestDone ? `
        <span style="color:var(--ok); font-weight:700; font-size:14.5px;">✓ Đã hoàn thành nhiệm vụ hôm nay (+20 vàng)</span>
      ` : `
        <a href="/practice/grammar/?g=g07" class="btn" style="min-height:38px; padding:6px 14px; font-size:14px;">Bắt đầu ngay →</a>
      `}
    </section>

    <!-- Hai thẻ lớn -->
    <section>
      <h2>Trung tâm học tập</h2>
      <div class="cards">
        ${HOME_CARDS.map(card => `
          <a class="card" href="${card.href}">
            <span class="ico">${card.ico}</span>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Chân trang -->
    <footer class="home-foot">
      <p>Học liệu bám Chương trình GDPT 2018, góp phần vào lộ trình đạt Bậc 3 khi kết thúc THPT.</p>
      <p><a href="/Global_Success_10/">Khu vực giáo viên · Bài giảng trình chiếu</a></p>
    </footer>
  `;
}
