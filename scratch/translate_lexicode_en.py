import re

with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Header subtitle & titles
content = content.replace(
    '<p>Làm chủ 108 từ vựng Anh ngữ chuẩn Lexicode qua thế giới trò chơi hóa</p>',
    '<p>Master 108 Advanced Lexicode Vocabulary in a Cozy Gamified Realm</p>'
)

content = content.replace(
    'title="Từ đã thuần phục / Mastered"',
    'title="Mastered Words / Thuần Phục"'
)
content = content.replace(
    'title="Ngày học liên tiếp / Daily Streak"',
    'title="Daily Streak / Chuỗi Ngày Học"'
)

# 2. View 1: Home Wings Selection
content = content.replace(
    '<h2><span>🗺️</span> Chọn Cánh Cổng Thử Thách (Wings)</h2>',
    '<h2><span>🗺️</span> Choose Your Challenge Wing</h2>'
)

# 3. View 2: Mode Selection
content = content.replace(
    '<button class="pixel-btn secondary" onclick="app.showHome()">⬅️ Đổi Cánh Cổng</button>',
    '<button class="pixel-btn secondary" onclick="app.showHome()">⬅️ Change Wing</button>'
)
content = content.replace(
    'Hãy chọn hình thức tu luyện từ vựng cùng các vị khách Quái Vật đáng yêu tại quán trọ:',
    'Select your training mode alongside charming monster inn guests:'
)
content = content.replace(
    '<h3>Sách Phép 3D Grimoire</h3>',
    '<h3>3D Grimoire Spellbook</h3>'
)
content = content.replace(
    '<p>Lật thẻ 3D trực quan, nghe giọng phát âm bản ngữ, tra phiên âm, định nghĩa và ví dụ ngữ cảnh.</p>',
    '<p>Flip 3D cards smoothly, listen to native audio, review IPA, definitions, and contextual examples.</p>'
)
content = content.replace(
    '<button class="pixel-btn" style="margin-top:auto;">Khám Phá Thẻ</button>',
    '<button class="pixel-btn" style="margin-top:auto;">Explore Cards</button>'
)

content = content.replace(
    '<h3>Đấu Trường Quái Vật (Trial)</h3>',
    '<h3>Monster Trial Arena</h3>'
)
content = content.replace(
    '<p>Rèn luyện phản xạ nhanh bằng cách đánh bại quái vật qua 10 câu trắc nghiệm nghĩa từ chuẩn xác.</p>',
    '<p>Sharpen lexical reflexes by challenging trial monsters across 10 definition questions.</p>'
)
content = content.replace(
    '<button class="pixel-btn" style="margin-top:auto;">Vào Khiêu Chiến</button>',
    '<button class="pixel-btn" style="margin-top:auto;">Enter Arena</button>'
)

content = content.replace(
    '<h3>Nhiệm Vụ Quán Trọ (Quest)</h3>',
    '<h3>Tavern Recipe Quest</h3>'
)
content = content.replace(
    '<p>Hoàn thành câu tiếng Anh theo ngữ cảnh thực tế (A, B, C, D) để nấu món ăn hảo hạng đãi khách.</p>',
    '<p>Complete contextual sentences (A, B, C, D) to prepare exquisite gourmet dishes for inn guests.</p>'
)
content = content.replace(
    '<button class="pixel-btn" style="margin-top:auto;">Nhận Nhiệm Vụ</button>',
    '<button class="pixel-btn" style="margin-top:auto;">Accept Quest</button>'
)

