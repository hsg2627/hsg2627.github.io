import json

with open('data/eng10-units.json', 'r', encoding='utf-8') as f:
    e10 = json.load(f)

print("E10 keys:", list(e10.keys()))
if 'grammar_levels' in e10:
    print(f"Grammar levels count: {len(e10['grammar_levels'])}")
    for g in e10['grammar_levels'][:3]:
        print(f"  Level {g.get('level')}: {g.get('title')}, questions: {len(g.get('questions', []))}")

with open('data/vocab-c1c2.json', 'r', encoding='utf-8') as f:
    v = json.load(f)

print("Vocab keys:", list(v.keys()))
if 'units' in v:
    print(f"Vocab units count: {len(v['units'])}")
    for u in v['units'][:3]:
        print(f"  Unit {u.get('unit')}: {u.get('unitTitle')}, targetWords: {len(u.get('targetWords', []))}")
