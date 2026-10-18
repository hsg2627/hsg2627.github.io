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

function esc(t) {
  return String(t ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

async function renderDrill(testId) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    <div id="exam-drill-container">
      <div style="padding: 24px 0;">
        ${Portal.crumb('Paper list', '/practice/exam/')}
        <p style="color:var(--muted); margin-top:14px;">Loading the paper…</p>
      </div>
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
    // Track answers per question: { answered: boolean, userVal: any, correct: boolean, optIdx: number | null }
    const userAnswers = new Array(data.items.length).fill(null);

    function getStats() {
      const answeredCount = userAnswers.filter(a => a && a.answered).length;
      const correctCount = userAnswers.filter(a => a && a.correct).length;
      const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      return { answeredCount, correctCount, pct, total: data.items.length };
    }

    function renderQuestion(idx) {
      if (idx < 0) idx = 0;
      if (idx >= data.items.length) {
        renderCompletion();
        return;
      }
      qIndex = idx;

      const item = data.items[idx];
      const prior = userAnswers[idx];
      const isAnswered = Boolean(prior && prior.answered);

      if (!isAnswered) {
        Portal.spine.viewItem(item.id, { module: 'exam', unit: testId });
      }

      const isTextQuestion = (item.type === 'text') || Boolean(item.model_answers);
      const isShortOpts = !isTextQuestion && item.options && item.options.length > 0 && item.options.every(o => o.length <= 45);
      const progPct = Math.round(((idx + 1) / data.items.length) * 100);
      const stats = getStats();

      let questionBodyHTML = '';
      if (isTextQuestion) {
        questionBodyHTML = `
          <div style="margin-top:16px;">
            <input type="text" id="input-ans" class="exam-input-text" placeholder="Type your sentence here..." autocomplete="off" spellcheck="false" value="${isAnswered ? esc(prior.userVal) : ''}" ${isAnswered ? 'disabled' : ''}>
          </div>
        `;
      } else if (item.options && item.options.length > 0) {
        questionBodyHTML = `
          <div id="opts-list" class="exam-opts ${isShortOpts ? 'opts-2col' : ''}">
            ${item.options.map((optText, optIdx) => {
              let optClass = 'exam-opt';
              let keyContent = String.fromCharCode(65 + optIdx);
              let pressed = 'false';
              let disabled = '';

              if (isAnswered) {
                disabled = 'disabled';
                if (optIdx === item.answer) {
                  optClass += ' is-correct';
                  keyContent = '✓';
                } else if (optIdx === prior.optIdx && !prior.correct) {
                  optClass += ' is-wrong';
                  keyContent = '✕';
                }
              }
              return `
                <button class="${optClass}" data-opt-idx="${optIdx}" ${disabled} aria-pressed="${pressed}">
                  <span class="key">${keyContent}</span>
                  <span>${optText.replace(/^[A-D]\.\s*/, '')}</span>
                </button>
              `;
            }).join('')}
          </div>
        `;
      }

      let feedbackHTML = '';
      if (isAnswered) {
        if (isTextQuestion) {
          const firstModel = (item.model_answers && item.model_answers[0]) || '';
          feedbackHTML = `
            <div class="fb ${prior.correct ? '' : 'bad'}" style="margin-top:18px;">
              <h4>${prior.correct ? '✓ Exact Match / Chính xác!' : '💡 Model Answer / Đáp án mẫu'}</h4>
              <div class="model-ans">
                <strong>Gợi ý đáp án:</strong> ${firstModel}
              </div>
              <p>${item.explanation || ''}</p>
            </div>
          `;
        } else {
          feedbackHTML = `
            <div class="fb ${prior.correct ? '' : 'bad'}" style="margin-top:18px;">
              <h4>${prior.correct ? '✓ Correct! / Chính xác!' : '✕ Not correct / Chưa chính xác'}</h4>
              <p>${item.explanation || (prior.correct ? 'You picked the right answer.' : 'Look again at the point this question tests.')}</p>
            </div>
          `;
        }
      }

      container.innerHTML = `
        <div style="margin-bottom:12px;">
          ${Portal.crumb('Paper list', '/practice/exam/')}
        </div>

        <div class="exam-layout">
          <!-- Main Question Area -->
          <div class="exam-main">
            <div class="exam-header">
              <h1 class="exam-title-badge">${data.title}</h1>
              <span class="exam-q-counter">Question ${idx + 1} of ${data.items.length}</span>
            </div>

            <div class="exam-prog-track" role="progressbar" aria-valuenow="${progPct}" aria-valuemin="0" aria-valuemax="100">
              <div class="exam-prog-fill" style="width: ${progPct}%;"></div>
            </div>

            <div class="panel exam-panel">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
                ${item.section ? `<span class="exam-sec-badge">📌 ${item.section}</span>` : ''}
                ${item.ai_generated ? `<span class="chip-ai">🤖 AI-Generated</span>` : ''}
              </div>

              ${item.passage ? `
                <div class="exam-passage">
                  <div class="exam-passage-head">📖 READING PASSAGE</div>
                  ${item.passage}
                </div>
              ` : ''}

              <div class="exam-prompt">${item.prompt}</div>

              ${questionBodyHTML}

              <div id="feedback-area">${feedbackHTML}</div>

              <div class="exam-btn-row">
                <button id="btn-prev" class="btn ghost" ${idx === 0 ? 'disabled' : ''}>← Previous</button>
                ${!isAnswered ? `
                  <button id="btn-check" class="btn" style="flex:1; min-width:180px;" disabled>Check Answer</button>
                  <button id="btn-next" class="btn" style="flex:1; min-width:180px; display:none;">${idx + 1 === data.items.length ? 'Finish paper 🎉' : 'Next question →'}</button>
                ` : `
                  <button id="btn-next" class="btn" style="flex:1; min-width:180px;">${idx + 1 === data.items.length ? 'Finish paper 🎉' : 'Next question →'}</button>
                `}
              </div>
            </div>
          </div>

          <!-- Sidebar: Question Palette & Progress -->
          <aside class="exam-side">
            <div class="exam-side-sticky">
              <div class="exam-stat-card">
                <h3>📊 Exam Progress</h3>
                <div class="exam-stat-row">
                  <span>Questions</span>
                  <strong>${data.items.length}</strong>
                </div>
                <div class="exam-stat-row">
                  <span>Completed</span>
                  <strong class="stat-ans" style="color:var(--navy);">${stats.answeredCount} / ${data.items.length}</strong>
                </div>
                <div class="exam-stat-row">
                  <span>Correct</span>
                  <strong class="stat-cor" style="color:var(--ok);">${stats.correctCount}</strong>
                </div>
                <div class="exam-stat-row">
                  <span>Accuracy</span>
                  <strong class="stat-pct">${stats.pct}%</strong>
                </div>
              </div>

              <div class="exam-stat-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <h3 style="margin:0;">🎯 Question Palette</h3>
                  <span class="stat-badge" style="font-size:12px; font-weight:700; color:var(--muted);">${stats.answeredCount}/${data.items.length}</span>
                </div>
                <p style="font-size:12px; color:var(--muted); margin:0 0 10px;">Click any question number to jump:</p>
                <div class="exam-nav-grid">
                  ${data.items.map((it, i) => {
                    const ans = userAnswers[i];
                    let stateClass = '';
                    if (i === idx) {
                      stateClass = 'is-active';
                    } else if (ans && ans.answered) {
                      stateClass = ans.correct ? 'is-correct' : 'is-wrong';
                    }
                    return `
                      <button class="exam-nav-chip ${stateClass}" data-goto-q="${i}" title="Question ${i + 1}${ans ? (ans.correct ? ' (Correct)' : ' (Wrong)') : ''}">
                        ${i + 1}
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          </aside>
        </div>
      `;

      // Wire up buttons
      const prevBtn = document.getElementById('btn-prev');
      const nextBtn = document.getElementById('btn-next');
      const checkBtn = document.getElementById('btn-check');
      const feedbackArea = document.getElementById('feedback-area');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (qIndex > 0) renderQuestion(qIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (qIndex + 1 < data.items.length) {
            renderQuestion(qIndex + 1);
          } else {
            renderCompletion();
          }
        });
      }

      const chips = container.querySelectorAll('.exam-nav-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const targetQ = parseInt(chip.dataset.gotoQ, 10);
          if (!isNaN(targetQ)) renderQuestion(targetQ);
        });
      });

      function updateSidebarAfterAnswer() {
        const currentStats = getStats();
        const curChip = container.querySelector(`.exam-nav-chip[data-goto-q="${idx}"]`);
        if (curChip && userAnswers[idx]) {
          curChip.classList.remove('is-active');
          curChip.classList.add(userAnswers[idx].correct ? 'is-correct' : 'is-wrong');
        }
        const statAns = container.querySelector('.stat-ans');
        const statCor = container.querySelector('.stat-cor');
        const statPct = container.querySelector('.stat-pct');
        const statBadge = container.querySelector('.stat-badge');
        if (statAns) statAns.textContent = `${currentStats.answeredCount} / ${data.items.length}`;
        if (statCor) statCor.textContent = `${currentStats.correctCount}`;
        if (statPct) statPct.textContent = `${currentStats.pct}%`;
        if (statBadge) statBadge.textContent = `${currentStats.answeredCount}/${data.items.length}`;
      }

      if (isTextQuestion) {
        const inputField = document.getElementById('input-ans');
        if (inputField && checkBtn && !isAnswered) {
          inputField.focus();
          inputField.addEventListener('input', () => {
            checkBtn.disabled = inputField.value.trim().length === 0;
          });
          inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !checkBtn.disabled) {
              checkBtn.click();
            }
          });

          checkBtn.addEventListener('click', () => {
            const userVal = inputField.value.trim();
            if (!userVal) return;
            inputField.disabled = true;
            checkBtn.style.display = 'none';

            const normUser = userVal.toLowerCase().replace(/[.?!]+$/, '').replace(/\s+/g, ' ').trim();
            const isMatch = (item.model_answers || []).some(m => {
              const normM = m.toLowerCase().replace(/[.?!]+$/, '').replace(/\s+/g, ' ').trim();
              return normUser === normM;
            });

            userAnswers[idx] = { answered: true, userVal, correct: isMatch, optIdx: null };

            const firstModel = (item.model_answers && item.model_answers[0]) || '';
            feedbackArea.innerHTML = `
              <div class="fb ${isMatch ? '' : 'bad'}" style="margin-top:18px;">
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

            nextBtn.style.display = 'inline-flex';
            updateSidebarAfterAnswer();
          });
        }
      } else {
        let selectedOpt = null;
        const optButtons = container.querySelectorAll('.exam-opt');

        if (!isAnswered) {
          optButtons.forEach(btn => {
            btn.addEventListener('click', () => {
              optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
              btn.setAttribute('aria-pressed', 'true');
              selectedOpt = parseInt(btn.dataset.optIdx, 10);
              if (checkBtn) checkBtn.disabled = false;
            });
          });

          if (checkBtn) {
            checkBtn.addEventListener('click', () => {
              if (selectedOpt === null) return;
              checkBtn.style.display = 'none';

              const isCorrect = (selectedOpt === item.answer);
              userAnswers[idx] = { answered: true, userVal: selectedOpt, correct: isCorrect, optIdx: selectedOpt };

              optButtons.forEach((btn, oIdx) => {
                btn.disabled = true;
                if (oIdx === item.answer) {
                  btn.classList.add('is-correct');
                  btn.querySelector('.key').textContent = '✓';
                } else if (oIdx === selectedOpt && !isCorrect) {
                  btn.classList.add('is-wrong');
                  btn.querySelector('.key').textContent = '✕';
                }
              });

              feedbackArea.innerHTML = `
                <div class="fb ${isCorrect ? '' : 'bad'}" style="margin-top:18px;">
                  <h4>${isCorrect ? '✓ Correct! / Chính xác!' : '✕ Not correct / Chưa chính xác'}</h4>
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

              nextBtn.style.display = 'inline-flex';
              updateSidebarAfterAnswer();
            });
          }
        }
      }
    }

    function renderCompletion() {
      const stats = getStats();
      container.innerHTML = `
        <div style="margin-bottom:12px;">
          ${Portal.crumb('Paper list', '/practice/exam/')}
        </div>

        <div class="panel exam-panel" style="text-align:center; padding:clamp(28px, 4vw, 48px) 24px; max-width:840px; margin:0 auto;">
          <div style="font-size:52px; margin-bottom:16px;">${stats.pct >= 70 ? '🎉' : '📖'}</div>
          <h2 style="color:var(--navy); font-size:clamp(1.5rem, 2.5vw, 1.85rem); margin:0 0 8px;">Paper Complete!</h2>
          <p style="font-size:1.15rem; color:var(--muted); margin:0 0 24px;">${data.title}</p>
          
          <div style="display:inline-flex; align-items:baseline; gap:8px; background:var(--sunk); border:1px solid var(--rule); border-radius:var(--radius); padding:16px 28px; margin-bottom:24px;">
            <span style="font-size:1rem; color:var(--muted);">Total Score:</span>
            <strong style="color:var(--navy); font-size:2.2rem; font-variant-numeric:tabular-nums;">${stats.correctCount} / ${stats.total}</strong>
            <span style="font-size:1.2rem; font-weight:700; color:var(--brass); margin-left:6px;">(${stats.pct}%)</span>
          </div>

          <p style="color:var(--ink); max-width:540px; margin:0 auto 28px; line-height:1.6; font-size:1.05rem;">
            ${stats.pct >= 80 
              ? 'Xuất sắc! Em đã nắm rất vững kiến thức và kỹ năng trong đề ôn tập này.' 
              : stats.pct >= 50 
              ? 'Làm tốt lắm! Hãy xem lại các câu trả lời chưa đúng để củng cố thêm kiến thức nhé.' 
              : 'Cố gắng lên! Em hãy làm lại các phần câu hỏi để nắm chắc các cấu trúc và từ vựng trọng tâm nhé.'}
          </p>

          <div class="btn-row" style="justify-content:center; gap:14px;">
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
