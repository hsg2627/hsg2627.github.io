import json
import re

with open('Lexicode/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

match = re.search(r'const RAW_VOCAB = (\[.*?\]);', html, re.DOTALL)
items = json.loads(match.group(1))

for item in items:
    if item['id'] == 30:
        item['clean_word'] = 'vitality'
        if not item.get('ipa'):
            item['ipa'] = '/vaɪˈtæləti/'
    elif item['id'] == 38:
        item['clean_word'] = 'scrutinize'
        if not item.get('ipa'):
            item['ipa'] = '/ˈskruːtənaɪz/'

new_json_str = json.dumps(items, ensure_ascii=False, indent=2)
html = html[:match.start(1)] + new_json_str + html[match.end(1):]

with open('Lexicode/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed ID 30 and ID 38 in Lexicode/index.html!")
