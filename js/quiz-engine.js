/**
 * QUIZ-ENGINE.JS - Universal Quiz Evaluation & Interactive Feedback
 * Handles animations, dual-tab explanations (EN/VN), scoring, and persistence.
 */

window.QuizEngine = (function() {
  const STORAGE_KEY = 'english_insiders_quiz_progress';

  // Load progress from localStorage
  function getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {
        completedPassages: [],
        completedListening: [],
        completedCgel: [],
        completedE10: [],
        totalAnswered: 0,
        correctCount: 0,
        streakDays: 1,
        lastActiveDate: new Date().toDateString(),
        userAnswers: {}
      };
    } catch (e) {
      console.warn('LocalStorage unavailable:', e);
      return { totalAnswered: 0, correctCount: 0, streakDays: 1, userAnswers: {} };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress:', e);
    }
  }

  // Handle option selection with animations and explanations
  function handleOptionClick(btn, questionId, optionIndex, correctIndex, explEn, explVn) {
    const parentCard = btn.closest('.question-card');
    if (!parentCard) return;

    // Disable multiple selections once clicked
    const allBtns = parentCard.querySelectorAll('.opt-btn');
    if (parentCard.dataset.answered === 'true') return;
    parentCard.dataset.answered = 'true';

    const isCorrect = (optionIndex === correctIndex);
    const progress = getProgress();
    progress.totalAnswered = (progress.totalAnswered || 0) + 1;

    // Highlight selected button
    if (isCorrect) {
      btn.classList.add('opt-btn--correct');
      progress.correctCount = (progress.correctCount || 0) + 1;
    } else {
      btn.classList.add('opt-btn--wrong');
      // Highlight the correct option so learner sees the right answer immediately
      if (allBtns[correctIndex]) {
        allBtns[correctIndex].classList.add('opt-btn--correct');
      }
    }

    // Save answer state
    progress.userAnswers[questionId] = {
      selected: optionIndex,
      correct: isCorrect,
      timestamp: Date.now()
    };
    saveProgress(progress);

    // Show dual-tab explanation box
    const explBox = parentCard.querySelector('.explanation-box');
    if (explBox) {
      explBox.classList.add('active');
      const contentEl = explBox.querySelector('.expl-content');
      if (contentEl) {
        contentEl.innerHTML = `
          <div class="expl-pane expl-pane--en active" id="pane-en-${questionId}">
            <strong>Analysis:</strong> ${explEn || 'No detailed analysis provided.'}
          </div>
          <div class="expl-pane expl-pane--vn" id="pane-vn-${questionId}" style="display: none; color: #1e293b; line-height: 1.6;">
            <strong>Giải thích Tiếng Việt:</strong> ${explVn || 'Xem phân tích chi tiết tiếng Anh bên tab kế bên.'}
          </div>
        `;
      }
    }

    // Trigger global stat update event
    window.dispatchEvent(new CustomEvent('quiz-progress-updated', { detail: progress }));
  }

  // Switch explanation tabs (EN <-> VN)
  function switchExplanationTab(btn, lang, questionId) {
    const parent = btn.closest('.explanation-box');
    if (!parent) return;

    parent.querySelectorAll('.expl-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const paneEn = parent.querySelector(`#pane-en-${questionId}`);
    const paneVn = parent.querySelector(`#pane-vn-${questionId}`);

    if (lang === 'en') {
      if (paneEn) paneEn.style.display = 'block';
      if (paneVn) paneVn.style.display = 'none';
    } else {
      if (paneEn) paneEn.style.display = 'none';
      if (paneVn) paneVn.style.display = 'block';
    }
  }

  return {
    getProgress,
    saveProgress,
    handleOptionClick,
    switchExplanationTab
  };
})();
