// practice/listening/js/app.js — Kỹ năng Nghe (5 Unit HK2)
import { Portal } from '/js/progress.js';
import { loadJSON, manifest } from '/content/loader.js';

const params = new URLSearchParams(location.search);
const unitParam = params.get('unit');

const boot = await Portal.boot({ module: 'listening', unit: unitParam, tab: 'practice' });

if (boot.ok) {
  if (!unitParam) {
    renderList();
  } else {
    renderDrill(unitParam);
  }
}

async function renderList() {
  const main = document.getElementById('main');
  if (!main) return;

  const hk2Units = [
    { unit: 6, title: 'Gender Equality', desc: 'Luyện nghe về bình đẳng giới và cơ hội nghề nghiệp.' },
    { unit: 7, title: 'Viet Nam & International Organisations', desc: 'Luyện nghe về quan hệ hợp tác với các tổ chức quốc tế.' },
    { unit: 8, title: 'New Ways to Learn', desc: 'Luyện nghe về các phương pháp học tập số và trực tuyến.' },
    { unit: 9, title: 'Protecting the Environment', desc: 'Luyện nghe về bảo tồn đa dạng sinh học và giảm rác thải.' },
    { unit: 10, title: 'Ecotourism', desc: 'Luyện nghe về du lịch sinh thái có trách nhiệm.' }
  ];

  main.innerHTML = `
    ${Portal.crumb('Luyện tập', '/practice/')}
    <h1>🎧 Kỹ năng Nghe (Listening)</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      5 bài luyện nghe tiếng Anh Học kỳ 2 bám sát Chương trình GDPT 2018 (độ dài 180–200 từ).
    </p>

    <div class="cards" style="margin-top:20px;">
      ${hk2Units.map(u => `
        <a class="card" href="/practice/listening/?unit=${u.unit}">
          <span class="ico">🎧</span>
          <h3>Unit ${u.unit}: ${u.title}</h3>
          <p>${u.desc}</p>
          <div class="meta"><span>Học kỳ 2</span><span>Audio đối thoại</span></div>
        </a>
      `).join('')}
    </div>
  `;
}

