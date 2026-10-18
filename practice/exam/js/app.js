// practice/exam/js/app.js — Đề luyện tập định kỳ Lớp 10
import { Portal } from '/js/progress.js';
import { loadJSON } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const examId = params.get('test'); // 'g10-gk1-lang' | 'g10-gk1-read' | 'g10-gk1-write' | 'g10-gk1-full' | 'hk1-01' | 'hk2-01'

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

  const midtermModules = [
    {
      id: 'g10-gk1-lang',
      title: 'Phần 1: Ngôn ngữ (Language Focus)',
      desc: '20 câu trắc nghiệm: Ngữ âm, trọng âm, từ vựng và ngữ pháp trọng tâm Units 1, 2, 3.',
      badge: '20 câu',
      ico: '🔤',
      term: 'Giữa kì 1'
    },
    {
      id: 'g10-gk1-read',
      title: 'Phần 2: Đọc hiểu & Điền từ (Reading Mastery)',
      desc: '43 câu: 8 bài đọc & cloze về Môi trường (Soil, Plastic, 3R), Âm nhạc (Anh Trai, Cải Lương), Gia đình & Tình nguyện.',
      badge: '43 câu',
      ico: '📖',
      term: 'Giữa kì 1'
    },
    {
      id: 'g10-gk1-write',
      title: 'Phần 3: Kỹ năng Viết (Writing Practice)',
      desc: '17 câu: 7 bài sắp xếp hội thoại/đoạn văn + 10 câu biến đổi câu (bị động, let/allow, had better, spend time, it took).',
      badge: '17 câu',
      ico: '✍️',
      term: 'Giữa kì 1'
    },
    {
      id: 'g10-gk1-full',
      title: 'Đề Ôn tập Toàn diện Giữa kì 1 (Trọn bộ 80 câu)',
      desc: 'Luyện tập đầy đủ toàn bộ 80 câu hỏi theo đúng đề cương ôn tập Tiếng Anh 10 Giữa học kì 1 năm học 2025–2026.',
      badge: '80 câu',
      ico: '📋',
      term: 'Trọn bộ'
    }
  ];

  const semesterExams = [
    {
      id: 'hk1-01',
      title: 'Term 1 comprehensive revision paper',
      desc: '10 questions drawing together the grammar and vocabulary of Units 1 to 5.',
      badge: '10 questions',
      ico: '📝',
      term: 'Term 1'
    },
    {
      id: 'hk2-01',
      title: 'Term 2 comprehensive revision paper',
      desc: '10 questions drawing together the grammar and vocabulary of Units 6 to 10.',
      badge: '10 questions',
      ico: '📝',
      term: 'Term 2'
    }
  ];

  main.innerHTML = `
    ${Portal.crumb('Practice', '/practice/')}
    <h1>📝 Grade 10 Periodic Practice Papers</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Bộ tài liệu ôn tập và đề kiểm tra định kỳ môn Tiếng Anh Lớp 10 bám sát Chương trình GDPT 2018.
    </p>

    <div style="margin-top:28px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
        <span style="font-size:1.25rem;">🎯</span>
        <h2 style="margin:0; font-size:1.2rem; color:var(--navy);">Bộ Bài Tập Ôn Thi Giữa Kì 1 — Lớp 10 (2025–2026)</h2>
      </div>
      <div class="cards">
        ${midtermModules.map(e => `
          <a class="card" href="/practice/exam/?test=${e.id}">
            <span class="ico">${e.ico}</span>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
            <div class="meta"><span>${e.badge}</span><span>${e.term}</span></div>
          </a>
        `).join('')}
      </div>
    </div>

    <div style="margin-top:32px;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
        <span style="font-size:1.25rem;">📚</span>
        <h2 style="margin:0; font-size:1.2rem; color:var(--navy);">Đề Ôn tập Cuối kì (Semester Revision Papers)</h2>
      </div>
      <div class="cards">
        ${semesterExams.map(e => `
          <a class="card" href="/practice/exam/?test=${e.id}">
            <span class="ico">${e.ico}</span>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
            <div class="meta"><span>${e.badge}</span><span>${e.term}</span></div>
          </a>
        `).join('')}
      </div>
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
    let correctCount = 0;
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

      const isTextQuestion = (item.type === 'text') || Boolean(item.model_answers);

      let questionBodyHTML = '';
      if (isTextQuestion) {
        questionBodyHTML = `
          <div style="margin-top:14px;">
            <input type="text" id="input-ans" class="input-text" placeholder="Type your sentence here..." autocomplete="off" spellcheck="false">
          </div>
        `;
      } else if (item.options && item.options.length > 0) {
        questionBodyHTML = `
          <div id="opts-list" style="margin-top:14px;">
            ${item.options.map((optText, optIdx) => `
              <button class="opt" data-opt-idx="${optIdx}">
                <span class="key">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${optText.replace(/^[A-D]\.\s*/, '')}</span>
              </button>
            `).join('')}
          </div>
        `;
      }

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <h2 style="margin:0; font-size:1.15rem; color:var(--navy);">${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Question ${idx + 1} of ${data.items.length}</span>
        </div>

        <div class="panel">
          ${item.section ? `<div class="sec-badge">${item.section}</div>` : ''}

          ${item.passage ? `
            <div class="passage-box">
              <div style="font-weight:700; color:var(--navy); margin-bottom:8px; font-size:13.5px; text-transform:uppercase; letter-spacing:0.5px;">📖 Reading Passage</div>
              ${item.passage}
            </div>
          ` : ''}

          <div style="font-size:1.05rem; font-weight:600; line-height:1.5; color:var(--ink);">${item.prompt}</div>

          ${questionBodyHTML}

          <div id="feedback-area"></div>

          <div class="btn-row" style="margin-top:18px;">
            <button id="btn-check" class="btn btn-wide" disabled>Check</button>
            <button id="btn-next" class="btn btn-wide" style="display:none;">Next question →</button>
          </div>
        </div>
      `;

      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const feedbackArea = document.getElementById('feedback-area');

      if (isTextQuestion) {
        const inputField = document.getElementById('input-ans');
        if (inputField && checkBtn) {
          inputField.focus();
          inputField.addEventListener('input', () => {
            if (isAnswered) return;
            checkBtn.disabled = inputField.value.trim().length === 0;
          });
          inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !checkBtn.disabled && !isAnswered) {
              checkBtn.click();
            }
          });
        }

        checkBtn.addEventListener('click', () => {
          if (isAnswered) return;
          const userVal = inputField ? inputField.value.trim() : '';
          if (!userVal) return;

          isAnswered = true;
          checkBtn.style.display = 'none';
          if (inputField) inputField.disabled = true;

          // Normalize whitespace, punctuation and case
          const normUser = userVal.toLowerCase().replace(/[.?!]+$/, '').replace(/\s+/g, ' ').trim();
          const isMatch = (item.model_answers || []).some(m => {
            const normM = m.toLowerCase().replace(/[.?!]+$/, '').replace(/\s+/g, ' ').trim();
            return normUser === normM;
          });

          if (isMatch) correctCount++;

          const firstModel = (item.model_answers && item.model_answers[0]) || '';

          feedbackArea.innerHTML = `
            <div class="fb ${isMatch ? '' : 'bad'}">
              <h4>${isMatch ? '✓ Exact Match / Chính xác!' : '💡 Model Answer / Đáp án mẫu'}</h4>
              <div class="model-ans">
                <strong>Gợi ý đáp án:</strong> ${firstModel}
              </div>
              <p>${item.explanation || ''}</p>
            </div>
          `;

          const res = Portal.spine.answerItem(item.id, {
            module: 'exam',
            unit: testId,
            response: userVal,
            correct: isMatch
          });

          Portal.renderHud();
          if (res.xp_delta > 0) {
            Portal.toast(`+${res.xp_delta} XP`);
          }

          nextBtn.style.display = 'block';
        });

      } else {
        const optButtons = container.querySelectorAll('.opt');
        optButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            if (isAnswered) return;
            optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
            btn.setAttribute('aria-pressed', 'true');
            selectedOpt = parseInt(btn.dataset.optIdx, 10);
            if (checkBtn) checkBtn.disabled = false;
          });
        });

        checkBtn.addEventListener('click', () => {
          if (selectedOpt === null || isAnswered) return;
          isAnswered = true;
          checkBtn.style.display = 'none';

          const isCorrect = (selectedOpt === item.answer);
          if (isCorrect) correctCount++;
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
      }

      nextBtn.addEventListener('click', () => {
        qIndex++;
        renderQuestion(qIndex);
      });
    }

    function renderCompletion() {
      const total = data.items.length;
      const pct = Math.round((correctCount / total) * 100);

      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:36px 20px;">
          <div style="font-size:46px; margin-bottom:14px;">${pct >= 70 ? '🎉' : '📖'}</div>
          <h2 style="color:var(--navy); margin-top:0;">Paper Complete!</h2>
          <p style="font-size:1.15rem; margin:10px 0;">
            Score: <strong style="color:var(--navy); font-size:1.35rem;">${correctCount} / ${total}</strong> (${pct}%)
          </p>
          <p style="color:var(--muted); max-width:480px; margin:0 auto 24px; line-height:1.5;">
            ${pct >= 80 
              ? 'Excellent performance! You have a solid grasp of this test content.' 
              : pct >= 50 
              ? 'Good effort! Review the explanations for any missed points to consolidate your learning.' 
              : 'Keep practising! Go over the questions again to reinforce key vocabulary and structures.'}
          </p>
          <div class="btn-row" style="justify-content:center; gap:12px;">
            <a href="/practice/exam/?test=${testId}" class="btn ghost">↻ Retake paper</a>
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
