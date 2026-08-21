/**
 * server/Code.gs — dán toàn bộ tệp này vào script.google.com
 *
 * Nhiệm vụ: nhận lô sự kiện từ web, khử trùng lặp, ghi xuống Google Sheet.
 *
 * TRIỂN KHAI (làm đúng thứ tự):
 *  1. Tạo Google Sheet mới, lấy ID trong URL:
 *     docs.google.com/spreadsheets/d/<<ID Ở ĐÂY>>/edit
 *  2. Dán ID vào SHEET_ID bên dưới, đổi ADMIN_TOKEN thành chuỗi bí mật của chị.
 *  3. Chạy hàm setup() một lần (tự tạo hai sheet và dòng tiêu đề).
 *  4. Deploy → New deployment → Web app
 *       Execute as:      Me
 *       Who has access:  Anyone            ← bắt buộc, nếu không web không gửi được
 *  5. Chép URL /exec, dán vào CONFIG.ENDPOINT trong core/config.js
 *
 * LƯU Ý: mỗi lần sửa mã phải Deploy lại (New version) thì URL mới có hiệu lực.
 */

const SHEET_ID    = 'DAN_ID_GOOGLE_SHEET_VAO_DAY';
const ADMIN_TOKEN = 'doi-chuoi-nay-thanh-mat-khau-cua-rieng-chi';

const EVENTS_SHEET  = 'events';
const ROSTER_SHEET  = 'roster';
const SUMMARY_SHEET = 'summary';

/** Thứ tự cột — phải khớp với đối tượng row trong core/logger.js. */
const COLS = [
  'event_id', 'ts_server', 'ts_client',
  'pseudo_id', 'class_id', 'session_id',
  'event_type', 'module', 'unit', 'item_id',
  'response', 'correct', 'latency_ms', 'attempt_no',
  'xp_delta', 'gold_delta', 'streak_after',
  'device', 'app_version', 'schema_version', 'extra',
];

const VALID_EVENT_TYPES = {
  'session_start': 1, 'session_end': 1,
  'module_open': 1,
  'item_view': 1, 'item_answer': 1,
  'quest_accept': 1, 'quest_complete': 1,
  'shop_purchase': 1, 'level_up': 1,
  'ai_eval_open': 1, 'ai_eval_answer': 1,
  'artifact_submit': 1,
  'error_shown': 1, 'help_open': 1,
  'data_export': 1, 'data_delete': 1,
  'queue_dropped': 1,
};

// ─────────────────────────────────────────────────────────────────────────
// Cài đặt một lần
// ─────────────────────────────────────────────────────────────────────────

function setup() {
  const ss = SpreadsheetApp.openById(SHEET_ID);

  let ev = ss.getSheetByName(EVENTS_SHEET);
  if (!ev) ev = ss.insertSheet(EVENTS_SHEET);
  if (ev.getLastRow() === 0) {
    ev.appendRow(COLS);
    ev.setFrozenRows(1);
  }

  let rs = ss.getSheetByName(ROSTER_SHEET);
  if (!rs) rs = ss.insertSheet(ROSTER_SHEET);
  if (rs.getLastRow() === 0) {
    // KHÔNG bao giờ ghi tên thật vào đây. Bảng tra tên giữ ngoài hệ thống.
    rs.appendRow(['pseudo_id', 'class_id', 'consent_on_file', 'note']);
    rs.setFrozenRows(1);
  }

  let sum = ss.getSheetByName(SUMMARY_SHEET);
  if (!sum) sum = ss.insertSheet(SUMMARY_SHEET);
  if (sum.getLastRow() === 0) {
    sum.appendRow(['pseudo_id', 'class_id', 'events', 'sessions', 'active_days', 'last_seen', 'updated_at']);
    sum.setFrozenRows(1);
  }

  return 'Xong: đã tạo sheets events, roster và summary.';
}

// ─────────────────────────────────────────────────────────────────────────
// Nhận dữ liệu
// ─────────────────────────────────────────────────────────────────────────

