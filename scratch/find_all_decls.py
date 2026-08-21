import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def find_declarations(filename):
    print(f"=== {filename} ===")
    with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Match const/let/var declarations of arrays/objects
    decls = re.findall(r'(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=\s*([\[\{])', content)
    for name, kind in decls:
        print(f"  {name} = {kind}...")

find_declarations('index.html')
find_declarations('app.js')
