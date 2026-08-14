# -*- coding: utf-8 -*-
import json
import re

# Extract data directly from index.html
with open('c:/hsg2627.github.io/index.html', 'r', encoding='utf-8') as f:
    html_src = f.read()

p_v_start = html_src.find('const FULL_VOCAB_DATABASE = [')
p_v_end = html_src.find('\n];\n              const FULL_IDIOM_DATABASE', p_v_start)

vocab_json_str = html_src[p_v_start + len('const FULL_VOCAB_DATABASE = '): p_v_end + 2]
final_data = json.loads(vocab_json_str)

p_i_start = html_src.find('const FULL_IDIOM_DATABASE = [')
p_i_end = html_src.find('\n];\n\n              let currentTopicFilter =', p_i_start)
idiom_json_str = html_src[p_i_start + len('const FULL_IDIOM_DATABASE = '): p_i_end + 2]
IDIOM_TESTS = json.loads(idiom_json_str)

print(f"Successfully parsed {len(final_data)} vocab items and {len(IDIOM_TESTS)} idiom test items from index.html.")

# Translate any remaining Vietnamese hints/explanations to clean English for the quest mode
for item in final_data:
    # Ensure English hint & explanation
    hint_clean = item.get('hint', '')
    if '|' in hint_clean:
        hint_clean = hint_clean.split('|')[0].strip()
    item['hintEn'] = hint_clean
    item['explanationEn'] = f"Correct! '{item['verb']}' means {item['meaningEn']}."

for idiom in IDIOM_TESTS:
    idiom['explanationEn'] = f"Correct! '{idiom['options'][idiom['correct']]}' is the correct idiom for this context."

final_data_json = json.dumps(final_data, ensure_ascii=False, indent=2)
idiom_data_json = json.dumps(IDIOM_TESTS, ensure_ascii=False, indent=2)

# 1. CATEGORY HSG 12 VOCAB VIEW (Folder directory containing Destination C1&C2)
vocab_hub_html = '''        <!-- ==================== VIEW 6A: VOCABULARY CATEGORY HUB ==================== -->
        <section id="category-hsg12-vocab-view" class="view-panel">
          <!-- Featured Banner for Vocabulary Hub -->
          <article class="category-card" style="margin-bottom: 2rem; cursor: default; background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);">
            <div class="card-top">
              <div style="width: 90px; height: 90px; background: rgba(255,255,255,0.1); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 48px; border: 2px solid rgba(255,255,255,0.2);">
                📘
              </div>
              <div class="card-info">
                <span class="card-badge" style="background: #3B82F6;">HSG 12 CURRICULUM</span>
                <h1 class="card-title" style="font-size: 2rem; color: #FFF; margin: 6px 0;">Vocabulary Modules</h1>
                <p style="color: #94A3B8; font-size: 14px; margin: 0;">Comprehensive Lexical & Idiomatic Systems for Advanced English Exams</p>
              </div>
            </div>
          </article>

          <!-- Vocabulary Subfolders Grid -->
          <div class="folder-grid">
            
            <!-- Subfolder 1: Destination C1&C2 - Phrasal Verbs -->
            <article class="folder-card" data-target="task-hsg12-vocab" data-label="HSG 12 / Vocabulary / Destination C1&C2 - Phrasal Verbs" style="border-left: 6px solid #C83E2B;">
              <div>
                <div class="folder-icon" style="background: #FEF2F2; color: #DC2626;">🐾</div>
                <div class="folder-name">Destination C1&C2 - Phrasal Verbs</div>
                <div class="folder-path">📌 HSG 12 / Vocabulary / Destination C1&C2 - Phrasal Verbs</div>
                <p style="font-size: 13px; color: #64748B; margin: 8px 0 0 0; line-height: 1.4;">
                  Interactive Meiji-era simulation featuring 137 phrasal verbs across 13 units & 22 idioms practice tests.
                </p>
              </div>
              <div class="folder-meta" style="margin-top: 14px;">
                <span class="type-badge" style="background: #FEE2E2; color: #991B1B;">13 Units / 137 Verbs</span>
                <span class="arrow-text" style="color: #C83E2B; font-weight: 700;">Open Game →</span>
              </div>
            </article>

          </div>
        </section>
'''

