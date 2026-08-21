import io
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

for path in ['Idioms/index.html', 'Lexicode/index.html']:
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
        print(f"=== {path} ({len(lines)} lines) ===")
        print("First 20 lines:")
        for l in lines[:20]:
            print(" ", l.rstrip())
        print("...")
