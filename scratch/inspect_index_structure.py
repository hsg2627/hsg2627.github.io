import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()
    lines = text.splitlines()

print(f"Total lines: {len(lines)}")
print(f"Total size: {len(text)} bytes")

# Find tags
for i, line in enumerate(lines):
    if re.search(r'<(script|style|body|nav|header|main|section|aside|footer)', line, re.I):
        print(f"L{i+1}: {line.strip()[:120]}")
    elif re.search(r'</(script|style|body|nav|header|main|section|aside|footer)>', line, re.I):
        print(f"L{i+1} [END]: {line.strip()[:120]}")
