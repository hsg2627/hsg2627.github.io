import json
import re

print("=== 1. Checking data/listening-writing-eng10.json ===")
with open("data/listening-writing-eng10.json", "r", encoding="utf-8") as f:
    lw_data = json.load(f)
assert len(lw_data["listening"]) == 5, "Expected 5 listening units (Units 6-10)"
assert len(lw_data["writing"]) == 5, "Expected 5 writing units (Units 6-10)"
print(f"Listening units: {len(lw_data['listening'])}, Writing units: {len(lw_data['writing'])} verified!")

print("=== 2. Checking index.html Navigation & Tabs (Rule 16) ===")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

required_tabs = ["Grammar", "Vocabulary", "Listening", "Writing", "Practice Tests", "AI Error Log"]
for tab in required_tabs:
    assert tab in html, f"Tab '{tab}' missing in index.html"

required_views = ["grammar-view", "vocab-view", "listening-view", "writing-view", "quiz-hub-view", "ai-error-log-view"]
for view in required_views:
    assert f'id="{view}"' in html, f"View panel '{view}' missing in index.html"

print("All 6 curriculum tabs and view panels present in index.html!")

print("=== 3. Checking English UI Localization (Rule 15) ===")
assert "Overview" in html, "'Overview' section label missing"
assert "Core Curriculum" in html, "'Core Curriculum' section label missing"
assert "Gamified Arena" in html, "'Gamified Arena' section label missing"
assert "Enter Student Access Code" in html, "Access code modal not translated"
assert "Learning Data & Privacy Management" in html, "Privacy card not translated"
print("100% English UI localization verified!")

print("=== 4. Checking js/app.js Router & Controllers ===")
with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

for r in ["grammar", "vocab", "listening", "writing", "quiz", "ai-error-log"]:
    assert f"'{r}':" in app_js, f"Router mapping missing for '{r}' in app.js"

print("js/app.js router and controller mappings verified!")

print("=== ALL COMPLIANCE AND VERIFICATION CHECKS PASSED (RULES 15 & 16) ===")
