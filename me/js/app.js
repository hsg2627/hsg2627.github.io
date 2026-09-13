// me/js/app.js — Màn hình "Dữ liệu của tôi"
import { Portal } from '/js/progress.js';

const BUG_LABEL = {
  key:  'Wrong answer key',
  text: 'Broken or odd English',
  app:  'Page not working',
};

function esc(t) {
  return String(t ?? '').replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

const boot = await Portal.boot({ module: 'me', tab: 'me' });

if (boot.ok) {
  renderMe();
}

function renderMe() {
  const main = document.getElementById('main');
  if (!main) return;

  const spine = Portal.spine;
  const metrics = spine.metrics;
  const state = spine.state;
  const pseudoId = spine.id || 'Not signed in';
  const pending = spine.pending;
  const bugs = spine.myBugReports();

  // Gom thành luồng theo từng bài, trong luồng thì cũ trước mới sau — đọc như
  // một cuộc trò chuyện chứ không phải một chồng phiếu rời.
  const threads = [];
  const byItem = {};
  for (const b of bugs) {
    if (!byItem[b.item_id]) {
      byItem[b.item_id] = {
        itemId: b.item_id, unit: b.unit || '', itemCorrect: !!b.item_correct, msgs: [],
      };
      threads.push(byItem[b.item_id]);
    }
    byItem[b.item_id].msgs.unshift(b);
  }

  const totalItems = metrics.items_answered || 0;
  const accuracyPct = Math.round((metrics.accuracy || 0) * 100);

  main.innerHTML = `
    <h1>👤 My Progress</h1>
    <p style="color:var(--muted); margin-top:-8px;">
      Your student code: <strong style="color:var(--navy); font-size:1.05rem;">${pseudoId}</strong>
    </p>

    <!-- Block 1: study progress -->
    <section class="panel">
      <h2 style="margin-top:0;">📊 Study statistics</h2>
      <div class="metrics-grid">
        <div class="metric-box">
          <span class="metric-val">${state.level || 1}</span>
          <span class="metric-lbl">Level</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${state.xp || 0}</span>
          <span class="metric-lbl">Total XP</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${state.streak_max || 0}</span>
          <span class="metric-lbl">Best streak</span>
        </div>
      </div>
      <div class="metrics-grid" style="margin-top:8px;">
        <div class="metric-box">
          <span class="metric-val">${metrics.days_active || 1}</span>
          <span class="metric-lbl">Active days</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems}</span>
          <span class="metric-lbl">Items answered</span>
        </div>
        <div class="metric-box">
          <span class="metric-val">${totalItems > 0 ? accuracyPct + '%' : '--'}</span>
          <span class="metric-lbl">Accuracy</span>
        </div>
      </div>
    </section>

    <!-- Block 2: sync status -->
    <section class="panel">
      <h2 style="margin-top:0;">📡 Sync status</h2>
      <p style="font-size:15px; margin-bottom:12px;">
        Data rows waiting to be sent to the server: <strong id="pending-count" style="color:var(--navy); font-size:1.1rem;">${pending}</strong>
      </p>
      <div class="btn-row">
        <button id="btn-flush" class="btn" ${pending === 0 ? 'disabled' : ''}>
          Send to the server now
        </button>
      </div>
      <p style="font-size:12.5px; color:var(--muted); margin-top:8px;">
        Data is sent automatically when you are online. If you are about to switch off or change devices, tap this button to send it now.
      </p>
    </section>

    <!-- Block 3: bug-report inbox -->
    <section class="panel">
      <h2 style="margin-top:0;">📮 Your messages</h2>
      <p style="font-size:14.5px; color:var(--muted); margin:-4px 0 14px; line-height:1.5;">
        The errors you have found in the AI-written materials. However many messages you send,
        they <strong>do not affect your score</strong> — this is a tester’s job,
        not an appeal against a mark.
      </p>
      ${bugs.length === 0 ? `
        <p style="font-size:14.5px; color:var(--muted); margin:0;">
          You have not sent any messages yet. In the AI Error Log, if an answer looks wrong or a sentence
          of English sounds odd, tap <strong>💬 Message your teacher about this item</strong>
          at the end of the feedback.
        </p>
      ` : `
        <p style="font-size:14.5px; margin:0 0 14px;">
          You have sent <strong style="color:var(--navy);">${bugs.length}</strong> ${bugs.length === 1 ? 'message' : 'messages'}
          about <strong style="color:var(--navy);">${threads.length}</strong> ${threads.length === 1 ? 'item' : 'items'}.
        </p>
        ${threads.map(t => `
          <div class="thread">
            <div class="thread-head">
              <strong>${esc(t.itemId)}</strong>
              <span>${esc(t.unit)}${t.itemCorrect ? ' · you got this one right' : ''}</span>
            </div>
            ${t.msgs.map(b => `
              <div class="msg from-me">
                <span class="msg-tag">${esc(BUG_LABEL[b.bug_type] || 'Other')}</span>${esc(b.reason)}
                <span class="msg-meta">${new Date(b.at).toLocaleString('vi-VN', {
                  day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit',
                })} · ✓ recorded</span>
              </div>
            `).join('')}
          </div>
        `).join('')}
      `}
    </section>

    <!-- Block 4: privacy and your data -->
    <section class="panel">
      <h2 style="margin-top:0;">🔒 Your rights</h2>
      <p style="font-size:15px;">
        You have every right to download a copy of your progress or delete the study data stored on this device.
      </p>
      <div class="btn-row">
        <button id="btn-export" class="btn ghost">
          📥 Download my data (.json)
        </button>
        <button id="btn-delete" class="btn danger">
          🗑️ Delete my study data
        </button>
      </div>
      <p style="font-size:12px; color:var(--muted); margin-top:12px; line-height:1.45;">
        This button deletes your study progress and your code on this device. The anonymous statistics the site uses to know how many people visit cannot be deleted from here — ask your teacher if you want to know more.
      </p>
    </section>
  `;

  document.getElementById('btn-flush')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-flush');
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    const res = await spine.flush();
    Portal.renderHud();
    Portal.toast(res.sent > 0 ? `${res.sent} ${res.sent === 1 ? 'event' : 'events'} sent!` : 'Everything is already synced!');
    renderMe();
  });

  document.getElementById('btn-export')?.addEventListener('click', () => {
    spine.exportMyData();
    Portal.toast('Downloading your data file…');
  });

  document.getElementById('btn-delete')?.addEventListener('click', () => {
    const ok = confirm(
      'Are you sure you want to delete all your study data and your student code on this device?\n\n' +
      'Your progress on this device will be reset. You will need to enter the code from your slip again to carry on.'
    );
    if (ok) {
      spine.deleteMyData();
      location.href = '/';
    }
  });
}
