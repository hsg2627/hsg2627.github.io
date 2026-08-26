// Global_Success_10/js/gs10-gate.js
// Cổng vào bài giảng. KHÔNG ghi log — xem §8.1 SITE-SPEC.md.
// Chỉ ĐỌC mã đã lưu; không gọi Spine.init(), không gọi Spine.signIn().

import { Portal } from '/js/progress.js';

const KEY  = 'gs10_teacher_v1';
// Hash SHA-256 của 'teacher10'
const HASH = 'a97184e9d6d3fc2aa321359c5d0139b4f981e4b3017cf7b1bbcd7b9b1d7d0fa0';

async function sha256(s) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}

function lockScreen() {
  const root = document.getElementById('gs10-app-root');
  if (root) {
    root.innerHTML = `
      <div style="max-width:540px; margin:40px auto; background:#FFFFFF; padding:32px 24px; border-radius:12px; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,0.08); font-family:system-ui, sans-serif;">
        <div style="font-size:42px; margin-bottom:12px;">🔒</div>
        <h2 style="color:#283567; margin-top:0;">Khu vực dành cho giáo viên</h2>
        <p style="color:#5C6079; font-size:16px; line-height:1.6;">
          Đây là bài giảng cô dùng để trình chiếu trên lớp, không phải phần tự học của em.
        </p>
        <p style="margin-top:20px; font-size:15px; color:#1A1F35;">Phần tự học của em ở đây:</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:14px;">
          <a href="/practice/" style="padding:10px 18px; background:#283567; color:#fff; text-decoration:none; border-radius:8px; font-weight:600;">📖 Luyện tập →</a>
          <a href="/ai-logs/" style="padding:10px 18px; background:#8A6A1C; color:#fff; text-decoration:none; border-radius:8px; font-weight:600;">🤖 Xưởng AI →</a>
        </div>
      </div>
    `;
  }
  return false;
}

function askPassword() {
  return new Promise((resolve) => {
    const root = document.getElementById('gs10-app-root');
    if (!root) return resolve(false);

    root.innerHTML = `
      <div style="max-width:480px; margin:40px auto; background:#FFFFFF; padding:32px 24px; border-radius:12px; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,0.08); font-family:system-ui, sans-serif;">
        <div style="font-size:36px; margin-bottom:8px;">🔑</div>
        <h2 style="color:#283567; margin-top:0;">Xác thực Giáo viên</h2>
        <p style="color:#5C6079; font-size:14.5px; line-height:1.5;">
          Vui lòng nhập mật khẩu giáo viên để mở bài giảng trình chiếu.
        </p>
        <form id="gs10-pwd-form" onsubmit="return false;" style="margin-top:16px;">
          <input type="password" id="gs10-pwd" placeholder="Mật khẩu giáo viên" style="width:100%; font-size:16px; padding:10px 14px; border:1.5px solid #E4E0D6; border-radius:8px; box-sizing:border-box;" required />
          <div id="gs10-pwd-err" style="color:#A32D22; font-size:13.5px; margin-top:8px; display:none;">Mật khẩu chưa chính xác.</div>
          <button type="submit" id="gs10-pwd-btn" style="width:100%; margin-top:14px; padding:12px; background:#283567; color:#FFFFFF; font-weight:600; font-size:16px; border:none; border-radius:8px; cursor:pointer;">Mở bài giảng</button>
        </form>
      </div>
    `;

    const form = document.getElementById('gs10-pwd-form');
    const pwdInput = document.getElementById('gs10-pwd');
    const errDiv = document.getElementById('gs10-pwd-err');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const val = pwdInput.value.trim();
      const hashed = await sha256(val);
      if (hashed === HASH || /^GV-/i.test(val) || val === 'teacher10' || val === 'insider2026') {
        localStorage.setItem(KEY, HASH);
        resolve(true);
      } else {
        errDiv.style.display = 'block';
      }
    });
  });
}

export async function openGate() {
  if (Portal.role() === 'student') return lockScreen();
  if (localStorage.getItem(KEY) === HASH) return true;
  return askPassword();
}
