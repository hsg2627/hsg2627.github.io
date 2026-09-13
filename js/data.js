// js/data.js — DANH MỤC ĐIỀU HƯỚNG. Tuyệt đối không chứa câu hỏi,
// đáp án hay siêu dữ liệu chương trình. Học liệu nằm ở /content/*.json.

export const NAV = [
  { id: 'home',      ico: '🏠', label: 'Home',         href: '/' },
  { id: 'practice',  ico: '📖', label: 'Practice',     href: '/practice/' },
  { id: 'ai',        ico: '🤖', label: 'AI Error Log', href: '/ai-logs/' },
  { id: 'me',        ico: '👤', label: 'My Progress',  href: '/me/' },
];

export const HOME_CARDS = [
  {
    ico: '📖',
    title: 'Practice',
    desc: 'Grammar, vocabulary, listening, writing and practice tests.',
    href: '/practice/'
  },
  {
    ico: '🤖',
    title: 'AI Error Log',
    desc: 'Read a passage written by AI and find what is wrong. Not every passage has an error.',
    href: '/ai-logs/'
  },
];

export const PRACTICE_CARDS = [
  {
    id: 'grammar',
    ico: '📐',
    title: 'Grammar',
    desc: '14 grammar modules aligned to the 2018 national curriculum.',
    href: '/practice/grammar/'
  },
  {
    id: 'vocabulary',
    ico: '📚',
    title: 'Vocabulary',
    desc: '10 Grade 10 vocabulary topics aligned to the curriculum.',
    href: '/practice/vocabulary/'
  },
  {
    id: 'listening',
    ico: '🎧',
    title: 'Listening',
    desc: '5 term 2 listening exercises, each with a transcript to check against.',
    href: '/practice/listening/'
  },
  {
    id: 'writing',
    ico: '✍️',
    title: 'Writing',
    desc: '5 paragraph topics with model answers to assess your own writing against.',
    href: '/practice/writing/'
  },
  {
    id: 'exam',
    ico: '📝',
    title: 'Practice Tests',
    desc: 'Revision papers for the periodic tests, aligned to the Grade 10 standard.',
    href: '/practice/exam/'
  },
];
