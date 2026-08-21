import io
import sys
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print(f"Total characters: {len(text):,}")

# Breakdown by major blocks
style_matches = list(re.finditer(r'<style\b[^>]*>(.*?)</style>', text, re.DOTALL))
print(f"Style blocks: {len(style_matches)}")
for idx, m in enumerate(style_matches):
    print(f"  Style {idx+1}: {len(m.group(1)):,} chars (span {m.start()}-{m.end()})")

script_matches = list(re.finditer(r'<script\b[^>]*>(.*?)</script>', text, re.DOTALL))
print(f"\nScript blocks: {len(script_matches)}")
for idx, m in enumerate(script_matches):
    print(f"  Script {idx+1}: {len(m.group(1)):,} chars (span {m.start()}-{m.end()})")

# Breakdown of section blocks
section_matches = list(re.finditer(r'<section\b([^>]*)>(.*?)</section>', text, re.DOTALL))
print(f"\nSection blocks: {len(section_matches)}")
for idx, m in enumerate(section_matches):
    attrs = m.group(1)
    id_m = re.search(r'id="([^"]+)"', attrs)
    sid = id_m.group(1) if id_m else 'unknown'
    print(f"  Section {idx+1} [#{sid}]: {len(m.group(2)):,} chars")
