/**
 * APP.JS - English Insiders Core Application Controller
 * SPA Hash Router, Audio Engine, Dashboard Visualizer & Data View Renderers
 */

// Global Helpers (exposed on window for inline HTML handlers)
window.checkGgdInlineTheoryPractice = function(btn, isCorrect, feedbackMsg) {
  const container = btn.closest('.ggd-inline-check-box') || btn.parentElement.parentElement;
  if (!container) return;
  const feedbackEl = container.querySelector('.ggd-inline-feedback');
  const allBtns = container.querySelectorAll('.ggd-inline-opt-btn');

  allBtns.forEach(b => {
    b.disabled = true;
    b.style.opacity = '0.7';
  });

  if (isCorrect) {
    btn.style.background = '#dcfce7';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#047857';
    btn.style.opacity = '1';
    if (feedbackEl) {
      feedbackEl.style.color = '#047857';
      feedbackEl.style.marginTop = '10px';
      feedbackEl.innerHTML = feedbackMsg;
    }
  } else {
    btn.style.background = '#fee2e2';
    btn.style.borderColor = '#ef4444';
    btn.style.color = '#b91c1c';
    btn.style.opacity = '1';
    if (feedbackEl) {
      feedbackEl.style.color = '#b91c1c';
      feedbackEl.style.marginTop = '10px';
      feedbackEl.innerHTML = feedbackMsg;
    }
  }
};

window.toggleAudioPlay = function() {
  const audio = document.getElementById('hsg12-audio-element');
  const btn = document.getElementById('audio-play-btn');
  if (!audio || !btn) return;

  if (audio.paused) {
    audio.play().catch(e => console.log('Audio playback prevented:', e));
    btn.innerHTML = '❚❚';
  } else {
    audio.pause();
    btn.innerHTML = '▶';
  }
};

window.setAudioSpeed = function(speed) {
  const audio = document.getElementById('hsg12-audio-element');
  if (audio) audio.playbackRate = speed;
};

window.seekAudio = function(e) {
  const audio = document.getElementById('hsg12-audio-element');
  const timeline = document.getElementById('audio-timeline');
  if (!audio || !timeline) return;

  const rect = timeline.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pos * audio.duration;
};

window.toggleTranscript = function() {
  const panel = document.getElementById('audio-transcript-panel');
  if (panel) panel.classList.toggle('active');
};

let globalHsgData = null;
let globalEng10Data = null;
let globalVocabData = null;

