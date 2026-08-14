# 🎮 Monsterest Inn & Guild: Ứng Dụng Học Từ Vựng Gamification (108 Lexicode Words)

Tài liệu này cung cấp thiết kế kiến trúc toàn diện và mã nguồn đơn tệp (`index.html`) hoàn chỉnh để triển khai một Web App học từ vựng tiếng Anh theo cơ chế **Gamification** kết hợp Theme quán trọ quái vật ấm cúng từ tựa game indie **Monsterest** ([Steam Store Page](https://store.steampowered.com/app/2895410/Monsterest/)).

Toàn bộ **108 từ vựng và cụm từ nâng cao** từ tài liệu *LEXICODE - An insight into vocabulary* đã được tích hợp sẵn, phân chia thành 5 Cánh Cổng Thử Thách (Wings) với 3 chế độ chơi tương tác mượt mà trên trình duyệt.

---

## 🌟 1. Cơ Chế Gamification & Theme Monsterest

### 1.1 Cốt Truyện & Bối Cảnh (Lore)
Người chơi đóng vai **Chủ Quán Trọ Monsterest (Monster-friendly Innkeeper)**. Hằng ngày, những vị khách quái vật đáng yêu (*Sprout Sprite, Stone Golem, Shadow Familiar, Moonlit Kitsune, Elder Dragonling*) ghé thăm quán trọ. Để phục vụ phòng, nấu các món ăn hảo hạng và kết giao bằng hữu, người chơi cần vượt qua các thử thách từ vựng tiếng Anh.

### 1.2 Các Chỉ Số & Cơ Chế Phần Thưởng
* **🪙 Monsterest Gold:** Tích lũy khi trả lời đúng câu hỏi và thuần phục từ vựng để mở khóa trang trí phòng trọ.
* **💖 Friendship Hearts & EXP:** Điểm thân mật với quái vật giúp tăng Cấp Độ Quán Trọ (Stay Rating).
* **📜 Mastered Words (Đã Thuần Phục):** Theo dõi tiến độ ghi nhớ trên tổng số 108 từ vựng Lexicode.
* **🔥 Daily Streak:** Duy trì chuỗi ngày đăng nhập học liên tục.
* **💾 LocalStorage Engine:** Tự động lưu trữ mọi dữ liệu mà không cần Backend hay Database.

---

## ⚔️ 2. Các Chế Độ Luyện Tập (Gameplay Modes)

1. **📇 Sách Phép 3D Grimoire (3D Flashcard):**
   * Hiệu ứng lật thẻ 3D xoay mượt mà bằng CSS3 Transform.
   * Tích hợp **Web Speech API** phát âm tiếng Anh chuẩn bản ngữ.
   * Hiển thị đầy đủ phiên âm IPA, định nghĩa Anh - Việt, ví dụ ngữ cảnh và nút đánh dấu "Thuần Phục".
   * Hỗ trợ phím tắt: `Space` (Lật thẻ), `Mũi tên Trái / Phải` (Chuyển từ).

2. **⚔️ Đấu Trường Quái Vật (Monster Trial):**
   * Chế độ trắc nghiệm nghĩa từ 10 câu ngẫu nhiên.
   * Giao diện sàn đấu sinh động với thanh Máu (Độ hài lòng) của quái vật.
   * Bộ tạo âm thanh 8-bit Retro Synthesizer qua Web Audio API (không cần tải file MP3).
   * Phản hồi giải thích chi tiết ngay lập tức sau mỗi lượt chọn.

3. **🍲 Nhiệm Vụ Quán Trọ (Tavern Recipe Quest):**
   * Dạng bài tập hoàn thành câu chuẩn format thi cử (A, B, C, D) dựa trên các ví dụ thực tế trong Lexicode.
   * Thưởng EXP và Gold khi hoàn thành xuất sắc đơn đặt hàng của khách.

---

## 🗺️ 3. Phân Chia 5 Cánh Cổng Từ Vựng (Wings)

* **🍄 Wing 1: Đất Canh Tác & Nguồn Lực (Từ 1 - 23):** *inordinate, superfluous, copious, prodigious, colossal, barren, arable, intact, conviction, thwart, hinder, deter, hold back, compromise, swell, serendipity, ardent, avid, harbour, intangible, condition, of/to little avail.*
* **🛡️ Wing 2: Đội Vệ Binh & Tường Thành (Từ 24 - 45):** *remiss, prerogative, neglect, adversity, setback, infuse, vitality, unleash, nonchalant, attribute, credit, impute, inscrutable, cryptic, scrutinize, meticulous, remunerate, accede, avert, bulwark, defiance, appease.*
* **🔮 Wing 3: Mật Điển & Trực Giác Quán Trọ (Từ 46 - 68):** *analogous, infer, restraint, infringe, instill, problematic, restrained, paranoid, hunch, self-effacing, reticent, contain, fathom, discern, sabotage, squander, hasty, vandalism, monopolise, embezzle, impulse, impulsive, impulse buying.*
* **🦊 Wing 4: Rừng Hoang Dã & Cuộc Đi Săn (Từ 69 - 88):** *elusive, elude, kindle, arouse, industrious, reprehensible, pensive, debunk, epitomise, typify, portend, deadlock, standstill, perennial, curb, precedent, disguise, conceal, mask, analogy.*
* **👑 Wing 5: Yến Tiệc & Sự Thịnh Vượng (Từ 89 - 108):** *despise, relish, loath, greedy, hypocrisy, implicit, furnish, arm, manifest, premium, prosper, agitation, brevity, infest, broach, abhor, scorn, dismiss, uncanny, in its entirety.*

---

## 💻 4. Mã Nguồn Hoàn Chỉnh (`index.html`)

Bạn có thể lưu toàn bộ đoạn mã bên dưới thành file **`index.html`** để chạy trực tiếp trên máy tính hoặc xuất bản lên GitHub Pages:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monsterest Inn & Guild 🎮 English Vocab Mastery</title>
  <!-- Google Fonts: Pixel & Cozy Retro Typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800&family=Nunito:wght@400;600;700;800&family=VT323&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --bg-dark: #16121e;
      --bg-wood: #26191b;
      --panel-bg: #2d1f2d;
      --panel-card: #3a2839;
      --panel-border: #7c4d79;
      --accent-gold: #f5b041;
      --accent-amber: #e67e22;
      --accent-green: #2ecc71;
      --accent-red: #e74c3c;
      --accent-purple: #9b59b6;
      --accent-blue: #3498db;
      --text-main: #fdf5e6;
      --text-muted: #d0bcd5;
      --font-pixel: 'VT323', monospace;
      --font-title: 'Cinzel', serif;
      --font-body: 'Nunito', sans-serif;
      --border-pixel: 3px solid #100b14;
      --box-shadow-pixel: 4px 4px 0px #0b070e;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background: var(--bg-dark);
      background-image: 
        radial-gradient(circle at 50% 20%, rgba(124, 77, 121, 0.18) 0%, transparent 60%),
        linear-gradient(rgba(18, 14, 24, 0.95), rgba(18, 14, 24, 0.95));
      color: var(--text-main);
      font-family: var(--font-body);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      overflow-x: hidden;
    }

    /* Container */
    .app-container {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Header & Innkeeper Top Bar */
    header.inn-header {
      background: var(--panel-bg);
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 8px;
      padding: 18px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      position: relative;
    }

    .inn-brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .inn-logo {
      font-size: 2.5rem;
      line-height: 1;
      filter: drop-shadow(2px 2px 0px #000);
      animation: gentle-bob 3s ease-in-out infinite;
    }

    @keyframes gentle-bob {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    .inn-title h1 {
      font-family: var(--font-title);
      font-size: 1.5rem;
      color: var(--accent-gold);
      text-shadow: 2px 2px 0px #000;
      letter-spacing: 1px;
    }

    .inn-title p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    /* Stat Badges */
    .inn-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .stat-badge {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 6px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      font-weight: 700;
      box-shadow: 2px 2px 0px #000;
    }

    .stat-badge span.icon {
      font-size: 1.2rem;
    }

    .stat-badge span.val {
      color: var(--accent-gold);
      font-family: var(--font-pixel);
      font-size: 1.4rem;
    }

    /* Main Navigation & Sections */
    .view-section {
      display: none;
      animation: fadeIn 0.3s ease-in-out;
    }

    .view-section.active {
      display: block;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Section Headers */
    .section-title-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .section-title-bar h2 {
      font-family: var(--font-title);
      font-size: 1.25rem;
      color: var(--accent-gold);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .pixel-btn {
      background: var(--accent-amber);
      color: #fff;
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      font-family: var(--font-body);
      font-weight: 800;
      font-size: 0.9rem;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: transform 0.1s, filter 0.1s;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .pixel-btn:hover {
      filter: brightness(1.15);
      transform: translate(-1px, -1px);
    }

    .pixel-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px #000;
    }

    .pixel-btn.secondary {
      background: var(--panel-card);
      border-color: var(--panel-border);
      color: var(--text-main);
    }

    .pixel-btn.success {
      background: var(--accent-green);
    }

    .pixel-btn.purple {
      background: var(--accent-purple);
    }

    /* Wings Grid (Topic selection) */
    .wings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }

    .wing-card {
      background: var(--panel-bg);
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 8px;
      padding: 18px;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s;
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: relative;
    }

    .wing-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-gold);
    }

    .wing-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .wing-avatar {
      font-size: 2rem;
      background: var(--panel-card);
      padding: 8px 12px;
      border-radius: 8px;
      border: 2px solid var(--panel-border);
    }

    .wing-monster-tag {
      background: rgba(155, 89, 182, 0.25);
      border: 1px solid var(--accent-purple);
      color: #dcb0ed;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      font-weight: 700;
    }

    .wing-info h3 {
      font-family: var(--font-title);
      font-size: 1.1rem;
      color: var(--accent-gold);
      margin-bottom: 4px;
    }

    .wing-info p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    .wing-progress-bar {
      width: 100%;
      height: 10px;
      background: #110d17;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid var(--panel-border);
    }

    .wing-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-amber), var(--accent-gold));
      width: 0%;
      transition: width 0.4s ease;
    }

    .wing-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-weight: 700;
    }

    /* Mode Selection View */
    .mode-select-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 15px;
    }

    .mode-card {
      background: var(--panel-bg);
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 8px;
      padding: 22px 18px;
      cursor: pointer;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      transition: transform 0.2s, background 0.2s;
    }

    .mode-card:hover {
      transform: translateY(-4px);
      background: var(--panel-card);
      border-color: var(--accent-gold);
    }

    .mode-icon {
      font-size: 3rem;
      filter: drop-shadow(2px 2px 0px #000);
    }

    .mode-card h3 {
      font-family: var(--font-title);
      font-size: 1.15rem;
      color: var(--accent-gold);
    }

    .mode-card p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* 3D FLASHCARD CONTAINER */
    .flashcard-wrapper {
      perspective: 1200px;
      width: 100%;
      max-width: 580px;
      height: 380px;
      margin: 20px auto;
      cursor: pointer;
    }

    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
      border-radius: 12px;
      box-shadow: 0 12px 25px rgba(0,0,0,0.5);
    }

    .flashcard-inner.is-flipped {
      transform: rotateY(180deg);
    }

    .flashcard-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--panel-bg);
      background-image: radial-gradient(circle at 50% 50%, rgba(124, 77, 121, 0.2) 0%, transparent 80%);
    }

    .flashcard-back {
      transform: rotateY(180deg);
      background: #251627;
      border-color: var(--accent-gold);
    }

    .card-badge-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-tag {
      background: var(--panel-card);
      border: 1px solid var(--panel-border);
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent-gold);
    }

    .card-speaker-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      transition: transform 0.15s;
    }

    .card-speaker-btn:hover {
      transform: scale(1.2);
    }

    .card-center-content {
      text-align: center;
      margin: auto 0;
    }

    .card-word {
      font-family: var(--font-title);
      font-size: 2rem;
      color: #fff;
      margin-bottom: 6px;
      text-shadow: 2px 2px 0px #000;
    }

    .card-ipa {
      font-family: var(--font-pixel);
      font-size: 1.5rem;
      color: var(--accent-gold);
      letter-spacing: 1px;
    }

    .card-hint {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 12px;
      font-style: italic;
    }

    .card-meaning-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--accent-gold);
      margin-bottom: 8px;
    }

    .card-def-en {
      font-size: 0.9rem;
      color: #eee;
      line-height: 1.4;
      margin-bottom: 12px;
    }

    .card-example-box {
      background: rgba(0,0,0,0.3);
      border-left: 3px solid var(--accent-gold);
      padding: 8px 12px;
      border-radius: 0 6px 6px 0;
      font-size: 0.85rem;
      text-align: left;
    }

    .card-controls {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;
    }

    /* QUIZ & QUEST TRIAL VIEW */
    .quiz-card {
      background: var(--panel-bg);
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 8px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .quiz-monster-arena {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 8px;
      padding: 12px 18px;
    }

    .monster-status {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .monster-sprite {
      font-size: 2.2rem;
      animation: sprite-jump 1.5s infinite ease-in-out;
    }

    @keyframes sprite-jump {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    .hp-bar-container {
      width: 140px;
      height: 12px;
      background: #110c14;
      border-radius: 6px;
      border: 1px solid #7c4d79;
      overflow: hidden;
    }

    .hp-bar-fill {
      height: 100%;
      background: linear-gradient(90deg, #e74c3c, #2ecc71);
      width: 100%;
      transition: width 0.3s ease;
    }

    .quiz-question-box {
      text-align: center;
      padding: 15px 0;
    }

    .quiz-prompt {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .quiz-target-word {
      font-family: var(--font-title);
      font-size: 1.8rem;
      color: var(--accent-gold);
    }

    .quiz-sentence-box {
      font-size: 1.1rem;
      color: #fff;
      line-height: 1.5;
      font-weight: 600;
    }

    .quiz-options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    @media (min-width: 600px) {
      .quiz-options-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .option-btn {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      color: var(--text-main);
      padding: 14px 16px;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 700;
      text-align: left;
      cursor: pointer;
      transition: all 0.15s;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 2px 2px 0px #000;
    }

    .option-btn:hover:not(:disabled) {
      background: #4a3449;
      border-color: var(--accent-gold);
      transform: translate(-1px, -1px);
    }

    .option-btn.correct {
      background: rgba(46, 204, 113, 0.25) !important;
      border-color: var(--accent-green) !important;
      color: #2ecc71 !important;
    }

    .option-btn.wrong {
      background: rgba(231, 76, 60, 0.25) !important;
      border-color: var(--accent-red) !important;
      color: #e74c3c !important;
    }

    .explanation-panel {
      display: none;
      background: rgba(0,0,0,0.4);
      border: 2px solid var(--panel-border);
      border-radius: 8px;
      padding: 14px 18px;
      font-size: 0.9rem;
      line-height: 1.5;
      animation: fadeIn 0.2s;
    }

    /* VICTORY & SUMMARY MODAL */
    .summary-card {
      background: var(--panel-bg);
      border: var(--border-pixel);
      box-shadow: var(--box-shadow-pixel);
      border-radius: 12px;
      padding: 30px 20px;
      text-align: center;
      max-width: 500px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .victory-trophy {
      font-size: 4rem;
      animation: trophy-spin 1s ease;
    }

    @keyframes trophy-spin {
      0% { transform: scale(0.5) rotate(-20deg); }
      50% { transform: scale(1.2) rotate(10deg); }
      100% { transform: scale(1) rotate(0deg); }
    }

    .summary-score-grid {
      display: flex;
      gap: 15px;
      margin: 10px 0;
    }

    .summary-stat-box {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      padding: 12px 18px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .summary-stat-box .num {
      font-family: var(--font-pixel);
      font-size: 2rem;
      color: var(--accent-gold);
    }

    .summary-stat-box .lbl {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    /* Confetti Canvas */
    #confetti-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
      .flashcard-wrapper {
        height: 420px;
      }
      .inn-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>

  <canvas id="confetti-canvas"></canvas>

  <div class="app-container">
    
    <!-- TOP INNKEEPER HEADER -->
    <header class="inn-header">
      <div class="inn-brand">
        <div class="inn-logo">🏰</div>
        <div class="inn-title">
          <h1>Monsterest Inn & Guild</h1>
          <p>Làm chủ 108 từ vựng Anh ngữ chuẩn Lexicode qua thế giới trò chơi hóa</p>
        </div>
      </div>
      <div class="inn-stats">
        <div class="stat-badge" title="Monsterest Gold Coins">
          <span class="icon">🪙</span>
          <span class="val" id="stat-gold">0</span>
        </div>
        <div class="stat-badge" title="Friendship Hearts & EXP">
          <span class="icon">💖</span>
          <span class="val" id="stat-hearts">0</span>
        </div>
        <div class="stat-badge" title="Từ đã thuần phục / Mastered">
          <span class="icon">📜</span>
          <span class="val" id="stat-mastered">0/108</span>
        </div>
        <div class="stat-badge" title="Ngày học liên tiếp / Daily Streak">
          <span class="icon">🔥</span>
          <span class="val" id="stat-streak">1</span>
        </div>
      </div>
    </header>

    <!-- VIEW 1: HOME - WING / CHAPTER SELECTION -->
    <section id="view-home" class="view-section active">
      <div class="section-title-bar">
        <h2><span>🗺️</span> Chọn Cánh Cổng Thử Thách (Wings)</h2>
      </div>
      <div class="wings-grid" id="wings-container">
        <!-- Rendered by JS -->
      </div>
    </section>

    <!-- VIEW 2: MODE SELECTION -->
    <section id="view-mode-select" class="view-section">
      <div class="section-title-bar">
        <h2><span id="current-wing-icon">🏰</span> <span id="current-wing-title">Wing 1</span></h2>
        <button class="pixel-btn secondary" onclick="app.showHome()">⬅️ Đổi Cánh Cổng</button>
      </div>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">
        Hãy chọn hình thức tu luyện từ vựng cùng các vị khách Quái Vật đáng yêu tại quán trọ:
      </p>
      <div class="mode-select-grid">
        <div class="mode-card" onclick="app.startFlashcards()">
          <div class="mode-icon">📇</div>
          <h3>Sách Phép 3D Grimoire</h3>
          <p>Lật thẻ 3D trực quan, nghe giọng phát âm bản ngữ, tra phiên âm, định nghĩa và ví dụ ngữ cảnh.</p>
          <button class="pixel-btn" style="margin-top:auto;">Khám Phá Thẻ</button>
        </div>

        <div class="mode-card" onclick="app.startQuizMode()">
          <div class="mode-icon">⚔️</div>
          <h3>Đấu Trường Quái Vật (Trial)</h3>
          <p>Rèn luyện phản xạ nhanh bằng cách đánh bại quái vật qua 10 câu trắc nghiệm nghĩa từ chuẩn xác.</p>
          <button class="pixel-btn" style="margin-top:auto;">Vào Khiêu Chiến</button>
        </div>

        <div class="mode-card" onclick="app.startQuestMode()">
          <div class="mode-icon">🍲</div>
          <h3>Nhiệm Vụ Quán Trọ (Quest)</h3>
          <p>Hoàn thành câu tiếng Anh theo ngữ cảnh thực tế (A, B, C, D) để nấu món ăn hảo hạng đãi khách.</p>
          <button class="pixel-btn" style="margin-top:auto;">Nhận Nhiệm Vụ</button>
        </div>
      </div>
    </section>

    <!-- VIEW 3: 3D FLASHCARD -->
    <section id="view-flashcard" class="view-section">
      <div class="section-title-bar">
        <h2><span>📇</span> Sách Phép 3D (<span id="fc-index">1</span>/<span id="fc-total">20</span>)</h2>
        <button class="pixel-btn secondary" onclick="app.showModeSelect()">⬅️ Menu Chế Độ</button>
      </div>

      <div class="flashcard-wrapper" onclick="app.flipCard()">
        <div class="flashcard-inner" id="flashcard-card">
          <!-- Front Face -->
          <div class="flashcard-face flashcard-front">
            <div class="card-badge-row">
              <span class="card-tag" id="fc-type">adj</span>
              <button class="card-speaker-btn" onclick="event.stopPropagation(); app.speakCurrentWord();" title="Nghe phát âm">🔊</button>
            </div>
            <div class="card-center-content">
              <h2 class="card-word" id="fc-word">inordinate</h2>
              <div class="card-ipa" id="fc-ipa">/ɪnˈɔːrdɪnət/</div>
              <p class="card-hint">💡 Nhấp thẻ hoặc nhấn phím Space để xem giải nghĩa</p>
            </div>
            <div class="card-badge-row">
              <span style="font-size: 0.85rem; color: var(--text-muted);" id="fc-monster">🍄 Sprout Sprite</span>
              <span style="font-size: 0.85rem; color: var(--accent-gold);">Mặt Trước 🔄</span>
            </div>
          </div>
          <!-- Back Face -->
          <div class="flashcard-face flashcard-back">
            <div class="card-badge-row">
              <span class="card-tag" style="background: rgba(245,176,65,0.2); color: var(--accent-gold);">Nghĩa & Ngữ Cảnh</span>
              <button class="card-speaker-btn" onclick="event.stopPropagation(); app.speakCurrentWord();" title="Nghe phát âm">🔊</button>
            </div>
            <div class="card-center-content" style="text-align: left;">
              <div class="card-meaning-title" id="fc-meaning-vi">quá mức, thất thường</div>
              <div class="card-def-en" id="fc-def-en">far more than is usual or expected = excessive</div>
              <div class="card-example-box" id="fc-example">Parents tend to put inordinate pressure on their children.</div>
            </div>
            <div class="card-badge-row">
              <span style="font-size: 0.85rem; color: var(--text-muted);" id="fc-category-name">Wing 1</span>
              <span style="font-size: 0.85rem; color: var(--accent-gold);">🔄 Lật lại</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-controls">
        <button class="pixel-btn secondary" onclick="app.prevCard()">⬅️ Từ trước</button>
        <button class="pixel-btn success" id="btn-master-card" onclick="app.toggleMasterCurrent()">⭐ Thuần Phục (+15 🪙)</button>
        <button class="pixel-btn" onclick="app.nextCard()">Từ tiếp theo ➡️</button>
      </div>
    </section>

    <!-- VIEW 4: QUIZ TRIAL & QUEST BATTLE -->
    <section id="view-quiz" class="view-section">
      <div class="section-title-bar">
        <h2><span id="quiz-mode-icon">⚔️</span> <span id="quiz-mode-title">Đấu Trường Quái Vật</span></h2>
        <div style="font-family: var(--font-pixel); font-size: 1.4rem; color: var(--accent-gold);" id="quiz-progress-text">Câu 1/10</div>
      </div>

      <div class="quiz-card">
        <div class="quiz-monster-arena">
          <div class="monster-status">
            <div class="monster-sprite" id="quiz-monster-sprite">🦊</div>
            <div>
              <div style="font-weight: 800; font-size: 0.95rem; color: var(--accent-gold);" id="quiz-monster-name">Moonlit Kitsune</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Khách Trọ Cấp Thần Thoại</div>
            </div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 3px; text-align: right;">Độ Hài Lòng (HP)</div>
            <div class="hp-bar-container">
              <div class="hp-bar-fill" id="quiz-hp-bar"></div>
            </div>
          </div>
        </div>

        <div class="quiz-question-box">
          <p class="quiz-prompt" id="quiz-prompt-label">Hãy chọn định nghĩa / nghĩa tiếng Việt chính xác của từ sau:</p>
          <h2 class="quiz-target-word" id="quiz-question-main">inordinate</h2>
        </div>

        <div class="quiz-options-grid" id="quiz-options-container">
          <!-- Rendered 4 buttons by JS -->
        </div>

        <div class="explanation-panel" id="quiz-explanation">
          <div style="font-weight: 800; color: var(--accent-gold); margin-bottom: 4px;">📖 Phân Tích & Ví Dụ:</div>
          <div id="quiz-explanation-text">...</div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="pixel-btn" id="btn-quiz-next" style="display: none;" onclick="app.nextQuizQuestion()">Tiếp Tục ➡️</button>
        </div>
      </div>
    </section>

    <!-- VIEW 5: SUMMARY & REWARD MODAL -->
    <section id="view-summary" class="view-section">
      <div class="summary-card">
        <div class="victory-trophy">🏆</div>
        <h2 style="font-family: var(--font-title); color: var(--accent-gold); font-size: 1.6rem;">Nhiệm Vụ Hoàn Tất!</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;" id="summary-msg">
          Các vị khách quái vật vô cùng hài lòng với dịch vụ tại Monsterest Inn!
        </p>

        <div class="summary-score-grid">
          <div class="summary-stat-box">
            <span class="num" id="sum-correct">10/10</span>
            <span class="lbl">Chính xác</span>
          </div>
          <div class="summary-stat-box">
            <span class="num" id="sum-gold">+100</span>
            <span class="lbl">Vàng nhận được</span>
          </div>
          <div class="summary-stat-box">
            <span class="num" id="sum-hearts">+50</span>
            <span class="lbl">Trái tim kết bạn</span>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 10px;">
          <button class="pixel-btn" onclick="app.restartCurrentMode()">🔄 Chơi Lại</button>
          <button class="pixel-btn purple" onclick="app.showModeSelect()">📜 Đổi Chế Độ</button>
          <button class="pixel-btn secondary" onclick="app.showHome()">🏠 Sảnh Chính</button>
        </div>
      </div>
    </section>

  </div>

  <!-- SOUND SYNTHESIZER & SCRIPT ENGINE -->
  <script>
    // Embedded Complete 108 Vocabulary Dataset
    const RAW_VOCAB = [
  {
    "id": 1,
    "term": "inordinate",
    "clean_word": "inordinate",
    "type": "adj",
    "desc": "adj (amount/delay/length) far more than is usual or expected = excessive",
    "example": "Parents tent to put -- pressure on their children",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 2,
    "term": "superfluous",
    "clean_word": "superfluous",
    "type": "adj",
    "desc": "adj exceeding what is sufficient or required, excess",
    "example": "",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 3,
    "term": "copious",
    "clean_word": "copious",
    "type": "adj",
    "desc": "adj (amount/note/quantity) in large amounts = abundant",
    "example": "She supports her theory with -- evidence.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 4,
    "term": "prodigious",
    "clean_word": "prodigious",
    "type": "adj",
    "desc": "adj (achievement/memory/talent) very large or powerful and causing surprise; impressive = colossal, enormous",
    "example": "USBs can store -- amounts of information.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 5,
    "term": "colossal",
    "clean_word": "colossal",
    "type": "adj",
    "desc": "adj ( blunder = a stupid or careless mistake/mistake) extremely large",
    "example": "They have spent a -- amount of money on construction.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 6,
    "term": "barren",
    "clean_word": "barren",
    "type": "adj",
    "desc": "adj (of land or soil) not good enough for plants to grow on it, not creating or producing anything new = devoid of live, infertile >< fertile adj",
    "example": "a -- desert/landscape",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 7,
    "term": "arable",
    "clean_word": "arable",
    "type": "adj",
    "desc": "adj connected with growing crops such as wheat",
    "example": "-- farming/farms/crops/lands/fields",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 8,
    "term": "intact",
    "clean_word": "intact",
    "type": "adj",
    "desc": "adj complete and not damaged = undamaged",
    "example": "Most of the house remains -- even after two hundred years",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 9,
    "term": "conviction",
    "clean_word": "conviction",
    "type": "v",
    "desc": "- n a strong opinion or belief = faith",
    "example": "She has six previous -- for theft.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 10,
    "term": "thwart",
    "clean_word": "thwart",
    "type": "v",
    "desc": "v to prevent somebody from doing what they want to do = frustrate (ngăn cản ai đó thực hiện 1 kế hoạch)",
    "example": " Ex : She was -- in her attempt to take control of the party.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 11,
    "term": "hinder, hindrance (to sb/sth)",
    "clean_word": "hinder",
    "type": "n",
    "desc": "to make it difficult for sb to do something or for something to happen = hamper",
    "example": "An injury was -- him from playing his best.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 12,
    "term": "deter, deterrent (to sb/sth)",
    "clean_word": "deter",
    "type": "v",
    "desc": "v (somebody) (from something/from doing something) to make somebody decide not to do something or continue doing something, especially by making them understand the difficulties and unpleasant results of their actions",
    "example": "The high price of the service could -- people from seeking advice.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 13,
    "term": "hold back",
    "clean_word": "hold back",
    "type": "v",
    "desc": "to prevent the progress or development of somebody/something",
    "example": "Do you think that mixed-ability classes -- the better students?",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 14,
    "term": "compromise",
    "clean_word": "compromise",
    "type": "v",
    "desc": "v (I/T) to do something that is against your principles or does not reach standards that you have set",
    "example": "We would never -- the safety of our passengers",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 15,
    "term": "swell (up)",
    "clean_word": "swell",
    "type": "v",
    "desc": "v to increase or make something increase in number or size >< shrink",
    "example": "We are looking for more volunteers to -- the ranks (= increase the number of people in a group) of those already helping.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 16,
    "term": "serendipity",
    "clean_word": "serendipity",
    "type": "n",
    "desc": "n an accidental but fortunate discovery",
    "example": "",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 17,
    "term": "ardent",
    "clean_word": "ardent",
    "type": "adj",
    "desc": "adj [usually before noun] very enthusiastic and showing strong feelings about something/somebody = passionate",
    "example": "-- admirer/ supporter/fan/ defender",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 18,
    "term": "avid",
    "clean_word": "avid",
    "type": "adj",
    "desc": "adj [usually before noun] very enthusiastic about something (often a hobby)",
    "example": "She has taken an -- interest in the project (= she is extremely interested in it).",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 19,
    "term": "harbour",
    "clean_word": "harbour",
    "type": "v",
    "desc": "v to keep feelings or thoughts, especially negative ones, in your mind for a long time",
    "example": "Some animal -- diseases that could affect humans",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 20,
    "term": "intangible",
    "clean_word": "intangible",
    "type": "adj",
    "desc": "adj that exists but cannot be touched; difficult to describe, understand or measure",
    "example": " Ex : The old building had an -- air of sadness about it.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 21,
    "term": "condition",
    "clean_word": "condition",
    "type": "v",
    "desc": "v (us passive) to sth/to do sth: to train or influence a person or animal mentally so that they do or expect a particular thing without thinking about it",
    "example": "The rats had been -- to ring a bell when they wanted food.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 22,
    "term": "of little/no avail",
    "clean_word": "of little/no avail",
    "type": "v",
    "desc": "(formal) of little or no use (vô ích)",
    "example": "Your ability to argue is -- if the facts are wrong.",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 23,
    "term": "to little/no avail",
    "clean_word": "little/no avail",
    "type": "v",
    "desc": "(formal) with little or no success (vô vong)",
    "example": "The doctors tried everything to keep him alive but --",
    "category": "Wing 1: Innkeeper's Land & Harvest",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 24,
    "term": "remiss",
    "clean_word": "remiss",
    "type": "adj",
    "desc": "adj [not before noun] (formal) not giving something enough care and attention = negligent",
    "example": "-- in (doing) something She had clearly been remiss in her duty.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 25,
    "term": "prerogative",
    "clean_word": "prerogative",
    "type": "v",
    "desc": "n (formal) a right or advantage belonging to a particular person or group because of their importance or social position = privilege",
    "example": "In many countries education is still the -- of the rich.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 26,
    "term": "neglect",
    "clean_word": "neglect",
    "type": "v",
    "desc": "v somebody/something: to fail to take care of somebody/something",
    "example": "The government is -- its duty to safeguard the vulnerable",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 27,
    "term": "adversity",
    "clean_word": "adversity",
    "type": "v",
    "desc": "n (formal) a difficult or unpleasant situation",
    "example": "courage in the face of -- (đối mặt với nghich cảnh)",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 28,
    "term": "setback, set back (v)",
    "clean_word": "setback",
    "type": "v",
    "desc": "n a difficulty or problem that delays or prevents something, or makes a situation worse",
    "example": "The team suffered a major -- when their best player was injured.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 29,
    "term": "infuse",
    "clean_word": "infuse",
    "type": "v",
    "desc": "v + with/into: to fill someone or something with an emotion or quality",
    "example": "The pulling down of the Berlin Wall -- the world with optimism.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 30,
    "term": "(burst with/restore/ maintain) vitality",
    "clean_word": "",
    "type": "v",
    "desc": "n energy and enthusiasm = vigour",
    "example": "full of --/a lack of --",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 31,
    "term": "unleash",
    "clean_word": "unleash",
    "type": "v",
    "desc": "v something (on/upon somebody/something): to suddenly let a strong force, emotion, etc. be felt or have an effect",
    "example": "Rachel's arrival on the scene had -- passions in him that he could scarcely control.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 32,
    "term": "nonchalant",
    "clean_word": "nonchalant",
    "type": "adj",
    "desc": "adj behaving in a calm and relaxed way; giving the impression that you are not feeling worried = casual",
    "example": "to appear/look/sound --",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 33,
    "term": "attribute",
    "clean_word": "attribute",
    "type": "v",
    "desc": "v B to A: to say or believe that something (B) is the result/responsibility of a particular thing/someone (A) = ascribe to",
    "example": "The power failure was -- to the recent storms and high winds.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 34,
    "term": "credit",
    "clean_word": "credit",
    "type": "v",
    "desc": "v [usually passive] A with B/B to A: to believe or say that somebody (A) is responsible for doing something (B), especially something good",
    "example": "The invention of the industrial robot is -- to the company.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 35,
    "term": "impute",
    "clean_word": "impute",
    "type": "v",
    "desc": "v (formal) B to A: to say, often unfairly, that somebody (A) is responsible for something or has a particular quality (B)",
    "example": "I personally - - traffic congestion in Hanoi to lack of investment in road expansion",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 36,
    "term": "inscrutable",
    "clean_word": "inscrutable",
    "type": "adj",
    "desc": "adj (especially of a person's expression) (+ to sb): impossible to understand or interpret",
    "example": "-- face/expression/look",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 37,
    "term": "cryptic",
    "clean_word": "cryptic",
    "type": "adj",
    "desc": "adj with a meaning that is hidden or not easily understood = mysterious",
    "example": "a -- message/remark/smile",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 38,
    "term": "(carefully / closely / intensely) scrutinize",
    "clean_word": "",
    "type": "v",
    "desc": "v somebody/something: to look at or examine somebody/something carefully",
    "example": "He -- the men's faces carefully/closely, trying to work out who was lying.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 39,
    "term": "meticulous",
    "clean_word": "meticulous",
    "type": "adj",
    "desc": "adj in doing sth/about sth: paying careful attention to every detail = fastidious, thorough",
    "example": "-- planning/records/research",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 40,
    "term": "remunerate",
    "clean_word": "remunerate",
    "type": "n",
    "desc": "somebody (for something): to pay somebody for work that they have done",
    "example": "He is poorly -- for all the work he does.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 41,
    "term": "accede",
    "clean_word": "accede",
    "type": "v",
    "desc": "v (formal) (to something) : to agree to a request, proposal, etc.",
    "example": "He -- to demands for his resignation.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 42,
    "term": "avert",
    "clean_word": "avert",
    "type": "v",
    "desc": "v (formal) try to/manage to -- something: to prevent something bad or dangerous from happening",
    "example": "She -- her eyes from the terrible scene in front of her.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 43,
    "term": "bulwark",
    "clean_word": "bulwark",
    "type": "n",
    "desc": "n (against something) (formal) a person or thing that protects or defends something",
    "example": "My savings were to be a -- against unemployment.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 44,
    "term": "defiance",
    "clean_word": "defiance",
    "type": "n",
    "desc": "n the act of openly refusing to obey somebody/something",
    "example": "+ a look/an act/a gesture of -- :The demonstration is a pointless act/gesture of -- against the government.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 45,
    "term": "appease",
    "clean_word": "appease",
    "type": "v",
    "desc": "v (formal + us disapproving) somebody : to make somebody calmer or less angry by giving them what they want",
    "example": "The move was widely seen as an attempt to -- critics of the regime.",
    "category": "Wing 2: Guard Duty & Defenses",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 46,
    "term": "analogous",
    "clean_word": "analogous",
    "type": "adj",
    "desc": "adj (to/with something): similar in some way to another thing or situation and therefore able to be compared with it",
    "example": "The way a string vibrates is somewhat -- to the way ripples spread out in water.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 47,
    "term": "infer",
    "clean_word": "infer",
    "type": "v",
    "desc": "v something (from something): to reach an opinion or decide that something is true on the basis of information that is available = deduce (suy ra) # imply",
    "example": "It is reasonable to -- that the government knew about these deals.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 48,
    "term": "restraint",
    "clean_word": "restraint",
    "type": "n",
    "desc": "n (on somebody/something) a rule, a fact, an idea, etc. that limits or controls what people can do",
    "example": "He exercised considerable -- in ignoring the insults.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 49,
    "term": "infringe",
    "clean_word": "infringe",
    "type": "v",
    "desc": "v T (formal) something (of an action, a plan, etc.) to break a law or rule",
    "example": "-- something : They said that compulsory identity cards would infringe civil liberties.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 50,
    "term": "instill/instil",
    "clean_word": "instill/instil",
    "type": "v",
    "desc": "v to gradually put an idea or attitude into somebody's mind; to make somebody feel, think or behave in a particular way over a period of time",
    "example": "-- something (in/into somebody) : to -- confidence/discipline/fear into somebody",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 51,
    "term": "problematic",
    "clean_word": "problematic",
    "type": "adj",
    "desc": "adj difficult to deal with or to understand; full of problems; not certain to be successful",
    "example": "Which are the most -- countries in the world for journalists?",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 52,
    "term": "restrained",
    "clean_word": "restrained",
    "type": "v",
    "desc": "v acting in a calm and controlled way",
    "example": "The tone of his poetry is -- and unemotional.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 53,
    "term": "paranoid",
    "clean_word": "paranoid",
    "type": "adj",
    "desc": "adj afraid of other people for no reason or suspecting that they are trying to harm you, when really they are not",
    "example": "She's getting really -- about what other people say about her.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 54,
    "term": "hunch",
    "clean_word": "hunch",
    "type": "n",
    "desc": "n (to follow/to act on --) a feeling that something is true even though you do not have any evidence to prove it (linh tính)",
    "example": "She leaned forward, -- over the desk",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 55,
    "term": "self-effacing",
    "clean_word": "self-effacing",
    "type": "adj",
    "desc": "adj not wanting to attract attention to yourself or your abilities = modest >< arrogant (arrogance n)",
    "example": "The captain was typically -- when questioned about the team's successes, giving credit to the other players.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 56,
    "term": "reticent, reticence (n) ( to overcome --)",
    "clean_word": "reticent",
    "type": "adj",
    "desc": "adj + about sth: unwilling to speak about your thoughts or feelings = reserved, uncommunicative >< arrogant (arrogance n)",
    "example": "He was extremely -- about his personal life.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 57,
    "term": "contain",
    "clean_word": "contain",
    "type": "v",
    "desc": "v sth: to keep your feelings under control = restrain",
    "example": "He introduced repressive measures to -- the violence.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 58,
    "term": "fathom",
    "clean_word": "fathom",
    "type": "v",
    "desc": "v (usually in negative sentences)to understand or find an explanation for something",
    "example": "-- somebody/something (out) : She knew he was angry with her, for some reason she couldn't --.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 59,
    "term": "discern",
    "clean_word": "discern",
    "type": "v",
    "desc": "v to know, recognize or understand something, especially something that is not obvious = detect",
    "example": "We could just -- the house in the distance.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 60,
    "term": "sabotage",
    "clean_word": "sabotage",
    "type": "v",
    "desc": "v something : to prevent something from being successful or being achieved, especially deliberately",
    "example": "His speech was calculated to -- our efforts to reach a solution to the crisis.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 61,
    "term": "squander",
    "clean_word": "squander",
    "type": "n",
    "desc": "something (on somebody/something) : to waste money, time, etc. in a stupid or careless way",
    "example": "She -- her chances of winning.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 62,
    "term": "hasty",
    "clean_word": "hasty",
    "type": "adj",
    "desc": "adj said, made or done very quickly, especially when this has bad results = hurried",
    "example": "Perhaps I was too -- in rejecting his offer.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 63,
    "term": "vandalism, vandalise (v)",
    "clean_word": "vandalism",
    "type": "v",
    "desc": "n the crime of destroying or damaging something, especially public property, deliberately and for no good reason",
    "example": "Police condemned the damage as an act of mindless --",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 64,
    "term": "monopolise",
    "clean_word": "monopolise",
    "type": "v",
    "desc": "v something: to have or take control of the largest part of something so that other people are prevented from sharing it",
    "example": "Men traditionally -- jobs in the printing industry",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 65,
    "term": "embezzle",
    "clean_word": "embezzle",
    "type": "v",
    "desc": "v (something) to steal money that you are responsible for or that belongs to your employer",
    "example": "He was found guilty of -- $150 000 of public funds.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 66,
    "term": "impulse",
    "clean_word": "impulse",
    "type": "n",
    "desc": "n (to do something) a sudden strong wish or need to do something, without stopping to think about the results",
    "example": "He had a sudden -- to stand up and sing.",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 67,
    "term": "impulsive",
    "clean_word": "impulsive",
    "type": "adj",
    "desc": "adj (of people or their behaviour) acting suddenly without thinking carefully about what might happen because of what you are doing = impetuous, rash",
    "example": "an -- decision/gesture",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 68,
    "term": "impulse buying",
    "clean_word": "impulse buying",
    "type": "n",
    "desc": "n buying goods without planning to do so in advance, and without thinking about it carefully",
    "example": "to do/avoid/encourage --",
    "category": "Wing 3: Secret Grimoire & Insight",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 69,
    "term": "elusive",
    "clean_word": "elusive",
    "type": "adj",
    "desc": "adj difficult to find, define or achieve",
    "example": "A solution to the problem of toxic waste is proving -- .",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 70,
    "term": "elude",
    "clean_word": "elude",
    "type": "v",
    "desc": "v somebody/something: to manage to avoid or escape from somebody/something, especially in a clever way",
    "example": "Finally he remembered the tiny detail that had -- him the night before.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 71,
    "term": "kindle",
    "clean_word": "kindle",
    "type": "v",
    "desc": "v (something) to make something such as an interest, emotion, etc. start to grow in somebody; to start to be felt by somebody: làm cháy lên",
    "example": "It was her teacher who -- her interest in music.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 72,
    "term": "arouse",
    "clean_word": "arouse",
    "type": "v",
    "desc": "v something: to make somebody have a particular feeling or attitude",
    "example": "to -- somebody's interest/curiosity/anger",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 73,
    "term": "industrious",
    "clean_word": "industrious",
    "type": "adj",
    "desc": "adj (approving) working hard; busy = hard-working",
    "example": "She was surrounded by energetic, -- people.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 74,
    "term": "reprehensible",
    "clean_word": "reprehensible",
    "type": "adj",
    "desc": "adj: If someone's behaviour is -- , it is extremely bad or unacceptable = deplorable",
    "example": "-- conduct/actions",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 75,
    "term": "pensive",
    "clean_word": "pensive",
    "type": "adj",
    "desc": "adj thinking deeply about something, especially because you are sad or worried",
    "example": "to be in a -- mood",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 76,
    "term": "debunk",
    "clean_word": "debunk",
    "type": "v",
    "desc": "v (claim/myth/notion) something to show that an idea, a belief, etc. is false; to show that something is not as good as people think it is: vạch trần, lật tẩy",
    "example": "His theories have been -- by recent research.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 77,
    "term": "epitomise",
    "clean_word": "epitomise",
    "type": "v",
    "desc": "v sth: to be a perfect example of a quality or type of thing",
    "example": "With little equipment and unsuitable footwear, she -- the inexperienced and unprepared mountain walker.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 78,
    "term": "typify",
    "clean_word": "typify",
    "type": "v",
    "desc": "v something: to be a typical example of something",
    "example": "clothes that -- the 1960s",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 79,
    "term": "portend",
    "clean_word": "portend",
    "type": "v",
    "desc": "v something to be a sign or warning of something that is going to happen in the future, especially something bad or unpleasant = foreshadow",
    "example": "It was a deeply superstitious country, where earthquakes were commonly believed to -- the end of dynasties.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 80,
    "term": "to reach/break/end in deadlock",
    "clean_word": "reach/break/end in deadlock",
    "type": "n",
    "desc": "n a complete failure to reach an agreement or settle an argument = stalemate, impasse : tình trạng đóng băng, trì trệ",
    "example": "European agriculture ministers failed to break the -- over farm subsidies.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 81,
    "term": "come to / grind to / bring something to standstill",
    "clean_word": "come / grind / bring something standstill",
    "type": "n",
    "desc": "n a situation in which all activity or movement has stopped = halt",
    "example": "Traffic in the northbound ( travelling or leading towards the north) lane is at a complete --.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 82,
    "term": "perennial",
    "clean_word": "perennial",
    "type": "adj",
    "desc": "adj continuing for a very long time; happening again and again",
    "example": "the -- problem of water shortage",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 83,
    "term": "attempt to / try to / be designed to curb",
    "clean_word": "attempt / try / be designed curb",
    "type": "v",
    "desc": "v something to control or limit something, especially something bad = check",
    "example": "aimed at -- something / an attempt to -- something / an effort to -- something",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 84,
    "term": "to serve as /have /create precedent",
    "clean_word": "serve as /have /create precedent",
    "type": "v",
    "desc": "n an official action or decision that has happened in the past and that is seen as an example or a rule to be followed in a similar situation later : tiền lệ",
    "example": "to break with -- (= to do something in a different way)",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 85,
    "term": "disguise",
    "clean_word": "disguise",
    "type": "v",
    "desc": "v something to hide something or change it, so that it cannot be recognized",
    "example": "She couldn't -- the fact that she felt uncomfortable.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 86,
    "term": "conceal",
    "clean_word": "conceal",
    "type": "v",
    "desc": "v (formal) to hide somebody/ something; to keep something secret (emotions, often used in negative statements)",
    "example": "Tim could barely -- his disappointment.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 87,
    "term": "mask",
    "clean_word": "mask",
    "type": "v",
    "desc": "v to hide a feeling, smell, fact, etc. so that it cannot be easily seen or noticed",
    "example": "She -- her anger with a smile.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 88,
    "term": "analogy",
    "clean_word": "analogy",
    "type": "n",
    "desc": "n a comparison of one thing with another thing that has similar features; a feature that is similar : sự tương đồng",
    "example": "-- (between A and B) : The teacher drew an --between the human heart and a pump.",
    "category": "Wing 4: The Wild Woods & Hunt",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 89,
    "term": "despise, despicable (adj)",
    "clean_word": "despise",
    "type": "adj",
    "desc": "v to dislike and have no respect for somebody/something = can't bear/stand (rf) = dislike (rf) = loathe (loath adj) = detest (rf)",
    "example": "-- somebody/yourself for (doing) something: He -- himself for being so cowardly.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 90,
    "term": "relish",
    "clean_word": "relish",
    "type": "v",
    "desc": "v + sth: to get great pleasure from something; to want very much to do or have something = enjoy",
    "example": "with -- : She savoured the moment with obvious --",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 91,
    "term": "loath",
    "clean_word": "loath",
    "type": "adj",
    "desc": "adj + to do something : not willing to do something",
    "example": "They were obviously -- to let her leave.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 92,
    "term": "greedy",
    "clean_word": "greedy",
    "type": "adj",
    "desc": "adj (disapproving) wanting more money, power, food, etc. than you really need",
    "example": "-- for something: The shareholders are greedy for profit.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 93,
    "term": "hypocrisy, hypocritical",
    "clean_word": "hypocrisy",
    "type": "v",
    "desc": "n behaviour that does not meet the moral standards or match the opinions that somebody claims to have",
    "example": "He condemned the -- of those politicians who do one thing and say another.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 94,
    "term": "implicit",
    "clean_word": "implicit",
    "type": "adj",
    "desc": "adj (in something) suggested without being directly expressed =unstated/unspoken >< explicit",
    "example": "She had the -- trust of her staff.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 95,
    "term": "furnish",
    "clean_word": "furnish",
    "type": "v",
    "desc": "v (formal) sb/sth (with sth) to supply or provide somebody/something with something; to supply something to somebody = arm = provide",
    "example": "Jeanne's catering company -- all the food for the party.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 96,
    "term": "arm",
    "clean_word": "arm",
    "type": "v",
    "desc": "v to provide yourself or others with equipment or knowledge in order to complete a particular task",
    "example": "She -- herself for the interview by finding out all she could about the company in advance.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 97,
    "term": "manifest",
    "clean_word": "manifest",
    "type": "v",
    "desc": "v something (in something) : to show something clearly, especially a feeling, an attitude or a quality = demonstrate",
    "example": "His nervousness was -- to all those present.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 98,
    "term": "Premium",
    "clean_word": "Premium",
    "type": "n",
    "desc": "n an extra payment added to the basic rate",
    "example": "There's a risk -- of probably $10 a barrel built into oil prices.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 99,
    "term": "prosper, prosperity (n = affluence)",
    "clean_word": "prosper",
    "type": "v",
    "desc": "v to develop in a successful way; to be successful, especially in making money = thrive",
    "example": "She seems to be --ing since she moved out of the city.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 100,
    "term": "agitation",
    "clean_word": "agitation",
    "type": "n",
    "desc": "n worry that you show by behaving in a nervous way",
    "example": "He started to pace up and down (To walk back and forth) the room in --.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 101,
    "term": "brevity",
    "clean_word": "brevity",
    "type": "v",
    "desc": "n the quality of using few words when speaking or writing = conciseness",
    "example": "For the sake of -- I'd like to make just two points.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 102,
    "term": "infest",
    "clean_word": "infest",
    "type": "v",
    "desc": "v (us ps)(especially of insects or animals such as rats) to exist in large numbers in a particular place, often causing damage or disease",
    "example": "be -- (with something) The kitchen was -- with ants",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 103,
    "term": "broach",
    "clean_word": "broach",
    "type": "v",
    "desc": "v something (subject/matter/topic )(to/with somebody) to begin talking about a subject that is difficult to discuss, especially because it is embarrassing or because people disagree about it",
    "example": "She was dreading having to -- the subject of money to her father.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 104,
    "term": "abhor",
    "clean_word": "abhor",
    "type": "v",
    "desc": "v something to hate something, for example a way of behaving or thinking, especially for moral reasons = detest/loathe",
    "example": "She -- any form of cruelty towards animals.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 105,
    "term": "scorn",
    "clean_word": "scorn",
    "type": "v",
    "desc": "v somebody/something to feel or show that you think somebody/something is stupid and you do not respect them or it = dismiss",
    "example": "Such methods are -- by reputable practitioners.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 106,
    "term": "dismiss",
    "clean_word": "dismiss",
    "type": "v",
    "desc": "v to decide that somebody/something is not important and not worth thinking or talking about",
    "example": "She claims she was unfairly -- from her post.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 107,
    "term": "uncanny",
    "clean_word": "uncanny",
    "type": "adj",
    "desc": "adj strange and difficult to explain = weird",
    "example": "He has an -- knack of being able to see immediately where the problem lies.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 108,
    "term": "in its/their entirety",
    "clean_word": "in its/their entirety",
    "type": "n",
    "desc": "as a whole, rather than in parts",
    "example": "The poem is too long to quote --.",
    "category": "Wing 5: Grand Banquet & Destiny",
    "monster": "👑 Elder Dragonling"
  }
];

    // Retro 8-bit Web Audio Synthesizer (Zero external audio file dependencies)
    class RetroAudio {
      constructor() {
        this.ctx = null;
      }
      init() {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) this.ctx = new AudioContext();
        }
      }
      playTone(freq, type, duration, delay=0) {
        this.init();
        if (!this.ctx) return;
        setTimeout(() => {
          try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + duration);
          } catch(e) {}
        }, delay * 1000);
      }
      flip() { this.playTone(480, 'sine', 0.08); }
      correct() {
        this.playTone(523.25, 'triangle', 0.1, 0);
        this.playTone(659.25, 'triangle', 0.1, 0.08);
        this.playTone(783.99, 'triangle', 0.2, 0.16);
      }
      wrong() {
        this.playTone(220, 'sawtooth', 0.15, 0);
        this.playTone(180, 'sawtooth', 0.25, 0.1);
      }
      coin() {
        this.playTone(987.77, 'square', 0.08, 0);
        this.playTone(1318.51, 'square', 0.25, 0.08);
      }
      fanfare() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, i) => this.playTone(f, 'triangle', 0.2, i * 0.12));
      }
    }

    // Main App Logic
    class MonsterestApp {
      constructor() {
        this.vocab = RAW_VOCAB;
        this.audio = new RetroAudio();
        this.currentWingIndex = 0;
        this.currentMode = null; // 'flashcard', 'quiz', 'quest'
        this.currentCardIdx = 0;
        this.quizQueue = [];
        this.quizIdx = 0;
        this.quizScore = 0;
        this.quizStreak = 0;
        this.filteredWords = [];

        this.wings = [
          {
            id: 0,
            title: "Wing 1: Đất Canh Tác & Nguồn Lực",
            desc: "23 Từ vựng về sản lượng, đất đai canh tác, rào cản và ý chí kiên định.",
            monster: "🍄 Sprout Sprite",
            range: [1, 23]
          },
          {
            id: 1,
            title: "Wing 2: Đội Vệ Binh & Tường Thành",
            desc: "22 Từ vựng về phòng thủ, sự tỉ mỉ, kiềm chế và đàm phán hiệp ước.",
            monster: "🛡️ Stone Golem",
            range: [24, 45]
          },
          {
            id: 2,
            title: "Wing 3: Mật Điển & Trực Giác Quán Trọ",
            desc: "23 Từ vựng tâm lý học, linh cảm, bí ẩn và sự suy xét thấu đáo.",
            monster: "🔮 Shadow Familiar",
            range: [46, 68]
          },
          {
            id: 3,
            title: "Wing 4: Rừng Hoang Dã & Cuộc Đi Săn",
            desc: "20 Từ vựng về dấu hiệu điềm báo, sự lảng tránh và truyền thống ngàn đời.",
            monster: "🦊 Moonlit Kitsune",
            range: [69, 88]
          },
          {
            id: 4,
            title: "Wing 5: Yến Tiệc & Sự Thịnh Vượng",
            desc: "20 Từ vựng về cảm xúc tột cùng, trang hoàng quán trọ và định mệnh trọn vẹn.",
            monster: "👑 Elder Dragonling",
            range: [89, 108]
          }
        ];

        this.loadStorage();
        this.initDOM();
        this.renderWings();
        this.updateStatsDisplay();
      }

      loadStorage() {
        const saved = localStorage.getItem('monsterest_inn_save');
        if (saved) {
          try {
            this.state = JSON.parse(saved);
          } catch(e) {
            this.state = this.getDefaultState();
          }
        } else {
          this.state = this.getDefaultState();
        }
      }

      getDefaultState() {
        return {
          gold: 0,
          hearts: 0,
          masteredWordIds: [],
          streak: 1,
          lastPlayedDate: new Date().toDateString()
        };
      }

      saveStorage() {
        localStorage.setItem('monsterest_inn_save', JSON.stringify(this.state));
        this.updateStatsDisplay();
      }

      updateStatsDisplay() {
        document.getElementById('stat-gold').textContent = this.state.gold;
        document.getElementById('stat-hearts').textContent = this.state.hearts;
        document.getElementById('stat-mastered').textContent = `${this.state.masteredWordIds.length}/${this.vocab.length}`;
        document.getElementById('stat-streak').textContent = this.state.streak;
      }

      initDOM() {
        // Keyboard navigation for flashcards
        window.addEventListener('keydown', (e) => {
          if (document.getElementById('view-flashcard').classList.contains('active')) {
            if (e.code === 'Space') {
              e.preventDefault();
              this.flipCard();
            } else if (e.code === 'ArrowRight') {
              this.nextCard();
            } else if (e.code === 'ArrowLeft') {
              this.prevCard();
            }
          }
        });
      }

      switchView(viewId) {
        document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      showHome() {
        this.renderWings();
        this.switchView('view-home');
      }

      showModeSelect() {
        const wing = this.wings[this.currentWingIndex];
        document.getElementById('current-wing-icon').textContent = wing.monster.split(' ')[0];
        document.getElementById('current-wing-title').textContent = wing.title;
        this.switchView('view-mode-select');
      }

      selectWing(idx) {
        this.currentWingIndex = idx;
        const wing = this.wings[idx];
        this.filteredWords = this.vocab.filter(w => w.id >= wing.range[0] && w.id <= wing.range[1]);
        this.showModeSelect();
      }

      renderWings() {
        const container = document.getElementById('wings-container');
        container.innerHTML = '';
        this.wings.forEach((wing, idx) => {
          const wingWords = this.vocab.filter(w => w.id >= wing.range[0] && w.id <= wing.range[1]);
          const masteredInWing = wingWords.filter(w => this.state.masteredWordIds.includes(w.id)).length;
          const pct = Math.round((masteredInWing / wingWords.length) * 100);

          const card = document.createElement('div');
          card.className = 'wing-card';
          card.onclick = () => this.selectWing(idx);
          card.innerHTML = `
            <div class="wing-card-top">
              <div class="wing-avatar">${wing.monster.split(' ')[0]}</div>
              <span class="wing-monster-tag">${wing.monster}</span>
            </div>
            <div class="wing-info">
              <h3>${wing.title}</h3>
              <p>${wing.desc}</p>
            </div>
            <div>
              <div class="wing-progress-bar">
                <div class="wing-progress-fill" style="width: ${pct}%;"></div>
              </div>
              <div class="wing-meta" style="margin-top: 6px;">
                <span>Tiến độ: ${pct}%</span>
                <span>${masteredInWing}/${wingWords.length} Từ</span>
              </div>
            </div>
          `;
          container.appendChild(card);
        });
      }

      /* =================== 3D FLASHCARD =================== */
      startFlashcards() {
        this.currentMode = 'flashcard';
        this.currentCardIdx = 0;
        this.renderCard();
        this.switchView('view-flashcard');
      }

      renderCard() {
        const word = this.filteredWords[this.currentCardIdx];
        if (!word) return;

        // Reset flip
        document.getElementById('flashcard-card').classList.remove('is-flipped');

        document.getElementById('fc-index').textContent = this.currentCardIdx + 1;
        document.getElementById('fc-total').textContent = this.filteredWords.length;
        document.getElementById('fc-type').textContent = word.type || 'term';
        document.getElementById('fc-word').textContent = word.clean_word;
        document.getElementById('fc-ipa').textContent = word.ipa || word.term;
        document.getElementById('fc-monster').textContent = word.monster || 'Monster Companion';
        
        document.getElementById('fc-meaning-vi').textContent = word.desc.split('=')[0];
        document.getElementById('fc-def-en').textContent = word.desc;
        document.getElementById('fc-example').textContent = word.example || `Example of "${word.clean_word}" in tavern context.`;
        document.getElementById('fc-category-name').textContent = word.category;

        const btnMaster = document.getElementById('btn-master-card');
        const isMastered = this.state.masteredWordIds.includes(word.id);
        if (isMastered) {
          btnMaster.className = 'pixel-btn success';
          btnMaster.textContent = '⭐ Đã Thuần Phục';
        } else {
          btnMaster.className = 'pixel-btn secondary';
          btnMaster.textContent = '☆ Thuần Phục (+15 🪙)';
        }
      }

      flipCard() {
        this.audio.flip();
        document.getElementById('flashcard-card').classList.toggle('is-flipped');
      }

      nextCard() {
        if (this.currentCardIdx < this.filteredWords.length - 1) {
          this.currentCardIdx++;
          this.renderCard();
        }
      }

      prevCard() {
        if (this.currentCardIdx > 0) {
          this.currentCardIdx--;
          this.renderCard();
        }
      }

      toggleMasterCurrent() {
        const word = this.filteredWords[this.currentCardIdx];
        const idx = this.state.masteredWordIds.indexOf(word.id);
        if (idx > -1) {
          this.state.masteredWordIds.splice(idx, 1);
        } else {
          this.state.masteredWordIds.push(word.id);
          this.state.gold += 15;
          this.state.hearts += 5;
          this.audio.coin();
        }
        this.saveStorage();
        this.renderCard();
      }

      speakCurrentWord() {
        const word = this.filteredWords[this.currentCardIdx];
        if (!word) return;
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(word.clean_word);
          utterance.lang = 'en-US';
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
        }
      }

      /* =================== QUIZ & QUEST TRIAL =================== */
      startQuizMode() {
        this.currentMode = 'quiz';
        this.setupQuestions(10, 'meaning');
        this.switchView('view-quiz');
      }

      startQuestMode() {
        this.currentMode = 'quest';
        this.setupQuestions(10, 'sentence');
        this.switchView('view-quiz');
      }

      setupQuestions(count, type) {
        document.getElementById('quiz-mode-icon').textContent = type === 'meaning' ? '⚔️' : '🍲';
        document.getElementById('quiz-mode-title').textContent = type === 'meaning' ? 'Đấu Trường Quái Vật' : 'Nhiệm Vụ Ngữ Cảnh Quán Trọ';

        // Pick items
        const pool = [...this.filteredWords].sort(() => 0.5 - Math.random());
        const chosen = pool.slice(0, Math.min(count, pool.length));

        this.quizQueue = chosen.map(item => {
          // Create 3 distractor words from all vocab
          const distractors = this.vocab
            .filter(w => w.id !== item.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          
          let options = [];
          if (type === 'meaning') {
            options = [
              { text: item.desc.split('.')[0].replace('adj', '').replace('v', '').trim(), correct: true },
              ...distractors.map(d => ({ text: d.desc.split('.')[0].replace('adj', '').replace('v', '').trim(), correct: false }))
            ];
          } else {
            options = [
              { text: item.clean_word, correct: true },
              ...distractors.map(d => ({ text: d.clean_word, correct: false }))
            ];
          }
          options.sort(() => 0.5 - Math.random());

          return {
            word: item,
            type: type,
            options: options
          };
        });

        this.quizIdx = 0;
        this.quizScore = 0;
        this.renderQuizQuestion();
      }

      renderQuizQuestion() {
        const q = this.quizQueue[this.quizIdx];
        if (!q) return;

        document.getElementById('btn-quiz-next').style.display = 'none';
        document.getElementById('quiz-explanation').style.display = 'none';

        const totalQ = this.quizQueue.length;
        document.getElementById('quiz-progress-text').textContent = `Câu ${this.quizIdx + 1}/${totalQ}`;

        const wing = this.wings[this.currentWingIndex];
        document.getElementById('quiz-monster-sprite').textContent = wing.monster.split(' ')[0];
        document.getElementById('quiz-monster-name').textContent = wing.monster;

        const hpPct = Math.max(10, Math.round(((totalQ - this.quizIdx) / totalQ) * 100));
        document.getElementById('quiz-hp-bar').style.width = `${hpPct}%`;

        if (q.type === 'meaning') {
          document.getElementById('quiz-prompt-label').textContent = "Chọn định nghĩa / nghĩa chính xác của từ:";
          document.getElementById('quiz-question-main').innerHTML = `${q.word.clean_word} <span style="font-size:1.1rem; color:var(--text-muted); font-family:var(--font-pixel);">${q.word.ipa || ''}</span>`;
        } else {
          document.getElementById('quiz-prompt-label').textContent = "Chọn từ vựng đúng để hoàn thành câu:";
          let sentence = q.word.example || "She tried her best to -- the ancient monster.";
          let maskedSentence = sentence.replace(new RegExp(q.word.clean_word, 'gi'), '_____');
          if (!maskedSentence.includes('_____')) maskedSentence = maskedSentence.replace('--', '_____');
          document.getElementById('quiz-question-main').className = "quiz-sentence-box";
          document.getElementById('quiz-question-main').textContent = maskedSentence;
        }

        // Options
        const container = document.getElementById('quiz-options-container');
        container.innerHTML = '';
        q.options.forEach((opt, oIdx) => {
          const btn = document.createElement('button');
          btn.className = 'option-btn';
          btn.innerHTML = `<span style="color:var(--accent-gold); font-family:var(--font-pixel); font-size:1.3rem;">${['A','B','C','D'][oIdx]}.</span> <span>${opt.text}</span>`;
          btn.onclick = () => this.handleOptionSelect(btn, opt.correct, q);
          container.appendChild(btn);
        });
      }

      handleOptionSelect(btn, isCorrect, q) {
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        if (isCorrect) {
          btn.classList.add('correct');
          this.audio.correct();
          this.quizScore++;
          this.state.gold += 10;
          this.state.hearts += 5;
          if (!this.state.masteredWordIds.includes(q.word.id)) {
            this.state.masteredWordIds.push(q.word.id);
          }
        } else {
          btn.classList.add('wrong');
          this.audio.wrong();
          allBtns.forEach((b, idx) => {
            if (q.options[idx].correct) b.classList.add('correct');
          });
        }

        this.saveStorage();

        // Show Explanation
        const expPanel = document.getElementById('quiz-explanation');
        const expText = document.getElementById('quiz-explanation-text');
        expText.innerHTML = `<strong>${q.word.clean_word}</strong>: ${q.word.desc}<br><em>Ví dụ: ${q.word.example || 'N/A'}</em>`;
        expPanel.style.display = 'block';

        document.getElementById('btn-quiz-next').style.display = 'inline-flex';
      }

      nextQuizQuestion() {
        this.quizIdx++;
        if (this.quizIdx < this.quizQueue.length) {
          this.renderQuizQuestion();
        } else {
          this.showSummary();
        }
      }

      showSummary() {
        this.audio.fanfare();
        this.fireConfetti();

        document.getElementById('sum-correct').textContent = `${this.quizScore}/${this.quizQueue.length}`;
        document.getElementById('sum-gold').textContent = `+${this.quizScore * 10}`;
        document.getElementById('sum-hearts').textContent = `+${this.quizScore * 5}`;

        this.switchView('view-summary');
      }

      restartCurrentMode() {
        if (this.currentMode === 'quiz') this.startQuizMode();
        else if (this.currentMode === 'quest') this.startQuestMode();
        else this.startFlashcards();
      }

      fireConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];
        const colors = ['#f5b041', '#e67e22', '#2ecc71', '#9b59b6', '#3498db', '#e74c3c'];
        for (let i = 0; i < 70; i++) {
          pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 4 + 2,
            angle: Math.random() * 360
          });
        }

        let frame = 0;
        function render() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          pieces.forEach(p => {
            p.y += p.speed;
            p.angle += 3;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
          });
          frame++;
          if (frame < 120) requestAnimationFrame(render);
          else ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        render();
      }
    }

    // Initialize App when loaded
    let app;
    window.addEventListener('DOMContentLoaded', () => {
      app = new MonsterestApp();
    });
  </script>
