// ========================================================
// Monsterest Inn & Guild — Lexicode Vocabulary Engine
// Extracted from index.html for performance & maintainability
// ========================================================

// Embedded Complete 108 Vocabulary Dataset
const RAW_VOCAB = [
  {
    "id": 1,
    "term": "nurture",
    "clean_word": "nurture",
    "type": "v",
    "desc": "[B2] v: nuôi dưỡng, bồi đắp (tình cảm, kỹ năng)",
    "example": "Parents should nurture their children's life skills from an early age.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 2,
    "term": "gratitude",
    "clean_word": "gratitude",
    "type": "n",
    "desc": "[B2] n: lòng biết ơn sâu sắc",
    "example": "She expressed her deep gratitude to her parents for their endless support.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 3,
    "term": "resilience",
    "clean_word": "resilience",
    "type": "n",
    "desc": "[C1] n: sự kiên cường, khả năng tự phục hồi",
    "example": "Single-parent families often show remarkable resilience.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 4,
    "term": "harmony",
    "clean_word": "harmony",
    "type": "n",
    "desc": "[B2] n: sự hòa thuận, hài hòa",
    "example": "Sharing chores helps family members live in perfect harmony.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 5,
    "term": "vulnerable",
    "clean_word": "vulnerable",
    "type": "adj",
    "desc": "[C1] adj: dễ bị tổn thương",
    "example": "Minors are often the most vulnerable members of a family during rough patches.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 6,
    "term": "appreciate",
    "clean_word": "appreciate",
    "type": "v",
    "desc": "[B1] v: trân trọng, đánh giá cao",
    "example": "He deeply appreciates his mother’s daily efforts to take care of the family.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 7,
    "term": "multigenerational",
    "clean_word": "multigenerational",
    "type": "adj",
    "desc": "[C1] adj: thuộc về nhiều thế hệ, đa thế hệ",
    "example": "Living in a multigenerational household requires mutual respect and cooperation.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 8,
    "term": "breadwinner",
    "clean_word": "breadwinner",
    "type": "n",
    "desc": "[B2] n: người trụ cột đi làm nuôi gia đình",
    "example": "Traditionally, the father was seen as the sole breadwinner of the family.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 9,
    "term": "homemaker",
    "clean_word": "homemaker",
    "type": "n",
    "desc": "[B2] n: người nội trợ",
    "example": "My mother chose to be a homemaker to spend more time with us.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 10,
    "term": "relationship",
    "clean_word": "relationship",
    "type": "n",
    "desc": "[B1] n: mối quan hệ",
    "example": "A supportive relationship between siblings fosters a warm home atmosphere.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 11,
    "term": "characteristic",
    "clean_word": "characteristic",
    "type": "n",
    "desc": "[B2] n: tính cách đặc trưng, đặc điểm",
    "example": "Generosity is a wonderful characteristic of my grandmother.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 12,
    "term": "routine",
    "clean_word": "routine",
    "type": "n",
    "desc": "[B1] n: thói quen, hoạt động thường nhật",
    "example": "Our family routine includes having dinner together every evening.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 13,
    "term": "secure",
    "clean_word": "secure",
    "type": "adj",
    "desc": "[B2] adj: an toàn, chắc chắn",
    "example": "A stable family background makes children feel secure.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 14,
    "term": "background",
    "clean_word": "background",
    "type": "n",
    "desc": "[B2] n: hoàn cảnh gia đình, nền tảng",
    "example": "He comes from a very respectful and educated family background.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 15,
    "term": "mature",
    "clean_word": "mature",
    "type": "adj",
    "desc": "[B2] adj: trưởng thành, chín chắn",
    "example": "Helping with chores helps children become more mature and responsible.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 16,
    "term": "shelter",
    "clean_word": "shelter",
    "type": "n/v",
    "desc": "[B2] n/v: nơi nương tựa, bảo chở, che chở",
    "example": "The family provides a safe shelter for everyone during difficult times.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 17,
    "term": "household",
    "clean_word": "household",
    "type": "n/adj",
    "desc": "[B1] n/adj: hộ gia đình, thuộc gia đình",
    "example": "Managing household finance requires careful planning by both parents.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 18,
    "term": "minor",
    "clean_word": "minor",
    "type": "n",
    "desc": "[C1] n: người vị thành niên, trẻ nhỏ",
    "example": "Minors must be protected from domestic violence and neglect.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 19,
    "term": "assurance",
    "clean_word": "assurance",
    "type": "n",
    "desc": "[C1] n: sự đảm bảo, chắc chắn, tự tin",
    "example": "His parents' trust and assurance give him strength to carry on.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 20,
    "term": "bond",
    "clean_word": "bond",
    "type": "n",
    "desc": "[B2] n: sự gắn kết, mối liên kết",
    "example": "Doing activities together strengthens the emotional bond among family members.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 21,
    "term": "guidance",
    "clean_word": "guidance",
    "type": "n",
    "desc": "[B2] n: sự hướng dẫn, chỉ bảo",
    "example": "Children need proper guidance from their parents to navigate social media.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 22,
    "term": "discipline",
    "clean_word": "discipline",
    "type": "n",
    "desc": "[B2] n: kỷ luật, rèn luyện nhân cách",
    "example": "Parental discipline should always be combined with love and respect.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 23,
    "term": "connection",
    "clean_word": "connection",
    "type": "n",
    "desc": "[B1] n: mối kết nối",
    "example": "Technology can enhance connection, but face-to-face interaction is irreplaceable.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 24,
    "term": "duty",
    "clean_word": "duty",
    "type": "n",
    "desc": "[B1] n: nhiệm vụ, nghĩa vụ",
    "example": "It is our duty to take care of our grandparents when they get old.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 25,
    "term": "respect",
    "clean_word": "respect",
    "type": "n/v",
    "desc": "[B1] n/v: tôn trọng, kính trọng",
    "example": "Mutual respect is the foundation of any healthy relationship.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 26,
    "term": "pass down / pass on",
    "clean_word": "pass down / pass on",
    "type": "phr.v",
    "desc": "[B2] phr.v: truyền lại qua các thế hệ",
    "example": "Traditional British family values are passed down from parents to children.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 27,
    "term": "cheer up",
    "clean_word": "cheer up",
    "type": "phr.v",
    "desc": "[B1] phr.v: làm vui lên, cổ vũ tinh thần",
    "example": "Hieu’s parents always try to cheer him up whenever he has problems.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 28,
    "term": "stay up late",
    "clean_word": "stay up late",
    "type": "phr.v",
    "desc": "[B1] phr.v: thức khuya",
    "example": "Teenagers should not stay up late before important exams.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 29,
    "term": "tidy up",
    "clean_word": "tidy up",
    "type": "phr.v",
    "desc": "[B1] phr.v: dọn dẹp ngăn nắp",
    "example": "She spent the whole morning tidying up her bedroom.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 30,
    "term": "carry on",
    "clean_word": "carry on",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiếp tục gánh vác, thực hiện",
    "example": "Despite the hardships, they decided to carry on their family business.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 31,
    "term": "bring up",
    "clean_word": "bring up",
    "type": "phr.v",
    "desc": "[B2] phr.v: nuôi nấng, dạy dỗ",
    "example": "She was brought up by her grandparents in a quiet rural area.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 32,
    "term": "look after",
    "clean_word": "look after",
    "type": "phr.v",
    "desc": "[B1] phr.v: chăm sóc, trông nom",
    "example": "My father stays at home to look after my little sister today.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 33,
    "term": "turn to",
    "clean_word": "turn to",
    "type": "phr.v",
    "desc": "[B2] phr.v: tìm đến ai để xin lời khuyên/giúp đỡ",
    "example": "I always turn to my mother whenever I feel overwhelmed.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 34,
    "term": "grow up",
    "clean_word": "grow up",
    "type": "phr.v",
    "desc": "[B1] phr.v: lớn lên, trưởng thành",
    "example": "Children who grow up in a loving environment tend to be more confident.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 35,
    "term": "work out",
    "clean_word": "work out",
    "type": "phr.v",
    "desc": "[B2] phr.v: giải quyết ổn thỏa, tìm ra giải pháp",
    "example": "They managed to work out their family conflicts through open discussion.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 36,
    "term": "do the heavy lifting",
    "clean_word": "do the heavy lifting",
    "type": "colloc",
    "desc": "[B2] colloc: mang vác nặng, làm việc nặng nhọc",
    "example": "My father usually does the heavy lifting in our household.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 37,
    "term": "build strong family bonds",
    "clean_word": "build strong family bonds",
    "type": "colloc",
    "desc": "[B2] colloc: xây dựng mối gắn kết gia đình bền chặt",
    "example": "Sharing household chores equally helps build strong family bonds.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 38,
    "term": "provide peace of mind",
    "clean_word": "provide peace of mind",
    "type": "colloc",
    "desc": "[B2] colloc: mang lại sự yên tâm, bình thản",
    "example": "Professional cleaning services provide peace of mind for busy parents.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 39,
    "term": "share / divide household responsibilities",
    "clean_word": "share / divide household responsibilities",
    "type": "colloc",
    "desc": "[B2] colloc: phân chia trách nhiệm làm việc nhà",
    "example": "Modern families tend to divide household responsibilities more fairly.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 40,
    "term": "lose one's temper",
    "clean_word": "lose one's temper",
    "type": "colloc",
    "desc": "[B2] colloc: mất bình tĩnh, nổi giận",
    "example": "Parents should avoid losing their temper in front of their children.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 41,
    "term": "earn money to support the family",
    "clean_word": "earn money to support the family",
    "type": "colloc",
    "desc": "[B2] colloc: kiếm tiền nuôi gia đình",
    "example": "Both parents work hard to earn money to support the family.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 42,
    "term": "do the cooking",
    "clean_word": "do the cooking",
    "type": "colloc",
    "desc": "[B1] colloc: nấu nướng",
    "example": "In my family, my sister usually does the cooking after school.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 43,
    "term": "do the laundry",
    "clean_word": "do the laundry",
    "type": "colloc",
    "desc": "[B1] colloc: giặt giũ",
    "example": "Using a modern washing machine makes doing the laundry much easier.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 44,
    "term": "divide housework equally",
    "clean_word": "divide housework equally",
    "type": "colloc",
    "desc": "[B2] colloc: chia đều việc nhà",
    "example": "We divide housework equally among all family members.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 45,
    "term": "share household chores",
    "clean_word": "share household chores",
    "type": "colloc",
    "desc": "[B1] colloc: chia sẻ công việc nhà",
    "example": "Sharing household chores teaches children teamwork and responsibility.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 46,
    "term": "daily routines",
    "clean_word": "daily routines",
    "type": "colloc",
    "desc": "[B1] colloc: thói quen sinh hoạt hàng ngày",
    "example": "Establishing stable daily routines helps children feel more secure.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 47,
    "term": "emotional support",
    "clean_word": "emotional support",
    "type": "colloc",
    "desc": "[B2] colloc: sự hỗ trợ về mặt tinh thần",
    "example": "Family is the ultimate foundation of lifelong emotional support.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 48,
    "term": "express gratitude",
    "clean_word": "express gratitude",
    "type": "colloc",
    "desc": "[B2] colloc: bày tỏ lòng biết ơn",
    "example": "We should express gratitude to our parents through small daily actions.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 49,
    "term": "shape character",
    "clean_word": "shape character",
    "type": "colloc",
    "desc": "[B2] colloc: định hình nhân cách, tính cách",
    "example": "Parents should shape their children’s character through discipline.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 50,
    "term": "make a decision",
    "clean_word": "make a decision",
    "type": "colloc",
    "desc": "[B1] colloc: đưa ra quyết định",
    "example": "Both parents should discuss together to make a major decision.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 51,
    "term": "rough patches",
    "clean_word": "rough patches",
    "type": "idiom",
    "desc": "[C1] idiom: những giai đoạn sóng gió, khó khăn trong cuộc sống",
    "example": "Healthy families always stick together and support each other through rough patches.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 52,
    "term": "spick and span",
    "clean_word": "spick and span",
    "type": "idiom",
    "desc": "[C1] idiom: sạch sẽ ngăn nắp, không một tì vết",
    "example": "Her sister loves to keep their kitchen spick and span.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 53,
    "term": "flesh and blood",
    "clean_word": "flesh and blood",
    "type": "idiom",
    "desc": "[C2] idiom: máu mủ ruột rà, người cùng gia đình",
    "example": "You must help your brother; after all, he is your own flesh and blood.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 54,
    "term": "black sheep",
    "clean_word": "black sheep",
    "type": "idiom",
    "desc": "[C1] idiom: kẻ lập dị, khác biệt trong gia đình",
    "example": "He is the black sheep of the family because he chose music over business.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 55,
    "term": "chip off the old block",
    "clean_word": "chip off the old block",
    "type": "idiom",
    "desc": "[C2] idiom: giống hệt bố/mẹ (về tính cách/ngoại hình)",
    "example": "Nam loves fixing machines just like his dad; he is a chip off the old block.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 1
  },
  {
    "id": 56,
    "term": "adopt",
    "clean_word": "adopt",
    "type": "v",
    "desc": "[B2] v: chọn theo, bắt đầu áp dụng (lối sống, phương pháp)",
    "example": "More people are adopting an eco-friendly lifestyle to protect nature.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 57,
    "term": "sustainability",
    "clean_word": "sustainability",
    "type": "n",
    "desc": "[C1] n: tính bền vững, khả năng duy trì lâu dài",
    "example": "Sustainability has become a key target for modern urban planning.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 58,
    "term": "emission",
    "clean_word": "emission",
    "type": "n",
    "desc": "[B2] n: khí thải, sự phát thải",
    "example": "Carbon emissions cause global temperatures to rise.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 59,
    "term": "carbon footprint",
    "clean_word": "carbon footprint",
    "type": "n",
    "desc": "[B2] n: dấu chân carbon",
    "example": "Turning off electrical appliances when not in use helps reduce your carbon footprint.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 60,
    "term": "eco-friendly",
    "clean_word": "eco-friendly",
    "type": "adj",
    "desc": "[B2] adj: thân thiện với môi trường",
    "example": "Switching to eco-friendly raw materials is highly beneficial.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 61,
    "term": "conservation",
    "clean_word": "conservation",
    "type": "n",
    "desc": "[B2] n: sự bảo tồn (thiên nhiên, năng lượng)",
    "example": "The local government is promoting the conservation of wild animals.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 62,
    "term": "appliance",
    "clean_word": "appliance",
    "type": "n",
    "desc": "[B2] n: thiết bị gia dụng",
    "example": "Modern household appliances consume much less electricity than older models.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 63,
    "term": "global warming",
    "clean_word": "global warming",
    "type": "n.phr",
    "desc": "[B2] n.phr: hiện tượng nóng lên toàn cầu",
    "example": "Global warming leads to extreme weather events like heatwaves.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 64,
    "term": "litter",
    "clean_word": "litter",
    "type": "n/v",
    "desc": "[B1] n/v: rác thải / xả rác bừa bãi",
    "example": "Please do not litter in public parks and school yards.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 65,
    "term": "organic",
    "clean_word": "organic",
    "type": "adj",
    "desc": "[B2] adj: hữu cơ (thực phẩm, trồng trọt không hóa chất)",
    "example": "Organic vegetables are safer for our health and the environment.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 66,
    "term": "refillable",
    "clean_word": "refillable",
    "type": "adj",
    "desc": "[B2] adj: có thể đổ đầy lại, tái sử dụng",
    "example": "Bringing a refillable water bottle helps cut down on plastic waste.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 67,
    "term": "resource",
    "clean_word": "resource",
    "type": "n",
    "desc": "[B1] n: tài nguyên (thiên nhiên, học tập)",
    "example": "We are rapidly running out of precious natural resources like fossil fuels.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 68,
    "term": "responsibility",
    "clean_word": "responsibility",
    "type": "n",
    "desc": "[B1] n: trách nhiệm",
    "example": "Protecting the Earth from pollution is a collective responsibility.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 69,
    "term": "sustainable",
    "clean_word": "sustainable",
    "type": "adj",
    "desc": "[B2] adj: bền vững, lâu dài",
    "example": "We need to find sustainable solutions to solve water shortages.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 70,
    "term": "raw material",
    "clean_word": "raw material",
    "type": "n.phr",
    "desc": "[B2] n.phr: nguyên liệu thô",
    "example": "Our company only uses organic raw materials to manufacture clothes.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 71,
    "term": "consequence",
    "clean_word": "consequence",
    "type": "n",
    "desc": "[B2] n: hậu quả, hệ quả",
    "example": "Deforestation has severe consequences for the local climate.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 72,
    "term": "hazard",
    "clean_word": "hazard",
    "type": "n",
    "desc": "[C1] n: mối nguy hại, rủi ro",
    "example": "Chemical waste poses a serious health hazard to local communities.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 73,
    "term": "preservation",
    "clean_word": "preservation",
    "type": "n",
    "desc": "[B2] n: sự bảo tồn, giữ gìn",
    "example": "The preservation of forests is crucial for ecological balance.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 74,
    "term": "consume",
    "clean_word": "consume",
    "type": "v",
    "desc": "[B2] v: tiêu thụ, tiêu dùng",
    "example": "Modern smart devices consume very little electrical energy.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 75,
    "term": "green living",
    "clean_word": "green living",
    "type": "n.phr",
    "desc": "[B2] n.phr: lối sống xanh",
    "example": "Green living is becoming highly popular among urban youth.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 76,
    "term": "alternative",
    "clean_word": "alternative",
    "type": "adj/n",
    "desc": "[B2] adj/n: thay thế, lựa chọn khác",
    "example": "Solar power is an excellent alternative energy source.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 77,
    "term": "renewable",
    "clean_word": "renewable",
    "type": "adj",
    "desc": "[B2] adj: có thể tái tạo",
    "example": "We should transition from fossil fuels to renewable energy.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 78,
    "term": "toxic",
    "clean_word": "toxic",
    "type": "adj",
    "desc": "[C1] adj: độc hại",
    "example": "Factories must be penalized for releasing toxic chemicals into rivers.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 79,
    "term": "pesticide",
    "clean_word": "pesticide",
    "type": "n",
    "desc": "[B2] n: thuốc trừ sâu",
    "example": "Using too much chemical pesticide damages local biodiversity.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 80,
    "term": "pollution",
    "clean_word": "pollution",
    "type": "n",
    "desc": "[B1] n: sự ô nhiễm",
    "example": "Air pollution in big cities has reached an alarming level.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 81,
    "term": "cut down on",
    "clean_word": "cut down on",
    "type": "phr.v",
    "desc": "[B2] phr.v: chủ động cắt giảm (tiêu thụ, xả thải)",
    "example": "We must cut down on energy bills by using less electricity.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 82,
    "term": "clean up",
    "clean_word": "clean up",
    "type": "phr.v",
    "desc": "[B1] phr.v: dọn dẹp vệ sinh sạch sẽ",
    "example": "The students organized a weekend campaign to clean up the school yard.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 83,
    "term": "turn off",
    "clean_word": "turn off",
    "type": "phr.v",
    "desc": "[B1] phr.v: tắt thiết bị điện",
    "example": "Remember to turn off all electrical appliances before leaving the room.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 84,
    "term": "throw away",
    "clean_word": "throw away",
    "type": "phr.v",
    "desc": "[B1] phr.v: vứt bỏ đi",
    "example": "Do not throw away plastic bags; try to reuse them if possible.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 85,
    "term": "run out of",
    "clean_word": "run out of",
    "type": "phr.v",
    "desc": "[B2] phr.v: cạn kiệt (tài nguyên, năng lượng)",
    "example": "If we don't reduce consumption, we will soon run out of fossil fuels.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 86,
    "term": "use up",
    "clean_word": "use up",
    "type": "phr.v",
    "desc": "[B2] phr.v: sử dụng hết sạch, cạn kiệt",
    "example": "We have used up almost all our non-renewable energy resources.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 87,
    "term": "phase out",
    "clean_word": "phase out",
    "type": "phr.v",
    "desc": "[C1] phr.v: từng bước loại bỏ hoàn toàn",
    "example": "The government plans to phase out single-use plastics by 2030.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 88,
    "term": "switch to",
    "clean_word": "switch to",
    "type": "phr.v",
    "desc": "[B2] phr.v: chuyển sang sử dụng cái mới",
    "example": "Many households are switching to solar panels to save money.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 89,
    "term": "plug in",
    "clean_word": "plug in",
    "type": "phr.v",
    "desc": "[B1] phr.v: cắm nguồn điện",
    "example": "Plug in your laptop only when the battery is low to extend its lifespan.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 90,
    "term": "pull down",
    "clean_word": "pull down",
    "type": "phr.v",
    "desc": "[B2] phr.v: phá dỡ (nhà cũ, công trình)",
    "example": "The old factory was pulled down to make space for a green park.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 91,
    "term": "raise one's awareness of / about sth",
    "clean_word": "raise one's awareness of / about sth",
    "type": "colloc",
    "desc": "[B2] colloc: nâng cao ý thức của ai về cái gì",
    "example": "The club was set up to raise local people’s awareness of environmental issues.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 92,
    "term": "adopt a greener lifestyle",
    "clean_word": "adopt a greener lifestyle",
    "type": "colloc",
    "desc": "[B2] colloc: bắt đầu áp dụng lối sống xanh hơn",
    "example": "Choosing public transport is a simple way to adopt a greener lifestyle.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 93,
    "term": "cause damage to sth",
    "clean_word": "cause damage to sth",
    "type": "colloc",
    "desc": "[B2] colloc: gây thiệt hại nghiêm trọng cho cái gì",
    "example": "Extreme weather conditions can cause severe damage to agricultural lands.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 94,
    "term": "reduce energy bills",
    "clean_word": "reduce energy bills",
    "type": "colloc",
    "desc": "[B2] colloc: giảm hóa đơn tiền điện",
    "example": "Installing solar panels is a great way to reduce energy bills.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 95,
    "term": "public transport",
    "clean_word": "public transport",
    "type": "colloc",
    "desc": "[B1] colloc: phương tiện giao thông công cộng",
    "example": "Using public transport helps decrease carbon emissions in big cities.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 96,
    "term": "global temperatures",
    "clean_word": "global temperatures",
    "type": "colloc",
    "desc": "[B2] colloc: nhiệt độ toàn cầu",
    "example": "The rise in global temperatures causes arctic ice melting.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 97,
    "term": "waste collection",
    "clean_word": "waste collection",
    "type": "colloc",
    "desc": "[B2] colloc: việc thu gom rác thải",
    "example": "We need a more efficient waste collection system in our neighborhood.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 98,
    "term": "save energy",
    "clean_word": "save energy",
    "type": "colloc",
    "desc": "[B1] colloc: tiết kiệm năng lượng",
    "example": "Choosing low-energy devices is highly practical for saving energy.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 99,
    "term": "make a difference",
    "clean_word": "make a difference",
    "type": "colloc",
    "desc": "[B2] colloc: tạo ra sự khác biệt, thay đổi",
    "example": "Even small daily habits can make a significant difference to our planet.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 100,
    "term": "renewable energy",
    "clean_word": "renewable energy",
    "type": "colloc",
    "desc": "[B2] colloc: năng lượng tái tạo",
    "example": "Wind and solar power are excellent examples of renewable energy.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 101,
    "term": "attract great attention",
    "clean_word": "attract great attention",
    "type": "colloc",
    "desc": "[B2] colloc: thu hút sự chú ý lớn",
    "example": "Eco-friendly car models always attract great attention at exhibitions.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 102,
    "term": "give a presentation on sth",
    "clean_word": "give a presentation on sth",
    "type": "colloc",
    "desc": "[B2] colloc: thuyết trình về chủ đề gì",
    "example": "Nam is preparing to give a presentation on climate change tomorrow.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 103,
    "term": "take immediate action",
    "clean_word": "take immediate action",
    "type": "colloc",
    "desc": "[B2] colloc: hành động ngay lập tức",
    "example": "Governments must take immediate action to protect marine life.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 104,
    "term": "set up a club",
    "clean_word": "set up a club",
    "type": "colloc",
    "desc": "[B2] colloc: thành lập một câu lạc bộ",
    "example": "The Youth Union decided to set up a school environmental club.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 105,
    "term": "natural resources",
    "clean_word": "natural resources",
    "type": "colloc",
    "desc": "[B1] colloc: tài nguyên thiên nhiên",
    "example": "We must protect our natural resources for future generations.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 106,
    "term": "a drop in the ocean",
    "clean_word": "a drop in the ocean",
    "type": "idiom",
    "desc": "[C1] idiom: muối bỏ bể, phần quá nhỏ bé",
    "example": "Our donation is just a drop in the ocean, but every little helps.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 107,
    "term": "call it a day",
    "clean_word": "call it a day",
    "type": "idiom",
    "desc": "[B2] idiom: dừng lại, kết thúc công việc trong ngày",
    "example": "After cleaning up the school yard for five hours, we decided to call it a day.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 108,
    "term": "down to earth",
    "clean_word": "down to earth",
    "type": "idiom",
    "desc": "[C1] idiom: thực tế, thực tiễn",
    "example": "His ideas for environmental protection are highly practical and down to earth.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 109,
    "term": "beat around the bush",
    "clean_word": "beat around the bush",
    "type": "idiom",
    "desc": "[B2] idiom: nói vòng vo Tam Quốc, không trực diện",
    "example": "Stop beating around the bush and tell me what the environmental problem is.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 110,
    "term": "go green",
    "clean_word": "go green",
    "type": "idiom",
    "desc": "[C1] idiom: bắt đầu sống thân thiện với môi trường",
    "example": "Many businesses are trying to go green by reducing packaging waste.",
    "category": "Wing 1: Family Life & Humans and Environment",
    "monster": "🍄 Sprout Sprite",
    "unit": 2
  },
  {
    "id": 111,
    "term": "eliminate",
    "clean_word": "eliminate",
    "type": "v",
    "desc": "[B2] v: loại bỏ, loại trừ khỏi cuộc thi",
    "example": "He was eliminated in the semi-final of the national music competition.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 112,
    "term": "phenomenon",
    "clean_word": "phenomenon",
    "type": "n",
    "desc": "[C1] n: hiện tượng đột phá, đặc sắc",
    "example": "The young pop singer has become a global musical phenomenon.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 113,
    "term": "revolutionary",
    "clean_word": "revolutionary",
    "type": "adj",
    "desc": "[B2] adj: mang tính cách mạng, đột phá",
    "example": "Her style of music is considered revolutionary for her generation.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 114,
    "term": "composer",
    "clean_word": "composer",
    "type": "n",
    "desc": "[B2] n: nhà soạn nhạc",
    "example": "Many Vietnamese composers wrote patriotic songs to motivate the public.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 115,
    "term": "intricate",
    "clean_word": "intricate",
    "type": "adj",
    "desc": "[C2] adj: phức tạp, tinh vi, tinh xảo",
    "example": "The folk melody features intricate rhythms played by the percussion section.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 116,
    "term": "profound",
    "clean_word": "profound",
    "type": "adj",
    "desc": "[C1] adj: sâu sắc, lớn lao",
    "example": "Art and music play a profound role in shaping a country's historical narratives.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 117,
    "term": "curriculum",
    "clean_word": "curriculum",
    "type": "n",
    "desc": "[B2] n: chương trình giảng dạy học thuật",
    "example": "Music should be fully integrated into the school curriculum.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 118,
    "term": "talent",
    "clean_word": "talent",
    "type": "n",
    "desc": "[B1] n: tài năng, năng khiếu",
    "example": "The judges were looking for original talent during the auditions.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 119,
    "term": "instrument",
    "clean_word": "instrument",
    "type": "n",
    "desc": "[B1] n: nhạc cụ, công cụ",
    "example": "The piano is a very versatile musical instrument.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 120,
    "term": "concert",
    "clean_word": "concert",
    "type": "n",
    "desc": "[B1] n: buổi hòa nhạc",
    "example": "Thousands of fans attended the outdoor rock concert last night.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 121,
    "term": "judge",
    "clean_word": "judge",
    "type": "n",
    "desc": "[B1] n: giám khảo, ban giám khảo",
    "example": "The famous composer was invited to be a judge on the music show.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 122,
    "term": "location",
    "clean_word": "location",
    "type": "n",
    "desc": "[B1] n: vị trí, địa điểm",
    "example": "The iconic opera house is a popular location for musical performances.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 123,
    "term": "moon-shaped lute",
    "clean_word": "moon-shaped lute",
    "type": "n.phr",
    "desc": "[C1] n.phr: đàn nguyệt (nhạc cụ cổ truyền)",
    "example": "The artist played a traditional melody on the moon-shaped lute.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 124,
    "term": "bamboo clapper",
    "clean_word": "bamboo clapper",
    "type": "n.phr",
    "desc": "[C1] n.phr: phách (nhạc cụ tre gõ cổ truyền)",
    "example": "Bamboo clapper is a key percussion instrument in Vietnamese folk music.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 125,
    "term": "participant",
    "clean_word": "participant",
    "type": "n",
    "desc": "[B2] n: thí sinh, người tham gia",
    "example": "The participants in the competition showed incredible musicality.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 126,
    "term": "performance",
    "clean_word": "performance",
    "type": "n",
    "desc": "[B1] n: buổi trình diễn, biểu diễn",
    "example": "The singer gave an outstanding live performance that moved the audience.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 127,
    "term": "reach",
    "clean_word": "reach",
    "type": "v",
    "desc": "[B1] v: đạt mốc, chạm tới",
    "example": "The music video managed to reach one million views in just one day.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 128,
    "term": "single",
    "clean_word": "single",
    "type": "n",
    "desc": "[B1] n: đĩa đơn",
    "example": "She released her debut single last month and it immediately became a hit.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 129,
    "term": "trumpet",
    "clean_word": "trumpet",
    "type": "n",
    "desc": "[B2] n: kèn trumpet",
    "example": "He plays the trumpet beautifully in the school jazz band.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 130,
    "term": "upload",
    "clean_word": "upload",
    "type": "v",
    "desc": "[B1] v: đăng tải lên mạng",
    "example": "My brother uploaded his cover song to YouTube to share with friends.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 131,
    "term": "audience",
    "clean_word": "audience",
    "type": "n",
    "desc": "[B1] n: khán giả nghe nhạc, kịch, diễn thuyết",
    "example": "The audience clapped enthusiastically at the end of the show.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 132,
    "term": "spectator",
    "clean_word": "spectator",
    "type": "n",
    "desc": "[B2] n: khán giả xem thể thao ngoài trời",
    "example": "The football stadium was packed with excited spectators.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 133,
    "term": "onlooker",
    "clean_word": "onlooker",
    "type": "n",
    "desc": "[B2] n: người đứng ngoài xem sự việc",
    "example": "A crowd of onlookers gathered to watch the street performance.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 134,
    "term": "recording",
    "clean_word": "recording",
    "type": "n",
    "desc": "[B1] n: bản thu âm, ghi hình",
    "example": "I bought a high-quality recording of the live concert.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 135,
    "term": "musicality",
    "clean_word": "musicality",
    "type": "n",
    "desc": "[C1] n: năng khiếu, cảm thụ âm nhạc",
    "example": "Her natural musicality was clear from the way she played the piano.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 136,
    "term": "come up with",
    "clean_word": "come up with",
    "type": "phr.v",
    "desc": "[B2] phr.v: nảy ra, nghĩ ra (một ý tưởng, sáng kiến)",
    "example": "She came up with a brilliant idea for an interactive music show.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 137,
    "term": "turn up",
    "clean_word": "turn up",
    "type": "phr.v",
    "desc": "[B1] phr.v: vặn to âm lượng, xuất hiện",
    "example": "Could you turn up the music? This is my favorite song!",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 138,
    "term": "turn down",
    "clean_word": "turn down",
    "type": "phr.v",
    "desc": "[B1] phr.v: vặn nhỏ âm lượng, từ chối",
    "example": "Please turn down the TV; I am trying to focus on my studies.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 139,
    "term": "dress up",
    "clean_word": "dress up",
    "type": "phr.v",
    "desc": "[B2] phr.v: ăn diện, hóa trang lộng lẫy",
    "example": "Performers love to dress up in traditional costumes for the festival.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 140,
    "term": "sing along",
    "clean_word": "sing along",
    "type": "phr.v",
    "desc": "[B1] phr.v: hát theo, đồng ca",
    "example": "The entire audience started singing along with the main singer.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 141,
    "term": "pop up",
    "clean_word": "pop up",
    "type": "phr.v",
    "desc": "[B2] phr.v: đột nhiên xuất hiện",
    "example": "Ad pop-ups are highly annoying when watching music videos online.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 142,
    "term": "carry out",
    "clean_word": "carry out",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiến hành, thực hiện",
    "example": "The research team carried out a survey on teenagers' music tastes.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 143,
    "term": "sign up",
    "clean_word": "sign up",
    "type": "phr.v",
    "desc": "[B1] phr.v: đăng ký tham gia",
    "example": "He signed up for the audition of the national music competition.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 144,
    "term": "set out",
    "clean_word": "set out",
    "type": "phr.v",
    "desc": "[B2] phr.v: bắt đầu một hành trình, kế hoạch",
    "example": "The young artist set out to create a new style of modern folk music.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 145,
    "term": "back up",
    "clean_word": "back up",
    "type": "phr.v",
    "desc": "[B2] phr.v: ủng hộ, sao lưu dữ liệu",
    "example": "My friends always back me up whenever I feel discouraged.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 146,
    "term": "play an important role / part in sth",
    "clean_word": "play an important role / part in sth",
    "type": "colloc",
    "desc": "[B2] colloc: đóng vai trò quan trọng trong việc gì",
    "example": "Music plays an important role in preserving cultural identity.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 147,
    "term": "identify with sb",
    "clean_word": "identify with sb",
    "type": "colloc",
    "desc": "[B2] colloc: đồng cảm, tìm thấy sự tương đồng ở ai",
    "example": "The audience can easily identify with ordinary participants in reality shows.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 148,
    "term": "break a record",
    "clean_word": "break a record",
    "type": "colloc",
    "desc": "[B2] colloc: phá kỷ lục",
    "example": "The latest hit single broke a national streaming record.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 149,
    "term": "convey the appropriate mood",
    "clean_word": "convey the appropriate mood",
    "type": "colloc",
    "desc": "[B2] colloc: truyền tải tâm trạng phù hợp",
    "example": "Soundtracks must convey the appropriate mood and tone of the film.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 150,
    "term": "create a sense of belonging",
    "clean_word": "create a sense of belonging",
    "type": "colloc",
    "desc": "[C1] colloc: tạo ra cảm giác thuộc về, gắn kết",
    "example": "Singing together in a choir helps children create a sense of belonging.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 151,
    "term": "hit single",
    "clean_word": "hit single",
    "type": "colloc",
    "desc": "[B2] colloc: đĩa đơn thành công vang dội",
    "example": "Her hit single remained at the top of the music charts for weeks.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 152,
    "term": "social media",
    "clean_word": "social media",
    "type": "colloc",
    "desc": "[B1] colloc: mạng xã hội",
    "example": "Artists use social media to interact directly with their fans.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 153,
    "term": "cash prize",
    "clean_word": "cash prize",
    "type": "colloc",
    "desc": "[B2] colloc: giải thưởng bằng tiền mặt",
    "example": "The winner of the music competition received a large cash prize.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 154,
    "term": "runner-up",
    "clean_word": "runner-up",
    "type": "colloc",
    "desc": "[B2] colloc: á quân, người về nhì",
    "example": "Though he was only the runner-up, he received great praise from judges.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 155,
    "term": "traditional musical instruments",
    "clean_word": "traditional musical instruments",
    "type": "colloc",
    "desc": "[C1] colloc: nhạc cụ truyền thống",
    "example": "My brother collects traditional musical instruments like the gong.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 156,
    "term": "national hero",
    "clean_word": "national hero",
    "type": "colloc",
    "desc": "[B2] colloc: anh hùng dân tộc",
    "example": "Chau van singing is used to worship national heroes in Vietnam.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 157,
    "term": "party atmosphere",
    "clean_word": "party atmosphere",
    "type": "colloc",
    "desc": "[B2] colloc: không khí lễ hội, tiệc tùng",
    "example": "The rock concert had an incredibly energetic party atmosphere.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 158,
    "term": "art exhibition",
    "clean_word": "art exhibition",
    "type": "colloc",
    "desc": "[B2] colloc: triển lãm nghệ thuật",
    "example": "The local museum is hosting an art exhibition this weekend.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 159,
    "term": "gain great popularity",
    "clean_word": "gain great popularity",
    "type": "colloc",
    "desc": "[B2] colloc: đạt được sự phổ biến rộng rãi",
    "example": "Folk music is gaining great popularity among the younger generation.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 160,
    "term": "do extensive research",
    "clean_word": "do extensive research",
    "type": "colloc",
    "desc": "[B2] colloc: nghiên cứu sâu rộng",
    "example": "We had to do extensive research on chau van singing for our presentation.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 161,
    "term": "get creative juices flowing",
    "clean_word": "get creative juices flowing",
    "type": "idiom",
    "desc": "[C1] idiom: khơi dậy cảm hứng sáng tạo dạt dào",
    "example": "Classical music is excellent for getting your creative juices flowing while writing.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 162,
    "term": "hit the right note",
    "clean_word": "hit the right note",
    "type": "idiom",
    "desc": "[C1] idiom: đánh trúng tâm lý, đi vào lòng người",
    "example": "Her emotional speech hit the right note with the audience.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 163,
    "term": "music to my ears",
    "clean_word": "music to my ears",
    "type": "idiom",
    "desc": "[C1] idiom: tin vui, âm thanh dễ nghe, sướng tai",
    "example": "Hearing that she won the scholarship was absolute music to my ears.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 164,
    "term": "blow one's own trumpet",
    "clean_word": "blow one's own trumpet",
    "type": "idiom",
    "desc": "[C1] idiom: tự phụ, khoe khoang thành tích bản thân",
    "example": "He is highly talented, but he never blows his own trumpet.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 165,
    "term": "face the music",
    "clean_word": "face the music",
    "type": "idiom",
    "desc": "[C1] idiom: chấp nhận hình phạt, đối mặt hậu quả",
    "example": "After skipping the rehearsals, she had to face the music from the conductor.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 3
  },
  {
    "id": 166,
    "term": "altruism",
    "clean_word": "altruism",
    "type": "n",
    "desc": "[[C1/C2]] n: lòng vị tha, chủ nghĩa vị tha",
    "example": "Volunteering is a noble act of pure altruism.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 167,
    "term": "philanthropy",
    "clean_word": "philanthropy",
    "type": "n",
    "desc": "[C1] n: hoạt động từ thiện, lòng bác ái",
    "example": "The billionaire decided to dedicate his wealth to philanthropy and education.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 168,
    "term": "underprivileged",
    "clean_word": "underprivileged",
    "type": "adj",
    "desc": "[C1] adj: bị thiệt thòi, nghèo khó, thiếu thốn",
    "example": "We organized a fundraiser to support underprivileged students in mountainous areas.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 169,
    "term": "transparent",
    "clean_word": "transparent",
    "type": "adj",
    "desc": "[B2] adj: minh bạch, rõ ràng (tài chính, hoạt động)",
    "example": "Non-profit organizations must be fully transparent about their financial transactions.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 170,
    "term": "hardship",
    "clean_word": "hardship",
    "type": "n",
    "desc": "[B2] n: sự gian khổ, khó khăn nhọc nhằn",
    "example": "Many young volunteers work in remote areas despite facing extreme hardships.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 171,
    "term": "disaster relief",
    "clean_word": "disaster relief",
    "type": "n.phr",
    "desc": "[C1] n.phr: hoạt động cứu trợ thiên tai",
    "example": "Vietnamese soldiers worked tirelessly to coordinate disaster relief after the landslide.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 172,
    "term": "non-governmental",
    "clean_word": "non-governmental",
    "type": "adj",
    "desc": "[B2] adj: thuộc phi chính phủ (tổ chức)",
    "example": "She gained practical experience by working with an international non-governmental organization.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 173,
    "term": "access",
    "clean_word": "access",
    "type": "n/v",
    "desc": "[B2] n/v: sự tiếp cận / tiếp cận cái gì",
    "example": "Improving infrastructure helps remote villages gain access to health services.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 174,
    "term": "announcement",
    "clean_word": "announcement",
    "type": "n",
    "desc": "[B1] n: thông báo, thông cáo chính thức",
    "example": "The school made an announcement about the upcoming volunteer trip.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 175,
    "term": "boost",
    "clean_word": "boost",
    "type": "v",
    "desc": "[B2] v: thúc đẩy, làm tăng thêm (năng lượng, tự tin)",
    "example": "Helping others can significantly boost your mood and self-confidence.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 176,
    "term": "cheerful",
    "clean_word": "cheerful",
    "type": "adj",
    "desc": "[B1] adj: vui vẻ, hăng hái, đầy sức sống",
    "example": "The cheerful volunteers handed out warm meals to the homeless.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 177,
    "term": "community",
    "clean_word": "community",
    "type": "n",
    "desc": "[B1] n: cộng đồng",
    "example": "A healthy community is built on mutual support and cooperation.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 178,
    "term": "confidence",
    "clean_word": "confidence",
    "type": "n",
    "desc": "[B2] n: sự tự tin, lòng tin cậy",
    "example": "Public speaking at community centers helped her build immense confidence.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 179,
    "term": "confused",
    "clean_word": "confused",
    "type": "adj",
    "desc": "[B1] adj: bối rối, lúng túng",
    "example": "The instructions for the project were unclear, leaving many volunteers confused.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 180,
    "term": "deliver",
    "clean_word": "deliver",
    "type": "v",
    "desc": "[B1] v: giao hàng, phát quà, cứu tế",
    "example": "We delivered food packages directly to families affected by the flood.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 181,
    "term": "donate",
    "clean_word": "donate",
    "type": "v",
    "desc": "[B1] v: quyên góp, hiến tặng",
    "example": "Many students donated old books and warm clothes to the charity drive.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 182,
    "term": "donation",
    "clean_word": "donation",
    "type": "n",
    "desc": "[B1] n: đồ quyên góp, vật phẩm quyên tặng",
    "example": "The orphanage received generous donations from local businesses.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 183,
    "term": "generous",
    "clean_word": "generous",
    "type": "adj",
    "desc": "[B1] adj: hào phóng, rộng lượng",
    "example": "She is extremely generous, always donating half of her pocket money.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 184,
    "term": "involved",
    "clean_word": "involved",
    "type": "adj",
    "desc": "[B2] adj: tham gia, dính dáng, có mặt",
    "example": "More and more teenagers are getting involved in community service nowadays.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 185,
    "term": "remote",
    "clean_word": "remote",
    "type": "adj",
    "desc": "[B2] adj: hẻo lánh, vùng sâu vùng xa",
    "example": "The medical group travelled to remote mountainous areas to vaccinate children.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 186,
    "term": "various",
    "clean_word": "various",
    "type": "adj",
    "desc": "[B1] adj: đa dạng, nhiều loại khác nhau",
    "example": "We organized various activities, such as tutoring and sorting donations.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 187,
    "term": "orphanage",
    "clean_word": "orphanage",
    "type": "n",
    "desc": "[B2] n: trại trẻ mồ côi",
    "example": "They spend their weekends playing with children at the local orphanage.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 188,
    "term": "charitable",
    "clean_word": "charitable",
    "type": "adj",
    "desc": "[B2] adj: thuộc từ thiện, nhân đạo",
    "example": "The University supports several charitable projects for public benefit.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 189,
    "term": "suffer",
    "clean_word": "suffer",
    "type": "v",
    "desc": "[B2] v: chịu đựng đau đớn, mất mát",
    "example": "Many poor children suffer from a lack of proper educational resources.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 190,
    "term": "poverty",
    "clean_word": "poverty",
    "type": "n",
    "desc": "[B2] n: sự nghèo đói",
    "example": "The main aim of the project is to reduce poverty in rural areas.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 191,
    "term": "step up",
    "clean_word": "step up",
    "type": "phr.v",
    "desc": "[B2] phr.v: chủ động gánh vác trách nhiệm, gầy dựng",
    "example": "Local residents stepped up to help flood victims rebuild their homes.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 192,
    "term": "give back",
    "clean_word": "give back",
    "type": "phr.v",
    "desc": "[B2] phr.v: cống hiến, đền đáp lại cho xã hội",
    "example": "Giving back to the community provides a lasting sense of meaningfulness.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 193,
    "term": "carry out",
    "clean_word": "carry out",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiến hành, thực hiện dự án",
    "example": "The youth union carried out several community development projects this summer.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 194,
    "term": "help out",
    "clean_word": "help out",
    "type": "phr.v",
    "desc": "[B1] phr.v: giúp đỡ một tay (trong lúc khó khăn)",
    "example": "Whenever we need volunteers, Tuan is always ready to help out.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 195,
    "term": "look forward to",
    "clean_word": "look forward to",
    "type": "phr.v",
    "desc": "[B1] phr.v: trông chờ, mong mỏi điều gì",
    "example": "We look forward to collaborating with your organization next year.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 196,
    "term": "sign up for",
    "clean_word": "sign up for",
    "type": "phr.v",
    "desc": "[B1] phr.v: đăng ký tham gia một sự kiện",
    "example": "Many university students signed up for the free teaching program.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 197,
    "term": "fill in",
    "clean_word": "fill in",
    "type": "phr.v",
    "desc": "[B1] phr.v: điền thông tin (vào đơn)",
    "example": "Please fill in this application form if you want to join our club.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 198,
    "term": "hand out",
    "clean_word": "hand out",
    "type": "phr.v",
    "desc": "[B1] phr.v: phát quà, phân phát tài liệu",
    "example": "They handed out warm meals and blankets to homeless people.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 199,
    "term": "take part in",
    "clean_word": "take part in",
    "type": "phr.v",
    "desc": "[B1] phr.v: tham gia vào hoạt động gì",
    "example": "Lan loves to take part in green campaigns in her school.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 200,
    "term": "join hands",
    "clean_word": "join hands",
    "type": "phr.v",
    "desc": "[B2] phr.v: chung tay, cùng nhau hợp tác",
    "example": "We need all sectors to join hands to combat local plastic pollution.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 201,
    "term": "gain practical experience",
    "clean_word": "gain practical experience",
    "type": "colloc",
    "desc": "[B2] colloc: gặt hái kinh nghiệm thực tế quý báu",
    "example": "Joining charity campaigns is a great way for teenagers to gain practical experience.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 202,
    "term": "come into contact with sb",
    "clean_word": "come into contact with sb",
    "type": "colloc",
    "desc": "[B2] colloc: liên lạc, tiếp xúc với ai",
    "example": "Volunteering allows students to come into contact with people from different backgrounds.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 203,
    "term": "raise money / funds for charity",
    "clean_word": "raise money / funds for charity",
    "type": "colloc",
    "desc": "[B2] colloc: quyên góp tiền, gây quỹ từ thiện",
    "example": "The students set up a fundraiser to raise money for local orphanages.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 204,
    "term": "make a significant difference",
    "clean_word": "make a significant difference",
    "type": "colloc",
    "desc": "[B2] colloc: tạo ra sự khác biệt lớn lao",
    "example": "Even small daily contributions can make a significant difference in saving raw materials.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 205,
    "term": "boost self-confidence",
    "clean_word": "boost self-confidence",
    "type": "colloc",
    "desc": "[B2] colloc: củng cố, nâng cao lòng tự tin",
    "example": "Public speaking at community centers helps boost students' self-confidence.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 206,
    "term": "community development",
    "clean_word": "community development",
    "type": "colloc",
    "desc": "[C1] colloc: phát triển cộng đồng",
    "example": "Investing in local education is a catalyst for community development.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 207,
    "term": "emergency supplies",
    "clean_word": "emergency supplies",
    "type": "colloc",
    "desc": "[C1] colloc: nhu yếu phẩm khẩn cấp",
    "example": "A helicopter airlifted tons of emergency supplies to the isolated village.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 208,
    "term": "non-profit organisation",
    "clean_word": "non-profit organisation",
    "type": "colloc",
    "desc": "[B2] colloc: tổ chức phi lợi nhuận",
    "example": "She works as a volunteer for an international non-profit organisation.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 209,
    "term": "volunteer project",
    "clean_word": "volunteer project",
    "type": "colloc",
    "desc": "[B2] colloc: dự án tình nguyện",
    "example": "The youth union launched a new volunteer project to clean up local rivers.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 210,
    "term": "life-saving skills",
    "clean_word": "life-saving skills",
    "type": "colloc",
    "desc": "[C1] colloc: kỹ năng cứu sinh, cứu người",
    "example": "Volunteers are trained in basic life-saving skills like first aid.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 211,
    "term": "do volunteer work",
    "clean_word": "do volunteer work",
    "type": "colloc",
    "desc": "[B1] colloc: làm việc tình nguyện",
    "example": "Doing volunteer work helps young people become more empathetic.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 212,
    "term": "flood victims",
    "clean_word": "flood victims",
    "type": "colloc",
    "desc": "[B2] colloc: nạn nhân bị lũ lụt",
    "example": "We distributed food and bottled water to flood victims yesterday.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 213,
    "term": "remote areas",
    "clean_word": "remote areas",
    "type": "colloc",
    "desc": "[B2] colloc: vùng sâu vùng xa",
    "example": "The charity raises funds to build warm classrooms in remote areas.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 214,
    "term": "by chance / by accident",
    "clean_word": "by chance / by accident",
    "type": "colloc",
    "desc": "[B2] colloc: tình cờ, ngẫu nhiên",
    "example": "I met my old school friend by chance during the charity event.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 215,
    "term": "by mistake",
    "clean_word": "by mistake",
    "type": "colloc",
    "desc": "[B2] colloc: do nhầm lẫn, sơ suất",
    "example": "He accidentally donated his active keys by mistake.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 216,
    "term": "walks of life",
    "clean_word": "walks of life",
    "type": "idiom",
    "desc": "[C1] idiom: các tầng lớp xã hội / hoàn cảnh khác nhau",
    "example": "The campaign attracted volunteers from all walks of life.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 217,
    "term": "ripple effect",
    "clean_word": "ripple effect",
    "type": "idiom",
    "desc": "[C1] idiom: hiệu ứng gợn sóng, hiệu ứng lan tỏa",
    "example": "A simple act of kindness can create a powerful ripple effect across the community.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 218,
    "term": "pay it forward",
    "clean_word": "pay it forward",
    "type": "idiom",
    "desc": "[C2] idiom: lan tỏa lòng tốt tiếp nối",
    "example": "If someone helps you, remember to pay it forward by helping another person in need.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 219,
    "term": "lend a helping hand",
    "clean_word": "lend a helping hand",
    "type": "idiom",
    "desc": "[C1] idiom: giúp đỡ một tay",
    "example": "We should always be ready to lend a helping hand to those in hardship.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 220,
    "term": "heart of gold",
    "clean_word": "heart of gold",
    "type": "idiom",
    "desc": "[C1] idiom: tấm lòng vàng, nhân đức, nhân hậu",
    "example": "Our grandmother has a heart of gold, always feeding stray cats.",
    "category": "Wing 2: Music & Community Support",
    "monster": "🛡️ Stone Golem",
    "unit": 4
  },
  {
    "id": 221,
    "term": "patent",
    "clean_word": "patent",
    "type": "n",
    "desc": "[C1] n: bằng sáng chế, độc quyền sáng chế",
    "example": "The young engineer successfully applied for a patent for his portable device.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 222,
    "term": "driverless",
    "clean_word": "driverless",
    "type": "adj",
    "desc": "[C1] adj: không người lái (xe tự hành)",
    "example": "Driverless cars are expected to reduce traffic accidents dramatically.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 223,
    "term": "dimensional",
    "clean_word": "dimensional",
    "type": "adj",
    "desc": "[C1] adj: thuộc về chiều, kích thước (3D)",
    "example": "Three-dimensional printing has completely revolutionized medicine and manufacturing.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 224,
    "term": "portable",
    "clean_word": "portable",
    "type": "adj",
    "desc": "[B2] adj: có thể mang theo dễ dàng, di động",
    "example": "Laptops are highly portable, allowing students to study anywhere.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 225,
    "term": "innovative",
    "clean_word": "innovative",
    "type": "adj",
    "desc": "[B2] adj: mang tính đột phá, đổi mới sáng tạo",
    "example": "Scientists are looking for innovative ways to convert solar energy more efficiently.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 226,
    "term": "versatile",
    "clean_word": "versatile",
    "type": "adj",
    "desc": "[C1] adj: linh hoạt, đa năng",
    "example": "Smartphones are versatile devices that serve both communication and entertainment purposes.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 227,
    "term": "3D printing",
    "clean_word": "3D printing",
    "type": "n",
    "desc": "[C1] n: công nghệ in ba chiều",
    "example": "3D printing is used to create complex machine components in laboratories.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 228,
    "term": "AI (artificial intelligence)",
    "clean_word": "AI",
    "type": "n",
    "desc": "[C1] n: trí tuệ nhân tạo",
    "example": "AI is playing a growing role in automating classroom administration.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 229,
    "term": "device",
    "clean_word": "device",
    "type": "n",
    "desc": "[B1] n: thiết bị, công cụ",
    "example": "Smartwatches are modern devices that track our daily physical activities.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 230,
    "term": "e-reader",
    "clean_word": "e-reader",
    "type": "n",
    "desc": "[B2] n: thiết bị đọc sách điện tử",
    "example": "An e-reader can store thousands of books in a highly compact space.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 231,
    "term": "vacuum cleaner",
    "clean_word": "vacuum cleaner",
    "type": "n",
    "desc": "[B2] n: máy hút bụi",
    "example": "A robotic vacuum cleaner cleans the house completely automatically.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 232,
    "term": "hardware",
    "clean_word": "hardware",
    "type": "n",
    "desc": "[B2] n: phần cứng máy tính",
    "example": "Upgrading computer hardware can significantly improve processing speed.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 233,
    "term": "software",
    "clean_word": "software",
    "type": "n",
    "desc": "[B2] n: phần mềm máy tính",
    "example": "He is learning to write educational software for children.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 234,
    "term": "stain",
    "clean_word": "stain",
    "type": "n",
    "desc": "[B2] n: vết bẩn, vết ố cứng đầu",
    "example": "The advanced washing machine easily removed the stubborn coffee stain.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 235,
    "term": "button",
    "clean_word": "button",
    "type": "n",
    "desc": "[B1] n: nút bấm",
    "example": "Just press this red button to turn on the modern device.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 236,
    "term": "charge",
    "clean_word": "charge",
    "type": "v",
    "desc": "[B1] v: sạc pin, nạp điện",
    "example": "You need to charge your smartphone; the battery is very low.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 237,
    "term": "display",
    "clean_word": "display",
    "type": "v/n",
    "desc": "[B2] v/n: hiển thị / màn hình hiển thị",
    "example": "The new laptop model features a highly vibrant OLED display.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 238,
    "term": "storage space",
    "clean_word": "storage space",
    "type": "n.phr",
    "desc": "[B2] n.phr: dung lượng lưu trữ",
    "example": "Make sure you have enough storage space before downloading large files.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 239,
    "term": "technology",
    "clean_word": "technology",
    "type": "n",
    "desc": "[B1] n: công nghệ",
    "example": "Modern classroom technology makes learning far more interactive and fun.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 240,
    "term": "processor",
    "clean_word": "processor",
    "type": "n",
    "desc": "[B2] n: bộ vi xử lý",
    "example": "The speed of a computer depends primarily on its processor.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 241,
    "term": "RAM (random access memory)",
    "clean_word": "RAM",
    "type": "n",
    "desc": "[C1] n: bộ nhớ truy cập ngẫu nhiên",
    "example": "Having more RAM allows you to run multiple software programs smoothly.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 242,
    "term": "experiment",
    "clean_word": "experiment",
    "type": "n/v",
    "desc": "[B1] n/v: thí nghiệm / tiến hành thí nghiệm",
    "example": "Scientists conducted an experiment to test the safety of the new vaccine.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 243,
    "term": "laboratory",
    "clean_word": "laboratory",
    "type": "n",
    "desc": "[B2] n: phòng thí nghiệm",
    "example": "The chemistry students spend three hours in the laboratory every week.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 244,
    "term": "application",
    "clean_word": "application",
    "type": "n",
    "desc": "[B2] n: sự ứng dụng, đơn xin",
    "example": "AI has several practical applications in modern agriculture.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 245,
    "term": "valuable",
    "clean_word": "valuable",
    "type": "adj",
    "desc": "[B1] adj: có giá trị, hữu ích",
    "example": "These online courses provide valuable knowledge for exam candidate.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 246,
    "term": "bring about",
    "clean_word": "bring about",
    "type": "phr.v",
    "desc": "[B2] phr.v: mang lại, dẫn tới (sự thay đổi lớn)",
    "example": "The invention of the internet has brought about a digital revolution.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 247,
    "term": "break down",
    "clean_word": "break down",
    "type": "phr.v",
    "desc": "[B2] phr.v: hỏng hóc; tự phân rã, phân hủy",
    "example": "Plastic bags take hundreds of years to break down in the environment.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 248,
    "term": "put an end to sth",
    "clean_word": "put an end to sth",
    "type": "phr.v",
    "desc": "[B2] phr.v: chấm dứt hoàn toàn một vấn nạn",
    "example": "High-tech security systems put an end to frequent burglaries in the area.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 249,
    "term": "print out",
    "clean_word": "print out",
    "type": "phr.v",
    "desc": "[B1] phr.v: in tài liệu ra giấy",
    "example": "Could you please print out this diagram for my study group?",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 250,
    "term": "plug in",
    "clean_word": "plug in",
    "type": "phr.v",
    "desc": "[B1] phr.v: cắm nguồn điện",
    "example": "He forgot to plug in the charger, so his laptop ran out of battery.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 251,
    "term": "set up",
    "clean_word": "set up",
    "type": "phr.v",
    "desc": "[B1] phr.v: thiết lập, cài đặt hệ thống",
    "example": "We need to set up the software before starting the experiment.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 252,
    "term": "look up",
    "clean_word": "look up",
    "type": "phr.v",
    "desc": "[B1] phr.v: tra cứu (từ điển, thông tin)",
    "example": "You can look up the definition of the academic word on azVocab.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 253,
    "term": "turn on",
    "clean_word": "turn on",
    "type": "phr.v",
    "desc": "[B1] phr.v: bật thiết bị điện",
    "example": "Turn on the computer and log in with your password.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 254,
    "term": "carry out",
    "clean_word": "carry out",
    "type": "phr.v",
    "desc": "[B2] phr.v: thực hiện thí nghiệm/khảo sát",
    "example": "The scientist carried out the experiment in her state-of-the-art lab.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 255,
    "term": "work out",
    "clean_word": "work out",
    "type": "phr.v",
    "desc": "[B2] phr.v: giải quyết, tính toán con số",
    "example": "She used a calculator to work out the complex mathematical equation.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 256,
    "term": "conduct / carry out an experiment",
    "clean_word": "conduct / carry out an experiment",
    "type": "colloc",
    "desc": "[B2] colloc: tiến hành một thí nghiệm khoa học",
    "example": "The chemistry students conducted an experiment under their teacher's supervision.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 257,
    "term": "collect / gather information",
    "clean_word": "collect / gather information",
    "type": "colloc",
    "desc": "[B2] colloc: thu thập thông tin",
    "example": "The search engine helps researchers collect information within seconds.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 258,
    "term": "remove stubborn stains",
    "clean_word": "remove stubborn stains",
    "type": "colloc",
    "desc": "[B2] colloc: loại bỏ các vết bẩn cứng đầu",
    "example": "This advanced vacuum cleaner has a special brush to remove stubborn stains.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 259,
    "term": "portable device",
    "clean_word": "portable device",
    "type": "colloc",
    "desc": "[B2] colloc: thiết bị di động cầm tay",
    "example": "Smartphones are the most popular portable devices in the world.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 260,
    "term": "artificial intelligence",
    "clean_word": "artificial intelligence",
    "type": "colloc",
    "desc": "[C1] colloc: trí tuệ nhân tạo",
    "example": "Artificial intelligence is transforming how we search for data.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 261,
    "term": "vacuum cleaner",
    "clean_word": "vacuum cleaner",
    "type": "colloc",
    "desc": "[B2] colloc: máy hút bụi gia dụng",
    "example": "A robotic vacuum cleaner helps save time on daily housework.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 262,
    "term": "storage space",
    "clean_word": "storage space",
    "type": "colloc",
    "desc": "[B2] colloc: dung lượng, không gian lưu trữ",
    "example": "This new laptop offers exceptionally large storage space.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 263,
    "term": "process data",
    "clean_word": "process data",
    "type": "colloc",
    "desc": "[C1] colloc: xử lý dữ liệu",
    "example": "Supercomputers are used to process massive amounts of scientific data.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 264,
    "term": "processor speed",
    "clean_word": "processor speed",
    "type": "colloc",
    "desc": "[C1] colloc: tốc độ của bộ xử lý",
    "example": "Gamers usually care a lot about processor speed and graphics.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 265,
    "term": "save money",
    "clean_word": "save money",
    "type": "colloc",
    "desc": "[B1] colloc: tiết kiệm tiền",
    "example": "I have saved money since Tet to buy something new for my studies.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 266,
    "term": "make a decision",
    "clean_word": "make a decision",
    "type": "colloc",
    "desc": "[B1] colloc: đưa ra quyết định",
    "example": "It is hard to make a decision between a smartphone and a laptop.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 267,
    "term": "allow/permit someone to do something",
    "clean_word": "allow/permit someone to do something",
    "type": "colloc",
    "desc": "[B2] colloc: cho phép ai làm việc gì",
    "example": "Computers allow us to study and work much faster.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 268,
    "term": "highly beneficial",
    "clean_word": "highly beneficial",
    "type": "colloc",
    "desc": "[B2] colloc: cực kỳ có lợi, hữu ích",
    "example": "Switching to eco-friendly appliances is highly beneficial.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 269,
    "term": "convenient tool",
    "clean_word": "convenient tool",
    "type": "colloc",
    "desc": "[B2] colloc: công cụ thuận tiện, hữu ích",
    "example": "Online dictionaries are a highly convenient tool for language learners.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 270,
    "term": "make a mistake",
    "clean_word": "make a mistake",
    "type": "colloc",
    "desc": "[B1] colloc: phạm sai lầm",
    "example": "Don't make the mistake of choosing a computer blindly.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 271,
    "term": "think outside the box",
    "clean_word": "think outside the box",
    "type": "idiom",
    "desc": "[[C1/C2]] idiom: tư duy đột phá, sáng tạo, vượt ranh giới",
    "example": "To design a driverless car, engineers had to think outside the box.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 272,
    "term": "reinvent the wheel",
    "clean_word": "reinvent the wheel",
    "type": "idiom",
    "desc": "[C2] idiom: tốn công vô ích làm lại việc người khác đã làm tốt",
    "example": "Don't reinvent the wheel; just use existing software for your project.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 273,
    "term": "state of the art",
    "clean_word": "state of the art",
    "type": "idiom",
    "desc": "[C1] idiom: hiện đại nhất, tối tân nhất",
    "example": "The band recorded their new album in a state-of-the-art studio.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 274,
    "term": "light years ahead",
    "clean_word": "light years ahead",
    "type": "idiom",
    "desc": "[C2] idiom: đi trước thời đại, vượt trội hoàn toàn",
    "example": "Their latest software design is light years ahead of the competition.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 275,
    "term": "bells and whistles",
    "clean_word": "bells and whistles",
    "type": "idiom",
    "desc": "[C1] idiom: những tính năng phụ trợ hào nhoáng (nhưng không cốt lõi)",
    "example": "I prefer a simple laptop without any unnecessary bells and whistles.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 5
  },
  {
    "id": 276,
    "term": "blended learning",
    "clean_word": "blended learning",
    "type": "n",
    "desc": "[B2] n: phương pháp học tập kết hợp (trực tiếp & trực tuyến)",
    "example": "Blended learning is highly effective as it combines face-to-face classes with digital resources.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 277,
    "term": "distraction",
    "clean_word": "distraction",
    "type": "n",
    "desc": "[B2] n: sự xao nhãng, mất tập trung",
    "example": "Noise from construction sites was a major distraction during the lecture.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 278,
    "term": "strategy",
    "clean_word": "strategy",
    "type": "n",
    "desc": "[B2] n: chiến lược học tập/phát triển",
    "example": "Students need to develop a solid study strategy to pass the final exam.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 279,
    "term": "real-world",
    "clean_word": "real-world",
    "type": "adj",
    "desc": "[B2] adj: thuộc thực tế, ứng dụng đời thực",
    "example": "The teacher gave real-world examples to explain the complex scientific theory.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 280,
    "term": "interactive",
    "clean_word": "interactive",
    "type": "adj",
    "desc": "[B2] adj: mang tính tương tác cao",
    "example": "Digital technology offers interactive ways for children to explore science.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 281,
    "term": "communicate",
    "clean_word": "communicate",
    "type": "v",
    "desc": "[B1] v: giao tiếp, trao đổi",
    "example": "Online platforms enable students to communicate with experts worldwide.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 282,
    "term": "control",
    "clean_word": "control",
    "type": "v/n",
    "desc": "[B1] v/n: kiểm soát, điều khiển / sự kiểm soát",
    "example": "Self-study requires students to have great control over their learning schedule.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 283,
    "term": "digital",
    "clean_word": "digital",
    "type": "adj",
    "desc": "[B1] adj: kỹ thuật số, thuộc về công nghệ",
    "example": "The digital age has brought about a revolution in classroom resources.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 284,
    "term": "exchange",
    "clean_word": "exchange",
    "type": "v/n",
    "desc": "[B2] v/n: trao đổi",
    "example": "Students can easily exchange study materials through local forums.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 285,
    "term": "face-to-face",
    "clean_word": "face-to-face",
    "type": "adj/adv",
    "desc": "[B2] adj/adv: trực tiếp, mặt đối mặt",
    "example": "Face-to-face interaction helps teachers understand their students' feelings better.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 286,
    "term": "flow chart",
    "clean_word": "flow chart",
    "type": "n",
    "desc": "[B2] n: sơ đồ quy trình, lưu đồ",
    "example": "Using a flow chart is an excellent way to visualize a complex process.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 287,
    "term": "focus",
    "clean_word": "focus",
    "type": "v/n",
    "desc": "[B1] v/n: tập trung / tiêu điểm, sự tập trung",
    "example": "It is hard to focus on the lecture when you have online notifications popping up.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 288,
    "term": "high-speed",
    "clean_word": "high-speed",
    "type": "adj",
    "desc": "[B2] adj: tốc độ cao (internet, kết nối)",
    "example": "Rural classrooms need high-speed internet to gain access to online lectures.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 289,
    "term": "immediately",
    "clean_word": "immediately",
    "type": "adv",
    "desc": "[B1] adv: ngay lập tức",
    "example": "With smart devices, you can look up new words immediately.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 290,
    "term": "install",
    "clean_word": "install",
    "type": "v",
    "desc": "[B2] v: cài đặt (phần mềm, ứng dụng)",
    "example": "You should install an interactive dictionary on your smartphone.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 291,
    "term": "online learning",
    "clean_word": "online learning",
    "type": "n",
    "desc": "[B1] n: học trực tuyến",
    "example": "Online learning offers great flexibility for busy homemakers.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 292,
    "term": "original",
    "clean_word": "original",
    "type": "adj",
    "desc": "[B2] adj: độc đáo, sáng tạo, nguyên bản",
    "example": "The student’s project was highly praised for its original design.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 293,
    "term": "resource",
    "clean_word": "resource",
    "type": "n",
    "desc": "[B1] n: tài nguyên học tập, nguồn lực",
    "example": "The school provides extensive digital resources, including e-books and videos.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 294,
    "term": "schedule",
    "clean_word": "schedule",
    "type": "n/v",
    "desc": "[B1] n/v: lịch trình, thời khóa biểu",
    "example": "An organized study schedule keeps students focused on their daily tasks.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 295,
    "term": "teamwork",
    "clean_word": "teamwork",
    "type": "n",
    "desc": "[B1] n: làm việc nhóm, hoạt động nhóm",
    "example": "Classroom projects are highly beneficial for developing teamwork skills.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 296,
    "term": "voice recorder",
    "clean_word": "voice recorder",
    "type": "n",
    "desc": "[B2] n: máy ghi âm, thiết bị thu âm",
    "example": "I used my voice recorder to save the lecture for review at home.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 297,
    "term": "electronic",
    "clean_word": "electronic",
    "type": "adj",
    "desc": "[B1] adj: thuộc về điện tử",
    "example": "Electronic dictionaries have completely replaced thick paper books.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 298,
    "term": "feedback",
    "clean_word": "feedback",
    "type": "n",
    "desc": "[B2] n: ý kiến phản hồi, nhận xét",
    "example": "Constructive feedback from teachers is essential for student improvement.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 299,
    "term": "collaborative",
    "clean_word": "collaborative",
    "type": "adj",
    "desc": "[C1] adj: mang tính cộng tác, phối hợp",
    "example": "Group presentations facilitate collaborative learning in the classroom.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 300,
    "term": "academic",
    "clean_word": "academic",
    "type": "adj",
    "desc": "[B2] adj: thuộc học thuật, lý thuyết",
    "example": "Writing essays is a crucial part of university academic requirements.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 301,
    "term": "look for",
    "clean_word": "look for",
    "type": "phr.v",
    "desc": "[B1] phr.v: tìm kiếm, lục tìm",
    "example": "She is looking for a quiet study space in the local library.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 302,
    "term": "look up",
    "clean_word": "look up",
    "type": "phr.v",
    "desc": "[B1] phr.v: tra cứu thông tin, từ điển",
    "example": "You can look up advanced vocabulary easily on online platforms.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 303,
    "term": "note down",
    "clean_word": "note down",
    "type": "phr.v",
    "desc": "[B1] phr.v: ghi chép nhanh lại",
    "example": "Remember to note down the main ideas of the presentation.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 304,
    "term": "log in / log on",
    "clean_word": "log in / log on",
    "type": "phr.v",
    "desc": "[B1] phr.v: đăng nhập vào hệ thống",
    "example": "You must register with a password before you can log in to the site.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 305,
    "term": "log out / log off",
    "clean_word": "log out / log off",
    "type": "phr.v",
    "desc": "[B1] phr.v: đăng xuất khỏi hệ thống",
    "example": "Always log out of public computers to protect your personal data.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 306,
    "term": "plug in",
    "clean_word": "plug in",
    "type": "phr.v",
    "desc": "[B1] phr.v: cắm sạc, nguồn điện",
    "example": "Plug in your voice recorder before the class starts.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 307,
    "term": "hand in",
    "clean_word": "hand in",
    "type": "phr.v",
    "desc": "[B2] phr.v: nộp bài tập, nộp đơn",
    "example": "The teacher reminded us to hand in our assignments by Friday.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 308,
    "term": "turn off",
    "clean_word": "turn off",
    "type": "phr.v",
    "desc": "[B1] phr.v: tắt thiết bị điện tử",
    "example": "Students are required to turn off their mobile phones during exams.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 309,
    "term": "print out",
    "clean_word": "print out",
    "type": "phr.v",
    "desc": "[B1] phr.v: in tài liệu ra giấy",
    "example": "I printed out the flow chart to explain it to my team members.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 310,
    "term": "keep up with",
    "clean_word": "keep up with",
    "type": "phr.v",
    "desc": "[B2] phr.v: bắt kịp, theo kịp tiến độ",
    "example": "Using digital tools helps slow learners keep up with the class.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 311,
    "term": "have a positive / negative impact on sth",
    "clean_word": "have a positive / negative impact on sth",
    "type": "colloc",
    "desc": "[B2] colloc: có tác động tích cực / tiêu cực lên cái gì",
    "example": "Excessive screen time has a negative impact on children's eyesight.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 312,
    "term": "keep sb focused on sth",
    "clean_word": "keep sb focused on sth",
    "type": "colloc",
    "desc": "[B2] colloc: giữ cho ai luôn tập trung vào mục tiêu",
    "example": "An organized study schedule keeps students focused on their daily tasks.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 313,
    "term": "gain access to educational resources",
    "clean_word": "gain access to educational resources",
    "type": "colloc",
    "desc": "[C1] colloc: tiếp cận các nguồn học liệu chất lượng",
    "example": "High-speed internet enables rural schools to gain access to global educational resources.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 314,
    "term": "facilitate active learning",
    "clean_word": "facilitate active learning",
    "type": "colloc",
    "desc": "[C1] colloc: thúc đẩy việc tự học, học chủ động",
    "example": "Smart devices facilitate active learning in modern classrooms.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 315,
    "term": "blended learning method",
    "clean_word": "blended learning method",
    "type": "colloc",
    "desc": "[B2] colloc: phương pháp học kết hợp",
    "example": "Many universities are adopting the blended learning method for economics courses.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 316,
    "term": "digital technology",
    "clean_word": "digital technology",
    "type": "colloc",
    "desc": "[B2] colloc: công nghệ kỹ thuật số",
    "example": "Digital technology has completely revolutionized our work and studies.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 317,
    "term": "high-speed internet connection",
    "clean_word": "high-speed internet connection",
    "type": "colloc",
    "desc": "[B2] colloc: kết nối internet tốc độ cao",
    "example": "Online classrooms require a stable high-speed internet connection.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 318,
    "term": "develop learning strategies",
    "clean_word": "develop learning strategies",
    "type": "colloc",
    "desc": "[C1] colloc: phát triển chiến lược học tập",
    "example": "Top students usually develop highly effective learning strategies.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 319,
    "term": "provide constructive feedback",
    "clean_word": "provide constructive feedback",
    "type": "colloc",
    "desc": "[C1] colloc: cung cấp ý kiến nhận xét mang tính xây dựng",
    "example": "Teachers should provide constructive feedback to improve students' writing.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 320,
    "term": "improve academic performance",
    "clean_word": "improve academic performance",
    "type": "colloc",
    "desc": "[C1] colloc: nâng cao kết quả học tập",
    "example": "Self-study and discipline are key to improving academic performance.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 321,
    "term": "digital learning platforms",
    "clean_word": "digital learning platforms",
    "type": "colloc",
    "desc": "[C1] colloc: nền tảng học tập số",
    "example": "Our school utilizes advanced digital learning platforms for homework submission.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 322,
    "term": "personal computer / device",
    "clean_word": "personal computer / device",
    "type": "colloc",
    "desc": "[B1] colloc: thiết bị cá nhân",
    "example": "Every student has their own personal device for blended learning.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 323,
    "term": "eliminate classroom distractions",
    "clean_word": "eliminate classroom distractions",
    "type": "colloc",
    "desc": "[C1] colloc: loại bỏ các tác nhân gây xao nhãng",
    "example": "Turning off phones is crucial to eliminate classroom distractions.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 324,
    "term": "foster active participation",
    "clean_word": "foster active participation",
    "type": "colloc",
    "desc": "[C1] colloc: thúc đẩy sự tham gia chủ động",
    "example": "Interactive games foster active participation among young learners.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 325,
    "term": "exchange academic information",
    "clean_word": "exchange academic information",
    "type": "colloc",
    "desc": "[B2] colloc: trao đổi thông tin học thuật",
    "example": "Forums allow students to exchange academic information easily.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 326,
    "term": "burn the midnight oil",
    "clean_word": "burn the midnight oil",
    "type": "idiom",
    "desc": "[C1] idiom: thức khuya để học tập/làm việc",
    "example": "She had to burn the midnight oil for weeks to prepare for the final exam.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 327,
    "term": "hit the books",
    "clean_word": "hit the books",
    "type": "idiom",
    "desc": "[C1] idiom: bắt đầu lao vào học tập nghiêm túc",
    "example": "The mid-term exams are next week, so it is time to hit the books.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 328,
    "term": "pass with flying colors",
    "clean_word": "pass with flying colors",
    "type": "idiom",
    "desc": "[C1] idiom: đỗ đạt với kết quả xuất sắc, điểm số rực rỡ",
    "example": "Thanks to her hard work, she passed the IELTS exam with flying colors.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 329,
    "term": "learn by heart",
    "clean_word": "learn by heart",
    "type": "idiom",
    "desc": "[B2] idiom: học thuộc lòng, ghi nhớ chính xác",
    "example": "He had to learn the entire list of phrasal verbs by heart.",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 330,
    "term": "teach an old dog new tricks",
    "clean_word": "teach an old dog new tricks",
    "type": "idiom",
    "desc": "[C1] idiom: dạy cho người già, người cũ thói quen mới",
    "example": "My grandfather is seventy, but he learned to use a tablet; you can teach an old dog new tricks!",
    "category": "Wing 3: Inventions & New Ways to Learn",
    "monster": "🔮 Shadow Familiar",
    "unit": 8
  },
  {
    "id": 331,
    "term": "discrimination",
    "clean_word": "discrimination",
    "type": "n",
    "desc": "[B2] n: sự phân biệt đối xử",
    "example": "Governments must pass laws to eliminate gender discrimination in the workplace.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 332,
    "term": "elimination",
    "clean_word": "elimination",
    "type": "n",
    "desc": "[C1] n: sự xóa bỏ, triệt tiêu tận gốc",
    "example": "We must work together for the elimination of violence against women.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 333,
    "term": "surgeon",
    "clean_word": "surgeon",
    "type": "n",
    "desc": "[B2] n: bác sĩ phẫu thuật",
    "example": "She proved that women can excel as professional surgeons.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 334,
    "term": "cosmonaut",
    "clean_word": "cosmonaut",
    "type": "n",
    "desc": "[C1] n: nhà du hành vũ trụ",
    "example": "She was chosen to be the first female cosmonaut of her country.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 335,
    "term": "bias",
    "clean_word": "bias",
    "type": "n",
    "desc": "[C1] n: định kiến, thiên vị",
    "example": "Overcoming gender bias is a long-term struggle in many modern societies.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 336,
    "term": "equality",
    "clean_word": "equality",
    "type": "n",
    "desc": "[B2] n: sự bình đẳng",
    "example": "Gender equality is not just a women's issue; it affects all of society.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 337,
    "term": "equal",
    "clean_word": "equal",
    "type": "adj",
    "desc": "[B1] adj: bằng nhau, bình đẳng",
    "example": "Men and women must have equal opportunities to pursue their careers.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 338,
    "term": "domestic violence",
    "clean_word": "domestic violence",
    "type": "n",
    "desc": "[B2] n: bạo lực gia đình",
    "example": "The local shelter provides protection for victims of domestic violence.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 339,
    "term": "firefighter",
    "clean_word": "firefighter",
    "type": "n",
    "desc": "[B2] n: lính cứu hỏa, chữa cháy",
    "example": "Being a firefighter is physically demanding, but women are excelling in it.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 340,
    "term": "kindergarten",
    "clean_word": "kindergarten",
    "type": "n",
    "desc": "[B2] n: trường mẫu giáo",
    "example": "Many male teachers enjoy working as kindergarten instructors.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 341,
    "term": "mental",
    "clean_word": "mental",
    "type": "adj",
    "desc": "[B2] adj: thuộc về tinh thần, tâm lý",
    "example": "Domestic abuse causes severe mental damage to the victims.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 342,
    "term": "officer",
    "clean_word": "officer",
    "type": "n",
    "desc": "[B2] n: sĩ quan, viên chức",
    "example": "She has worked as a police officer for over ten years.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 343,
    "term": "operation",
    "clean_word": "operation",
    "type": "n",
    "desc": "[B2] n: cuộc phẫu thuật, vận hành",
    "example": "The surgeon performed a highly complex operation successfully.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 344,
    "term": "parachute",
    "clean_word": "parachute",
    "type": "v/n",
    "desc": "[C1] v/n: nhảy dù / cái dù",
    "example": "She was trained to parachute from a plane at high altitudes.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 345,
    "term": "parachutist",
    "clean_word": "parachutist",
    "type": "n",
    "desc": "[C1] n: người nhảy dù",
    "example": "As an expert parachutist, she completed hundreds of successful jumps.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 346,
    "term": "patient",
    "clean_word": "patient",
    "type": "n",
    "desc": "[B1] n: bệnh nhân",
    "example": "The nurse took care of the elderly patient with great patience.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 347,
    "term": "physical",
    "clean_word": "physical",
    "type": "adj",
    "desc": "[B2] adj: thuộc về thể chất, cơ bắp",
    "example": "Men and women have different physical characteristics, but equal capabilities.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 348,
    "term": "pilot",
    "clean_word": "pilot",
    "type": "n",
    "desc": "[B1] n: phi công",
    "example": "Becoming a commercial pilot requires rigorous training and excellent eyesight.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 349,
    "term": "secretary",
    "clean_word": "secretary",
    "type": "n",
    "desc": "[B1] n: thư ký",
    "example": "The secretary is responsible for organizing the manager's schedule.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 350,
    "term": "shop assistant",
    "clean_word": "shop assistant",
    "type": "n",
    "desc": "[B1] n: nhân viên bán hàng",
    "example": "She worked as a shop assistant to earn money for her university fees.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 351,
    "term": "skilful",
    "clean_word": "skilful",
    "type": "adj",
    "desc": "[B2] adj: lành nghề, khéo léo, tinh xảo",
    "example": "The female engineer is highly skilful at designing computer hardware.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 352,
    "term": "uneducated",
    "clean_word": "uneducated",
    "type": "adj",
    "desc": "[B2] adj: thất học, ít được giáo dục",
    "example": "Uneducated girls are more vulnerable to early child marriage.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 353,
    "term": "victim",
    "clean_word": "victim",
    "type": "n",
    "desc": "[B2] n: nạn nhân",
    "example": "The charity organization raises funds to support victims of natural disasters.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 354,
    "term": "gender",
    "clean_word": "gender",
    "type": "n",
    "desc": "[B2] n: giới tính",
    "example": "We must work together to eliminate gender inequality in all walks of life.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 355,
    "term": "workforce",
    "clean_word": "workforce",
    "type": "n",
    "desc": "[B2] n: lực lượng lao động",
    "example": "More women are entering the scientific workforce than ever before.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 356,
    "term": "look after",
    "clean_word": "look after",
    "type": "phr.v",
    "desc": "[B1] phr.v: chăm sóc, trông nom",
    "example": "Fathers should also stay at home to look after their sick children.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 357,
    "term": "bring up",
    "clean_word": "bring up",
    "type": "phr.v",
    "desc": "[B2] phr.v: nuôi nấng, dạy dỗ",
    "example": "Both parents should cooperate to bring up their children responsibly.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 358,
    "term": "rule out",
    "clean_word": "rule out",
    "type": "phr.v",
    "desc": "[C1] phr.v: loại trừ, bác bỏ khả năng",
    "example": "We cannot rule out the possibility of career promotion for female workers.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 359,
    "term": "stand up for",
    "clean_word": "stand up for",
    "type": "phr.v",
    "desc": "[B2] phr.v: đứng lên bảo vệ, đấu tranh cho",
    "example": "Women must stand up for their rights in the workplace.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 360,
    "term": "phase out",
    "clean_word": "phase out",
    "type": "phr.v",
    "desc": "[C1] phr.v: từng bước xóa bỏ",
    "example": "The corporate policy aims to phase out gender wage gap by 2028.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 361,
    "term": "carry on",
    "clean_word": "carry on",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiếp tục thực hiện",
    "example": "She decided to carry on her studies despite facing financial hardships.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 362,
    "term": "fight back",
    "clean_word": "fight back",
    "type": "phr.v",
    "desc": "[B2] phr.v: đấu tranh chống trả lại",
    "example": "Victims of domestic abuse are learning to fight back through legal help.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 363,
    "term": "build up",
    "clean_word": "build up",
    "type": "phr.v",
    "desc": "[B2] phr.v: xây dựng, bồi đắp dần lên",
    "example": "Doing volunteer work helps girls build up their self-confidence.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 364,
    "term": "break down",
    "clean_word": "break down",
    "type": "phr.v",
    "desc": "[B2] phr.v: phá vỡ rào cản, hỏng hóc",
    "example": "We must work together to break down traditional gender stereotypes.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 365,
    "term": "give up",
    "clean_word": "give up",
    "type": "phr.v",
    "desc": "[B1] phr.v: từ bỏ, đầu hàng",
    "example": "She never gave up her dream of becoming a commercial pilot.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 366,
    "term": "promote gender equality",
    "clean_word": "promote gender equality",
    "type": "colloc",
    "desc": "[B2] colloc: thúc đẩy bình đẳng giới",
    "example": "Promoting gender equality benefits both men and women.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 367,
    "term": "pursue a career",
    "clean_word": "pursue a career",
    "type": "colloc",
    "desc": "[B2] colloc: theo đuổi sự nghiệp lâu dài",
    "example": "She chose to pursue a career in aerospace engineering.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 368,
    "term": "provide sb with equal access to sth",
    "clean_word": "provide sb with equal access to sth",
    "type": "colloc",
    "desc": "[B2] colloc: mang lại quyền tiếp cận bình đẳng",
    "example": "The scholarship program provides underprivileged students with equal access to higher education.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 369,
    "term": "treat equally",
    "clean_word": "treat equally",
    "type": "colloc",
    "desc": "[B2] colloc: đối xử bình đẳng, công bằng",
    "example": "All employees must be treated equally regardless of their gender.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 370,
    "term": "domestic violence",
    "clean_word": "domestic violence",
    "type": "colloc",
    "desc": "[B2] colloc: bạo lực gia đình",
    "example": "Domestic violence is a serious crime that must be severely punished.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 371,
    "term": "gender discrimination",
    "clean_word": "gender discrimination",
    "type": "colloc",
    "desc": "[B2] colloc: sự phân biệt đối xử theo giới tính",
    "example": "Laws are being passed to eliminate gender discrimination in job hiring.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 372,
    "term": "equal job opportunities",
    "clean_word": "equal job opportunities",
    "type": "colloc",
    "desc": "[C1] colloc: cơ hội việc làm công bằng",
    "example": "Both genders should have equal job opportunities in all fields.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 373,
    "term": "fundamental human rights",
    "clean_word": "fundamental human rights",
    "type": "colloc",
    "desc": "[C1] colloc: quyền con người cơ bản",
    "example": "Gender equality is one of the most fundamental human rights.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 374,
    "term": "break traditional barriers",
    "clean_word": "break traditional barriers",
    "type": "colloc",
    "desc": "[C1] colloc: phá vỡ rào cản truyền thống",
    "example": "Female scientists are breaking traditional barriers in aerospace technology.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 375,
    "term": "gender wage gap",
    "clean_word": "gender wage gap",
    "type": "colloc",
    "desc": "[C1] colloc: chênh lệch mức lương theo giới",
    "example": "The government is trying to narrow down the gender wage gap.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 376,
    "term": "leadership positions / roles",
    "clean_word": "leadership positions / roles",
    "type": "colloc",
    "desc": "[C1] colloc: vị trí, vai trò lãnh đạo",
    "example": "More women are being promoted to senior leadership positions.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 377,
    "term": "prevent child marriage",
    "clean_word": "prevent child marriage",
    "type": "colloc",
    "desc": "[C1] colloc: ngăn chặn nạn tảo hôn",
    "example": "Educating rural girls is an effective way to prevent child marriage.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 378,
    "term": "equal participation in decision-making",
    "clean_word": "equal participation in decision-making",
    "type": "colloc",
    "desc": "[C2] colloc: sự tham gia bình đẳng vào việc quyết định",
    "example": "Society benefits from women's equal participation in decision-making.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 379,
    "term": "require immense physical strength",
    "clean_word": "require immense physical strength",
    "type": "colloc",
    "desc": "[C1] colloc: đòi hỏi thể chất, sức lực cực lớn",
    "example": "Jobs like mining or firefighting require immense physical strength.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 380,
    "term": "professional career path",
    "clean_word": "professional career path",
    "type": "colloc",
    "desc": "[B2] colloc: lộ trình sự nghiệp chuyên nghiệp",
    "example": "She designed a clear professional career path to become a surgeon.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 381,
    "term": "break the glass ceiling",
    "clean_word": "break the glass ceiling",
    "type": "idiom",
    "desc": "[C2] idiom: phá vỡ rào cản vô hình thăng tiến sự nghiệp (do định kiến giới)",
    "example": "She broke the glass ceiling by becoming the first female president of the bank.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 382,
    "term": "wear the pants",
    "clean_word": "wear the pants",
    "type": "idiom",
    "desc": "[C1] idiom: giành quyền lực, là người quyết định trong gia đình",
    "example": "My mother definitely wears the pants in our household; she manages everything.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 383,
    "term": "a man's world",
    "clean_word": "a man's world",
    "type": "idiom",
    "desc": "[C1] idiom: thế giới của đàn ông (đặc quyền, thống trị)",
    "example": "Engineering used to be a man's world, but female engineers are changing that.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 384,
    "term": "level playing field",
    "clean_word": "level playing field",
    "type": "idiom",
    "desc": "[C2] idiom: sân chơi bình đẳng, công bằng cho mọi đối tượng",
    "example": "We must create a level playing field for both male and female job candidates.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 385,
    "term": "jack of all trades (and master of none)",
    "clean_word": "jack of all trades",
    "type": "idiom",
    "desc": "[C1] idiom: người việc gì cũng biết làm nhưng không giỏi tinh sâu việc nào",
    "example": "It's better to be a highly specialized surgeon than a jack of all trades.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 6
  },
  {
    "id": 386,
    "term": "commit",
    "clean_word": "commit",
    "type": "v",
    "desc": "[B2] v: cam kết, giao phó trách nhiệm",
    "example": "Vietnam is committed to supporting peacekeeping forces globally.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 387,
    "term": "peacekeeping",
    "clean_word": "peacekeeping",
    "type": "adj/n",
    "desc": "[C1] adj/n: thuộc về gìn giữ hòa bình",
    "example": "Vietnam has participated in international peacekeeping activities since 2014.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 388,
    "term": "expert",
    "clean_word": "expert",
    "type": "n",
    "desc": "[B1] n: chuyên gia chuyên sâu",
    "example": "The organization sent technical experts to assist with local health programs.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 389,
    "term": "essential",
    "clean_word": "essential",
    "type": "adj",
    "desc": "[B1] adj: cốt yếu, thiết yếu",
    "example": "International trade is essential for boosting national economic growth.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 390,
    "term": "foster",
    "clean_word": "foster",
    "type": "v",
    "desc": "[C1] v: nuôi dưỡng, bồi đắp, thúc đẩy",
    "example": "ASEAN aims to foster regional cooperation and cultural exchange.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 391,
    "term": "aim",
    "clean_word": "aim",
    "type": "n/v",
    "desc": "[B1] n/v: mục tiêu / đặt ra mục tiêu",
    "example": "The main aim of UNICEF is to protect children’s rights worldwide.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 392,
    "term": "competitive",
    "clean_word": "competitive",
    "type": "adj",
    "desc": "[B2] adj: mang tính cạnh tranh",
    "example": "Domestic businesses must become more competitive in the global market.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 393,
    "term": "economic",
    "clean_word": "economic",
    "type": "adj",
    "desc": "[B1] adj: thuộc về kinh tế",
    "example": "The bilateral agreement has brought immense economic benefits to both nations.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 394,
    "term": "economy",
    "clean_word": "economy",
    "type": "n",
    "desc": "[B1] n: nền kinh tế",
    "example": "Vietnam has a rapidly growing market economy.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 395,
    "term": "enter",
    "clean_word": "enter",
    "type": "v",
    "desc": "[B1] v: gia nhập, bước vào",
    "example": "Entering the World Trade Organization was a historic milestone for Vietnam.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 396,
    "term": "invest",
    "clean_word": "invest",
    "type": "v",
    "desc": "[B2] v: đầu tư",
    "example": "The international fund plans to invest millions of dollars in clean energy.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 397,
    "term": "poverty",
    "clean_word": "poverty",
    "type": "n",
    "desc": "[B2] n: sự nghèo đói, đói nghèo",
    "example": "Many global programs focus on reducing poverty in developing countries.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 398,
    "term": "promote",
    "clean_word": "promote",
    "type": "v",
    "desc": "[B2] v: thúc đẩy, quảng bá",
    "example": "UNESCO works to promote and protect cultural heritage sites.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 399,
    "term": "quality",
    "clean_word": "quality",
    "type": "n",
    "desc": "[B1] n: chất lượng, phẩm chất",
    "example": "Improving educational quality is essential for sustainable development.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 400,
    "term": "regional",
    "clean_word": "regional",
    "type": "adj",
    "desc": "[B2] adj: thuộc về khu vực",
    "example": "Member states work closely to solve common regional issues.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 401,
    "term": "relation",
    "clean_word": "relation",
    "type": "n",
    "desc": "[B1] n: mối quan hệ ngoại giao",
    "example": "Vietnam has formed diplomatic relations with almost all countries.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 402,
    "term": "respect",
    "clean_word": "respect",
    "type": "v/n",
    "desc": "[B1] v/n: tôn trọng / sự tôn trọng",
    "example": "International agreements must be respected by all signatory parties.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 403,
    "term": "technical",
    "clean_word": "technical",
    "type": "adj",
    "desc": "[B2] adj: thuộc về kỹ thuật, chuyên môn",
    "example": "The project received technical support from international experts.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 404,
    "term": "trade",
    "clean_word": "trade",
    "type": "n/v",
    "desc": "[B1] n/v: thương mại, buôn bán",
    "example": "Free trade helps lower the prices of imported goods for consumers.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 405,
    "term": "vaccinate",
    "clean_word": "vaccinate",
    "type": "v",
    "desc": "[B2] v: tiêm vắc-xin, chủng ngừa",
    "example": "UNICEF has helped vaccinate millions of children in poor rural areas.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 406,
    "term": "welcome",
    "clean_word": "welcome",
    "type": "v",
    "desc": "[B1] v: hoan nghênh, chào đón",
    "example": "Vietnam always welcomes foreign investors and international partners.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 407,
    "term": "cooperation",
    "clean_word": "cooperation",
    "type": "n",
    "desc": "[B2] n: sự hợp tác",
    "example": "International cooperation is key to solving global climate issues.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 408,
    "term": "partnership",
    "clean_word": "partnership",
    "type": "n",
    "desc": "[B2] n: quan hệ đối tác",
    "example": "The WTO fosters an open partnership among member economies.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 409,
    "term": "bilateral",
    "clean_word": "bilateral",
    "type": "adj",
    "desc": "[C1] adj: song phương, hai bên",
    "example": "Bilateral trade relations between Vietnam and the US have grown rapidly.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 410,
    "term": "multilateral",
    "clean_word": "multilateral",
    "type": "adj",
    "desc": "[C1] adj: đa phương, nhiều bên",
    "example": "Multilateral diplomatic talks are essential for keeping global peace.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 411,
    "term": "take part in / participate in",
    "clean_word": "take part in / participate in",
    "type": "phr.v",
    "desc": "[B1] phr.v: tham gia vào hoạt động gì",
    "example": "Vietnam actively participates in global environmental campaigns.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 412,
    "term": "build up",
    "clean_word": "build up",
    "type": "phr.v",
    "desc": "[B2] phr.v: xây dựng, củng cố dần lên",
    "example": "The country is trying to build up its national defense capabilities.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 413,
    "term": "count on",
    "clean_word": "count on",
    "type": "phr.v",
    "desc": "[B2] phr.v: tin tưởng, dựa dẫm vào ai",
    "example": "Developing nations can count on the UN for financial support.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 414,
    "term": "carry out",
    "clean_word": "carry out",
    "type": "phr.v",
    "desc": "[B2] phr.v: thực hiện nghĩa vụ, dự án",
    "example": "Signatory nations must carry out their commitments to protect the planet.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 415,
    "term": "enter into",
    "clean_word": "enter into",
    "type": "phr.v",
    "desc": "[C1] phr.v: chính thức ký kết, bắt đầu",
    "example": "The two governments entered into a bilateral trade agreement last week.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 416,
    "term": "open up",
    "clean_word": "open up",
    "type": "phr.v",
    "desc": "[B2] phr.v: mở ra (cơ hội, thị trường)",
    "example": "Joining international organizations opens up new markets for local products.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 417,
    "term": "join in",
    "clean_word": "join in",
    "type": "phr.v",
    "desc": "[B1] phr.v: tham gia, hòa mình vào",
    "example": "Vietnam joined in the international efforts to vaccinate rural children.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 418,
    "term": "stand for",
    "clean_word": "stand for",
    "type": "phr.v",
    "desc": "[B2] phr.v: viết tắt của, đại diện cho",
    "example": "UNICEF stands for the United Nations International Children's Emergency Fund.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 419,
    "term": "look forward to",
    "clean_word": "look forward to",
    "type": "phr.v",
    "desc": "[B1] phr.v: mong chờ sự hợp tác",
    "example": "We look forward to welcoming more foreign experts to our university.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 420,
    "term": "lead to",
    "clean_word": "lead to",
    "type": "phr.v",
    "desc": "[B1] phr.v: dẫn tới (kết quả, thành tựu)",
    "example": "Active integration has led to remarkable economic achievements for Vietnam.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 421,
    "term": "gain economic benefits",
    "clean_word": "gain economic benefits",
    "type": "colloc",
    "desc": "[B2] colloc: gặt hái các lợi ích kinh tế lớn lao",
    "example": "The country has gained great economic benefits since joining international trade organizations.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 422,
    "term": "form relations with",
    "clean_word": "form relations with",
    "type": "colloc",
    "desc": "[B2] colloc: thiết lập mối quan hệ với",
    "example": "Vietnam actively seeks to form cooperative relations with countries all over the world.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 423,
    "term": "win-win partnership",
    "clean_word": "win-win partnership",
    "type": "colloc",
    "desc": "[C1] colloc: mối quan hệ hợp tác đôi bên cùng có lợi",
    "example": "The bilateral agreement establishes a stable win-win partnership.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 424,
    "term": "maintain regional peace",
    "clean_word": "maintain regional peace",
    "type": "colloc",
    "desc": "[B2] colloc: giữ vững hòa bình khu vực",
    "example": "Member states work together to maintain regional peace and stability.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 425,
    "term": "member state",
    "clean_word": "member state",
    "type": "colloc",
    "desc": "[C1] colloc: quốc gia thành viên",
    "example": "Vietnam has been an active member state of the United Nations since 1977.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 426,
    "term": "international organisation",
    "clean_word": "international organisation",
    "type": "colloc",
    "desc": "[B2] colloc: tổ chức quốc tế",
    "example": "UNICEF is a highly respected international organisation supporting children.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 427,
    "term": "peacekeeping activities",
    "clean_word": "peacekeeping activities",
    "type": "colloc",
    "desc": "[C1] colloc: các hoạt động gìn giữ hòa bình",
    "example": "Vietnamese military doctors participated in UN peacekeeping activities.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 428,
    "term": "technical experts",
    "clean_word": "technical experts",
    "type": "colloc",
    "desc": "[B2] colloc: chuyên gia kỹ thuật",
    "example": "The WHO sent technical experts to assist with disease prevention.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 429,
    "term": "provide technical support",
    "clean_word": "provide technical support",
    "type": "colloc",
    "desc": "[B2] colloc: cung cấp hỗ trợ kỹ thuật",
    "example": "International agencies provide technical support to modernize rural farms.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 430,
    "term": "eliminate trade barriers",
    "clean_word": "eliminate trade barriers",
    "type": "colloc",
    "desc": "[C2] colloc: xóa bỏ rào cản thương mại",
    "example": "Free trade agreements aim to eliminate trade barriers among nations.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 431,
    "term": "foster economic growth",
    "clean_word": "foster economic growth",
    "type": "colloc",
    "desc": "[C1] colloc: thúc đẩy tăng trưởng kinh tế",
    "example": "Foreign direct investment is highly effective to foster economic growth.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 432,
    "term": "foster diplomatic relations",
    "clean_word": "foster diplomatic relations",
    "type": "colloc",
    "desc": "[C1] colloc: vun đắp quan hệ ngoại giao",
    "example": "The summit was organized to foster diplomatic relations among countries.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 433,
    "term": "bilateral relations",
    "clean_word": "bilateral relations",
    "type": "colloc",
    "desc": "[C1] colloc: quan hệ song phương",
    "example": "The visit by the president marks a new milestone in bilateral relations.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 434,
    "term": "multilateral cooperation",
    "clean_word": "multilateral cooperation",
    "type": "colloc",
    "desc": "[C1] colloc: hợp tác đa phương",
    "example": "Global issues like climate change require strong multilateral cooperation.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 435,
    "term": "raise international profile",
    "clean_word": "raise international profile",
    "type": "colloc",
    "desc": "[C2] colloc: nâng cao hình ảnh trên trường quốc tế",
    "example": "Hosting international events helps Vietnam raise its international profile.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 436,
    "term": "on the same page",
    "clean_word": "on the same page",
    "type": "idiom",
    "desc": "[C1] idiom: thống nhất ý kiến, cùng chung nhận thức",
    "example": "All member states must be on the same page regarding carbon tax policies.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 437,
    "term": "clear the way (for sth)",
    "clean_word": "clear the way",
    "type": "idiom",
    "desc": "[C1] idiom: mở đường, dọn đường cho cái gì phát triển",
    "example": "The trade agreement cleared the way for massive foreign investments.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 438,
    "term": "play ball",
    "clean_word": "play ball",
    "type": "idiom",
    "desc": "[C1] idiom: hợp tác, chịu làm việc chung",
    "example": "If both countries refuse to play ball, regional conflicts cannot be resolved.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 439,
    "term": "read between the lines",
    "clean_word": "read between the lines",
    "type": "idiom",
    "desc": "[C1] idiom: hiểu được ẩn ý, ý nghĩa ngầm",
    "example": "We need to read between the lines of the diplomatic statement to understand their true intent.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 440,
    "term": "go the extra mile",
    "clean_word": "go the extra mile",
    "type": "idiom",
    "desc": "[C1] idiom: sẵn sàng nỗ lực vượt bậc để giúp đỡ",
    "example": "UN volunteers are always willing to go the extra mile to support refugees.",
    "category": "Wing 4: Gender Equality & International Organisations",
    "monster": "🦊 Moonlit Kitsune",
    "unit": 7
  },
  {
    "id": 441,
    "term": "biodiversity",
    "clean_word": "biodiversity",
    "type": "n",
    "desc": "[C1] n: đa dạng sinh học",
    "example": "Burning fossil fuels harms ecosystems and leads to a loss of biodiversity.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 442,
    "term": "deforestation",
    "clean_word": "deforestation",
    "type": "n",
    "desc": "[B2] n: nạn phá rừng quy mô lớn",
    "example": "Deforestation is a primary cause of global warming and climate change.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 443,
    "term": "ecosystem",
    "clean_word": "ecosystem",
    "type": "n",
    "desc": "[B2] n: hệ sinh thái",
    "example": "Industrial waste can destroy marine ecosystems and harm wildlife.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 444,
    "term": "respiratory",
    "clean_word": "respiratory",
    "type": "adj",
    "desc": "[C1] adj: thuộc hệ hô hấp",
    "example": "Fine dust from factories causes severe respiratory illnesses in children.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 445,
    "term": "consequence",
    "clean_word": "consequence",
    "type": "n",
    "desc": "[B2] n: hậu quả, hệ quả",
    "example": "Rising global temperatures are a direct consequence of greenhouse gas emissions.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 446,
    "term": "balance",
    "clean_word": "balance",
    "type": "n",
    "desc": "[B1] n: sự cân bằng, trạng thái ổn định",
    "example": "Commercial hunting upsets the natural balance of forest ecosystems.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 447,
    "term": "climate change",
    "clean_word": "climate change",
    "type": "n.phr",
    "desc": "[B2] n.phr: sự biến đổi khí hậu toàn cầu",
    "example": "Deforestation is accelerating global warming and climate change.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 448,
    "term": "endangered",
    "clean_word": "endangered",
    "type": "adj",
    "desc": "[B2] adj: bị đe dọa tuyệt chủng",
    "example": "The government has established national parks to protect endangered species.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 449,
    "term": "environmental protection",
    "clean_word": "environmental protection",
    "type": "n.phr",
    "desc": "[B2] n.phr: sự bảo vệ môi trường",
    "example": "Young people play a key role in raising awareness of environmental protection.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 450,
    "term": "extreme",
    "clean_word": "extreme",
    "type": "adj",
    "desc": "[B2] adj: cực đoan, khắc nghiệt (thời tiết)",
    "example": "Global warming is causing extreme weather events like floods and heatwaves.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 451,
    "term": "giant",
    "clean_word": "giant",
    "type": "adj",
    "desc": "[B2] adj: khổng lồ, to lớn",
    "example": "The giant panda is one of the most famous endangered animals.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 452,
    "term": "gorilla",
    "clean_word": "gorilla",
    "type": "n",
    "desc": "[B2] n: khỉ đột",
    "example": "Mountain gorillas are threatened by habitat loss and illegal hunting.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 453,
    "term": "habitat",
    "clean_word": "habitat",
    "type": "n",
    "desc": "[B2] n: môi trường sống tự nhiên",
    "example": "Deforestation destroys the natural habitat of wild animals.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 454,
    "term": "heatwave",
    "clean_word": "heatwave",
    "type": "n",
    "desc": "[B2] n: sóng nhiệt, đợt nắng nóng khắc nghiệt",
    "example": "The intense heatwave caused serious forest fires in several regions.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 455,
    "term": "ice melting",
    "clean_word": "ice melting",
    "type": "n.phr",
    "desc": "[B2] n.phr: hiện tượng tan băng ở cực",
    "example": "Ice melting at the polar caps leads to rising sea levels worldwide.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 456,
    "term": "issue",
    "clean_word": "issue",
    "type": "n",
    "desc": "[B1] n: vấn đề nan giải",
    "example": "Pollution is a pressing issue that requires multilateral cooperation.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 457,
    "term": "panda",
    "clean_word": "panda",
    "type": "n",
    "desc": "[B1] n: gấu trúc",
    "example": "Panda conservation programs have successfully increased their population.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 458,
    "term": "practical",
    "clean_word": "practical",
    "type": "adj",
    "desc": "[B1] adj: thực tế, thiết thực",
    "example": "Choosing reusable shopping bags is a highly practical way to reduce waste.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 459,
    "term": "tortoise",
    "clean_word": "tortoise",
    "type": "n",
    "desc": "[B2] n: rùa cạn",
    "example": "The giant tortoise is a protected species on the remote island.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 460,
    "term": "trade",
    "clean_word": "trade",
    "type": "n/v",
    "desc": "[B1] n/v: buôn bán, thương mại",
    "example": "The illegal trade in wild animal parts must be completely banned.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 461,
    "term": "upset",
    "clean_word": "upset",
    "type": "v",
    "desc": "[B2] v: làm rối loạn, đảo lộn (cân bằng)",
    "example": "Releasing toxic chemicals into rivers can upset the local marine balance.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 462,
    "term": "wildlife",
    "clean_word": "wildlife",
    "type": "n",
    "desc": "[B1] n: động vật hoang dã",
    "example": "The national park aims to preserve wildlife and their natural habitats.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 463,
    "term": "fossil fuels",
    "clean_word": "fossil fuels",
    "type": "n.phr",
    "desc": "[B2] n.phr: nhiên liệu hóa thạch (than, dầu)",
    "example": "We must transition from fossil fuels to renewable alternative energy.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 464,
    "term": "greenhouse gases",
    "clean_word": "greenhouse gases",
    "type": "n.phr",
    "desc": "[B2] n.phr: khí nhà kính",
    "example": "Carbon dioxide is one of the major greenhouse gases warming the planet.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 465,
    "term": "conservation",
    "clean_word": "conservation",
    "type": "n",
    "desc": "[B2] n: sự bảo tồn, gìn giữ",
    "example": "Wildlife conservation is essential for maintaining biodiversity.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 466,
    "term": "run out of",
    "clean_word": "run out of",
    "type": "phr.v",
    "desc": "[B2] phr.v: cạn kiệt tài nguyên",
    "example": "If we don't reduce consumption, we will soon run out of fossil fuels.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 467,
    "term": "use up",
    "clean_word": "use up",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiêu thụ hết sạch",
    "example": "Humans are using up precious natural resources faster than the Earth can supply.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 468,
    "term": "cut down on",
    "clean_word": "cut down on",
    "type": "phr.v",
    "desc": "[B2] phr.v: cắt giảm lượng xả thải/tiêu thụ",
    "example": "Factories must cut down on carbon emissions to protect the atmosphere.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 469,
    "term": "die out",
    "clean_word": "die out",
    "type": "phr.v",
    "desc": "[B2] phr.v: tuyệt chủng, biến mất hoàn toàn",
    "example": "Many endangered species are in danger of dying out due to habitat loss.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 470,
    "term": "clear out",
    "clean_word": "clear out",
    "type": "phr.v",
    "desc": "[B2] phr.v: dọn sạch, phát quang",
    "example": "Large forest lands are cleared out to build commercial highways.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 471,
    "term": "look after",
    "clean_word": "look after",
    "type": "phr.v",
    "desc": "[B1] phr.v: chăm sóc, bảo vệ",
    "example": "National park rangers are responsible for looking after wild animals.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 472,
    "term": "carry out",
    "clean_word": "carry out",
    "type": "phr.v",
    "desc": "[B2] phr.v: tiến hành dự án/thí nghiệm",
    "example": "The green club carried out a major tree-planting event last weekend.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 473,
    "term": "throw away",
    "clean_word": "throw away",
    "type": "phr.v",
    "desc": "[B1] phr.v: vứt bỏ rác thải nhựa",
    "example": "Never throw away single-use bottles; recycle them instead.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 474,
    "term": "build up",
    "clean_word": "build up",
    "type": "phr.v",
    "desc": "[B2] phr.v: tích tụ dần lên (chất độc)",
    "example": "Toxic chemicals build up in marine animals, harming the entire food chain.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 475,
    "term": "protect from",
    "clean_word": "protect from",
    "type": "phr.v",
    "desc": "[B2] phr.v: bảo vệ khỏi tác nhân xấu",
    "example": "Wearing masks helps protect children from air pollution in big cities.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 476,
    "term": "upset the natural balance of ecosystems",
    "clean_word": "upset the natural balance of ecosystems",
    "type": "colloc",
    "desc": "[C1] colloc: làm xáo trộn sự cân bằng tự nhiên của hệ sinh thái",
    "example": "Commercial hunting can upset the natural balance of forest ecosystems.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 477,
    "term": "save endangered animals from extinction",
    "clean_word": "save endangered animals from extinction",
    "type": "colloc",
    "desc": "[B2] colloc: cứu động vật nguy cấp khỏi bờ vực tuyệt chủng",
    "example": "International organizations work collaboratively to save endangered pandas from extinction.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 478,
    "term": "disrupt natural habitats",
    "clean_word": "disrupt natural habitats",
    "type": "colloc",
    "desc": "[C1] colloc: phá hủy/gây xáo trộn môi trường sống tự nhiên",
    "example": "Building new highways can disrupt the natural habitats of local wildlife.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 479,
    "term": "greenhouse gas emissions",
    "clean_word": "greenhouse gas emissions",
    "type": "colloc",
    "desc": "[B2] colloc: sự phát thải khí nhà kính",
    "example": "Reducing greenhouse gas emissions is the main target of the agreement.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 480,
    "term": "climate change mitigation",
    "clean_word": "climate change mitigation",
    "type": "colloc",
    "desc": "[C2] colloc: giảm nhẹ tác động của biến đổi khí hậu",
    "example": "Deforestation is a major barrier to global climate change mitigation.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 481,
    "term": "respiratory illnesses / diseases",
    "clean_word": "respiratory illnesses / diseases",
    "type": "colloc",
    "desc": "[C1] colloc: các bệnh đường hô hấp",
    "example": "Air pollution causes severe respiratory illnesses in crowded urban areas.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 482,
    "term": "marine ecosystems",
    "clean_word": "marine ecosystems",
    "type": "colloc",
    "desc": "[B2] colloc: hệ sinh thái biển",
    "example": "Plastic waste dumped into the ocean causes immense harm to marine ecosystems.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 483,
    "term": "extreme weather events",
    "clean_word": "extreme weather events",
    "type": "colloc",
    "desc": "[B2] colloc: hiện tượng thời tiết cực đoan",
    "example": "Global warming leads to more frequent extreme weather events like heatwaves.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 484,
    "term": "air pollution level",
    "clean_word": "air pollution level",
    "type": "colloc",
    "desc": "[B2] colloc: mức độ ô nhiễm không khí",
    "example": "The air pollution level in the city center has reached an alarming stage.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 485,
    "term": "burn fossil fuels",
    "clean_word": "burn fossil fuels",
    "type": "colloc",
    "desc": "[B2] colloc: đốt nhiên liệu hóa thạch",
    "example": "Burning fossil fuels to generate electricity releases massive greenhouse gases.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 486,
    "term": "soil erosion",
    "clean_word": "soil erosion",
    "type": "colloc",
    "desc": "[C1] colloc: sự xói mòn đất",
    "example": "Deforestation on mountain slopes leads to landslide and severe soil erosion.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 487,
    "term": "ecological balance",
    "clean_word": "ecological balance",
    "type": "colloc",
    "desc": "[C1] colloc: sự cân bằng sinh thái",
    "example": "Every species plays a unique role in maintaining the ecological balance.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 488,
    "term": "global warming effects",
    "clean_word": "global warming effects",
    "type": "colloc",
    "desc": "[B2] colloc: tác động của nóng lên toàn cầu",
    "example": "Ice melting is one of the most visible global warming effects.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 489,
    "term": "greenhouse effect",
    "clean_word": "greenhouse effect",
    "type": "colloc",
    "desc": "[B2] colloc: hiệu ứng nhà kính",
    "example": "Carbon dioxide traps heat in the atmosphere, causing the greenhouse effect.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 490,
    "term": "environmental conservation campaigns",
    "clean_word": "environmental conservation campaigns",
    "type": "colloc",
    "desc": "[B2] colloc: chiến dịch bảo tồn môi trường",
    "example": "Schools should organize environmental conservation campaigns for students.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 491,
    "term": "the tip of the iceberg",
    "clean_word": "the tip of the iceberg",
    "type": "idiom",
    "desc": "[C1] idiom: phần nổi của tảng băng chìm, chỉ là bề nổi của vấn đề lớn",
    "example": "These dead fish are just the tip of the iceberg; the entire river is heavily polluted.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 492,
    "term": "fight a losing battle",
    "clean_word": "fight a losing battle",
    "type": "idiom",
    "desc": "[C1] idiom: đấu tranh trong vô vọng, cầm chắc thất bại",
    "example": "Without government penalties, environmentalists are fighting a losing battle against toxic dumpers.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 493,
    "term": "play with fire",
    "clean_word": "play with fire",
    "type": "idiom",
    "desc": "[C1] idiom: chơi với lửa, hành động liều lĩnh đầy rủi ro",
    "example": "Ignoring carbon emissions is playing with fire; we are risking our future.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 494,
    "term": "out of the woods",
    "clean_word": "out of the woods",
    "type": "idiom",
    "desc": "[C1] idiom: thoát khỏi nguy hiểm, khó khăn",
    "example": "Although the panda population has increased, they are not yet out of the woods.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 495,
    "term": "back to nature",
    "clean_word": "back to nature",
    "type": "idiom",
    "desc": "[B2] idiom: trở về với lối sống thiên nhiên giản dị",
    "example": "Ecotourists love to go back to nature by staying in wooden homestays.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 9
  },
  {
    "id": 496,
    "term": "stalactite",
    "clean_word": "stalactite",
    "type": "n",
    "desc": "[C2] n: nhũ đá (trong hang động địa chất)",
    "example": "The local cave is highly famous for its ancient, majestic stalactites.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 497,
    "term": "indigenous",
    "clean_word": "indigenous",
    "type": "adj",
    "desc": "[C1] adj: bản xứ, bản địa (văn hóa, con người)",
    "example": "Ecotourism supports indigenous communities by generating profit directly for them.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 498,
    "term": "retain",
    "clean_word": "retain",
    "type": "v",
    "desc": "[C1] v: bảo tồn, giữ lại (bản sắc văn hóa)",
    "example": "The host community managed to retain their traditional festivals despite modernization.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 499,
    "term": "mass tourism",
    "clean_word": "mass tourism",
    "type": "n",
    "desc": "[B2] n: du lịch đại chúng, du lịch số đông",
    "example": "Mass tourism causes serious damage to the natural environment and local infrastructure.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 500,
    "term": "sustainable development",
    "clean_word": "sustainable development",
    "type": "n.phr",
    "desc": "[C1] n.phr: phát triển bền vững",
    "example": "Ecotourism must align with the goals of sustainable development.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 501,
    "term": "aware",
    "clean_word": "aware",
    "type": "adj",
    "desc": "[B1] adj: có nhận thức, ý thức về việc gì",
    "example": "Travelers must be highly aware of their impact on local wildlife.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 502,
    "term": "brochure",
    "clean_word": "brochure",
    "type": "n",
    "desc": "[B1] n: tờ quảng cáo, tờ gấp thông tin",
    "example": "The travel agency handed out brochures about pristine ecotourism destinations.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 503,
    "term": "craft",
    "clean_word": "craft",
    "type": "n",
    "desc": "[B2] n: đồ thủ công mỹ nghệ",
    "example": "Buying handmade crafts directly supports the host community.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 504,
    "term": "crowd",
    "clean_word": "crowd",
    "type": "v/n",
    "desc": "[B1] v/n: đổ dồn về, tụ tập đông / đám đông",
    "example": "Thousands of mass tourists crowd the small beach town every summer.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 505,
    "term": "culture",
    "clean_word": "culture",
    "type": "n",
    "desc": "[B1] n: văn hóa",
    "example": "Respecting local culture is a fundamental rule for responsible travelers.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 506,
    "term": "damage",
    "clean_word": "damage",
    "type": "v/n",
    "desc": "[B1] v/n: làm hư hại / thiệt hại",
    "example": "Littering can severely damage the aesthetic value of scenic landscapes.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 507,
    "term": "ecotourism",
    "clean_word": "ecotourism",
    "type": "n",
    "desc": "[B2] n: du lịch sinh thái",
    "example": "Ecotourism offers opportunities to explore nature while protecting it.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 508,
    "term": "explore",
    "clean_word": "explore",
    "type": "v",
    "desc": "[B1] v: khám phá, thám hiểm",
    "example": "The national park allows visitors to explore ancient caves and dense jungles.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 509,
    "term": "floating market",
    "clean_word": "floating market",
    "type": "n",
    "desc": "[B2] n: chợ nổi (đặc trưng miền Tây)",
    "example": "Visiting a floating market in the Mekong Delta is a unique experience.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 510,
    "term": "follow",
    "clean_word": "follow",
    "type": "v",
    "desc": "[B1] v: đi theo, tuân thủ (quy tắc)",
    "example": "Tourists must strictly follow the trail to avoid disrupting natural habitats.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 511,
    "term": "host",
    "clean_word": "host",
    "type": "n",
    "desc": "[B2] n: chủ nhà, cộng đồng bản địa",
    "example": "Homestay visitors should respect the customs of their local hosts.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 512,
    "term": "hunt",
    "clean_word": "hunt",
    "type": "v",
    "desc": "[B1] v: săn bắn (trái phép)",
    "example": "Poachers are caught trying to hunt endangered animals in the national park.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 513,
    "term": "impact",
    "clean_word": "impact",
    "type": "n/v",
    "desc": "[B1] n/v: sự tác động, ảnh hưởng mạnh mẽ",
    "example": "Mass tourism has a highly negative impact on the local environment.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 514,
    "term": "local",
    "clean_word": "local",
    "type": "adj",
    "desc": "[B1] adj: thuộc địa phương",
    "example": "Buying local products is an excellent way to support the host economy.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 515,
    "term": "mass",
    "clean_word": "mass",
    "type": "adj",
    "desc": "[B2] adj: đại chúng, số lượng cực lớn",
    "example": "Mass production of souvenirs often exploits indigenous designs.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 516,
    "term": "path",
    "clean_word": "path",
    "type": "n",
    "desc": "[B1] n: lối đi, đường mòn",
    "example": "Please stay on the walking path to protect rare plants from being crushed.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 517,
    "term": "profit",
    "clean_word": "profit",
    "type": "n",
    "desc": "[B2] n: lợi nhuận",
    "example": "Part of the tourism profit should be reinvested in environmental protection.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 518,
    "term": "protect",
    "clean_word": "protect",
    "type": "v",
    "desc": "[B1] v: bảo vệ, che chở",
    "example": "We must protect the pristine beauty of our national heritages.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 519,
    "term": "responsible",
    "clean_word": "responsible",
    "type": "adj",
    "desc": "[B2] adj: có trách nhiệm",
    "example": "Responsible tourists always minimize their waste and respect local culture.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 520,
    "term": "souvenir",
    "clean_word": "souvenir",
    "type": "n",
    "desc": "[B1] n: quà lưu niệm",
    "example": "She bought a handmade scarf as a souvenir from her trip to Mai Chau.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 521,
    "term": "get away",
    "clean_word": "get away",
    "type": "phr.v",
    "desc": "[B2] phr.v: đi nghỉ, thoát khỏi áp lực để về với thiên nhiên",
    "example": "Many tourists go to remote mountainous areas to get away from noisy city life.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 522,
    "term": "look around",
    "clean_word": "look around",
    "type": "phr.v",
    "desc": "[B1] phr.v: nhìn ngắm xung quanh, đi dạo xem",
    "example": "They spent the afternoon looking around the ancient local village.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 523,
    "term": "check in",
    "clean_word": "check in",
    "type": "phr.v",
    "desc": "[B1] phr.v: làm thủ tục nhận phòng",
    "example": "We arrived at the eco-homestay and checked in at 2 PM.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 524,
    "term": "set off",
    "clean_word": "set off",
    "type": "phr.v",
    "desc": "[B2] phr.v: khởi hành một chuyến đi",
    "example": "The ecotour group set off early in the morning to watch wild birds.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 525,
    "term": "drop off",
    "clean_word": "drop off",
    "type": "phr.v",
    "desc": "[B1] phr.v: thả ai xuống xe",
    "example": "The tour bus dropped us off right at the entrance of the national park.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 526,
    "term": "hold up",
    "clean_word": "hold up",
    "type": "phr.v",
    "desc": "[B2] phr.v: làm trì hoãn, nghẽn (giao thông)",
    "example": "The heavy rain held up our boat trip along the floating market.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 527,
    "term": "pick up",
    "clean_word": "pick up",
    "type": "phr.v",
    "desc": "[B1] phr.v: đón ai, nhặt rác lên",
    "example": "Ecotourists always pick up any rubbish they see on the trails.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 528,
    "term": "take off",
    "clean_word": "take off",
    "type": "phr.v",
    "desc": "[B2] phr.v: cất cánh (máy bay), thành công nhanh",
    "example": "Ecotourism is really taking off in several northern provinces of Vietnam.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 529,
    "term": "point out",
    "clean_word": "point out",
    "type": "phr.v",
    "desc": "[B2] phr.v: chỉ ra (thông tin, đặc điểm)",
    "example": "The local tour guide pointed out several rare medicinal plants along the path.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 530,
    "term": "find out",
    "clean_word": "find out",
    "type": "phr.v",
    "desc": "[B1] phr.v: tìm hiểu, phát hiện ra thông tin",
    "example": "You can find out about the local culture by talking directly to residents.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 531,
    "term": "reduce the negative impact of tourism",
    "clean_word": "reduce the negative impact of tourism",
    "type": "colloc",
    "desc": "[B2] colloc: giảm thiểu tác động tiêu cực của du lịch",
    "example": "The main aim of ecotourism is to reduce the negative impact of tourism on wildlife.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 532,
    "term": "respect local culture and traditions",
    "clean_word": "respect local culture and traditions",
    "type": "colloc",
    "desc": "[B2] colloc: tôn trọng văn hóa và truyền thống địa phương",
    "example": "Travelers must respect local culture and buy handmade crafts to support residents.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 533,
    "term": "generate profit for local people",
    "clean_word": "generate profit for local people",
    "type": "colloc",
    "desc": "[C1] colloc: tạo ra lợi nhuận cho người dân địa phương",
    "example": "Successful ecotourism programs must generate profit directly for the host community.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 534,
    "term": "sustainable development goals",
    "clean_word": "sustainable development goals",
    "type": "colloc",
    "desc": "[C1] colloc: các mục tiêu phát triển bền vững",
    "example": "Ecotourism aligns perfectly with global sustainable development goals.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 535,
    "term": "pristine ecotourism destination",
    "clean_word": "pristine ecotourism destination",
    "type": "colloc",
    "desc": "[C1] colloc: điểm đến du lịch sinh thái nguyên sơ",
    "example": "Mai Chau is highly famous as a pristine ecotourism destination in Vietnam.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 536,
    "term": "floating market",
    "clean_word": "floating market",
    "type": "colloc",
    "desc": "[B2] colloc: chợ nổi truyền thống",
    "example": "Visiting a floating market is a highly popular activity in the Mekong Delta.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 537,
    "term": "handmade crafts",
    "clean_word": "handmade crafts",
    "type": "colloc",
    "desc": "[B2] colloc: đồ thủ công làm bằng tay",
    "example": "Ecotourists are encouraged to buy unique handmade crafts as souvenirs.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 538,
    "term": "support local economy",
    "clean_word": "support local economy",
    "type": "colloc",
    "desc": "[B2] colloc: hỗ trợ nền kinh tế địa phương",
    "example": "Eating at local family restaurants helps support the local economy.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 539,
    "term": "knowledgeable tour guide",
    "clean_word": "knowledgeable tour guide",
    "type": "colloc",
    "desc": "[B2] colloc: hướng dẫn viên du lịch am hiểu sâu sắc",
    "example": "The knowledgeable tour guide explained the history of the ancient caves.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 540,
    "term": "take protective measures",
    "clean_word": "take protective measures",
    "type": "colloc",
    "desc": "[C1] colloc: áp dụng các biện pháp bảo vệ",
    "example": "The government must take protective measures to preserve coral reefs.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 541,
    "term": "indigenous flora and fauna",
    "clean_word": "indigenous flora and fauna",
    "type": "colloc",
    "desc": "[C2] colloc: hệ động thực vật bản địa",
    "example": "The island is highly famous for its extremely unique indigenous flora and fauna.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 542,
    "term": "minimize waste generation",
    "clean_word": "minimize waste generation",
    "type": "colloc",
    "desc": "[C1] colloc: giảm thiểu tối đa lượng rác thải ra",
    "example": "Responsible ecotours always teach travelers how to minimize waste generation.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 543,
    "term": "offset carbon footprint",
    "clean_word": "offset carbon footprint",
    "type": "colloc",
    "desc": "[C2] colloc: bù đắp dấu chân carbon",
    "example": "Many airlines offer options for travelers to offset their carbon footprint.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 544,
    "term": "scenic tourist attraction",
    "clean_word": "scenic tourist attraction",
    "type": "colloc",
    "desc": "[B2] colloc: điểm thu hút khách du lịch danh lam thắng cảnh",
    "example": "The waterfall has become a highly popular scenic tourist attraction.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 545,
    "term": "read travel brochure",
    "clean_word": "read travel brochure",
    "type": "colloc",
    "desc": "[B1] colloc: đọc tờ gấp thông tin du lịch",
    "example": "She read the travel brochure to find out about local homestay rules.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 546,
    "term": "off the beaten track",
    "clean_word": "off the beaten track",
    "type": "idiom",
    "desc": "[C1] idiom: ở nơi hẻo lánh, độc đáo, chưa ai khai phá",
    "example": "My brother prefers ecotourism because he loves exploring places off the beaten track.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 547,
    "term": "hit the road",
    "clean_word": "hit the road",
    "type": "idiom",
    "desc": "[B2] idiom: lên đường khởi hành đi",
    "example": "The sun is rising; it is time for our tour group to hit the road.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 548,
    "term": "travel light",
    "clean_word": "travel light",
    "type": "idiom",
    "desc": "[C1] idiom: mang hành lý gọn nhẹ",
    "example": "To hike along the steep mountain trails, you must travel light.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 549,
    "term": "live out of a suitcase",
    "clean_word": "live out of a suitcase",
    "type": "idiom",
    "desc": "[C1] idiom: di chuyển liên tục, sống bằng đồ trong vali",
    "example": "As an international tour guide, she spent the whole year living out of a suitcase.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  },
  {
    "id": 550,
    "term": "safe and sound",
    "clean_word": "safe and sound",
    "type": "idiom",
    "desc": "[B2] idiom: bình an vô sự, an toàn tuyệt đối",
    "example": "After three days of trekking in the jungle, the group returned safe and sound.",
    "category": "Wing 5: Protecting Environment & Ecotourism",
    "monster": "👑 Elder Dragonling",
    "unit": 10
  }
];

// ========================================================
// Retro 8-bit Web Audio Synthesizer
// Zero external audio file dependencies
// ========================================================
class RetroAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }
  playTone(freq, type, duration, delay=0) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    setTimeout(() => {
      if (!this.enabled) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch(e) {}
    }, delay * 1000);
  }
  flip() { this.playTone(480, 'sine', 0.08); }
  correct() {
    this.playTone(523.25, 'triangle', 0.1, 0);
    this.playTone(659.25, 'triangle', 0.1, 0.08);
    this.playTone(783.99, 'triangle', 0.2, 0.16);
  }
  wrong() {
    this.playTone(220, 'sawtooth', 0.15, 0);
    this.playTone(180, 'sawtooth', 0.25, 0.1);
  }
  coin() {
    this.playTone(987.77, 'square', 0.08, 0);
    this.playTone(1318.51, 'square', 0.25, 0.08);
  }
  fanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((f, i) => this.playTone(f, 'triangle', 0.2, i * 0.12));
  }
}

