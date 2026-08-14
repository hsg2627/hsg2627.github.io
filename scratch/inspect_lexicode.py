import re
import json

with open('scratch/index (1).html', 'r', encoding='utf-8') as f:
    text = f.read()

print("File total chars:", len(text))

# Let's inspect the sections in index (1).html
sections = re.findall(r'<section\s+id="([^"]+)"', text)
print("Sections in index (1).html:", sections)

# Let's find script blocks
script_match = re.search(r'<script>(.*?)</script>', text, re.DOTALL)
if script_match:
    script_content = script_match.group(1)
    print("Script length:", len(script_content))
    # Extract variable names
    vars_found = re.findall(r'(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=', script_content)
    print("Main variables declared:", vars_found[:15])
