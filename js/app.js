// js/app.js — trang chủ: bảng điều khiển của học sinh.
//
// Bốn khối đúng thứ tự SITE-SPEC §9.1: lời chào + ba con số → nhiệm vụ hôm nay → hai thẻ
// lớn → chân trang. Cột phải chỉ còn thẻ "Your practice", vì ba con số đã ở khối 1.
// Bỏ có chủ ý (AGENTS.md mục 13): bảng xếp hạng, ô góp ý tự do, ô ủng hộ, thẻ giới thiệu
// người biên soạn, chuỗi ngày học.
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const boot = await Portal.boot({ module: null, tab: 'home' });

if (boot.ok) {
  await renderHome();
}

async function renderHome() {
  const main = document.getElementById('main');
  if (!main) return;

  // Đúng tên khoá của Store.metrics(). Bản cũ đọc days_active và items_answered —
  // hai khoá không tồn tại — nên trang chủ luôn báo ngày 1, 0 câu, độ chính xác "--".
  const m = Portal.spine.metrics;
  const acc = m.total_attempts ? Math.round(m.accuracy * 100) + '%' : '—';

  // Spine cũ còn trong cache (Pages: max-age=600) chưa có todayQuest: bỏ khối nhiệm vụ,
  // đừng để lỗi làm trắng cả trang.
  const quest = Portal.spine.todayQuest || null;
  let questTitle = quest ? quest.unit : '';
  if (quest) {
    try {
      const mf = await manifest();
      const mod = (mf.modules || []).find((x) => x.id === quest.unit);
      if (mod && mod.title) questTitle = mod.title;
      // Cùng tên level với trang Ngữ pháp (content/knowledge-map.json); Level 14 có hai module nên
      // thêm tên module. Nạp bằng loadJSON, không import hàm mới — lý do ở practice/grammar/js/app.js.
      const km = await loadJSON('knowledge-map.json').catch(() => null);
      const level = (km?.grammar?.levels || []).find((lv) => lv.modules.includes(quest.unit));
      if (level) questTitle = `Level ${level.level} · ${level.title}${level.modules.length > 1 && mod ? ` — ${mod.title}` : ''}`;
    } catch (_) {
      // Mất mạng ở lần mở đầu tiên: hiện mã bài thay cho tên, nhiệm vụ vẫn làm được.
    }
  }

  main.innerHTML = `
    <div class="dash">
      <div class="dash-main">
        <div class="dash-hello">
          <h1>Welcome back! <span aria-hidden="true">👋</span></h1>
          <p>Pick up where you left off.</p>
          <ul class="hello-stats">
            <li><b>${m.active_days}</b> ${m.active_days === 1 ? 'study day' : 'study days'}</li>
            <li><b>${m.items_attempted}</b> ${m.items_attempted === 1 ? 'item tried' : 'items tried'}</li>
            <li><b>${acc}</b> accuracy</li>
          </ul>
        </div>

        ${quest ? questCard(quest, questTitle) : ''}

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

        <footer class="home-foot">
          <p>Materials follow the 2018 National Curriculum and contribute to the pathway towards Level 3 by the end of upper secondary school.</p>
          <p><a href="/Global_Success_10/">Teacher area · Lecture slides</a></p>
        </footer>
      </div>

      <aside class="dash-side" aria-label="Your progress">
        ${typeof Portal.sidebarHTML === 'function' ? Portal.sidebarHTML({ overview: false }) : ''}
      </aside>
    </div>
  `;

  const link = document.getElementById('quest-link');
  if (link && quest) {
    // Nhận nhiệm vụ khi em bấm thẻ: ghi quest_accept (một lần mỗi ngày) trước khi chuyển trang.
    link.addEventListener('click', () => Portal.spine.acceptQuest(quest.id, { unit: quest.unit }));
  }

  // Deploy xong, trình duyệt có thể còn progress.js cũ trong cache (Pages: max-age=600):
  // thiếu hàm thì bỏ cột phải, không để lỗi làm trắng cả trang.
  if (typeof Portal.bindSidebar === 'function') Portal.bindSidebar(main);
}

/** Thẻ nhiệm vụ: chưa làm / đang làm (có thanh tiến độ) / đã xong. */
function questCard(q, title) {
  if (q.done) {
    return `
        <div class="quest-card is-done">
          <div class="quest-body">
            <span class="quest-eyebrow">🎯 Today's quest</span>
            <p class="quest-text">✓ Done: ${q.target} items on <strong>Grammar · ${title}</strong>. +${q.gold} gold</p>
          </div>
        </div>`;
  }
  const pct = Math.round((q.progress / q.target) * 100);
  return `
        <a class="quest-card" id="quest-link" href="/practice/grammar/?g=${q.unit}">
          <div class="quest-body">
            <span class="quest-eyebrow">🎯 Today's quest</span>
            <p class="quest-text">Practise ${q.target} different items on <strong>Grammar · ${title}</strong>.</p>
            <span class="quest-progress">
              <span class="quest-bar" aria-hidden="true"><i style="width:${pct}%"></i></span>
              <span>${q.progress}/${q.target} done</span>
            </span>
          </div>
          <span class="quest-cta">${q.progress > 0 ? 'Continue →' : 'Start →'}</span>
        </a>`;
}
