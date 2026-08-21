import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's inspect script block 2
scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', text, re.DOTALL)
print(f"Number of scripts: {len(scripts)}")
for i, s in enumerate(scripts):
    print(f"Script {i+1}: length = {len(s)} chars, starts with: {s[:150].strip()!r}")
