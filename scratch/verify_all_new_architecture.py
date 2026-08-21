import os
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

print("=== VERIFYING NEW ARCHITECTURE ===")

# 1. Check data files
data_files = ['data/hsg12-topics.json', 'data/eng10-units.json', 'data/vocab-c1c2.json']
for df in data_files:
    if os.path.exists(df):
        with open(df, 'r', encoding='utf-8') as f:
            d = json.load(f)
            print(f"[OK] {df} valid JSON ({os.path.getsize(df):,} bytes), keys: {list(d.keys())}")
    else:
        print(f"[ERROR] MISSING {df}")

# 2. Check CSS files
css_files = ['css/main.css', 'css/components.css', 'css/game-pixel.css']
for cf in css_files:
    if os.path.exists(cf):
        print(f"[OK] {cf} exists ({os.path.getsize(cf):,} bytes)")
    else:
        print(f"[ERROR] MISSING {cf}")

# 3. Check JS files
js_files = ['js/app.js', 'js/search.js', 'js/quiz-engine.js']
for jf in js_files:
    if os.path.exists(jf):
        print(f"[OK] {jf} exists ({os.path.getsize(jf):,} bytes)")
    else:
        print(f"[ERROR] MISSING {jf}")

# 4. Check index.html
if os.path.exists('index.html'):
    sz = os.path.getsize('index.html')
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    print(f"[OK] index.html exists ({sz:,} bytes, {len(html.splitlines())} lines)")
    
    # Check for English 10 and no unwanted text
    if 'English 10' in html:
        print("[OK] Verified 'English 10' branding is present")
    if 'Tiếng Anh 10 Global Success' in html:
        print("[WARN] Found old branding 'Tiếng Anh 10 Global Success' in index.html!")
    else:
        print("[OK] Confirmed 'Tiếng Anh 10 Global Success' is completely removed")
