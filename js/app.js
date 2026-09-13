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
      <h1>Hello! 👋</h1>
      <p style="color:var(--muted); margin-top:-8px;">
        This is study day <b>${daysActive}</b> for you. Keep building on it!
      </p>

      <div class="metrics-grid">
        <div class="metric-box">
          <span class="metric-val">${daysActive}</span>
          <span class="metric-lbl">Study days</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems}</span>
          <span class="metric-lbl">Items done</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems > 0 ? accuracyPct + '%' : '--'}</span>
          <span class="metric-lbl">Accuracy</span>
        </div>
      </div>
    </section>

    <!-- Today's quest -->
    <section class="quest-box">
      <h4>🎯 Today's quest</h4>
      <p>Practise 5 items on <strong>Grammar · Passive Voice</strong> to work on recognising the structure and building it yourself.</p>
      ${isQuestDone ? `
        <span style="color:var(--ok); font-weight:700; font-size:14.5px;">✓ Today's quest complete (+20 gold)</span>
      ` : `
        <a href="/practice/grammar/?g=g07" class="btn" style="min-height:38px; padding:6px 14px; font-size:14px;">Start now →</a>
      `}
    </section>

    <!-- Two main cards -->
    <section>
      <h2>Learning centre</h2>
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

    <!-- Footer -->
    <footer class="home-foot">
      <p>Materials follow the 2018 National Curriculum and contribute to the pathway towards Level 3 by the end of upper secondary school.</p>
      <p><a href="/Global_Success_10/">Teacher area · Lecture slides</a></p>
    </footer>
  `;
}
