// js/app.js — trang chủ: bảng điều khiển của học sinh.
//
// Theo thiết kế tham khảo ngày 13/09, trừ bốn thứ bỏ có chủ ý (AGENTS.md mục 13):
// bảng xếp hạng, ô góp ý tự do, ô ủng hộ, thẻ giới thiệu người biên soạn.
import { Portal } from '/js/progress.js';

const boot = await Portal.boot({ module: null, tab: 'home' });

if (boot.ok) {
  renderHome();
}

function renderHome() {
  const main = document.getElementById('main');
  if (!main) return;

  // Đúng tên khoá của Store.metrics(). Bản cũ đọc days_active và items_answered —
  // hai khoá không tồn tại — nên trang chủ luôn báo ngày 1, 0 câu, độ chính xác "--".
  const m = Portal.spine.metrics;
  const days = m.active_days;

  const questId = 'quest_daily_grammar';
  const isQuestDone = Portal.spine.state.quests?.[questId]?.done;

  main.innerHTML = `
    <div class="dash">
      <div class="dash-main">
        <div class="dash-hello">
          <h1>Welcome back! <span aria-hidden="true">👋</span></h1>
          <p>You have studied on <b>${days}</b> ${days === 1 ? 'day' : 'days'}. Pick up where you left off.</p>
        </div>

        <a class="banner" href="/practice/">
          <span class="banner-wm" aria-hidden="true">Aa</span>
          <span class="banner-eyebrow">Practice · Grade 10</span>
          <h2 class="banner-title">Grammar · Vocabulary · Listening · Writing · Tests</h2>
          <span class="banner-sub">Every section follows the 2018 National Curriculum.</span>
          <span class="banner-cta">Start practising →</span>
        </a>

        <a class="banner" href="/ai-logs/">
          <span class="banner-wm" aria-hidden="true">AI</span>
          <span class="banner-eyebrow">AI Error Log</span>
          <h2 class="banner-title">Can you spot what the AI got wrong?</h2>
          <span class="banner-sub">Read passages written by AI and find the error. Not every passage has one.</span>
          <span class="banner-cta banner-cta-gold">▶ Open AI Error Log</span>
        </a>

        ${isQuestDone ? `
          <div class="quest-card">
            <div class="quest-body">
              <span class="quest-eyebrow">🎯 Today's quest</span>
              <p class="quest-text">✓ Today's quest complete (+20 gold)</p>
            </div>
          </div>
        ` : `
          <a class="quest-card" href="/practice/grammar/?g=g07">
            <div class="quest-body">
              <span class="quest-eyebrow">🎯 Today's quest</span>
              <p class="quest-text">Practise 5 items on <strong>Grammar · Passive Voice</strong> to work on recognising the structure and building it yourself.</p>
            </div>
            <span class="quest-cta">Start now →</span>
          </a>
        `}

        <footer class="home-foot">
          <p>Materials follow the 2018 National Curriculum and contribute to the pathway towards Level 3 by the end of upper secondary school.</p>
          <p><a href="/Global_Success_10/">Teacher area · Lecture slides</a></p>
        </footer>
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
