import re
import json
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    index_html = f.read()

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    app_js = f.read()

def find_block(text, var_name):
    pattern = rf'(?:const|let|var)\s+{var_name}\s*=\s*'
    m = re.search(pattern, text)
    if not m:
        print(f"Could not find {var_name}")
        return None
    start = m.end()
    # Find matching bracket/brace
    open_char = text[start]
    if open_char not in '[{':
        print(f"{var_name} starts with {open_char!r}, searching...")
        while text[start] in ' \t\r\n':
            start += 1
        open_char = text[start]
    
    close_char = ']' if open_char == '[' else '}'
    depth = 0
    in_str = None
    escape = False
    for i in range(start, len(text)):
        ch = text[i]
        if escape:
            escape = False
            continue
        if ch == '\\':
            escape = True
            continue
        if in_str:
            if ch == in_str:
                in_str = None
            continue
        else:
            if ch in ('"', "'", '`'):
                in_str = ch
                continue
            if ch == open_char:
                depth += 1
            elif ch == close_char:
                depth -= 1
                if depth == 0:
                    raw = text[start:i+1]
                    print(f"Found {var_name}: length = {len(raw):,} chars")
                    return raw
    print(f"Failed to find end for {var_name}")
    return None

find_block(index_html, 'FULL_VOCAB_DATABASE')
find_block(index_html, 'modulesData')
find_block(index_html, 'nodeDetailsRegistry')
find_block(index_html, 'questsData')
find_block(index_html, 'ggdLevels')
find_block(app_js, 'QUIZ_DATA')
find_block(app_js, 'LISTENING_PRACTICE_DATA')
find_block(app_js, 'FOV_VOCABULARY_DATA')
find_block(app_js, 'FOV_QUIZ_DATA')
find_block(app_js, 'FOV_COLLOC_DATA')
find_block(app_js, 'FOV_MORPH_DATA')