async function renderDrill(unitNum) {
  const main = document.getElementById('main');
  if (!main) return;

  const pad = String(unitNum).padStart(2, '0');
  main.innerHTML = `
    ${Portal.crumb('Danh sách bài nghe', '/practice/listening/')}
    <div id="listening-drill-container">
      <p style="color:var(--muted);">Đang nạp bài nghe...</p>
    </div>
  `;

  try {
    const data = await loadJSON(`skills/u${pad}-listening.json`);
    const container = document.getElementById('listening-drill-container');
    if (!container) return;

    let qIndex = 0;
    let selectedOpt = null;
    let isAnswered = false;
    let audioStarted = false;

    function renderQuestion(idx) {
      if (idx >= data.questions.length) {
        renderCompletion();
        return;
      }

      const q = data.questions[idx];
      selectedOpt = null;
      isAnswered = false;

      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h2 style="margin:0; font-size:1.15rem;">Unit ${data.unit}: ${data.title}</h2>
          <span style="font-size:13.5px; font-weight:700; color:var(--muted);">Câu ${idx + 1}/${data.questions.length}</span>
        </div>

        <!-- Trình phát âm thanh gốc HTML5 -->
        <div class="panel" style="margin-bottom:16px;">
          <div style="font-size:14px; font-weight:600; margin-bottom:8px; color:var(--navy);">
            🔊 Nghe đoạn hội thoại:
          </div>
          <audio id="audio-player" controls preload="none" style="width:100%;">
            <source src="/assets/audio/04_Track_4.mp3" type="audio/mpeg">
            Trình duyệt của em không hỗ trợ phát âm thanh trực tiếp.
          </audio>
          <p style="font-size:12.5px; color:var(--muted); margin:6px 0 0;">
            💡 Em hãy bấm Play để nghe và trả lời câu hỏi bên dưới.
          </p>
        </div>

        <!-- Khung câu hỏi -->
        <div class="panel">
          <p style="font-size:1.05rem; font-weight:600; margin:0 0 16px;">${q.prompt}</p>

          <div id="opts-list">
            ${q.options.map((optText, optIdx) => `
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

        <!-- Lời thoại mở sau khi trả lời -->
        <div id="transcript-container" style="margin-top:16px;"></div>
      `;

      const audio = document.getElementById('audio-player');
      audio?.addEventListener('play', () => {
        if (!audioStarted) {
          audioStarted = true;
          Portal.spine.viewItem(q.id, { module: 'listening', unit: String(unitNum) });
        }
      });

      const optButtons = container.querySelectorAll('.opt');
      optButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (isAnswered) return;
          optButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
          btn.setAttribute('aria-pressed', 'true');
          selectedOpt = parseInt(btn.dataset.optIdx, 10);
          const checkBtn = document.getElementById('btn-check');
          if (checkBtn) checkBtn.disabled = false;
        });
      });

      const checkBtn = document.getElementById('btn-check');
      const nextBtn = document.getElementById('btn-next');
      const feedbackArea = document.getElementById('feedback-area');
      const transcriptContainer = document.getElementById('transcript-container');

      checkBtn.addEventListener('click', () => {
        if (selectedOpt === null || isAnswered) return;
        isAnswered = true;
        checkBtn.style.display = 'none';

        const isCorrect = (selectedOpt === q.answer);
        const correctOptIdx = q.answer;

        optButtons.forEach((btn, oIdx) => {
          btn.disabled = true;
          if (oIdx === correctOptIdx) {
            btn.classList.add('is-correct');
            btn.innerHTML = `<span class="key" style="color:var(--ok);">✓</span> ` + btn.innerHTML;
          } else if (oIdx === selectedOpt && !isCorrect) {
            btn.classList.add('is-wrong');
            btn.innerHTML = `<span class="key" style="color:var(--crit);">✕</span> ` + btn.innerHTML;
          }
        });

        feedbackArea.innerHTML = `
          <div class="fb ${isCorrect ? '' : 'bad'}">
            <h4>${isCorrect ? '✓ Chính xác!' : '✕ Chưa chính xác'}</h4>
            <p>${q.explanation || (isCorrect ? 'Em đã nghe và chọn đúng.' : 'Hãy đọc lời thoại để đối chiếu nhé.')}</p>
          </div>
        `;

        // Hiện lời thoại sau khi làm
        if (data.transcript) {
          transcriptContainer.innerHTML = `
            <details style="background:var(--surface); border:1px solid var(--rule); border-radius:var(--radius); padding:12px 16px;">
              <summary style="cursor:pointer; font-weight:600; color:var(--navy);">📄 Xem lời thoại bài nghe (Audio Transcript)</summary>
              <p style="margin-top:12px; font-size:15px; line-height:1.6; white-space:pre-line;">${data.transcript}</p>
            </details>
          `;
        }

        const res = Portal.spine.answerItem(q.id, {
          module: 'listening',
          unit: String(unitNum),
          response: selectedOpt,
          correct: isCorrect
        });

        Portal.renderHud();
        if (res.xp_delta > 0) {
          Portal.toast(`+${res.xp_delta} XP`);
        }

        nextBtn.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        qIndex++;
        renderQuestion(qIndex);
      });
    }

    function renderCompletion() {
      container.innerHTML = `
        <div class="panel" style="text-align:center; padding:32px 16px;">
          <div style="font-size:42px; margin-bottom:12px;">🎉</div>
          <h2 style="color:var(--navy); margin-top:0;">Hoàn thành bài nghe!</h2>
          <p style="color:var(--muted);">Em đã hoàn thành các câu hỏi luyện nghe Unit ${data.unit}.</p>
          <div class="btn-row" style="justify-content:center; margin-top:20px;">
            <a href="/practice/listening/" class="btn ghost">← Danh sách bài nghe</a>
            <a href="/practice/" class="btn">Về Luyện tập →</a>
          </div>
        </div>
      `;
    }

    renderQuestion(0);

  } catch (err) {
    console.error('Lỗi nạp bài nghe:', err);
    container.innerHTML = Portal.empty('Không tải được bài nghe này.', '/practice/listening/', '← Danh sách bài nghe');
  }
}
