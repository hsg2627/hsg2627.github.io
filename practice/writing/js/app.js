// practice/writing/js/app.js — Kỹ năng Viết (5 Unit HK2)
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const unitParam = params.get('unit');

const boot = await Portal.boot({ module: 'writing', unit: unitParam, tab: 'practice' });

if (boot.ok) {
  if (!unitParam) {
    renderList();
  } else {
    renderStudio(unitParam);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  const hk2Writing = [
    { unit: 6, title: 'Gender Equality', prompt: 'Write a paragraph (120–150 words) about why gender equality matters in education.' },
    { unit: 7, title: 'Viet Nam & International Organisations', prompt: 'Write a paragraph (120–150 words) about the benefits of Viet Nam joining international organisations.' },
    { unit: 8, title: 'New Ways to Learn', prompt: 'Write a paragraph (120–150 words) about the advantages and disadvantages of online learning.' },
    { unit: 9, title: 'Protecting the Environment', prompt: 'Write a paragraph (120–150 words) suggesting ways to protect wildlife.' },
    { unit: 10, title: 'Ecotourism', prompt: 'Write a paragraph (120–150 words) about the principles of responsible ecotourism.' }
  ];

  main.innerHTML = `
    ${Portal.crumb('Practice', '/practice/')}
    <h1>✍️ Writing</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Write 120–150-word paragraphs on term 2 topics, then check your work against a checklist and a model answer.
    </p>

    <div class="cards" style="margin-top:20px;">
      ${hk2Writing.map(u => `
        <a class="card" href="/practice/writing/?unit=${u.unit}">
          <span class="ico">📝</span>
          <h3>Unit ${u.unit}: ${u.title}</h3>
          <p>${u.prompt}</p>
          <div class="meta"><span>120–150 words</span><span>Checklist + model answer</span></div>
        </a>
      `).join('')}
    </div>
  `;
}

async function renderStudio(unitNum) {
  const main = document.getElementById('main');
  if (!main) return;

  const pad = String(unitNum).padStart(2, '0');
  main.innerHTML = `
    ${Portal.crumb('Writing tasks', '/practice/writing/')}
    <div id="writing-studio-container">
      <p style="color:var(--muted);">Loading the writing task…</p>
    </div>
  `;

  try {
    const data = await loadJSON(`skills/u${pad}-writing.json`);
    const container = document.getElementById('writing-studio-container');
    if (!container) return;

    const draftKey = `draft_writing_u${pad}`;
    const savedDraft = localStorage.getItem(draftKey) || '';

    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <h2 style="margin:0;">Unit ${data.unit}: ${data.topic || 'Paragraph writing'}</h2>
        <span style="font-size:13.5px; font-weight:700; color:var(--muted);">${data.word_limit || '120–150 words'}</span>
      </div>

      <!-- Task -->
      <div class="panel">
        <h3 style="margin-top:0; color:var(--navy);">📌 Writing task</h3>
        <p style="font-size:16px; line-height:1.5;">${data.prompt}</p>
      </div>

      <!-- Editor -->
      <div class="panel">
        <label for="writing-textarea" style="font-size:15px; font-weight:600; color:var(--navy); display:flex; justify-content:space-between;">
          <span>Your writing:</span>
          <span id="word-count-badge" style="font-size:13px; color:var(--muted);">0 words</span>
        </label>
        <textarea id="writing-textarea" class="input-area" rows="8" placeholder="Type your English paragraph here...">${savedDraft}</textarea>
        
        <div class="btn-row">
          <button id="btn-submit-writing" class="btn btn-wide">Submit &amp; compare with the model</button>
        </div>
      </div>

      <!-- Comparison and survey, shown after submitting -->
      <div id="writing-review-area" style="display:none; margin-top:20px;"></div>
    `;

    const textarea = document.getElementById('writing-textarea');
    const wordCountBadge = document.getElementById('word-count-badge');
    const submitBtn = document.getElementById('btn-submit-writing');
    const reviewArea = document.getElementById('writing-review-area');

    function updateCount() {
      const text = textarea.value.trim();
      const count = text ? text.split(/\s+/).length : 0;
      wordCountBadge.textContent = `${count} ${count === 1 ? 'word' : 'words'}`;
      localStorage.setItem(draftKey, text);
    }
    updateCount();
    textarea.addEventListener('input', updateCount);

    submitBtn.addEventListener('click', () => {
      const studentText = textarea.value.trim();
      if (!studentText) {
        alert('Please write something before you submit.');
        return;
      }

      submitBtn.style.display = 'none';
      textarea.disabled = true;

      // Render model essay and self-checklist + AI survey question
      reviewArea.style.display = 'block';
      reviewArea.innerHTML = `
        <!-- Model answer -->
        <div class="panel">
          <h3 style="margin-top:0; color:var(--navy);">📖 Model answer</h3>
          <p style="font-size:15.5px; line-height:1.6; white-space:pre-line; color:var(--ink);">
            ${data.model_essay}
          </p>
        </div>

        <!-- Self-assessment checklist -->
        <div class="panel">
          <h3 style="margin-top:0; color:var(--navy);">✅ Self-assessment checklist</h3>
          ${data.checklist.map((chk, cIdx) => `
            <label class="check-item">
              <input type="checkbox" id="chk-${cIdx}" />
              <span>${chk}</span>
            </label>
          `).join('')}
        </div>

        <!-- AI-use survey (§9.4, one answer required) -->
        <div class="panel" style="border-left:4px solid var(--brass);">
          <h3 style="margin-top:0; color:var(--brass);">🤖 AI use survey</h3>
          <p style="font-size:15px; margin-bottom:12px;">
            <strong>Did you use AI while writing this?</strong> (Choose one):
          </p>
          <label class="check-item">
            <input type="radio" name="ai_use" value="none" required />
            <span>I did not use AI (I wrote all of it myself)</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="idea" />
            <span>I used AI to find ideas or suggested vocabulary</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="draft" />
            <span>I used AI to write part of a draft, then edited it</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="edit" />
            <span>I wrote it myself, then asked AI to check the grammar</span>
          </label>

          <div class="btn-row" style="margin-top:16px;">
            <button id="btn-final-confirm" class="btn btn-wide">Finish</button>
          </div>
        </div>
      `;

      document.getElementById('btn-final-confirm')?.addEventListener('click', () => {
        const selectedRadio = reviewArea.querySelector('input[name="ai_use"]:checked');
        if (!selectedRadio) {
          alert('Please choose one answer about your AI use.');
          return;
        }

        const aiUseVal = selectedRadio.value;
        Portal.spine.submitArtifact(data.id, {
          unit: String(unitNum),
          aiUse: aiUseVal
        });

        Portal.renderHud();
        Portal.toast('+15 XP (writing complete)');

        reviewArea.innerHTML = `
          <div class="panel" style="text-align:center; padding:28px 16px;">
            <div style="font-size:42px; margin-bottom:10px;">🎉</div>
            <h2 style="color:var(--navy); margin-top:0;">Submission recorded!</h2>
            <p style="color:var(--muted);">Thank you for finishing your writing and assessing it carefully.</p>
            <div class="btn-row" style="justify-content:center; margin-top:16px;">
              <a href="/practice/writing/" class="btn ghost">← Another writing task</a>
              <a href="/practice/" class="btn">Back to Practice →</a>
            </div>
          </div>
        `;
      });
    });

  } catch (err) {
    console.error('Failed to load the writing task:', err);
    container.innerHTML = Portal.empty('This writing task could not be loaded.', '/practice/writing/', '← Writing tasks');
  }
}
