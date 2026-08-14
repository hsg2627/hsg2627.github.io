# -*- coding: utf-8 -*-
import re
from collections import Counter

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

verbs = re.findall(r'"verb":\s*"([^"]+)"', c)
units = re.findall(r'"unit":\s*(\d+)', c)

print("Total Phrasal Verbs in index.html:", len(verbs))
print("Unit Distribution:", sorted(Counter(units).items(), key=lambda x: int(x[0])))
