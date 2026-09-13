// practice/js/app.js — Trung tâm Luyện tập, cùng bố cục hai cột với trang chủ.
import { Portal } from '/js/progress.js';
import { PRACTICE_CARDS } from '/js/data.js';

const boot = await Portal.boot({ module: null, tab: 'practice' });

if (boot.ok) {
  renderPracticeHub();
}

function renderPracticeHub() {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    <div class="dash">
      <div class="dash-main">
        <div class="banner banner-static">
          <span class="banner-wm" aria-hidden="true">10</span>
          <span class="banner-eyebrow">Practice Centre</span>
          <h1 class="banner-title">Grade 10 English practice</h1>
          <span class="banner-sub">Pick a section below to start practising and consolidating your Grade 10 English.</span>
        </div>

        <div class="cards cards-mod">
          ${PRACTICE_CARDS.map((card) => `
            <a class="card" href="${card.href}">
              <span class="ico" aria-hidden="true">${card.ico}</span>
              <h3>${card.title}</h3>
              <p>${card.desc}</p>
              <span class="card-go" aria-hidden="true">→</span>
            </a>
          `).join('')}
        </div>
      </div>

      <aside class="dash-side" aria-label="Your progress">
        ${typeof Portal.sidebarHTML === 'function' ? Portal.sidebarHTML() : ''}
      </aside>
    </div>
  `;

  // Deploy xong, trình duyệt có thể còn progress.js cũ trong cache (Pages: max-age=600):
  // thiếu hàm thì bỏ cột phải, không để lỗi làm trắng cả trang.
  if (typeof Portal.bindSidebar === 'function') Portal.bindSidebar(main);
}
