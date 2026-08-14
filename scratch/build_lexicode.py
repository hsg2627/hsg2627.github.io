import os
import re

os.makedirs('Lexicode', exist_ok=True)

with open('scratch/index (1).html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Let's add the back button to the top header in Lexicode/index.html
# Find header
old_header_brand = '''      <div class="inn-brand">
        <div class="inn-logo">🏰</div>
        <div class="inn-title">
          <h1>Monsterest Inn & Guild</h1>
          <p>Làm chủ 108 từ vựng Anh ngữ chuẩn Lexicode qua thế giới trò chơi hóa</p>
        </div>
      </div>'''

new_header_brand = '''      <div class="inn-brand">
        <a href="../index.html#hsg12-vocab" class="pixel-btn secondary" style="text-decoration: none; padding: 6px 12px; font-size: 0.8rem; margin-right: 4px;" title="Quay lại English Insiders Portal">⬅️ Portal</a>
        <div class="inn-logo">🏰</div>
        <div class="inn-title">
          <h1>Monsterest Inn & Guild</h1>
          <p>Làm chủ 108 từ vựng Anh ngữ chuẩn Lexicode qua thế giới trò chơi hóa</p>
        </div>
      </div>'''

if old_header_brand in html_content:
    html_content = html_content.replace(old_header_brand, new_header_brand)
else:
    # try regex replacement
    html_content = re.sub(r'(<header class="inn-header">\s*<div class="inn-brand">)', r'\1\n        <a href="../index.html#hsg12-vocab" class="pixel-btn secondary" style="text-decoration: none; padding: 6px 12px; font-size: 0.8rem; margin-right: 4px;" title="Quay lại English Insiders Portal">⬅️ Portal</a>', html_content)

# Add sound toggle button in stats bar
old_stats = '''      <div class="inn-stats">'''
new_stats = '''      <div class="inn-stats">
        <button id="btn-sound-toggle" class="stat-badge" onclick="app.toggleSound()" style="cursor: pointer; background: var(--panel-card); border: 2px solid var(--panel-border);" title="Bật/Tắt âm thanh">
          <span class="icon" id="sound-icon">🔊</span>
          <span class="val" style="font-size: 0.85rem; font-family: var(--font-body);">SFX</span>
        </button>'''

if old_stats in html_content:
    html_content = html_content.replace(old_stats, new_stats, 1)

# Ensure toggleSound is present in MonsterestApp class
if 'toggleSound()' not in html_content:
    html_content = html_content.replace(
        'class MonsterestApp {',
        '''class MonsterestApp {
    toggleSound() {
      if (this.audio) {
        this.audio.enabled = !this.audio.enabled;
        const icon = document.getElementById('sound-icon');
        if (icon) icon.textContent = this.audio.enabled ? '🔊' : '🔇';
      }
    }'''
    )

# Also ensure sound engine respects enabled flag
if 'this.enabled = true;' not in html_content:
    html_content = html_content.replace(
        'class SoundFX {',
        '''class SoundFX {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
    }'''
    )
    # update playTone
    html_content = html_content.replace(
        'playTone(freq, type = \'square\', duration = 0.1, gainVal = 0.1) {',
        '''playTone(freq, type = \'square\', duration = 0.1, gainVal = 0.1) {
      if (!this.enabled) return;'''
    )

with open('Lexicode/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Created Lexicode/index.html successfully. Size:", len(html_content))
