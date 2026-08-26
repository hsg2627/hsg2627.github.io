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
    let chosenSpan = null; // null | '__NO_ERROR__' | exact span string
    let isEvaluated = false;

    function renderTask(idx) {
      if (idx >= data.items.length) {
        renderCompletion();
        return;
      }

      const task = data.items[idx];
      chosenSpan = null;
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
        submitBtn.disabled = false;
      });

      // Bấm nộp kết quả
      submitBtn.addEventListener('click', () => {
        if (!chosenSpan || isEvaluated) return;
        isEvaluated = true;
        submitBtn.style.display = 'none';
        noErrorBtn.disabled = true;

        const hasError = !!task.error.present;
        let isCorrect = false;

        if (hasError) {
          isCorrect = (chosenSpan === task.error.span);
        } else {
          isCorrect = (chosenSpan === '__NO_ERROR__');
        }

        // Highlight spans
        spanEls.forEach(el => {
          const txt = el.textContent.trim();
          if (hasError && txt === task.error.span) {
            el.classList.add('correct-span');
          } else if (txt === chosenSpan && !isCorrect) {
            el.classList.add('wrong-span');
          }
        });

        // Phản hồi chi tiết
        let fbHtml = '';
        if (isCorrect) {
          fbHtml = `
            <div class="fb">
              <h4>✓ Nhận định chính xác!</h4>
              ${hasError ? `
                <p><strong>Cụm từ sai:</strong> <code>${task.error.span}</code><br>
                <strong>Sửa đúng:</strong> <code>${task.error.correction}</code><br>
                ${task.error.explanation}</p>
              ` : `
                <p>Đúng rồi, đoạn văn này hoàn toàn chuẩn xác và không chứa lỗi ngữ pháp hay từ vựng.</p>
              `}
            </div>
          `;
        } else {
          fbHtml = `
            <div class="fb bad">
              <h4>✕ Nhận định chưa chính xác</h4>
              ${hasError ? `
                <p>Đoạn văn này <strong>có lỗi sai</strong> tại cụm: <code>${task.error.span}</code><br>
                <strong>Sửa lại:</strong> <code>${task.error.correction}</code><br>
                <strong>Giải thích:</strong> ${task.error.explanation}</p>
              ` : `
                <p>Đoạn văn này là một đoạn văn <strong>chuẩn xác, không có lỗi</strong>. Cụm từ em chọn đã được dùng đúng ngữ pháp.</p>
              `}
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

        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        taskIndex++;
        renderTask(taskIndex);
      });
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