</body>
</html>
```

---

## 🚀 5. Hướng Dẫn Triển Khai Lên GitHub Pages (Miễn Phí 100%)

Chỉ mất **2 phút** để đưa ứng dụng web lên internet:

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào tài khoản [GitHub](https://github.com).
2. Nhấp vào nút **New** (Tạo repo mới).
3. Đặt tên Repository, ví dụ: `monsterest-vocab-game`.
4. Chọn chế độ **Public** và bấm **Create repository**.

### Bước 2: Tải file `index.html` lên
1. Tại trang Repo vừa tạo, bấm **Add file** -> **Upload files**.
2. Kéo thả file `index.html` (chứa toàn bộ mã nguồn ở Mục 4) vào ô upload.
3. Bấm **Commit changes**.

### Bước 3: Kích hoạt GitHub Pages
1. Vào mục **Settings** của Repository -> Chọn thẻ **Pages** ở thanh menu bên trái.
2. Tại mục **Build and deployment > Branch**, chọn branch `main` (hoặc `master`) và thư mục `/(root)`.
3. Bấm **Save**.
4. Chờ 30 giây, GitHub sẽ cung cấp đường link truy cập trực tiếp có dạng:
   `https://<ten-user-github>.github.io/monsterest-vocab-game/`

---

## 🛠️ 6. Tùy Biến & Mở Rộng
* **Thêm từ vựng mới:** Chỉ cần bổ sung các object mới vào mảng `RAW_VOCAB` trong thẻ `<script>` với định dạng `{"id": 109, "clean_word": "...", "desc": "...", "example": "..."}`.
* **Âm thanh tùy chỉnh:** Lớp `RetroAudio` sử dụng Web Audio API cho phép tùy biến tần số âm thanh (Hz) và dạng sóng (*sine, square, sawtooth, triangle*) để tạo hiệu ứng âm thanh 8-bit riêng theo sở thích.
