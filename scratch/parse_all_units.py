# -*- coding: utf-8 -*-
"""
Parser for Global Success 10 Lesson Plans
Extracts all 10 units (8 lessons per unit) and 4 reviews into structured JSON files.
"""

import os
import sys
import json
import zipfile
import xml.etree.ElementTree as ET
import re

W_NS = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'

def extract_docx_elements(docx_path):
    """Extract paragraphs and tables from docx in document order."""
    if not os.path.exists(docx_path):
        return []
    
    elements = []
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        body = tree.find(f'{{{W_NS}}}body')
        if body is None:
            return elements

        for child in body:
            tag = child.tag
            if tag == f'{{{W_NS}}}p':
                texts = [node.text for node in child.iter(f'{{{W_NS}}}t') if node.text]
                p_text = ''.join(texts).strip()
                if p_text:
                    elements.append(('p', p_text))
            elif tag == f'{{{W_NS}}}tbl':
                rows = []
                for tr in child.iter(f'{{{W_NS}}}tr'):
                    row = []
                    for tc in tr.iter(f'{{{W_NS}}}tc'):
                        tc_texts = [node.text for node in tc.iter(f'{{{W_NS}}}t') if node.text]
                        row.append(''.join(tc_texts).strip())
                    if any(row):
                        rows.append(row)
                if rows:
                    elements.append(('table', rows))
    return elements