// ========================================================
// Main App Logic
// ========================================================
class MonsterestApp {
  constructor() {
    this.vocab = RAW_VOCAB;
    this.audio = new RetroAudio();
    this.currentWingIndex = 0;
    this.currentMode = null; // 'flashcard', 'quiz', 'quest'
    this.currentCardIdx = 0;
    this.quizQueue = [];
    this.quizIdx = 0;
    this.quizScore = 0;
    this.quizStreak = 0;
    this.filteredWords = [];

    this.wings = [
      {
            "id": 0,
            "title": "Wing 1: Family Life & Humans and Environment",
            "desc": "110 Academic terms, phrasal verbs, and collocations on household duties and eco-friendly lifestyles (Units 1 & 2).",
            "monster": "🍄 Sprout Sprite",
            "range": [
                  1,
                  110
            ]
      },
      {
            "id": 1,
            "title": "Wing 2: Music & Community Support",
            "desc": "110 Academic terms on musical artistry, volunteer missions, and community charity (Units 3 & 4).",
            "monster": "🛡️ Stone Golem",
            "range": [
                  111,
                  220
            ]
      },
      {
            "id": 2,
            "title": "Wing 3: Inventions & New Ways to Learn",
            "desc": "110 Academic terms on AI innovations, hardware devices, digital tools, and smart learning (Units 5 & 8).",
            "monster": "🔮 Shadow Familiar",
            "range": [
                  221,
                  330
            ]
      },
      {
            "id": 3,
            "title": "Wing 4: Gender Equality & International Organisations",
            "desc": "110 Academic terms on equal rights, workplace fairness, ASEAN, and global treaties (Units 6 & 7).",
            "monster": "🦊 Moonlit Kitsune",
            "range": [
                  331,
                  440
            ]
      },
      {
            "id": 4,
            "title": "Wing 5: Protecting Environment & Ecotourism",
            "desc": "110 Academic terms on biodiversity, wildlife sanctuaries, sustainable destinations, and nature (Units 9 & 10).",
            "monster": "👑 Elder Dragonling",
            "range": [
                  441,
                  550
            ]
      }
];

    this.loadStorage();
    this.updateStreak();
    this.initDOM();
    this.renderWings();
    this.updateStatsDisplay();
  }

