// ai-logs/js/app.js — Xưởng AI (Miền năng lực 6)
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const setId = params.get('set'); // 'ae-hk1' | 'ae-hk2'

const boot = await Portal.boot({ module: 'ai_forge', unit: setId, tab: 'ai' });

if (boot.ok) {
  if (!setId) {
    renderOverview();
  } else {
    renderTaskSequence(setId);
  }
}

async function renderOverview() {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    <h1>🤖 AI Error Log</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Read English passages written by AI and find what is wrong. <strong>Not every passage has an error.</strong>
    </p>

    <!-- Two task sets -->
    <h2>Choose a task set</h2>
    <div class="cards">
      <a class="card" href="/ai-logs/?set=ae-hk1">
        <span class="ico">🔍</span>
        <h3>AI Error Log · Term 1</h3>
        <p>28 passages to appraise, built on the language of term 1.</p>
        <div class="meta"><span>28 tasks</span><span>Term 1</span></div>
      </a>
      <a class="card" href="/ai-logs/?set=ae-hk2">
        <span class="ico">🔬</span>
        <h3>AI Error Log · Term 2</h3>
        <p>28 passages to appraise, built on the language of term 2.</p>
        <div class="meta"><span>28 tasks</span><span>Term 2</span></div>
      </a>
    </div>

    <!-- The 7 error categories -->
    <section class="panel" style="margin-top:24px;">
      <h3 style="margin-top:0;">📚 The 7 error categories</h3>
      <ol style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--ink);">
        <li><strong>Tense and aspect:</strong> sequence of tenses, time markers.</li>
        <li><strong>Verb forms:</strong> V-ing, to-V, bare infinitive.</li>
        <li><strong>Passive voice:</strong> passives across tenses and with modal verbs.</li>
        <li><strong>Clauses and conditionals:</strong> relative pronouns, conjunctions, first and second conditionals.</li>
        <li><strong>Articles and nouns:</strong> a/an/the/zero article, countable and uncountable nouns.</li>
        <li><strong>Adjectives and comparison:</strong> -ed/-ing endings, comparatives and superlatives.</li>
        <li><strong>Prepositions and collocations:</strong> fixed phrases, prepositions after adjectives and verbs.</li>
      </ol>
    </section>
  `;
}

async function renderTaskSequence(setKey) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('AI Error Log', '/ai-logs/')}
    <div id="ai-task-container">
      <p style="color:var(--muted);">Loading the passages…</p>
    </div>
  `;

  try {
    const data = await loadJSON(`ai-eval/${setKey}.json`);
    const container = document.getElementById('ai-task-container');
    if (!container || !data.items || data.items.length === 0) {
      if (container) container.innerHTML = Portal.empty('There are no passages in this set yet.', '/ai-logs/', '← Back to AI Error Log');
      return;
    }

    let taskIndex = 0;
    let chosenSpan = null; // null | '__NO_ERROR__' | nội dung cụm học sinh chạm
    let chosenIdx = null;  // null | -1 (chọn "không có lỗi") | chỉ số cụm
    let isEvaluated = false;

    // Neo đáp án về CHỈ SỐ cụm, không so khớp chuỗi.
    //
    // `error.span` trong ngân hàng được viết theo hai kiểu: có item ghi nguyên
    // văn cả cụm, có item chỉ ghi mấy chữ sai nằm bên trong cụm ("an useful
    // advice", "are gooder", "relies with digital devices"). So bằng === thì
    // kiểu thứ hai không đời nào khớp — học sinh chạm đúng cụm vẫn bị chấm sai,
    // và tỉ lệ phát hiện của những hạng mục đó bị ép về 0. Hàm này quy cả hai
    // kiểu về một chỉ số duy nhất. Xem SITE-SPEC.md §9.6 luật 5.
    function resolveAnswerIdx(task) {
      if (!task.error || !task.error.present) return -1;
      const spans = task.spans.map(s => String(s).trim());
      const key = String(task.error.span || '').trim();

      let idx = spans.indexOf(key);
      if (idx === -1) idx = spans.findIndex(s => s.includes(key));
      if (idx === -1) {
        const norm = t => t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        const nk = norm(key);
        if (nk) idx = spans.findIndex(s => norm(s).includes(nk));
      }
      if (idx === -1) {
        console.error(`[AI Error Log] ${task.id}: error.span is not inside any phrase cluster —`, key);
      }
      return idx;
    }

    function renderTask(idx) {
      if (idx >= data.items.length) {
        renderCompletion();
        return;
      }

      const task = data.items[idx];
      chosenSpan = null;
      chosenIdx = null;
      isEvaluated = false;

      // 1. Mở bài và bấm giờ
      Portal.spine.aiEvalOpen(task.id, { kind: task.kind, hasError: task.error.present });

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2 style="margin:0; font-size:1.15rem;">${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Task ${idx + 1} of ${data.items.length}</span>
        </div>

        <div class="chip-ai" style="margin-bottom:10px;">🤖 This passage was written by AI</div>

        <div class="panel">
          <p style="font-size:14px; color:var(--muted); margin:0 0 10px;">
            👉 Tap the phrase you think <strong>contains an error</strong>, or press the button below if the passage has no error:
          </p>

          <!-- Interactive phrase spans -->
          <div class="ai-text-box" id="ai-spans-box">
            ${task.spans.map((spText, spIdx) => `
              <span class="ai-span" data-span-idx="${spIdx}">${spText}</span>
            `).join(' ')}
          </div>

          <!-- Always-visible "no error" button -->
          <button id="btn-no-error" class="btn ghost btn-wide" style="margin:12px 0;">
            🛡️ This passage has no error
          </button>

          <!-- Optional reason field -->
          <div style="margin:14px 0;">
            <label for="ai-reason" style="font-size:14px; font-weight:600; color:var(--navy);">
              Why do you think so? (optional, up to 200 characters):
            </label>
            <input 
              type="text" 
              id="ai-reason" 
              class="input-text" 
              placeholder="Briefly explain your judgement…"
              maxlength="200"
            />
          </div>

          <div id="ai-feedback-box"></div>
          <div id="ai-bug-box"></div>

          <div class="btn-row">
            <button id="btn-submit-eval" class="btn btn-wide" disabled>Submit my judgement</button>
            <button id="btn-next-task" class="btn btn-wide" style="display:none;">Next task →</button>
          </div>
        </div>
      `;

      const spanEls = container.querySelectorAll('.ai-span');
      const noErrorBtn = document.getElementById('btn-no-error');
      const submitBtn = document.getElementById('btn-submit-eval');
      const nextBtn = document.getElementById('btn-next-task');
      const reasonInput = document.getElementById('ai-reason');
      const feedbackBox = document.getElementById('ai-feedback-box');

      // Chọn span
      spanEls.forEach(el => {
        el.addEventListener('click', () => {
          if (isEvaluated) return;
          spanEls.forEach(s => s.classList.remove('selected'));
          noErrorBtn.classList.remove('selected');
          noErrorBtn.classList.add('ghost');

          el.classList.add('selected');
          chosenSpan = el.textContent.trim();
          chosenIdx = Number(el.dataset.spanIdx);
          submitBtn.disabled = false;
        });
      });

      // Chọn không có lỗi
      noErrorBtn.addEventListener('click', () => {
        if (isEvaluated) return;
        spanEls.forEach(s => s.classList.remove('selected'));
        noErrorBtn.classList.remove('ghost');
        noErrorBtn.classList.add('selected');

        chosenSpan = '__NO_ERROR__';
        chosenIdx = -1;
        submitBtn.disabled = false;
      });

      // Bấm nộp kết quả
      submitBtn.addEventListener('click', () => {
        if (!chosenSpan || isEvaluated) return;
        isEvaluated = true;
        submitBtn.style.display = 'none';
        noErrorBtn.disabled = true;

        const hasError = !!task.error.present;
        const answerIdx = resolveAnswerIdx(task);
        const isCorrect = hasError ? (chosenIdx === answerIdx) : (chosenIdx === -1);

        // Tô màu theo chỉ số cụm, cùng một neo với lúc chấm
        spanEls.forEach((el, i) => {
          if (hasError && i === answerIdx) {
            el.classList.add('correct-span');
          } else if (i === chosenIdx && !isCorrect) {
            el.classList.add('wrong-span');
          }
        });

        // Phản hồi chi tiết — SITE-SPEC.md §9.6 luật 6
        const picked = chosenIdx >= 0 ? String(task.spans[chosenIdx]).trim() : '';
        let fbHtml = '';

        if (isCorrect && hasError) {
          fbHtml = `
            <div class="fb">
              <h4>✓ Correct!</h4>
              <p><strong>Wrong phrase:</strong> <code>${task.error.span}</code><br>
              <strong>Correction:</strong> <code>${task.error.correction}</code><br>
              <strong>Explanation:</strong> ${task.error.explanation}</p>
            </div>
          `;
        } else if (isCorrect) {
          fbHtml = `
            <div class="fb">
              <h4>✓ Correct!</h4>
              <p>Right — this passage has no error.</p>
              ${task.error.explanation ? `<p><strong>Why:</strong> ${task.error.explanation}</p>` : ''}
            </div>
          `;
        } else if (hasError) {
          fbHtml = `
            <div class="fb bad">
              <h4>✕ Not correct</h4>
              ${picked
                ? `<p>The phrase you chose — <code>${picked}</code> — <strong>is used correctly</strong>.</p>`
                : `<p>This passage <strong>does contain an error</strong>, and you missed it.</p>`}
              <p>The error is in: <code>${task.error.span}</code><br>
              <strong>Correction:</strong> <code>${task.error.correction}</code><br>
              <strong>Explanation:</strong> ${task.error.explanation}</p>
            </div>
          `;
        } else {
          fbHtml = `
            <div class="fb bad">
              <h4>✕ Not correct</h4>
              <p>This passage <strong>has no error</strong>. The phrase you chose — <code>${picked}</code> — <strong>is used correctly</strong>.</p>
              ${task.error.explanation ? `<p><strong>Why:</strong> ${task.error.explanation}</p>` : ''}
            </div>
          `;
        }
        feedbackBox.innerHTML = fbHtml;

        // Category passed
        const categoryId = hasError ? task.error.category : task.error.probe_category;

        // Gọi Spine.aiEvalAnswer
        const res = Portal.spine.aiEvalAnswer(task.id, {
          kind: task.kind,
          hasError: hasError,
          correct: isCorrect,
          chosen: chosenSpan,
          reason: reasonInput.value.trim(),
          category: categoryId
        });

        Portal.renderHud();
        if (isCorrect) {
          Portal.toast('+10 XP (correct judgement)');
        }

        renderBugBox(task, { isCorrect, categoryId, chosenIdx, answerIdx, hasError });

        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        taskIndex++;
        renderTask(taskIndex);
      });
    }

    // Hộp chat báo lỗi — học sinh đóng vai NGƯỜI KIỂM THỬ học liệu.
    //
    // Chỉ dựng SAU khi em đã nộp nhận định. Hiện sớm là mách nước "bài này có
    // thể hỏng" trước khi em kịp phán xét, hỏng luôn phép đo chính.
    //
    // Dạng chat để em chịu viết — form thì em bỏ trống, khung nhắn thì em gõ.
    // Nhưng KHÔNG giả vờ có người trả lời ngay: bong bóng xác nhận nói thẳng là
    // cô đọc khi thu dữ liệu. Hứa hão một lần là các em thôi gửi mãi mãi.
    //
    // Không thưởng XP. Thưởng là mua lấy báo lỗi rác, và còn phá luật cường độ
    // game hoá ngang nhau giữa Luyện tập và Xưởng AI.
    function renderBugBox(task, { isCorrect, categoryId, chosenIdx, answerIdx, hasError }) {
      const box = document.getElementById('ai-bug-box');
      if (!box) return;

      const MIN_REASON = 15;
      const MAX_MESSAGES = 3;
      const TYPES = [
        { id: 'key', label: 'Wrong answer key' },
        { id: 'text', label: 'Broken or odd English' },
        { id: 'app', label: 'Page not working' },
      ];

      const GREETING = 'This passage was written by AI, so it can be wrong too — '
        + 'even the answer key. If anything looks off, message me.';

      let bugType = null;
      let sent = 0;

      box.innerHTML = `
        <button id="btn-open-bug" class="btn ghost btn-wide">💬 Message your teacher about this item</button>
      `;
      document.getElementById('btn-open-bug').addEventListener('click', openChat);

      function openChat() {
        box.innerHTML = `
          <div class="panel chat">
            <h4 class="chat-title">💬 Message your teacher about this item</h4>
            <div class="chat-log" id="chat-log">
              <div class="msg from-teacher">${GREETING}</div>
            </div>

            <p class="chat-hint" id="chat-type-label">What would you like to report?</p>
            <div class="chat-chips" id="chat-chips">
              ${TYPES.map(t => `
                <button class="chip-btn" data-bug="${t.id}" aria-pressed="false">${t.label}</button>
              `).join('')}
            </div>

            <div class="chat-compose">
              <textarea id="bug-reason" class="chat-input" rows="2" maxlength="400"
                placeholder="Tell me what is wrong, and what you think it should be."></textarea>
              <button id="btn-send-bug" class="btn chat-send" disabled>Send</button>
            </div>
            <p class="chat-hint" id="chat-foot">
              Messaging your teacher <strong>does not change your result</strong> for this item.
            </p>
          </div>
        `;

        const chips = box.querySelectorAll('.chip-btn');
        const log = document.getElementById('chat-log');
        const reasonEl = document.getElementById('bug-reason');
        const sendBtn = document.getElementById('btn-send-bug');

        function refresh() {
          sendBtn.disabled = !bugType || reasonEl.value.trim().length < MIN_REASON;
        }

        chips.forEach(c => c.addEventListener('click', () => {
          chips.forEach(o => o.setAttribute('aria-pressed', 'false'));
          c.setAttribute('aria-pressed', 'true');
          bugType = c.dataset.bug;
          refresh();
          reasonEl.focus();
        }));

        reasonEl.addEventListener('input', refresh);
        reasonEl.addEventListener('keydown', (e) => {
          // Enter gửi, Shift+Enter xuống dòng — đúng thói quen nhắn tin.
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!sendBtn.disabled) send();
          }
        });
        sendBtn.addEventListener('click', () => { if (!sendBtn.disabled) send(); });

        function bubble(cls, htmlText) {
          const el = document.createElement('div');
          el.className = 'msg ' + cls;
          el.innerHTML = htmlText;
          log.appendChild(el);
          log.scrollTop = log.scrollHeight;
        }

        function send() {
          const text = reasonEl.value.trim();
          const typeLabel = (TYPES.find(t => t.id === bugType) || {}).label || '';

          Portal.spine.aiEvalBug(task.id, {
            kind: task.kind,
            bugType,
            reason: text,
            itemCorrect: isCorrect,
            category: categoryId,
            unit: setId,
            snapshot: {
              spans: task.spans.slice(),
              chosen_idx: chosenIdx,
              chosen_text: chosenIdx >= 0 ? String(task.spans[chosenIdx]).trim() : null,
              chose_no_error: chosenIdx === -1,
              answer_idx: hasError ? answerIdx : null,
              has_error: hasError,
              answer_span: hasError ? task.error.span : null,
              correction: hasError ? task.error.correction : null,
              explanation: task.error.explanation || null,
            },
          });

          sent += 1;
          const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
          bubble('from-me',
            `<span class="msg-tag">${escapeHtml(typeLabel)}</span>${escapeHtml(text)}` +
            `<span class="msg-meta">${time} · ✓ saved to your messages</span>`);

          reasonEl.value = '';
          refresh();

          if (sent === 1) {
            bubble('from-teacher',
              'Got it. I read and check every message when the data is collected — ' +
              'I can’t reply here straight away, but your message won’t get lost.');
          }

          if (sent >= MAX_MESSAGES) {
            document.getElementById('chat-chips').style.display = 'none';
            document.getElementById('chat-type-label').style.display = 'none';
            document.querySelector('.chat-compose').style.display = 'none';
            document.getElementById('chat-foot').innerHTML =
              'You have sent ' + sent + (sent === 1 ? ' message' : ' messages') + ' about this item. ' + 'See all your messages under <strong>My Progress</strong>.';
          } else {
            document.getElementById('chat-foot').innerHTML =
              'Messaging your teacher <strong>does not change your result</strong> for this item. ' +
              'See the messages you have sent under <strong>My Progress</strong>.';
          }
        }
      }
    }

    function escapeHtml(t) {
      return String(t == null ? '' : t).replace(/[&<>"']/g, c => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
      ));
    }

    function renderCompletion() {
      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:32px 16px;">
          <div style="font-size:42px; margin-bottom:12px;">🏆</div>
          <h2 style="color:var(--navy); margin-top:0;">Task set complete!</h2>
          <p style="color:var(--muted); font-size:15.5px;">
            You have finished all 28 tasks in <strong>${data.title}</strong>.
          </p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/ai-logs/" class="btn ghost">← Back to AI Error Log</a>
            <a href="/practice/" class="btn">Go to Practice →</a>
          </div>
        </div>
      `;
    }

    renderTask(0);

  } catch (err) {
    console.error('Failed to load AI eval tasks:', err);
    container.innerHTML = Portal.empty('The AI appraisal tasks could not be loaded.', '/ai-logs/', '← Back to AI Error Log');
  }
}
