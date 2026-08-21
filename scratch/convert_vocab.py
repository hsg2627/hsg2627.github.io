import sys
import re
import json

sys.stdout.reconfigure(encoding='utf-8')

input_path = r"C:\Users\Esther\Downloads\global-success-10-ultimate-vocabulary-database.md"
output_path = r"c:\hsg2627.github.io\data\vocab-eng10.json"

with open(input_path, encoding='utf-8') as f:
    text = f.read()

# Split by Unit headers
unit_blocks = re.split(r'##\s*UNIT\s*(\d+)\s*:\s*([^\n]+)', text)

units = []
all_words_flat = []

for i in range(1, len(unit_blocks), 3):
    u_num = int(unit_blocks[i])
    u_title = unit_blocks[i+1].strip()
    u_body = unit_blocks[i+2]
    
    # Split by sub-sections
    sub_blocks = re.split(r'###\s*❖\s*([^\n]+)', u_body)
    sub_data = {}
    unit_words_list = []
    
    for j in range(1, len(sub_blocks), 2):
        sec_name = sub_blocks[j].strip()
        sec_body = sub_blocks[j+1]
        
        # Parse table rows: | STT | Từ vựng | Loại từ | Trình độ | Nghĩa tiếng Việt | Ví dụ |
        items = []
        for line in sec_body.split('\n'):
            line = line.strip()
            if not line.startswith('|'):
                continue
            parts = [p.strip() for p in line.split('|')[1:-1]]
            if len(parts) >= 6 and re.match(r'^\d+$', parts[0]):
                stt = int(parts[0])
                term = re.sub(r'\*+', '', parts[1]).strip()
                pos = re.sub(r'\*+', '', parts[2]).strip()
                level_match = re.search(r'\[([A-Z0-9]+)\]', parts[3])
                level = level_match.group(1) if level_match else parts[3].strip('` ')
                meaning = parts[4].strip()
                example = re.sub(r'\*+', '', parts[5]).strip()
                
                cat_key = 'academic'
                if 'Phrasal' in sec_name: cat_key = 'phrasal'
                elif 'Collocation' in sec_name: cat_key = 'collocations'
                elif 'Idiom' in sec_name: cat_key = 'idioms'
                
                item_id = f"U{u_num}-{cat_key[:3].upper()}-{stt:02d}"
                word_obj = {
                    'id': item_id,
                    'unit': u_num,
                    'stt': stt,
                    'term': term,
                    'pos': pos,
                    'level': level,
                    'meaningVn': meaning,
                    'example': example,
                    'section': sec_name,
                    'categoryKey': cat_key
                }
                items.append(word_obj)
                unit_words_list.append(word_obj)
                all_words_flat.append(word_obj)
                
        sub_data[sec_name] = items
    
    total_u = sum(len(v) for v in sub_data.values())
    units.append({
        'unit': u_num,
        'title': u_title,
        'totalItems': total_u,
        'sections': sub_data,
        'wordList': unit_words_list
    })

data_export = {
    'title': 'Global Success 10 Ultimate Vocabulary Database',
    'curriculum': 'Tiếng Anh 10 — CT GDPT 2018',
    'totalUnits': len(units),
    'totalVocabulary': len(all_words_flat),
    'units': units
}

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data_export, f, ensure_ascii=False, indent=2)

print(f"Successfully converted {len(all_words_flat)} vocabulary entries across {len(units)} units to {output_path}!")