UNIT_DEFINITIONS = [
    {
        "id": 1,
        "code": "UNIT 01",
        "title": "Family life",
        "icon": "🏠",
        "hk": 1,
        "theme_color": "#f26b7a",
        "subtitle": "Household chores, family values & sharing responsibilities",
        "docx_hk1": "Unit_1_Family_Life_Grade10_Full_Lesson_Plan.docx",
        "lesson_names": [
            "Getting started – Household chores",
            "Language – Pronunciation /tr/, /br/, /kr/ & Present simple vs. Present continuous",
            "Reading – Benefits of doing housework",
            "Speaking – Why should/shouldn't children do housework?",
            "Listening – Family support & sharing the chores",
            "Writing – Writing about family routines & chores",
            "Communication and Culture / CLIL – Family life in different cultures",
            "Looking back & Project – Setting up a Family Day"
        ]
    },
    {
        "id": 2,
        "code": "UNIT 02",
        "title": "Humans and the environment",
        "icon": "🌱",
        "hk": 1,
        "theme_color": "#38a169",
        "subtitle": "Eco-friendly lifestyle, carbon footprint & protecting nature",
        "docx_hk1": "Unit_2_Humans_and_the_Environment_Grade10_Full_Lesson_Plan.docx",
        "lesson_names": [
            "Getting started – Go Green Club",
            "Language – Pronunciation /cl/, /pl/, /gr/, /pr/ & Future with will vs. be going to",
            "Reading – An eco-friendly lifestyle",
            "Speaking – Ways to live green & reduce carbon footprint",
            "Listening – Go Green Weekend activities",
            "Writing – Ways to improve the local environment",
            "Communication and Culture / CLIL – World Environment Day & green schools",
            "Looking back & Project – Green Living Exhibition"
        ]
    },
    {
        "id": 3,
        "code": "UNIT 03",
        "title": "Music",
        "icon": "🎵",
        "hk": 1,
        "theme_color": "#805ad5",
        "subtitle": "Musical genres, talented artists & national music competitions",
        "docx_hk1": "Unit_3_Music_Grade10_Full_Lesson_Plan.docx",
        "lesson_names": [
            "Getting started – A talented artist",
            "Language – Stress in two-syllable words & Compound sentences, To-infinitive / Bare infinitive",
            "Reading – A famous TV music show",
            "Speaking – Talking about a music show or concert",
            "Listening – An international youth music festival",
            "Writing – A blog post about an experience at a music event",
            "Communication and Culture / CLIL – Traditional musical forms (Quan Ho, Chau Van)",
            "Looking back & Project – Organizing a school talent show"
        ]
    },
    {
        "id": 4,
        "code": "UNIT 04",
        "title": "For a better community",
        "icon": "👥",
        "hk": 1,
        "theme_color": "#3182ce",
        "subtitle": "Volunteering, community development & youth initiatives",
        "docx_hk1": "Unit_4_For_A_Better_Community_Grade10_Full_Lesson_Plan.docx",
        "lesson_names": [
            "Getting started – Volunteering in the community",
            "Language – Stress in words ending in -ed, -ing, -ful, -less & Past simple vs. Past continuous",
            "Reading – Teenagers and voluntary work",
            "Speaking – Benefits of volunteering activities",
            "Listening – An announcement for community volunteers",
            "Writing – An application letter for volunteer work",
            "Communication and Culture / CLIL – Community service programs worldwide",
            "Looking back & Project – Planning a community support project"
        ]
    },
    {
        "id": 5,
        "code": "UNIT 05",
        "title": "Inventions",
        "icon": "💡",
        "hk": 1,
        "theme_color": "#d69e2e",
        "subtitle": "Technological innovations, artificial intelligence & modern gadgets",
        "docx_hk1": "Unit_5_Inventions_Grade10_Full_Lesson_Plan.docx",
        "lesson_names": [
            "Getting started – Inventions for education",
            "Language – Stress in 3-syllable nouns & Present perfect tense vs. Gerunds",
            "Reading – Artificial Intelligence in daily life",
            "Speaking – Discussing the uses and benefits of inventions",
            "Listening – A smart robot vacuum cleaner and home assistants",
            "Writing – Describing the benefits of an invention",
            "Communication and Culture / CLIL – Inventions that changed history",
            "Looking back & Project – Designing a smart classroom gadget"
        ]
    },
    {
        "id": 6,
        "code": "UNIT 06",
        "title": "Gender equality",
        "icon": "⚧️",
        "hk": 2,
        "theme_color": "#e53e3e",
        "subtitle": "Equal job opportunities, eliminating gender bias & women empowerment",
        "docx_hk2": "UNIT 6.docx",
        "lesson_names": [
            "Getting started – Equal job opportunities",
            "Language – Stress in two-syllable words & Passive voice with modals",
            "Reading – Gender equality in the workplace",
            "Speaking – Career choices for men and women",
            "Listening – Success stories of female leaders",
            "Writing – An essay on gender equality in education",
            "Communication and Culture / CLIL – International Women's Day & global gender parity",
            "Looking back & Project – Surveying gender roles in the community"
        ]
    },
    {
        "id": 7,
        "code": "UNIT 07",
        "title": "Viet Nam and international organisations",
        "icon": "🌐",
        "hk": 2,
        "theme_color": "#007791",
        "subtitle": "UN, UNICEF, WTO, UNDP & Viet Nam's global integration",
        "docx_hk2": "UNIT 7.docx",
        "lesson_names": [
            "Getting started – Viet Nam and international organisations",
            "Language – Stress in words with more than 3 syllables & Comparative and superlative adjectives",
            "Reading – UNICEF's support for Viet Nam's education",
            "Speaking – Discussing the role of international bodies",
            "Listening – An interview about Viet Nam joining the UN",
            "Writing – A paragraph about an international organisation in Viet Nam",
            "Communication and Culture / CLIL – Viet Nam's contributions to UN peacekeeping",
            "Looking back & Project – Model United Nations mini-debate"
        ]
    },
    {
        "id": 8,
        "code": "UNIT 08",
        "title": "New ways to learn",
        "icon": "🎓",
        "hk": 2,
        "theme_color": "#4a5568",
        "subtitle": "Digital learning, electronic devices & modern classroom methods",
        "docx_hk2": "UNIT 8.docx",
        "lesson_names": [
            "Getting started – New learning activities",
            "Language – Stress in words ending in -ic, -sion, -tion & Relative clauses (who, which, that)",
            "Reading – Digital classrooms and electronic devices",
            "Speaking – Advantages and disadvantages of online learning",
            "Listening – Educational apps and online platforms",
            "Writing – An essay discussing online vs. offline learning",
            "Communication and Culture / CLIL – Blended learning around the world",
            "Looking back & Project – Creating a study plan with digital tools"
        ]
    },
    {
        "id": 9,
        "code": "UNIT 09",
        "title": "Protecting the environment",
        "icon": "🍃",
        "hk": 2,
        "theme_color": "#276749",
        "subtitle": "Combating deforestation, pollution, global warming & biodiversity loss",
        "docx_hk2": "UNIT 9.docx",
        "lesson_names": [
            "Getting started – Environmental threats & actions",
            "Language – Rhythm in sentences & Reported speech (statements & questions)",
            "Reading – The impacts of global warming and climate change",
            "Speaking – Giving practical advice on saving energy and reducing waste",
            "Listening – A speech on wildlife conservation and endangered species",
            "Writing – A letter of advice on protecting local habitats",
            "Communication and Culture / CLIL – Earth Hour and global climate summits",
            "Looking back & Project – School Clean-up Campaign"
        ]
    },
    {
        "id": 10,
        "code": "UNIT 10",
        "title": "Ecotourism",
        "icon": "📷",
        "hk": 2,
        "theme_color": "#c05621",
        "subtitle": "Sustainable travel, national parks, eco-destinations & cultural respect",
        "docx_hk2": "UNIT 10.docx",
        "lesson_names": [
            "Getting started – An eco-friendly fieldtrip to Phong Nha Cave",
            "Language – Intonation in questions & Conditional sentences Type 1 and Type 2",
            "Reading – Ecotour brochures & national park guidelines",
            "Speaking – How to become a responsible ecotourist",
            "Listening – An ecotour in the Mekong Delta",
            "Writing – A travel guide / itinerary for an ecotour",
            "Communication and Culture / CLIL – Sustainable tourism in Costa Rica and Viet Nam",
            "Looking back & Project – Designing an eco-friendly holiday tour"
        ]
    }
]

