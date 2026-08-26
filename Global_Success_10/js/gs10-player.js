/**
 * Global Success 10 - Interactive Courseware Engine
 * Faithfully implements the UI Mockup Designs & Interactive Activities
 */

const GS10 = {
  state: {
    currentView: 'overview', // 'overview' | 'unit'
    selectedUnitId: 1,
    selectedLessonId: 1,
    activeActivityTab: 'all',
    unitsMeta: null,
    currentUnitData: null,
    reviewsData: null,
    audioPlaying: false,
    audioProgress: 0,
    audioSpeed: 1.0
  },

  async init() {
    console.log('[GS10] Initializing Global Success 10 Courseware...');
    await this.loadManifest();
    this.bindEvents();
    this.handleRoute();
  },

  async loadManifest() {
    try {
      const res = await fetch('data/units_meta.json');
      if (res.ok) {
        this.state.unitsMeta = await res.json();
      }
    } catch (err) {
      console.warn('[GS10] Fetch meta failed, will load dynamically or fallback.', err);
    }
  },

  async loadUnitData(unitId) {
    const padId = String(unitId).padStart(2, '0');
    try {
      const res = await fetch(`data/unit${padId}.json`);
      if (res.ok) {
        this.state.currentUnitData = await res.json();
        return this.state.currentUnitData;
      }
    } catch (err) {
      console.error(`[GS10] Error loading unit ${unitId}`, err);
    }
    return null;
  },

  async loadReviewsData() {
    if (this.state.reviewsData) return this.state.reviewsData;
    try {
      const res = await fetch('data/reviews.json');
      if (res.ok) {
        this.state.reviewsData = await res.json();
        return this.state.reviewsData;
      }
    } catch (err) {
      console.error('[GS10] Error loading reviews', err);
    }
    return [];
  },

  bindEvents() {
    window.addEventListener('hashchange', () => this.handleRoute());
  },

  handleRoute() {
    const hash = window.location.hash || '';
    if (hash.startsWith('#unit-')) {
      const parts = hash.replace('#unit-', '').split('-lesson-');
      const uId = parseInt(parts[0], 10) || 1;
      const lId = parts[1] ? parseInt(parts[1], 10) : null;
      this.openUnit(uId, lId);
    } else if (hash.startsWith('#review-')) {
      const rId = parseInt(hash.replace('#review-', ''), 10) || 1;
      this.openReviewModal(rId);
    } else {
      this.renderOverview();
    }
  },

  // =========================================================================
  // VIEW 1: RENDER OVERVIEW GRID (Matching Mockup 2: 10 Units + 4 Reviews)
  // =========================================================================
  async renderOverview() {
    this.state.currentView = 'overview';
    const container = document.getElementById('gs10-app-root');
    if (!container) return;

    if (!this.state.unitsMeta) {
      await this.loadManifest();
    }

    const units = this.state.unitsMeta?.units || this.getFallbackUnits();

    // Group units into Left column (1,2,3 - Review 1 - 4,5 - Review 2) and Right column (6,7,8 - Review 3 - 9,10 - Review 4)
    const leftUnits1 = units.slice(0, 3);
    const leftUnits2 = units.slice(3, 5);
    const rightUnits1 = units.slice(5, 8);
    const rightUnits2 = units.slice(8, 10);

    const html = `
      <div class="gs10-overview-wrap">
        <!-- Hero Header -->
        <div class="gs10-overview-hero">
          <div class="gs10-overview-hero__pill">
            <span>📘 CT GDPT 2018 · Tiếng Anh 10 Global Success</span>
          </div>
          <h1 class="gs10-overview-hero__title">Global Success 10 Interactive Courseware</h1>
          <p class="gs10-overview-hero__subtitle">
            Khung bài giảng số tương tác 10 Units và 4 bài ôn tập Review. Tích hợp audio, video, từ vựng chuẩn ngữ âm IPA, ngữ pháp thực hành và trắc nghiệm tương tác theo Thông tư 32/2018 & Thông tư 02/2025.
          </p>
        </div>

        <!-- Two-Column Unit Selection Grid (Mockup 2) -->
        <div class="gs10-units-grid-2col">
          <!-- LEFT COLUMN: Units 1-5 + Review 1 & 2 -->
          <div class="gs10-column">
            ${leftUnits1.map(u => this.createUnitCardHtml(u)).join('')}
            
            <!-- REVIEW 1 -->
            <div class="gs10-review-banner" onclick="GS10.openReviewModal(1)">
              <div class="gs10-review-banner__left">
                <div class="gs10-review-banner__icon">📋</div>
                <div class="gs10-review-banner__title">REVIEW 1</div>
              </div>
              <div class="gs10-review-banner__middle-line"></div>
              <div class="gs10-review-banner__leaf">🌿</div>
            </div>

            ${leftUnits2.map(u => this.createUnitCardHtml(u)).join('')}

            <!-- REVIEW 2 -->
            <div class="gs10-review-banner" onclick="GS10.openReviewModal(2)">
              <div class="gs10-review-banner__left">
                <div class="gs10-review-banner__icon">📋</div>
                <div class="gs10-review-banner__title">REVIEW 2</div>
              </div>
              <div class="gs10-review-banner__middle-line"></div>
              <div class="gs10-review-banner__leaf">🌿</div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Units 6-10 + Review 3 & 4 -->
          <div class="gs10-column">
            ${rightUnits1.map(u => this.createUnitCardHtml(u)).join('')}

            <!-- REVIEW 3 -->
            <div class="gs10-review-banner" onclick="GS10.openReviewModal(3)">
              <div class="gs10-review-banner__left">
                <div class="gs10-review-banner__icon">📋</div>
                <div class="gs10-review-banner__title">REVIEW 3</div>
              </div>
              <div class="gs10-review-banner__middle-line"></div>
              <div class="gs10-review-banner__leaf">🌿</div>
            </div>

            ${rightUnits2.map(u => this.createUnitCardHtml(u)).join('')}

            <!-- REVIEW 4 -->
            <div class="gs10-review-banner" onclick="GS10.openReviewModal(4)">
              <div class="gs10-review-banner__left">
                <div class="gs10-review-banner__icon">📋</div>
                <div class="gs10-review-banner__title">REVIEW 4</div>
              </div>
              <div class="gs10-review-banner__middle-line"></div>
              <div class="gs10-review-banner__leaf">🌿</div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  createUnitCardHtml(unit) {
    const padNum = String(unit.unit_id).padStart(2, '0');
    return `
      <div class="gs10-unit-card" onclick="GS10.navigateToUnit(${unit.unit_id})">
        <div class="gs10-unit-card__badge">
          <span class="gs10-unit-card__badge-label">UNIT</span>
          <span class="gs10-unit-card__badge-num">${padNum}</span>
        </div>
        <div class="gs10-unit-card__icon-box">${unit.icon || '📘'}</div>
        <div class="gs10-unit-card__content">
          <h3 class="gs10-unit-card__title">${unit.title}</h3>
          <div class="gs10-unit-card__desc">${unit.subtitle || '8 Interactive Lessons'}</div>
        </div>
        <div class="gs10-unit-card__arrow">&rarr;</div>
      </div>
    `;
  },

  navigateToUnit(unitId) {
    window.location.hash = `#unit-${unitId}`;
  },

  // =========================================================================
  // VIEW 2: RENDER UNIT & 8-LESSONS NAVIGATOR (Matching Mockup 1)
  // =========================================================================
  async openUnit(unitId, lessonId = null) {
    this.state.currentView = 'unit';
    this.state.selectedUnitId = unitId;
    this.state.selectedLessonId = lessonId || 1;

    const container = document.getElementById('gs10-app-root');
    if (!container) return;

    container.innerHTML = `
      <div style="text-align:center; padding: 60px;">
        <div style="font-size: 2rem;">⏳</div>
        <p style="font-weight:700; color:var(--gs-green-dark); margin-top:10px;">Loading Unit ${unitId} Lessons...</p>
      </div>
    `;

    const unitData = await this.loadUnitData(unitId);
    if (!unitData) {
      container.innerHTML = `<div style="padding:40px; text-align:center;">Failed to load unit data. <button onclick="GS10.renderOverview()" class="gs10-btn gs10-btn--primary">Back to Units</button></div>`;
      return;
    }

    const padNum = String(unitData.unit_id).padStart(2, '0');

    const html = `
      <div class="gs10-unit-view">
        <!-- Top Unit Header (Mockup 1 Exact Match) -->
        <div class="gs10-unit-header-bar">
          <button class="gs10-back-btn" onclick="window.location.hash=''" title="Back to All Units">
            &larr;
          </button>
          
          <div class="gs10-unit-shield">
            <span class="gs10-unit-shield__label">UNIT</span>
            <span class="gs10-unit-shield__num">${padNum}</span>
          </div>

          <div class="gs10-unit-title-banner">
            <h1 class="gs10-unit-title-banner__title">${unitData.title}</h1>
            <div class="gs10-unit-title-banner__dot-matrix">::::::</div>
          </div>
        </div>

        <!-- Two-Panel Stage -->
        <div class="gs10-unit-stage">
          <!-- LEFT PANEL: 8 Lessons Vertical List (Mockup 1) -->
          <div class="gs10-lessons-menu">
            <div class="gs10-lessons-timeline">
              ${unitData.lessons.map(l => `
                <div class="gs10-lesson-row ${l.lesson_id === this.state.selectedLessonId ? 'active' : ''}" 
                     id="lesson-nav-row-${l.lesson_id}" 
                     onclick="GS10.selectLesson(${l.lesson_id})">
                  <div class="gs10-lesson-row__icon-circle">${l.icon || '📖'}</div>
                  <div class="gs10-lesson-row__divider"></div>
                  <span class="gs10-lesson-row__code">${l.lesson_code}</span>
                  <span class="gs10-lesson-row__name">${l.lesson_type}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- RIGHT PANEL: Interactive Lesson Viewer -->
          <div class="gs10-stage-content" id="gs10-stage-content">
            <!-- Will be rendered by renderLessonContent -->
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.renderLessonContent();
  },

  selectLesson(lessonId) {
    this.state.selectedLessonId = lessonId;
    
    // Update active class on left nav
    document.querySelectorAll('.gs10-lesson-row').forEach(el => el.classList.remove('active'));
    const activeRow = document.getElementById(`lesson-nav-row-${lessonId}`);
    if (activeRow) activeRow.classList.add('active');

    // Update URL hash quietly
    window.location.hash = `#unit-${this.state.selectedUnitId}-lesson-${lessonId}`;
    this.renderLessonContent();
  },

  // =========================================================================
  // VIEW 3: RENDER INTERACTIVE LESSON CONTENT
  // =========================================================================
  renderLessonContent() {
    const stage = document.getElementById('gs10-stage-content');
    if (!stage || !this.state.currentUnitData) return;

    const unit = this.state.currentUnitData;
    const lesson = unit.lessons.find(l => l.lesson_id === this.state.selectedLessonId) || unit.lessons[0];

    const html = `
      <div class="gs10-lesson-viewer-header">
        <div class="gs10-lesson-viewer-title-group">
          <h2>${lesson.lesson_code}. ${lesson.title}</h2>
          <p>📘 ${unit.title} · ${unit.semester} · ${lesson.lesson_type}</p>
        </div>
        <div>
          <button class="gs10-btn gs10-btn--secondary" onclick="GS10.speakText('${lesson.title}')">
            🔊 Pronounce Title
          </button>
        </div>
      </div>

      <!-- Media Station: Audio & Media Slot Container -->
      <div class="gs10-media-station">
        <div class="gs10-audio-bar">
          <button class="gs10-audio-play-btn" id="gs10-audio-toggle-btn" onclick="GS10.toggleLessonAudio()">
            ▶
          </button>
          <div class="gs10-audio-info">
            <div class="gs10-audio-info__title">🎧 Lesson Audio Track · ${lesson.short_title}</div>
            <div class="gs10-audio-progress-bar" onclick="GS10.seekAudio(event)">
              <div class="gs10-audio-progress-fill" id="gs10-audio-fill" style="width: 0%;"></div>
            </div>
          </div>
          <div style="display:flex; gap:6px;">
            <button class="gs10-btn gs10-btn--secondary" style="padding:4px 10px; font-size:0.75rem;" onclick="GS10.setAudioSpeed(0.8)">0.8x</button>
            <button class="gs10-btn gs10-btn--secondary" style="padding:4px 10px; font-size:0.75rem;" onclick="GS10.setAudioSpeed(1.0)">1.0x</button>
            <button class="gs10-btn gs10-btn--secondary" style="padding:4px 10px; font-size:0.75rem;" onclick="GS10.setAudioSpeed(1.2)">1.2x</button>
          </div>
        </div>

        <!-- Custom Media Insertion Guide for User -->
        <div class="gs10-media-slot-notice">
          <span>📁 <strong>Media Slot:</strong> Chèn audio vào <code>Global_Success_10/${lesson.media.audio}</code> | Video vào <code>Global_Success_10/${lesson.media.video}</code></span>
        </div>
      </div>

      <!-- Render Lesson Sections -->
      <div class="gs10-lesson-sections">
        ${lesson.sections.map(sec => this.renderSectionHtml(sec, lesson)).join('')}
      </div>
    `;

    stage.innerHTML = html;
  },

  renderSectionHtml(sec, lesson) {
    if (sec.content_type === 'objectives') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <ul class="gs10-obj-list">
            ${sec.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (sec.content_type === 'dialogue_activity') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <p style="font-size:0.9rem; color:var(--gs-text-muted); margin-bottom:14px;">${sec.instruction || ''}</p>
          <div class="gs10-dialogue-wrap">
            ${sec.dialogue.map(d => `
              <div class="gs10-dialogue-bubble">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${d.speaker}</strong>
                  <button class="gs10-btn gs10-btn--secondary" style="padding:2px 8px; font-size:0.75rem;" onclick="GS10.speakText('${d.text.replace(/'/g, "\\'")}')">🔊 Read</button>
                </div>
                <p>${d.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (sec.content_type === 'vocab_list') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div class="gs10-vocab-grid">
            ${sec.items.map(v => `
              <div class="gs10-vocab-card">
                <div class="gs10-vocab-card__top">
                  <span class="gs10-vocab-card__word">${v.word}</span>
                  <button class="gs10-vocab-card__sound-btn" onclick="GS10.speakText('${v.word.replace(/\(.*\)/, '').trim()}')" title="Listen Pronunciation">
                    🔊
                  </button>
                </div>
                ${v.pos_ipa ? `<div class="gs10-vocab-card__ipa">${v.pos_ipa}</div>` : ''}
                <div class="gs10-vocab-card__vi">🇻🇳 ${v.meaning_vi}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (sec.content_type === 'reading_text') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div style="font-size:1.05rem; font-weight:700; color:var(--gs-green-forest); margin-bottom:10px;">
            ${sec.passage_title}
          </div>
          ${sec.paragraphs.map(p => `
            <p style="font-size:0.95rem; line-height:1.65; margin-bottom:12px; text-align:justify;">${p}</p>
          `).join('')}
        </div>
      `;
    }

    if (sec.content_type === 'grammar_rule') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div style="font-size:1.05rem; font-weight:800; color:var(--gs-coral-dark); margin-bottom:8px;">
            ${sec.grammar_title}
          </div>
          <p style="font-size:0.92rem; line-height:1.5; color:var(--gs-text-main);">${sec.rule_summary}</p>
          <div style="background:var(--gs-coral-soft); padding:12px; border-radius:var(--gs-radius-sm); margin-top:10px;">
            <strong style="font-size:0.85rem; color:var(--gs-coral-dark);">Example Usage:</strong>
            <ul style="margin:6px 0 0 0; padding-left:20px; font-size:0.88rem; line-height:1.45;">
              ${sec.examples.map(ex => `<li>${ex}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    if (sec.content_type === 'speaking_prompts') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div style="font-size:1rem; font-weight:700; color:var(--gs-green-dark); margin-bottom:8px;">${sec.prompt_title}</div>
          <div style="margin-bottom:12px;">
            ${sec.guiding_questions.map(q => `<div style="padding:6px 0; font-size:0.92rem;">💡 ${q}</div>`).join('')}
          </div>
          <div style="background:#f0fdf4; border-left:4px solid var(--gs-green-leaf); padding:10px 14px; border-radius:4px;">
            <strong style="color:var(--gs-green-dark); font-size:0.85rem;">Useful Expressions:</strong>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:6px;">
              ${sec.useful_expressions.map(exp => `<span style="background:#ffffff; border:1px solid #c7eed8; padding:4px 10px; border-radius:12px; font-size:0.82rem;">${exp}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }

    if (sec.content_type === 'writing_scaffold') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div style="font-weight:700; color:var(--gs-coral-dark); font-size:0.95rem; margin-bottom:10px;">${sec.task_prompt}</div>
          <div style="margin-bottom:14px; background:var(--gs-coral-soft); padding:12px; border-radius:var(--gs-radius-sm);">
            <strong>Paragraph Structure:</strong>
            <div style="font-size:0.88rem; margin-top:4px;">📌 <strong>Topic Sentence:</strong> ${sec.scaffold.topic_sentence}</div>
            <div style="font-size:0.88rem; margin-top:4px;">📌 <strong>Supporting Ideas:</strong> ${sec.scaffold.supporting_points.join(' · ')}</div>
            <div style="font-size:0.88rem; margin-top:4px;">📌 <strong>Concluding Sentence:</strong> ${sec.scaffold.concluding_sentence}</div>
          </div>
          <div>
            <textarea id="gs10-writing-input" placeholder="Type your academic paragraph here (120-150 words)..." 
                      style="width:100%; height:120px; border:1px solid var(--gs-border); border-radius:var(--gs-radius-sm); padding:12px; font-family:var(--gs-font-body); font-size:0.92rem;" 
                      oninput="GS10.updateWordCount(this)"></textarea>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; font-size:0.82rem; color:var(--gs-text-muted);">
              <span id="gs10-word-counter">Words: 0 / 150</span>
              <button class="gs10-btn gs10-btn--secondary" onclick="GS10.toggleModelEssay()">Toggle Model Essay</button>
            </div>
            <div id="gs10-model-essay-box" style="display:none; margin-top:10px; background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:var(--gs-radius-sm); font-size:0.9rem; line-height:1.5;">
              <strong>Model Essay:</strong>
              <p style="margin:4px 0 0 0;">${sec.model_text}</p>
            </div>
          </div>
        </div>
      `;
    }

    if (sec.content_type === 'interactive_quiz') {
      return `
        <div class="gs10-section-box">
          <div class="gs10-section-box__title">${sec.section_title}</div>
          <div class="gs10-quiz-list">
            ${sec.questions.map((q, qIdx) => `
              <div class="gs10-quiz-card" id="quiz-card-${qIdx}">
                <div class="gs10-quiz-card__question">${qIdx + 1}. ${q.question}</div>
                <div class="gs10-quiz-card__options">
                  ${q.options.map((opt, optIdx) => `
                    <div class="gs10-quiz-opt" onclick="GS10.checkQuizAnswer(${qIdx}, ${optIdx}, ${q.correct}, '${q.explanation.replace(/'/g, "\\'")}')">
                      <span>${String.fromCharCode(65 + optIdx)}.</span>
                      <span>${opt}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="gs10-quiz-feedback" id="quiz-fb-${qIdx}"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return '';
  },

  // Speech synthesis helper
  speakText(text) {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*_#]/g, '');
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'en-US';
    utter.rate = this.state.audioSpeed || 1.0;
    window.speechSynthesis.speak(utter);
  },

  // Audio player simulation & handling
  toggleLessonAudio() {
    const btn = document.getElementById('gs10-audio-toggle-btn');
    const fill = document.getElementById('gs10-audio-fill');
    
    if (this.state.audioPlaying) {
      this.state.audioPlaying = false;
      if (btn) btn.innerHTML = '▶';
      if (this.audioTimer) clearInterval(this.audioTimer);
      if ('speechSynthesis' in window) window.speechSynthesis.pause();
    } else {
      this.state.audioPlaying = true;
      if (btn) btn.innerHTML = '⏸';
      
      // Fallback speech of current lesson overview
      const unit = this.state.currentUnitData;
      const lesson = unit?.lessons?.find(l => l.lesson_id === this.state.selectedLessonId);
      if (lesson) {
        this.speakText(`${unit.title}. Lesson ${lesson.lesson_code}: ${lesson.title}. Let's begin.`);
      }

      this.audioTimer = setInterval(() => {
        this.state.audioProgress += 2;
        if (this.state.audioProgress > 100) {
          this.state.audioProgress = 0;
          this.toggleLessonAudio();
        }
        if (fill) fill.style.width = `${this.state.audioProgress}%`;
      }, 500);
    }
  },

  seekAudio(event) {
    const bar = event.currentTarget;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    this.state.audioProgress = pct;
    const fill = document.getElementById('gs10-audio-fill');
    if (fill) fill.style.width = `${pct}%`;
  },

  setAudioSpeed(speed) {
    this.state.audioSpeed = speed;
    alert(`Playback speed set to ${speed}x`);
  },

  updateWordCount(textarea) {
    const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0);
    const counter = document.getElementById('gs10-word-counter');
    if (counter) {
      counter.innerText = `Words: ${words.length} / 150`;
      if (words.length >= 120 && words.length <= 150) {
        counter.style.color = 'var(--gs-green-forest)';
        counter.style.fontWeight = 'bold';
      } else {
        counter.style.color = 'var(--gs-text-muted)';
        counter.style.fontWeight = 'normal';
      }
    }
  },

  toggleModelEssay() {
    const box = document.getElementById('gs10-model-essay-box');
    if (box) {
      box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }
  },

  checkQuizAnswer(qIdx, selectedIdx, correctIdx, explanation) {
    const card = document.getElementById(`quiz-card-${qIdx}`);
    const fb = document.getElementById(`quiz-fb-${qIdx}`);
    if (!card || !fb) return;

    const opts = card.querySelectorAll('.gs10-quiz-opt');
    opts.forEach((opt, idx) => {
      opt.classList.remove('correct', 'incorrect');
      if (idx === correctIdx) {
        opt.classList.add('correct');
      } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
        opt.classList.add('incorrect');
      }
    });

    fb.style.display = 'block';
    if (selectedIdx === correctIdx) {
      fb.style.background = '#d8f3dc';
      fb.style.color = '#1b4332';
      fb.innerHTML = `✅ <strong>Correct!</strong> ${explanation}`;
    } else {
      fb.style.background = '#fde8eb';
      fb.style.color = '#9b1c2b';
      fb.innerHTML = `❌ <strong>Incorrect.</strong> ${explanation}`;
    }
  },

  async openReviewModal(reviewId) {
    const reviews = await this.loadReviewsData();
    const r = reviews.find(item => item.review_id === reviewId) || reviews[0];

    const modal = document.createElement('div');
    modal.id = 'gs10-review-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.right = '0';
    modal.style.bottom = '0';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '9999';
    modal.style.padding = '20px';

    modal.innerHTML = `
      <div style="background:#ffffff; border-radius:24px; max-width:640px; width:100%; max-height:85vh; overflow-y:auto; padding:28px; box-shadow:0 20px 40px rgba(0,0,0,0.2);">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f3d5d9; padding-bottom:14px; margin-bottom:18px;">
          <div>
            <span style="background:var(--gs-green-dark); color:#ffffff; padding:4px 12px; border-radius:99px; font-size:0.8rem; font-weight:800;">${r.code}</span>
            <h2 style="font-family:var(--gs-font-heading); color:var(--gs-green-dark); margin:8px 0 0 0;">${r.title}</h2>
          </div>
          <button onclick="document.getElementById('gs10-review-modal').remove()" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--gs-text-muted);">&times;</button>
        </div>

        <div style="color:var(--gs-text-muted); font-size:0.9rem; margin-bottom:16px;">
          <strong>Scope:</strong> ${r.scope}
        </div>

        ${r.sections.map(sec => `
          <div style="background:var(--gs-coral-soft); border-radius:12px; padding:16px; margin-bottom:14px;">
            <h4 style="margin:0 0 10px 0; color:var(--gs-green-dark);">${sec.title}</h4>
            <ul style="margin:0; padding-left:20px; font-size:0.9rem; line-height:1.5;">
              ${sec.items.map(it => `<li>${it}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <div style="text-align:right; margin-top:20px;">
          <button class="gs10-btn gs10-btn--primary" onclick="document.getElementById('gs10-review-modal').remove()">Close Review</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  },

  getFallbackUnits() {
    return [
      { unit_id: 1, unit_code: "UNIT 01", title: "Family life", icon: "🏠", subtitle: "Household chores & family values" },
      { unit_id: 2, unit_code: "UNIT 02", title: "Humans and the environment", icon: "🌱", subtitle: "Eco-friendly lifestyle" },
      { unit_id: 3, unit_code: "UNIT 03", title: "Music", icon: "🎵", subtitle: "Artists & TV music shows" },
      { unit_id: 4, unit_code: "UNIT 04", title: "For a better community", icon: "👥", subtitle: "Volunteering activities" },
      { unit_id: 5, unit_code: "UNIT 05", title: "Inventions", icon: "💡", subtitle: "Digital tools & AI gadgets" },
      { unit_id: 6, unit_code: "UNIT 06", title: "Gender equality", icon: "⚧️", subtitle: "Equal opportunities" },
      { unit_id: 7, unit_code: "UNIT 07", title: "Viet Nam & international orgs", icon: "🌐", subtitle: "UN, UNICEF, WTO integration" },
      { unit_id: 8, unit_code: "UNIT 08", title: "New ways to learn", icon: "🎓", subtitle: "Digital & online learning" },
      { unit_id: 9, unit_code: "UNIT 09", title: "Protecting the environment", icon: "🍃", subtitle: "Wildlife & global warming" },
      { unit_id: 10, unit_code: "UNIT 10", title: "Ecotourism", icon: "📷", subtitle: "Sustainable ecotours" }
    ];
  }
};

window.GS10 = GS10;
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('gs10-app-root')) {
    GS10.init();
  }
});
