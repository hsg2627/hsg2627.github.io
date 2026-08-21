import os
import re

files = [f for f in os.listdir('.') if f.endswith('.html') or f.endswith('.js')]
for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        if 'collocations_data' in c:
            print(f"{f} references collocations_data")
        if 'trang_anh_data' in c:
            print(f"{f} references trang_anh_data")
        if 'app.js' in c:
            print(f"{f} references app.js")
        if 'styles.css' in c:
            print(f"{f} references styles.css")