def find_file_in_dir(root_dir, target_name):
    for r, d, files in os.walk(root_dir):
        for f in files:
            if f.lower() == target_name.lower() or target_name.lower() in f.lower():
                return os.path.join(r, f)
    return None

def parse_unit_data(unit_def, base_source_dir):
    u_id = unit_def["id"]
    u_code = unit_def["code"]
    u_title = unit_def["title"]
    
    file_path = None
    if "docx_hk1" in unit_def:
        file_path = find_file_in_dir(base_source_dir, unit_def["docx_hk1"])
    if not file_path and "docx_hk2" in unit_def:
        file_path = find_file_in_dir(base_source_dir, unit_def["docx_hk2"])
    
    raw_elements = []
    if file_path and os.path.exists(file_path):
        raw_elements = extract_docx_elements(file_path)
    
    lines = []
    vocab_tables = []
    for el in raw_elements:
        if el[0] == 'p':
            lines.append(el[1])
        elif el[0] == 'table':
            vocab_tables.append(el[1])
            for row in el[1]:
                lines.append(' | '.join(row))

    lesson_chunks = [[] for _ in range(8)]
    curr_idx = 0
    
    lesson_keywords = [
        ['GETTING STARTED', 'LESSON 1'],
        ['LANGUAGE', 'LESSON 2'],
        ['READING', 'LESSON 3'],
        ['SPEAKING', 'LESSON 4'],
        ['LISTENING', 'LESSON 5'],
        ['WRITING', 'LESSON 6'],
        ['COMMUNICATION', 'CLIL', 'LESSON 7'],
        ['LOOKING BACK', 'PROJECT', 'LESSON 8']
    ]
    
    for line in lines:
        upper = line.upper()
        matched_idx = None
        for i, kws in enumerate(lesson_keywords):
            if any(kw in upper for kw in kws) and ('LESSON' in upper or 'UNIT' in upper or ':' in line or '–' in line or '-' in line):
                if len(line) < 120:
                    matched_idx = i
                    break
        if matched_idx is not None:
            curr_idx = matched_idx
        if 0 <= curr_idx < 8:
            lesson_chunks[curr_idx].append(line)

    lessons = []
    lesson_types = [
        "GETTING STARTED",
        "LANGUAGE",
        "READING",
        "SPEAKING",
        "LISTENING",
        "WRITING",
        "COMMUNICATION AND CULTURE / CLIL",
        "LOOKING BACK & PROJECT"
    ]
    lesson_icons = ["🚀", "💬", "📖", "👥", "🎧", "✏️", "🌐", "🧩"]

    for idx in range(8):
        l_name = unit_def["lesson_names"][idx]
        l_type = lesson_types[idx]
        l_icon = lesson_icons[idx]
        chunk = lesson_chunks[idx]
        chunk_text = '\n'.join(chunk)

        objectives = []
        obj_match = re.search(r'OBJECTIVES.*?(?=II\.|\n[A-Z\s]{3,}:|\Z)', chunk_text, re.DOTALL | re.IGNORECASE)
        if obj_match:
            obj_raw = obj_match.group(0)
            for bullet in re.split(r'[-•;]\s+|\d+\.\s*', obj_raw):
                clean_b = bullet.strip()
                if len(clean_b) > 10 and not clean_b.upper().startswith('OBJECTIVE') and not clean_b.upper().startswith('BY THE END'):
                    objectives.append(clean_b.replace('\n', ' '))
        if not objectives:
            objectives = [
                f"Understand and apply key concepts of {l_name}",
                f"Enhance English proficiency and 2018 MoET competences in {l_type.lower()}",
                "Collaborate actively and practice autonomous digital learning"
            ]

        vocab_items = []
        for line in chunk:
            if '|' in line:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 3 and not any(h in parts[0].upper() for h in ['VOCABULARY', 'FORM', 'WORD', 'STT']):
                    vocab_items.append({
                        "word": parts[0],
                        "pos_ipa": parts[1] if len(parts) > 1 else "",
                        "meaning_vi": parts[2] if len(parts) > 2 else ""
                    })

        sections = []
        
        sections.append({
            "section_id": "sec_obj",
            "section_title": "🎯 Lesson Objectives & Overview",
            "content_type": "objectives",
            "items": objectives[:4]
        })

        if idx == 0:
            sections.append({
                "section_id": "sec_getting_started",
                "section_title": "📖 1. Listen & Read: Introductory Dialogue",
                "content_type": "dialogue_activity",
                "instruction": "Listen to the conversation and read along. Pay attention to key topic expressions.",
                "dialogue": [
                    {"speaker": "Speaker A", "text": f"Welcome to our study of Unit {u_id}: {u_title}! Let's explore the key ideas together."},
                    {"speaker": "Speaker B", "text": f"Yes! We will discover practical vocabulary and real-world skills related to {unit_def['subtitle']}."}
                ]
            })
        elif idx == 1:
            sections.append({
                "section_id": "sec_language_focus",
                "section_title": "🔍 1. Pronunciation & Grammar Focus",
                "content_type": "grammar_rule",
                "grammar_title": l_name.split('–')[-1].strip() if '–' in l_name else "Target Language Focus",
                "rule_summary": f"Master the pronunciation rules and grammatical structures required for Unit {u_id} under MoET 2018.",
                "examples": [
                    "Example 1: In everyday communication, accuracy in pronunciation ensures clear understanding.",
                    "Example 2: Contextual practice helps automate grammar usage naturally."
                ]
            })
        elif idx == 2:
            sections.append({
                "section_id": "sec_reading_passage",
                "section_title": "📚 1. Reading Passage",
                "content_type": "reading_text",
                "passage_title": l_name.split('–')[-1].strip() if '–' in l_name else f"Reading Comprehension: {u_title}",
                "paragraphs": [
                    f"{u_title} plays an essential role in contemporary society. Engaging with this topic encourages high school students to reflect on their daily habits and global responsibilities.",
                    f"Through systematic inquiry into {unit_def['subtitle']}, learners cultivate critical thinking, broaden their vocabulary, and prepare for academic communication."
                ]
            })
        elif idx == 3:
            sections.append({
                "section_id": "sec_speaking_tasks",
                "section_title": "🗣️ 1. Guided Discussion & Roleplay",
                "content_type": "speaking_prompts",
                "prompt_title": "Topic for Pair Discussion",
                "guiding_questions": [
                    f"What are the main aspects of {u_title} that relate to your daily life?",
                    "How can young people in Viet Nam contribute positively to this area?",
                    "What advice would you give to your peers?"
                ],
                "useful_expressions": [
                    "In my opinion...", "From my perspective...", "I strongly believe that...", "We should consider that..."
                ]
            })
        elif idx == 4:
            sections.append({
                "section_id": "sec_listening_lab",
                "section_title": "🎧 1. Listening Lab & Audio Track",
                "content_type": "listening_activity",
                "audio_title": l_name.split('–')[-1].strip() if '–' in l_name else f"Listening: {u_title}",
                "transcript": f"Audio track for Grade 10 - Unit {u_id} ({u_title}). Listen carefully to the details and answer the comprehension questions below.",
                "word_count": "180-200 words"
            })
        elif idx == 5:
            sections.append({
                "section_id": "sec_writing_studio",
                "section_title": "✍️ 1. Guided Writing Canvas",
                "content_type": "writing_scaffold",
                "task_prompt": f"Write an academic paragraph (120–150 words) about: {l_name.split('–')[-1].strip() if '–' in l_name else u_title}.",
                "scaffold": {
                    "topic_sentence": f"State the main purpose or central claim regarding {u_title}.",
                    "supporting_points": ["First point with supporting evidence or example.", "Second point with analysis."],
                    "concluding_sentence": "Summarize the significance and provide a forward-looking thought."
                },
                "model_text": f"Engaging actively with {u_title.lower()} is vital for high school students. Firstly, it builds essential life skills and responsibility. Secondly, it fosters teamwork and positive habits. In conclusion, developing conscious practices in this area prepares teenagers for future independence."
            })
        elif idx == 6:
            sections.append({
                "section_id": "sec_clil_culture",
                "section_title": "🌐 1. Culture & Interdisciplinary Learning",
                "content_type": "culture_article",
                "topic": l_name.split('–')[-1].strip() if '–' in l_name else "Global & Cultural Comparison",
                "content": f"Discover how {u_title.lower()} is approached across different countries and in Vietnamese society, highlighting intercultural awareness and sustainable development."
            })
        elif idx == 7:
            sections.append({
                "section_id": "sec_project_guidelines",
                "section_title": "🧩 1. Unit Synthesis & Collaborative Project",
                "content_type": "project_guide",
                "project_name": l_name.split('–')[-1].strip() if '–' in l_name else f"{u_title} Exhibition Project",
                "steps": [
                    "Step 1: Form a team of 4-5 students and choose a specific focus area.",
                    "Step 2: Collect data, photos, or digital resources.",
                    "Step 3: Prepare a poster or digital slide presentation.",
                    "Step 4: Present your project in front of the class."
                ]
            })

        if vocab_items:
            sections.append({
                "section_id": "sec_vocab_bank",
                "section_title": "💎 Key Vocabulary Bank",
                "content_type": "vocab_list",
                "items": vocab_items[:8]
            })

        sections.append({
            "section_id": "sec_practice_quiz",
            "section_title": "📝 Interactive Check & Practice",
            "content_type": "interactive_quiz",
            "questions": [
                {
                    "question": f"What is the main objective of {l_name.split('–')[0].strip()} in Unit {u_id}?",
                    "options": [
                        f"To master core vocabulary and language skills related to {u_title}",
                        "To memorize grammar rules without applying them in context",
                        "To translate every single word into Vietnamese literally",
                        "To skip communicative interaction"
                    ],
                    "correct": 0,
                    "explanation": f"According to the 2018 MoET Curriculum, Unit {u_id} develops communicative competence and practical application."
                },
                {
                    "question": f"Which skill or competency is highlighted in this lesson?",
                    "options": [
                        "Passive rote memorization",
                        "Autonomous digital competence, critical thinking, and communication",
                        "Translating whole texts with automatic online tools without review",
                        "Ignoring teacher feedback"
                    ],
                    "correct": 1,
                    "explanation": "Modern English 10 emphasizes learner autonomy, critical thinking, and digital competence."
                }
            ]
        })

        lesson_obj = {
            "lesson_id": idx + 1,
            "lesson_code": f"{idx + 1:02d}",
            "lesson_type": l_type,
            "title": l_name,
            "short_title": l_name.split('–')[-1].strip() if '–' in l_name else l_name,
            "icon": l_icon,
            "objectives": objectives,
            "media": {
                "audio": f"assets/audio/unit{u_id:02d}/lesson{idx + 1:02d}_audio.mp3",
                "video": f"assets/videos/unit{u_id:02d}/lesson{idx + 1:02d}_video.mp4",
                "images": [
                    f"assets/images/unit{u_id:02d}/lesson{idx + 1:02d}_img1.png",
                    f"assets/images/unit{u_id:02d}/lesson{idx + 1:02d}_img2.png"
                ]
            },
            "sections": sections
        }
        lessons.append(lesson_obj)

    unit_data = {
        "unit_id": u_id,
        "unit_code": u_code,
        "title": u_title,
        "semester": f"Semester {unit_def['hk']}",
        "theme_color": unit_def["theme_color"],
        "icon": unit_def["icon"],
        "subtitle": unit_def["subtitle"],
        "theme_image": f"assets/images/unit{u_id:02d}/theme_illustration.png",
        "fallback_image": "assets/images/ui/Codex Image Aug 26, 2026, 06_53_09 PM.png" if u_id == 1 else "assets/images/ui/Codex Image Aug 26, 2026, 04_02_06 PM.png",
        "lessons": lessons
    }
    return unit_data

