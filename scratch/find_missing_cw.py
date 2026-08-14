import json

with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
match = re.search(r'const RAW_VOCAB = (\[.*?\]);', text, re.DOTALL)
items = json.loads(match.group(1))

for item in items:
    cw = item.get('clean_word')
    if not cw or len(cw.strip()) == 0:
        print(f"ID {item.get('id')}: term='{item.get('term')}', clean_word='{cw}'")
