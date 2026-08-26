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

    container.innerHTML = unitModules.map(m => `
      <a class="card" href="/practice/vocabulary/?unit=${m.gs_unit}">
        <span class="ico">📖</span>
        <h3>Unit ${m.gs_unit}: ${m.title}</h3>
        <div class="meta">
          <span>Học kỳ: <strong>${m.semester}</strong></span>
          <span>Chủ đề: <strong>Topic ${m.topic}</strong></span>
        </div>
      </a>
    `).join('');
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
    let quizIndex = 0;
    let selectedOptionIndex = null;
    let isAnswered = false;

    function renderView() {
      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
          <h2 style="margin:0;">Unit ${data.unit}: ${data.title}</h2>
          <div style="display:flex; gap:6px;">
            <button id="tab-btn-flashcard" class="btn ${activeTab === 'flashcard' ? '' : 'ghost'}" style="min-height:36px; padding:6px 12px; font-size:13.5px;">🗂️ Thẻ từ (${data.words.length})</button>
            <button id="tab-btn-quiz" class="btn ${activeTab === 'quiz' ? '' : 'ghost'}" style="min-height:36px; padding:6px 12px; font-size:13.5px;">📝 Luyện tập (${data.items.length})</button>
          </div>
        </div>

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

      if (quizIndex >= data.items.length) {
        tabContent.innerHTML = `
          <div class="panel" style="text-align:center; padding:32px 16px;">
            <div style="font-size:42px; margin-bottom:12px;">🎉</div>
            <h2 style="color:var(--navy); margin-top:0;">Hoàn thành bài tập từ vựng!</h2>
            <p style="color:var(--muted);">Em đã hoàn thành tất cả câu hỏi của Unit ${data.unit}.</p>
            <div class="btn-row" style="justify-content:center; margin-top:20px;">
              <button id="btn-restart-quiz" class="btn ghost">Làm lại</button>
              <a href="/practice/vocabulary/" class="btn">Chủ đề khác →</a>
            </div>
          </div>
        `;
        document.getElementById('btn-restart-quiz')?.addEventListener('click', () => {
          quizIndex = 0;
          renderQuizTab(tabContent);
        });
        return;
      }

      const item = data.items[quizIndex];
      selectedOptionIndex = null;
      isAnswered = false;

      Portal.spine.viewItem(item.id, { module: 'vocab', unit: String(unitNum) });

      tabContent.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Câu ${quizIndex + 1}/${data.items.length}</span>
          ${item.ai_generated ? `<div class="chip-ai" style="margin:0;">🤖 AI-Generated</div>` : ''}
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
            <button id="btn-check" class="btn btn-wide" disabled>Kiểm tra</button>
            <button id="btn-next" class="btn btn-wide" style="display:none;">Câu tiếp theo →</button>
          </div>
        </div>
      `;

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
      const feedbackArea = document.getElementById('feedback-area');

      checkBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';

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
      });
    }

    renderView();

  } catch (err) {
    console.error('Lỗi nạp từ vựng:', err);
    container.innerHTML = Portal.empty('Không thể tải dữ liệu bài học này.', '/practice/vocabulary/', '← Quay lại danh mục');
  }
}