# 2. GAME SECTION (task-hsg12-vocab) with 100% English UI
game_html = f'''        <!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 (DESTINATION C1&C2) ==================== -->
        <section id="task-hsg12-vocab" class="view-panel task-view" style="padding: 0; margin: 0; width: 100%; max-width: 100%;">
          <div id="neko-michi-vocab-root">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Kiwi+Maru:wght@500&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Yuji+Syuku&display=swap');

              #neko-michi-vocab-root {{
                --meiji-wood-dark: #2B1810;
                --meiji-wood-mid: #4A2E1B;
                --meiji-wood-light: #8D6E63;
                --meiji-washi: #FAF6EF;
                --meiji-tatami: #E8E2D0;
                --meiji-indigo: #1B2A4A;
                --meiji-vermilion: #C83E2B;
                --meiji-matcha: #2E5A36;
                --meiji-gold: #D4AF37;
                --meiji-koban: #F59E0B;
                --meiji-sakura: #FCE7F3;
                --meiji-border: #3D2214;
                --font-heading: 'Fredoka', cursive, sans-serif;
                --font-japanese: 'Kiwi Maru', serif;
                --font-body: 'Plus Jakarta Sans', sans-serif;
                
                font-family: var(--font-body);
                background: radial-gradient(circle at center, #352117 0%, #1D110B 100%);
                color: #2D1A10;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 800px;
                padding: 16px;
                border-radius: 20px;
                box-sizing: border-box;
                width: 100%;
                position: relative;
                box-shadow: inset 0 0 40px rgba(0,0,0,0.6);
              }}

              #neko-michi-vocab-root * {{
                box-sizing: border-box;
                user-select: none;
              }}

              #neko-michi-vocab-root #game-container {{
                width: 100%;
                max-width: 1140px;
                height: 780px;
                background: linear-gradient(180deg, #FDE6D2 0%, #FDF3E7 55%, #E5EFE3 100%);
                border: 10px solid var(--meiji-wood-dark);
                border-radius: 28px;
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6), 0 0 0 2px var(--meiji-gold);
                transition: background 0.5s ease;
              }}

              /* Meiji Era Day/Night themes */
              #neko-michi-vocab-root #game-container.theme-dusk {{
                background: linear-gradient(180deg, #F97316 0%, #FB923C 30%, #FDE047 65%, #C2410C 100%);
              }}
              #neko-michi-vocab-root #game-container.theme-night {{
                background: linear-gradient(180deg, #0F172A 0%, #1E1B4B 40%, #312E81 75%, #1E293B 100%);
              }}

              /* Corner Ornaments (Kanagu) */
              #neko-michi-vocab-root .kanagu-corner {{
                position: absolute;
                width: 24px;
                height: 24px;
                border: 4px solid var(--meiji-gold);
                z-index: 40;
                pointer-events: none;
              }}
              #neko-michi-vocab-root .kanagu-tl {{ top: 6px; left: 6px; border-right: none; border-bottom: none; border-top-left-radius: 8px; }}
              #neko-michi-vocab-root .kanagu-tr {{ top: 6px; right: 6px; border-left: none; border-bottom: none; border-top-right-radius: 8px; }}
              #neko-michi-vocab-root .kanagu-bl {{ bottom: 6px; left: 6px; border-right: none; border-top: none; border-bottom-left-radius: 8px; }}
              #neko-michi-vocab-root .kanagu-br {{ bottom: 6px; right: 6px; border-left: none; border-top: none; border-bottom-right-radius: 8px; }}

              /* Top Meiji HUD */
              #neko-michi-vocab-root #top-hud {{
                min-height: 80px;
                background: rgba(250, 246, 239, 0.95);
                backdrop-filter: blur(12px);
                border-bottom: 5px solid var(--meiji-border);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 22px;
                gap: 12px;
                flex-wrap: wrap;
                z-index: 20;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              }}

              #neko-michi-vocab-root .hud-brand {{
                display: flex;
                align-items: center;
                gap: 12px;
              }}

              #neko-michi-vocab-root .brand-crest {{
                width: 46px;
                height: 46px;
                background: var(--meiji-vermilion);
                border: 3px solid var(--meiji-border);
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                box-shadow: 0 3px 0 var(--meiji-border), inset 0 0 6px rgba(0,0,0,0.2);
              }}

              #neko-michi-vocab-root .brand-text-title {{
                font-family: var(--font-heading);
                font-size: 20px;
                font-weight: 700;
                color: var(--meiji-wood-dark);
                margin: 0;
                display: flex;
                align-items: center;
                gap: 6px;
              }}

              #neko-michi-vocab-root .brand-subtitle {{
                font-size: 12px;
                color: var(--meiji-wood-light);
                font-weight: 700;
                margin: 2px 0 0 0;
                letter-spacing: 0.5px;
              }}

              #neko-michi-vocab-root .hud-btn-group {{
                display: flex;
                align-items: center;
                gap: 8px;
                flex-wrap: wrap;
              }}

              #neko-michi-vocab-root .meiji-nav-btn {{
                background: #FFF;
                color: var(--meiji-wood-dark);
                border: 2.5px solid var(--meiji-border);
                border-radius: 12px;
                padding: 6px 14px;
                font-size: 13px;
                font-weight: 800;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 3px 0 var(--meiji-border);
                transition: all 0.15s ease;
              }}

              #neko-michi-vocab-root .meiji-nav-btn.btn-verbs {{
                background: var(--meiji-matcha);
                color: #FFF;
              }}
              #neko-michi-vocab-root .meiji-nav-btn.btn-idioms {{
                background: #6D28D9;
                color: #FFF;
              }}
              #neko-michi-vocab-root .meiji-nav-btn.btn-time {{
                background: #FEF3C7;
                color: #92400E;
              }}

              #neko-michi-vocab-root .meiji-nav-btn:hover {{
                transform: translateY(-2px);
                box-shadow: 0 5px 0 var(--meiji-border);
                filter: brightness(1.08);
              }}
              #neko-michi-vocab-root .meiji-nav-btn:active {{
                transform: translateY(2px);
                box-shadow: 0 1px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .hud-stats-bar {{
                display: flex;
                gap: 8px;
                align-items: center;
                flex-wrap: wrap;
              }}

              #neko-michi-vocab-root .meiji-stat-pill {{
                background: #FFF;
                border: 2.5px solid var(--meiji-border);
                border-radius: 12px;
                padding: 5px 12px;
                font-size: 13px;
                font-weight: 800;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 2px 0 var(--meiji-border);
              }}
              #neko-michi-vocab-root .meiji-stat-pill.unit-status {{
                background: #FEF9C3;
                border-color: #CA8A04;
                color: #854D0E;
              }}

              /* Viewport Canvas */
              #neko-michi-vocab-root #street-viewport {{
                flex: 1;
                position: relative;
                cursor: pointer;
                overflow: hidden;
              }}

              #neko-michi-vocab-root canvas#street-canvas {{
                display: block;
                width: 100%;
                height: 100%;
              }}

              /* Bottom Shop Toolbar */
              #neko-michi-vocab-root #bottom-toolbar {{
                min-height: 74px;
                background: rgba(250, 246, 239, 0.96);
                backdrop-filter: blur(12px);
                border-top: 5px solid var(--meiji-border);
                display: flex;
                align-items: center;
                padding: 8px 16px;
                gap: 8px;
                overflow-x: auto;
                z-index: 20;
                box-shadow: 0 -4px 12px rgba(0,0,0,0.08);
              }}

              #neko-michi-vocab-root #bottom-toolbar::-webkit-scrollbar {{
                height: 6px;
              }}
              #neko-michi-vocab-root #bottom-toolbar::-webkit-scrollbar-thumb {{
                background: var(--meiji-wood-light);
                border-radius: 4px;
              }}

              #neko-michi-vocab-root .machiya-tab-btn {{
                background: #FFF;
                border: 2.5px solid var(--meiji-border);
                border-radius: 12px;
                padding: 6px 12px;
                font-size: 13px;
                font-weight: 800;
                color: var(--meiji-wood-dark);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 3px 0 var(--meiji-border);
                transition: all 0.15s ease;
                white-space: nowrap;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .machiya-tab-btn .kanji-stamp {{
                background: #FEE2E2;
                color: var(--meiji-vermilion);
                padding: 1px 5px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: 900;
              }}

              #neko-michi-vocab-root .machiya-tab-btn.active {{
                background: #FEF3C7;
                border-color: #D97706;
                color: #92400E;
                transform: translateY(2px);
                box-shadow: 0 1px 0 #D97706;
              }}
              #neko-michi-vocab-root .machiya-tab-btn.active .kanji-stamp {{
                background: #B45309;
                color: #FFF;
              }}

              #neko-michi-vocab-root .machiya-tab-btn:hover {{
                background: #FFF8EE;
                transform: translateY(-2px);
                box-shadow: 0 5px 0 var(--meiji-border);
              }}

              /* Modals Backdrop & Base */
              #neko-michi-vocab-root .modal-backdrop {{
                position: absolute;
                inset: 0;
                background: rgba(35, 20, 15, 0.72);
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                z-index: 60;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.25s ease;
                backdrop-filter: blur(4px);
              }}

              #neko-michi-vocab-root .modal-backdrop.active {{
                opacity: 1;
                pointer-events: auto;
              }}

              /* Quest Counter Card (Machiya Interior) */
              #neko-michi-vocab-root .quest-card {{
                background: #FFFDF9;
                border: 5px solid var(--meiji-border);
                border-radius: 26px;
                width: 100%;
                max-width: 760px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 26px 32px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 2px var(--meiji-gold);
                transform: translateY(20px) scale(0.95);
                transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
                display: flex;
                flex-direction: column;
                gap: 16px;
                position: relative;
              }}

              #neko-michi-vocab-root .quest-header {{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px dashed var(--meiji-wood-light);
                padding-bottom: 14px;
              }}

              #neko-michi-vocab-root .quest-speaker {{
                display: flex;
                align-items: center;
                gap: 14px;
              }}

              #neko-michi-vocab-root .speaker-avatar {{
                width: 54px;
                height: 54px;
                background: #FFF7ED;
                border: 3px solid var(--meiji-border);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                box-shadow: 0 4px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .speaker-info h3 {{
                margin: 0;
                font-family: var(--font-heading);
                font-size: 20px;
                color: var(--meiji-wood-dark);
              }}

              #neko-michi-vocab-root .speaker-info p {{
                margin: 2px 0 0 0;
                font-size: 13px;
                color: var(--meiji-vermilion);
                font-weight: 700;
              }}

              #neko-michi-vocab-root .unit-tag {{
                background: var(--meiji-vermilion);
                color: #FFF;
                font-weight: 800;
                font-size: 12px;
                padding: 5px 12px;
                border-radius: 10px;
                border: 2px solid var(--meiji-border);
                box-shadow: 0 3px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .sentence-text {{
                font-size: 18px;
                font-weight: 700;
                line-height: 1.6;
                color: var(--meiji-wood-dark);
                background: #FFF;
                padding: 18px 22px;
                border: 3.5px solid var(--meiji-border);
                border-radius: 18px;
                box-shadow: 0 5px 0 var(--meiji-border);
                margin: 0;
              }}

              #neko-michi-vocab-root .sentence-text span.blank {{
                color: var(--meiji-vermilion);
                font-weight: 900;
                text-decoration: underline;
                text-decoration-thickness: 3px;
                padding: 0 4px;
              }}

              #neko-michi-vocab-root .gloss-hint {{
                font-size: 13.5px;
                color: #4B5563;
                margin-top: 8px;
                font-style: italic;
                padding-left: 8px;
              }}

              #neko-michi-vocab-root .options-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
              }}

              #neko-michi-vocab-root .opt-btn {{
                background: #FFF;
                border: 3px solid var(--meiji-border);
                border-radius: 14px;
                padding: 13px 18px;
                font-family: var(--font-body);
                font-size: 15px;
                font-weight: 800;
                color: var(--meiji-wood-dark);
                cursor: pointer;
                box-shadow: 0 4px 0 var(--meiji-border);
                transition: all 0.15s ease;
                text-align: left;
              }}

              #neko-michi-vocab-root .opt-btn:hover {{
                background: #FEF3C7;
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .opt-btn.correct {{
                background: #D1FAE5 !important;
                border-color: #059669 !important;
                color: #065F46 !important;
                box-shadow: 0 4px 0 #059669 !important;
              }}

              #neko-michi-vocab-root .opt-btn.wrong {{
                background: #FEE2E2 !important;
                border-color: #DC2626 !important;
                color: #991B1B !important;
                box-shadow: 0 4px 0 #DC2626 !important;
              }}

              #neko-michi-vocab-root .feedback-box {{
                display: none;
                padding: 14px 18px;
                border-radius: 14px;
                font-size: 14.5px;
                font-weight: 700;
                line-height: 1.5;
              }}

              #neko-michi-vocab-root .feedback-box.correct {{
                display: block;
                background: #ECFDF5;
                border: 2.5px solid #059669;
                color: #065F46;
              }}

              #neko-michi-vocab-root .feedback-box.wrong {{
                display: block;
                background: #FEF2F2;
                border: 2.5px solid #DC2626;
                color: #991B1B;
              }}

              #neko-michi-vocab-root .btn-next {{
                background: var(--meiji-koban);
                color: #2B1810;
                border: 3px solid var(--meiji-border);
                border-radius: 12px;
                padding: 10px 24px;
                font-family: var(--font-heading);
                font-size: 16px;
                font-weight: 800;
                cursor: pointer;
                box-shadow: 0 4px 0 var(--meiji-border);
                transition: all 0.15s ease;
                display: none;
              }}

              #neko-michi-vocab-root .btn-next:hover {{
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .btn-close-quest {{
                background: #F3F4F6;
                color: #4B5563;
                border: 2.5px solid var(--meiji-border);
                border-radius: 12px;
                padding: 10px 20px;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
                box-shadow: 0 3px 0 var(--meiji-border);
                transition: all 0.15s ease;
              }}

              /* Grand Lexicon & Idioms Modals */
              #neko-michi-vocab-root .dict-modal-card,
              #neko-michi-vocab-root .idiom-modal-card {{
                background: #FFFDF9;
                border: 5px solid var(--meiji-border);
                border-radius: 26px;
                width: 100%;
                max-width: 980px;
                height: 90vh;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                box-shadow: 0 24px 50px rgba(0,0,0,0.6), inset 0 0 0 2px var(--meiji-gold);
                overflow: hidden;
                transform: translateY(20px) scale(0.95);
                transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
              }}

              #neko-michi-vocab-root .modal-backdrop.active .quest-card,
              #neko-michi-vocab-root .modal-backdrop.active .dict-modal-card,
              #neko-michi-vocab-root .modal-backdrop.active .idiom-modal-card {{
                transform: translateY(0) scale(1);
              }}

              #neko-michi-vocab-root .dict-header,
              #neko-michi-vocab-root .idiom-header {{
                padding: 18px 26px;
                background: #FAF5EE;
                border-bottom: 4px solid var(--meiji-border);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .dict-filter-row,
              #neko-michi-vocab-root .idiom-filter-row {{
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                padding: 10px 22px;
                background: #FDF9F3;
                border-bottom: 2px solid #E5E7EB;
                flex-shrink: 0;
                overflow-y: auto;
                max-height: 90px;
              }}

              #neko-michi-vocab-root .dict-search-row {{
                padding: 8px 22px;
                background: #FFF;
                border-bottom: 2px solid #E5E7EB;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .dict-search-input {{
                width: 100%;
                padding: 9px 16px;
                border: 2.5px solid var(--meiji-border);
                border-radius: 12px;
                font-family: var(--font-body);
                font-size: 14px;
                font-weight: 600;
                background: #FFFDF9;
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
              }}

              #neko-michi-vocab-root .dict-tab-btn,
              #neko-michi-vocab-root .idiom-tab-btn {{
                background: #FFF;
                border: 2px solid var(--meiji-border);
                border-radius: 10px;
                padding: 5px 11px;
                font-size: 12.5px;
                font-weight: 800;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.15s ease;
                box-shadow: 0 2px 0 var(--meiji-border);
              }}

              #neko-michi-vocab-root .dict-tab-btn.active {{
                background: var(--meiji-vermilion);
                color: #FFF;
                box-shadow: 0 1px 0 var(--meiji-border);
                transform: translateY(1px);
              }}
              #neko-michi-vocab-root .idiom-tab-btn.active {{
                background: #6D28D9;
                color: #FFF;
                box-shadow: 0 1px 0 var(--meiji-border);
                transform: translateY(1px);
              }}

              #neko-michi-vocab-root .dict-body,
              #neko-michi-vocab-root .idiom-body {{
                flex: 1 1 auto;
                min-height: 0;
                overflow-y: auto;
                padding: 20px 26px;
                display: flex;
                flex-direction: column;
                gap: 14px;
              }}

              #neko-michi-vocab-root .dict-item-card {{
                background: #FFF;
                border: 2.5px solid #E5E7EB;
                border-left: 6px solid var(--meiji-matcha);
                border-radius: 14px;
                padding: 14px 18px;
                display: flex;
                flex-direction: column;
                gap: 6px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.03);
              }}

              #neko-michi-vocab-root .dict-verb {{
                font-family: var(--font-heading);
                font-size: 19px;
                font-weight: 800;
                color: var(--meiji-vermilion);
              }}

              #neko-michi-vocab-root .dict-unit-badge {{
                font-size: 12px;
                background: #F3F4F6;
                padding: 3px 10px;
                border-radius: 8px;
                font-weight: 800;
                color: #374151;
                border: 1px solid #D1D5DB;
              }}

              #neko-michi-vocab-root .idiom-test-card {{
                background: #FFF;
                border: 2.5px solid #E5E7EB;
                border-left: 6px solid #7C3AED;
                border-radius: 16px;
                padding: 18px 22px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                box-shadow: 0 3px 6px rgba(0,0,0,0.04);
              }}

              #neko-michi-vocab-root .idiom-opt-btn {{
                background: #F9FAFB;
                border: 2px solid #D1D5DB;
                border-radius: 10px;
                padding: 11px 16px;
                font-size: 14.5px;
                font-weight: 700;
                color: #374151;
                cursor: pointer;
                text-align: left;
                transition: all 0.15s ease;
              }}
              #neko-michi-vocab-root .idiom-opt-btn:hover {{
                background: #EDE9FE;
                border-color: #7C3AED;
                color: #5B21B6;
              }}
              #neko-michi-vocab-root .idiom-opt-btn.correct {{
                background: #D1FAE5 !important;
                border-color: #059669 !important;
                color: #065F46 !important;
              }}
              #neko-michi-vocab-root .idiom-opt-btn.wrong {{
                background: #FEE2E2 !important;
                border-color: #DC2626 !important;
                color: #991B1B !important;
              }}
            </style>

            <div id="game-container">
              <!-- Corner kanagu decorations -->
              <div class="kanagu-corner kanagu-tl"></div>
              <div class="kanagu-corner kanagu-tr"></div>
              <div class="kanagu-corner kanagu-bl"></div>
              <div class="kanagu-corner kanagu-br"></div>

              <!-- Top Meiji HUD (100% English) -->
              <header id="top-hud">
                <div class="hud-brand">
                  <div class="brand-crest">🐾</div>
                  <div>
                    <h2 class="brand-text-title">猫道 NEKO MICHI <span style="font-size: 14px; color: var(--meiji-gold);">✦ Meiji Cat Town</span></h2>
                    <p class="brand-subtitle">Destination C1&C2 • Phrasal Verbs & Idioms Simulation</p>
                  </div>
                </div>

                <div class="hud-btn-group">
                  <button class="meiji-nav-btn btn-verbs" onclick="openHandbookModal()">
                    <span>📜</span> Grand Lexicon (137 Verbs)
                  </button>
                  <button class="meiji-nav-btn btn-idioms" onclick="openIdiomModal()">
                    <span>🎭</span> Idioms Arena (22 Tests)
                  </button>
                  <button class="meiji-nav-btn btn-time" id="btn-toggle-time" onclick="toggleTimeOfDay()">
                    <span id="time-icon">☀️</span> <span id="time-text">Daytime</span>
                  </button>
                </div>

                <div class="hud-stats-bar">
                  <div class="meiji-stat-pill unit-status" id="active-unit-badge">
                    <span>📍</span> <span id="current-unit-display">All Units (137 verbs)</span>
                  </div>
                  <div class="meiji-stat-pill">
                    <span>🪙</span> <span id="coin-counter">240</span> Koban
                  </div>
                  <div class="meiji-stat-pill">
                    <span>🌸</span> <span id="harmony-counter">96%</span> Harmony
                  </div>
                </div>
              </header>

              <!-- Main Interactive Viewport -->
              <main id="street-viewport">
                <canvas id="street-canvas"></canvas>
              </main>

              <!-- Bottom Machiya Selection Toolbar -->
              <footer id="bottom-toolbar">
                <button class="machiya-tab-btn active" id="filter-btn-all" onclick="setTopicFilter('all')">
                  <span class="kanji-stamp">ALL</span> 🌟 All Units
                </button>
                <button class="machiya-tab-btn" id="filter-btn-2" onclick="setTopicFilter(2)">
                  <span class="kanji-stamp">U2</span> 📜 U2 (Learn)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-4" onclick="setTopicFilter(4)">
                  <span class="kanji-stamp">U4</span> ⚙️ U4 (Tech)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-6" onclick="setTopicFilter(6)">
                  <span class="kanji-stamp">U6</span> 🍵 U6 (Work)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-8" onclick="setTopicFilter(8)">
                  <span class="kanji-stamp">U8</span> 🐎 U8 (Travel)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-10" onclick="setTopicFilter(10)">
                  <span class="kanji-stamp">U10</span> 📢 U10 (Media)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-12" onclick="setTopicFilter(12)">
                  <span class="kanji-stamp">U12</span> 🎲 U12 (Nature)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-14" onclick="setTopicFilter(14)">
                  <span class="kanji-stamp">U14</span> 🪙 U14 (Money)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-16" onclick="setTopicFilter(16)">
                  <span class="kanji-stamp">U16</span> 🏛️ U16 (Built)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-18" onclick="setTopicFilter(18)">
                  <span class="kanji-stamp">U18</span> 🩺 U18 (Health)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-20" onclick="setTopicFilter(20)">
                  <span class="kanji-stamp">U20</span> ⚖️ U20 (Power)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-22" onclick="setTopicFilter(22)">
                  <span class="kanji-stamp">U22</span> 🎨 U22 (Arts)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-24" onclick="setTopicFilter(24)">
                  <span class="kanji-stamp">U24</span> 🌸 U24 (People)
                </button>
                <button class="machiya-tab-btn" id="filter-btn-26" onclick="setTopicFilter(26)">
                  <span class="kanji-stamp">U26</span> 🎮 U26 (Leisure)
                </button>
              </footer>

              <!-- Interactive Quest Modal -->
              <div id="quest-modal" class="modal-backdrop">
                <div class="quest-card">
                  <div class="quest-header">
                    <div class="quest-speaker">
                      <div class="speaker-avatar" id="modal-cat-avatar">🎓</div>
                      <div class="speaker-info">
                        <h3 id="modal-cat-name">Master Kuro</h3>
                        <p id="modal-shop-name">Scholar Academy Quest</p>
                      </div>
                    </div>
                    <div class="unit-tag" id="modal-unit-tag">Unit 2: Thinking & Learning</div>
                  </div>

                  <div class="quest-body">
                    <span style="font-size: 13px; font-weight: 800; color: var(--meiji-matcha); text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-bottom: 6px;">
                      ✦ Phrasal Verb Challenge: Choose the best option
                    </span>
                    <p class="sentence-text" id="modal-sentence">
                      I have an examination tomorrow; I must <span class="blank">_______</span> my literature notes tonight.
                    </p>
                    <div class="gloss-hint" id="modal-hint">💡 Hint: practice and improve your skills or knowledge</div>
                  </div>

                  <div class="options-grid" id="modal-options"></div>

                  <div class="feedback-box" id="modal-feedback"></div>

                  <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 4px;">
                    <button class="btn-close-quest" onclick="closeQuestModal()">Close</button>
                    <button class="btn-next" id="modal-next-btn" onclick="nextQuestInFilter()">Next Quest ➔</button>
                  </div>
                </div>
              </div>

              <!-- Grand Lexicon / Handbook Modal -->
              <div id="dict-modal" class="modal-backdrop">
                <div class="dict-modal-card">
                  <div class="dict-header">
                    <div>
                      <h3 style="font-family: var(--font-heading); font-size: 22px; color: var(--meiji-wood-dark); margin:0;">
                        📚 Destination C1 & C2: Grand Lexicon
                      </h3>
                      <p style="font-size: 13px; color: #6B7280; margin: 4px 0 0 0;">
                        Complete 13 Topics (137 Phrasal Verbs) with English definitions, Vietnamese translations & context
                      </p>
                    </div>
                    <button class="btn-close-quest" onclick="closeHandbookModal()">✕ Close</button>
                  </div>

                  <div class="dict-filter-row">
                    <button class="dict-tab-btn active" id="dict-tab-all" onclick="filterHandbook('all')">All (137 Verbs)</button>
                    <button class="dict-tab-btn" id="dict-tab-2" onclick="filterHandbook(2)">U2 (Learn)</button>
                    <button class="dict-tab-btn" id="dict-tab-4" onclick="filterHandbook(4)">U4 (Tech)</button>
                    <button class="dict-tab-btn" id="dict-tab-6" onclick="filterHandbook(6)">U6 (Work)</button>
                    <button class="dict-tab-btn" id="dict-tab-8" onclick="filterHandbook(8)">U8 (Travel)</button>
                    <button class="dict-tab-btn" id="dict-tab-10" onclick="filterHandbook(10)">U10 (Media)</button>
                    <button class="dict-tab-btn" id="dict-tab-12" onclick="filterHandbook(12)">U12 (Nature)</button>
                    <button class="dict-tab-btn" id="dict-tab-14" onclick="filterHandbook(14)">U14 (Money)</button>
                    <button class="dict-tab-btn" id="dict-tab-16" onclick="filterHandbook(16)">U16 (Built)</button>
                    <button class="dict-tab-btn" id="dict-tab-18" onclick="filterHandbook(18)">U18 (Health)</button>
                    <button class="dict-tab-btn" id="dict-tab-20" onclick="filterHandbook(20)">U20 (Power)</button>
                    <button class="dict-tab-btn" id="dict-tab-22" onclick="filterHandbook(22)">U22 (Arts)</button>
                    <button class="dict-tab-btn" id="dict-tab-24" onclick="filterHandbook(24)">U24 (People)</button>
                    <button class="dict-tab-btn" id="dict-tab-26" onclick="filterHandbook(26)">U26 (Leisure)</button>
                  </div>

                  <div class="dict-search-row">
                    <input type="text" id="dict-search" class="dict-search-input" placeholder="🔍 Search phrasal verbs, English definitions, or keywords..." oninput="searchHandbook(this.value)">
                  </div>

                  <div class="dict-body" id="dict-items-container">
                    <!-- Populated dynamically via JS -->
                  </div>
                </div>
              </div>

              <!-- Idioms Practice Tests Modal -->
              <div id="idiom-modal" class="modal-backdrop">
                <div class="idiom-modal-card">
                  <div class="idiom-header">
                    <div>
                      <h3 style="font-family: var(--font-heading); font-size: 22px; color: #6D28D9; margin:0;">
                        🎭 Destination C1 & C2: Idioms Arena
                      </h3>
                      <p style="font-size: 13px; color: #6B7280; margin: 4px 0 0 0;">
                        22 Multiple-choice practice questions with instant scoring & explanations (Unit 2 & Unit 4)
                      </p>
                    </div>
                    <button class="btn-close-quest" onclick="closeIdiomModal()">✕ Close</button>
                  </div>

                  <div class="idiom-filter-row">
                    <button class="idiom-tab-btn active" id="idiom-tab-all" onclick="filterIdioms('all')">All (22 Tests)</button>
                    <button class="idiom-tab-btn" id="idiom-tab-2" onclick="filterIdioms(2)">Unit 2: Thinking & Learning (12 Qs)</button>
                    <button class="idiom-tab-btn" id="idiom-tab-4" onclick="filterIdioms(4)">Unit 4: Change & Tech (10 Qs)</button>
                  </div>

                  <div class="idiom-body" id="idiom-items-container">
                    <!-- Populated dynamically via JS -->
                  </div>
                </div>
              </div>

            </div>

            <script>
              // Complete Destination C1 & C2 Database
              const FULL_VOCAB_DATABASE = {final_data_json};
              const FULL_IDIOM_DATABASE = {idiom_data_json};

              let currentTopicFilter = 'all';
              let currentFilteredQuests = [...FULL_VOCAB_DATABASE];
              let currentDictList = [...FULL_VOCAB_DATABASE];
              let timeMode = 'day'; // 'day', 'dusk', 'night'

              let gameState = {{
                coins: 240,
                harmony: 96,
                activeQuest: null
              }};

              const canvas = document.getElementById('street-canvas');
              const ctx = canvas ? canvas.getContext('2d') : null;
              let cats = [];
              let sakuraPetals = [];

              function resizeCanvas() {{
                if (!canvas || !canvas.parentElement) return;
                const w = canvas.parentElement.clientWidth;
                const h = canvas.parentElement.clientHeight;
                if (w > 0 && h > 0) {{
                  canvas.width = w;
                  canvas.height = h;
                }}
              }}
              window.addEventListener('resize', resizeCanvas);
              resizeCanvas();

              // Sakura Petals particle system
              function initSakura() {{
                sakuraPetals = [];
                for (let i = 0; i < 30; i++) {{
                  sakuraPetals.push({{
                    x: Math.random() * 1200,
                    y: Math.random() * 600,
                    size: Math.random() * 7 + 5,
                    speedX: Math.random() * 1.5 + 0.8,
                    speedY: Math.random() * 1.2 + 0.6,
                    sway: Math.random() * Math.PI * 2,
                    swaySpeed: Math.random() * 0.04 + 0.02,
                    opacity: Math.random() * 0.5 + 0.4
                  }});
                }}
              }}
              initSakura();

              class CatVillager {{
                constructor(x, y, speed, name, sprite, unit, phrase, catColor) {{
                  this.x = x;
                  this.y = y;
                  this.speed = speed;
                  this.name = name;
                  this.sprite = sprite;
                  this.unit = unit;
                  this.phrase = phrase;
                  this.catColor = catColor || "#EA580C";
                  this.bobble = Math.random() * Math.PI;
                  this.hasQuest = true;
                  this.dialogueTimer = Math.random() * 200;
                  this.showBubble = false;
                }}

                update() {{
                  this.x += this.speed;
                  this.bobble += 0.08;
                  this.dialogueTimer++;
                  if (this.dialogueTimer > 320) {{
                    this.showBubble = !this.showBubble;
                    this.dialogueTimer = 0;
                  }}
                  const w = (canvas && canvas.width > 0) ? canvas.width : 1100;
                  if (this.x > w + 80) this.x = -80;
                  if (this.x < -80) this.x = w + 80;
                }}

                draw() {{
                  if (!ctx) return;
                  ctx.save();
                  const offsetY = Math.sin(this.bobble) * 4;
                  const cx = this.x + 28;
                  const cy = this.y + 35 + offsetY;

                  // Soft Shadow
                  ctx.fillStyle = "rgba(43, 24, 16, 0.25)";
                  ctx.beginPath();
                  ctx.ellipse(cx, this.y + 54, 26, 8, 0, 0, Math.PI * 2);
                  ctx.fill();

                  // Cute Illustrated Cat Body
                  ctx.fillStyle = this.catColor;
                  ctx.beginPath();
                  ctx.ellipse(cx, cy + 6, 20, 16, 0, 0, Math.PI * 2);
                  ctx.fill();

                  // Cat Ears
                  ctx.beginPath();
                  ctx.moveTo(cx - 16, cy - 8);
                  ctx.lineTo(cx - 22, cy - 26);
                  ctx.lineTo(cx - 8, cy - 14);
                  ctx.closePath();
                  ctx.fill();

                  ctx.beginPath();
                  ctx.moveTo(cx + 16, cy - 8);
                  ctx.lineTo(cx + 22, cy - 26);
                  ctx.lineTo(cx + 8, cy - 14);
                  ctx.closePath();
                  ctx.fill();

                  // Inner ears
                  ctx.fillStyle = "#FBCFE8";
                  ctx.beginPath();
                  ctx.moveTo(cx - 15, cy - 9);
                  ctx.lineTo(cx - 19, cy - 22);
                  ctx.lineTo(cx - 9, cy - 14);
                  ctx.closePath();
                  ctx.fill();

                  ctx.beginPath();
                  ctx.moveTo(cx + 15, cy - 9);
                  ctx.lineTo(cx + 19, cy - 22);
                  ctx.lineTo(cx + 9, cy - 14);
                  ctx.closePath();
                  ctx.fill();

                  // Cat Eyes & Whiskers
                  ctx.fillStyle = "#1E293B";
                  ctx.beginPath();
                  ctx.arc(cx - 7, cy - 2, 3, 0, Math.PI * 2);
                  ctx.arc(cx + 7, cy - 2, 3, 0, Math.PI * 2);
                  ctx.fill();

                  // Pink Nose
                  ctx.fillStyle = "#F43F5E";
                  ctx.beginPath();
                  ctx.arc(cx, cy + 3, 2, 0, Math.PI * 2);
                  ctx.fill();

                  // Accessory Icon above head
                  ctx.font = "18px sans-serif";
                  ctx.textAlign = "center";
                  ctx.fillText(this.sprite, cx, cy - 28);

                  // Quest Tag Badge
                  if (this.hasQuest) {{
                    ctx.fillStyle = "#FFF";
                    ctx.strokeStyle = "#3D2214";
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    if (ctx.roundRect) {{
                      ctx.roundRect(cx - 30, cy - 62, 60, 24, 8);
                    }} else {{
                      ctx.rect(cx - 30, cy - 62, 60, 24);
                    }}
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = "#C83E2B";
                    ctx.font = "bold 12px sans-serif";
                    ctx.fillText("💬 U" + this.unit, cx, cy - 46);
                  }}

                  // Dialogue bubble occasionally
                  if (this.showBubble) {{
                    ctx.fillStyle = "#FEF9C3";
                    ctx.strokeStyle = "#854D0E";
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    if (ctx.roundRect) {{
                      ctx.roundRect(cx - 65, cy - 96, 130, 26, 8);
                    }} else {{
                      ctx.rect(cx - 65, cy - 96, 130, 26);
                    }}
                    ctx.fill();
                    ctx.stroke();

                    ctx.fillStyle = "#713F12";
                    ctx.font = "bold 10.5px sans-serif";
                    ctx.fillText(this.phrase, cx, cy - 79);
                  }}

                  ctx.restore();
                }}
              }}

              function initCats() {{
                cats = [
                  new CatVillager(80, 360, 0.75, "Scholar Kuro", "🎓", 2, "Let's study Unit 2!", "#F59E0B"),
                  new CatVillager(210, 375, -0.65, "Kotaro Tech", "🔧", 4, "Meiji gadgets ready!", "#64748B"),
                  new CatVillager(340, 360, 0.8, "Mikan Tea", "🍵", 6, "Fresh hot matcha tea!", "#10B981"),
                  new CatVillager(470, 370, -0.7, "Tora Driver", "🐎", 8, "Travel across Japan!", "#D97706"),
                  new CatVillager(600, 365, 0.65, "Kiki Gazette", "📢", 10, "Morning newspaper!", "#EF4444"),
                  new CatVillager(730, 360, -0.8, "Ichi Builder", "🏛️", 16, "Building the street!", "#8B5CF6"),
                  new CatVillager(860, 375, 0.7, "Chiyo Herbalist", "🩺", 18, "Healthy remedies!", "#06B6D4"),
                  new CatVillager(990, 365, -0.65, "Hanako Artist", "🎨", 22, "Painting Ukiyo-e!", "#EC4899"),
                  new CatVillager(1120, 370, 0.8, "Tama Gamer", "🎮", 26, "Folk game challenge!", "#3B82F6")
                ];
              }}
              initCats();

              function drawStreet() {{
                if (!ctx || !canvas) return;
                if (canvas.width === 0 || canvas.height === 0) {{
                  resizeCanvas();
                }}
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Mount Fuji & Distant Misty Hills
                ctx.fillStyle = timeMode === 'night' ? "#1E1B4B" : (timeMode === 'dusk' ? "#9A3412" : "#D2E6CE");
                ctx.beginPath();
                ctx.moveTo(0, 290);
                ctx.lineTo(240, 180);
                ctx.lineTo(340, 240);
                ctx.lineTo(520, 140); // Mount Fuji silhouette peak
                ctx.lineTo(700, 250);
                ctx.lineTo(950, 190);
                ctx.lineTo(canvas.width, 270);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.fill();

                // Snow cap on Fuji peak
                if (timeMode !== 'night') {{
                  ctx.fillStyle = "#FFFDF9";
                  ctx.beginPath();
                  ctx.moveTo(480, 165);
                  ctx.lineTo(520, 140);
                  ctx.lineTo(560, 165);
                  ctx.closePath();
                  ctx.fill();
                }}

                // Torii Gate at Far Left
                ctx.fillStyle = "#B91C1C";
                ctx.fillRect(8, 120, 10, 160);
                ctx.fillRect(52, 120, 10, 160);
                ctx.fillRect(0, 126, 70, 12);
                ctx.fillRect(4, 142, 62, 9);

                // Authentic Meiji Machiya Buildings with tiled kawara roofs & lanterns
                const buildingWidth = 125;
                const buildings = [
                  {{ title: "Academy", unit: 2, roof: "#7F1D1D", icon: "📜", x: 75, noren: "U2" }},
                  {{ title: "Workshop", unit: 4, roof: "#334155", icon: "⚙️", x: 215, noren: "U4" }},
                  {{ title: "Tea House", unit: 6, roof: "#14532D", icon: "🍵", x: 355, noren: "U6" }},
                  {{ title: "Station", unit: 8, roof: "#0369A1", icon: "🐎", x: 495, noren: "U8" }},
                  {{ title: "Gazette", unit: 10, roof: "#C2410C", icon: "📢", x: 635, noren: "U10" }},
                  {{ title: "Guild", unit: 16, roof: "#581C87", icon: "🏛️", x: 775, noren: "U16" }},
                  {{ title: "Plaza", unit: 24, roof: "#BE185D", icon: "🌸", x: 915, noren: "U24" }},
                  {{ title: "Arcade", unit: 26, roof: "#047857", icon: "🎮", x: 1055, noren: "U26" }}
                ];

                buildings.forEach(b => {{
                  // Main Wall with Shoji grid
                  ctx.fillStyle = timeMode === 'night' ? "#FDE047" : "#FAF5EE";
                  ctx.strokeStyle = "#3D2214";
                  ctx.lineWidth = 4;
                  ctx.fillRect(b.x, 150, buildingWidth, 190);
                  ctx.strokeRect(b.x, 150, buildingWidth, 190);

                  // Wooden pillars & lattice (Koshi)
                  ctx.strokeStyle = "#5D3A24";
                  ctx.lineWidth = 3;
                  ctx.strokeRect(b.x + 8, 175, buildingWidth - 16, 145);
                  ctx.strokeRect(b.x + 28, 220, 68, 100);

                  // Shoji grid inner lines
                  ctx.lineWidth = 1.5;
                  ctx.beginPath();
                  ctx.moveTo(b.x + 62, 220); ctx.lineTo(b.x + 62, 320);
                  ctx.moveTo(b.x + 28, 250); ctx.lineTo(b.x + 96, 250);
                  ctx.moveTo(b.x + 28, 280); ctx.lineTo(b.x + 96, 280);
                  ctx.stroke();

                  // Curved Kawara Tiled Roof (Meiji Architecture)
                  ctx.fillStyle = b.roof;
                  ctx.strokeStyle = "#2B1810";
                  ctx.lineWidth = 3;
                  ctx.beginPath();
                  ctx.moveTo(b.x - 12, 150);
                  ctx.quadraticCurveTo(b.x + buildingWidth / 2, 100, b.x + buildingWidth + 12, 150);
                  ctx.lineTo(b.x + buildingWidth + 6, 158);
                  ctx.quadraticCurveTo(b.x + buildingWidth / 2, 112, b.x - 6, 158);
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();

                  // Noren fabric curtain
                  ctx.fillStyle = "#FFF";
                  ctx.strokeStyle = "#3D2214";
                  ctx.lineWidth = 2;
                  ctx.fillRect(b.x + 24, 210, 76, 26);
                  ctx.strokeRect(b.x + 24, 210, 76, 26);

                  ctx.fillStyle = "#B91C1C";
                  ctx.font = "bold 13px sans-serif";
                  ctx.textAlign = "center";
                  ctx.fillText(b.noren + " " + b.title, b.x + 62, 228);

                  // Glowing Paper Lantern (Chochin)
                  ctx.fillStyle = (timeMode === 'night' || timeMode === 'dusk') ? "#F59E0B" : "#FFF";
                  ctx.strokeStyle = "#B91C1C";
                  ctx.lineWidth = 2.5;
                  ctx.beginPath();
                  ctx.ellipse(b.x + 12, 175, 9, 14, 0, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.stroke();
                  ctx.fillStyle = "#991B1B";
                  ctx.font = "bold 9px sans-serif";
                  ctx.fillText("🏮", b.x + 12, 178);
                }});

                // Cobblestone Road
                ctx.fillStyle = timeMode === 'night' ? "#334155" : "#D1C7BD";
                ctx.fillRect(0, 335, canvas.width, canvas.height - 335);
                ctx.strokeStyle = "#6B5B52";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(0, 335);
                ctx.lineTo(canvas.width, 335);
                ctx.stroke();

                // Decorative Cobblestones
                ctx.fillStyle = timeMode === 'night' ? "#1E293B" : "#B5A89E";
                for (let i = 15; i < canvas.width; i += 60) {{
                  ctx.beginPath();
                  ctx.ellipse(i, 400 + (i % 25), 18, 9, 0, 0, Math.PI * 2);
                  ctx.fill();
                }}

                // Update & Render Cats
                cats.forEach(cat => {{
                  cat.update();
                  cat.draw();
                }});

                // Render Sakura Blossom Petals
                ctx.fillStyle = "#FBCFE8";
                sakuraPetals.forEach(p => {{
                  p.x += p.speedX;
                  p.y += p.speedY;
                  p.sway += p.swaySpeed;
                  const currentX = p.x + Math.sin(p.sway) * 15;

                  ctx.save();
                  ctx.globalAlpha = p.opacity;
                  ctx.beginPath();
                  ctx.ellipse(currentX, p.y, p.size, p.size * 0.6, p.sway, 0, Math.PI * 2);
                  ctx.fill();
                  ctx.restore();

                  if (p.y > canvas.height + 20) p.y = -20;
                  if (p.x > canvas.width + 40) p.x = -40;
                }});

                requestAnimationFrame(drawStreet);
              }}
              requestAnimationFrame(drawStreet);

              // Click handler on canvas to talk to cat or shop
              if (canvas) {{
                canvas.addEventListener('click', (e) => {{
                  const rect = canvas.getBoundingClientRect();
                  const clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
                  const clickY = (e.clientY - rect.top) * (canvas.height / rect.height);

                  let clickedCat = null;
                  for (let cat of cats) {{
                    if (Math.abs(clickX - (cat.x + 28)) < 45 && Math.abs(clickY - (cat.y + 25)) < 55) {{
                      clickedCat = cat;
                      break;
                    }}
                  }}

                  if (clickedCat) {{
                    openRandomQuest(clickedCat.unit);
                  }} else {{
                    openRandomQuest(currentTopicFilter === 'all' ? null : currentTopicFilter);
                  }}
                }});
              }}

              function toggleTimeOfDay() {{
                const container = document.getElementById('game-container');
                const timeIcon = document.getElementById('time-icon');
                const timeText = document.getElementById('time-text');

                if (timeMode === 'day') {{
                  timeMode = 'dusk';
                  container.className = 'theme-dusk';
                  timeIcon.innerText = '🌅';
                  timeText.innerText = 'Sunset';
                }} else if (timeMode === 'dusk') {{
                  timeMode = 'night';
                  container.className = 'theme-night';
                  timeIcon.innerText = '🌙';
                  timeText.innerText = 'Moonlit Night';
                }} else {{
                  timeMode = 'day';
                  container.className = '';
                  timeIcon.innerText = '☀️';
                  timeText.innerText = 'Daytime';
                }}
              }}

              function setTopicFilter(unitId) {{
                currentTopicFilter = unitId;
                document.querySelectorAll('#neko-michi-vocab-root .machiya-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('filter-btn-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                if (unitId === 'all') {{
                  currentFilteredQuests = [...FULL_VOCAB_DATABASE];
                  document.getElementById('current-unit-display').innerText = "All Units (" + FULL_VOCAB_DATABASE.length + " verbs)";
                }} else {{
                  currentFilteredQuests = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                  const title = currentFilteredQuests.length > 0 ? currentFilteredQuests[0].unitTitle : "Unit " + unitId;
                  document.getElementById('current-unit-display').innerText = title + " (" + currentFilteredQuests.length + " verbs)";
                }}
              }}

              function openRandomQuest(unitId) {{
                let questList = currentFilteredQuests;
                if (unitId && unitId !== 'all') {{
                  const list = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                  if (list.length > 0) questList = list;
                }}
                if (questList.length === 0) questList = FULL_VOCAB_DATABASE;

                const q = questList[Math.floor(Math.random() * questList.length)];
                gameState.activeQuest = q;
                displayQuest(q);
              }}

              function displayQuest(q) {{
                document.getElementById('modal-cat-name').innerText = q.speaker;
                document.getElementById('modal-cat-avatar').innerText = q.avatar;
                document.getElementById('modal-shop-name').innerText = q.shop + " • Meiji Quest";
                document.getElementById('modal-unit-tag').innerText = q.unitTitle;
                document.getElementById('modal-sentence').innerHTML = q.sentence;
                document.getElementById('modal-hint').innerText = "💡 Hint: " + (q.hintEn || q.hint);

                const optContainer = document.getElementById('modal-options');
                optContainer.innerHTML = '';

                const feedback = document.getElementById('modal-feedback');
                feedback.className = 'feedback-box';
                feedback.style.display = 'none';

                const nextBtn = document.getElementById('modal-next-btn');
                nextBtn.style.display = 'none';

                q.options.forEach((opt, idx) => {{
                  const btn = document.createElement('button');
                  btn.className = 'opt-btn';
                  btn.innerText = (['A', 'B', 'C', 'D'][idx]) + ". " + opt;
                  btn.onclick = () => selectOption(idx, btn, q);
                  optContainer.appendChild(btn);
                }});

                document.getElementById('quest-modal').classList.add('active');
              }}

              function selectOption(idx, btn, q) {{
                const optButtons = document.querySelectorAll('#neko-michi-vocab-root .opt-btn');
                optButtons.forEach(b => b.disabled = true);

                const feedback = document.getElementById('modal-feedback');
                const nextBtn = document.getElementById('modal-next-btn');

                if (idx === q.correct) {{
                  btn.classList.add('correct');
                  feedback.className = 'feedback-box correct';
                  feedback.innerHTML = "🎉 <strong>Correct!</strong> " + (q.explanationEn || q.explanation);
                  feedback.style.display = 'block';

                  gameState.coins += 15;
                  gameState.harmony = Math.min(100, gameState.harmony + 2);
                  document.getElementById('coin-counter').innerText = gameState.coins;
                  document.getElementById('harmony-counter').innerText = gameState.harmony + "%";
                }} else {{
                  btn.classList.add('wrong');
                  if (optButtons[q.correct]) optButtons[q.correct].classList.add('correct');
                  feedback.className = 'feedback-box wrong';
                  feedback.innerHTML = "❌ <strong>Incorrect!</strong> The correct answer is <strong>" + q.options[q.correct] + "</strong>. " + (q.explanationEn || q.explanation);
                  feedback.style.display = 'block';
                }}

                nextBtn.style.display = 'inline-block';
              }}

              function nextQuestInFilter() {{
                openRandomQuest(currentTopicFilter);
              }}

              function closeQuestModal() {{
                document.getElementById('quest-modal').classList.remove('active');
              }}

              // Handbook Modal Functions
              function openHandbookModal() {{
                filterHandbook('all');
                document.getElementById('dict-modal').classList.add('active');
              }}

              function closeHandbookModal() {{
                document.getElementById('dict-modal').classList.remove('active');
              }}

              function filterHandbook(unitId) {{
                document.querySelectorAll('#neko-michi-vocab-root .dict-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('dict-tab-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                const searchBox = document.getElementById('dict-search');
                if (searchBox) searchBox.value = '';

                currentDictList = unitId === 'all' 
                  ? FULL_VOCAB_DATABASE 
                  : FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);

                renderHandbookList(currentDictList);
              }}

              function searchHandbook(query) {{
                const q = query.toLowerCase().trim();
                if (!q) {{
                  renderHandbookList(currentDictList);
                  return;
                }}
                const filtered = currentDictList.filter(item => 
                  item.verb.toLowerCase().includes(q) || 
                  item.meaningEn.toLowerCase().includes(q) || 
                  item.meaningVn.toLowerCase().includes(q) ||
                  item.unitTitle.toLowerCase().includes(q)
                );
                renderHandbookList(filtered);
              }}

              function renderHandbookList(list) {{
                const container = document.getElementById('dict-items-container');
                container.innerHTML = '';

                if (list.length === 0) {{
                  container.innerHTML = '<div style="text-align:center; padding: 40px; color: #9CA3AF; font-weight:700;">No matching phrasal verbs found.</div>';
                  return;
                }}

                list.forEach(item => {{
                  const card = document.createElement('div');
                  card.className = 'dict-item-card';
                  card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span class="dict-verb">✨ ${{item.verb}}</span>
                      <span class="dict-unit-badge">🏯 ${{item.unitTitle}}</span>
                    </div>
                    <div style="font-size: 15px; color: #1F2937; font-weight: 700;">📖 <strong>Meaning:</strong> ${{item.meaningEn}}</div>
                    <div style="font-size: 14.5px; color: var(--meiji-matcha); font-weight: 800;">🇻🇳 <strong>Vietnamese Meaning:</strong> ${{item.meaningVn}}</div>
                    <div style="font-size: 13.5px; color: #4B5563; font-style: italic; margin-top: 2px; background: #FDF8F0; padding: 8px 12px; border-radius: 8px; border: 1px solid #E5E7EB;">
                      💬 <strong>Context:</strong> ${{item.sentence.replace(/<span class='blank'>_______<\\/span>/g, `<u><strong style="color:var(--meiji-vermilion);">${{item.verb}}</strong></u>`)}}
                    </div>
                  `;
                  container.appendChild(card);
                }});
              }}

              // Idioms Practice Modal Functions
              function openIdiomModal() {{
                filterIdioms('all');
                document.getElementById('idiom-modal').classList.add('active');
              }}

              function closeIdiomModal() {{
                document.getElementById('idiom-modal').classList.remove('active');
              }}

              function filterIdioms(unitId) {{
                document.querySelectorAll('#neko-michi-vocab-root .idiom-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('idiom-tab-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                const container = document.getElementById('idiom-items-container');
                container.innerHTML = '';

                const list = unitId === 'all'
                  ? FULL_IDIOM_DATABASE
                  : FULL_IDIOM_DATABASE.filter(q => q.unit === unitId);

                list.forEach((item) => {{
                  const card = document.createElement('div');
                  card.className = 'idiom-test-card';
                  
                  let optionsHtml = '';
                  const letters = ['A', 'B', 'C', 'D'];
                  item.options.forEach((opt, optIdx) => {{
                    optionsHtml += `
                      <button class="idiom-opt-btn" onclick="checkIdiomAnswer(this, ${{item.id}}, ${{optIdx}}, ${{item.correct}})">
                        ${{letters[optIdx]}}. ${{opt}}
                      </button>
                    `;
                  }});

                  card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                      <span style="font-family: var(--font-heading); font-size: 17px; font-weight: 800; color: #6D28D9;">
                        Question #${{item.id}}
                      </span>
                      <span class="dict-unit-badge" style="background:#EDE9FE; color:#5B21B6; border-color:#C4B5FD;">
                        🏛️ ${{item.unitTitle}}
                      </span>
                    </div>
                    <div style="font-size: 16.5px; font-weight: 700; color: #1F2937; line-height: 1.5;">${{item.question}}</div>
                    <div class="options-grid" id="idiom-opts-${{item.id}}">
                      ${{optionsHtml}}
                    </div>
                    <div class="feedback-box" id="idiom-expl-${{item.id}}" style="display:none; font-size:14px; margin-top:4px;">
                      ${{item.explanationEn || item.explanation}}
                    </div>
                  `;
                  container.appendChild(card);
                }});
              }}

              function checkIdiomAnswer(btn, itemId, selectedIdx, correctIdx) {{
                const parent = document.getElementById('idiom-opts-' + itemId);
                if (!parent) return;
                const buttons = parent.querySelectorAll('.idiom-opt-btn');
                buttons.forEach(b => b.disabled = true);

                const explBox = document.getElementById('idiom-expl-' + itemId);

                if (selectedIdx === correctIdx) {{
                  btn.classList.add('correct');
                  if (explBox) {{
                    explBox.className = 'feedback-box correct';
                    explBox.style.display = 'block';
                    explBox.innerHTML = '🎉 <strong>Correct!</strong> ' + explBox.innerHTML;
                  }}
                  gameState.coins += 20;
                  gameState.harmony = Math.min(100, gameState.harmony + 3);
                  document.getElementById('coin-counter').innerText = gameState.coins;
                  document.getElementById('harmony-counter').innerText = gameState.harmony + '%';
                }} else {{
                  btn.classList.add('wrong');
                  if (buttons[correctIdx]) buttons[correctIdx].classList.add('correct');
                  if (explBox) {{
                    explBox.className = 'feedback-box wrong';
                    explBox.style.display = 'block';
                    explBox.innerHTML = '❌ <strong>Incorrect!</strong> ' + explBox.innerHTML;
                  }}
                }}
              }}
            </script>
          </div>
        </section>
'''

