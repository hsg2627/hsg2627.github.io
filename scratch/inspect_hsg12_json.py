import json

with open('data/hsg12-topics.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

print("Keys in hsg12-topics.json:", list(d.keys()))
for k in d:
    val = d[k]
    print(f"Key '{k}': type = {type(val)}, len = {len(val) if hasattr(val, '__len__') else 'N/A'}")
    if val is None:
        print(f"  -> WARNING: {k} is None!")
