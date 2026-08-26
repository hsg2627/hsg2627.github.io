// js/data.js — DANH MỤC ĐIỀU HƯỚNG. Tuyệt đối không chứa câu hỏi,
// đáp án hay siêu dữ liệu chương trình. Học liệu nằm ở /content/*.json.

export const NAV = [
  { id: 'home',      ico: '🏠', label: 'Trang chủ',    href: '/' },
  { id: 'practice',  ico: '📖', label: 'Luyện tập',    href: '/practice/' },
  { id: 'ai',        ico: '🤖', label: 'Xưởng AI',     href: '/ai-logs/' },
  { id: 'me',        ico: '👤', label: 'Của tôi',      href: '/me/' },
];

export const HOME_CARDS = [
  {
    ico: '📖',
    title: 'Luyện tập',
    desc: 'Ngữ pháp, từ vựng, nghe, viết và đề luyện.',
    href: '/practice/'
  },
  {
    ico: '🤖',
    title: 'Xưởng AI',
    desc: 'Đọc đoạn văn do AI viết và tìm chỗ sai. Không phải bài nào cũng có lỗi.',
    href: '/ai-logs/'
  },
];

export const PRACTICE_CARDS = [
  {
    id: 'grammar',
    ico: '📐',
    title: 'Ngữ pháp',
    desc: '14 module ngữ pháp chuẩn GDPT 2018.',
    href: '/practice/grammar/'
  },
  {
    id: 'vocabulary',
    ico: '📚',
    title: 'Từ vựng',
    desc: '10 chủ đề từ vựng lớp 10 bám sát chương trình.',
    href: '/practice/vocabulary/'
  },
  {
    id: 'listening',
    ico: '🎧',
    title: 'Nghe',
    desc: '5 bài luyện nghe HK2 kèm lời thoại đối chiếu.',
    href: '/practice/listening/'
  },
  {
    id: 'writing',
    ico: '✍️',
    title: 'Viết',
    desc: '5 chủ đề viết đoạn văn và tự đánh giá với bài mẫu.',
    href: '/practice/writing/'
  },
  {
    id: 'exam',
    ico: '📝',
    title: 'Đề luyện',
    desc: 'Đề ôn tập kiểm tra định kỳ bám chuẩn lớp 10.',
    href: '/practice/exam/'
  },
];
