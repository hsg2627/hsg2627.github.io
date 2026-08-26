// practice/grammar/js/app.js — Module Ngữ pháp
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const gid = params.get('g');

const boot = await Portal.boot({ module: 'grammar', unit: gid, tab: 'practice' });

if (boot.ok) {
  if (!gid) {
    renderList();
  } else {
    renderDrill(gid);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Luyện tập', '/practice/')}
    <h1>📐 14 Chuyên đề Ngữ pháp Lớp 10</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Các chuyên đề ngữ pháp trọng tâm theo Chương trình GDPT 2018.
    </p>
    <div id="grammar-list-container" class="cards" style="margin-top:20px;">
      <p style="color:var(--muted);">Đang tải danh sách chuyên đề...</p>
    </div>
  `;

  try {
    const mf = await manifest();
    const grammarModules = mf.modules.filter(m => m.kind === 'grammar');
    const container = document.getElementById('grammar-list-container');
    if (!container) return;

    container.innerHTML = grammarModules.map((m, idx) => `
      <a class="card" href="/practice/grammar/?g=${m.id}">
        <span class="ico">📝</span>
        <h3>${idx + 1}. ${m.title}</h3>
        <div class="meta">
          <span>Học kỳ: <strong>${m.semester}</strong></span>
          <span>Mục CT: <strong>${m.grammar?.join(', ') || ''}</strong></span>
        </div>
      </a>
    `).join('');
  } catch (err) {
    const container = document.getElementById('grammar-list-container');
    if (container) {
      container.innerHTML = Portal.empty('Chưa tải được danh sách chuyên đề. Em kiểm tra mạng rồi thử lại nhé.');
    }
  }
}

async function renderDrill(moduleGid) {
  const main = document.getElementById('main');
  if (!main) return;

  main.innerHTML = `
    ${Portal.crumb('Danh sách ngữ pháp', '/practice/grammar/')}
    <div id="drill-container">
      <p style="color:var(--muted);">Đang nạp bài tập...</p>
    </div>
  `;

  try {
    const data = await loadJSON(`grammar/${moduleGid}.json`);
    const container = document.getElementById('drill-container');
    if (!container || !data.items || data.items.length === 0) {
      if (container) container.innerHTML = Portal.empty('Chưa có câu hỏi nào cho chuyên đề này.');
      return;
    }

    let currentIndex = 0;
    let selectedOptionIndex = null;
    let isAnswered = false;

    function renderQuestion(index) {
      if (index >= data.items.length) {
        renderCompletion();
        return;
      }

      const item = data.items[index];
      selectedOptionIndex = null;
      isAnswered = false;

      // Ghi nhận view item và bấm giờ
      Portal.spine.viewItem(item.id, { module: 'grammar', unit: moduleGid });

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2 style="margin:0; font-size:1.15rem;">${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Câu ${index + 1}/${data.items.length}</span>
        </div>

        ${item.ai_generated ? `<div class="chip-ai">🤖 AI-Generated Material</div>` : ''}

        <!-- Khung câu hỏi -->
        <div class="panel" style="margin-top:8px;">
          <p style="font-size:1.1rem; font-weight:600; margin:0 0 16px; line-height:1.5;">${item.prompt}</p>

          <div id="opts-list">
            ${item.options.map((optText, optIdx) => `
              <button class="opt" data-opt-idx="${optIdx}">
                <span class="key">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${optText.replace(/^[A-D]\.\s*/, '')}</span>
              </button>
            `).join('')}
          </div>

          <div id="feedback-area"></div>

          <div class="btn-row" style="margin-top:16px;">
            <button id="btn-check" class="btn btn-wide" disabled>Kiểm tra</button>
            <button id="btn-next" class="btn btn-wide" style="display:none;">Câu tiếp theo →</button>
          </div>
        </div>

        <!-- Tóm tắt lý thuyết rút gọn -->
        ${data.theory ? `
          <details style="margin-top:20px; background:var(--surface); border:1px solid var(--rule); border-radius:var(--radius); padding:12px 16px;">
            <summary style="cursor:pointer; font-weight:600; color:var(--navy);">📖 Xem tóm tắt lý thuyết chuyên đề</summary>
            <div style="margin-top:14px; font-size:15px; line-height:1.6;">
              ${data.theory}
            </div>
          </details>
        ` : ''}
      `;

      // Xử lý chọn phương án
      const optButtons = container.querySelectorAll('.opt');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (isAnswered) return;
          optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
          btn.setAttribute('aria-pressed', 'true');
          selectedOptionIndex = parseInt(btn.dataset.optIdx, 10);
          const checkBtn = document.getElementById('btn-check');
          if (checkBtn) checkBtn.disabled = false;
        });
      });

      // Xử lý nút Kiểm tra
      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const feedbackArea = document.getElementById('feedback-area');

      checkBtn.addEventListener('click', () => {
        if (selectedOptionIndex === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';

        const isCorrect = (selectedOptionIndex === item.answer);
        const correctOptIdx = item.answer;

        // Cập nhật giao diện các phương án
        optButtons.forEach((btn, idx) => {
          btn.disabled = true;
          if (idx === correctOptIdx) {
            btn.classList.add('is-correct');
            btn.innerHTML = `<span class="key" style="color:var(--ok);">✓</span> ` + btn.innerHTML;
          } else if (idx === selectedOptionIndex && !isCorrect) {
            btn.classList.add('is-wrong');
            btn.innerHTML = `<span class="key" style="color:var(--crit);">✕</span> ` + btn.innerHTML;
          }
        });

        // 1. Hiện giải thích trước (§1)
        feedbackArea.innerHTML = `
          <div class="fb ${isCorrect ? '' : 'bad'}">
            <h4>${isCorrect ? '✓ Chính xác!' : '✕ Chưa chính xác'}</h4>
            <p>${item.explanation || (isCorrect ? 'Em đã chọn đáp án đúng.' : 'Hãy xem lại dấu hiệu ngữ pháp trong câu nhé.')}</p>
          </div>
        `;

        // 2. Ghi nhận Spine và hiện thưởng sau
        const res = Portal.spine.answerItem(item.id, {
          module: 'grammar',
          unit: moduleGid,
          response: selectedOptionIndex,
          correct: isCorrect
        });

        Portal.renderHud();
        if (res.xp_delta > 0) {
          Portal.toast(`+${res.xp_delta} XP`);
        }

        // Hiện nút chuyển câu
        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        currentIndex++;
        renderQuestion(currentIndex);
      });
    }

    function renderCompletion() {
      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:32px 16px;">
          <div style="font-size:42px; margin-bottom:12px;">🎉</div>
          <h2 style="color:var(--navy); margin-top:0;">Hoàn thành chuyên đề!</h2>
          <p style="color:var(--muted); font-size:15.5px;">
            Em đã hoàn thành các câu hỏi của chuyên đề <strong>${data.title}</strong>.
          </p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/practice/grammar/" class="btn ghost">← Danh sách ngữ pháp</a>
            <a href="/practice/" class="btn">Về trung tâm Luyện tập →</a>
          </div>
        </div>
      `;
    }

    renderQuestion(0);

  } catch (err) {
    console.error('Lỗi nạp bài tập:', err);
    container.innerHTML = Portal.empty('Không thể tải dữ liệu bài tập ngữ pháp.', '/practice/grammar/', '← Quay lại danh sách');
  }
}
