with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Lexicode card into folder-grid in category-hsg12-vocab-view
old_grid_part = '''            <!-- Subfolder 1: Destination C1&C2 - Phrasal Verbs -->
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

          </div>'''

new_grid_part = '''            <!-- Subfolder 1: Destination C1&C2 - Phrasal Verbs -->
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

            <!-- Subfolder 2: Lexicode - Monsterest Inn & Guild -->
            <article class="folder-card" onclick="window.location.href='Lexicode/index.html'" data-label="HSG 12 / Vocabulary / Lexicode" style="border-left: 6px solid #F5B041; cursor: pointer;">
              <div>
                <div class="folder-icon" style="background: #2D1F2D; color: #F5B041; border-radius: 12px; padding: 4px 8px; display: inline-block;">🏰</div>
                <div class="folder-name">Lexicode: Monsterest Inn & Guild</div>
                <div class="folder-path">📌 HSG 12 / Vocabulary / Lexicode</div>
                <p style="font-size: 13px; color: #64748B; margin: 8px 0 0 0; line-height: 1.4;">
                  108 Advanced Lexicode Words across 5 Wings with Cozy Monsterest RPG Innkeeper Gamification (3D Grimoire, Monster Trial Arena, Tavern Quest).
                </p>
              </div>
              <div class="folder-meta" style="margin-top: 14px;">
                <span class="type-badge" style="background: #FEF3C7; color: #92400E;">5 Wings / 108 Words</span>
                <a href="Lexicode/index.html" class="arrow-text" style="color: #D97706; font-weight: 700; text-decoration: none;">Vào Game →</a>
              </div>
            </article>

          </div>'''

if old_grid_part in content:
    content = content.replace(old_grid_part, new_grid_part, 1)
    print("Added Lexicode card into folder grid in index.html")
else:
    print("Could not find exact old_grid_part in index.html")

# 2. Add hash redirection for #lexicode and #hsg12-lexicode in handleHashChange
old_hash_handler = '''      function handleHashChange() {
        const hash = window.location.hash.replace("#", "").toLowerCase();'''

new_hash_handler = '''      function handleHashChange() {
        const hash = window.location.hash.replace("#", "").toLowerCase();
        if (hash === "lexicode" || hash === "hsg12-lexicode") {
          window.location.href = "Lexicode/index.html";
          return;
        }'''

if old_hash_handler in content:
    content = content.replace(old_hash_handler, new_hash_handler, 1)
    print("Added hash handling for #lexicode in index.html")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
