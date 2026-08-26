// js/progress.js — lớp vỏ DUY NHẤT quanh xương sống.
//
// KHÔNG tự lưu trạng thái. KHÔNG tự gửi mạng. Mọi thứ đi qua Spine.
// Tệp này là chỗ duy nhất trong trang được import core/.

import { Spine } from '/core/spine.js';
import { Identity } from '/core/identity.js';
import { RULES } from '/core/config.js';
import { NAV } from '/js/data.js';

let authGateRendered = false;

export const Portal = {
  spine: Spine,

  /**
   * Gọi ở dòng đầu mọi app.js.
   *   const boot = await Portal.boot({ module:'grammar', unit:null, tab:'practice' });
   * Trả về { ok } — false nghĩa là đang hiện cổng nhập mã hoặc lỗi lưu trữ, app.js dừng lại.
   */
  async boot({ module = null, unit = null, tab = 'home' } = {}) {
    const r = await Spine.init();

    if (!r.ok) {
      const main = document.getElementById('main');
      if (main) {
        main.innerHTML = `
          <div class="panel" style="text-align:center; padding: 28px 16px;">
            <h2 style="color:var(--crit); margin-top:0;">⚠️ Không thể lưu tiến độ</h2>
            <p>${r.error || 'Trình duyệt đang chặn lưu dữ liệu. Em thử tắt chế độ ẩn danh rồi mở lại nhé.'}</p>
            <button class="btn" onclick="location.reload()">Thử lại</button>
          </div>
        `;
      }
      return { ok: false };
    }

    if (r.needIdentity) {
      Portal.renderTabbar(tab);
      Portal.renderAuthGate({ module, unit, tab });
      return { ok: false };
    }

    Portal.renderTabbar(tab);
    Portal.renderHud();

    const hudEl = document.getElementById('hud');
    if (hudEl) hudEl.removeAttribute('hidden');

    if (module) {
      Spine.openModule(module, unit);
    }

    return { ok: true };
  },

  /**
   * Chỉ đọc mã đã lưu, KHÔNG khởi động xương sống, KHÔNG ghi log.
   * Trả về 'student' | 'teacher' | 'guest'. Dùng cho cổng khoá §9.2.
   */
  role() {
    const id = Spine.id;
    if (!id) return 'guest';
    return /^GV-/i.test(id) ? 'teacher' : 'student';
  },

  /**
   * Vẽ thanh HUD trạng thái (Cấp độ, Thanh XP, Chuỗi đúng, Chờ gửi).
   */
  renderHud() {
    const el = document.getElementById('hud');
    if (!el || !Spine.isReady) return;

    const m = Spine.metrics;
    const s = Spine.state;
    const pending = Spine.pending;

    const lvl = s.level || 1;
    const currentXp = s.xp || 0;
    const nextLvlXp = RULES.LEVELS[lvl] || (lvl * 500);
    const prevLvlXp = RULES.LEVELS[lvl - 1] || 0;
    const progressPct = Math.min(100, Math.max(0, Math.round(((currentXp - prevLvlXp) / (nextLvlXp - prevLvlXp || 1)) * 100)));

    el.innerHTML = `
      <div>Cấp <b>${lvl}</b></div>
      <div class="bar" title="XP: ${currentXp}/${nextLvlXp}"><i style="width: ${progressPct}%"></i></div>
      <div>XP: <b>${currentXp}</b></div>
      <div>🔥 Chuỗi: <b>${s.streak || 0}</b></div>
      ${pending > 0 ? `<div title="Dữ liệu chưa gửi lên máy chủ" style="color:var(--brass)">⏳ Chờ: <b>${pending}</b></div>` : ''}
    `;
  },

  /**
   * Vẽ thanh điều hướng dưới đáy / trên cùng.
   */
  renderTabbar(currentTab) {
    const el = document.getElementById('tabbar');
    if (!el) return;

    el.innerHTML = NAV.map(item => `
      <a href="${item.href}" ${item.id === currentTab ? 'aria-current="page"' : ''}>
        <span class="ico">${item.ico}</span>
        <span>${item.label}</span>
      </a>
    `).join('');
  },

  /**
   * Cổng nhập mã định danh học sinh (§7).
   */
  renderAuthGate({ module, unit, tab }) {
    if (authGateRendered) return;
    authGateRendered = true;

    const main = document.getElementById('main');
    if (!main) return;

    main.innerHTML = `
      <div class="auth-gate">
        <h2>Chào em! 👋</h2>
        <p>Em nhập mã trên phiếu được phát để bắt đầu học nhé.</p>
        
        <form id="auth-form" onsubmit="return false;">
          <input 
            type="text" 
            id="auth-code-input" 
            class="auth-input" 
            placeholder="Ví dụ: NK1009-07" 
            inputmode="text" 
            autocapitalize="characters" 
            autocomplete="off" 
            spellcheck="false"
            required
          />
          <div id="auth-error-msg" class="auth-err" style="display:none;"></div>
          
          <div class="auth-hint">
            Dạng mã: <strong>NK</strong> + <strong>lớp</strong> + gạch nối + <strong>số thứ tự</strong> sổ điểm.
          </div>
          
          <button type="submit" id="auth-submit-btn" class="btn btn-wide" disabled>Vào học</button>
        </form>

        <p class="auth-hint" style="margin-top:20px; font-size:12px;">
          Mã này không phải tên em. Cô dùng nó để nhận biết tiến độ tự học của em.<br>
          <em>Máy này có thể quên mã nếu lâu không dùng. Em giữ lại phiếu mã nhé!</em>
        </p>
      </div>
    `;

    const input = document.getElementById('auth-code-input');
    const btn = document.getElementById('auth-submit-btn');
    const errMsg = document.getElementById('auth-error-msg');
    const form = document.getElementById('auth-form');

    input.addEventListener('input', () => {
      const val = input.value.trim().toUpperCase();
      input.value = val;
      const chk = Identity.validate(val);
      if (chk.ok) {
        btn.disabled = false;
        errMsg.style.display = 'none';
      } else {
        btn.disabled = true;
        if (val.length >= 6) {
          errMsg.textContent = chk.error;
          errMsg.style.display = 'block';
        } else {
          errMsg.style.display = 'none';
        }
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const code = input.value.trim().toUpperCase();
      btn.disabled = true;
      btn.textContent = 'Đang kiểm tra...';

      const res = await Spine.signIn(code);
      if (res.ok) {
        location.reload();
      } else {
        btn.disabled = false;
        btn.textContent = 'Vào học';
        errMsg.textContent = res.error || 'Mã không hợp lệ. Em kiểm tra lại phiếu nhé.';
        errMsg.style.display = 'block';
      }
    });
  },

  /**
   * Hiển thị thông báo nhỏ tự ẩn sau 1800ms.
   */
  toast(text) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    document.body.appendChild(t);

    setTimeout(() => {
      t.style.transition = 'opacity 0.3s ease';
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 300);
    }, 1800);
  },

  crumb(text, href) {
    return `<a class="crumb" href="${href}">← ${text}</a>`;
  },

  empty(text, href = '/practice/', label = 'Về trang Luyện tập →') {
    return `
      <div class="empty-state">
        <p>${text}</p>
        <a class="btn ghost" href="${href}">${label}</a>
      </div>
    `;
  },
};