# 4. View 3: 3D Flashcard
content = content.replace(
    '<h2><span>📇</span> Sách Phép 3D (<span id="fc-index">1</span>/<span id="fc-total">20</span>)</h2>',
    '<h2><span>📇</span> 3D Grimoire Spellbook (<span id="fc-index">1</span>/<span id="fc-total">20</span>)</h2>'
)
content = content.replace(
    '<button class="pixel-btn secondary" onclick="app.showModeSelect()">⬅️ Menu Chế Độ</button>',
    '<button class="pixel-btn secondary" onclick="app.showModeSelect()">⬅️ Mode Menu</button>'
)
content = content.replace(
    '<p class="card-hint">💡 Nhấp thẻ hoặc nhấn phím Space để xem giải nghĩa</p>',
    '<p class="card-hint">💡 Click card or press Space to flip</p>'
)
content = content.replace(
    '<span style="font-size: 0.85rem; color: var(--accent-gold);">Mặt Trước 🔄</span>',
    '<span style="font-size: 0.85rem; color: var(--accent-gold);">Front Face 🔄</span>'
)
content = content.replace(
    '<span class="card-tag" style="background: rgba(245,176,65,0.2); color: var(--accent-gold);">Nghĩa & Ngữ Cảnh</span>',
    '<span class="card-tag" style="background: rgba(245,176,65,0.2); color: var(--accent-gold);">Meaning & Context</span>'
)
content = content.replace(
    '<span style="font-size: 0.85rem; color: var(--accent-gold);">🔄 Lật lại</span>',
    '<span style="font-size: 0.85rem; color: var(--accent-gold);">🔄 Flip Back</span>'
)
content = content.replace(
    '<button class="pixel-btn secondary" onclick="app.prevCard()">⬅️ Từ trước</button>',
    '<button class="pixel-btn secondary" onclick="app.prevCard()">⬅️ Previous</button>'
)
content = content.replace(
    '<button class="pixel-btn success" id="btn-master-card" onclick="app.toggleMasterCurrent()">⭐ Thuần Phục (+15 🪙)</button>',
    '<button class="pixel-btn success" id="btn-master-card" onclick="app.toggleMasterCurrent()">⭐ Master Word (+15 🪙)</button>'
)
content = content.replace(
    '<button class="pixel-btn" onclick="app.nextCard()">Từ tiếp theo ➡️</button>',
    '<button class="pixel-btn" onclick="app.nextCard()">Next Word ➡️</button>'
)

# 5. View 4: Quiz Trial & Quest Battle
content = content.replace(
    '<div style="font-size: 0.8rem; color: var(--text-muted);">Khách Trọ Cấp Thần Thoại</div>',
    '<div style="font-size: 0.8rem; color: var(--text-muted);">Mythic Inn Guest</div>'
)
content = content.replace(
    '<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 3px; text-align: right;">Độ Hài Lòng (HP)</div>',
    '<div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 3px; text-align: right;">Satisfaction (HP)</div>'
)
content = content.replace(
    '<p class="quiz-prompt" id="quiz-prompt-label">Hãy chọn định nghĩa / nghĩa tiếng Việt chính xác của từ sau:</p>',
    '<p class="quiz-prompt" id="quiz-prompt-label">Select the correct definition for the target word:</p>'
)
content = content.replace(
    '<div style="font-weight: 800; color: var(--accent-gold); margin-bottom: 4px;">📖 Phân Tích & Ví Dụ:</div>',
    '<div style="font-weight: 800; color: var(--accent-gold); margin-bottom: 4px;">📖 Lexical Analysis & Context Example:</div>'
)
content = content.replace(
    '<button class="pixel-btn" id="btn-quiz-next" style="display: none;" onclick="app.nextQuizQuestion()">Tiếp Tục ➡️</button>',
    '<button class="pixel-btn" id="btn-quiz-next" style="display: none;" onclick="app.nextQuizQuestion()">Continue ➡️</button>'
)

# 6. View 5: Summary & Victory Modal
content = content.replace(
    '<h2 style="font-family: var(--font-title); color: var(--accent-gold); font-size: 1.6rem;">Nhiệm Vụ Hoàn Tất!</h2>',
    '<h2 style="font-family: var(--font-title); color: var(--accent-gold); font-size: 1.6rem;">Quest Completed!</h2>'
)
content = content.replace(
    'Các vị khách quái vật vô cùng hài lòng với dịch vụ tại Monsterest Inn!',
    'The monster guests are thoroughly delighted with your hospitable inn service!'
)
content = content.replace(
    '<span class="lbl">Chính xác</span>',
    '<span class="lbl">Accuracy</span>'
)
content = content.replace(
    '<span class="lbl">Vàng nhận được</span>',
    '<span class="lbl">Gold Earned</span>'
)
content = content.replace(
    '<span class="lbl">Trái tim kết bạn</span>',
    '<span class="lbl">Friendship Hearts</span>'
)
content = content.replace(
    '<button class="pixel-btn" onclick="app.restartCurrentMode()">🔄 Chơi Lại</button>',
    '<button class="pixel-btn" onclick="app.restartCurrentMode()">🔄 Replay</button>'
)
content = content.replace(
    '<button class="pixel-btn purple" onclick="app.showModeSelect()">📜 Đổi Chế Độ</button>',
    '<button class="pixel-btn purple" onclick="app.showModeSelect()">📜 Change Mode</button>'
)
content = content.replace(
    '<button class="pixel-btn secondary" onclick="app.showHome()">🏠 Sảnh Chính</button>',
    '<button class="pixel-btn secondary" onclick="app.showHome()">🏠 Main Hall</button>'
)

