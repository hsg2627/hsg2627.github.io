import json
import re

with open('data/vocab-eng10.json', 'r', encoding='utf-8') as f:
    vocab_db = json.load(f)

# Convert all 550 entries into Lexicode format
lex_vocab = []
wings_def = [
  {"id": 0, "title": "Wing 1: Family Life & Humans and Environment", "desc": "110 Academic terms, phrasal verbs, and collocations on household duties and eco-friendly lifestyles (Units 1 & 2).", "monster": "🍄 Sprout Sprite", "units": [1, 2]},
  {"id": 1, "title": "Wing 2: Music & Community Support", "desc": "110 Academic terms on musical artistry, volunteer missions, and community charity (Units 3 & 4).", "monster": "🛡️ Stone Golem", "units": [3, 4]},
  {"id": 2, "title": "Wing 3: Inventions & New Ways to Learn", "desc": "110 Academic terms on AI innovations, hardware devices, digital tools, and smart learning (Units 5 & 8).", "monster": "🔮 Shadow Familiar", "units": [5, 8]},
  {"id": 3, "title": "Wing 4: Gender Equality & International Organisations", "desc": "110 Academic terms on equal rights, workplace fairness, ASEAN, and global treaties (Units 6 & 7).", "monster": "🦊 Moonlit Kitsune", "units": [6, 7]},
  {"id": 4, "title": "Wing 5: Protecting Environment & Ecotourism", "desc": "110 Academic terms on biodiversity, wildlife sanctuaries, sustainable destinations, and nature (Units 9 & 10).", "monster": "👑 Elder Dragonling", "units": [9, 10]}
]

# Map words into lex_vocab with sequential IDs
current_id = 1
wings_ranges = []

for w_idx, wing in enumerate(wings_def):
    start_id = current_id
    for u_num in wing["units"]:
        u_obj = next((u for u in vocab_db["units"] if u["unit"] == u_num), None)
        if not u_obj: continue
        for w in u_obj["wordList"]:
            # Clean term and example for cloze tests
            clean_term = re.sub(r'\(.*?\)', '', w['term']).strip()
            # If example has the term, replace it with '--' for blank filling
            ex = w['example']
            
            lex_vocab.append({
                "id": current_id,
                "term": w["term"],
                "clean_word": clean_term,
                "type": w["pos"],
                "desc": f"[{w['level']}] {w['pos']}: {w['meaningVn']}",
                "example": ex,
                "category": wing["title"],
                "monster": wing["monster"],
                "unit": u_num
            })
            current_id += 1
    end_id = current_id - 1
    wings_ranges.append({
        "id": w_idx,
        "title": wing["title"],
        "desc": wing["desc"],
        "monster": wing["monster"],
        "range": [start_id, end_id]
    })

file_path = "Lexicode/app.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace RAW_VOCAB
vocab_js = "const RAW_VOCAB = " + json.dumps(lex_vocab, ensure_ascii=False, indent=2) + ";\n"
content = re.sub(r"const RAW_VOCAB = \[.*?\];\n", vocab_js, content, flags=re.DOTALL)

# Replace this.wings
wings_js = "this.wings = " + json.dumps(wings_ranges, ensure_ascii=False, indent=6) + ";"
content = re.sub(r"this\.wings = \[.*?\];", wings_js, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Updated Lexicode with {len(lex_vocab)} words across 5 Wings (10 Units)!")
