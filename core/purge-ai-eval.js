// core/purge-ai-eval.js — dọn một lần dữ liệu Xưởng AI có trước bản sửa cách chấm.
//
// VÌ SAO CÓ TỆP NÀY
// Bản cũ chấm Xưởng AI bằng `chosen === error.span`. Ngân hàng viết `span` theo
// hai kiểu, nên 14/42 item có lỗi không đời nào trả lời đúng được, và tỉ lệ phát
// hiện của hạng mục 7 học kỳ 2 bị ép về 0%. Mọi câu trả lời thu trước bản sửa
// đều mang lỗi đo đó — trộn chung với dữ liệu sau khi sửa là hỏng phân tích.
//
// ENDPOINT đang rỗng nên chưa có dòng nào rời khỏi máy học sinh: dữ liệu cũ còn
// nằm nguyên trong hàng đợi từng máy. Nếu sau này cắm endpoint vào mà không dọn,
// đúng những dòng hỏng ấy sẽ chảy thẳng vào Sheet cùng dữ liệu mới.
//
// PHẠM VI — cố ý hẹp:
//   xoá  · sự kiện có module === 'ai_forge' trong hàng đợi
//          (ai_eval_open · ai_eval_answer · ai_eval_bug)
//        · mảng bug_reports trong trạng thái
//   giữ  · XP, vàng, cấp độ, streak, ngày hoạt động, units, items, quests
//
// Giữ được vì Xưởng AI không hề chạm vào những thứ đó: aiEvalOpen và
// aiEvalAnswer chỉ gọi Log.event, XP chỉ cộng ở đường Luyện tập
// (answerItem, completeQuest). Chỗ duy nhất nó ghi vào trạng thái bền là
// bug_reports, qua aiEvalBug.
//
// Chạy đúng MỘT lần mỗi máy, khoá bằng cờ dưới đây. Xong đợt thu dữ liệu thì
// xoá cả tệp này và lời gọi trong spine.js — đừng để tích thành rác.

import { readJSON, writeJSON } from './util.js';

const FLAG  = 'dt_purge_aieval_v1';
const QKEY  = 'dt_queue_v1';
const SKEY  = 'dt_state_v1';

/**
 * @returns {{ done: boolean, events?: number, letters?: number }}
 *   done=false nghĩa là đã dọn từ trước, hoặc máy không cho ghi.
 */
export function purgeAiEvalOnce() {
  try {
    if (localStorage.getItem(FLAG)) return { done: false };

    // Chỉ đóng cờ khi MỌI lượt ghi đều xong. localStorage đầy thì writeJSON
    // trả false — đóng cờ lúc đó là máy này vĩnh viễn không dọn lại nữa.
    let ok = true;

    let events = 0;
    const queue = readJSON(QKEY, null);
    if (Array.isArray(queue)) {
      const kept = queue.filter((row) => row && row.module !== 'ai_forge');
      events = queue.length - kept.length;
      if (events > 0) ok = writeJSON(QKEY, kept) && ok;
    }

    let letters = 0;
    const state = readJSON(SKEY, null);
    if (state && Array.isArray(state.bug_reports) && state.bug_reports.length) {
      letters = state.bug_reports.length;
      state.bug_reports = [];
      ok = writeJSON(SKEY, state) && ok;
    }

    if (!ok) return { done: false };
    localStorage.setItem(FLAG, new Date().toISOString());
    return { done: true, events, letters };
  } catch (_) {
    // Máy chặn lưu trữ, hoặc dữ liệu hỏng. Không được để việc dọn làm sập
    // buổi học — bỏ qua, lần mở sau thử lại.
    return { done: false };
  }
}
