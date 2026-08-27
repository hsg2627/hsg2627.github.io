// practice/vocabulary/js/app.js — Module Từ vựng
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const unitParam = params.get('unit');

const boot = await Portal.boot({ module: 'vocab', unit: unitParam, tab: 'practice' });

if (boot.ok) {
  if (!unitParam) {
    renderList();
  } else {
    renderUnit(unitParam);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Luyện tập', '/practice/')}
    <h1>📚 10 Chủ đề Từ vựng Lớp 10</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Vốn từ vựng trọng tâm theo các chủ đề Chương trình GDPT 2018.
    </p>
    <div id="vocab-list-container" class="cards" style="margin-top:20px;">
      <p style="color:var(--muted);">Đang tải danh mục từ vựng...</p>
    </div>
  `;

  try {
    const mf = await manifest();
    const unitModules = mf.modules.filter(m => m.kind === 'unit');
    const container = document.getElementById('vocab-list-container');
    if (!container) return;

    // Get progress from Spine state
    const spineState = Portal.spine.state;

    container.innerHTML = unitModules.map(m => {
      // Count how many quiz items the student has answered for this unit's vocab
      const unitKey = String(m.gs_unit);
      const unitPad = String(m.gs_unit).padStart(2, '0');
      const answeredCount = Object.keys(spineState.items || {}).filter(
        k => k.startsWith(`u${unitPad}_q`)
      ).length;

      const progressText = answeredCount > 0
        ? `<span style="color:var(--ok);">✓ ${answeredCount}/60 câu</span>`
        : `<span>60 câu luyện tập</span>`;

      return `
        <a class="card" href="/practice/vocabulary/?unit=${m.gs_unit}">
          <span class="ico">📖</span>
          <h3>Unit ${m.gs_unit}: ${m.title}</h3>
          <div class="meta">
            <span>Học kỳ: <strong>${m.semester}</strong></span>
            ${progressText}
          </div>
        </a>
      `;
    }).join('');
  } catch (err) {
    const container = document.getElementById('vocab-list-container');
    if (container) {
      container.innerHTML = Portal.empty('Chưa tải được danh mục từ vựng. Em kiểm tra mạng rồi thử lại nhé.');
    }
  }
}

async function renderUnit(unitNum) {
  const main = document.getElementById('main');
  if (!main) return;

  const pad = String(unitNum).padStart(2, '0');
  main.innerHTML = `
    ${Portal.crumb('Danh sách chủ đề', '/practice/vocabulary/')}
    <div id="vocab-unit-container">
      <p style="color:var(--muted);">Đang tải dữ liệu từ vựng Unit ${unitNum}...</p>
    </div>
  `;

  try {
    const data = await loadJSON(`vocab/u${pad}.json`);
    const container = document.getElementById('vocab-unit-container');
    if (!container) return;

    let activeTab = 'flashcard'; // 'flashcard' | 'quiz'
    let flashcardIndex = 0;
    let selectedOptionIndex = null;
    let isAnswered = false;

    // ── Progress tracking via Spine state ──
    const spineState = Portal.spine.state;

    // Find first unanswered item to resume
    function getQuizIndex() {
      if (!data.items || data.items.length === 0) return 0;
      for (let i = 0; i < data.items.length; i++) {
        const itemState = spineState.items[data.items[i].id];
        if (!itemState || itemState.attempts === 0) return i;
      }
      return data.items.length; // all done
    }

    let quizIndex = getQuizIndex();

    function countAnswered() {
      if (!data.items) return 0;
      return data.items.filter(it => {
        const s = spineState.items[it.id];
        return s && s.attempts > 0;
      }).length;
    }

    function renderView() {
      const answered = countAnswered();
      const total = data.items ? data.items.length : 0;
      const pct = total ? Math.round((answered / total) * 100) : 0;

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
          <h2 style="margin:0;">Unit ${data.unit}: ${data.title}</h2>
          <div style="display:flex; gap:6px;">
            <button id="tab-btn-flashcard" class="btn ${activeTab === 'flashcard' ? '' : 'ghost'}" style="min-height:36px; padding:6px 12px; font-size:13.5px;">🗂️ Thẻ từ (${data.words.length})</button>
            <button id="tab-btn-quiz" class="btn ${activeTab === 'quiz' ? '' : 'ghost'}" style="min-height:36px; padding:6px 12px; font-size:13.5px;">📝 Luyện tập (${answered}/${total})</button>
          </div>
        </div>

        ${activeTab === 'quiz' ? `
          <div class="progress-bar-wrap" style="margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-size:13px; color:var(--muted);">Tiến độ: <strong>${answered}/${total}</strong> câu</span>
              <span style="font-size:13px; color:var(--muted);">${pct}%</span>
            </div>
            <div class="bar" style="height:8px; border-radius:4px; background:var(--surface2, #e8e8e8);"><i style="width:${pct}%; background:var(--ok, #34a853); height:100%; display:block; border-radius:4px; transition:width 0.3s ease;"></i></div>
          </div>
        ` : ''}

        <div id="tab-content"></div>
      `;

      document.getElementById('tab-btn-flashcard').addEventListener('click', () => {
        activeTab = 'flashcard';
        renderView();
      });

      document.getElementById('tab-btn-quiz').addEventListener('click', () => {
        activeTab = 'quiz';
        renderView();
      });

      const tabContent = document.getElementById('tab-content');
      if (activeTab === 'flashcard') {
        renderFlashcardTab(tabContent);
      } else {
        renderQuizTab(tabContent);
      }
    }

    function renderFlashcardTab(tabContent) {
      if (!data.words || data.words.length === 0) {
        tabContent.innerHTML = Portal.empty('Chưa có từ vựng cho bài học này.');
        return;
      }

      const w = data.words[flashcardIndex];
      let showMeaning = false;

      tabContent.innerHTML = `
        <div style="text-align:center; margin-bottom:8px; font-size:13.5px; color:var(--muted);">
          Từ <strong>${flashcardIndex + 1}</strong> / ${data.words.length}
        </div>

        <div id="card-box" class="flashcard">
          <span class="word">${w.word}</span>
          <span class="ipa">${w.ipa || ''} ${w.pos ? `(${w.pos})` : ''}</span>
          <div id="card-meaning" style="margin-top:10px; min-height:48px;">
            <span class="meaning">${w.meaning}</span>
            ${w.example ? `<div class="ex">"${w.example}"</div>` : ''}
          </div>
        </div>

        <div class="btn-row" style="justify-content:space-between;">
          <button id="btn-prev-word" class="btn ghost" ${flashcardIndex === 0 ? 'disabled' : ''}>← Từ trước</button>
          <button id="btn-next-word" class="btn" ${flashcardIndex === data.words.length - 1 ? 'disabled' : ''}>Từ tiếp theo →</button>
        </div>

        <div style="margin-top:24px;">
          <h3>📋 Danh sách toàn bộ từ vựng</h3>
          <div style="display:grid; gap:8px; margin-top:10px;">
            ${data.words.map((item, idx) => `
              <div class="card" style="padding:10px 14px; cursor:pointer;" onclick="window.selectWord(${idx})">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong style="color:var(--navy);">${item.word}</strong>
                  <span style="font-size:13px; color:var(--muted);">${item.pos || ''}</span>
                </div>
                <div style="font-size:14px; color:var(--ink); margin-top:2px;">${item.meaning}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      window.selectWord = (idx) => {
        flashcardIndex = idx;
        renderFlashcardTab(tabContent);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      };

      document.getElementById('btn-prev-word')?.addEventListener('click', () => {
        if (flashcardIndex > 0) {
          flashcardIndex--;
          renderFlashcardTab(tabContent);
        }
      });

      document.getElementById('btn-next-word')?.addEventListener('click', () => {
        if (flashcardIndex < data.words.length - 1) {
          flashcardIndex++;
          renderFlashcardTab(tabContent);
        }
      });
    }

    function renderQuizTab(tabContent) {
      if (!data.items || data.items.length === 0) {
        tabContent.innerHTML = Portal.empty('Chưa có câu hỏi luyện tập cho chủ đề này.');
        return;
      }

      const answered = countAnswered();
      const total = data.items.length;

      if (quizIndex >= data.items.length) {
        // All done — show completion screen
        const correctCount = data.items.filter(it => {
          const s = spineState.items[it.id];
          return s && s.correct > 0;
        }).length;
        const accuracy = total ? Math.round((correctCount / total) * 100) : 0;

        tabContent.innerHTML = `
          <div class="panel" style="text-align:center; padding:32px 16px;">
            <div style="font-size:42px; margin-bottom:12px;">🎉</div>
            <h2 style="color:var(--navy); margin-top:0;">Hoàn thành bài tập từ vựng!</h2>
            <p style="color:var(--muted);">Em đã hoàn thành tất cả ${total} câu hỏi của Unit ${data.unit}.</p>
            <div style="display:flex; justify-content:center; gap:20px; margin:16px 0;">
              <div style="text-align:center;">
                <div style="font-size:24px; font-weight:700; color:var(--ok);">${correctCount}</div>
                <div style="font-size:12px; color:var(--muted);">Đúng</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:24px; font-weight:700; color:var(--crit);">${total - correctCount}</div>
                <div style="font-size:12px; color:var(--muted);">Sai</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:24px; font-weight:700; color:var(--navy);">${accuracy}%</div>
                <div style="font-size:12px; color:var(--muted);">Chính xác</div>
              </div>
            </div>
            <div class="btn-row" style="justify-content:center; margin-top:20px;">
              <button id="btn-review-wrong" class="btn ghost">Ôn lại câu sai</button>
              <a href="/practice/vocabulary/" class="btn">Chủ đề khác →</a>
            </div>
          </div>
        `;

        document.getElementById('btn-review-wrong')?.addEventListener('click', () => {
          // Jump to the first wrong/unanswered item
          for (let i = 0; i < data.items.length; i++) {
            const s = spineState.items[data.items[i].id];
            if (!s || s.correct === 0) {
              quizIndex = i;
              renderQuizTab(tabContent);
              return;
            }
          }
          // All correct — restart
          quizIndex = 0;
          renderQuizTab(tabContent);
        });
        return;
      }

      const item = data.items[quizIndex];
      const alreadyDone = spineState.items[item.id] && spineState.items[item.id].attempts > 0;
      selectedOptionIndex = null;
      isAnswered = false;

      Portal.spine.viewItem(item.id, { module: 'vocab', unit: String(unitNum) });

      // Determine question type label
      let typeLabel = '';
      if (item.prompt.startsWith('Điền từ')) typeLabel = '📝 Điền từ';
      else if (item.prompt.startsWith('Từ/cụm từ tiếng Anh')) typeLabel = '🇻🇳→🇬🇧 Nghĩa → Từ';
      else if (item.prompt.includes('có nghĩa là gì')) typeLabel = '🇬🇧→🇻🇳 Từ → Nghĩa';
      else if (item.prompt.startsWith('Từ/cụm từ nào phù hợp')) typeLabel = '📖 Ngữ cảnh';

      tabContent.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:6px;">
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Câu ${quizIndex + 1}/${data.items.length}</span>
          <div style="display:flex; gap:6px; align-items:center;">
            ${typeLabel ? `<span style="font-size:11px; padding:2px 8px; background:var(--surface2, #f0f0f0); border-radius:10px; color:var(--muted);">${typeLabel}</span>` : ''}
            ${item.ai_generated ? `<div class="chip-ai" style="margin:0;">🤖 AI-Generated</div>` : ''}
          </div>
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

          <div class="btn-row" style="margin-top:16px; flex-wrap:wrap; gap:8px;">
            <button id="btn-check" class="btn btn-wide" disabled>Kiểm tra</button>
            <button id="btn-next" class="btn btn-wide" style="display:none;">Câu tiếp theo →</button>
            <button id="btn-skip" class="btn ghost" style="font-size:13px;">Bỏ qua →</button>
          </div>
        </div>

        <div style="margin-top:12px; display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
          <button id="btn-jump-start" class="btn ghost" style="font-size:12px; padding:4px 10px;">⏮ Câu 1</button>
          <button id="btn-jump-next-unanswered" class="btn ghost" style="font-size:12px; padding:4px 10px;">⏭ Câu chưa làm</button>
        </div>
      `;

      // Jump buttons
      document.getElementById('btn-jump-start')?.addEventListener('click', () => {
        quizIndex = 0;
        renderQuizTab(tabContent);
      });

      document.getElementById('btn-jump-next-unanswered')?.addEventListener('click', () => {
        for (let i = 0; i < data.items.length; i++) {
          const s = spineState.items[data.items[i].id];
          if (!s || s.attempts === 0) {
            quizIndex = i;
            renderQuizTab(tabContent);
            return;
          }
        }
        // All answered
        quizIndex = data.items.length;
        renderQuizTab(tabContent);
      });

      // Skip button
      document.getElementById('btn-skip')?.addEventListener('click', () => {
        quizIndex++;
        renderQuizTab(tabContent);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      const optButtons = tabContent.querySelectorAll('.opt');
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

      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const skipBtn = document.getElementById('btn-skip');
      const feedbackArea = document.getElementById('feedback-area');

      checkBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';
        skipBtn.style.display = 'none';

        const isCorrect = (selectedOptionIndex === item.answer);
        const correctOptIdx = item.answer;

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

        feedbackArea.innerHTML = `
          <div class="fb ${isCorrect ? '' : 'bad'}">
            <h4>${isCorrect ? '✓ Chính xác!' : '✕ Chưa chính xác'}</h4>
            <p>${item.explanation || (isCorrect ? 'Em đã chọn từ vựng đúng.' : 'Hãy xem lại nghĩa của từ nhé.')}</p>
          </div>
        `;

        const res = Portal.spine.answerItem(item.id, {
          module: 'vocab',
          unit: String(unitNum),
          response: selectedOptionIndex,
          correct: isCorrect
        });

        Portal.renderHud();
        if (res.xp_delta > 0) {
          Portal.toast(`+${res.xp_delta} XP`);
        }

        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        quizIndex++;
        renderQuizTab(tabContent);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    renderView();

  } catch (err) {
    console.error('Lỗi nạp từ vựng:', err);
    container.innerHTML = Portal.empty('Không thể tải dữ liệu bài học này.', '/practice/vocabulary/', '← Quay lại danh mục');
  }
}
