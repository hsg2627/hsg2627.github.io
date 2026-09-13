// practice/grammar/js/app.js — Module Ngữ pháp
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const gid = params.get('g');

const boot = await Portal.boot({ module: 'grammar', unit: gid, tab: 'practice' });

if (boot.ok) {
  if (!gid) {
    renderList();
  } else {
    renderDrill(gid);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Practice', '/practice/')}
    <h1>📐 14 Grade 10 Grammar Topics</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      The core grammar topics of the 2018 National Curriculum.
    </p>
    <div id="grammar-list-container" class="cards" style="margin-top:20px;">
      <p style="color:var(--muted);">Loading the topic list…</p>
    </div>
  `;

  try {
    const mf = await manifest();
    const grammarModules = mf.modules.filter(m => m.kind === 'grammar');
    const container = document.getElementById('grammar-list-container');
    if (!container) return;

    container.innerHTML = grammarModules.map((m, idx) => `
      <a class="card" href="/practice/grammar/?g=${m.id}">
        <span class="ico">📝</span>
        <h3>${idx + 1}. ${m.title}</h3>
        <div class="meta">
          <span>Term: <strong>${m.semester}</strong></span>
          <span>Curriculum item: <strong>${m.grammar?.join(', ') || ''}</strong></span>
        </div>
      </a>
    `).join('');
  } catch (err) {
    const container = document.getElementById('grammar-list-container');
    if (container) {
      container.innerHTML = Portal.empty('The topic list could not be loaded. Check your connection and try again.');
    }
  }
}

async function renderDrill(moduleGid) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Grammar topics', '/practice/grammar/')}
    <div id="drill-container">
      <p style="color:var(--muted);">Loading exercises…</p>
    </div>
  `;

  try {
    const data = await loadJSON(`grammar/${moduleGid}.json`);
    const container = document.getElementById('drill-container');
    if (!container || !data.items || data.items.length === 0) {
      if (container) container.innerHTML = Portal.empty('There are no questions for this topic yet.');
      return;
    }

    let currentIndex = 0;
    let selectedOptionIndex = null;
    let isAnswered = false;

    function renderQuestion(index) {
      if (index >= data.items.length) {
        renderCompletion();
        return;
      }

      const item = data.items[index];
      selectedOptionIndex = null;
      isAnswered = false;

      // Ghi nhận view item và bấm giờ
      Portal.spine.viewItem(item.id, { module: 'grammar', unit: moduleGid });

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2 style="margin:0; font-size:1.15rem;">${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Question ${index + 1} of ${data.items.length}</span>
        </div>

        ${item.ai_generated ? `<div class="chip-ai">🤖 AI-Generated Material</div>` : ''}

        <!-- Question frame -->
        <div class="panel" style="margin-top:8px;">
          <p style="font-size:1.1rem; font-weight:600; margin:0 0 16px; line-height:1.5;">${item.prompt}</p>

          <div id="opts-list">
            ${item.options.map((optText, optIdx) => `
              <button class="opt" data-opt-idx="${optIdx}">
                <span class="key">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${optText.replace(/^[A-D]\.\s*/, '')}</span>
              </button>
            `).join('')}
          </div>

          <div id="feedback-area"></div>

          <div class="btn-row" style="margin-top:16px;">
            <button id="btn-check" class="btn btn-wide" disabled>Check</button>
            <button id="btn-next" class="btn btn-wide" style="display:none;">Next question →</button>
          </div>
        </div>

        <!-- Condensed theory summary -->
        ${data.theory ? `
          <details style="margin-top:20px; background:var(--surface); border:1px solid var(--rule); border-radius:var(--radius); padding:12px 16px;">
            <summary style="cursor:pointer; font-weight:600; color:var(--navy);">📖 Show a summary of the grammar point</summary>
            <div style="margin-top:14px; font-size:15px; line-height:1.6;">
              ${data.theory}
            </div>
          </details>
        ` : ''}
      `;

      // Xử lý chọn phương án
      const optButtons = container.querySelectorAll('.opt');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (isAnswered) return;
          optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
          btn.setAttribute('aria-pressed', 'true');
          selectedOptionIndex = parseInt(btn.dataset.optIdx, 10);
          const checkBtn = document.getElementById('btn-check');
          if (checkBtn) checkBtn.disabled = false;
        });
      });

      // Xử lý nút Kiểm tra
      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const feedbackArea = document.getElementById('feedback-area');

      checkBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';

        const isCorrect = (selectedOptionIndex === item.answer);
        const correctOptIdx = item.answer;

        // Cập nhật giao diện các phương án
        optButtons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === correctOptIdx) {
            btn.classList.add('is-correct');
            btn.innerHTML = `<span class="key" style="color:var(--ok);">✓</span> ` + btn.innerHTML;
          } else if (idx === selectedOptionIndex && !isCorrect) {
            btn.classList.add('is-wrong');
            btn.innerHTML = `<span class="key" style="color:var(--crit);">✕</span> ` + btn.innerHTML;
          }
        });

        // 1. Hiện giải thích trước (§1)
        feedbackArea.innerHTML = `
          <div class="fb ${isCorrect ? '' : 'bad'}">
            <h4>${isCorrect ? '✓ Correct!' : '✕ Not correct'}</h4>
            <p>${item.explanation || (isCorrect ? 'You picked the right answer.' : 'Look again at the grammatical clues in the sentence.')}</p>
          </div>
        `;

        // 2. Ghi nhận Spine và hiện thưởng sau
        const res = Portal.spine.answerItem(item.id, {
          module: 'grammar',
          unit: moduleGid,
          response: selectedOptionIndex,
          correct: isCorrect
        });

        Portal.renderHud();
        if (res.xp_delta > 0) {
          Portal.toast(`+${res.xp_delta} XP`);
        }

        // Hiện nút chuyển câu
        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        currentIndex++;
        renderQuestion(currentIndex);
      });
    }

    function renderCompletion() {
      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:32px 16px;">
          <div style="font-size:42px; margin-bottom:12px;">🎉</div>
          <h2 style="color:var(--navy); margin-top:0;">Topic complete!</h2>
          <p style="color:var(--muted); font-size:15.5px;">
            You have finished every question in <strong>${data.title}</strong>.
          </p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/practice/grammar/" class="btn ghost">← Grammar topics</a>
            <a href="/practice/" class="btn">Back to Practice Centre →</a>
          </div>
        </div>
      `;
    }

    renderQuestion(0);

  } catch (err) {
    console.error('Failed to load exercises:', err);
    container.innerHTML = Portal.empty('The grammar exercise data could not be loaded.', '/practice/grammar/', '← Back to the list');
  }
}
