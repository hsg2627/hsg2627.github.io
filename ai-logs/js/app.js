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
    <h1>🤖 Xưởng thẩm định AI</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Đọc các đoạn văn tiếng Anh do AI viết và tìm chỗ sai. <strong>Không phải bài nào cũng có lỗi.</strong>
    </p>

    <!-- 2 Bộ đề thẩm định -->
    <h2>Chọn bộ tác vụ thẩm định</h2>
    <div class="cards">
      <a class="card" href="/ai-logs/?set=ae-hk1">
        <span class="ico">🔍</span>
        <h3>Xưởng AI · Học kỳ 1</h3>
        <p>28 đoạn văn thẩm định bám sát kiến thức ngôn ngữ Học kỳ 1.</p>
        <div class="meta"><span>28 bài tập</span><span>Học kỳ 1</span></div>
      </a>
      <a class="card" href="/ai-logs/?set=ae-hk2">
        <span class="ico">🔬</span>
        <h3>Xưởng AI · Học kỳ 2</h3>
        <p>28 đoạn văn thẩm định bám sát kiến thức ngôn ngữ Học kỳ 2.</p>
        <div class="meta"><span>28 bài tập</span><span>Học kỳ 2</span></div>
      </a>
    </div>

    <!-- 7 Danh mục lỗi nhận diện -->
    <section class="panel" style="margin-top:24px;">
      <h3 style="margin-top:0;">📚 7 Hạng mục lỗi trọng tâm (Typology)</h3>
      <ol style="margin:0; padding-left:20px; font-size:15px; line-height:1.7; color:var(--ink);">
        <li><strong>Thì và thể:</strong> Sự phối hợp thì, dấu hiệu nhận biết thời gian.</li>
        <li><strong>Dạng động từ:</strong> V-ing, to-V, bare infinitive.</li>
        <li><strong>Câu bị động:</strong> Cấu trúc bị động theo thì và với modal verbs.</li>
        <li><strong>Mệnh đề & câu điều kiện:</strong> Đại từ quan hệ, liên từ, câu điều kiện loại 1 & 2.</li>
        <li><strong>Mạo từ & danh từ:</strong> A/An/The/Zero article, danh từ đếm được/không đếm được.</li>
        <li><strong>Tính từ & so sánh:</strong> Đuôi -ed/-ing, so sánh hơn và so sánh nhất.</li>
        <li><strong>Giới từ & kết hợp từ:</strong> Cụm cố định, giới từ đi kèm tính từ/động từ.</li>
      </ol>
    </section>
  `;
}

async function renderTaskSequence(setKey) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Xưởng AI', '/ai-logs/')}
    <div id="ai-task-container">
      <p style="color:var(--muted);">Đang nạp các đoạn văn thẩm định...</p>
    </div>
  `;

  try {
    const data = await loadJSON(`ai-eval/${setKey}.json`);
    const container = document.getElementById('ai-task-container');
    if (!container || !data.items || data.items.length === 0) {
      if (container) container.innerHTML = Portal.empty('Chưa có bài thẩm định nào trong bộ này.', '/ai-logs/', '← Về danh mục Xưởng AI');
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
        console.error(`[Xưởng AI] ${task.id}: error.span không nằm trong cụm nào —`, key);
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
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Tác vụ ${idx + 1}/${data.items.length}</span>
        </div>

        <div class="chip-ai" style="margin-bottom:10px;">🤖 Đoạn văn này do AI viết</div>

        <div class="panel">
          <p style="font-size:14px; color:var(--muted); margin:0 0 10px;">
            👉 Chạm vào cụm từ em cho là <strong>có lỗi sai</strong>, hoặc bấm nút bên dưới nếu đoạn văn không có lỗi:
          </p>

          <!-- Vùng các span tương tác -->
          <div class="ai-text-box" id="ai-spans-box">
            ${task.spans.map((spText, spIdx) => `
              <span class="ai-span" data-span-idx="${spIdx}">${spText}</span>
            `).join(' ')}
          </div>

          <!-- Nút thường trực "Đoạn này không có lỗi" -->
          <button id="btn-no-error" class="btn ghost btn-wide" style="margin:12px 0;">
            🛡️ Đoạn này không có lỗi
          </button>

          <!-- Ô nhập lý do tuỳ chọn -->
          <div style="margin:14px 0;">
            <label for="ai-reason" style="font-size:14px; font-weight:600; color:var(--navy);">
              Vì sao em nghĩ vậy? (không bắt buộc, tối đa 200 ký tự):
            </label>
            <input 
              type="text" 
              id="ai-reason" 
              class="input-text" 
              placeholder="Giải thích ngắn gọn nhận định của em..."
              maxlength="200"
            />
          </div>

          <div id="ai-feedback-box"></div>
          <div id="ai-bug-box"></div>

          <div class="btn-row">
            <button id="btn-submit-eval" class="btn btn-wide" disabled>Gửi nhận xét thẩm định</button>
            <button id="btn-next-task" class="btn btn-wide" style="display:none;">Tác vụ tiếp theo →</button>
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
              <h4>✓ Nhận định chính xác!</h4>
              <p><strong>Cụm sai:</strong> <code>${task.error.span}</code><br>
              <strong>Sửa lại:</strong> <code>${task.error.correction}</code><br>
              <strong>Giải thích:</strong> ${task.error.explanation}</p>
            </div>
          `;
        } else if (isCorrect) {
          fbHtml = `
            <div class="fb">
              <h4>✓ Nhận định chính xác!</h4>
              <p>Đúng rồi, đoạn này không có lỗi.</p>
              ${task.error.explanation ? `<p><strong>Vì sao:</strong> ${task.error.explanation}</p>` : ''}
            </div>
          `;
        } else if (hasError) {
          fbHtml = `
            <div class="fb bad">
              <h4>✕ Nhận định chưa chính xác</h4>
              ${picked
                ? `<p>Cụm em chọn — <code>${picked}</code> — <strong>dùng đúng</strong>.</p>`
                : `<p>Đoạn này <strong>có lỗi sai</strong>, em đã bỏ sót.</p>`}
              <p>Lỗi nằm ở cụm: <code>${task.error.span}</code><br>
              <strong>Sửa lại:</strong> <code>${task.error.correction}</code><br>
              <strong>Giải thích:</strong> ${task.error.explanation}</p>
            </div>
          `;
        } else {
          fbHtml = `
            <div class="fb bad">
              <h4>✕ Nhận định chưa chính xác</h4>
              <p>Đoạn này <strong>không có lỗi</strong>. Cụm em chọn — <code>${picked}</code> — <strong>dùng đúng</strong>.</p>
              ${task.error.explanation ? `<p><strong>Vì sao:</strong> ${task.error.explanation}</p>` : ''}
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
          Portal.toast('+10 XP (Thẩm định đúng)');
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
        { id: 'key', label: 'Đáp án sai' },
        { id: 'text', label: 'Tiếng Anh nghe kỳ' },
        { id: 'app', label: 'Trang chạy sai' },
      ];

      const GREETING = 'Đoạn văn này do AI viết, nên bản thân nó vẫn sai được — '
        + 'kể cả đáp án. Em thấy chỗ nào chưa ổn thì nhắn cho cô nhé.';

      let bugType = null;
      let sent = 0;

      box.innerHTML = `
        <button id="btn-open-bug" class="btn ghost btn-wide">💬 Nhắn cho cô về bài này</button>
      `;
      document.getElementById('btn-open-bug').addEventListener('click', openChat);

      function openChat() {
        box.innerHTML = `
          <div class="panel chat">
            <h4 class="chat-title">💬 Nhắn cho cô về bài này</h4>
            <div class="chat-log" id="chat-log">
              <div class="msg from-teacher">${GREETING}</div>
            </div>

            <p class="chat-hint" id="chat-type-label">Em muốn báo chuyện gì?</p>
            <div class="chat-chips" id="chat-chips">
              ${TYPES.map(t => `
                <button class="chip-btn" data-bug="${t.id}" aria-pressed="false">${t.label}</button>
              `).join('')}
            </div>

            <div class="chat-compose">
              <textarea id="bug-reason" class="chat-input" rows="2" maxlength="400"
                placeholder="Em nói rõ giúp cô: sai ở chỗ nào, theo em thì đúng phải thế nào?"></textarea>
              <button id="btn-send-bug" class="btn chat-send" disabled>Gửi</button>
            </div>
            <p class="chat-hint" id="chat-foot">
              Nhắn cho cô <strong>không làm đổi kết quả</strong> bài này.
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
            `<span class="msg-meta">${time} · ✓ đã ghi vào hộp thư</span>`);

          reasonEl.value = '';
          refresh();

          if (sent === 1) {
            bubble('from-teacher',
              'Cô nhận được rồi. Cô đọc và kiểm lại từng cái khi thu dữ liệu — ' +
              'không trả lời ngay ở đây được, nhưng thư của em không mất đi đâu cả.');
          }

          if (sent >= MAX_MESSAGES) {
            document.getElementById('chat-chips').style.display = 'none';
            document.getElementById('chat-type-label').style.display = 'none';
            document.querySelector('.chat-compose').style.display = 'none';
            document.getElementById('chat-foot').innerHTML =
              'Em đã nhắn ' + sent + ' tin cho bài này. Xem lại mọi thư ở mục <strong>Của tôi</strong>.';
          } else {
            document.getElementById('chat-foot').innerHTML =
              'Nhắn cho cô <strong>không làm đổi kết quả</strong> bài này. ' +
              'Xem lại thư đã gửi ở mục <strong>Của tôi</strong>.';
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
          <h2 style="color:var(--navy); margin-top:0;">Hoàn thành đợt thẩm định!</h2>
          <p style="color:var(--muted); font-size:15.5px;">
            Em đã hoàn thành tất cả 28 tác vụ thẩm định trong <strong>${data.title}</strong>.
          </p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/ai-logs/" class="btn ghost">← Về Xưởng AI</a>
            <a href="/practice/" class="btn">Sang Luyện tập →</a>
          </div>
        </div>
      `;
    }

    renderTask(0);

  } catch (err) {
    console.error('Lỗi nạp bài AI eval:', err);
    container.innerHTML = Portal.empty('Không thể tải các tác vụ thẩm định AI.', '/ai-logs/', '← Về Xưởng AI');
  }
}
