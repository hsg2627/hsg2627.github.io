/**
 * Cổng Luyện Tập Ôn Thi Giữa Kì 1 — Khối 10, 11, 12
 * Application Core Logic — Standalone & Offline Ready
 */

(function () {
  'use strict';

  // Application State
  const state = {
    data: null,
    activeGrade: '10',
    currentTestId: null,
    currentTest: null,
    currentQuestionIdx: 0,
    activeView: 'hub', // 'hub' | 'runner' | 'result'
    mode: 'practice', // 'practice' (instant feedback) | 'exam' (timed)
    userAnswers: {}, // { [qId]: string | number }
    checkedQuestions: new Set(), // qIds checked in practice mode
    flagged: new Set(),
    timerSeconds: 60 * 60,
    timerRemaining: 60 * 60,
    timerInterval: null,
    startTime: null,
    endTime: null,
    paletteFilter: 'all', // 'all' | 'unanswered' | 'answered' | 'flagged' | 'incorrect'
    scoreResult: null,
    printWithAnswers: false
  };

  // DOM Elements cache
  let dom = {};

  // Initialize App on DOM Load
  document.addEventListener('DOMContentLoaded', initApp);

  function initApp() {
    dom = {
      app: document.getElementById('app'),
      themeToggle: document.getElementById('themeToggle')
    };

    // 1. Initialize Theme
    initTheme();

    // 2. Load Unified Exam Data
    if (window.ON_TAP_DATA) {
      state.data = window.ON_TAP_DATA;
    } else {
      console.error('Data not loaded from data.js');
      dom.app.innerHTML = '<div class="main-wrapper"><p style="color:red; text-align:center;">Lỗi nạp dữ liệu câu hỏi. Vui lòng tải lại trang!</p></div>';
      return;
    }

    // 3. Setup Hash Routing & Listener
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // 4. Keyboard Shortcuts for Quick Answering (A, B, C, D / Left, Right arrows)
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('on_tap_theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('on_tap_theme', theme);
    if (dom.themeToggle) {
      dom.themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      dom.themeToggle.setAttribute('title', theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối');
    }
  }

  // Hash-based Routing
  function handleRoute() {
    const hash = window.location.hash.replace(/^#\/?/, '') || 'hub';
    const parts = hash.split('/');
    const view = parts[0];

    if (view === 'hub' || !view) {
      const grade = parts[1] || state.activeGrade || '10';
      showHubView(grade);
    } else if (view === 'test' && parts[1]) {
      const testId = parts[1];
      const qIdx = parts[2] ? parseInt(parts[2], 10) : 0;
      const initialMode = parts[3] || state.mode || 'practice';
      launchTest(testId, qIdx, initialMode);
    } else if (view === 'result') {
      showResultView();
    } else {
      showHubView('10');
    }
  }

  // ==========================================================================
  // VIEW: HUB (GRADE & TEST SELECTION)
  // ==========================================================================
  function showHubView(grade) {
    stopTimer();
    state.activeView = 'hub';
    state.activeGrade = grade in state.data.grades ? grade : '10';

    const currentGradeData = state.data.grades[state.activeGrade];

    let html = `
      <div class="main-wrapper">
        <!-- Banner cảnh báo AI thường trực theo AGENTS.md §6 -->
        <div class="ai-portal-notice">
          <span>🤖</span>
          <span><b>Lưu ý học tập:</b> Toàn bộ học liệu và bài tập ôn tập được xây dựng chuẩn mực theo chương trình GDPT 2018. Học sinh có thể tự do luyện tập không cần đăng nhập.</span>
        </div>

        <!-- Tiêu đề CỔNG LUYỆN TẬP -->
        <div style="margin-bottom: 1.25rem;">
          <h2 style="font-size: 1.85rem; font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; color: var(--text-main);">
            CỔNG LUYỆN TẬP
          </h2>
        </div>

        <!-- Grade Tabs Navigation -->
        <div class="grade-nav">
          <button class="grade-nav-btn ${state.activeGrade === '10' ? 'active' : ''}" onclick="window.location.hash='#hub/10'">
            📘 Khối 10 <span class="pill">80 câu</span>
          </button>
          <button class="grade-nav-btn ${state.activeGrade === '11' ? 'active' : ''}" onclick="window.location.hash='#hub/11'">
            📗 Khối 11 <span class="pill">3 Đề · 84 câu</span>
          </button>
          <button class="grade-nav-btn ${state.activeGrade === '12' ? 'active' : ''}" onclick="window.location.hash='#hub/12'">
            📙 Khối 12 <span class="pill">3 Đề · 86 câu</span>
          </button>
        </div>

        <!-- Grade Header Info -->
        <div style="margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.35rem;">
            ${escapeHtml(currentGradeData.title)}
          </h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            ${escapeHtml(currentGradeData.description)}
          </p>
        </div>

        <!-- Tests Grid -->
        <div class="tests-grid">
    `;

    currentGradeData.tests.forEach(test => {
      const qCount = test.items.length;
      const duration = test.duration_minutes || 60;
      const badgeClass = `g${state.activeGrade}`;

      html += `
        <div class="test-card">
          <div class="test-card-header">
            <span class="test-badge ${badgeClass}">${currentGradeData.name}</span>
            <span class="test-duration">⏱️ ${duration} phút</span>
          </div>
          <h4 class="test-title">${escapeHtml(test.title)}</h4>
          <p class="test-subtitle">${escapeHtml(test.subtitle || '')}</p>
          
          <div class="test-meta">
            <span>📝 <b>${qCount}</b> câu hỏi</span>
            <span>🎯 Tự học hoặc Thi thử</span>
          </div>

          <div class="test-actions">
            <button class="btn btn-primary" onclick="launchTestRoute('${test.id}', 'practice')">
              ⚡ Luyện Tập
            </button>
            <button class="btn btn-subtle" onclick="launchTestRoute('${test.id}', 'exam')">
              ⏱️ Thi Thử
            </button>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    dom.app.innerHTML = html;
  }

  window.launchTestRoute = function (testId, mode) {
    window.location.hash = `#test/${testId}/0/${mode}`;
  };

  // ==========================================================================
  // VIEW: RUNNER (EXAM / PRACTICE WORKSPACE)
  // ==========================================================================
  function launchTest(testId, qIdx, mode) {
    // Locate test across all grades
    let foundTest = null;
    let foundGrade = null;

    for (const [gradeKey, gradeData] of Object.entries(state.data.grades)) {
      const t = gradeData.tests.find(x => x.id === testId);
      if (t) {
        foundTest = t;
        foundGrade = gradeKey;
        break;
      }
    }

    if (!foundTest) {
      alert('Không tìm thấy bài tập hoặc đề thi đã chọn!');
      window.location.hash = '#hub';
      return;
    }

    // If starting a fresh test or switching tests
    if (state.currentTestId !== testId) {
      state.currentTestId = testId;
      state.currentTest = foundTest;
      state.activeGrade = foundGrade;
      state.userAnswers = {};
      state.checkedQuestions = new Set();
      state.flagged = new Set();
      state.mode = mode || 'practice';
      state.timerSeconds = (foundTest.duration_minutes || 60) * 60;
      state.timerRemaining = state.timerSeconds;
      state.startTime = new Date();

      if (state.mode === 'exam') {
        startTimer();
      } else {
        stopTimer();
      }
    } else if (mode && state.mode !== mode) {
      state.mode = mode;
      if (state.mode === 'exam' && !state.timerInterval) {
        startTimer();
      } else if (state.mode === 'practice') {
        stopTimer();
      }
    }

    state.activeView = 'runner';
    state.currentQuestionIdx = Math.max(0, Math.min(qIdx, foundTest.items.length - 1));

    renderRunnerView();
  }

  function renderRunnerView() {
    const test = state.currentTest;
    const items = test.items;
    const item = items[state.currentQuestionIdx];
    const totalQ = items.length;
    const isExamMode = state.mode === 'exam';

    // Find linked passage if applicable
    let passage = null;
    if (item.passage_ref && test.passages && test.passages[item.passage_ref]) {
      passage = test.passages[item.passage_ref];
    } else if (item.passage) {
      passage = { title: "Bài đọc tham khảo", text: item.passage };
    }

    const hasPassage = Boolean(passage);
    const layoutClass = hasPassage ? 'runner-layout has-passage' : 'runner-layout';

    // Check answered status
    const isAnswered = item.id in state.userAnswers;
    const isChecked = state.checkedQuestions.has(item.id);
    const isFlagged = state.flagged.has(item.id);

    let html = `
      <div class="main-wrapper">
        <!-- Top Navigation Bar -->
        <div class="runner-header">
          <div class="runner-info">
            <div class="runner-breadcrumbs">
              <a href="#hub/${state.activeGrade}" style="color:inherit; text-decoration:none;">Khối ${state.activeGrade}</a>
              <span>›</span>
              <span>${escapeHtml(test.title)}</span>
            </div>
            <h2>Câu hỏi ${state.currentQuestionIdx + 1} / ${totalQ}</h2>
          </div>

          <div class="runner-controls">
            <!-- Mode Switcher -->
            <div class="mode-toggle-group">
              <button class="mode-toggle-btn ${!isExamMode ? 'active' : ''}" onclick="switchMode('practice')" title="Luyện tập tự do & kiểm tra đáp án tức thì">
                ⚡ Tự học
              </button>
              <button class="mode-toggle-btn ${isExamMode ? 'active' : ''}" onclick="switchMode('exam')" title="Thi thử tính giờ nộp bài">
                ⏱️ Thi thử
              </button>
            </div>

            <!-- Timer (In Exam Mode) -->
            ${isExamMode ? `
              <div class="timer-box ${state.timerRemaining < 300 ? 'urgent' : ''}" id="timerDisplay">
                ⏱️ ${formatTimer(state.timerRemaining)}
              </div>
            ` : ''}

            <!-- Quick Actions -->
            <button class="btn btn-subtle" onclick="openPrintModal()" style="font-size:0.85rem;" title="In đề thi ra giấy">
              🖨️ Bản in
            </button>
            <button class="btn btn-success" onclick="confirmSubmitTest()">
              ${isExamMode ? 'Nộp bài 🏁' : 'Xem tổng kết 📊'}
            </button>
          </div>
        </div>

        <!-- Main Workspace -->
        <div class="${layoutClass}">
          <!-- Left Column: Reading Passage if any -->
          ${hasPassage ? `
            <div class="passage-card">
              <div class="passage-title">
                <span>📖</span>
                <span>${escapeHtml(passage.title || 'Đoạn văn đọc hiểu')}</span>
              </div>
              <div class="passage-body">
                ${passage.text}
              </div>
            </div>
          ` : ''}

          <!-- Middle Column: Current Question Workspace -->
          <div class="question-card">
            <div class="question-card-top">
              <span class="q-section-badge">${escapeHtml(item.section || 'QUESTION')}</span>
              <button class="flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${item.id}')">
                <span>${isFlagged ? '🚩 Đã gắn cờ' : '🏳️ Đánh dấu'}</span>
              </button>
            </div>

            <div class="q-prompt-box">
              <span class="q-number-lead">Câu ${state.currentQuestionIdx + 1}.</span>
              <span class="q-prompt-text">${item.prompt}</span>
            </div>

            <!-- Question Interactive Input (MCQ vs Writing) -->
            ${renderQuestionInput(item, isChecked, isExamMode)}

            <!-- Feedback & Explanation (Practice Mode when checked, or Exam Mode post-submit) -->
            ${(!isExamMode && isChecked) ? renderFeedbackBox(item) : ''}

            <!-- Footer Navigation -->
            <div class="runner-footer">
              <div class="nav-buttons-group">
                <button class="btn btn-subtle" onclick="prevQuestion()" ${state.currentQuestionIdx === 0 ? 'disabled' : ''}>
                  ◀ Câu trước
                </button>
                <button class="btn btn-primary" onclick="nextQuestion()" ${state.currentQuestionIdx === totalQ - 1 ? 'disabled' : ''}>
                  Câu tiếp theo ▶
                </button>
              </div>

              <div class="nav-buttons-group">
                ${!isExamMode ? `
                  <button class="btn btn-success" onclick="checkCurrentQuestion('${item.id}')" ${!isAnswered ? 'disabled' : ''}>
                    ${isChecked ? 'Kiểm tra lại 🔄' : 'Kiểm tra đáp án 💡'}
                  </button>
                ` : ''}
                <button class="btn btn-subtle" onclick="clearAnswer('${item.id}')" style="font-size:0.85rem;">
                  Xoá chọn
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Question Palette Sidebar -->
          <div class="palette-sidebar">
            <div class="palette-header">
              <span>Bảng câu hỏi (${countAnswered()} / ${totalQ})</span>
            </div>

            <div class="palette-filters">
              <button class="palette-filter-btn ${state.paletteFilter === 'all' ? 'active' : ''}" onclick="setPaletteFilter('all')">Tất cả</button>
              <button class="palette-filter-btn ${state.paletteFilter === 'unanswered' ? 'active' : ''}" onclick="setPaletteFilter('unanswered')">Chưa làm</button>
              <button class="palette-filter-btn ${state.paletteFilter === 'flagged' ? 'active' : ''}" onclick="setPaletteFilter('flagged')">Gắn cờ 🚩</button>
              ${!isExamMode ? `
                <button class="palette-filter-btn ${state.paletteFilter === 'incorrect' ? 'active' : ''}" onclick="setPaletteFilter('incorrect')">Sai ❌</button>
              ` : ''}
            </div>

            <div class="palette-grid">
              ${renderPaletteGrid(items)}
            </div>

            <div class="palette-legend">
              <div class="legend-item"><span class="legend-dot unanswered"></span> Chưa làm</div>
              <div class="legend-item"><span class="legend-dot answered"></span> Đã làm</div>
              ${!isExamMode ? `
                <div class="legend-item"><span class="legend-dot correct"></span> Đúng</div>
                <div class="legend-item"><span class="legend-dot incorrect"></span> Sai</div>
              ` : ''}
              <div class="legend-item"><span class="legend-dot flagged"></span> Gắn cờ</div>
            </div>
          </div>
        </div>
      </div>
    `;

    dom.app.innerHTML = html;
  }

  // Render Option Inputs
  function renderQuestionInput(item, isChecked, isExamMode) {
    const userVal = state.userAnswers[item.id];

    if (item.options && item.options.length > 0) {
      return `
        <div class="options-list">
          ${item.options.map((opt, idx) => {
            const isSelected = userVal === idx;
            let statusClass = isSelected ? 'selected' : '';

            // In Practice Mode, if checked, show correct/incorrect styling
            if (!isExamMode && isChecked) {
              if (idx === item.answer) {
                statusClass += ' correct';
              } else if (isSelected && idx !== item.answer) {
                statusClass += ' incorrect';
              }
            }

            const prefix = String.fromCharCode(65 + idx); // 'A', 'B', 'C', 'D'
            const cleanOptText = opt.replace(/^[A-D]\.\s*/i, '');

            return `
              <div class="option-item ${statusClass}" onclick="selectOption('${item.id}', ${idx})">
                <div class="option-prefix">${prefix}</div>
                <div class="option-text">${cleanOptText}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // Writing / Sentence Building input
      const textVal = typeof userVal === 'string' ? userVal : '';
      return `
        <div class="writing-input-box">
          <textarea 
            class="writing-textarea" 
            id="writingInput"
            placeholder="Gõ câu trả lời hoàn chỉnh của bạn tại đây..."
            oninput="handleWritingInput('${item.id}', this.value)"
          >${escapeHtml(textVal)}</textarea>
        </div>
      `;
    }
  }

  // Render Detailed Pedagogical Feedback Box
  function renderFeedbackBox(item) {
    const isCorrect = isUserAnswerCorrect(item);

    let html = `
      <div class="feedback-box">
        <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
          <span>${isCorrect ? '✅ Chính xác!' : '❌ Chưa chính xác!'}</span>
          <span>${isCorrect ? 'Tuyệt vời, bạn đã trả lời đúng.' : 'Hãy xem lại đáp án chuẩn bên dưới.'}</span>
        </div>
    `;

    if (item.options && typeof item.answer === 'number') {
      const correctPrefix = String.fromCharCode(65 + item.answer);
      const correctOptionText = item.options[item.answer];
      html += `
        <div class="feedback-model-answer">
          <b>Đáp án đúng:</b> <span style="color:var(--success); font-weight:700;">${correctPrefix}. ${correctOptionText.replace(/^[A-D]\.\s*/i, '')}</span>
        </div>
      `;
    } else if (item.model_answers && item.model_answers.length > 0) {
      html += `
        <div class="feedback-model-answer">
          <b>Đáp án mẫu chuẩn:</b>
          <ul style="margin: 0.4rem 0 0 1.25rem; font-weight:500;">
            ${item.model_answers.map(ans => `<li style="color:var(--success); font-weight:600;">${escapeHtml(ans)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (item.explanation) {
      html += `
        <div class="feedback-explanation">
          <b>💡 Phân tích & Lời giải chi tiết:</b><br>
          ${item.explanation}
        </div>
      `;
    }

    html += `</div>`;
    return html;
  }

  // Render Palette Grid Buttons
  function renderPaletteGrid(items) {
    return items.map((it, idx) => {
      const qId = it.id;
      const isCurrent = idx === state.currentQuestionIdx;
      const isAnswered = qId in state.userAnswers;
      const isFlagged = state.flagged.has(qId);
      const isChecked = state.checkedQuestions.has(qId);
      const isExamMode = state.mode === 'exam';

      let status = '';
      if (isCurrent) status += ' current';
      if (isFlagged) status += ' flagged';

      if (!isExamMode && isChecked) {
        if (isUserAnswerCorrect(it)) {
          status += ' correct';
        } else {
          status += ' incorrect';
        }
      } else if (isAnswered) {
        status += ' answered';
      }

      // Filter check
      if (state.paletteFilter === 'unanswered' && isAnswered) return '';
      if (state.paletteFilter === 'answered' && !isAnswered) return '';
      if (state.paletteFilter === 'flagged' && !isFlagged) return '';
      if (state.paletteFilter === 'incorrect' && (!isChecked || isUserAnswerCorrect(it))) return '';

      return `
        <button class="palette-btn ${status}" onclick="jumpToQuestion(${idx})" title="Câu ${idx + 1}">
          ${idx + 1}
        </button>
      `;
    }).join('');
  }

  // Actions & Input Handlers
  window.selectOption = function (qId, optionIdx) {
    state.userAnswers[qId] = optionIdx;
    if (state.mode === 'practice') {
      state.checkedQuestions.add(qId);
    }
    renderRunnerView();
  };

  window.handleWritingInput = function (qId, val) {
    state.userAnswers[qId] = val;
  };

  window.checkCurrentQuestion = function (qId) {
    state.checkedQuestions.add(qId);
    renderRunnerView();
  };

  window.clearAnswer = function (qId) {
    delete state.userAnswers[qId];
    state.checkedQuestions.delete(qId);
    renderRunnerView();
  };

  window.toggleFlag = function (qId) {
    if (state.flagged.has(qId)) {
      state.flagged.delete(qId);
    } else {
      state.flagged.add(qId);
    }
    renderRunnerView();
  };

  window.jumpToQuestion = function (idx) {
    state.currentQuestionIdx = idx;
    window.location.hash = `#test/${state.currentTestId}/${idx}/${state.mode}`;
    renderRunnerView();
  };

  window.prevQuestion = function () {
    if (state.currentQuestionIdx > 0) {
      jumpToQuestion(state.currentQuestionIdx - 1);
    }
  };

  window.nextQuestion = function () {
    if (state.currentTest && state.currentQuestionIdx < state.currentTest.items.length - 1) {
      jumpToQuestion(state.currentQuestionIdx + 1);
    }
  };

  window.switchMode = function (newMode) {
    state.mode = newMode;
    if (newMode === 'exam') {
      startTimer();
    } else {
      stopTimer();
    }
    renderRunnerView();
  };

  window.setPaletteFilter = function (filter) {
    state.paletteFilter = filter;
    renderRunnerView();
  };

  // Keyboard Shortcuts
  function handleKeyboardShortcuts(e) {
    if (state.activeView !== 'runner') return;

    // Do not intercept keyboard if typing in textarea or input
    const targetTag = e.target.tagName.toLowerCase();
    if (targetTag === 'textarea' || targetTag === 'input') return;

    const key = e.key.toUpperCase();
    const currentItem = state.currentTest.items[state.currentQuestionIdx];

    if (['A', 'B', 'C', 'D'].includes(key) && currentItem.options) {
      const idx = key.charCodeAt(0) - 65;
      if (idx < currentItem.options.length) {
        selectOption(currentItem.id, idx);
      }
    } else if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    }
  }

  // Answer Evaluation Logic
  function isUserAnswerCorrect(item) {
    const userVal = state.userAnswers[item.id];
    if (userVal === undefined || userVal === null || userVal === '') return false;

    if (item.options && typeof item.answer === 'number') {
      return userVal === item.answer;
    }

    if (item.model_answers && item.model_answers.length > 0) {
      const cleanUser = normalizeSentence(String(userVal));
      return item.model_answers.some(ma => normalizeSentence(ma) === cleanUser);
    }

    return false;
  }

  function normalizeSentence(s) {
    return (s || '')
      .toLowerCase()
      .trim()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '') // remove punctuation
      .replace(/\s+/g, ' '); // collapse whitespace
  }

  function countAnswered() {
    return Object.keys(state.userAnswers).length;
  }

  // Timer Management
  function startTimer() {
    stopTimer();
    state.timerInterval = setInterval(() => {
      state.timerRemaining--;
      const timerEl = document.getElementById('timerDisplay');
      if (timerEl) {
        timerEl.innerHTML = `⏱️ ${formatTimer(state.timerRemaining)}`;
        if (state.timerRemaining < 300) {
          timerEl.classList.add('urgent');
        }
      }

      if (state.timerRemaining <= 0) {
        stopTimer();
        alert('Hết giờ làm bài! Hệ thống đang tự động chấm điểm và lập bảng tổng kết.');
        submitTest();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatTimer(sec) {
    const s = Math.max(0, sec);
    const m = Math.floor(s / 60);
    const remS = s % 60;
    return `${m.toString().padStart(2, '0')}:${remS.toString().padStart(2, '0')}`;
  }

  // ==========================================================================
  // VIEW: RESULT / SUMMARY
  // ==========================================================================
  window.confirmSubmitTest = function () {
    const totalQ = state.currentTest.items.length;
    const answeredCount = countAnswered();

    if (answeredCount < totalQ) {
      const confirmMsg = `Bạn mới hoàn thành ${answeredCount}/${totalQ} câu hỏi. Bạn có chắc chắn muốn nộp bài và xem tổng kết điểm không?`;
      if (!confirm(confirmMsg)) return;
    }
    submitTest();
  };

  function submitTest() {
    stopTimer();
    state.endTime = new Date();

    const items = state.currentTest.items;
    let correctCount = 0;

    items.forEach(it => {
      if (isUserAnswerCorrect(it)) {
        correctCount++;
      }
    });

    const totalQ = items.length;
    const score10 = ((correctCount / totalQ) * 10).toFixed(1);
    const scorePct = Math.round((correctCount / totalQ) * 100);

    const timeSpentSec = state.timerSeconds - state.timerRemaining;

    state.scoreResult = {
      totalQ,
      correctCount,
      incorrectCount: totalQ - correctCount,
      score10,
      scorePct,
      timeSpentFormatted: formatTimer(timeSpentSec)
    };

    window.location.hash = '#result';
  }

  function showResultView() {
    if (!state.scoreResult || !state.currentTest) {
      window.location.hash = '#hub';
      return;
    }

    state.activeView = 'result';
    const r = state.scoreResult;
    const test = state.currentTest;

    let html = `
      <div class="main-wrapper">
        <div class="result-card">
          <div class="score-circle" style="--score-pct: ${r.scorePct};">
            <div class="score-circle-inner">
              <span class="score-value">${r.score10}</span>
              <span class="score-max">/ 10 ĐIỂM</span>
            </div>
          </div>

          <h2 class="result-title">Kết Quả: ${escapeHtml(test.title)}</h2>
          <p class="result-subtitle">
            ${r.scorePct >= 80 ? '🎉 Xuất sắc! Bạn nắm rất vững kiến thức và kỹ năng của bài thi này.' : 
              r.scorePct >= 65 ? '👏 Rất tốt! Bạn làm đúng phần lớn câu hỏi. Hãy xem lại các câu chưa đúng bên dưới.' :
              '💪 Cố gắng thêm nhé! Xem lại toàn bộ lời giải chi tiết bên dưới để bổ sung kiến thức.'}
          </p>

          <div class="stats-grid">
            <div class="stat-box">
              <div class="stat-num correct">${r.correctCount}</div>
              <div class="stat-label">Số câu đúng</div>
            </div>
            <div class="stat-box">
              <div class="stat-num incorrect">${r.incorrectCount}</div>
              <div class="stat-label">Số câu sai / bỏ qua</div>
            </div>
            <div class="stat-box">
              <div class="stat-num">${r.scorePct}%</div>
              <div class="stat-label">Tỉ lệ chính xác</div>
            </div>
            <div class="stat-box">
              <div class="stat-num">${r.timeSpentFormatted}</div>
              <div class="stat-label">Thời gian làm bài</div>
            </div>
          </div>

          <div class="result-actions">
            <button class="btn btn-primary" onclick="launchTestRoute('${state.currentTestId}', 'practice')">
              🔄 Làm lại đề này
            </button>
            <button class="btn btn-subtle" onclick="openPrintModal()">
              🖨️ In đề & Lời giải
            </button>
            <button class="btn btn-subtle" onclick="window.location.hash='#hub/${state.activeGrade}'">
              📚 Chọn đề khác
            </button>
          </div>
        </div>

        <!-- Full Review List -->
        <div class="review-section">
          <div class="review-header">
            <h3 style="font-size:1.3rem; font-weight:800;">Chi Tiết Từng Câu Hỏi & Lời Giải</h3>
            <span style="font-size:0.9rem; color:var(--text-muted);">${test.items.length} câu hỏi</span>
          </div>

          ${test.items.map((it, idx) => {
            const isCorrect = isUserAnswerCorrect(it);
            const userVal = state.userAnswers[it.id];

            return `
              <div class="review-item" style="border-left: 4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
                  <span style="font-weight:700; color:var(--primary);">Câu ${idx + 1} (${it.section || 'QUESTION'})</span>
                  <span style="font-weight:700; color:${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                    ${isCorrect ? '✅ Đúng' : '❌ Sai'}
                  </span>
                </div>

                <div style="font-size:1rem; margin-bottom:0.75rem;">
                  ${it.prompt}
                </div>

                ${renderReviewOptions(it, userVal)}

                <div style="background:var(--bg-subtle); padding:0.75rem 1rem; border-radius:var(--radius-sm); font-size:0.92rem; margin-top:0.75rem;">
                  <b>💡 Giải thích chi tiết:</b><br>
                  ${it.explanation || 'Chưa có giải thích.'}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    dom.app.innerHTML = html;
  }

  function renderReviewOptions(item, userVal) {
    if (item.options) {
      return `
        <div style="display:flex; flex-direction:column; gap:0.4rem; font-size:0.92rem;">
          ${item.options.map((opt, i) => {
            const isUserChoice = userVal === i;
            const isAnswerKey = i === item.answer;

            let mark = '';
            let style = 'padding:4px 8px; border-radius:4px;';
            if (isAnswerKey) {
              style += ' background:var(--success-bg); color:var(--success-text); font-weight:700; border:1px solid var(--success-border);';
              mark = ' ✅ (Đáp án đúng)';
            } else if (isUserChoice && !isAnswerKey) {
              style += ' background:var(--danger-bg); color:var(--danger-text); font-weight:600; border:1px solid var(--danger-border);';
              mark = ' ❌ (Lựa chọn của bạn)';
            }

            return `<div style="${style}">${opt}${mark}</div>`;
          }).join('')}
        </div>
      `;
    } else {
      return `
        <div style="font-size:0.95rem; margin-bottom:0.5rem;">
          <p><b>Câu trả lời của bạn:</b> <i>${userVal ? escapeHtml(String(userVal)) : '(Chưa điền)'}</i></p>
          <p style="color:var(--success); font-weight:600;"><b>Đáp án mẫu:</b> ${escapeHtml(item.model_answers ? item.model_answers.join(' / ') : '')}</p>
        </div>
      `;
    }
  }

  // ==========================================================================
  // MODAL: PRINT PREVIEW / WORKSHEET
  // ==========================================================================
  window.openPrintModal = function () {
    const test = state.currentTest;
    if (!test) return;

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'printModal';

    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3 style="font-size:1.15rem; font-weight:700;">Tùy Chọn In Đề Thi & Phiếu Bài Tập</h3>
          <button class="btn-icon" onclick="closePrintModal()">✕</button>
        </div>

        <div class="modal-body">
          <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem; align-items:center;">
            <label style="display:flex; align-items:center; gap:0.5rem; cursor:pointer; font-weight:600;">
              <input type="checkbox" id="printAnswersCheck" onchange="togglePrintAnswers(this.checked)">
              Hiển thị đáp án & lời giải chi tiết (Dành cho Giáo viên / Tự đối soát)
            </label>
            <button class="btn btn-primary" onclick="window.print()">
              🖨️ In ngay (Print)
            </button>
          </div>

          <!-- Printable Worksheet Document -->
          <div id="printSheet" style="background:white; color:black; padding:1.5rem; border:1px solid #ccc; font-family:'Times New Roman', serif; line-height:1.5;">
            <div style="display:flex; justify-content:space-between; border-bottom:2px solid black; padding-bottom:1rem; margin-bottom:1.5rem;">
              <div>
                <h3 style="margin:0; font-size:14pt; text-transform:uppercase;">Trường THPT ................................................</h3>
                <p style="margin:4px 0;">Môn: <b>Tiếng Anh — Giữa Học Kì 1</b></p>
                <p style="margin:4px 0;">Họ và tên: .................................................... Lớp: ..........</p>
              </div>
              <div style="text-align:right;">
                <h3 style="margin:0; font-size:14pt; text-transform:uppercase;">${escapeHtml(test.title)}</h3>
                <p style="margin:4px 0;">Thời gian: <b>${test.duration_minutes || 60} phút</b> (Không kể phát đề)</p>
                <p style="margin:4px 0;">Mã đề thi: <b>${test.id.toUpperCase()}</b></p>
              </div>
            </div>

            ${renderPrintQuestions(test)}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  };

  window.closePrintModal = function () {
    const modal = document.getElementById('printModal');
    if (modal) modal.remove();
  };

  window.togglePrintAnswers = function (checked) {
    state.printWithAnswers = checked;
    const printSheet = document.getElementById('printSheet');
    if (printSheet && state.currentTest) {
      printSheet.innerHTML = `
        <div style="display:flex; justify-content:space-between; border-bottom:2px solid black; padding-bottom:1rem; margin-bottom:1.5rem;">
          <div>
            <h3 style="margin:0; font-size:14pt; text-transform:uppercase;">Trường THPT ................................................</h3>
            <p style="margin:4px 0;">Môn: <b>Tiếng Anh — Giữa Học Kì 1</b></p>
            <p style="margin:4px 0;">Họ và tên: .................................................... Lớp: ..........</p>
          </div>
          <div style="text-align:right;">
            <h3 style="margin:0; font-size:14pt; text-transform:uppercase;">${escapeHtml(state.currentTest.title)}</h3>
            <p style="margin:4px 0;">Thời gian: <b>${state.currentTest.duration_minutes || 60} phút</b></p>
            <p style="margin:4px 0;">Mã đề: <b>${state.currentTest.id.toUpperCase()}</b></p>
          </div>
        </div>
        ${renderPrintQuestions(state.currentTest)}
      `;
    }
  };

  function renderPrintQuestions(test) {
    let html = '';
    test.items.forEach((it, idx) => {
      html += `
        <div style="margin-bottom:1rem; page-break-inside:avoid;">
          <p style="margin:0 0 4px; font-weight:bold;">
            Câu ${idx + 1}: <span style="font-weight:normal;">${it.prompt}</span>
          </p>
      `;

      if (it.options) {
        html += `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:4px; margin-left:1.5rem;">`;
        it.options.forEach((opt, oIdx) => {
          const isCorrect = oIdx === it.answer;
          const hl = (state.printWithAnswers && isCorrect) ? 'style="font-weight:bold; text-decoration:underline;"' : '';
          html += `<div ${hl}>${opt}</div>`;
        });
        html += `</div>`;
      } else {
        html += `<div style="margin:8px 0 8px 1.5rem; border-bottom:1px dotted black; height:24px;"></div>`;
        if (state.printWithAnswers && it.model_answers) {
          html += `<div style="margin-left:1.5rem; color:#15803d; font-weight:bold;">Đáp án: ${it.model_answers.join(' / ')}</div>`;
        }
      }

      if (state.printWithAnswers && it.explanation) {
        html += `
          <div style="margin:6px 0 8px 1.5rem; font-size:10pt; color:#475569; font-style:italic;">
            [Lời giải]: ${it.explanation}
          </div>
        `;
      }

      html += `</div>`;
    });
    return html;
  }

  // Utilities
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
