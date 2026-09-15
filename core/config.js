// core/config.js — mọi hằng số tinh chỉnh nằm ở đây, không rải rác trong mã.

export const CONFIG = {
  // ---- Nhận dạng phiên bản: ghi vào MỌI dòng log ----
  APP_VERSION: 'v0.1.0',
  CONTENT_VERSION: 'c1.1.0',
  SCHEMA_VERSION: 1,

  // ---- Điểm nhận dữ liệu (dán URL Apps Script sau khi Deploy) ----
  // Ví dụ: 'https://script.google.com/macros/s/AKfycb.../exec'
  ENDPOINT: '',

  // ---- Gửi theo lô ----
  FLUSH_EVERY_MS: 20000,   // cứ 20 giây gửi một lần
  FLUSH_AT_COUNT: 15,      // hoặc khi đủ 15 sự kiện
  QUEUE_MAX: 2000,         // trần hàng đợi, tránh đầy localStorage

  // ---- Thử lại khi lỗi mạng ----
  RETRY_BASE_MS: 5000,
  RETRY_MAX_MS: 300000,    // tối đa 5 phút giữa hai lần thử

  // ---- Phiên học ----
  SESSION_IDLE_MS: 1800000, // 30 phút không thao tác = hết phiên

  // ---- Trường và lớp nghiên cứu ----
  SCHOOLS: { NK: 'Nguyễn Khuyến' },
  CLASSES: ['1009', '1010'],

  // ---- Mã định danh giả: NK + khối 10-12 + lớp 2 số + '-' + số thứ tự 2 chữ số ----
  ID_PATTERN: /^(NK)(1[0-2])(\d{2})-(\d{2})$/i,
  ID_EXAMPLE: 'NK1009-07',

  // ---- Học kỳ hiện tại (DATA-DESIGN §5) ----
  // Nhiệm vụ hằng ngày chỉ giao bài của học kỳ này. SANG HỌC KỲ 2 PHẢI ĐỔI THÀNH 'HK2'.
  CURRENT_TERM: 'HK1',

  // Bài Ngữ pháp theo học kỳ cho nhiệm vụ hằng ngày. Phải khớp trường `semester` của
  // từng module trong content/manifest.json — đổi manifest thì đổi luôn ở đây.
  // Xếp theo thứ tự level trong content/knowledge-map.json; Articles (g14) đứng cuối.
  QUEST_POOL: {
    HK1: ['g15', 'g16', 'g08', 'g02', 'g03', 'g04', 'g05', 'g01', 'g06', 'g14'],
    HK2: ['g07', 'g13', 'g09', 'g12', 'g10', 'g11'],
  },
};

// Luật trò chơi gom một chỗ để chỉnh mà không phải sửa logic.
export const RULES = {
  XP_CORRECT: 10,
  XP_WRONG: 2,            // vẫn thưởng nhẹ: phạt 0 điểm làm HS bỏ giữa chừng
  XP_ITEM_FIRST_TRY: 5,   // thưởng thêm nếu đúng ngay lần đầu
  GOLD_PER_QUEST: 20,
  QUEST_TARGET: 5,        // nhiệm vụ hôm nay: số câu KHÁC NHAU của bài được giao
  STREAK_BONUS_EVERY: 5,  // cứ 5 câu đúng liên tiếp thưởng thêm
  STREAK_BONUS_XP: 15,
  // Ngưỡng XP để lên cấp: cấp n cần LEVELS[n-1] XP tích luỹ.
  LEVELS: [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200, 4000],
};

// Danh sách event_type hợp lệ. Ghi sai tên là mất dữ liệu lúc phân tích,
// nên logger sẽ chặn nếu tên không nằm trong danh sách này.
export const EVENT_TYPES = [
  'session_start', 'session_end',
  'module_open',
  'item_view', 'item_answer',
  'quest_accept', 'quest_complete',
  'shop_purchase', 'level_up',
  'ai_eval_open', 'ai_eval_answer', 'ai_eval_bug',
  'artifact_submit',
  'error_shown', 'help_open',
  'data_export', 'data_delete',
  'queue_dropped',
];
