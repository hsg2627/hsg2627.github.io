# -*- coding: utf-8 -*-
"""
Verification Script for Global Success 10 Deployment
"""

import os
import json

def verify_deployment():
    base_dir = r"c:\hsg2627.github.io\Global_Success_10"
    errors = []
    warnings = []

    # 1. Check directories
    expected_dirs = [
        "assets/audio",
        "assets/images",
        "assets/videos",
        "assets/images/ui",
        "data",
        "css",
        "js"
    ]
    for i in range(1, 11):
        u = f"unit{i:02d}"
        expected_dirs.append(f"assets/audio/{u}")
        expected_dirs.append(f"assets/images/{u}")
        expected_dirs.append(f"assets/videos/{u}")

    for d in expected_dirs:
        p = os.path.join(base_dir, d)
        if not os.path.isdir(p):
            errors.append(f"Missing directory: {p}")

    # 2. Check JSON data files
    for i in range(1, 11):
        p = os.path.join(base_dir, "data", f"unit{i:02d}.json")
        if not os.path.isfile(p):
            errors.append(f"Missing JSON: {p}")
        else:
            try:
                with open(p, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if len(data.get("lessons", [])) != 8:
                        warnings.append(f"Unit {i} has {len(data.get('lessons', []))} lessons instead of 8")
            except Exception as e:
                errors.append(f"Invalid JSON {p}: {str(e)}")

    # 3. Check reviews.json and units_meta.json
    rev_path = os.path.join(base_dir, "data", "reviews.json")
    if not os.path.isfile(rev_path):
        errors.append("Missing reviews.json")

    meta_path = os.path.join(base_dir, "data", "units_meta.json")
    if not os.path.isfile(meta_path):
        errors.append("Missing units_meta.json")

    # 4. Check HTML and CSS
    html_path = os.path.join(base_dir, "index.html")
    if not os.path.isfile(html_path):
        errors.append("Missing Global_Success_10/index.html")

    css_path = os.path.join(base_dir, "css", "gs10.css")
    if not os.path.isfile(css_path):
        errors.append("Missing Global_Success_10/css/gs10.css")

    js_path = os.path.join(base_dir, "js", "gs10-player.js")
    if not os.path.isfile(js_path):
        errors.append("Missing Global_Success_10/js/gs10-player.js")

    # 5. Check root redirect
    root_html = r"c:\hsg2627.github.io\global-success-10.html"
    if not os.path.isfile(root_html):
        errors.append("Missing global-success-10.html in root")

    print(f"Verification Results:")
    print(f" - Errors found: {len(errors)}")
    print(f" - Warnings found: {len(warnings)}")
    for e in errors:
        print(f"   [ERROR] {e}")
    for w in warnings:
        print(f"   [WARNING] {w}")

    if not errors and not warnings:
        print("ALL GLOBAL SUCCESS 10 ASSETS & LESSON STRUCTURES ARE 100% VERIFIED!")

if __name__ == "__main__":
    verify_deployment()