  // =================== STORAGE & STREAK ===================

  loadStorage() {
    const saved = localStorage.getItem('monsterest_inn_save');
    if (saved) {
      try {
        this.state = JSON.parse(saved);
      } catch(e) {
        this.state = this.getDefaultState();
      }
    } else {
      this.state = this.getDefaultState();
    }
  }

  getDefaultState() {
    return {
      gold: 0,
      hearts: 0,
      masteredWordIds: [],
      streak: 1,
      lastPlayedDate: new Date().toDateString()
    };
  }

  /**
   * Daily streak logic:
   * - If lastPlayedDate is yesterday → increment streak
   * - If lastPlayedDate is today → keep streak (already played today)
   * - If lastPlayedDate is older than yesterday → reset streak to 1
   */
  updateStreak() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastPlayed = new Date(this.state.lastPlayedDate);
    lastPlayed.setHours(0, 0, 0, 0);

    const diffMs = today.getTime() - lastPlayed.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Played yesterday — continue streak
      this.state.streak = (this.state.streak || 1) + 1;
      this.state.lastPlayedDate = today.toDateString();
      this.saveStorage();
    } else if (diffDays > 1) {
      // Missed days — reset streak
      this.state.streak = 1;
      this.state.lastPlayedDate = today.toDateString();
      this.saveStorage();
    }
    // diffDays === 0: same day, do nothing
  }

  saveStorage() {
    localStorage.setItem('monsterest_inn_save', JSON.stringify(this.state));
    this.updateStatsDisplay();
  }

  updateStatsDisplay() {
    document.getElementById('stat-gold').textContent = this.state.gold;
    document.getElementById('stat-hearts').textContent = this.state.hearts;
    document.getElementById('stat-mastered').textContent = `${this.state.masteredWordIds.length}/${this.vocab.length}`;
    document.getElementById('stat-streak').textContent = this.state.streak;
  }

  // =================== DOM INITIALIZATION ===================

  initDOM() {
    // Keyboard navigation for flashcards
    window.addEventListener('keydown', (e) => {
      if (document.getElementById('view-flashcard').classList.contains('active')) {
        if (e.code === 'Space') {
          e.preventDefault();
          this.flipCard();
        } else if (e.code === 'ArrowRight') {
          this.nextCard();
        } else if (e.code === 'ArrowLeft') {
          this.prevCard();
        }
      }
    });

    // Quick Search — filter wings and vocabulary
    const searchInput = document.getElementById('quickSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }

  // =================== QUICK SEARCH ===================

  handleSearch(query) {
    const q = query.trim().toLowerCase();
    const container = document.getElementById('wings-container');
    if (!container) return;

    if (!q) {
      // Empty search: show all wings
      this.renderWings();
      return;
    }

    // Filter wings: show a wing if its title/desc matches, or if any word in it matches
    container.innerHTML = '';
    this.wings.forEach((wing, idx) => {
      const wingWords = this.vocab.filter(w => w.id >= wing.range[0] && w.id <= wing.range[1]);
      const wingTitleMatch = wing.title.toLowerCase().includes(q) || wing.desc.toLowerCase().includes(q);
      const matchingWords = wingWords.filter(w =>
        w.clean_word.toLowerCase().includes(q) ||
        w.term.toLowerCase().includes(q) ||
        w.desc.toLowerCase().includes(q)
      );

      if (!wingTitleMatch && matchingWords.length === 0) return;

      const masteredInWing = wingWords.filter(w => this.state.masteredWordIds.includes(w.id)).length;
      const pct = Math.round((masteredInWing / wingWords.length) * 100);

      const matchInfo = matchingWords.length > 0 && !wingTitleMatch
        ? `<div style="font-size: 0.78rem; color: var(--accent-green); margin-top: 6px; font-weight: 700;">🔍 ${matchingWords.length} matching word${matchingWords.length > 1 ? 's' : ''}: ${matchingWords.slice(0, 3).map(w => w.clean_word).join(', ')}${matchingWords.length > 3 ? '…' : ''}</div>`
        : '';

      const card = document.createElement('div');
      card.className = 'wing-card';
      card.onclick = () => this.selectWing(idx);
      card.innerHTML = `
        <div class="wing-card-top">
          <div class="wing-avatar">${wing.monster.split(' ')[0]}</div>
          <span class="wing-monster-tag">${wing.monster}</span>
        </div>
        <div class="wing-info">
          <h3>${wing.title}</h3>
          <p>${wing.desc}</p>
          ${matchInfo}
        </div>
        <div>
          <div class="wing-progress-bar">
            <div class="wing-progress-fill" style="width: ${pct}%;"></div>
          </div>
          <div class="wing-meta" style="margin-top: 6px;">
            <span>Progress: ${pct}%</span>
            <span>${masteredInWing}/${wingWords.length} Words</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Show "no results" if nothing matched
    if (container.children.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted); font-size: 1rem;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <p>No wings or words matching "<strong style="color: var(--accent-gold);">${q}</strong>"</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Try searching by word, definition, or wing name.</p>
      </div>`;
    }
  }

  // =================== VIEW SWITCHING ===================

  switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showHome() {
    // Clear search when returning home
    const searchInput = document.getElementById('quickSearchInput');
    if (searchInput) searchInput.value = '';
    this.renderWings();
    this.switchView('view-home');
  }

  showModeSelect() {
    const wing = this.wings[this.currentWingIndex];
    document.getElementById('current-wing-icon').textContent = wing.monster.split(' ')[0];
    document.getElementById('current-wing-title').textContent = wing.title;
    this.switchView('view-mode-select');
  }

  selectWing(idx) {
    this.currentWingIndex = idx;
    const wing = this.wings[idx];
    this.filteredWords = this.vocab.filter(w => w.id >= wing.range[0] && w.id <= wing.range[1]);
    this.showModeSelect();
  }

  renderWings() {
    const container = document.getElementById('wings-container');
    container.innerHTML = '';
    this.wings.forEach((wing, idx) => {
      const wingWords = this.vocab.filter(w => w.id >= wing.range[0] && w.id <= wing.range[1]);
      const masteredInWing = wingWords.filter(w => this.state.masteredWordIds.includes(w.id)).length;
      const pct = Math.round((masteredInWing / wingWords.length) * 100);

      const card = document.createElement('div');
      card.className = 'wing-card';
      card.onclick = () => this.selectWing(idx);
      card.innerHTML = `
        <div class="wing-card-top">
          <div class="wing-avatar">${wing.monster.split(' ')[0]}</div>
          <span class="wing-monster-tag">${wing.monster}</span>
        </div>
        <div class="wing-info">
          <h3>${wing.title}</h3>
          <p>${wing.desc}</p>
        </div>
        <div>
          <div class="wing-progress-bar">
            <div class="wing-progress-fill" style="width: ${pct}%;"></div>
          </div>
          <div class="wing-meta" style="margin-top: 6px;">
            <span>Progress: ${pct}%</span>
            <span>${masteredInWing}/${wingWords.length} Words</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  /* =================== 3D FLASHCARD =================== */
  startFlashcards() {
    this.currentMode = 'flashcard';
    this.currentCardIdx = 0;
    this.renderCard();
    this.switchView('view-flashcard');
  }

  renderCard() {
    const word = this.filteredWords[this.currentCardIdx];
    if (!word) return;

    // Reset flip
    document.getElementById('flashcard-card').classList.remove('is-flipped');

    document.getElementById('fc-index').textContent = this.currentCardIdx + 1;
    document.getElementById('fc-total').textContent = this.filteredWords.length;
    document.getElementById('fc-type').textContent = word.type || 'term';
    document.getElementById('fc-word').textContent = word.clean_word;
    document.getElementById('fc-ipa').textContent = word.ipa || word.term;
    document.getElementById('fc-monster').textContent = word.monster || 'Monster Companion';
    
    document.getElementById('fc-meaning-vi').textContent = word.desc.split('=')[0];
    document.getElementById('fc-def-en').textContent = word.desc;
    document.getElementById('fc-example').textContent = word.example || `Example of "${word.clean_word}" in tavern context.`;
    document.getElementById('fc-category-name').textContent = word.category;

    const btnMaster = document.getElementById('btn-master-card');
    const isMastered = this.state.masteredWordIds.includes(word.id);
    if (isMastered) {
      btnMaster.className = 'pixel-btn success';
      btnMaster.textContent = '⭐ Mastered';
    } else {
      btnMaster.className = 'pixel-btn secondary';
      btnMaster.textContent = '☆ Master Word (+15 🪙)';
    }
  }

  flipCard() {
    this.audio.flip();
    document.getElementById('flashcard-card').classList.toggle('is-flipped');
  }

  nextCard() {
    if (this.currentCardIdx < this.filteredWords.length - 1) {
      this.currentCardIdx++;
      this.renderCard();
    }
  }

  prevCard() {
    if (this.currentCardIdx > 0) {
      this.currentCardIdx--;
      this.renderCard();
    }
  }

  toggleMasterCurrent() {
    const word = this.filteredWords[this.currentCardIdx];
    const idx = this.state.masteredWordIds.indexOf(word.id);
    if (idx > -1) {
      this.state.masteredWordIds.splice(idx, 1);
    } else {
      this.state.masteredWordIds.push(word.id);
      this.state.gold += 15;
      this.state.hearts += 5;
      this.audio.coin();
    }
    this.saveStorage();
    this.renderCard();
  }

  speakCurrentWord() {
    const word = this.filteredWords[this.currentCardIdx];
    if (!word) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word.clean_word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }

  /* =================== QUIZ & QUEST TRIAL =================== */
  startQuizMode() {
    this.currentMode = 'quiz';
    this.setupQuestions(10, 'meaning');
    this.switchView('view-quiz');
  }

  startQuestMode() {
    this.currentMode = 'quest';
    this.setupQuestions(10, 'sentence');
    this.switchView('view-quiz');
  }

  setupQuestions(count, type) {
    document.getElementById('quiz-mode-icon').textContent = type === 'meaning' ? '⚔️' : '🍲';
    document.getElementById('quiz-mode-title').textContent = type === 'meaning' ? 'Monster Trial Arena' : 'Tavern Recipe Quest';

    // Pick items
    const pool = [...this.filteredWords].sort(() => 0.5 - Math.random());
    const chosen = pool.slice(0, Math.min(count, pool.length));

    this.quizQueue = chosen.map(item => {
      // Create 3 distractor words from all vocab
      const distractors = this.vocab
        .filter(w => w.id !== item.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      
      let options = [];
      if (type === 'meaning') {
        options = [
          { text: item.desc.split('.')[0].replace('adj', '').replace('v', '').trim(), correct: true },
          ...distractors.map(d => ({ text: d.desc.split('.')[0].replace('adj', '').replace('v', '').trim(), correct: false }))
        ];
      } else {
        options = [
          { text: item.clean_word, correct: true },
          ...distractors.map(d => ({ text: d.clean_word, correct: false }))
        ];
      }
      options.sort(() => 0.5 - Math.random());

      return {
        word: item,
        type: type,
        options: options
      };
    });

    this.quizIdx = 0;
    this.quizScore = 0;
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const q = this.quizQueue[this.quizIdx];
    if (!q) return;

    document.getElementById('btn-quiz-next').style.display = 'none';
    document.getElementById('quiz-explanation').style.display = 'none';

    const totalQ = this.quizQueue.length;
    document.getElementById('quiz-progress-text').textContent = `Question ${this.quizIdx + 1}/${totalQ}`;

    const wing = this.wings[this.currentWingIndex];
    document.getElementById('quiz-monster-sprite').textContent = wing.monster.split(' ')[0];
    document.getElementById('quiz-monster-name').textContent = wing.monster;

    const hpPct = Math.max(10, Math.round(((totalQ - this.quizIdx) / totalQ) * 100));
    document.getElementById('quiz-hp-bar').style.width = `${hpPct}%`;

    if (q.type === 'meaning') {
      document.getElementById('quiz-prompt-label').textContent = "Select the correct definition for the target word:";
      document.getElementById('quiz-question-main').innerHTML = `${q.word.clean_word} <span style="font-size:1.1rem; color:var(--text-muted); font-family:var(--font-pixel);">${q.word.ipa || ''}</span>`;
    } else {
      document.getElementById('quiz-prompt-label').textContent = "Select the correct vocabulary word to complete the sentence:";
      let sentence = q.word.example || "She tried her best to -- the ancient monster.";
      let maskedSentence = sentence.replace(new RegExp(q.word.clean_word, 'gi'), '_____');
      if (!maskedSentence.includes('_____')) maskedSentence = maskedSentence.replace('--', '_____');
      document.getElementById('quiz-question-main').className = "quiz-sentence-box";
      document.getElementById('quiz-question-main').textContent = maskedSentence;
    }

    // Options
    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';
    q.options.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span style="color:var(--accent-gold); font-family:var(--font-pixel); font-size:1.3rem;">${['A','B','C','D'][oIdx]}.</span> <span>${opt.text}</span>`;
      btn.onclick = () => this.handleOptionSelect(btn, opt.correct, q);
      container.appendChild(btn);
    });
  }

  handleOptionSelect(btn, isCorrect, q) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btn.classList.add('correct');
      this.audio.correct();
      this.quizScore++;
      this.state.gold += 10;
      this.state.hearts += 5;
      if (!this.state.masteredWordIds.includes(q.word.id)) {
        this.state.masteredWordIds.push(q.word.id);
      }
    } else {
      btn.classList.add('wrong');
      this.audio.wrong();
      allBtns.forEach((b, idx) => {
        if (q.options[idx].correct) b.classList.add('correct');
      });
    }

    this.saveStorage();

    // Show Explanation
    const expPanel = document.getElementById('quiz-explanation');
    const expText = document.getElementById('quiz-explanation-text');
    expText.innerHTML = `<strong>${q.word.clean_word}</strong>: ${q.word.desc}<br><em>Example: ${q.word.example || 'N/A'}</em>`;
    expPanel.style.display = 'block';

    document.getElementById('btn-quiz-next').style.display = 'inline-flex';
  }

  nextQuizQuestion() {
    this.quizIdx++;
    if (this.quizIdx < this.quizQueue.length) {
      this.renderQuizQuestion();
    } else {
      this.showSummary();
    }
  }

  showSummary() {
    this.audio.fanfare();
    this.fireConfetti();

    document.getElementById('sum-correct').textContent = `${this.quizScore}/${this.quizQueue.length}`;
    document.getElementById('sum-gold').textContent = `+${this.quizScore * 10}`;
    document.getElementById('sum-hearts').textContent = `+${this.quizScore * 5}`;

    this.switchView('view-summary');
  }

  restartCurrentMode() {
    if (this.currentMode === 'quiz') this.startQuizMode();
    else if (this.currentMode === 'quest') this.startQuestMode();
    else this.startFlashcards();
  }

  fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#f5b041', '#e67e22', '#2ecc71', '#9b59b6', '#3498db', '#e74c3c'];
    for (let i = 0; i < 70; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 4 + 2,
        angle: Math.random() * 360
      });
    }

    let frame = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.speed;
        p.angle += 3;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      frame++;
      if (frame < 120) requestAnimationFrame(render);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    render();
  }

  toggleSound() {
    if (this.audio) {
      this.audio.enabled = !this.audio.enabled;
      const icon = document.getElementById('sound-icon');
      if (icon) icon.textContent = this.audio.enabled ? '🔊' : '🔇';
    }
  }
}

// Initialize App when loaded
window.addEventListener('DOMContentLoaded', () => {
  window.app = new MonsterestApp();
});