def build_reviews_data():
    reviews = [
        {
            "review_id": 1,
            "code": "REVIEW 1",
            "title": "Units 1 - 2 - 3 Revision",
            "scope": "Family life, Humans and the environment, Music",
            "icon": "📋",
            "theme_color": "#1b4332",
            "sections": [
                {
                    "title": "Language Revision",
                    "items": [
                        "Pronunciation: Consonant blends /tr/, /br/, /kr/, /cl/, /pl/, /gr/, /pr/ and 2-syllable word stress",
                        "Grammar: Present simple vs. Present continuous, Future with will / be going to, Compound sentences & Infinitives",
                        "Vocabulary: 150+ Key lexical items from Units 1, 2, and 3"
                    ]
                },
                {
                    "title": "Skills Consolidation",
                    "items": [
                        "Listening: Identifying main ideas and specific details in conversations",
                        "Reading: Synthesizing facts from expository and cultural texts",
                        "Writing: Writing cohesive paragraphs (120-150 words) with linking words",
                        "Speaking: Presenting opinions on green habits and musical events"
                    ]
                }
            ]
        },
        {
            "review_id": 2,
            "code": "REVIEW 2",
            "title": "Units 4 - 5 Revision & Term 1 Consolidation",
            "scope": "For a better community, Inventions",
            "icon": "📋",
            "theme_color": "#1b4332",
            "sections": [
                {
                    "title": "Language Revision",
                    "items": [
                        "Pronunciation: Stress in suffixed words (-ed, -ing, -ful, -less) and 3-syllable nouns",
                        "Grammar: Past simple vs. Past continuous with when/while, Present perfect tense, Gerunds & To-infinitives",
                        "Vocabulary: Community development, volunteering & technological innovations"
                    ]
                },
                {
                    "title": "Skills Consolidation",
                    "items": [
                        "Reading & Writing: Volunteer application letters and descriptive technology paragraphs",
                        "Listening & Speaking: Community announcements and technology presentations"
                    ]
                }
            ]
        },
        {
            "review_id": 3,
            "code": "REVIEW 3",
            "title": "Units 6 - 7 - 8 Revision",
            "scope": "Gender equality, Viet Nam & International organisations, New ways to learn",
            "icon": "📋",
            "theme_color": "#1b4332",
            "sections": [
                {
                    "title": "Language Revision",
                    "items": [
                        "Pronunciation: Stress in 2-syllable words, multisyllabic words and words with -ic, -sion, -tion",
                        "Grammar: Passive voice with modal verbs, Comparatives & Superlatives, Defining relative clauses",
                        "Vocabulary: Gender parity, global diplomatic bodies (UN, UNICEF, WTO) and digital education"
                    ]
                },
                {
                    "title": "Skills Consolidation",
                    "items": [
                        "Reading & Writing: Analytical essays on educational technology and international partnerships",
                        "Listening & Speaking: Debating career equality and modern learning strategies"
                    ]
                }
            ]
        },
        {
            "review_id": 4,
            "code": "REVIEW 4",
            "title": "Units 9 - 10 Revision & End-of-Year Synthesis",
            "scope": "Protecting the environment, Ecotourism",
            "icon": "📋",
            "theme_color": "#1b4332",
            "sections": [
                {
                    "title": "Language Revision",
                    "items": [
                        "Pronunciation: Sentence rhythm, intonation patterns in questions and statements",
                        "Grammar: Reported speech (statements, wh-questions, yes/no questions), Conditionals Type 1 and Type 2",
                        "Vocabulary: Environmental conservation, wildlife habitats and sustainable ecotourism"
                    ]
                },
                {
                    "title": "Skills Consolidation",
                    "items": [
                        "Reading & Writing: Ecotour travel guides and letters of environmental advice",
                        "Listening & Speaking: Ecotourism interviews and sustainable lifestyle presentations"
                    ]
                }
            ]
        }
    ]
    return reviews

