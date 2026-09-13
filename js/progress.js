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
            <h2 style="color:var(--crit); margin-top:0;">⚠️ Progress cannot be saved</h2>
            <p>${r.error || 'Your browser is blocking saved data. Please turn off private browsing and open the page again.'}</p>
            <button class="btn" onclick="location.reload()">Try again</button>
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
   * Cụm trạng thái ở góc phải header: cấp độ + thanh XP, chuỗi trả lời đúng, số dòng
   * chờ gửi, nút đổi nền và lối vào My Progress. Gọi lại được nhiều lần — các module
   * gọi sau mỗi câu trả lời để cập nhật XP.
   */
  renderHud() {
    const el = document.getElementById('hud');
    if (!el || !Spine.isReady) return;

    const s = Spine.state;
    const pending = Spine.pending;

    const lvl = s.level || 1;
    const currentXp = s.xp || 0;
    const nextLvlXp = RULES.LEVELS[lvl] || (lvl * 500);
    const prevLvlXp = RULES.LEVELS[lvl - 1] || 0;
    const progressPct = Math.min(100, Math.max(0, Math.round(((currentXp - prevLvlXp) / (nextLvlXp - prevLvlXp || 1)) * 100)));
    // Deploy xong, trình duyệt có thể còn spine.js cũ trong cache (Pages: max-age=600)
    // trong khi tệp này đã mới: chưa có setTheme thì ẩn nút, đừng để nút bấm ra lỗi.
    const canTheme = typeof Spine.setTheme === 'function';
    const dark = Spine.theme === 'dark';

    el.innerHTML = `
      <span class="pill pill-level" title="${currentXp} / ${nextLvlXp} XP">
        <b>Level ${lvl}</b>
        <span class="pill-bar" aria-hidden="true"><i style="width:${progressPct}%"></i></span>
        <span class="pill-xp">${currentXp} XP</span>
      </span>
      <span class="pill" title="Correct answers in a row">🔥 <b>${s.streak || 0}</b><span class="sr-only"> correct answers in a row</span></span>
      ${pending > 0 ? `<span class="pill pill-pending" title="Data not yet sent to the server">⏳ <b>${pending}</b><span class="sr-only"> rows waiting to be sent</span></span>` : ''}
      ${canTheme ? `<button type="button" class="pill-btn" id="theme-toggle" aria-pressed="${dark}" title="${dark ? 'Switch to light theme' : 'Switch to dark theme'}">
        <span aria-hidden="true">${dark ? '☀️' : '🌙'}</span><span class="sr-only">Dark theme</span>
      </button>` : ''}
      <a class="avatar" href="/me/" title="My Progress"><span aria-hidden="true">👤</span><span class="sr-only">My Progress</span></a>
    `;

    // Đổi tại chỗ, không vẽ lại cả cụm: vẽ lại là nút bị thay mới và người dùng bàn
    // phím mất vị trí focus ngay sau khi bấm.
    const btn = el.querySelector('#theme-toggle');
    if (btn) btn.addEventListener('click', () => {
      const next = Spine.theme === 'dark' ? 'light' : 'dark';
      Spine.setTheme(next);
      const isDark = next === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
      btn.firstElementChild.textContent = isDark ? '☀️' : '🌙';
    });
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
   * Cột phải của trang chủ và trang Luyện tập. Chỉ số của CHÍNH em, không so với bạn
   * khác: mã học sinh là lớp + số thứ tự sổ điểm, nên bảng xếp hạng theo mã là lộ danh
   * tính trong lớp — và trang không có máy chủ để so giữa các máy.
   * Trả về HTML; gắn vào DOM rồi gọi bindSidebar() để nút Today / Week / All time chạy.
   */
  sidebarHTML() {
    if (!Spine.isReady) return '';
    const m = Spine.metrics;
    // Cùng lý do cache như ở renderHud: store.js cũ chưa có các khoá theo ngày.
    // Thiếu thì hiện 0 — một thẻ số 0 trong vài phút tốt hơn trang chủ trắng.
    const today = m.today || { answered: 0, correct: 0 };
    const week = m.week || { answered: 0, correct: 0 };
    const totalCorrect = m.total_correct ?? 0;
    const acc = m.total_attempts ? Math.round(m.accuracy * 100) + '%' : '—';
    const word = (n, one, many) => (n === 1 ? one : many);
    const panel = (key, when, answered, correct, hidden) => `
        <div class="seg-panel" id="seg-${key}" role="tabpanel" aria-labelledby="segtab-${key}"${hidden ? ' hidden' : ''}>
          <span class="stat-big">${answered}</span>
          <p class="stat-sub">${word(answered, 'answer', 'answers')} ${when} · <b>${correct}</b> correct</p>
        </div>`;

    return `
      <section class="side-card" aria-labelledby="side-practice-h">
        <h2 class="side-eyebrow" id="side-practice-h"><span aria-hidden="true">⭐</span> Your practice</h2>
        <div class="seg" role="tablist" aria-label="Period">
          <button type="button" role="tab" id="segtab-today" aria-controls="seg-today" aria-selected="true">Today</button>
          <button type="button" role="tab" id="segtab-week" aria-controls="seg-week" aria-selected="false" tabindex="-1">Week</button>
          <button type="button" role="tab" id="segtab-all" aria-controls="seg-all" aria-selected="false" tabindex="-1">All time</button>
        </div>
        ${panel('today', 'today', today.answered, today.correct, false)}
        ${panel('week', 'in the last 7 days', week.answered, week.correct, true)}
        ${panel('all', 'in total', m.total_attempts, totalCorrect, true)}
      </section>

      <section class="side-card" aria-labelledby="side-overview-h">
        <h2 class="side-eyebrow" id="side-overview-h">Overview</h2>
        <div class="overview">
          <div><b>${m.active_days}</b><span>Study days</span></div>
          <div><b>${m.items_attempted}</b><span>Items tried</span></div>
          <div><b>${acc}</b><span>Accuracy</span></div>
        </div>
      </section>
    `;
  },

  /** Nút Today / Week / All time: bấm, hoặc mũi tên trái/phải khi đang focus. */
  bindSidebar(root) {
    const tabs = [...root.querySelectorAll('.seg [role="tab"]')];
    const select = (tab) => {
      for (const t of tabs) {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panelEl = root.querySelector('#' + t.getAttribute('aria-controls'));
        if (panelEl) panelEl.hidden = !on;
      }
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const step = e.key === 'ArrowRight' ? 1 : tabs.length - 1;
        const nextTab = tabs[(i + step) % tabs.length];
        select(nextTab);
        nextTab.focus();
      });
    });
  },

  /**
   * Cổng nhập mã định danh học sinh (§7).
   */
  renderAuthGate({ module, unit, tab }) {
    if (authGateRendered) return;
    authGateRendered = true;

    const main = document.getElementById('main');
    if (!main) return;

    // Bố cục hai cột: cột trái bảng hiệu, cột phải ô nhập mã.
    // KHÔNG đổi sang email/mật khẩu: trang tĩnh, không có máy chủ xác thực, và
    // mục 3-4 buộc danh tính phải là mã giả danh trên phiếu giấy.
    document.body.classList.add('auth-screen');

    main.innerHTML = `
      <div class="auth-split">

        <section class="auth-hero">
          <span class="auth-wm" aria-hidden="true">10</span>
          <div class="auth-brand">
            <span class="auth-mark"><svg viewBox="0 0 32 32" width="100%" height="100%" aria-hidden="true"><rect width="32" height="32" rx="6" fill="#283567"/><text x="16" y="22" font-size="18" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle" fill="#FBFAF7">E</text><circle cx="24" cy="8" r="3" fill="#8A6A1C"/></svg></span>
            <span class="auth-brand-txt">
              <strong>English Insiders Learning Portal</strong>
              <small>English 10 — National Curriculum 2018</small>
            </span>
          </div>

          <!-- Mục 6: nguyên văn, ngay dưới tên dự án, không rút gọn, không ẩn. -->
          <p class="auth-ai" lang="en">
            🤖 All study materials are generated by AI and may contain inaccuracies.
            Please verify critical information independently.
          </p>

          <div class="auth-hero-main">
            <h1 class="auth-h1">Welcome back!<br>Let’s keep learning.</h1>
            <ul class="auth-feats">
              <li><span class="auth-fi" aria-hidden="true">🔥</span>
                <span>Keep your daily streak, XP and level</span></li>
              <li><span class="auth-fi" aria-hidden="true">📚</span>
                <span>Vocabulary · grammar · listening · reading · writing, National Curriculum 2018</span></li>
              <li><span class="auth-fi" aria-hidden="true">🤖</span>
                <span>AI Error Log — practise spotting what AI got wrong, and saying so</span></li>
            </ul>
          </div>
        </section>

        <section class="auth-panel">
          <div class="auth-card">
            <div class="auth-brand auth-brand--sm">
              <span class="auth-mark"><svg viewBox="0 0 32 32" width="100%" height="100%" aria-hidden="true"><rect width="32" height="32" rx="6" fill="#283567"/><text x="16" y="22" font-size="18" font-family="system-ui, sans-serif" font-weight="bold" text-anchor="middle" fill="#FBFAF7">E</text><circle cx="24" cy="8" r="3" fill="#8A6A1C"/></svg></span>
              <span class="auth-brand-txt">
                <strong>English Insiders</strong>
                <small>Learning Portal</small>
              </span>
            </div>

            <h2 class="auth-h2">Sign in</h2>
            <p class="auth-sub">Enter the code on the slip you were given to carry on learning and keep your progress.</p>

            <form id="auth-form" onsubmit="return false;">
              <div class="auth-row">
                <label class="auth-label" for="auth-code-input">Student code</label>
                <span class="auth-lost">Lost your slip? Ask your teacher.</span>
              </div>
              <input
                type="text"
                id="auth-code-input"
                class="auth-input"
                placeholder="NK1009-07"
                inputmode="text"
                autocapitalize="characters"
                autocomplete="off"
                spellcheck="false"
                required
              />
              <div id="auth-error-msg" class="auth-err" style="display:none;"></div>

              <p class="auth-hint">
                Format: <strong>NK</strong> + <strong>class</strong> + hyphen +
                your <strong>register number</strong>.
              </p>

              <button type="submit" id="auth-submit-btn" class="btn btn-wide" disabled>Sign in →</button>
            </form>

            <p class="auth-note">
              This code is not your name. Your teacher uses it only to follow your own
              study progress.<br>
              <em>This device may forget the code if it goes unused for a long time, so keep
              your slip.</em>
            </p>
          </div>
        </section>

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
      btn.textContent = 'Checking…';

      const res = await Spine.signIn(code);
      if (res.ok) {
        location.reload();
      } else {
        btn.disabled = false;
        btn.textContent = 'Sign in';
        errMsg.textContent = res.error || 'That code is not valid. Please check your slip.';
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

  empty(text, href = '/practice/', label = 'Back to Practice →') {
    return `
      <div class="empty-state">
        <p>${text}</p>
        <a class="btn ghost" href="${href}">${label}</a>
      </div>
    `;
  },
};
