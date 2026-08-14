import os
import re

print("Checking Lexicode directory and files...")
assert os.path.exists('Lexicode/index.html'), "Lexicode/index.html must exist!"
assert os.path.exists('lexicode.html'), "lexicode.html must exist!"
assert os.path.exists('index.html'), "index.html must exist!"

with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    lexi_content = f.read()

# Check dataset
clean_words = re.findall(r'"clean_word":\s*"([^"]+)"', lexi_content)
print(f"Total vocabulary words in Lexicode/index.html: {len(clean_words)}")
assert len(clean_words) == 108, f"Expected 108 words, got {len(clean_words)}"

# Check 5 wings
wings = re.findall(r'id:\s*(\d+),\s*name:\s*"([^"]+)"', lexi_content)
print(f"Total wings found: {len(wings)}")
for w_id, w_name in wings:
    print(f"  - Wing {w_id}: {w_name}")

# Check views in Lexicode/index.html
views = re.findall(r'<section\s+id="([^"]+)"', lexi_content)
print(f"Views in Lexicode: {views}")

# Check index.html integration
with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

assert 'Lexicode: Monsterest Inn & Guild' in idx_content, "Lexicode card must be in index.html"
assert 'Lexicode/index.html' in idx_content, "Link to Lexicode/index.html must be in index.html"
assert 'lexicode' in idx_content, "Hash handling must be in index.html"

print("ALL VERIFICATIONS PASSED SUCCESSFULLY!")
