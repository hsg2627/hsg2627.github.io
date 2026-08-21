import os

for root, dirs, files in os.walk('.'):
    if '.git' in root or '__pycache__' in root:
        continue
    for f in files:
        if f.endswith('.js') or f.endswith('.html') or f.endswith('.json'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                c = fp.read()
                if 'checkGgdInlineTheoryPractice' in c:
                    print(f"Found in {path}")
