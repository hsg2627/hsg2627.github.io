import json
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('data/eng10-units.json', 'r', encoding='utf-8') as f:
    text = f.read()

matches = [m.start() for m in re.finditer('checkGgdInlineTheoryPractice', text)]
print(f"Found {len(matches)} occurrences")
for idx, pos in enumerate(matches[:5]):
    print(f"\n--- Occurrence {idx+1} ---")
    print(text[max(0, pos-100):min(len(text), pos+300)])
