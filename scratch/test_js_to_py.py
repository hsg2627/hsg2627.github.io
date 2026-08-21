import re
import json
import sys
import io
import os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def js_to_py(js_code):
    """Convert JavaScript object/array literal to a Python object safely."""
    # 1. Remove comments: line comments // and block comments /* */
    # Be careful not to remove // inside strings
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
                    # Line comment
                    j = i + 2
                    while j < n and text[j] != '\n':
                        j += 1
                    i = j
                    continue
                elif ch == '/' and i + 1 < n and text[i+1] == '*':
                    # Block comment
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
    
    # 2. Convert backtick strings `...` to double-quoted JSON strings "..."
    # 3. Convert single-quoted strings '...' to double-quoted JSON strings "..."
    # 4. Quote unquoted keys { key: ... }
    # 5. Remove trailing commas in objects/arrays
    
    # Let's tokenize and reconstruct valid JSON
    # Alternatively, use a python parser or regex approach
    tokens = []
    i = 0
    n = len(clean_code)
    escape = False
    
    output = []
    while i < n:
        ch = clean_code[i]
        if ch in ' \t\r\n':
            output.append(ch)
            i += 1
            continue
        
        # Handle string literals: single quote, double quote, backtick
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
            # dump as valid JSON string
            output.append(json.dumps(raw_str, ensure_ascii=False))
            continue
        
        # Handle identifier/key before colon, or boolean/null/number
        if ch.isalpha() or ch == '_' or ch == '$':
            j = i
            while j < n and (clean_code[j].isalnum() or clean_code[j] in '_-$'):
                j += 1
            ident = clean_code[i:j]
            i = j
            # check if followed by colon (i.e. object key)
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
            else:
                output.append(json.dumps(ident))
            continue
        
        output.append(ch)
        i += 1

    json_text = ''.join(output)
    # Remove trailing commas before } or ]
    json_text = re.sub(r',\s*([\]\}])', r'\1', json_text)
    
    return json.loads(json_text)

# Test on QUIZ_DATA
with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    app_js = f.read()

from extract_all_data import find_block
raw_quiz = find_block(app_js, 'QUIZ_DATA')
quiz_obj = js_to_py(raw_quiz)
print(f"QUIZ_DATA successfully parsed: {len(quiz_obj)} passages")
for p in quiz_obj:
    print(f" - {p['id']}: {p['title']} ({len(p['questions'])} questions)")
