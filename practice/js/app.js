// practice/js/app.js — Trung tâm Luyện tập
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
    <h1>📖 Trung tâm Luyện tập</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Chọn một nội dung bên dưới để bắt đầu luyện tập và củng cố kiến thức Tiếng Anh lớp 10.
    </p>

    <div class="cards" style="margin-top:20px;">
      ${PRACTICE_CARDS.map(card => `
        <a class="card" href="${card.href}">
          <span class="ico">${card.ico}</span>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </a>
      `).join('')}
    </div>
  `;
}