function getRosterSet(ss) {
  const rs = ss.getSheetByName(ROSTER_SHEET);
  if (!rs || rs.getLastRow() < 2) return null;
  const vals = rs.getRange(2, 1, rs.getLastRow() - 1, 1).getValues();
  const set = {};
  for (var i = 0; i < vals.length; i++) {
    const id = String(vals[i][0] || '').trim().toUpperCase();
    if (id) set[id] = true;
  }
  return set;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
  } catch (_) {
    return json({ ok: false, error: 'busy', accepted: [] });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'empty_body', accepted: [] });
    }

    const body = JSON.parse(e.postData.contents);
    const events = (body && body.events) || [];
    if (!events.length) return json({ ok: true, accepted: [] });

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const rosterSet = getRosterSet(ss);

    const cache = CacheService.getScriptCache();
    const ids = events.map(function (ev) { return 'e_' + ev.event_id; });
    const seen = cache.getAll(ids);   // đã ghi trong 6 giờ gần đây?

    const ts = new Date().toISOString();
    const rows = [];
    const accepted = [];
    const toMark = {};

    for (var i = 0; i < events.length; i++) {
      const ev = events[i];
      if (!ev || !ev.event_id) continue;

      // Khử trùng lặp: web gửi lại khi không chắc đã tới nơi, ta bỏ bản thứ hai.
      if (seen['e_' + ev.event_id]) {
        accepted.push(ev.event_id);   // báo web xoá khỏi hàng đợi
        continue;
      }

      // Đánh dấu cảnh báo nếu mã không nằm trong roster hoặc event_type lạ (ĐÁNH DẤU, KHÔNG CHẶN)
      var extraObj = {};
      try {
        extraObj = typeof ev.extra === 'object' && ev.extra ? ev.extra : (ev.extra ? JSON.parse(ev.extra) : {});
      } catch (_) {}

      var flags = [];
      if (rosterSet && ev.pseudo_id && !rosterSet[String(ev.pseudo_id).trim().toUpperCase()]) {
        flags.push('unregistered_roster');
      }
      if (ev.event_type && !VALID_EVENT_TYPES[ev.event_type]) {
        flags.push('unlisted_event_type');
      }
      if (flags.length) {
        extraObj._audit_flags = flags.join(';');
        ev.extra = JSON.stringify(extraObj);
      }

      ev.ts_server = ts;
      rows.push(COLS.map(function (c) {
        return ev[c] === undefined || ev[c] === null ? '' : ev[c];
      }));
      accepted.push(ev.event_id);
      toMark['e_' + ev.event_id] = '1';
    }

    if (rows.length) {
      const sh = ss.getSheetByName(EVENTS_SHEET);
      sh.getRange(sh.getLastRow() + 1, 1, rows.length, COLS.length).setValues(rows);
    }
    if (Object.keys(toMark).length) {
      cache.putAll(toMark, 21600);   // nhớ 6 tiếng, đủ phủ mọi lần thử lại
    }

    return json({ ok: true, accepted: accepted, written: rows.length });
  } catch (err) {
    return json({ ok: false, error: String(err), accepted: [] });
  } finally {
    lock.releaseLock();
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Kiểm tra sức khoẻ và đối soát hằng tuần
// ─────────────────────────────────────────────────────────────────────────

function doGet(e) {
  const p = (e && e.parameter) || {};

  if (!p.token) return json({ ok: true, service: 'doloc-spine', time: new Date().toISOString() });
  if (p.token !== ADMIN_TOKEN) return json({ ok: false, error: 'bad_token' });

  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sh = ss.getSheetByName(EVENTS_SHEET);
  const last = sh.getLastRow();
  if (last < 2) return json({ ok: true, rows: 0, students: 0, by_student: {}, inactive_roster: [], unknown_codes: [] });

  const values = sh.getRange(2, 1, last - 1, COLS.length).getValues();
  const iPseudo = COLS.indexOf('pseudo_id');
  const iSess = COLS.indexOf('session_id');
  const iTs = COLS.indexOf('ts_server');

  const rosterSet = getRosterSet(ss) || {};
  const byStudent = {};

  for (var i = 0; i < values.length; i++) {
    const id = String(values[i][iPseudo] || '').trim().toUpperCase();
    if (!id) continue;
    if (!byStudent[id]) byStudent[id] = { events: 0, sessions: {}, days: {}, last_seen: '' };
    const r = byStudent[id];
    r.events++;
    r.sessions[values[i][iSess]] = 1;
    const ts = String(values[i][iTs] || '');
    r.days[ts.slice(0, 10)] = 1;
    if (ts > r.last_seen) r.last_seen = ts;
  }

  const out = {};
  const unknownCodes = [];
  Object.keys(byStudent).forEach(function (id) {
    const r = byStudent[id];
    out[id] = {
      events: r.events,
      sessions: Object.keys(r.sessions).length,
      active_days: Object.keys(r.days).length,
      last_seen: r.last_seen,
    };
    if (Object.keys(rosterSet).length && !rosterSet[id]) {
      unknownCodes.push(id);
    }
  });

  const inactiveRoster = [];
  Object.keys(rosterSet).forEach(function (id) {
    if (!byStudent[id]) inactiveRoster.push(id);
  });

  return json({
    ok: true,
    rows: values.length,
    students: Object.keys(out).length,
    by_student: out,
    inactive_roster: inactiveRoster,
    unknown_codes: unknownCodes,
  });
}

function buildSummary() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const evSheet = ss.getSheetByName(EVENTS_SHEET);
  const sumSheet = ss.getSheetByName(SUMMARY_SHEET);
  if (!evSheet || !sumSheet || evSheet.getLastRow() < 2) return;

  const values = evSheet.getRange(2, 1, evSheet.getLastRow() - 1, COLS.length).getValues();
  const iPseudo = COLS.indexOf('pseudo_id');
  const iClass = COLS.indexOf('class_id');
  const iSess = COLS.indexOf('session_id');
  const iTs = COLS.indexOf('ts_server');

  const stats = {};
  for (var i = 0; i < values.length; i++) {
    const id = String(values[i][iPseudo] || '').trim().toUpperCase();
    if (!id) continue;
    if (!stats[id]) {
      stats[id] = {
        class_id: values[i][iClass] || '',
        events: 0,
        sessions: {},
        days: {},
        last_seen: '',
      };
    }
    const r = stats[id];
    r.events++;
    r.sessions[values[i][iSess]] = 1;
    const ts = String(values[i][iTs] || '');
    r.days[ts.slice(0, 10)] = 1;
    if (ts > r.last_seen) r.last_seen = ts;
  }

  const now = new Date().toISOString();
  const rows = Object.keys(stats).map(function (id) {
    const r = stats[id];
    return [
      id,
      r.class_id,
      r.events,
      Object.keys(r.sessions).length,
      Object.keys(r.days).length,
      r.last_seen,
      now,
    ];
  });

  if (rows.length) {
    sumSheet.getRange(2, 1, Math.max(sumSheet.getLastRow() - 1, 1), 7).clearContent();
    sumSheet.getRange(2, 1, rows.length, 7).setValues(rows);
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
