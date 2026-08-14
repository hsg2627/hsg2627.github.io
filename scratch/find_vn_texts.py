with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# Find all vietnamese lines or phrases outside the vocabulary definitions
lines = text.split('\n')
for i, line in enumerate(lines):
    # check outside RAW_VOCAB
    if i < 900 or i > 1995:
        if re.search(r'[\u00C0-\u1EF9]', line):
            print(f"Line {i+1}: {line.strip()[:100]}")
