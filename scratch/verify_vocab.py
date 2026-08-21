import json
import re

print("=== 1. Checking data/vocab-eng10.json ===")
with open("data/vocab-eng10.json", "r", encoding="utf-8") as f:
    vocab_db = json.load(f)
assert vocab_db["totalUnits"] == 10, "Expected 10 units"
assert vocab_db["totalVocabulary"] == 550, "Expected 550 words"
print("Found 10 units, 550 words!")

print("=== 2. Checking Lexicode/app.js ===")
with open("Lexicode/app.js", "r", encoding="utf-8") as f:
    lex_code = f.read()
assert "const RAW_VOCAB = [" in lex_code, "RAW_VOCAB missing"
assert "Wing 1: Family Life" in lex_code, "Wing 1 title missing"
assert "Wing 5: Protecting Environment" in lex_code, "Wing 5 title missing"
print("Lexicode vocab and wings verified!")

print("=== 3. Checking index.html ===")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()
assert 'id="vocab-view"' in html, "vocab-view missing in index.html"
assert 'data-view="vocab-view"' in html, "vocab nav item missing in index.html"
print("index.html has vocab-view and sidebar nav!")

print("=== 4. Checking js/search.js ===")
with open("js/search.js", "r", encoding="utf-8") as f:
    search_code = f.read()
assert "vocab-eng10.json" in search_code, "vocab-eng10.json missing in search.js"
print("js/search.js indexing verified!")

print("=== ALL VOCABULARY INTEGRATION CHECKS PASSED SUCCESSFULLY! ===")
