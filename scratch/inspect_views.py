import re

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find all section tags with id
sections = re.findall(r'<section\s+id="([^"]+)"\s*(?:class="([^"]*)")?[^>]*>', text)
print("Sections found:")
for sid, cls in sections:
    print(f"  - id: {sid:30s} | class: {cls}")

# Find all navigate/showView calls
views = set(re.findall(r'showView\([\'"]([^\'"]+)[\'"]\)', text))
print("\nViews called via showView():")
for v in sorted(views):
    print(f"  - {v}")
