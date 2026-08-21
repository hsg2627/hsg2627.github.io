import sys
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

script_blocks = re.findall(r'<script\b[^>]*>(.*?)</script>', text, re.DOTALL)
print(f"Total script blocks: {len(script_blocks)}")
for idx, s in enumerate(script_blocks):
    print(f"\n--- Script block {idx+1} (length: {len(s)} chars) ---")
    lines = [l.strip() for l in s.splitlines() if l.strip()]
    print("First 8 lines:")
    for l in lines[:8]:
        print("  ", l[:120])
    print("...")
    print("Last 5 lines:")
    for l in lines[-5:]:
        print("  ", l[:120])
