/**
 * APP.JS - English Insiders Learning Portal Core Application Controller
 * ES Module with Spine Data Backbone, SPA Hash Router, 6-Tab Architecture & English UI
 */

import { Spine } from '../core/spine.js';

// Global Data Holders
let globalEng10Data = null;
let globalAiEvalData = null;
let globalVocabData = null;
let globalSkillsData = null;
let skillsChart = null;
let progressChart = null;

// Vocabulary Studio State
let currentVocabUnit = 1;
let currentVocabMode = 'cards'; // 'cards' | 'table' | 'quiz'
let currentVocabCategory = 'all'; // 'all' | 'academic' | 'phrasal' | 'collocations' | 'idioms'
let currentVocabLevel = 'all'; // 'all' | 'B1' | 'B2' | 'C1' | 'C2'
let currentCardIndex = 0;
let activeWordDeck = [];

// Listening Lab State
let currentListeningUnit = 6;
let isAudioPlaying = false;
let currentAudioRate = 1.0;

// Writing Studio State
let currentWritingUnit = 6;

// Expose Spine Helper to Window for UI button handlers
window.SpineHelper = {
  async submitIdentity() {
    const input = document.getElementById('identity-input-field');
    const errEl = document.getElementById('identity-error-msg');
    if (!input) return;

    const raw = input.value.trim().toUpperCase();
    const res = await Spine.signIn(raw);
    if (!res.ok) {
      if (errEl) errEl.textContent = res.error || 'Invalid student code format (e.g. NK1009-07)';
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
    const confirmed = window.confirm('Are you sure you want to permanently erase all locally stored learning progress and student ID on this device?');
    if (!confirmed) return;

    await Spine.deleteMyData();
    window.location.reload();
  }
};

function updateStudentDisplay() {
  const studentEl = document.getElementById('sidebar-student-id');
  if (studentEl) {
    studentEl.textContent = Spine.id || 'Guest (Unregistered)';
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
// 1. VOCABULARY STUDIO (GLOBAL SUCCESS 10)
// ==========================================================================

function getFilteredVocabWords() {
  if (!globalVocabData || !Array.isArray(globalVocabData.units)) return [];
  const unitObj = globalVocabData.units.find(u => u.unit === currentVocabUnit);
  if (!unitObj) return [];

  return (unitObj.wordList || []).filter(w => {
    if (currentVocabCategory !== 'all' && w.categoryKey !== currentVocabCategory) {
      return false;
    }
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
        <h3 style="margin-top: 12px; color: var(--navy-900);">No terms match the selected filters</h3>
        <p style="color: var(--text-secondary); margin-top: 4px;">Please choose another category or CEFR level.</p>
      </div>
    `;
    return;
  }

  if (currentCardIndex >= activeWordDeck.length) currentCardIndex = 0;
  const word = activeWordDeck[currentCardIndex];

  Spine.viewItem(word.id, { module: 'vocab', unit: currentVocabUnit });

  container.innerHTML = `
    <div class="vocab-flashcard-stage">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-weight: 700; font-size: 0.88rem; color: var(--text-secondary);">
        <span>Unit ${currentVocabUnit} · ${word.section}</span>
        <span>Card ${currentCardIndex + 1} of ${activeWordDeck.length}</span>
      </div>

      <div class="vocab-card-3d" id="active-3d-card" onclick="flipVocabCard()">
        <!-- FRONT FACE -->
        <div class="vocab-card-face vocab-card-face--front">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="vocab-badge-cefr cefr-${word.level.toLowerCase()}">CEFR ${word.level}</span>
              <button class="vocab-card-speaker" onclick="speakVocabWord('${word.term.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">
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
              👆 Click card to flip and reveal academic Vietnamese translation & analysis
            </div>
          </div>
        </div>

        <!-- BACK FACE -->
        <div class="vocab-card-face vocab-card-face--back">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="vocab-badge-cefr cefr-${word.level.toLowerCase()}" style="border: 1px solid rgba(255,255,255,0.4);">CEFR ${word.level}</span>
              <button class="vocab-card-speaker" style="background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.3);" onclick="speakVocabWord('${word.term.replace(/'/g, "\\'")}', event)" title="Listen to pronunciation">
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
              Track: ${word.section} · Identifier: ${word.id}
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="vocab-deck-controls">
        <button class="btn btn--secondary" onclick="prevVocabCard()">⬅️ Previous</button>
        <button class="btn btn--primary" onclick="flipVocabCard()">🔄 Flip Card</button>
        <button class="btn btn--secondary" onclick="nextVocabCard()">Next ➡️</button>
        <button class="btn btn--secondary btn--sm" onclick="shuffleVocabCards()" title="Shuffle Deck">🔀 Shuffle</button>
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
        Unit ${currentVocabUnit} Lexical Explorer (${activeWordDeck.length} terms)
      </div>
      <input type="text" id="vocab-table-search-input" placeholder="🔍 Filter term, definition or context..." style="padding: 8px 14px; border: 1.5px solid var(--border-subtle); border-radius: var(--radius-md); font-size: 0.88rem; outline: none; width: 280px;" oninput="filterVocabTableSearch(this.value)">
    </div>
    <div class="vocab-table-container">
      <table class="vocab-table">
        <thead>
          <tr>
            <th style="width: 50px;">#</th>
            <th style="width: 220px;">Vocabulary Term</th>
            <th style="width: 80px;">POS</th>
            <th style="width: 70px;">CEFR</th>
            <th style="width: 240px;">Vietnamese Meaning</th>
            <th>Contextual Example Sentence</th>
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
    container.innerHTML = `<p>At least 4 vocabulary terms are required to generate a mastery quiz.</p>`;
    return;
  }

  const shuffledDeck = [...activeWordDeck].sort(() => 0.5 - Math.random());
  const quizItems = shuffledDeck.slice(0, 8);

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div>
          <span class="badge badge--vocab" style="margin-bottom: 6px;">Unit ${currentVocabUnit} Mastery Quiz</span>
          <h2 class="quiz-header__title">Vocabulary Multiple-Choice Assessment</h2>
        </div>
        <button class="btn btn--secondary btn--sm" onclick="renderVocabQuiz()">🔄 New Question Set</button>
      </div>
      <div class="questions-list">
        ${quizItems.map((targetWord, idx) => {
          const distractors = activeWordDeck.filter(w => w.id !== targetWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
          const options = [targetWord, ...distractors].sort(() => 0.5 - Math.random());
          const correctIndex = options.findIndex(o => o.id === targetWord.id);
          const qId = `VOC-Q-${targetWord.id}`;

          return `
            <div class="question-card" id="card-${qId}" data-qid="${qId}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="item-ai-tag">💎 Lexical Mastery Check</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Item ${idx + 1}/8</span>
              </div>
              <div class="question-prompt">
                Which term or collocation corresponds to: <strong>"${targetWord.meaningVn}"</strong> (${targetWord.pos})?
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

  Spine.answerItem(wordId, {
    module: 'vocab',
    unit: currentVocabUnit,
    response: String(chosenIdx),
    correct: isCorrect
  });

  const explBox = parentCard.querySelector('.explanation-box');
  if (explBox) {
    explBox.classList.add('active');
    const contentEl = explBox.querySelector('.expl-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div style="color: #0f172a; line-height: 1.5; padding: 12px; background: #f8fafc; border-radius: 6px;">
          <strong>Correct Answer:</strong> <span style="color: #047857; font-weight: 700;">${term}</span><br>
          <strong>Vietnamese Definition:</strong> ${meaning}<br>
          <strong>Contextual Usage:</strong> <em>"${example}"</em>
        </div>
      `;
    }
  }

  updateStudentDisplay();
};

// ==========================================================================
// 2. LISTENING AUDIO LAB (SEMESTER 2: UNITS 6–10)
// ==========================================================================

window.setListeningUnit = function(unitNum) {
  currentListeningUnit = parseInt(unitNum, 10) || 6;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  isAudioPlaying = false;
  Spine.openModule('listening', currentListeningUnit);
  renderListeningLab();
};

window.toggleListeningAudio = function(transcriptText) {
  if (!('speechSynthesis' in window)) {
    alert('Audio synthesis is not supported on this browser.');
    return;
  }

  const playBtn = document.getElementById('listening-play-btn');
  if (isAudioPlaying) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
    if (playBtn) playBtn.textContent = '▶️ Play Audio';
  } else {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(transcriptText);
    utter.lang = 'en-US';
    utter.rate = currentAudioRate;
    utter.onend = () => {
      isAudioPlaying = false;
      if (playBtn) playBtn.textContent = '▶️ Play Audio';
    };
    utter.onerror = () => {
      isAudioPlaying = false;
      if (playBtn) playBtn.textContent = '▶️ Play Audio';
    };
    window.speechSynthesis.speak(utter);
    isAudioPlaying = true;
    if (playBtn) playBtn.textContent = '⏸️ Pause';
  }
};

window.setListeningRate = function(rate) {
  currentAudioRate = parseFloat(rate);
  document.querySelectorAll('.audio-speed-btn').forEach(btn => {
    if (parseFloat(btn.dataset.rate) === currentAudioRate) btn.style.background = 'rgba(255, 255, 255, 0.35)';
    else btn.style.background = 'rgba(255, 255, 255, 0.12)';
  });
};

window.toggleListeningTranscript = function() {
  const box = document.getElementById('listening-transcript-box');
  const btn = document.getElementById('btn-toggle-transcript');
  if (!box || !btn) return;
  box.classList.toggle('active');
  btn.textContent = box.classList.contains('active') ? 'Hide Transcript 🔼' : 'Show Transcript 🔽';
};

function renderListeningLab() {
  const container = document.getElementById('listening-interactive-container');
  const unitBar = document.getElementById('listening-unit-bar');
  if (!globalSkillsData || !Array.isArray(globalSkillsData.listening) || !container) return;

  if (unitBar) {
    unitBar.innerHTML = globalSkillsData.listening.map(item => `
      <button class="vocab-unit-pill ${item.unit === currentListeningUnit ? 'active' : ''}" onclick="setListeningUnit(${item.unit})">
        <span>Unit ${item.unit}: ${item.topic}</span>
      </button>
    `).join('');
  }

  const audioItem = globalSkillsData.listening.find(l => l.unit === currentListeningUnit) || globalSkillsData.listening[0];
  if (!audioItem) return;

  container.innerHTML = `
    <!-- Audio Player Box -->
    <div class="audio-player-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <div>
          <span class="badge badge--hsg" style="margin-bottom: 6px;">Unit ${audioItem.unit} · ${audioItem.wordCount} words</span>
          <h3 style="color: #ffffff; font-size: 1.3rem; font-weight: 800; margin: 4px 0;">${audioItem.audioTitle}</h3>
          <p style="color: #cbd5e1; font-size: 0.88rem;">Topic: ${audioItem.topic}</p>
        </div>
        <button class="btn btn--secondary btn--sm" id="btn-toggle-transcript" onclick="toggleListeningTranscript()">
          Show Transcript 🔽
        </button>
      </div>

      <div class="audio-controls-row">
        <button class="btn btn--primary" id="listening-play-btn" style="padding: 10px 20px; font-weight: 700;" onclick="toggleListeningAudio(${JSON.stringify(audioItem.transcript)})">
          ▶️ Play Audio
        </button>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 600;">Speed:</span>
          <button class="audio-speed-btn" data-rate="0.75" onclick="setListeningRate(0.75)">0.75x</button>
          <button class="audio-speed-btn" data-rate="1.0" style="background: rgba(255, 255, 255, 0.35);" onclick="setListeningRate(1.0)">1.0x</button>
          <button class="audio-speed-btn" data-rate="1.25" onclick="setListeningRate(1.25)">1.25x</button>
        </div>
      </div>

      <!-- Transcript Box -->
      <div class="transcript-collapse-box" id="listening-transcript-box">
        <h4 style="color: #818cf8; margin-bottom: 8px; font-size: 0.95rem;">📜 Audio Script Transcript:</h4>
        <p>${audioItem.transcript}</p>
      </div>
    </div>

    <!-- Comprehension Quiz -->
    <div class="quiz-container">
      <h3 style="margin-bottom: 16px; font-size: 1.15rem; color: var(--navy-900);">📝 Listening Comprehension Questions</h3>
      <div class="questions-list">
        ${audioItem.questions.map((q, idx) => `
          <div class="question-card" id="card-${q.id}" data-qid="${q.id}">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="item-ai-tag">🎧 Listening Check</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Question ${idx + 1}/${audioItem.questions.length}</span>
            </div>
            <div class="question-prompt">${q.q}</div>
            <div class="options-grid">
              ${q.opts.map((opt, optIdx) => `
                <button class="opt-btn" onclick="handleListeningQuizAnswer(this, '${q.id}', ${audioItem.unit}, ${optIdx}, ${q.ans}, '${q.explEn.replace(/'/g, "\\'")}', '${q.explVn.replace(/'/g, "\\'")}')">
                  ${opt}
                </button>
              `).join('')}
            </div>
            <div class="explanation-box" id="expl-box-${q.id}">
              <div class="expl-tabs">
                <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'en', '${q.id}')">English Analysis</button>
                <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'vn', '${q.id}')">Vietnamese Translation</button>
              </div>
              <div class="expl-content"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

window.handleListeningQuizAnswer = function(btn, questionId, unitNum, chosenIdx, correctIdx, explEn, explVn) {
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

  Spine.answerItem(questionId, {
    module: 'listening',
    unit: unitNum,
    response: String(chosenIdx),
    correct: isCorrect
  });

  const explBox = parentCard.querySelector('.explanation-box');
  if (explBox) {
    explBox.classList.add('active');
    const contentEl = explBox.querySelector('.expl-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="expl-pane expl-pane--en active" id="pane-en-${questionId}" style="line-height: 1.6;">
          <strong>Analysis:</strong> ${explEn}
        </div>
        <div class="expl-pane expl-pane--vn" id="pane-vn-${questionId}" style="display: none; line-height: 1.6;">
          <strong>Giải thích chi tiết:</strong> ${explVn}
        </div>
      `;
    }
  }

  updateStudentDisplay();
};

// ==========================================================================
// 3. WRITING STUDIO (SEMESTER 2: UNITS 6–10)
// ==========================================================================

window.setWritingUnit = function(unitNum) {
  currentWritingUnit = parseInt(unitNum, 10) || 6;
  Spine.openModule('writing', currentWritingUnit);
  renderWritingStudio();
};

window.updateWritingWordCount = function(textarea) {
  const counterEl = document.getElementById('writing-word-count-badge');
  if (!counterEl) return;
  const words = (textarea.value.trim().match(/\S+/g) || []).length;
  counterEl.textContent = `${words} / 120–150 words`;
  if (words >= 120 && words <= 150) {
    counterEl.style.color = '#047857';
    counterEl.style.background = '#dcfce7';
  } else if (words > 150) {
    counterEl.style.color = '#b45309';
    counterEl.style.background = '#fef3c7';
  } else {
    counterEl.style.color = '#475569';
    counterEl.style.background = '#f1f5f9';
  }
};

window.toggleModelEssay = function() {
  const box = document.getElementById('model-essay-box');
  const btn = document.getElementById('btn-toggle-model');
  if (!box || !btn) return;
  box.classList.toggle('active');
  btn.textContent = box.classList.contains('active') ? 'Hide Model Essay 🔼' : 'Reveal Model Essay & Vocabulary 🔽';
};

function renderWritingStudio() {
  const container = document.getElementById('writing-interactive-container');
  const unitBar = document.getElementById('writing-unit-bar');
  if (!globalSkillsData || !Array.isArray(globalSkillsData.writing) || !container) return;

  if (unitBar) {
    unitBar.innerHTML = globalSkillsData.writing.map(item => `
      <button class="vocab-unit-pill ${item.unit === currentWritingUnit ? 'active' : ''}" onclick="setWritingUnit(${item.unit})">
        <span>Unit ${item.unit}: ${item.topic}</span>
      </button>
    `).join('');
  }

  const writingItem = globalSkillsData.writing.find(w => w.unit === currentWritingUnit) || globalSkillsData.writing[0];
  if (!writingItem) return;

  container.innerHTML = `
    <div class="writing-scaffold-card">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
        <div>
          <span class="badge badge--e10">Unit ${writingItem.unit} Writing Task</span>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--navy-900); margin-top: 6px;">${writingItem.topic}</h3>
        </div>
        <span class="badge badge--vocab" id="writing-word-count-badge" style="padding: 6px 12px; font-size: 0.85rem;">0 / ${writingItem.wordLimit}</span>
      </div>

      <div style="background: #f8fafc; border-radius: var(--radius-md); padding: 16px 18px; border: 1px solid var(--border-subtle); margin-bottom: 20px;">
        <strong style="color: var(--navy-900);">📝 Writing Prompt:</strong>
        <p style="margin-top: 6px; font-size: 0.95rem; color: #334155; line-height: 1.5;">${writingItem.taskPrompt}</p>
      </div>

      <!-- Scaffolding Guide -->
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--navy-900); margin-bottom: 8px;">🏗️ Paragraph Structure Scaffolding:</h4>
      <div class="scaffold-step-box">
        <strong>1. Topic Sentence:</strong> ${writingItem.scaffold.topicSentence}
      </div>
      ${writingItem.scaffold.supportingPoints.map((pt, idx) => `
        <div class="scaffold-step-box" style="border-left-color: #818cf8;">
          <strong>2.${idx + 1}. Supporting Idea ${idx + 1}:</strong> ${pt}
        </div>
      `).join('')}
      <div class="scaffold-step-box" style="border-left-color: #10b981;">
        <strong>3. Concluding Sentence:</strong> ${writingItem.scaffold.conclusion}
      </div>

      <!-- Interactive Editor -->
      <div style="margin-top: 20px;">
        <label style="font-weight: 700; font-size: 0.9rem; color: var(--navy-900); display: block; margin-bottom: 8px;">
          ✍️ Your Autonomous Writing Canvas:
        </label>
        <textarea class="writing-editor-area" placeholder="Type your 120-150 word academic paragraph here..." oninput="updateWritingWordCount(this)"></textarea>
      </div>

      <!-- Model Essay Toggle -->
      <div style="margin-top: 18px; text-align: center;">
        <button class="btn btn--secondary" id="btn-toggle-model" onclick="toggleModelEssay()">
          Reveal Model Essay & Vocabulary 🔽
        </button>
      </div>

      <div class="model-essay-box" id="model-essay-box">
        <h4 style="font-weight: 800; font-size: 1rem; color: #166534; margin-bottom: 8px;">✨ Exemplary Model Essay:</h4>
        <p style="margin-bottom: 14px;">${writingItem.modelEssay}</p>
        <div style="background: rgba(255, 255, 255, 0.7); border-radius: 6px; padding: 10px 14px;">
          <strong style="color: #166534;">💎 Suggested Key Collocations & Vocabulary:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
            ${writingItem.keyVocabulary.map(v => `
              <span class="vocab-badge-cefr cefr-b2">${v}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 4. GRAMMAR MODULES
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
        <button class="btn btn--secondary btn--sm" onclick="document.getElementById('e10-level-interactive-area').innerHTML=''">Close Practice</button>
      </div>
      ${lvl.theory ? `<div class="quiz-passage-box">${lvl.theory}</div>` : ''}
      <div class="questions-list">
        <h3 style="margin: 20px 0 12px 0; font-size: 1.15rem; color: var(--navy-900);">📝 Grammar Practice Assessment</h3>
        ${(lvl.questions || []).map((q, idx) => {
          const qId = `E10-L${lvl.id}-Q${idx + 1}`;
          return `
            <div class="question-card" id="card-e10-${lvl.id}-${idx}" data-qid="${qId}">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span class="item-ai-tag">🤖 AI-Generated Exercise</span>
                <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">Question ${idx + 1}/${lvl.questions.length}</span>
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
                  <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'en', '${qId}')">English Analysis</button>
                  <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'vn', '${qId}')">Vietnamese Explanation</button>
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

  Spine.answerItem(questionId, {
    module: 'grammar',
    unit: levelId,
    response: String(optionIndex),
    correct: isCorrect,
  });

  const explBox = parentCard.querySelector('.explanation-box');
  if (explBox) {
    explBox.classList.add('active');
    const contentEl = explBox.querySelector('.expl-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="expl-pane expl-pane--en active" id="pane-en-${questionId}" style="line-height: 1.6;">
          <strong>Grammar Analysis:</strong> ${explanation || 'Standard grammar explanation according to CT 2018 syllabus.'}
        </div>
        <div class="expl-pane expl-pane--vn" id="pane-vn-${questionId}" style="display: none; line-height: 1.6;">
          <strong>Phân tích ngữ pháp:</strong> ${explanation || 'Quy tắc ngữ pháp chuẩn CT GDPT 2018.'}
        </div>
      `;
    }
  }

  updateStudentDisplay();
};

// ==========================================================================
// 5. AI ERROR LOG STUDIO (SPOT THE ERROR)
// ==========================================================================

function renderAiEvalTasks() {
  const container = document.getElementById('ai-eval-tasks-container');
  if (!container || !globalAiEvalData || !Array.isArray(globalAiEvalData.items)) return;

  Spine.openModule('ai_forge', 0);

  container.innerHTML = globalAiEvalData.items.map((item, idx) => {
    const cat = (globalAiEvalData.categories || []).find(c => c.id === (item.error.category || item.error.probe_category));
    const catName = cat ? `${cat.nameEn} (${cat.name})` : 'General Grammar';

    return `
      <div class="ai-eval-container" id="ai-task-card-${item.id}" data-task-id="${item.id}">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge badge--cgel">Item ${idx + 1}: ${item.id}</span>
            <span style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 8px; font-weight: 600;">Category: ${catName}</span>
          </div>
          <span class="item-ai-tag">🤖 Generator: ${item.provenance ? item.provenance.generator : 'AI Model'}</span>
        </div>

        <div class="ai-eval-sentence-box" id="sentence-box-${item.id}">
          ${(item.spans || []).map(span => `
            <span class="ai-eval-span" id="span-${item.id}-${span.id}" onclick="selectAiEvalSpan('${item.id}', '${span.id}')">${span.text}</span>
          `).join('')}
        </div>

        <div style="margin-top: 10px;">
          <label style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 600; display: block; margin-bottom: 6px;">
            💬 Why do you consider this position erroneous? (Brief Reason):
          </label>
          <input type="text" id="reason-input-${item.id}" class="form-input" placeholder="State your linguistic reasoning..." style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--border-subtle); border-radius: 6px; font-size: 0.92rem; outline: none;">
        </div>

        <div class="ai-eval-actions">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="btn btn--primary btn--sm" id="btn-submit-ai-${item.id}" onclick="submitAiEvalAnswer('${item.id}')">
              ⚡ Confirm Judgment
            </button>
            <button class="btn btn--secondary btn--sm" id="btn-clean-ai-${item.id}" onclick="submitAiEvalClean('${item.id}')">
              ✅ Clean Text (No Error Found)
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
    alert('Please click on a text span containing an error or select "Clean Text (No Error Found)" before submitting.');
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
      statusEl.textContent = '🎯 ACCURATE JUDGMENT!';
    }
  } else {
    if (statusEl) {
      statusEl.style.color = '#b91c1c';
      statusEl.textContent = '❌ INCORRECT EVALUATION';
    }
  }

  if (feedbackEl) {
    feedbackEl.classList.add('active');
    if (hasError) {
      feedbackEl.innerHTML = `
        <div style="color: #0f172a;">
          <strong>Correction:</strong> <span style="color: #047857; font-weight: 700;">${item.error.correction || ''}</span><br>
          <strong>Linguistic Analysis:</strong> ${item.error.explanation || ''}
        </div>
      `;
    } else {
      feedbackEl.innerHTML = `
        <div style="color: #0f172a;">
          <strong>Analysis:</strong> ${item.error.explanation || 'This sentence was accurately generated without grammatical or lexical errors.'}
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
// 6. DASHBOARD
// ==========================================================================

function renderDashboard() {
  const metrics = Spine.metrics;
  const totalAnsweredEl = document.getElementById('stat-total-answered');
  const accuracyRateEl = document.getElementById('stat-accuracy-rate');
  const streakDaysEl = document.getElementById('stat-streak-days');

  if (totalAnsweredEl) totalAnsweredEl.textContent = metrics.total || 0;
  if (accuracyRateEl) accuracyRateEl.textContent = `${metrics.accuracy || 0}%`;
  if (streakDaysEl) streakDaysEl.textContent = `${metrics.streak || 1} Day`;

  const radarCtx = document.getElementById('chart-skills-radar');
  const barCtx = document.getElementById('chart-progress-bars');

  if (radarCtx && typeof Chart !== 'undefined') {
    if (skillsChart) skillsChart.destroy();
    skillsChart = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Tenses & Aspects', 'Verb Forms', 'Passive Voice', 'Clauses & If', 'Nouns & Articles', 'Comparatives', 'Level 3 Vocab'],
        datasets: [{
          label: 'Mastery Level (%)',
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
        labels: ['Grammar', 'Vocabulary', 'Listening', 'Writing', 'AI Error Log'],
        datasets: [{
          label: 'Completed Tasks',
          data: [14, 55, 5, 5, (globalAiEvalData ? globalAiEvalData.items.length : 18)],
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
// 7. APPLICATION LIFECYCLE & ROUTING
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
    const [e10Res, aiEvalRes, vocabRes, skillsRes] = await Promise.all([
      fetch('data/eng10-units.json').then(r => r.json()).catch(() => null),
      fetch('data/ai-eval-bank.json').then(r => r.json()).catch(() => null),
      fetch('data/vocab-eng10.json').then(r => r.json()).catch(() => null),
      fetch('data/listening-writing-eng10.json').then(r => r.json()).catch(() => null)
    ]);
    globalEng10Data = e10Res;
    globalAiEvalData = aiEvalRes;
    globalVocabData = vocabRes;
    globalSkillsData = skillsRes;
  } catch (e) {
    console.warn('Error loading datasets:', e);
  }

  // 3. Initialize Search
  if (window.PortalSearch) {
    window.PortalSearch.init();
  }

  // 4. Render English 10 Grammar Levels list
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
            <div class="portal-card__desc">Grade 10 syntactic grammar unit with interactive multiple-choice assessment and dual explanations.</div>
            <div class="portal-card__footer">
              <span>Start Unit &rarr;</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 5. Render AI Error Log Tasks
  renderAiEvalTasks();

  // 6. Render Vocabulary Studio
  renderVocabStudio();

  // 7. Render Listening Lab & Writing Studio
  renderListeningLab();
  renderWritingStudio();

  // 8. Router & View Switching (Exact 6-Tab Architecture)
  const viewMap = {
    'home': 'overview-view',
    'overview': 'overview-view',
    'dashboard': 'dashboard-view',
    'grammar': 'grammar-view',
    'english10': 'grammar-view',
    'vocab': 'vocab-view',
    'listening': 'listening-view',
    'writing': 'writing-view',
    'quiz': 'quiz-hub-view',
    'ai-error-log': 'ai-error-log-view',
    'ai-eval': 'ai-error-log-view'
  };

  const breadcrumbMap = {
    'overview-view': ['Portal Home'],
    'dashboard-view': ['Portal Home', 'Dashboard & Analytics'],
    'grammar-view': ['Portal Home', 'Grammar'],
    'vocab-view': ['Portal Home', 'Vocabulary Studio (Global Success 10)'],
    'listening-view': ['Portal Home', 'Listening Audio Lab'],
    'writing-view': ['Portal Home', 'Writing Studio'],
    'quiz-hub-view': ['Portal Home', 'Practice Tests & Mock Exam Hub'],
    'ai-error-log-view': ['Portal Home', 'AI Error Log Studio (Domain 6)']
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
    } else if (viewId === 'listening-view') {
      renderListeningLab();
    } else if (viewId === 'writing-view') {
      renderWritingStudio();
    }
  }

  function handleHashChange() {
    const rawHash = window.location.hash.replace('#', '');
    const [pathPart, queryPart] = rawHash.split('?');
    const hash = (pathPart || 'home').toLowerCase();

    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      if (params.has('unit')) {
        const u = parseInt(params.get('unit'), 10);
        if (hash === 'vocab') currentVocabUnit = u || 1;
        if (hash === 'listening') currentListeningUnit = u || 6;
        if (hash === 'writing') currentWritingUnit = u || 6;
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