window.openCgelModuleDetails = function(modId) {
  if (!globalHsgData || !globalHsgData.cgel_modules) return;
  const mod = globalHsgData.cgel_modules[modId];
  const container = document.getElementById('cgel-active-module-detail');
  if (!mod || !container) return;

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <h2 class="quiz-header__title">${mod.title}</h2>
        <button class="btn btn--secondary btn--sm" onclick="document.getElementById('cgel-active-module-detail').innerHTML=''">Close Details</button>
      </div>
      <p style="margin-bottom: 18px; color: var(--text-secondary); font-size: 0.95rem;">${mod.desc}</p>
      <div class="sub-task-grid">
        ${(mod.topics || []).map(t => `
          <div class="sub-task-card">
            <div class="sub-task-card__title">${t.title}</div>
            <div class="sub-task-card__meta">ID: ${t.mindmapId || 'Topic'} &bull; Detailed Syntax</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.scrollIntoView({ behavior: 'smooth' });
};

window.openE10LevelModal = function(levelId) {
  if (!globalEng10Data || !Array.isArray(globalEng10Data.grammar_levels)) return;
  const lvl = globalEng10Data.grammar_levels.find(l => String(l.id) === String(levelId));
  const container = document.getElementById('e10-level-interactive-area');
  if (!lvl || !container) return;

  container.innerHTML = `
    <div class="quiz-container">
      <div class="quiz-header">
        <div>
          <span class="badge badge--e10" style="margin-bottom: 6px;">Level ${lvl.id}</span>
          <h2 class="quiz-header__title">${lvl.name}</h2>
        </div>
        <button class="btn btn--secondary btn--sm" onclick="document.getElementById('e10-level-interactive-area').innerHTML=''">Close Practice</button>
      </div>
      ${lvl.theory ? `<div class="quiz-passage-box"><strong>Theory Notes:</strong><br>${lvl.theory.replace(/\n/g, '<br>')}</div>` : ''}
      <div class="questions-list">
        ${(lvl.questions || []).map((q, idx) => `
          <div class="question-card" id="card-e10-${lvl.id}-${idx}">
            <div class="question-prompt">${q.q || q.question || 'Question'}</div>
            <div class="options-grid">
              ${(q.opts || q.options || []).map((opt, optIdx) => `
                <button class="opt-btn" onclick="QuizEngine.handleOptionClick(this, 'e10_${lvl.id}_${idx}', ${optIdx}, ${q.ans !== undefined ? q.ans : (q.correct !== undefined ? q.correct : 0)}, ${JSON.stringify(q.expl || 'Standard grammar rule')}, ${JSON.stringify(q.explVn || q.expl || 'Giải thích ngữ pháp')})">
                  ${opt}
                </button>
              `).join('')}
            </div>
            <div class="explanation-box" id="expl-box-e10_${lvl.id}_${idx}">
              <div class="expl-tabs">
                <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'en', 'e10_${lvl.id}_${idx}')">English Analysis</button>
                <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'vn', 'e10_${lvl.id}_${idx}')">Giải thích VN</button>
              </div>
              <div class="expl-content"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  container.scrollIntoView({ behavior: 'smooth' });
};

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Search Index
  if (window.PortalSearch) {
    window.PortalSearch.init();
  }

  let skillsChart = null;
  let progressChart = null;

  // Fetch JSON datasets
  try {
    const [hsgRes, e10Res, vocabRes] = await Promise.all([
      fetch('data/hsg12-topics.json').then(r => r.json()).catch(() => null),
      fetch('data/eng10-units.json').then(r => r.json()).catch(() => null),
      fetch('data/vocab-c1c2.json').then(r => r.json()).catch(() => null)
    ]);
    globalHsgData = hsgRes;
    globalEng10Data = e10Res;
    globalVocabData = vocabRes;
  } catch (e) {
    console.warn('Error loading JSON datasets:', e);
  }

  // 2. Router & View Switching
  const viewMap = {
    'home': 'overview-view',
    'overview': 'overview-view',
    'dashboard': 'dashboard-view',
    'hsg12': 'category-hsg12-view',
    'english10': 'category-english10-view',
    'hsg12-reading': 'task-hsg12-reading',
    'hsg12-listening': 'task-hsg12-listening',
    'hsg12-cgel': 'task-hsg12-cgel',
    'hsg12-vocab': 'task-hsg12-vocab',
    'quiz': 'quiz-hub-view'
  };

  const breadcrumbMap = {
    'overview-view': ['Portal Home'],
    'dashboard-view': ['Portal Home', 'Dashboard & Progress'],
    'category-hsg12-view': ['Portal Home', 'HSG 12 Hub'],
    'category-english10-view': ['Portal Home', 'English 10'],
    'task-hsg12-reading': ['Portal Home', 'HSG 12', 'Reading Comprehension'],
    'task-hsg12-listening': ['Portal Home', 'HSG 12', 'Listening Lab'],
    'task-hsg12-cgel': ['Portal Home', 'HSG 12', 'CGEL Grammar Master'],
    'task-hsg12-vocab': ['Portal Home', 'HSG 12', 'Destination C1/C2 Vocab'],
    'quiz-hub-view': ['Portal Home', 'Practice Tests & Quiz Hub']
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

    // Update Sidebar active state
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Mobile Bottom Nav active state
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      if (item.dataset.view === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Breadcrumbs
    updateBreadcrumbs(viewId);

    // If switching to Dashboard, render charts
    if (viewId === 'dashboard-view') {
      renderDashboard();
    }

    // Close mobile drawer if open
    closeMobileSidebar();
  }

  function updateBreadcrumbs(viewId) {
    const container = document.getElementById('app-breadcrumbs');
    if (!container) return;

    const trail = breadcrumbMap[viewId] || ['Portal Home'];
    container.innerHTML = trail.map((crumb, idx) => {
      const isLast = (idx === trail.length - 1);
      if (isLast) {
        return `<span class="breadcrumb__current">${crumb}</span>`;
      } else {
        return `
          <span class="breadcrumb__link" onclick="window.location.hash='#home'">${crumb}</span>
          <span class="breadcrumb__separator">/</span>
        `;
      }
    }).join('');
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const targetViewId = viewMap[hash] || 'overview-view';
    switchView(targetViewId);
  }

  window.addEventListener('hashchange', handleHashChange);

  // 3. Mobile Drawer Controls
  const hamburgerBtn = document.getElementById('header-hamburger-btn');
  const sidebarEl = document.getElementById('app-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');

  function openMobileSidebar() {
    if (sidebarEl) sidebarEl.classList.add('open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
  }

  function closeMobileSidebar() {
    if (sidebarEl) sidebarEl.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

  // 4. Render HSG 12 Reading Passages
  function renderReadingPassages() {
    const container = document.getElementById('reading-passages-container');
    if (!container || !globalHsgData || !Array.isArray(globalHsgData.reading)) return;

    container.innerHTML = globalHsgData.reading.map((passage) => `
      <div class="quiz-container">
        <div class="quiz-header">
          <h2 class="quiz-header__title">${passage.title}</h2>
          <span class="badge badge--hsg">${passage.tag || 'READING'}</span>
        </div>
        <div class="quiz-passage-box">
          ${passage.text ? passage.text.replace(/\n\n/g, '<br><br>') : ''}
        </div>
        <div class="questions-list">
          ${(passage.questions || []).map((q) => `
            <div class="question-card" id="card-${q.id}">
              <div class="question-prompt">${q.question}</div>
              <div class="options-grid">
                ${(q.options || []).map((opt, optIdx) => `
                  <button class="opt-btn" onclick="QuizEngine.handleOptionClick(this, '${q.id}', ${optIdx}, ${q.correct}, ${JSON.stringify(q.explanation || '')}, ${JSON.stringify(q.explanationVn || '')})">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" id="expl-box-${q.id}">
                <div class="expl-tabs">
                  <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'en', '${q.id}')">English Analysis</button>
                  <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'vn', '${q.id}')">Bản dịch & Giải thích VN</button>
                </div>
                <div class="expl-content"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. Render HSG 12 Listening Lab
  function renderListeningLab() {
    const container = document.getElementById('listening-tasks-container');
    if (!container) return;

    const questions = Array.isArray(globalHsgData?.listening) ? globalHsgData.listening : [];

    container.innerHTML = `
      <div class="audio-player-widget">
        <div class="audio-player__top">
          <div class="audio-track-info">
            <span class="audio-track-icon">🎧</span>
            <div>
              <div class="audio-track-title">Track 04: HSG 12 Official Listening Comprehension</div>
              <div style="font-size: 0.8rem; color: #cbd5e1;">Official Audio Assessment Section</div>
            </div>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="audio-speed-btn" onclick="setAudioSpeed(0.75)">0.75x</button>
            <button class="audio-speed-btn" onclick="setAudioSpeed(1.0)">1.0x</button>
            <button class="audio-speed-btn" onclick="setAudioSpeed(1.25)">1.25x</button>
          </div>
        </div>

        <audio id="hsg12-audio-element" src="audio/04_Track_4.mp3" preload="metadata"></audio>

        <div class="audio-controls">
          <button class="audio-play-btn" id="audio-play-btn" onclick="toggleAudioPlay()">▶</button>
          <div class="audio-timeline-wrapper">
            <span class="audio-time-label" id="audio-cur-time">0:00</span>
            <div class="audio-timeline" id="audio-timeline" onclick="seekAudio(event)">
              <div class="audio-timeline__progress" id="audio-progress-bar"></div>
            </div>
            <span class="audio-time-label" id="audio-dur-time">0:00</span>
          </div>
        </div>

        <button class="transcript-toggle-btn" onclick="toggleTranscript()">📝 Toggle Audio Script</button>
        <div class="transcript-panel" id="audio-transcript-panel">
          <strong>Listening Script Preview:</strong><br>
          <em>[Track 4 Audio Content] - You will hear a recording twice. Answer the questions as you listen.</em>
        </div>
      </div>

      <div class="quiz-container">
        <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 18px; color: var(--navy-900);">Comprehension Questions</h3>
        <div class="questions-list">
          ${questions.map((q) => `
            <div class="question-card" id="card-${q.id}">
              <div class="question-prompt"><strong>Question ${q.qNum || ''}:</strong> ${q.question}</div>
              <div class="options-grid">
                ${(q.options || []).map((opt, optIdx) => `
                  <button class="opt-btn" onclick="QuizEngine.handleOptionClick(this, '${q.id}', ${optIdx}, ${q.correct}, ${JSON.stringify(q.explanation || '')}, ${JSON.stringify(q.explanationVn || '')})">
                    ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="explanation-box" id="expl-box-${q.id}">
                <div class="expl-tabs">
                  <button class="expl-tab-btn active" onclick="QuizEngine.switchExplanationTab(this, 'en', '${q.id}')">English Analysis</button>
                  <button class="expl-tab-btn" onclick="QuizEngine.switchExplanationTab(this, 'vn', '${q.id}')">Giải thích VN</button>
                </div>
                <div class="expl-content"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    setupAudioEvents();
  }

  function setupAudioEvents() {
    const audio = document.getElementById('hsg12-audio-element');
    const progressBar = document.getElementById('audio-progress-bar');
    const curTime = document.getElementById('audio-cur-time');
    const durTime = document.getElementById('audio-dur-time');

    if (!audio) return;

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressBar) progressBar.style.width = pct + '%';
        if (curTime) curTime.textContent = formatTime(audio.currentTime);
        if (durTime) durTime.textContent = formatTime(audio.duration);
      }
    });

    audio.addEventListener('loadedmetadata', () => {
      if (durTime) durTime.textContent = formatTime(audio.duration);
    });
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // 6. Render CGEL Grammar Master
  function renderCgelGrammar() {
    const container = document.getElementById('cgel-modules-container');
    if (!container || !globalHsgData || !globalHsgData.cgel_modules) return;

    container.innerHTML = `
      <div class="card-grid">
        ${Object.entries(globalHsgData.cgel_modules).map(([id, mod]) => `
          <div class="portal-card portal-card--cgel" onclick="openCgelModuleDetails('${id}')">
            <div class="portal-card__header">
              <div class="portal-card__icon-box">🏛️</div>
              <span class="badge badge--cgel">Module ${id}</span>
            </div>
            <div class="portal-card__title">${mod.title}</div>
            <div class="portal-card__desc">${mod.desc}</div>
            <div class="portal-card__tags">
              <span class="portal-card__tag">${mod.topics ? mod.topics.length : 0} Core Topics</span>
              <span class="portal-card__tag">Theory & Mindmaps</span>
            </div>
            <div class="portal-card__footer">
              <span>Explore Module</span>
              <span>&rarr;</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div id="cgel-active-module-detail" style="margin-top: 24px;"></div>
    `;
  }

  // 7. Render English 10 Hub
  function renderEnglish10() {
    const container = document.getElementById('english10-levels-container');
    if (!container || !globalEng10Data || !Array.isArray(globalEng10Data.grammar_levels)) return;

    container.innerHTML = `
      <div class="card-grid">
        ${globalEng10Data.grammar_levels.map((lvl) => `
          <div class="portal-card portal-card--e10" onclick="openE10LevelModal('${lvl.id}')">
            <div class="portal-card__header">
              <div class="portal-card__icon-box">${lvl.icon || '📘'}</div>
              <span class="badge badge--e10">Level ${lvl.id}</span>
            </div>
            <div class="portal-card__title">${lvl.name || 'Level ' + lvl.id}</div>
            <div class="portal-card__desc">${lvl.room || 'Room'} &bull; ${lvl.role || 'Grammar Practice'}</div>
            <div class="portal-card__tags">
              <span class="portal-card__tag">${lvl.questions ? lvl.questions.length : 0} Questions</span>
              <span class="portal-card__tag">Theory & Practice</span>
            </div>
            <div class="portal-card__footer">
              <span>Start Practice</span>
              <span>&rarr;</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div id="e10-level-interactive-area" style="margin-top: 24px;"></div>
    `;
  }

  // 8. Render Destination C1/C2 Vocab Hub
  function renderVocabHub() {
    const container = document.getElementById('vocab-units-container');
    if (!container || !globalVocabData || !Array.isArray(globalVocabData.units)) return;

    const unitMap = {};
    globalVocabData.units.forEach(u => {
      if (!unitMap[u.unit]) {
        unitMap[u.unit] = {
          unit: u.unit,
          unitTitle: u.unitTitle || `Unit ${u.unit}`,
          shop: u.shop || 'Academy',
          speaker: u.speaker || 'Scholar',
          avatar: u.avatar || '🎓',
          words: []
        };
      }
      if (u.verb) {
        unitMap[u.unit].words.push(u.verb);
      }
    });

    container.innerHTML = `
      <div class="card-grid">
        ${Object.values(unitMap).map(u => `
          <div class="portal-card portal-card--vocab">
            <div class="portal-card__header">
              <div class="portal-card__icon-box">${u.avatar}</div>
              <span class="badge badge--vocab">Unit ${u.unit}</span>
            </div>
            <div class="portal-card__title">${u.unitTitle}</div>
            <div class="portal-card__desc">Academy: ${u.shop} &bull; Speaker: ${u.speaker}</div>
            <div class="portal-card__tags">
              <span class="portal-card__tag">${u.words.length} Target Words</span>
              <span class="portal-card__tag">C1/C2 Level</span>
            </div>
            <div class="portal-card__footer">
              <a href="Idioms/index.html" class="btn btn--accent btn--sm">Study in Sanctuary &rarr;</a>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // 9. Render Dashboard & Statistics with Chart.js
  function renderDashboard() {
    const progress = QuizEngine.getProgress();
    const totalAnswered = progress.totalAnswered || 0;
    const correctCount = progress.correctCount || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    const streak = progress.streakDays || 1;

    // Update stat numbers
    const totalEl = document.getElementById('stat-total-answered');
    const accEl = document.getElementById('stat-accuracy-rate');
    const streakEl = document.getElementById('stat-streak-days');
    const streakSidebar = document.getElementById('sidebar-streak-value');

    if (totalEl) totalEl.textContent = totalAnswered;
    if (accEl) accEl.textContent = accuracy + '%';
    if (streakEl) streakEl.textContent = `${streak} Day${streak > 1 ? 's' : ''}`;
    if (streakSidebar) streakSidebar.textContent = `${streak}d`;

    // Render Radar Chart (Skills Distribution)
    const skillsCanvas = document.getElementById('chart-skills-radar');
    if (skillsCanvas && typeof Chart !== 'undefined') {
      if (skillsChart) skillsChart.destroy();
      const baseVal = Math.max(accuracy, 25);
      skillsChart = new Chart(skillsCanvas, {
        type: 'radar',
        data: {
          labels: ['Reading', 'Listening', 'CGEL Grammar', 'English 10', 'C1/C2 Vocab', 'Idioms'],
          datasets: [{
            label: 'Mastery Level (%)',
            data: [
              Math.min(100, Math.round(baseVal * 0.95)),
              Math.min(100, Math.round(baseVal * 0.88)),
              Math.min(100, Math.round(baseVal * 0.92)),
              Math.min(100, Math.round(baseVal * 0.90)),
              Math.min(100, Math.round(baseVal * 0.85)),
              Math.min(100, Math.round(baseVal * 0.87))
            ],
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            borderColor: '#4f46e5',
            pointBackgroundColor: '#4f46e5',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#4f46e5'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(0, 0, 0, 0.08)' },
              grid: { color: 'rgba(0, 0, 0, 0.08)' },
              suggestedMin: 0,
              suggestedMax: 100,
              pointLabels: { font: { size: 12, weight: '700' }, color: '#0f172a' }
            }
          },
          plugins: { legend: { display: false } }
        }
      });
    }

    // Render Bar Chart (Module Activity)
    const progCanvas = document.getElementById('chart-progress-bars');
    if (progCanvas && typeof Chart !== 'undefined') {
      if (progressChart) progressChart.destroy();
      progressChart = new Chart(progCanvas, {
        type: 'bar',
        data: {
          labels: ['HSG 12 Reading', 'HSG 12 Listening', 'CGEL Master', 'English 10', 'Vocab C1/C2'],
          datasets: [{
            label: 'Questions Answered',
            data: [
              Math.max(1, Math.round(totalAnswered * 0.35)),
              Math.max(1, Math.round(totalAnswered * 0.20)),
              Math.max(1, Math.round(totalAnswered * 0.25)),
              Math.max(1, Math.round(totalAnswered * 0.15)),
              Math.max(1, Math.round(totalAnswered * 0.05))
            ],
            backgroundColor: ['#4f46e5', '#6366f1', '#8b5cf6', '#10b981', '#f59e0b'],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }
  }

  // Listen to Quiz Progress Events
  window.addEventListener('quiz-progress-updated', () => {
    const activeView = document.querySelector('.view-panel.active');
    if (activeView && activeView.id === 'dashboard-view') {
      renderDashboard();
    }
  });

  // 10. Initial Page Load Execution
  renderReadingPassages();
  renderListeningLab();
  renderCgelGrammar();
  renderEnglish10();
  renderVocabHub();
  handleHashChange();
});
