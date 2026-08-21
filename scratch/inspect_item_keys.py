import json

with open('data/eng10-units.json', 'r', encoding='utf-8') as f:
    e10 = json.load(f)

for idx, g in enumerate(e10['grammar_levels'][:5]):
    print(f"E10 Level {idx+1} keys: {list(g.keys())}")
    print(f"  title: {g.get('title')}, level: {g.get('level')}, lvl: {g.get('lvl')}, name: {g.get('name')}, topic: {g.get('topic')}")

with open('data/vocab-c1c2.json', 'r', encoding='utf-8') as f:
    v = json.load(f)

for idx, u in enumerate(v['units'][:5]):
    print(f"Vocab item {idx+1} keys: {list(u.keys())}")
    print(f"  unit: {u.get('unit')}, word: {u.get('word')}, unitTitle: {u.get('unitTitle')}")
