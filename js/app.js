/**
 * APP.JS - English Insiders Learning Portal Core Application Controller
 * ES Module with Spine Data Backbone, SPA Hash Router & AI Evaluation Engine
 */

import { Spine } from '../core/spine.js';

// Global Data Holders
let globalEng10Data = null;
let globalAiEvalData = null;
let skillsChart = null;
let progressChart = null;

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

// Global Practice Theory Inline Check
window.checkGgdInlineTheoryPractice = function(btn, isCorrect, feedbackMsg) {
  const container = btn.closest('.ggd-inline-quiz-box') || btn.parentElement.parentElement;
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

// Open English 10 Interactive Level
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

// Render AI Evaluation Studio View
function renderAiEvalTasks() {
  const container = document.getElementById('ai-eval-tasks-container');
  if (!container || !globalAiEvalData || !Array.isArray(globalAiEvalData.items)) return;

  Spine.openModule('ai_forge', 0);

  container.innerHTML = globalAiEvalData.items.map((item, idx) => {
    const cat = (globalAiEvalData.categories || []).find(c => c.id === (item.error.category || item.error.probe_category));
    const catName = cat ? `${cat.name} (${cat.nameEn})` : 'Ngữ pháp tổng quát';
    const hasError = item.error.present;

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

  // Start timer / view items
  globalAiEvalData.items.forEach(item => {
    Spine.aiEvalOpen(item.id, { kind: item.kind, hasError: item.error.present });
  });
}

// Span selection helper
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

  // Highlight spans
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

  // Spine aiEvalAnswer log
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

// Render Dashboard
function renderDashboard() {
  const metrics = Spine.metrics;
  const totalAnsweredEl = document.getElementById('stat-total-answered');
  const accuracyRateEl = document.getElementById('stat-accuracy-rate');
  const streakDaysEl = document.getElementById('stat-streak-days');

  if (totalAnsweredEl) totalAnsweredEl.textContent = metrics.total || 0;
  if (accuracyRateEl) accuracyRateEl.textContent = `${metrics.accuracy || 0}%`;
  if (streakDaysEl) streakDaysEl.textContent = `${metrics.streak || 1} Ngày`;

  // Render Radar & Progress Charts
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

// Main Application Initialization
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
    const [e10Res, aiEvalRes] = await Promise.all([
      fetch('data/eng10-units.json').then(r => r.json()).catch(() => null),
      fetch('data/ai-eval-bank.json').then(r => r.json()).catch(() => null)
    ]);
    globalEng10Data = e10Res;
    globalAiEvalData = aiEvalRes;
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

  // 6. Router & View Switching
  const viewMap = {
    'home': 'overview-view',
    'overview': 'overview-view',
    'dashboard': 'dashboard-view',
    'english10': 'category-english10-view',
    'ai-eval': 'ai-eval-view',
    'quiz': 'quiz-hub-view'
  };

  const breadcrumbMap = {
    'overview-view': ['Portal Home'],
    'dashboard-view': ['Portal Home', 'Dashboard & Progress'],
    'category-english10-view': ['Portal Home', 'Grammar'],
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
    }
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const targetViewId = viewMap[hash] || 'overview-view';
    switchView(targetViewId);
  }

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();

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
