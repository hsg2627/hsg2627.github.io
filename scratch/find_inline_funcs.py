import json
import re

with open('data/eng10-units.json', 'r', encoding='utf-8') as f:
    text = f.read()

funcs = re.findall(r'onclick="([A-Za-z0-9_$]+)\(', text)
print("Inline onclick functions found in eng10-units.json:")
for fn in set(funcs):
    print(f" - {fn}")
