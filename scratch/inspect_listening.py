import json

with open('data/hsg12-topics.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for idx, item in enumerate(d['listening']):
    print(f"Item {idx+1}: {type(item)} - {list(item.keys()) if isinstance(item, dict) else item}")
    if isinstance(item, dict):
        print(f"  title: {item.get('title')}, has 'questions': {'questions' in item}")
        if 'questions' in item:
            print(f"  questions type: {type(item['questions'])}")
