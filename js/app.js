/**
 * APP.JS - English Insiders Learning Portal Core Application Controller
 * ES Module with Spine Data Backbone, SPA Hash Router, Vocabulary Studio & AI Evaluation Engine
 */

import { Spine } from '../core/spine.js';

// Global Data Holders
let globalEng10Data = null;
let globalAiEvalData = null;
let globalVocabData = null;
let skillsChart = null;
let progressChart = null;

// Vocabulary Studio State
let currentVocabUnit = 1;
let currentVocabMode = 'cards'; // 'cards' | 'table' | 'quiz'
let currentVocabCategory = 'all'; // 'all' | 'academic' | 'phrasal' | 'collocations' | 'idioms'
let currentVocabLevel = 'all'; // 'all' | 'B1' | 'B2' | 'C1' | 'C2'
let currentCardIndex = 0;
let activeWordDeck = [];

// Expose Spine Helper to Window for UI button handlers
window.SpineHelper = {
  async submitIdentity() {
    const input = document.getElementById('identity-input-field');
    const errEl = document.getElementById('identity-error-msg');
    if (!input) return;

    const raw = input.value.trim().toUpperCase();
    const res = await Spine.signIn(raw);
    if (!res.ok) {
      if (errEl) errEl.textContent = res.error || 'Mã chưa đúng định dạng (Ví dụ: NK1009-07)';
      return;
    }

    if (errEl) errEl.textContent = '';
    const modal = document.getElementById('identity-modal');
    if (modal) modal.style.display = 'none';

    updateStudentDisplay();
  },

  exportData() {
    Spine.exportMyData();
  },

  async deleteData() {
    const confirmed = window.confirm('Em có chắc chắn muốn xoá toàn bộ dữ liệu học tập đã lưu trên máy này?');
    if (!confirmed) return;

    await Spine.deleteMyData();
    window.location.reload();
  }
};

function updateStudentDisplay() {
  const studentEl = document.getElementById('sidebar-student-id');
  if (studentEl) {
    studentEl.textContent = Spine.id || 'Chưa đăng nhập';
  }
  const streakEl = document.getElementById('sidebar-streak-value');
  if (streakEl) {
    const metrics = Spine.metrics;
    streakEl.textContent = `${metrics.streak || 1}d`;
  }
}

// Global Text-to-Speech Pronunciation Helper
window.speakVocabWord = function(text, event) {
  if (event) event.stopPropagation();
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this device.');
    return;
  }
  window.speechSynthesis.cancel();
  const clean = text.replace(/[\(\)\/\*]/g, '').trim();
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
};

// ==========================================================================
// VOCABULARY STUDIO (GLOBAL SUCCESS 10)
// ==========================================================================

function getFilteredVocabWords() {
  if (!globalVocabData || !Array.isArray(globalVocabData.units)) return [];
  const unitObj = globalVocabData.units.find(u => u.unit === currentVocabUnit);
  if (!unitObj) return [];

  return (unitObj.wordList || []).filter(w => {
    // Filter Category
    if (currentVocabCategory !== 'all' && w.categoryKey !== currentVocabCategory) {
      return false;
    }
    // Filter Level
    if (currentVocabLevel !== 'all' && w.level !== currentVocabLevel) {
      return false;
    }
    return true;
  });
}

window.setVocabUnit = function(unitNum) {
  currentVocabUnit = parseInt(unitNum, 10) || 1;
  currentCardIndex = 0;
  Spine.openModule('vocab', currentVocabUnit);
  renderVocabStudio();
};