# Read index.html
with open('c:/hsg2627.github.io/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace category-hsg12-view Vocabulary button to point to category-hsg12-vocab-view
old_vocab_folder_card = '''            <!-- Sub-folder 3: Vocabulary -->
            <article class="folder-card" data-target="task-hsg12-vocab" data-label="HSG 12 / Vocabulary">'''

new_vocab_folder_card = '''            <!-- Sub-folder 3: Vocabulary Hub -->
            <article class="folder-card" data-target="category-hsg12-vocab-view" data-label="HSG 12 / Vocabulary">'''

if old_vocab_folder_card in html:
    html = html.replace(old_vocab_folder_card, new_vocab_folder_card)

# Check markers for views
start_marker = '<!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 ==================== -->'
end_marker = '<!-- ==================== VIEW 6B: SUBTASK - COMPREHENSIVE GRAMMAR (CGEL ACADEMIC EDITION) ==================== -->'

p1 = html.find(start_marker)
p2 = html.find(end_marker)

if p1 == -1 or p2 == -1:
    print(f"Error finding section markers: p1={p1}, p2={p2}")
    exit(1)

# Combined section: View 6A (Vocabulary Hub) + View 6 (Destination C1&C2 Game)
combined_section = vocab_hub_html + '\n' + game_html

html = html[:p1] + combined_section + html[p2:]

# Update parentViewMap & routing in script
old_routing_map = '''        "category-hsg12-view": { parent: "overview-view", label: "HSG 12" },
        "category-english10-view": { parent: "overview-view", label: "ENGLISH 10" },
        "task-hsg12-reading": { parent: "category-hsg12-view", label: "HSG 12 / Reading Comprehension" },
        "task-hsg12-listening": { parent: "category-hsg12-view", label: "HSG 12 / Listening Skills" },
        "task-hsg12-vocab": { parent: "category-hsg12-view", label: "HSG 12 / Vocabulary" },
        "task-hsg12-cgel": { parent: "category-hsg12-view", label: "HSG 12 / Comprehensive Grammar" },'''

new_routing_map = '''        "category-hsg12-view": { parent: "overview-view", label: "HSG 12" },
        "category-english10-view": { parent: "overview-view", label: "ENGLISH 10" },
        "category-hsg12-vocab-view": { parent: "category-hsg12-view", label: "HSG 12 / Vocabulary" },
        "task-hsg12-reading": { parent: "category-hsg12-view", label: "HSG 12 / Reading Comprehension" },
        "task-hsg12-listening": { parent: "category-hsg12-view", label: "HSG 12 / Listening Skills" },
        "task-hsg12-vocab": { parent: "category-hsg12-vocab-view", label: "HSG 12 / Vocabulary / Destination C1&C2 - Phrasal Verbs" },
        "task-hsg12-cgel": { parent: "category-hsg12-view", label: "HSG 12 / Comprehensive Grammar" },'''

if old_routing_map in html:
    html = html.replace(old_routing_map, new_routing_map)

# Update breadcrumb / backBtn handler in switchFocusView
old_crumb_logic = '''          if (viewMeta && viewMeta.parent === "category-hsg12-view") {
            backBtn.textContent = "← Back to HSG 12";
            crumbPath.innerHTML = `
              <span class="crumb-link" data-target="category-hsg12-view">HSG 12</span>
              <span class="separator">/</span>
              <span class="crumb-current">${customName ? customName.replace("HSG 12 /", "").trim() : "Task"}</span>
            `;
          } else if (viewMeta && viewMeta.parent === "category-english10-view") {'''

new_crumb_logic = '''          if (viewMeta && viewMeta.parent === "category-hsg12-vocab-view") {
            backBtn.textContent = "← Back to Vocabulary";
            crumbPath.innerHTML = `
              <span class="crumb-link" data-target="category-hsg12-view">HSG 12</span>
              <span class="separator">/</span>
              <span class="crumb-link" data-target="category-hsg12-vocab-view">Vocabulary</span>
              <span class="separator">/</span>
              <span class="crumb-current">${customName ? customName.replace("HSG 12 / Vocabulary /", "").trim() : "Destination C1&C2 - Phrasal Verbs"}</span>
            `;
          } else if (viewMeta && viewMeta.parent === "category-hsg12-view") {
            backBtn.textContent = "← Back to HSG 12";
            crumbPath.innerHTML = `
              <span class="crumb-link" data-target="category-hsg12-view">HSG 12</span>
              <span class="separator">/</span>
              <span class="crumb-current">${customName ? customName.replace("HSG 12 /", "").trim() : "Task"}</span>
            `;
          } else if (viewMeta && viewMeta.parent === "category-english10-view") {'''

if old_crumb_logic in html:
    html = html.replace(old_crumb_logic, new_crumb_logic)

with open('c:/hsg2627.github.io/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("SUCCESS: 100% English instructions & 3-Tier Vocabulary Hierarchy deployed to index.html!")
