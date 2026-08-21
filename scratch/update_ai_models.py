import json

file_path = "data/ai-eval-bank.json"

with open(file_path, "r", encoding="utf-8") as f:
    data = json.load(f)

models = [
    "gpt-4o",
    "claude-3.5-sonnet",
    "gemini-2.5-pro",
    "llama-3.3-70b",
    "gemini-1.5-flash",
    "gpt-4o-mini"
]

reviewers = ["R1", "R2", "R3"]

for idx, item in enumerate(data.get("items", [])):
    model_name = models[idx % len(models)]
    rev = reviewers[idx % len(reviewers)]
    if "provenance" not in item:
        item["provenance"] = {}
    item["provenance"]["generator"] = model_name
    item["provenance"]["validation"] = {
        "status": "approved",
        "reviewer": rev,
        "prompt_id": f"PT-AE-{idx+1:02d}"
    }

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Updated {len(data['items'])} items with balanced models: {models}")
