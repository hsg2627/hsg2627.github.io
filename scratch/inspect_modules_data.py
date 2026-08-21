import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

m = re.search(r'const\s+modulesData\s*=\s*\{', text)
if m:
    print(text[m.start():m.start()+500])