# 7. JavaScript Strings
# Wing descriptions in English
old_wings_js = '''        this.wings = [
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
        ];'''

new_wings_js = '''        this.wings = [
          {
            id: 0,
            title: "Wing 1: Land & Harvest",
            desc: "23 Vocabulary terms on harvest yields, arable lands, barriers, and firm convictions.",
            monster: "🍄 Sprout Sprite",
            range: [1, 23]
          },
          {
            id: 1,
            title: "Wing 2: Guard Post & Citadel",
            desc: "22 Vocabulary terms on defense, meticulous scrutiny, restraint, and treaty accords.",
            monster: "🛡️ Stone Golem",
            range: [24, 45]
          },
          {
            id: 2,
            title: "Wing 3: Secret Grimoire & Insight",
            desc: "23 Vocabulary terms on psychology, intuition, mysteries, and deep discernment.",
            monster: "🔮 Shadow Familiar",
            range: [46, 68]
          },
          {
            id: 3,
            title: "Wing 4: Wild Woods & The Hunt",
            desc: "20 Vocabulary terms on wilderness, elusive beasts, catalysts, and perennial traits.",
            monster: "🦊 Moonlit Kitsune",
            range: [69, 88]
          },
          {
            id: 4,
            title: "Wing 5: Grand Banquet & Destiny",
            desc: "20 Vocabulary terms on lavish feasts, prosperity, social stature, and entirety.",
            monster: "👑 Elder Dragonling",
            range: [89, 108]
          }
        ];'''

content = content.replace(old_wings_js, new_wings_js)

# Progress metadata in renderWings
content = content.replace(
    '<span>Tiến độ: ${pct}%</span>\n                <span>${masteredInWing}/${wingWords.length} Từ</span>',
    '<span>Progress: ${pct}%</span>\n                <span>${masteredInWing}/${wingWords.length} Words</span>'
)

# Flashcard Mastered Button text
content = content.replace(
    "btnMaster.textContent = '⭐ Đã Thuần Phục';",
    "btnMaster.textContent = '⭐ Mastered';"
)
content = content.replace(
    "btnMaster.textContent = '☆ Thuần Phục (+15 🪙)';",
    "btnMaster.textContent = '☆ Master Word (+15 🪙)';"
)

# Quiz titles & Prompts
content = content.replace(
    "type === 'meaning' ? 'Đấu Trường Quái Vật' : 'Nhiệm Vụ Ngữ Cảnh Quán Trọ';",
    "type === 'meaning' ? 'Monster Trial Arena' : 'Tavern Recipe Quest';"
)
content = content.replace(
    'document.getElementById(\'quiz-progress-text\').textContent = `Câu ${this.quizIdx + 1}/${totalQ}`;',
    'document.getElementById(\'quiz-progress-text\').textContent = `Question ${this.quizIdx + 1}/${totalQ}`;'
)
content = content.replace(
    'document.getElementById(\'quiz-prompt-label\').textContent = "Chọn định nghĩa / nghĩa chính xác của từ:";',
    'document.getElementById(\'quiz-prompt-label\').textContent = "Select the correct definition for the target word:";'
)
content = content.replace(
    'document.getElementById(\'quiz-prompt-label\').textContent = "Chọn từ vựng đúng để hoàn thành câu:";',
    'document.getElementById(\'quiz-prompt-label\').textContent = "Select the correct vocabulary word to complete the sentence:";'
)
content = content.replace(
    'expText.innerHTML = `<strong>${q.word.clean_word}</strong>: ${q.word.desc}<br><em>Ví dụ: ${q.word.example || \'N/A\'}</em>`;',
    'expText.innerHTML = `<strong>${q.word.clean_word}</strong>: ${q.word.desc}<br><em>Example: ${q.word.example || \'N/A\'}</em>`;'
)

with open('Lexicode/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully translated all Lexicode instructions and UI to English!")
