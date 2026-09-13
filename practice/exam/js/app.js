// practice/exam/js/app.js — Đề luyện tập định kỳ Lớp 10
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const examId = params.get('test'); // 'hk1-01' | 'hk2-01'

const boot = await Portal.boot({ module: 'exam', unit: examId, tab: 'practice' });

if (boot.ok) {
  if (!examId) {
    renderList();
  } else {
    renderDrill(examId);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  const exams = [
    {
      id: 'hk1-01',
      title: 'Term 1 comprehensive revision paper',
      desc: '10 questions drawing together the grammar and vocabulary of Units 1 to 5.',
      semester: 'Term 1'
    },
    {
      id: 'hk2-01',
      title: 'Term 2 comprehensive revision paper',
      desc: '10 questions drawing together the grammar and vocabulary of Units 6 to 10.',
      semester: 'Term 2'
    }
  ];

  main.innerHTML = `
    ${Portal.crumb('Practice', '/practice/')}
    <h1>📝 Grade 10 Periodic Practice Papers</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Papers built to the Grade 10 English assessment matrix of the 2018 National Curriculum.
    </p>

    <div class="cards" style="margin-top:20px;">
      ${exams.map(e => `
        <a class="card" href="/practice/exam/?test=${e.id}">
          <span class="ico">📋</span>
          <h3>${e.title}</h3>
          <p>${e.desc}</p>
          <div class="meta"><span>10 multiple-choice items</span><span>${e.semester}</span></div>
        </a>
      `).join('')}
    </div>
  `;
}

async function renderDrill(testId) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Paper list', '/practice/exam/')}
    <div id="exam-drill-container">
      <p style="color:var(--muted);">Loading the paper…</p>
    </div>
  `;

  try {
    const data = await loadJSON(`exams/${testId}.json`);
    const container = document.getElementById('exam-drill-container');
    if (!container || !data.items || data.items.length === 0) {
      if (container) container.innerHTML = Portal.empty('There is no data for this paper yet.', '/practice/exam/', '← Paper list');
      return;
    }

    let qIndex = 0;
    let selectedOpt = null;
    let isAnswered = false;

    function renderQuestion(idx) {
      if (idx >= data.items.length) {
        renderCompletion();
        return;
      }

      const item = data.items[idx];
      selectedOpt = null;
      isAnswered = false;

      Portal.spine.viewItem(item.id, { module: 'exam', unit: testId });

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2 style="margin:0; font-size:1.15rem;">${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Question ${idx + 1} of ${data.items.length}</span>
        </div>

        <div class="panel">
          <p style="font-size:1.05rem; font-weight:600; margin:0 0 16px; line-height:1.5;">${item.prompt}</p>

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
      `;

      const optButtons = container.querySelectorAll('.opt');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (isAnswered) return;
          optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
          btn.setAttribute('aria-pressed', 'true');
          selectedOpt = parseInt(btn.dataset.optIdx, 10);
          const checkBtn = document.getElementById('btn-check');
          if (checkBtn) checkBtn.disabled = false;
        });
      });

      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const feedbackArea = document.getElementById('feedback-area');

      checkBtn.addEventListener('click', () => {
        if (selectedOpt === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';

        const isCorrect = (selectedOpt === item.answer);
        const correctOptIdx = item.answer;

        optButtons.forEach((btn, oIdx) => {
          btn.disabled = true;
          if (oIdx === correctOptIdx) {
            btn.classList.add('is-correct');
            btn.innerHTML = `<span class="key" style="color:var(--ok);">✓</span> ` + btn.innerHTML;
          } else if (oIdx === selectedOpt && !isCorrect) {
            btn.classList.add('is-wrong');
            btn.innerHTML = `<span class="key" style="color:var(--crit);">✕</span> ` + btn.innerHTML;
          }
        });

        feedbackArea.innerHTML = `
          <div class="fb ${isCorrect ? '' : 'bad'}">
            <h4>${isCorrect ? '✓ Correct!' : '✕ Not correct'}</h4>
            <p>${item.explanation || (isCorrect ? 'You picked the right answer.' : 'Look again at the point this question tests.')}</p>
          </div>
        `;

        const res = Portal.spine.answerItem(item.id, {
          module: 'exam',
          unit: testId,
          response: selectedOpt,
          correct: isCorrect
        });

        Portal.renderHud();
        if (res.xp_delta > 0) {
          Portal.toast(`+${res.xp_delta} XP`);
        }

        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        qIndex++;
        renderQuestion(qIndex);
      });
    }

    function renderCompletion() {
      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:32px 16px;">
          <div style="font-size:42px; margin-bottom:12px;">🎉</div>
          <h2 style="color:var(--navy); margin-top:0;">Paper complete!</h2>
          <p style="color:var(--muted);">You have finished every question in <strong>${data.title}</strong>.</p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/practice/exam/" class="btn ghost">← Paper list</a>
            <a href="/practice/" class="btn">Back to Practice →</a>
          </div>
        </div>
      `;
    }

    renderQuestion(0);

  } catch (err) {
    console.error('Failed to load the paper:', err);
    container.innerHTML = Portal.empty('This practice paper could not be loaded.', '/practice/exam/', '← Paper list');
  }
}
