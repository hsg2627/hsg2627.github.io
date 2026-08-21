import re
import json
import sys
import io
import os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

os.makedirs('data', exist_ok=True)

def find_block(text, var_name):
    pattern = rf'(?:const|let|var)\s+{var_name}\s*=\s*'
    m = re.search(pattern, text)
    if not m:
        return None
    start = m.end()
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
                    return text[start:i+1]
    return None

def js_to_py(js_code):
    def remove_comments(text):
        res = []
        i = 0
        n = len(text)
        in_str = None
        escape = False
        while i < n:
            ch = text[i]
            if escape:
                res.append(ch)
                escape = False
                i += 1
                continue
            if ch == '\\':
                res.append(ch)
                escape = True
                i += 1
                continue
            if in_str:
                res.append(ch)
                if ch == in_str:
                    in_str = None
                i += 1
                continue
            else:
                if ch in ('"', "'", '`'):
                    in_str = ch
                    res.append(ch)
                    i += 1
                    continue
                elif ch == '/' and i + 1 < n and text[i+1] == '/':
                    j = i + 2
                    while j < n and text[j] != '\n':
                        j += 1
                    i = j
                    continue
                elif ch == '/' and i + 1 < n and text[i+1] == '*':
                    j = i + 2
                    while j + 1 < n and not (text[j] == '*' and text[j+1] == '/'):
                        j += 1
                    i = j + 2
                    continue
                else:
                    res.append(ch)
                    i += 1
        return ''.join(res)

    clean_code = remove_comments(js_code)
    
    output = []
    i = 0
    n = len(clean_code)
    while i < n:
        ch = clean_code[i]
        if ch in ' \t\r\n':
            output.append(ch)
            i += 1
            continue
        
        if ch in ('"', "'", '`'):
            quote_type = ch
            str_chars = []
            i += 1
            while i < n:
                c = clean_code[i]
                if c == '\\':
                    if i + 1 < n:
                        next_c = clean_code[i+1]
                        if next_c == quote_type and quote_type in ("'", '`'):
                            str_chars.append(quote_type)
                            i += 2
                            continue
                        elif next_c == 'n':
                            str_chars.append('\n')
                            i += 2
                            continue
                        elif next_c == 'r':
                            str_chars.append('\r')
                            i += 2
                            continue
                        elif next_c == 't':
                            str_chars.append('\t')
                            i += 2
                            continue
                        elif next_c == '\\':
                            str_chars.append('\\')
                            i += 2
                            continue
                        elif next_c == '"':
                            str_chars.append('"')
                            i += 2
                            continue
                        else:
                            str_chars.append(next_c)
                            i += 2
                            continue
                    else:
                        str_chars.append('\\')
                        i += 1
                        continue
                elif c == quote_type:
                    i += 1
                    break
                else:
                    str_chars.append(c)
                    i += 1
            raw_str = ''.join(str_chars)
            output.append(json.dumps(raw_str, ensure_ascii=False))
            continue
        
        if ch.isalnum() or ch == '_' or ch == '$':
            j = i
            while j < n and (clean_code[j].isalnum() or clean_code[j] in '_-$'):
                j += 1
            ident = clean_code[i:j]
            i = j
            k = i
            while k < n and clean_code[k] in ' \t\r\n':
                k += 1
            if k < n and clean_code[k] == ':':
                output.append(json.dumps(ident))
            elif ident == 'true':
                output.append('true')
            elif ident == 'false':
                output.append('false')
            elif ident == 'null' or ident == 'undefined':
                output.append('null')
            elif ident.isdigit() or (ident[0] == '-' and ident[1:].isdigit()):
                output.append(ident)
            else:
                output.append(json.dumps(ident))
            continue
        
        output.append(ch)
        i += 1

    json_text = ''.join(output)
    json_text = re.sub(r',\s*([\]\}])', r'\1', json_text)
    try:
        return json.loads(json_text)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        # Save problematic snippet for debugging
        with open('scratch/debug_err.json', 'w', encoding='utf-8') as df:
            df.write(json_text)
        raise

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    index_html = f.read()

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    app_js = f.read()

# 1. HSG 12 Topics (Reading, Listening, CGEL)
print("Parsing HSG 12 data...")
hsg12_data = {
    "reading": js_to_py(find_block(app_js, 'QUIZ_DATA')),
    "listening": js_to_py(find_block(app_js, 'LISTENING_PRACTICE_DATA')),
    "cgel_modules": js_to_py(find_block(index_html, 'modulesData')),
    "cgel_nodes": js_to_py(find_block(index_html, 'nodeDetailsRegistry')),
    "cgel_quests": js_to_py(find_block(index_html, 'questsData'))
}
with open('data/hsg12-topics.json', 'w', encoding='utf-8') as f:
    json.dump(hsg12_data, f, ensure_ascii=False, indent=2)
print("Saved data/hsg12-topics.json")

# 2. English 10 Data
print("Parsing English 10 data...")
eng10_data = {
    "grammar_levels": js_to_py(find_block(index_html, 'ggdLevels')),
    "memory_tasks": {
        "vocabulary": js_to_py(find_block(app_js, 'FOV_VOCABULARY_DATA')),
        "quiz": js_to_py(find_block(app_js, 'FOV_QUIZ_DATA')),
        "collocations": js_to_py(find_block(app_js, 'FOV_COLLOC_DATA')),
        "morphology": js_to_py(find_block(app_js, 'FOV_MORPH_DATA'))
    }
}
with open('data/eng10-units.json', 'w', encoding='utf-8') as f:
    json.dump(eng10_data, f, ensure_ascii=False, indent=2)
print("Saved data/eng10-units.json")

# 3. Destination C1/C2 Vocab
print("Parsing Vocab C1/C2 data...")
raw_vocab = find_block(index_html, 'FULL_VOCAB_DATABASE')
vocab_data = {
    "units": js_to_py(raw_vocab)
}
with open('data/vocab-c1c2.json', 'w', encoding='utf-8') as f:
    json.dump(vocab_data, f, ensure_ascii=False, indent=2)
print("Saved data/vocab-c1c2.json")

print("\n--- Summary of exported JSON data ---")
for fn in ['data/hsg12-topics.json', 'data/eng10-units.json', 'data/vocab-c1c2.json']:
    size = os.path.getsize(fn)
    print(f"File {fn}: {size:,} bytes")
