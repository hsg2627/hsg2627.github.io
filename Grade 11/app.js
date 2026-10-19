// Grade 11 Midterm 1 Interactive Exam Runner
// Standalone application supporting offline (file://) and online deployment

(function() {
  'use strict';

  // Application State
  const state = {
    testsData: null,
    currentTestId: 'test1',
    currentTest: null,
    currentQuestionIdx: 0,
    activeView: 'hub', // 'hub' | 'runner' | 'result' | 'print'
    mode: 'exam', // 'exam' (timed, submit at end) | 'practice' (instant explanation)
    userAnswers: {}, // { [qId]: answerValue }
    flagged: new Set(),
    timerSeconds: 60 * 60, // 60 minutes default
    timerRemaining: 60 * 60,
    timerInterval: null,
    isExamSubmitted: false,
    scoreResult: null,
    printWithAnswers: false
  };

  // DOM Elements cache
  let dom = {};

  // Initialize App
  document.addEventListener('DOMContentLoaded', initApp);

  async function initApp() {
    dom = {
      app: document.getElementById('app'),
      themeToggle: document.getElementById('themeToggle')
    };

    // 1. Initialize Theme
    initTheme();

    // 2. Load Exam Data
    await loadExamData();

    // 3. Setup Hash Routing
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('g11_theme') || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('g11_theme', theme);
    if (dom.themeToggle) {
      dom.themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      dom.themeToggle.setAttribute('title', theme === 'dark' ? 'Chuyển sang Giao diện Sáng' : 'Chuyển sang Giao diện Tối');
    }
  }

  // Data Loading with offline support
  async function loadExamData() {
    if (window.G11_EXAM_DATA) {
      state.testsData = window.G11_EXAM_DATA;
      return;
    }

    try {
      const res = await fetch('data/tests.json');
      if (res.ok) {
        state.testsData = await res.json();
      } else {
        throw new Error('Fetch failed');
      }
    } catch (e) {
      console.warn('Could not load data/tests.json, waiting for G11_EXAM_DATA...', e);
    }
  }

  // Route Handling
  function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'hub';
    const [view, testId, qIdx] = hash.split('/');

    if (view === 'test' && testId) {
      startTest(testId, qIdx ? parseInt(qIdx, 10) : 0);
    } else if (view === 'result') {
      renderResultView();
    } else if (view === 'print' && testId) {
      renderPrintView(testId);
    } else {
      renderHubView();
    }
  }

  function navigateTo(hash) {
    window.location.hash = hash;
  }

  // =========================================================
  // VIEW: HUB / DASHBOARD
  // =========================================================
  function renderHubView() {
    state.activeView = 'hub';
    clearInterval(state.timerInterval);

    if (!state.testsData || !state.testsData.tests) {
      dom.app.innerHTML = `
        <div class="container" style="text-align:center; padding: 60px 20px;">
          <h2>Đang tải dữ liệu bộ đề...</h2>
          <p style="color:var(--text-muted); margin-top:8px;">Vui lòng đợi trong giây lát.</p>
        </div>
      `;
      return;
    }

    const { tests, curriculum, term } = state.testsData;

    dom.app.innerHTML = `
      <div class="container">
        <!-- Hero Section -->
        <section class="hero-banner">
          <div class="hero-tag">
            <span>✨</span> ${curriculum} · ${term}
          </div>
          <h1 class="hero-title">Bộ Bài Tập Ôn Thi Giữa Học Kì 1</h1>
          <p class="hero-desc">
            Trọn bộ 3 đề thi chuẩn hoá định kỳ môn Tiếng Anh Lớp 11 (2025–2026), bám sát kiến thức trọng tâm 
            <strong>Unit 1 (A Long and Healthy Life)</strong>, 
            <strong>Unit 2 (The Generation Gap)</strong>, và 
            <strong>Unit 3 (Cities of the Future)</strong>. 
            Hỗ trợ chế độ thi thử tính giờ, tự luyện tập giải thích chi tiết, và bản in đề bài chuẩn cho giáo viên và học sinh.
          </p>
          <div class="hero-features">
            <span class="feature-pill">🎯 3 Đề thi chuẩn (84 câu hỏi)</span>
            <span class="feature-pill">⏱️ Bấm giờ thi thử 60 phút</span>
            <span class="feature-pill">💡 Ngân hàng giải thích song ngữ</span>
            <span class="feature-pill">🎧 Phát âm Audio trợ động từ</span>
            <span class="feature-pill">🖨️ Xuất bản in có / không đáp án</span>
          </div>
        </section>

        <!-- Mode Selection Header -->
        <div class="mode-bar">
          <div>
            <h2 style="font-size:1.35rem; font-weight:700;">Danh Sách Đề Thi Luyện Tập</h2>
            <p style="font-size:0.88rem; color:var(--text-muted);">Chọn đề thi và chế độ làm bài phù hợp với nhu cầu của bạn</p>
          </div>

          <div class="segmented-control" role="tablist">
            <button class="segmented-item ${state.mode === 'exam' ? 'active' : ''}" id="modeExamBtn">
              <span>⏱️</span> Thi Thử Tính Giờ
            </button>
            <button class="segmented-item ${state.mode === 'practice' ? 'active' : ''}" id="modePracticeBtn">
              <span>💡</span> Luyện Tập Tức Thì
            </button>
          </div>
        </div>

        <!-- Tests Grid -->
        <div class="tests-grid">
          ${tests.map(t => `
            <div class="test-card">
              <div class="card-header-row">
                <span class="card-badge">60 phút · 28 câu</span>
                <span style="font-size:1.4rem;">📝</span>
              </div>
              <h3 class="card-title">${t.title}</h3>
              <p class="card-subtitle">${t.subtitle}</p>

              <div class="card-meta-list">
                <div class="meta-item"><span>🔤</span> Ngữ âm & Ngữ pháp: 10 câu</div>
                <div class="meta-item"><span>📖</span> Đọc điền & Đọc hiểu: 10 câu</div>
                <div class="meta-item"><span>✍️</span> Kỹ năng Viết: 8 câu</div>
                <div class="meta-item"><span>🏆</span> Điểm tối đa: 10.0 điểm</div>
              </div>

              <div class="card-actions">
                <button class="btn btn-primary start-test-btn" data-test="${t.id}">
                  <span>▶️</span> Bắt Đầu Làm Bài
                </button>
                <button class="btn btn-outline print-view-btn" data-test="${t.id}" title="Xem bản in đề bài">
                  <span>🖨️</span> Bản In
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Skill Practice Sections -->
        <div class="section-title-wrap">
          <h2 class="section-title"><span>🎯</span> Luyện Tập Chuyên Sâu Theo Dạng Bài</h2>
          <p class="section-subtitle">Tập trung ôn luyện từng kỹ năng hoặc chuyên đề bạn muốn bồi dưỡng thêm</p>
        </div>

        <div class="skills-grid">
          <div class="skill-card skill-filter-btn" data-skill="phonetics">
            <div class="skill-icon-circle">🎧</div>
            <div class="skill-info">
              <h4>Ngữ Âm, Viết Tắt & Trọng Âm</h4>
              <p>Phát âm dạng mạnh/yếu của can, have, does; 's, 'd; trọng âm 2-3 âm tiết</p>
            </div>
          </div>

          <div class="skill-card skill-filter-btn" data-skill="grammar">
            <div class="skill-icon-circle">🔤</div>
            <div class="skill-info">
              <h4>Từ Vựng & Ngữ Pháp Trọng Tâm</h4>
              <p>Modal verbs (mustn't, have to), thì Hiện tại hoàn thành, Stative verbs</p>
            </div>
          </div>

          <div class="skill-card skill-filter-btn" data-skill="reading">
            <div class="skill-icon-circle">📖</div>
            <div class="skill-info">
              <h4>Đọc Điền Từ & Đọc Hiểu</h4>
              <p>Chủ đề Sống thọ, Vùng xanh Blue Zones, Fast food, Thành phố tương lai</p>
            </div>
          </div>

          <div class="skill-card skill-filter-btn" data-skill="writing">
            <div class="skill-icon-circle">✍️</div>
            <div class="skill-info">
              <h4>Kỹ Năng Viết Câu & Đoạn Văn</h4>
              <p>Sắp xếp hội thoại, viết lại câu với Mustn't/Present Perfect, tạo câu hoàn chỉnh</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners for Hub
    document.getElementById('modeExamBtn').addEventListener('click', () => {
      state.mode = 'exam';
      renderHubView();
    });

    document.getElementById('modePracticeBtn').addEventListener('click', () => {
      state.mode = 'practice';
      renderHubView();
    });

    document.querySelectorAll('.start-test-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const testId = btn.getAttribute('data-test');
        navigateTo(`test/${testId}/0`);
      });
    });

    document.querySelectorAll('.print-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const testId = btn.getAttribute('data-test');
        navigateTo(`print/${testId}`);
      });
    });

    document.querySelectorAll('.skill-filter-btn').forEach(card => {
      card.addEventListener('click', () => {
        // Jump to Test 1 as default skill starter
        navigateTo('test/test1/0');
      });
    });
  }

  // =========================================================
  // VIEW: TEST RUNNER (Exam & Practice)
  // =========================================================
  function startTest(testId, initialQuestionIdx = 0) {
    state.activeView = 'runner';
    state.currentTestId = testId;
    state.currentTest = state.testsData.tests.find(t => t.id === testId);

    if (!state.currentTest) {
      navigateTo('hub');
      return;
    }

    state.currentQuestionIdx = initialQuestionIdx;
    state.isExamSubmitted = false;
    state.userAnswers = state.userAnswers[testId] ? state.userAnswers : {};
    state.flagged = new Set();

    // Start Timer if exam mode and not already running
    if (state.mode === 'exam') {
      state.timerRemaining = state.currentTest.time_minutes * 60;
      startTimer();
    } else {
      clearInterval(state.timerInterval);
    }

    renderRunner();
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      state.timerRemaining--;
      if (state.timerRemaining <= 0) {
        clearInterval(state.timerInterval);
        state.timerRemaining = 0;
        alert('⏰ Đã hết giờ làm bài! Hệ thống sẽ tự động thu bài và chấm điểm.');
        submitExam();
      }
      updateTimerDisplay();
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('runnerTimer');
    if (!timerEl) return;

    const mins = Math.floor(state.timerRemaining / 60);
    const secs = state.timerRemaining % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (state.timerRemaining < 300) { // Under 5 minutes
      timerEl.parentElement.classList.add('urgent');
    } else {
      timerEl.parentElement.classList.remove('urgent');
    }
  }

  function renderRunner() {
    const test = state.currentTest;
    const items = test.items;
    const total = items.length;
    const curIdx = state.currentQuestionIdx;
    const item = items[curIdx];

    const answeredCount = Object.keys(state.userAnswers).length;
    const progressPercent = Math.round((answeredCount / total) * 100);

    dom.app.innerHTML = `
      <div class="container">
        <!-- Runner Top Navigation -->
        <div class="runner-header">
          <div style="display:flex; align-items:center; gap:12px;">
            <button class="btn btn-outline" id="backToHubBtn" style="padding:6px 12px;">
              <span>←</span> Thoát
            </button>
            <div>
              <h2 style="font-size:1.1rem; font-weight:700; margin:0;">${test.title}</h2>
              <span style="font-size:0.8rem; color:var(--text-muted);">
                Chế độ: <strong>${state.mode === 'exam' ? '⏱️ Thi Thử Có Tính Giờ' : '💡 Luyện Tập Tức Thì'}</strong>
              </span>
            </div>
          </div>

          <div style="display:flex; align-items:center; gap:16px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:0.82rem; color:var(--text-muted); font-weight:600;">Tiến độ: ${answeredCount}/${total}</span>
              <div class="progress-track">
                <div class="progress-fill" style="width:${progressPercent}%"></div>
              </div>
            </div>

            ${state.mode === 'exam' && !state.isExamSubmitted ? `
              <div class="timer-pill">
                <span>⏱️</span>
                <span id="runnerTimer">--:--</span>
              </div>
            ` : ''}

            ${!state.isExamSubmitted ? `
              <button class="btn btn-primary" id="submitExamBtn" style="padding:8px 16px;">
                <span>📤</span> Nộp Bài
              </button>
            ` : `
              <button class="btn btn-success" id="viewScorecardBtn" style="padding:8px 16px;">
                <span>📊</span> Xem Bảng Điểm
              </button>
            `}
          </div>
        </div>

        <!-- 2-Column Main Runner -->
        <div class="runner-layout">
          <!-- Left: Question & Content -->
          <div class="question-main-col">
            <div class="question-panel">
              <!-- Section badge -->
              <div class="section-badge-bar">
                <span class="section-label">${item.section}</span>
                <div style="display:flex; gap:8px;">
                  <button class="btn btn-subtle" id="flagQuestionBtn" style="font-size:0.82rem; padding:4px 10px;">
                    <span>${state.flagged.has(item.id) ? '🚩 Đã Đánh Dấu' : '🏳️ Đánh Dấu Xem Lại'}</span>
                  </button>
                </div>
              </div>

              <!-- Instruction -->
              <div class="instruction-text">
                <strong>Yêu cầu:</strong> ${item.instruction_vi || item.instruction}
              </div>

              <!-- Split Passage Container if reading question -->
              ${item.passage_id && test.passages && test.passages[item.passage_id] ? `
                <div class="passage-box">
                  <h4>📖 Bài Đọc: ${test.passages[item.passage_id].title}</h4>
                  ${test.passages[item.passage_id].paragraphs.map(p => `<p>${highlightPassageTokens(p)}</p>`).join('')}
                </div>
              ` : ''}

              <!-- Question Prompt -->
              <div class="question-prompt-wrap">
                <span class="q-number-pill">Câu ${item.num}</span>
                <div class="prompt-text">
                  ${renderPromptWithUnderlines(item.prompt, item.underlined)}
                </div>

                <!-- Text-to-Speech button if pronunciation item -->
                ${item.underlined || item.section.includes('PHONETICS') ? `
                  <button class="audio-btn" id="ttsBtn" title="Nghe phát âm chuẩn tiếng Anh">
                    <span>🔊</span> Nghe phát âm
                  </button>
                ` : ''}
              </div>

              <!-- Options / Input Area based on type -->
              ${renderQuestionInputArea(item)}

              <!-- Explanation Area (Visible in practice mode OR after submit) -->
              ${(state.mode === 'practice' && state.userAnswers[item.id] !== undefined) || state.isExamSubmitted ? `
                <div class="explanation-box">
                  <div class="explanation-title">
                    <span>💡</span> Lời Giải & Hướng Dẫn Chi Tiết
                  </div>
                  <div class="explanation-body">
                    ${item.explanation}
                  </div>
                </div>
              ` : ''}

              <!-- Question Navigation Controls -->
              <div class="runner-controls" style="margin-top:24px;">
                <button class="btn btn-outline" id="prevQBtn" ${curIdx === 0 ? 'disabled' : ''}>
                  <span>←</span> Câu Trước
                </button>

                <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">
                  Câu ${curIdx + 1} / ${total}
                </span>

                <button class="btn btn-primary" id="nextQBtn" ${curIdx === total - 1 ? 'disabled' : ''}>
                  Câu Sau <span>→</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right: Sidebar Palette -->
          <div class="palette-sidebar">
            <div class="palette-title-row">
              <span class="palette-title">Bảng Câu Hỏi (1–${total})</span>
              <span style="font-size:0.8rem; color:var(--text-muted);">
                Đã làm: <strong>${answeredCount}</strong>/${total}
              </span>
            </div>

            <div class="palette-grid">
              ${items.map((it, idx) => {
                let statusClass = '';
                if (idx === curIdx) statusClass += ' active';
                if (state.userAnswers[it.id] !== undefined) statusClass += ' answered';
                if (state.flagged.has(it.id)) statusClass += ' flagged';

                if (state.isExamSubmitted) {
                  const isCorrect = checkIsAnswerCorrect(it, state.userAnswers[it.id]);
                  statusClass += isCorrect ? ' correct' : ' incorrect';
                }

                return `
                  <button class="palette-btn ${statusClass}" data-idx="${idx}">
                    ${idx + 1}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="palette-legend">
              <div class="legend-item">
                <span class="legend-dot" style="background:#e0e7ff; border-color:#a5b4fc;"></span>
                <span>Đã trả lời</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot" style="background:var(--bg-subtle);"></span>
                <span>Chưa làm</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot" style="background:var(--warning);"></span>
                <span>Đã đánh dấu 🚩</span>
              </div>
              <div class="legend-item">
                <span class="legend-dot" style="border:2px solid var(--primary);"></span>
                <span>Đang xem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    updateTimerDisplay();
    attachRunnerEvents();
  }

  function renderPromptWithUnderlines(promptText, underlinedToken) {
    if (!underlinedToken) return escapeHtml(promptText);

    // Escape regex special chars
    const escapedToken = underlinedToken.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedToken})`, 'gi');
    return promptText.replace(regex, '<span class="underlined-token">$1</span>');
  }

  function highlightPassageTokens(text) {
    // Highlight numbers like (11), (12)
    return text.replace(/\((\d+)\)/g, '<strong style="color:var(--primary); background:var(--primary-light); padding:2px 6px; border-radius:4px;">($1)</strong>');
  }

  function renderQuestionInputArea(item) {
    const currentAns = state.userAnswers[item.id];
    const isSubmitted = state.isExamSubmitted;
    const isPractice = state.mode === 'practice';

    // 1. Multiple Choice & Binary Choices
    if (item.type === 'mcq' || item.type === 'binary' || item.type === 'reading_cloze' || item.type === 'reading_comp' || item.type === 'dialogue_arrange' || item.type === 'paragraph_arrange') {
      return `
        <div class="options-grid">
          ${item.options.map((opt, optIdx) => {
            let optClass = 'option-card';
            if (currentAns === optIdx) optClass += ' selected';

            if (isSubmitted || (isPractice && currentAns !== undefined)) {
              if (optIdx === item.answer) {
                optClass += ' is-correct';
              } else if (currentAns === optIdx && currentAns !== item.answer) {
                optClass += ' is-incorrect';
              }
            }

            const keyLetter = String.fromCharCode(65 + optIdx);
            return `
              <div class="${optClass}" data-opt="${optIdx}">
                <div class="option-key">${keyLetter}</div>
                <div class="option-text">${opt}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 2. Sentence Transformation & Sentence Building (Writing)
    if (item.type === 'transform' || item.type === 'sentence_building') {
      const isCorrect = isSubmitted || isPractice ? checkIsAnswerCorrect(item, currentAns) : null;
      return `
        <div class="text-input-wrap">
          ${item.lead_in ? `<div style="font-weight:700; margin-bottom:6px; color:var(--text-primary);">${item.lead_in} ...</div>` : ''}
          <input type="text" class="text-answer-input" id="writingInput" 
                 placeholder="Nhập câu trả lời hoàn chỉnh của bạn tại đây..." 
                 value="${currentAns !== undefined ? escapeHtml(currentAns) : ''}" 
                 ${isSubmitted ? 'readonly' : ''} />
          
          <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center;">
            ${!isSubmitted ? `
              <button class="btn btn-outline" id="saveWritingBtn" style="font-size:0.85rem;">
                <span>💾</span> Lưu câu trả lời
              </button>
            ` : ''}

            ${(isPractice && currentAns) || isSubmitted ? `
              <div style="font-size:0.9rem; font-weight:700; color:${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                ${isCorrect ? '✅ Câu trả lời chính xác!' : '❌ Chưa chính xác hoặc cần điều chỉnh'}
              </div>
            ` : ''}
          </div>

          ${(isPractice && currentAns) || isSubmitted ? `
            <div style="margin-top:14px; background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); border:1px solid var(--border);">
              <div style="font-size:0.8rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Đáp án mẫu chuẩn:</div>
              <ul style="margin:6px 0 0 20px; font-size:0.92rem; color:var(--text-primary);">
                ${item.model_answers.map(ans => `<li><strong>${ans}</strong></li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }

    return '';
  }

  function attachRunnerEvents() {
    const curIdx = state.currentQuestionIdx;
    const test = state.currentTest;
    const item = test.items[curIdx];

    // Navigation buttons
    const prevBtn = document.getElementById('prevQBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (curIdx > 0) {
          state.currentQuestionIdx--;
          renderRunner();
        }
      });
    }

    const nextBtn = document.getElementById('nextQBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (curIdx < test.items.length - 1) {
          state.currentQuestionIdx++;
          renderRunner();
        }
      });
    }

    // Flag button
    const flagBtn = document.getElementById('flagQuestionBtn');
    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        if (state.flagged.has(item.id)) {
          state.flagged.delete(item.id);
        } else {
          state.flagged.add(item.id);
        }
        renderRunner();
      });
    }

    // Option cards selection
    document.querySelectorAll('.option-card').forEach(card => {
      card.addEventListener('click', () => {
        if (state.isExamSubmitted) return;
        const optIdx = parseInt(card.getAttribute('data-opt'), 10);
        state.userAnswers[item.id] = optIdx;
        renderRunner();
      });
    });

    // Writing input save
    const writingInput = document.getElementById('writingInput');
    const saveWritingBtn = document.getElementById('saveWritingBtn');
    if (writingInput) {
      writingInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          state.userAnswers[item.id] = writingInput.value.trim();
          renderRunner();
        }
      });
      if (saveWritingBtn) {
        saveWritingBtn.addEventListener('click', () => {
          state.userAnswers[item.id] = writingInput.value.trim();
          renderRunner();
        });
      }
    }

    // Palette jump
    document.querySelectorAll('.palette-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        state.currentQuestionIdx = idx;
        renderRunner();
      });
    });

    // TTS Audio button
    const ttsBtn = document.getElementById('ttsBtn');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        speakText(item.prompt);
      });
    }

    // Back to hub
    const backBtn = document.getElementById('backToHubBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (!state.isExamSubmitted && state.mode === 'exam' && Object.keys(state.userAnswers).length > 0) {
          if (confirm('Bài thi đang diễn ra! Bạn có chắc muốn tạm dừng và quay lại trang chủ không?')) {
            navigateTo('hub');
          }
        } else {
          navigateTo('hub');
        }
      });
    }

    // Submit button
    const submitBtn = document.getElementById('submitExamBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const total = test.items.length;
        const answered = Object.keys(state.userAnswers).length;
        const unanswered = total - answered;

        let msg = 'Bạn có chắc chắn muốn nộp bài không?';
        if (unanswered > 0) {
          msg = `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`;
        }

        if (confirm(msg)) {
          submitExam();
        }
      });
    }

    // View scorecard button
    const viewScoreBtn = document.getElementById('viewScorecardBtn');
    if (viewScoreBtn) {
      viewScoreBtn.addEventListener('click', () => {
        renderResultView();
      });
    }
  }

  // Audio Speech Synthesis
  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm Web Speech API.');
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/_+/g, 'blank').replace(/Question \d+\.?/i, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // Check Answer Correctness
  function checkIsAnswerCorrect(item, userAnswer) {
    if (userAnswer === undefined || userAnswer === null || userAnswer === '') return false;

    if (item.type === 'mcq' || item.type === 'binary' || item.type === 'reading_cloze' || item.type === 'reading_comp' || item.type === 'dialogue_arrange' || item.type === 'paragraph_arrange') {
      return userAnswer === item.answer;
    }

    if (item.type === 'transform' || item.type === 'sentence_building') {
      const cleanInput = normalizeWritingSentence(String(userAnswer));
      return item.model_answers.some(model => {
        const cleanModel = normalizeWritingSentence(model);
        return cleanInput === cleanModel;
      });
    }

    return false;
  }

  function normalizeWritingSentence(str) {
    return str
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // remove punctuation
      .replace(/\s+/g, ' ') // collapse whitespace
      .replace(/n’t/g, "n't")
      .replace(/’/g, "'")
      .trim();
  }

  // Submit Exam & Score Calculation
  function submitExam() {
    clearInterval(state.timerInterval);
    state.isExamSubmitted = true;

    const test = state.currentTest;
    const items = test.items;

    let totalPoints = 0;
    const maxPoints = 10.0;
    let correctCount = 0;

    const sectionStats = {
      phonetics: { name: 'Ngữ Âm & Dạng Rút Gọn', total: 4, correct: 0, points: 0 },
      grammar: { name: 'Từ Vựng & Ngữ Pháp', total: 6, correct: 0, points: 0 },
      reading: { name: 'Kỹ Năng Đọc (Điền Từ & Đọc Hiểu)', total: 10, correct: 0, points: 0 },
      writing: { name: 'Kỹ Năng Viết', total: 8, correct: 0, points: 0 }
    };

    items.forEach(it => {
      const isCorrect = checkIsAnswerCorrect(it, state.userAnswers[it.id]);
      if (isCorrect) correctCount++;

      // Categorize
      let secKey = 'grammar';
      if (it.section.includes('PHONETICS')) secKey = 'phonetics';
      else if (it.section.includes('CLOZE') || it.section.includes('READING')) secKey = 'reading';
      else if (it.section.includes('WRITING')) secKey = 'writing';

      if (isCorrect) {
        sectionStats[secKey].correct++;
      }
    });

    // Score on 10.0 scale:
    // Phonetics: 4 questions = 1.0 pt (0.25 each)
    // Grammar: 6 questions = 1.2 pt (0.2 each)
    // Cloze: 5 questions = 1.0 pt (0.2 each)
    // Reading Comp: 5 questions = 1.0 pt (0.2 each)
    // Writing: 2 (arrangement 0.4) + 2 (transform 0.4) + 4 (building 1.2) = 2.0 pt
    // Standard total sum = 1.0 + 1.2 + 2.0 + 2.0 = 6.2 scaled to 10.0 or linear:
    const finalScore = Math.round((correctCount / items.length) * 100) / 10;

    state.scoreResult = {
      finalScore: finalScore.toFixed(1),
      correctCount,
      totalCount: items.length,
      percentage: Math.round((correctCount / items.length) * 100),
      timeTakenSeconds: (test.time_minutes * 60) - state.timerRemaining,
      sectionStats
    };

    renderResultView();
  }

  // =========================================================
  // VIEW: SCORECARD & DETAILED REPORT
  // =========================================================
  function renderResultView() {
    state.activeView = 'result';
    const res = state.scoreResult;
    const test = state.currentTest;

    if (!res || !test) {
      navigateTo('hub');
      return;
    }

    const timeMins = Math.floor(res.timeTakenSeconds / 60);
    const timeSecs = res.timeTakenSeconds % 60;

    let badgeText = 'Xuất Sắc! 🌟';
    let badgeClass = 'var(--success)';
    if (res.finalScore < 5.0) {
      badgeText = 'Cần Cố Gắng Thêm 💪';
      badgeClass = 'var(--danger)';
    } else if (res.finalScore < 7.0) {
      badgeText = 'Khá Tốt 👍';
      badgeClass = 'var(--info)';
    } else if (res.finalScore < 8.5) {
      badgeText = 'Rất Tốt 👏';
      badgeClass = 'var(--primary)';
    }

    dom.app.innerHTML = `
      <div class="container result-container">
        <div class="score-hero-card">
          <div class="score-badge" style="background:var(--primary-light); color:${badgeClass}; border:1px solid var(--border);">
            ${badgeText}
          </div>
          <div class="score-number">
            ${res.finalScore} <span class="score-max">/ 10.0</span>
          </div>
          <p class="score-feedback">
            Bạn đã trả lời đúng <strong>${res.correctCount} / ${res.totalCount} câu hỏi</strong> (${res.percentage}% chính xác)
          </p>

          <div class="stats-summary-grid">
            <div class="stat-box">
              <div class="stat-label">Thời gian làm bài</div>
              <div class="stat-value">${timeMins}m ${timeSecs}s</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Số câu chính xác</div>
              <div class="stat-value" style="color:var(--success);">${res.correctCount} / ${res.totalCount}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">Điểm quy đổi</div>
              <div class="stat-value" style="color:var(--primary);">${res.finalScore} điểm</div>
            </div>
          </div>
        </div>

        <!-- Section Breakdown -->
        <div class="question-panel">
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:16px;">Phân Tích Kết Quả Theo Từng Kỹ Năng</h3>
          <div style="display:grid; gap:12px;">
            ${Object.values(res.sectionStats).map(sec => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:12px; background:var(--bg-subtle); border-radius:var(--radius-md); border:1px solid var(--border);">
                <div>
                  <div style="font-weight:700; font-size:0.92rem; color:var(--text-primary);">${sec.name}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">${sec.correct} / ${sec.total} câu đúng</div>
                </div>
                <div style="font-weight:800; font-size:1.05rem; color:${sec.correct === sec.total ? 'var(--success)' : 'var(--primary)'};">
                  ${Math.round((sec.correct / sec.total) * 100)}%
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Actions -->
        <div style="display:flex; gap:12px; margin-top:24px; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-primary" id="reviewAnswersBtn" style="padding:12px 24px;">
            <span>🔍</span> Xem Chi Tiết Đáp Án & Lời Giải
          </button>
          <button class="btn btn-outline" id="retakeTestBtn" style="padding:12px 24px;">
            <span>🔄</span> Làm Lại Đề Này
          </button>
          <button class="btn btn-subtle" id="returnToHubBtn" style="padding:12px 24px;">
            <span>🏠</span> Về Trang Chủ
          </button>
        </div>
      </div>
    `;

    document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
      state.currentQuestionIdx = 0;
      navigateTo(`test/${test.id}/0`);
    });

    document.getElementById('retakeTestBtn').addEventListener('click', () => {
      startTest(test.id, 0);
    });

    document.getElementById('returnToHubBtn').addEventListener('click', () => {
      navigateTo('hub');
    });
  }

  // =========================================================
  // VIEW: PRINTABLE PAPER FORMAT
  // =========================================================
  function renderPrintView(testId) {
    state.activeView = 'print';
    const test = state.testsData.tests.find(t => t.id === testId);
    if (!test) {
      navigateTo('hub');
      return;
    }

    dom.app.innerHTML = `
      <div class="container">
        <!-- Print Controls Bar (Hidden during printing) -->
        <div class="print-controls-bar" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; background:var(--bg-surface); padding:16px 20px; border-radius:var(--radius-lg); border:1px solid var(--border);">
          <button class="btn btn-outline" id="exitPrintBtn">
            <span>←</span> Quay Lại
          </button>

          <div style="display:flex; align-items:center; gap:16px;">
            <label style="display:flex; align-items:center; gap:8px; font-weight:600; font-size:0.9rem; cursor:pointer;">
              <input type="checkbox" id="togglePrintAnswers" ${state.printWithAnswers ? 'checked' : ''} />
              Hiện Đáp Án & Lời Giải (Bản Giáo Viên)
            </label>

            <button class="btn btn-primary" onclick="window.print()">
              <span>🖨️</span> In Đề Bài (Ctrl + P)
            </button>
          </div>
        </div>

        <!-- Real Printable Sheet -->
        <div class="print-paper-wrap">
          <div class="paper-school-header">
            <div>
              <h3>SỞ GIÁO DỤC VÀ ĐÀO TẠO</h3>
              <p>Trường THPT: .....................................................</p>
              <p>Họ và tên học sinh: ..........................................</p>
              <p>Lớp: ................. SBD: .......................................</p>
            </div>
            <div style="text-align:right;">
              <h3>ĐỀ ÔN TẬP KIỂM TRA GIỮA HỌC KÌ 1</h3>
              <p><strong>NĂM HỌC 2025 – 2026</strong></p>
              <p><strong>Môn: TIẾNG ANH 11 (Global Success)</strong></p>
              <p>Thời gian làm bài: 60 phút (Không kể thời gian phát đề)</p>
            </div>
          </div>

          <div class="paper-title">
            <h2>${test.title.toUpperCase()}</h2>
            <p style="font-style:italic;">(Đề thi gồm ${test.total_questions} câu hỏi)</p>
          </div>

          <!-- Question Items in Paper Format -->
          ${test.items.map(it => `
            <div class="paper-item">
              <div class="paper-item-prompt">
                <strong>Question ${it.num}.</strong> ${it.prompt}
                ${it.underlined ? `<span style="font-size:0.85rem; font-style:italic; margin-left:8px;">[Underlined: ${it.underlined}]</span>` : ''}
              </div>

              ${it.options ? `
                <div class="paper-options">
                  ${it.options.map(opt => `<div>${opt}</div>`).join('')}
                </div>
              ` : ''}

              ${it.type === 'transform' || it.type === 'sentence_building' ? `
                <div class="paper-writing-blank">
                  ${it.lead_in ? `<span>${it.lead_in}</span> ` : ''}
                </div>
              ` : ''}

              ${state.printWithAnswers ? `
                <div style="margin-top:6px; padding:6px 10px; background:#f0fdf4; border-left:3px solid #16a34a; font-size:0.9rem;">
                  <strong>Đáp án & Giải thích:</strong> ${it.answer !== undefined ? `[${String.fromCharCode(65 + it.answer)}] ` : ''}${it.explanation}
                  ${it.model_answers ? `<br><em>Đáp án mẫu:</em> ${it.model_answers.join(' | ')}` : ''}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('exitPrintBtn').addEventListener('click', () => {
      navigateTo('hub');
    });

    document.getElementById('togglePrintAnswers').addEventListener('change', (e) => {
      state.printWithAnswers = e.target.checked;
      renderPrintView(testId);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

})();
