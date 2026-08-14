import re
import json

with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract RAW_VOCAB array block
match = re.search(r'const RAW_VOCAB = (\[.*?\]);', text, re.DOTALL)
if match:
    raw_json = match.group(1)
    # Parse items
    items = json.loads(raw_json)
    print(f"Total items in RAW_VOCAB list: {len(items)}")
    ids = [item.get('id') for item in items]
    print(f"IDs range: min={min(ids)}, max={max(ids)}, total={len(ids)}")
    missing = [i for i in range(1, 109) if i not in ids]
    print(f"Missing IDs in 1..108: {missing}")
    for item in items:
        if 'clean_word' not in item or not item['clean_word']:
            print(f"Item without clean_word: {item}")
