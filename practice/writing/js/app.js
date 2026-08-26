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
    { unit: 6, title: 'Gender Equality', prompt: 'Viết đoạn văn (120–150 từ) về tầm quan trọng của bình đẳng giới trong giáo dục.' },
    { unit: 7, title: 'Viet Nam & International Organisations', prompt: 'Viết đoạn văn (120–150 từ) về lợi ích khi Việt Nam gia nhập các tổ chức quốc tế.' },
    { unit: 8, title: 'New Ways to Learn', prompt: 'Viết đoạn văn (120–150 từ) về ưu và nhược điểm của việc học trực tuyến.' },
    { unit: 9, title: 'Protecting the Environment', prompt: 'Viết đoạn văn (120–150 từ) đề xuất các giải pháp bảo vệ động vật hoang dã.' },
    { unit: 10, title: 'Ecotourism', prompt: 'Viết đoạn văn (120–150 từ) về các nguyên tắc du lịch sinh thái có trách nhiệm.' }
  ];

  main.innerHTML = `
    ${Portal.crumb('Luyện tập', '/practice/')}
    <h1>✍️ Kỹ năng Viết (Writing)</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Luyện viết đoạn văn 120–150 từ theo chủ đề HK2, tự đánh giá bằng bảng kiểm và đối chiếu bài viết mẫu.
    </p>

    <div class="cards" style="margin-top:20px;">
      ${hk2Writing.map(u => `
        <a class="card" href="/practice/writing/?unit=${u.unit}">
          <span class="ico">📝</span>
          <h3>Unit ${u.unit}: ${u.title}</h3>
          <p>${u.prompt}</p>
          <div class="meta"><span>120–150 từ</span><span>Bảng kiểm + Bài mẫu</span></div>
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
    ${Portal.crumb('Danh sách đề viết', '/practice/writing/')}
    <div id="writing-studio-container">
      <p style="color:var(--muted);">Đang nạp đề viết...</p>
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
        <h2 style="margin:0;">Unit ${data.unit}: ${data.topic || 'Viết đoạn văn'}</h2>
        <span style="font-size:13.5px; font-weight:700; color:var(--muted);">${data.word_limit || '120–150 từ'}</span>
      </div>

      <!-- Đề bài -->
      <div class="panel">
        <h3 style="margin-top:0; color:var(--navy);">📌 Đề bài (Writing Task)</h3>
        <p style="font-size:16px; line-height:1.5;">${data.prompt}</p>
      </div>

      <!-- Khung soạn thảo -->
      <div class="panel">
        <label for="writing-textarea" style="font-size:15px; font-weight:600; color:var(--navy); display:flex; justify-content:space-between;">
          <span>Bài viết của em:</span>
          <span id="word-count-badge" style="font-size:13px; color:var(--muted);">0 từ</span>
        </label>
        <textarea id="writing-textarea" class="input-area" rows="8" placeholder="Type your English paragraph here...">${savedDraft}</textarea>
        
        <div class="btn-row">
          <button id="btn-submit-writing" class="btn btn-wide">Nộp bài & Đối chiếu bài mẫu</button>
        </div>
      </div>

      <!-- Vùng đối chiếu & khảo sát (hiện sau khi nộp) -->
      <div id="writing-review-area" style="display:none; margin-top:20px;"></div>
    `;

    const textarea = document.getElementById('writing-textarea');
    const wordCountBadge = document.getElementById('word-count-badge');
    const submitBtn = document.getElementById('btn-submit-writing');
    const reviewArea = document.getElementById('writing-review-area');

    function updateCount() {
      const text = textarea.value.trim();
      const count = text ? text.split(/\s+/).length : 0;
      wordCountBadge.textContent = `${count} từ`;
      localStorage.setItem(draftKey, text);
    }
    updateCount();
    textarea.addEventListener('input', updateCount);

    submitBtn.addEventListener('click', () => {
      const studentText = textarea.value.trim();
      if (!studentText) {
        alert('Em hãy viết bài trước khi nộp nhé!');
        return;
      }

      submitBtn.style.display = 'none';
      textarea.disabled = true;

      // Render model essay and self-checklist + AI survey question
      reviewArea.style.display = 'block';
      reviewArea.innerHTML = `
        <!-- Bài mẫu đối chiếu -->
        <div class="panel">
          <h3 style="margin-top:0; color:var(--navy);">📖 Bài viết mẫu (Model Essay)</h3>
          <p style="font-size:15.5px; line-height:1.6; white-space:pre-line; color:var(--ink);">
            ${data.model_essay}
          </p>
        </div>

        <!-- Bảng kiểm tự đánh giá -->
        <div class="panel">
          <h3 style="margin-top:0; color:var(--navy);">✅ Bảng kiểm tự đánh giá (Self-Assessment)</h3>
          ${data.checklist.map((chk, cIdx) => `
            <label class="check-item">
              <input type="checkbox" id="chk-${cIdx}" />
              <span>${chk}</span>
            </label>
          `).join('')}
        </div>

        <!-- Khảo sát mức độ dùng AI (§9.4 - Bắt buộc chọn 1) -->
        <div class="panel" style="border-left:4px solid var(--brass);">
          <h3 style="margin-top:0; color:var(--brass);">🤖 Khảo sát sử dụng AI</h3>
          <p style="font-size:15px; margin-bottom:12px;">
            <strong>Em có dùng AI khi viết bài này không?</strong> (Vui lòng chọn 1 mục):
          </p>
          <label class="check-item">
            <input type="radio" name="ai_use" value="none" required />
            <span>Không dùng AI (tự viết 100%)</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="idea" />
            <span>Dùng AI để tìm ý tưởng / từ vựng gợi ý</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="draft" />
            <span>Dùng AI viết nháp một phần rồi chỉnh sửa</span>
          </label>
          <label class="check-item">
            <input type="radio" name="ai_use" value="edit" />
            <span>Tự viết rồi nhờ AI soát lỗi ngữ pháp</span>
          </label>

          <div class="btn-row" style="margin-top:16px;">
            <button id="btn-final-confirm" class="btn btn-wide">Hoàn tất bài viết</button>
          </div>
        </div>
      `;

      document.getElementById('btn-final-confirm')?.addEventListener('click', () => {
        const selectedRadio = reviewArea.querySelector('input[name="ai_use"]:checked');
        if (!selectedRadio) {
          alert('Em vui lòng chọn một câu trả lời về mức độ sử dụng AI nhé!');
          return;
        }

        const aiUseVal = selectedRadio.value;
        Portal.spine.submitArtifact(data.id, {
          unit: String(unitNum),
          aiUse: aiUseVal
        });

        Portal.renderHud();
        Portal.toast('+15 XP (Đã hoàn thành bài viết)');

        reviewArea.innerHTML = `
          <div class="panel" style="text-align:center; padding:28px 16px;">
            <div style="font-size:42px; margin-bottom:10px;">🎉</div>
            <h2 style="color:var(--navy); margin-top:0;">Đã ghi nhận bài viết!</h2>
            <p style="color:var(--muted);">Cảm ơn em đã hoàn thành bài viết và tự đánh giá cẩn thận.</p>
            <div class="btn-row" style="justify-content:center; margin-top:16px;">
              <a href="/practice/writing/" class="btn ghost">← Đề viết khác</a>
              <a href="/practice/" class="btn">Về Luyện tập →</a>
            </div>
          </div>
        `;
      });
    });

  } catch (err) {
    console.error('Lỗi nạp bài viết:', err);
    container.innerHTML = Portal.empty('Không thể tải dữ liệu đề viết này.', '/practice/writing/', '← Danh sách đề viết');
  }
}