window.setVocabDisplayMode = function(mode) {
  currentVocabMode = mode;
  ['cards', 'table', 'quiz'].forEach(m => {
    const btn = document.getElementById(`btn-vocab-mode-${m}`);
    if (btn) {
      if (m === mode) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });
  renderVocabActiveMode();
};

window.filterVocabCategory = function(cat) {
  currentVocabCategory = cat;
  currentCardIndex = 0;
  document.querySelectorAll('#vocab-category-filters .vocab-filter-btn').forEach(b => {
    if (b.dataset.cat === cat) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderVocabActiveMode();
};

window.filterVocabLevel = function(level) {
  currentVocabLevel = level;
  currentCardIndex = 0;
  document.querySelectorAll('#vocab-level-filters .vocab-filter-btn').forEach(b => {
    if (b.dataset.lvl === level) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderVocabActiveMode();
};

window.flipVocabCard = function() {
  const cardEl = document.getElementById('active-3d-card');
  if (cardEl) {
    cardEl.classList.toggle('is-flipped');
  }
};

window.nextVocabCard = function() {
  if (activeWordDeck.length === 0) return;
  currentCardIndex = (currentCardIndex + 1) % activeWordDeck.length;
  renderFlashcardDeck();
};

window.prevVocabCard = function() {
  if (activeWordDeck.length === 0) return;
  currentCardIndex = (currentCardIndex - 1 + activeWordDeck.length) % activeWordDeck.length;
  renderFlashcardDeck();
};

window.shuffleVocabCards = function() {
  for (let i = activeWordDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activeWordDeck[i], activeWordDeck[j]] = [activeWordDeck[j], activeWordDeck[i]];
  }
  currentCardIndex = 0;
  renderFlashcardDeck();
};

function renderVocabStudio() {
  if (!globalVocabData || !Array.isArray(globalVocabData.units)) return;

  // 1. Render Unit Selector Bar
  const unitBar = document.getElementById('vocab-unit-bar');
  if (unitBar) {
    unitBar.innerHTML = globalVocabData.units.map(u => `
      <button class="vocab-unit-pill ${u.unit === currentVocabUnit ? 'active' : ''}" onclick="setVocabUnit(${u.unit})">
        <span>Unit ${u.unit}: ${u.title}</span>
      </button>
    `).join('');
  }

  renderVocabActiveMode();
}

function renderVocabActiveMode() {
  activeWordDeck = getFilteredVocabWords();
  const container = document.getElementById('vocab-interactive-container');
  if (!container) return;

  if (currentVocabMode === 'cards') {
    renderFlashcardDeck();
  } else if (currentVocabMode === 'table') {
    renderWordTable();
  } else if (currentVocabMode === 'quiz') {
    renderVocabQuiz();
  }
}

function renderFlashcardDeck() {
  const container = document.getElementById('vocab-interactive-container');
  if (!container) return;

  if (activeWordDeck.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px; background: #fff; border-radius: var(--radius-xl); border: 1px solid var(--border-subtle);">
        <span style="font-size: 2.5rem;">🔍</span>
        <h3 style="margin-top: 12px; color: var(--navy-900);">Không có từ vựng phù hợp bộ lọc</h3>
        <p style="color: var(--text-secondary); margin-top: 4px;">Vui lòng chọn bộ lọc khác để hiển thị từ vựng.</p>
      </div>
    `;
    return;
  }

  if (currentCardIndex >= activeWordDeck.length) currentCardIndex = 0;
  const word = activeWordDeck[currentCardIndex];

  // Telemetry: View Item
  Spine.viewItem(word.id, { module: 'vocab', unit: currentVocabUnit });

  container.innerHTML = `
    <div class="vocab-flashcard-stage">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-weight: 700; font-size: 0.88rem; color: var(--text-secondary);">
        <span>Unit ${currentVocabUnit} · ${word.section}</span>
        <span>Thẻ ${currentCardIndex + 1} / ${activeWordDeck.length}</span>
      </div>

      <div class="vocab-card-3d" id="active-3d-card" onclick="flipVocabCard()">
        <!-- FRONT FACE -->
        <div class="vocab-card-face vocab-card-face--front">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="vocab-badge-cefr cefr-${word.level.toLowerCase()}">CEFR ${word.level}</span>
              <button class="vocab-card-speaker" onclick="speakVocabWord('${word.term.replace(/'/g, "\\'")}', event)" title="Nghe phát âm">
                🔊
              </button>
            </div>
            <div class="vocab-card-word">${word.term}</div>
            <div style="font-size: 1.05rem; color: var(--text-secondary); font-style: italic; margin-bottom: 18px;">
              (${word.pos})
            </div>
          </div>
          <div>
            <div class="vocab-card-example">
              "${word.example}"
            </div>
            <div style="text-align: center; margin-top: 16px; font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">
              👆 Nhấp vào thẻ để lật xem nghĩa tiếng Việt & phân tích
            </div>
          </div>
        </div>

        <!-- BACK FACE -->
        <div class="vocab-card-face vocab-card-face--back">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="vocab-badge-cefr cefr-${word.level.toLowerCase()}" style="border: 1px solid rgba(255,255,255,0.4);">CEFR ${word.level}</span>
              <button class="vocab-card-speaker" style="background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.3);" onclick="speakVocabWord('${word.term.replace(/'/g, "\\'")}', event)" title="Nghe phát âm">
                🔊
              </button>
            </div>
            <div style="font-size: 1.4rem; font-weight: 800; color: #818cf8; margin-bottom: 4px;">
              ${word.term} <span style="font-size: 0.95rem; color: #cbd5e1; font-weight: 500;">(${word.pos})</span>
            </div>
            <div style="font-size: 1.35rem; font-weight: 700; color: #ffffff; margin-bottom: 16px; line-height: 1.4;">
              ${word.meaningVn}
            </div>
          </div>
          <div>
            <div class="vocab-card-example">
              "${word.example}"
            </div>
            <div style="text-align: center; margin-top: 16px; font-size: 0.82rem; color: #94a3b8; font-weight: 600;">
              Chủ đề: ${word.section} · ID: ${word.id}
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="vocab-deck-controls">
        <button class="btn btn--secondary" onclick="prevVocabCard()">⬅️ Thẻ Trước</button>
        <button class="btn btn--primary" onclick="flipVocabCard()">🔄 Lật Thẻ</button>
        <button class="btn btn--secondary" onclick="nextVocabCard()">Thẻ Sau ➡️</button>
        <button class="btn btn--secondary btn--sm" onclick="shuffleVocabCards()" title="Trộn ngẫu nhiên">🔀 Trộn Thẻ</button>
      </div>
    </div>
  `;
}

function renderWordTable() {
  const container = document.getElementById('vocab-interactive-container');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
      <div style="font-size: 0.92rem; font-weight: 700; color: var(--navy-900);">
        Danh Sách Từ Vựng Unit ${currentVocabUnit} (${activeWordDeck.length} mục từ)
      </div>
      <input type="text" id="vocab-table-search-input" placeholder="🔍 Lọc nhanh từ vựng hoặc nghĩa..." style="padding: 8px 14px; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-md); font-size: 0.88rem; outline: none; width: 280px;" oninput="filterVocabTableSearch(this.value)">
    </div>
    <div class="vocab-table-container">
      <table class="vocab-table">
        <thead>
          <tr>
            <th style="width: 50px;">STT</th>
            <th style="width: 220px;">Từ Vựng / Cụm Từ</th>
            <th style="width: 80px;">Loại Từ</th>
            <th style="width: 70px;">CEFR</th>
            <th style="width: 240px;">Nghĩa Tiếng Việt</th>
            <th>Ví Dụ Ngữ Cảnh Thực Tế</th>
          </tr>
        </thead>
        <tbody id="vocab-table-tbody">
          ${activeWordDeck.map((w, idx) => `
            <tr>
              <td style="font-weight: 700; color: var(--text-muted);">${idx + 1}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <strong style="color: var(--navy-900); font-size: 0.95rem;">${w.term}</strong>
                  <button class="vocab-card-speaker" style="width: 28px; height: 28px; font-size: 0.85rem;" onclick="speakVocabWord('${w.term.replace(/'/g, "\\'")}', event)">🔊</button>
                </div>
              </td>
              <td><span style="font-style: italic; color: var(--text-secondary);">${w.pos}</span></td>
              <td><span class="vocab-badge-cefr cefr-${w.level.toLowerCase()}">${w.level}</span></td>
              <td style="font-weight: 600; color: #1e293b;">${w.meaningVn}</td>
              <td style="font-style: italic; color: #475569; line-height: 1.4;">"${w.example}"</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

window.filterVocabTableSearch = function(query) {
  const q = (query || '').toLowerCase().trim();
  const tbody = document.getElementById('vocab-table-tbody');
  if (!tbody) return;

  const filtered = activeWordDeck.filter(w => {
    return w.term.toLowerCase().includes(q) || w.meaningVn.toLowerCase().includes(q) || w.example.toLowerCase().includes(q);
  });

  tbody.innerHTML = filtered.map((w, idx) => `
    <tr>
      <td style="font-weight: 700; color: var(--text-muted);">${idx + 1}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <strong style="color: var(--navy-900); font-size: 0.95rem;">${w.term}</strong>
          <button class="vocab-card-speaker" style="width: 28px; height: 28px; font-size: 0.85rem;" onclick="speakVocabWord('${w.term.replace(/'/g, "\\'")}', event)">🔊</button>
        </div>
      </td>
      <td><span style="font-style: italic; color: var(--text-secondary);">${w.pos}</span></td>
      <td><span class="vocab-badge-cefr cefr-${w.level.toLowerCase()}">${w.level}</span></td>
      <td style="font-weight: 600; color: #1e293b;">${w.meaningVn}</td>
      <td style="font-style: italic; color: #475569; line-height: 1.4;">"${w.example}"</td>
    </tr>
  `).join('');
};

function renderVocabQuiz() {
  const container = document.getElementById('vocab-interactive-container');
  if (!container) return;

  if (activeWordDeck.length < 4) {
    container.innerHTML = `<p>Cần ít nhất 4 từ vựng để tạo bài trắc nghiệm.</p>`;
    return;
  }

  // Generate 8 quiz questions from activeWordDeck
  const shuffledDeck = [...activeWordDeck].sort(() => 0.5 - Math.random());
  const quizItems = shuffledDeck.slice(0, 8);

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div>
          <span class="badge badge--vocab" style="margin-bottom: 6px;">Unit ${currentVocabUnit} Mastery Quiz</span>
          <h2 class="quiz-header__title">Trắc Nghiệm Nhanh Từ Vựng</h2>
        </div>
        <button class="btn btn--secondary btn--sm" onclick="renderVocabQuiz()">🔄 Đổi Đề Khác</button>
      </div>
      <div class="questions-list">
        ${quizItems.map((targetWord, idx) => {
          // 3 distractors
          const distractors = activeWordDeck.filter(w => w.id !== targetWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
          const options = [targetWord, ...distractors].sort(() => 0.5 - Math.random());
          const correctIndex = options.findIndex(o => o.id === targetWord.id);
          const qId = `VOC-Q-${targetWord.id}`;

          return `
            <div class="question-card" id="card-${qId}" data-qid="${qId}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="item-ai-tag">💎 Vocab Mastery Check</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Câu ${idx + 1}/8</span>
              </div>
              <div class="question-prompt">
                Từ/Cụm từ nào mang nghĩa: <strong>"${targetWord.meaningVn}"</strong> (${targetWord.pos})?
              </div>
              <div class="options-grid">
                ${options.map((opt, optIdx) => `
                  <button class="opt-btn" onclick="handleVocabQuizAnswer(this, '${targetWord.id}', '${qId}', ${optIdx}, ${correctIndex}, '${targetWord.term.replace(/'/g, "\\'")}', '${targetWord.meaningVn.replace(/'/g, "\\'")}', '${targetWord.example.replace(/'/g, "\\'")}')">
                    ${opt.term}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" id="expl-box-${qId}">
                <div class="expl-content"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

window.handleVocabQuizAnswer = function(btn, wordId, qId, chosenIdx, correctIdx, term, meaning, example) {
  const parentCard = btn.closest('.question-card');
  if (!parentCard || parentCard.dataset.answered === 'true') return;
  parentCard.dataset.answered = 'true';

  const isCorrect = (chosenIdx === correctIdx);
  const allBtns = parentCard.querySelectorAll('.opt-btn');

  if (isCorrect) {
    btn.classList.add('opt-btn--correct');
  } else {
    btn.classList.add('opt-btn--wrong');
    if (allBtns[correctIdx]) {
      allBtns[correctIdx].classList.add('opt-btn--correct');
    }
  }

  // Spine Logging
  Spine.answerItem(wordId, {
    module: 'vocab',
    unit: currentVocabUnit,
    response: String(chosenIdx),
    correct: isCorrect
  });

  // Show explanation
  const explBox = parentCard.querySelector('.explanation-box');
  if (explBox) {
    explBox.classList.add('active');
    const contentEl = explBox.querySelector('.expl-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div style="color: #0f172a; line-height: 1.5; padding: 12px; background: #f8fafc; border-radius: 6px;">
          <strong>Đáp án đúng:</strong> <span style="color: #047857; font-weight: 700;">${term}</span><br>
          <strong>Nghĩa:</strong> ${meaning}<br>
          <strong>Ví dụ:</strong> <em>"${example}"</em>
        </div>
      `;
    }
  }

  updateStudentDisplay();
};

// ==========================================================================
// ENGLISH 10 (GRAMMAR)
// ==========================================================================

window.openE10LevelModal = function(levelId) {
  if (!globalEng10Data || !Array.isArray(globalEng10Data.grammar_levels)) return;
  const lvl = globalEng10Data.grammar_levels.find(l => String(l.id) === String(levelId));
  const container = document.getElementById('e10-level-interactive-area');
  if (!lvl || !container) return;

  Spine.openModule('grammar', lvl.id);

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div>
          <span class="badge badge--e10" style="margin-bottom: 6px;">Level ${lvl.id}</span>
          <h2 class="quiz-header__title">${lvl.name}</h2>
        </div>
        <button class="btn btn--secondary btn--sm" onclick="document.getElementById('e10-level-interactive-area').innerHTML=''">Đóng bài luyện</button>
      </div>
      ${lvl.theory ? `<div class="quiz-passage-box">${lvl.theory}</div>` : ''}
      <div class="questions-list">
        <h3 style="margin: 20px 0 12px 0; font-size: 1.15rem; color: var(--navy-900);">📝 Bài Tập Trắc Nghiệm Củng Cố</h3>
        ${(lvl.questions || []).map((q, idx) => {
          const qId = `E10-L${lvl.id}-Q${idx + 1}`;
          return `
            <div class="question-card" id="card-e10-${lvl.id}-${idx}" data-qid="${qId}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="item-ai-tag">🤖 AI-Generated Exercise</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Câu ${idx + 1}/${lvl.questions.length}</span>
              </div>
              <div class="question-prompt">${q.q || q.question || 'Question'}</div>
              <div class="options-grid">
                ${(q.opts || q.options || []).map((opt, optIdx) => `
                  <button class="opt-btn" onclick="handleE10OptionAnswer(this, '${qId}', ${lvl.id}, ${optIdx}, ${q.ans !== undefined ? q.ans : (q.correct !== undefined ? q.correct : 0)}, ${JSON.stringify(q.exp || q.expl || 'Standard grammar rule')})">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" id="expl-box-${qId}">
                <div class="expl-tabs">
                  <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'vn', '${qId}')">Giải thích Tiếng Việt</button>
                  <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'en', '${qId}')">English Analysis</button>
                </div>
                <div class="expl-content"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  container.scrollIntoView({ behavior: 'smooth' });

  // View items tracking
  (lvl.questions || []).forEach((_, idx) => {
    Spine.viewItem(`E10-L${lvl.id}-Q${idx + 1}`, { module: 'grammar', unit: lvl.id });
  });
};

window.handleE10OptionAnswer = function(btn, questionId, levelId, optionIndex, correctIndex, explanation) {
  const parentCard = btn.closest('.question-card');
  if (!parentCard || parentCard.dataset.answered === 'true') return;
  parentCard.dataset.answered = 'true';

  const isCorrect = (optionIndex === correctIndex);
  const allBtns = parentCard.querySelectorAll('.opt-btn');

  if (isCorrect) {
    btn.classList.add('opt-btn--correct');
  } else {
    btn.classList.add('opt-btn--wrong');
    if (allBtns[correctIndex]) {
      allBtns[correctIndex].classList.add('opt-btn--correct');
    }
  }

  // Spine Logging
  Spine.answerItem(questionId, {
    module: 'grammar',
    unit: levelId,
    response: String(optionIndex),
    correct: isCorrect,
  });

  // Show explanation
  const explBox = parentCard.querySelector('.explanation-box');
  if (explBox) {
    explBox.classList.add('active');
    const contentEl = explBox.querySelector('.expl-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="expl-pane expl-pane--vn active" id="pane-vn-${questionId}" style="line-height: 1.6;">
          <strong>Phân tích ngữ pháp:</strong> ${explanation || 'Quy tắc ngữ pháp chuẩn CT GDPT 2018.'}
        </div>
        <div class="expl-pane expl-pane--en" id="pane-en-${questionId}" style="display: none; line-height: 1.6;">
          <strong>Grammar Analysis:</strong> ${explanation || 'Standard grammar explanation according to CT 2018 syllabus.'}
        </div>
      `;
    }
  }

  updateStudentDisplay();
};

// ==========================================================================
// AI EVALUATION STUDIO
// ==========================================================================

function renderAiEvalTasks() {
  const container = document.getElementById('ai-eval-tasks-container');
  if (!container || !globalAiEvalData || !Array.isArray(globalAiEvalData.items)) return;

  Spine.openModule('ai_forge', 0);

  container.innerHTML = globalAiEvalData.items.map((item, idx) => {
    const cat = (globalAiEvalData.categories || []).find(c => c.id === (item.error.category || item.error.probe_category));
    const catName = cat ? `${cat.name} (${cat.nameEn})` : 'Ngữ pháp tổng quát';

    return `
      <div class="ai-eval-container" id="ai-task-card-${item.id}" data-task-id="${item.id}">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge badge--cgel">Item ${idx + 1}: ${item.id}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 8px; font-weight: 600;">Chủ đề lỗi: ${catName}</span>
          </div>
          <span class="item-ai-tag">🤖 Model: ${item.provenance ? item.provenance.generator : 'AI-Generated'}</span>
        </div>

        <div class="ai-eval-sentence-box" id="sentence-box-${item.id}">
          ${(item.spans || []).map(span => `
            <span class="ai-eval-span" id="span-${item.id}-${span.id}" onclick="selectAiEvalSpan('${item.id}', '${span.id}')">${span.text}</span>
          `).join('')}
        </div>

        <div style="margin-top: 10px;">
          <label style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 600; display: block; margin-bottom: 6px;">
            💬 Vì sao em cho rằng vị trí này sai? (Tự luận ngắn):
          </label>
          <input type="text" id="reason-input-${item.id}" class="form-input" placeholder="Nhập ngắn gọn lý do phát hiện lỗi hoặc giải thích..." style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--border-subtle); border-radius: 6px; font-size: 0.92rem; outline: none;">
        </div>

        <div class="ai-eval-actions">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn--primary btn--sm" id="btn-submit-ai-${item.id}" onclick="submitAiEvalAnswer('${item.id}')">
              ⚡ Xác Nhận Đánh Giá
            </button>
            <button class="btn btn--secondary btn--sm" id="btn-clean-ai-${item.id}" onclick="submitAiEvalClean('${item.id}')">
              ✅ Câu Này Không Có Lỗi (Clean)
            </button>
          </div>
          <div id="ai-eval-status-${item.id}" style="font-size: 0.9rem; font-weight: 700;"></div>
        </div>

        <div class="ai-eval-feedback" id="feedback-${item.id}"></div>
      </div>
    `;
  }).join('');

  globalAiEvalData.items.forEach(item => {
    Spine.aiEvalOpen(item.id, { kind: item.kind, hasError: item.error.present });
  });
}

const selectedAiSpans = {};

window.selectAiEvalSpan = function(itemId, spanId) {
  const card = document.getElementById(`ai-task-card-${itemId}`);
  if (!card || card.dataset.submitted === 'true') return;

  selectedAiSpans[itemId] = spanId;
  card.querySelectorAll('.ai-eval-span').forEach(s => s.classList.remove('selected'));
  const target = document.getElementById(`span-${itemId}-${spanId}`);
  if (target) target.classList.add('selected');
};

window.submitAiEvalClean = function(itemId) {
  selectedAiSpans[itemId] = 'clean_no_error';
  submitAiEvalAnswer(itemId);
};

window.submitAiEvalAnswer = function(itemId) {
  const card = document.getElementById(`ai-task-card-${itemId}`);
  if (!card || card.dataset.submitted === 'true') return;

  const item = (globalAiEvalData.items || []).find(i => i.id === itemId);
  if (!item) return;

  const chosen = selectedAiSpans[itemId];
  if (!chosen) {
    alert('Vui lòng nhấp chọn một đoạn văn bản chứa lỗi hoặc bấm nút "Câu này không có lỗi" trước khi gửi!');
    return;
  }

  card.dataset.submitted = 'true';
  const reasonInput = document.getElementById(`reason-input-${itemId}`);
  const reason = reasonInput ? reasonInput.value.trim() : '';

  const hasError = item.error.present;
  let isCorrect = false;

  if (hasError) {
    isCorrect = (chosen === item.error.span);
  } else {
    isCorrect = (chosen === 'clean_no_error');
  }

  const feedbackEl = document.getElementById(`feedback-${itemId}`);
  const statusEl = document.getElementById(`ai-eval-status-${itemId}`);

  if (hasError) {
    const errorSpanEl = document.getElementById(`span-${itemId}-${item.error.span}`);
    if (errorSpanEl) errorSpanEl.classList.add('correct');
    if (!isCorrect && chosen !== 'clean_no_error') {
      const chosenEl = document.getElementById(`span-${itemId}-${chosen}`);
      if (chosenEl) chosenEl.classList.add('wrong');
    }
  }

  if (isCorrect) {
    if (statusEl) {
      statusEl.style.color = '#047857';
      statusEl.textContent = '🎯 ĐÁNH GIÁ CHÍNH XÁC!';
    }
  } else {
    if (statusEl) {
      statusEl.style.color = '#b91c1c';
      statusEl.textContent = '❌ CHƯA CHÍNH XÁC';
    }
  }

  if (feedbackEl) {
    feedbackEl.classList.add('active');
    if (hasError) {
      feedbackEl.innerHTML = `
        <div style="color: #0f172a;">
          <strong>Sửa lỗi:</strong> <span style="color: #047857; font-weight: 700;">${item.error.correction || ''}</span><br>
          <strong>Giải thích:</strong> ${item.error.explanation || ''}
        </div>
      `;
    } else {
      feedbackEl.innerHTML = `
        <div style="color: #0f172a;">
          <strong>Phân tích:</strong> ${item.error.explanation || 'Câu này được mô hình sinh chuẩn xác, không có lỗi sai về ngữ pháp.'}
        </div>
      `;
    }
  }

  Spine.aiEvalAnswer(itemId, {
    kind: item.kind,
    hasError: hasError,
    correct: isCorrect,
    chosen: chosen,
    reason: reason,
    category: item.error.category || item.error.probe_category
  });

  updateStudentDisplay();
};

// ==========================================================================
// DASHBOARD
// ==========================================================================

function renderDashboard() {
  const metrics = Spine.metrics;
  const totalAnsweredEl = document.getElementById('stat-total-answered');
  const accuracyRateEl = document.getElementById('stat-accuracy-rate');
  const streakDaysEl = document.getElementById('stat-streak-days');

  if (totalAnsweredEl) totalAnsweredEl.textContent = metrics.total || 0;
  if (accuracyRateEl) accuracyRateEl.textContent = `${metrics.accuracy || 0}%`;
  if (streakDaysEl) streakDaysEl.textContent = `${metrics.streak || 1} Ngày`;

  const radarCtx = document.getElementById('chart-skills-radar');
  const barCtx = document.getElementById('chart-progress-bars');

  if (radarCtx && typeof Chart !== 'undefined') {
    if (skillsChart) skillsChart.destroy();
    skillsChart = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Thì & Thể', 'Dạng động từ', 'Câu bị động', 'Mệnh đề & If', 'Mạo từ & DT', 'Tính từ & So sánh', 'Từ vựng Bậc 3'],
        datasets: [{
          label: 'Mức độ thuần thục (%)',
          data: [85, 75, 90, 80, 70, 85, 90],
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: '#4f46e5',
          pointBackgroundColor: '#4f46e5',
          pointBorderColor: '#fff',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: '#e2e8f0' },
            grid: { color: '#f1f5f9' },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }

  if (barCtx && typeof Chart !== 'undefined') {
    if (progressChart) progressChart.destroy();
    progressChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Unit 1-2', 'Unit 3-4', 'Unit 5-6', 'Unit 7-8', 'Unit 9-10', 'AI Eval Studio'],
        datasets: [{
          label: 'Số câu đã luyện',
          data: [12, 10, 14, 8, 11, (globalAiEvalData ? globalAiEvalData.items.length : 18)],
          backgroundColor: '#6366f1',
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

// ==========================================================================
// APPLICATION LIFECYCLE & ROUTING
// ==========================================================================

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Spine
  const spineInit = await Spine.init();
  if (spineInit.needIdentity) {
    const idModal = document.getElementById('identity-modal');
    if (idModal) idModal.style.display = 'flex';
  }
  updateStudentDisplay();

  // 2. Fetch Datasets
  try {
    const [e10Res, aiEvalRes, vocabRes] = await Promise.all([
      fetch('data/eng10-units.json').then(r => r.json()).catch(() => null),
      fetch('data/ai-eval-bank.json').then(r => r.json()).catch(() => null),
      fetch('data/vocab-eng10.json').then(r => r.json()).catch(() => null)
    ]);
    globalEng10Data = e10Res;
    globalAiEvalData = aiEvalRes;
    globalVocabData = vocabRes;
  } catch (e) {
    console.warn('Error loading datasets:', e);
  }

  // 3. Initialize Search
  if (window.PortalSearch) {
    window.PortalSearch.init();
  }

  // 4. Render English 10 Levels list
  const e10Container = document.getElementById('english10-levels-container');
  if (e10Container && globalEng10Data && Array.isArray(globalEng10Data.grammar_levels)) {
    e10Container.innerHTML = `
      <div class="card-grid">
        ${globalEng10Data.grammar_levels.map(lvl => `
          <div class="portal-card portal-card--e10" onclick="openE10LevelModal(${lvl.id})">
            <div class="portal-card__header">
              <div class="portal-card__icon-box">${lvl.icon || '📘'}</div>
              <span class="badge badge--e10">Level ${lvl.id}</span>
            </div>
            <div class="portal-card__title">${lvl.name}</div>
            <div class="portal-card__desc">Chuyên đề ngữ pháp lớp 10 theo CT 2018 kèm bài tập trắc nghiệm có phản hồi tức thì.</div>
            <div class="portal-card__footer">
              <span>Học chuyên đề &rarr;</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 5. Render AI Evaluation Tasks
  renderAiEvalTasks();

  // 6. Render Vocabulary Studio
  renderVocabStudio();

  // 7. Router & View Switching
  const viewMap = {
    'home': 'overview-view',
    'overview': 'overview-view',
    'dashboard': 'dashboard-view',
    'english10': 'category-english10-view',
    'vocab': 'vocab-view',
    'ai-eval': 'ai-eval-view',
    'quiz': 'quiz-hub-view'
  };

  const breadcrumbMap = {
    'overview-view': ['Portal Home'],
    'dashboard-view': ['Portal Home', 'Dashboard & Progress'],
    'category-english10-view': ['Portal Home', 'Grammar'],
    'vocab-view': ['Portal Home', 'Vocabulary Studio (Global Success 10)'],
    'ai-eval-view': ['Portal Home', 'Xưởng Đánh Giá AI (Miền 6)'],
    'quiz-hub-view': ['Portal Home', 'Practice Tests & Quizzes']
  };

  function switchView(viewId) {
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(viewId);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Sidebar Nav
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Mobile Bottom Nav
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Breadcrumbs
    const bcContainer = document.getElementById('app-breadcrumbs');
    if (bcContainer) {
      const trail = breadcrumbMap[viewId] || ['Portal Home'];
      bcContainer.innerHTML = trail.map((crumb, idx) => {
        const isLast = (idx === trail.length - 1);
        return isLast
          ? `<span class="breadcrumb__current">${crumb}</span>`
          : `<span class="breadcrumb__link" onclick="window.location.hash='#home'">${crumb}</span><span class="breadcrumb__separator">/</span>`;
      }).join('');
    }

    if (viewId === 'dashboard-view') {
      renderDashboard();
    } else if (viewId === 'vocab-view') {
      renderVocabStudio();
    }
  }

  function handleHashChange() {
    const rawHash = window.location.hash.replace('#', '');
    const [pathPart, queryPart] = rawHash.split('?');
    const hash = (pathPart || 'home').toLowerCase();

    // Check query params
    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      if (params.has('unit')) {
        currentVocabUnit = parseInt(params.get('unit'), 10) || 1;
      }
    }

    const targetViewId = viewMap[hash] || 'overview-view';
    switchView(targetViewId);
  }

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

  // Keyboard navigation for Flashcard Deck
  window.addEventListener('keydown', (e) => {
    const vocabPanel = document.getElementById('vocab-view');
    if (!vocabPanel || !vocabPanel.classList.contains('active')) return;
    if (currentVocabMode !== 'cards') return;

    if (e.code === 'Space') {
      e.preventDefault();
      flipVocabCard();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      nextVocabCard();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      prevVocabCard();
    }
  });

  // Mobile Drawer
  const hamburgerBtn = document.getElementById('header-hamburger-btn');
  const sidebarEl = document.getElementById('app-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  if (hamburgerBtn && sidebarEl && sidebarOverlay) {
    hamburgerBtn.addEventListener('click', () => {
      sidebarEl.classList.add('open');
      sidebarOverlay.classList.add('active');
    });
    sidebarOverlay.addEventListener('click', () => {
      sidebarEl.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    });
  }
});
