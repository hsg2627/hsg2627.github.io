# -*- coding: utf-8 -*-
import json
import re

# Load index.html
with open('c:/hsg2627.github.io/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect where section id="task-hsg12-vocab" starts and ends
start_marker = '<!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 ==================== -->'
end_marker = '<!-- ==================== VIEW 6B: SUBTASK - COMPREHENSIVE GRAMMAR (CGEL ACADEMIC EDITION) ==================== -->'

if start_marker not in html or end_marker not in html:
    print("Error: Markers not found!")
    exit(1)

print("Found markers successfully!")