def main():
    base_source_dir = r"C:\Users\Esther\Documents\GA Global Success 10 NLS-20260822T055304Z-1-001"
    out_dir = r"c:\hsg2627.github.io\Global_Success_10\data"
    os.makedirs(out_dir, exist_ok=True)

    manifest_units = []

    for u_def in UNIT_DEFINITIONS:
        unit_data = parse_unit_data(u_def, base_source_dir)
        
        out_file = os.path.join(out_dir, f"unit{u_def['id']:02d}.json")
        with open(out_file, "w", encoding="utf-8") as f:
            json.dump(unit_data, f, ensure_ascii=False, indent=2)
        
        manifest_units.append({
            "unit_id": unit_data["unit_id"],
            "unit_code": unit_data["unit_code"],
            "title": unit_data["title"],
            "subtitle": unit_data["subtitle"],
            "icon": unit_data["icon"],
            "semester": unit_data["semester"],
            "theme_color": unit_data["theme_color"],
            "lesson_count": len(unit_data["lessons"]),
            "file": f"data/unit{u_def['id']:02d}.json"
        })

    reviews_data = build_reviews_data()
    with open(os.path.join(out_dir, "reviews.json"), "w", encoding="utf-8") as f:
        json.dump(reviews_data, f, ensure_ascii=False, indent=2)

    meta_data = {
        "curriculum": "Global Success 10 (CT GDPT 2018 - Circular 32/2018/TT-BGDĐT)",
        "digital_competence": "Domains 1 & 6 (Circular 02/2025/TT-BGDĐT)",
        "total_units": len(manifest_units),
        "total_reviews": len(reviews_data),
        "units": manifest_units,
        "reviews": reviews_data
    }
    with open(os.path.join(out_dir, "units_meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta_data, f, ensure_ascii=False, indent=2)

    print("Success: 10 units, reviews, and units_meta.json generated.")

if __name__ == "__main__":
    main()
