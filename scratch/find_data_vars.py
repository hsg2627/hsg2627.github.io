import re
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html_content = f.read()

# Let's inspect where variables are defined
var_names = ['QUIZ_DATA', 'LISTENING_DATA', 'E10_DATA', 'CGEL_DATA', 'FULL_VOCAB_DATABASE', 'FOV_VOCABULARY_DATA', 'DESTINATION_UNITS_DATA', 'READING_DATA']
for v in var_names:
    matches = list(re.finditer(rf'(?:const|let|var)\s+{v}\s*=\s*', html_content))
    print(f"Variable {v}: found {len(matches)} occurrences in index.html")

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    app_js_content = f.read()

for v in var_names:
    matches = list(re.finditer(rf'(?:const|let|var)\s+{v}\s*=\s*', app_js_content))
    print(f"Variable {v}: found {len(matches)} occurrences in app.js")
