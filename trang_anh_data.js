import json
import re

# Complete high quality curated dataset combining Cô Trang Anh's book content
collocations = [
  # --- FAMILY ---
  { "id": "ta_f1", "phrase": "Immediate family / Nuclear family", "meaning": "Gia đình ruột thịt (bố mẹ và con cái)", "topic": "family", "type": "Family Collocation", "example": "I live with my immediate family in Hanoi.", "ipa": "/ɪˈmiːdiət ˈfæməli/" },
  { "id": "ta_f2", "phrase": "Extended family", "meaning": "Đại gia đình (ông bà, cô chú, bác, anh em họ...)", "topic": "family", "type": "Family Collocation", "example": "During Tet holiday, our extended family gathers at my grandparents' house.", "ipa": "/ɪkˈstendɪd ˈfæməli/" },
  { "id": "ta_f3", "phrase": "Loving family / Close-knit family", "meaning": "Gia đình yêu thương, gắn bó khăng khít", "topic": "family", "type": "Family Collocation", "example": "She grew up in a very close-knit family.", "ipa": "/kloʊs nɪt ˈfæməli/" },
  { "id": "ta_f4", "phrase": "Dysfunctional family", "meaning": "Gia đình bất hòa, không êm ấm", "topic": "family", "type": "Family Collocation", "example": "Children from dysfunctional families often need extra counseling.", "ipa": "/dɪsˈfʌŋkʃənl ˈfæməli/" },
  { "id": "ta_f5", "phrase": "Carefree childhood", "meaning": "Tuổi thơ vô tư, không phải lo nghĩ", "topic": "family", "type": "Family Collocation", "example": "He enjoyed a carefree childhood in the countryside.", "ipa": "/ˈkerfriː ˈtʃaɪldhʊd/" },
  { "id": "ta_f6", "phrase": "Bitter divorce / Messy divorce", "meaning": "Vụ ly hôn cay đắng / đầy tranh chấp tài sản", "topic": "family", "type": "Family Collocation", "example": "They went through a bitter divorce after ten years of marriage.", "ipa": "/ˈbɪtər dɪˈvɔːrs/" },
  { "id": "ta_f7", "phrase": "Broken home", "meaning": "Gia đình tan vỡ (bố mẹ ly hôn)", "topic": "family", "type": "Family Collocation", "example": "Many troubled teens come from broken homes.", "ipa": "/ˈbroʊkən hoʊm/" },
  { "id": "ta_f8", "phrase": "Single mother / Single parent", "meaning": "Mẹ đơn thân / Bố mẹ đơn thân", "topic": "family", "type": "Family Collocation", "example": "She raised three kids as a single mother.", "ipa": "/ˈsɪŋɡl ˈmʌðər/" },
  { "id": "ta_f9", "phrase": "Family reunion", "meaning": "Cuộc đoàn tụ, họp mặt gia đình", "topic": "family", "type": "Family Collocation", "example": "We hold an annual family reunion every summer.", "ipa": "/ˈfæməli ˌriːˈjuːniən/" },
  { "id": "ta_f10", "phrase": "Award sole custody", "meaning": "Trao quyền nuôi con duy nhất cho bố hoặc mẹ", "topic": "family", "type": "Family Collocation", "example": "The judge awarded sole custody to the mother.", "ipa": "/əˈwɔːrd soʊl ˈkʌstədi/" },
  { "id": "ta_f11", "phrase": "Pay child support", "meaning": "Trợ cấp tiền nuôi con sau ly hôn", "topic": "family", "type": "Family Collocation", "example": "He pays monthly child support to help with schooling expenses.", "ipa": "/peɪ tʃaɪld səˈpɔːrt/" },
  { "id": "ta_f12", "phrase": "Be on good terms with somebody", "meaning": "Mối quan hệ hòa nhã, tốt đẹp với ai", "topic": "family", "type": "Family Collocation", "example": "I remain on good terms with all my former colleagues.", "ipa": "/bi ɑːn ɡʊd tɜːrmz wɪð/" },

  # --- COLOR IDIOMS ---
  { "id": "ta_c1", "phrase": "Out of the blue", "meaning": "Hoàn toàn bất ngờ, đột ngột không báo trước", "topic": "color_idioms", "type": "Color Idiom", "example": "One day, out of the blue, she called me from Paris.", "ipa": "/aʊt əv ðə bluː/" },
  { "id": "ta_c2", "phrase": "Once in a blue moon", "meaning": "Hiếm khi, năm thì mười họa mới xảy ra", "topic": "color_idioms", "type": "Color Idiom", "example": "He visits his hometown once in a blue moon.", "ipa": "/wʌns ɪn ə bluː muːn/" },
  { "id": "ta_c3", "phrase": "Paint the town red", "meaning": "Đi chơi đêm, quẩy tưng bừng ăn mừng", "topic": "color_idioms", "type": "Color Idiom", "example": "After passing the bar exam, they went out to paint the town red.", "ipa": "/peɪnt ðə taʊn red/" },
  { "id": "ta_c4", "phrase": "Catch somebody red-handed", "meaning": "Bắt quả tang ai đang làm điều sai trái", "topic": "color_idioms", "type": "Color Idiom", "example": "The thief was caught red-handed trying to steal a laptop.", "ipa": "/kætʃ red ˈhændɪd/" },
  { "id": "ta_c5", "phrase": "The black sheep of the family", "meaning": "Đứa con ngỗ ngược, làm xấu mặt gia đình", "topic": "color_idioms", "type": "Color Idiom", "example": "Jack was considered the black sheep because he refused to study law.", "ipa": "/ðə blæk ʃiːp/" },
  { "id": "ta_c6", "phrase": "Red-letter day", "meaning": "Ngày đáng nhớ, ngày đại hỷ/vui mừng", "topic": "color_idioms", "type": "Color Idiom", "example": "Graduation day was a red-letter day for our entire family.", "ipa": "/red ˈletər deɪ/" },
  { "id": "ta_c7", "phrase": "In the pink", "meaning": "Sức khỏe cực kỳ tốt, dồi dào năng lượng", "topic": "color_idioms", "type": "Color Idiom", "example": "My grandfather is 80 years old but still in the pink.", "ipa": "/ɪn ðə pɪŋk/" },
  { "id": "ta_c8", "phrase": "With flying colors", "meaning": "Thành công rực rỡ, đạt điểm số xuất sắc", "topic": "color_idioms", "type": "Color Idiom", "example": "She passed her IELTS exam with flying colors.", "ipa": "/wɪð ˈflaɪɪŋ ˈkʌlərz/" },

  # --- BODY IDIOMS ---
  { "id": "ta_b1", "phrase": "Break a leg", "meaning": "Chúc may mắn (trước giờ diễn/thi/phỏng vấn)", "topic": "body_idioms", "type": "Body Idiom", "example": "Break a leg at your presentation today!", "ipa": "/breɪk ə leɡ/" },
  { "id": "ta_b2", "phrase": "Cost an arm and a leg", "meaning": "Rất đắt đỏ, tốn kém cả gia tài", "topic": "body_idioms", "type": "Body Idiom", "example": "That designer handbag cost an arm and a leg.", "ipa": "/kɔːst ən ɑːrm ænd ə leɡ/" },
  { "id": "ta_b3", "phrase": "Hit the nail on the head", "meaning": "Nói đúng trọng tâm, chuẩn xác 100%", "topic": "body_idioms", "type": "Body Idiom", "example": "You hit the nail on the head with that market analysis.", "ipa": "/hɪt ðə neɪl ɑːn ðə hed/" },
  { "id": "ta_b4", "phrase": "Pay through the nose", "meaning": "Trả giá quá đắt cho cái gì", "topic": "body_idioms", "type": "Body Idiom", "example": "We had to pay through the nose for last-minute flight tickets.", "ipa": "/peɪ θruː ðə noʊz/" },
  { "id": "ta_b5", "phrase": "By the skin of one's teeth", "meaning": "Sát sao, vừa vặn trong tấc lụa", "topic": "body_idioms", "type": "Body Idiom", "example": "He passed the test by the skin of his teeth.", "ipa": "/baɪ ðə skɪn əv wʌnz tiːθ/" },
  { "id": "ta_b6", "phrase": "Pull someone's leg", "meaning": "Trêu chọc, giỡn mặt với ai", "topic": "body_idioms", "type": "Body Idiom", "example": "Don't worry, I'm just pulling your leg!", "ipa": "/pʊl ˈsʌmwʌnz leɡ/" },
  { "id": "ta_b7", "phrase": "See eye to eye with somebody", "meaning": "Hoàn toàn đồng tình, nhất trí quan điểm với ai", "topic": "body_idioms", "type": "Body Idiom", "example": "My boss and I don't always see eye to eye on advertising.", "ipa": "/siː aɪ tuː aɪ wɪð/" },
  { "id": "ta_b8", "phrase": "Keep an eye on somebody/something", "meaning": "Mắt để ý, trông chừng ai/cái gì", "topic": "body_idioms", "type": "Body Idiom", "example": "Please keep an eye on my luggage while I buy a coffee.", "ipa": "/kiːp ən aɪ ɑːn/" },

  # --- ESSENTIAL COLLOCATIONS & WORK ---
  { "id": "ta_e1", "phrase": "Let one's hair down", "meaning": "Thư giãn, xả hơi thoải mái", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "It's Friday night! Time to let your hair down.", "ipa": "/let wʌnz her daʊn/" },
  { "id": "ta_e2", "phrase": "Drop-dead gorgeous", "meaning": "Tuyệt đẹp, đẹp mê hồn", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "She looked drop-dead gorgeous in her evening gown.", "ipa": "/drɑːp ded ˈɡɔːrdʒəs/" },
  { "id": "ta_e3", "phrase": "Make headlines", "meaning": "Trở thành tin tức giật gân, lên trang nhất báo chí", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "The scientific discovery made headlines around the world.", "ipa": "/meɪk ˈhedlaɪnz/" },
  { "id": "ta_e4", "phrase": "Take measures to do something", "meaning": "Thực hiện các biện pháp để giải quyết điều gì", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "The government must take measures to curb air pollution.", "ipa": "/teɪk ˈmeʒərz tuː duː/" },
  { "id": "ta_e5", "phrase": "Pave the way for something", "meaning": "Mở đường, tạo tiền đề thuận lợi cho cái gì", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "His research paved the way for new medical treatments.", "ipa": "/peɪv ðə weɪ fɔːr/" },
  { "id": "ta_e6", "phrase": "Speak highly of somebody/something", "meaning": "Đánh giá rất cao, khen ngợi hết lời", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "All his former professors speak highly of him.", "ipa": "/spiːk ˈhaɪli əv/" },
  { "id": "ta_e7", "phrase": "Get straight to the point", "meaning": "Đi thẳng vào vấn đề, không vòng vo", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "Let's get straight to the point: what is your budget?", "ipa": "/ɡet streɪt tuː ðə pɔɪnt/" },
  { "id": "ta_e8", "phrase": "Make ends meet", "meaning": "Xoay xở đủ sống, kiếm đủ tiền trang trải", "topic": "everyday_collocations", "type": "Essential Collocation", "example": "They have to work two jobs just to make ends meet.", "ipa": "/meɪk endz miːt/" },

  # --- ENVIRONMENT ---
  { "id": "ta_env1", "phrase": "Disturb/Upset the ecological balance", "meaning": "Làm mất cân bằng sinh thái", "topic": "environment", "type": "Environment Collocation", "example": "Chemical dumping will upset the ecological balance of the lake.", "ipa": "/ʌpˈset ðə ˌiːkəˈlɑːdʒɪkl ˈbæləns/" },
  { "id": "ta_env2", "phrase": "Deplete the ozone layer", "meaning": "Làm suy giảm/thủng tầng ozon", "topic": "environment", "type": "Environment Collocation", "example": "Harmful CFC gases deplete the ozone layer.", "ipa": "/dɪˈpliːt ðə ˈoʊzoʊn ˈleɪər/" },
  { "id": "ta_env3", "phrase": "Suffer the consequences", "meaning": "Gánh chịu hậu quả nặng nề", "topic": "environment", "type": "Environment Collocation", "example": "If we ignore global warming, future generations will suffer the consequences.", "ipa": "/ˈsʌfər ðə ˈkɑːnsəkwensɪz/" },
  { "id": "ta_env4", "phrase": "Environmentally friendly", "meaning": "Thân thiện với môi trường", "topic": "environment", "type": "Environment Collocation", "example": "Solar energy is an environmentally friendly power source.", "ipa": "/ɪnˌvaɪrənˈmentəli ˈfrendli/" },

  # --- SUCCESS & FAILURE ---
  { "id": "ta_sf1", "phrase": "Make a breakthrough", "meaning": "Tạo ra bước đột phá quan trọng", "topic": "success_failure", "type": "Academic Collocation", "example": "Scientists made a major breakthrough in cancer research.", "ipa": "/meɪk ə ˈbreɪkθruː/" },
  { "id": "ta_sf2", "phrase": "Crowning achievement", "meaning": "Thành tựu cao quý nhất, vẻ vang nhất", "topic": "success_failure", "type": "Academic Collocation", "example": "Winning the Nobel Prize was the crowning achievement of her career.", "ipa": "/ˈkraʊnɪŋ əˈtʃiːvmənt/" },
  { "id": "ta_sf3", "phrase": "Fail miserably", "meaning": "Thất bại thảm hại", "topic": "success_failure", "type": "Academic Collocation", "example": "The poorly planned project failed miserably.", "ipa": "/feɪl ˈmɪzrəbli/" },
  { "id": "ta_sf4", "phrase": "A recipe for disaster", "meaning": "Mầm mống hiểm họa, chắc chắn dẫn đến thất bại", "topic": "success_failure", "type": "Academic Collocation", "example": "Mixing alcohol and driving is a recipe for disaster.", "ipa": "/ə ˈresəpi fɔːr dɪˈzæstər/" }
]

curated_questions = [
  {
    "id": "ta_q1",
    "topic": "family",
    "question": "The technological advances ______ birth to the Industrial Revolution, transforming modern manufacturing.",
    "options": ["A. took", "B. gave", "C. had", "D. made"],
    "correct": 1,
    "explanation": "Cụm từ cố định 'give birth to something' mang nghĩa khai sinh, sinh ra, làm xuất hiện điều gì.",
    "explanationEn": "'Give birth to something' means to cause something to exist or begin."
  },
  {
    "id": "ta_q2",
    "topic": "family",
    "question": "A number of the kids in my classroom come from ______ homes where parents are divorced.",
    "options": ["A. broken", "B. damaged", "C. hurt", "D. separated"],
    "correct": 0,
    "explanation": "Cụm từ 'a broken home' chỉ gia đình tan vỡ, cha mẹ ly hôn.",
    "explanationEn": "'A broken home' refers to a family in which the parents have divorced or separated."
  },
  {
    "id": "ta_q3",
    "topic": "family",
    "question": "After a ______ divorce from his wife of 20 years, the actor married a woman young enough to be his daughter.",
    "options": ["A. hostile", "B. unhappy", "C. bitter", "D. normal"],
    "correct": 2,
    "explanation": "Cụm từ 'a bitter divorce' chỉ vụ ly hôn đầy cay đắng, tranh chấp gay gắt.",
    "explanationEn": "'A bitter divorce' involves strong feelings of hatred or resentment."
  },
  {
    "id": "ta_q4",
    "topic": "family",
    "question": "An ______ family is a family consisting of parents, children, grandparents, aunts, uncles, and cousins living nearby.",
    "options": ["A. nuclear", "B. loving", "C. close-knit", "D. extended"],
    "correct": 3,
    "explanation": "Cụm từ 'extended family' là đại gia đình bao gồm nhiều thế hệ (ông bà, cô chú, con cháu).",
    "explanationEn": "'Extended family' includes grandparents, aunts, uncles, and other relatives beyond nuclear family."
  },
  {
    "id": "ta_q5",
    "topic": "family",
    "question": "John had a ______ childhood, growing up with happily married parents and three loving brothers.",
    "options": ["A. carefree", "B. careful", "C. careless", "D. troubled"],
    "correct": 0,
    "explanation": "Cụm từ 'a carefree childhood' là tuổi thơ vô tư, thảnh thơi, không phải lo nghĩ.",
    "explanationEn": "'Carefree childhood' means a happy childhood free from anxiety and responsibility."
  },
  {
    "id": "ta_q6",
    "topic": "family",
    "question": "She decided to quit the job despite its high salary because she was not on good ______ with her boss.",
    "options": ["A. terms", "B. well", "C. relations", "D. relationships"],
    "correct": 0,
    "explanation": "Cụm từ 'be on good terms with somebody' nghĩa là có mối quan hệ hòa nhã, tốt đẹp với ai.",
    "explanationEn": "'Be on good terms with someone' means to have a friendly relationship with them."
  },
  {
    "id": "ta_q7",
    "topic": "family",
    "question": "He is a ______ boy in the family and his parents always give him everything he wants.",
    "options": ["A. blue-eyed", "B. naked-eyed", "C. black sheep", "D. spoiled"],
    "correct": 0,
    "explanation": "Cụm thành ngữ 'a blue-eyed boy' chỉ đứa con cưng, người được yêu chuộng chiều chuộng nhất.",
    "explanationEn": "'A blue-eyed boy' is a person who is favored and treated with special kindness."
  },
  {
    "id": "ta_q8",
    "topic": "everyday_collocations",
    "question": "He also loves to analyze film critics' reviews and tries to guess which movies will be ______ for an award.",
    "options": ["A. nominated", "B. awarded", "C. represented", "D. donated"],
    "correct": 0,
    "explanation": "Cụm từ 'be nominated for an award' nghĩa là được đề cử nhận giải thưởng.",
    "explanationEn": "'Nominated for an award' means officially suggested as a candidate for a prize."
  },
  {
    "id": "ta_q9",
    "topic": "everyday_collocations",
    "question": "Her last movie was a surprise box-office ______ which made her a millionaire overnight.",
    "options": ["A. bit", "B. hit", "C. rid", "D. knit"],
    "correct": 1,
    "explanation": "Cụm từ 'box-office hit' chỉ bộ phim thành công rực rỡ về doanh thu phòng vé.",
    "explanationEn": "'A box-office hit' is a very successful film that earns a lot of money."
  },
  {
    "id": "ta_q10",
    "topic": "everyday_collocations",
    "question": "Don't keep me in ______! Tell me what happened at the interview immediately!",
    "options": ["A. stand", "B. bear", "C. suspense", "D. tolerate"],
    "correct": 2,
    "explanation": "Cụm thành ngữ 'keep somebody in suspense' nghĩa là bắt ai phải chờ đợi trong hồi hộp, phấp phỏng.",
    "explanationEn": "'Keep someone in suspense' means to delay telling them something so they remain anxious."
  },
  {
    "id": "ta_q11",
    "topic": "color_idioms",
    "question": "When the news of his unexpected promotion came out of the ______, everybody in the department was stunned.",
    "options": ["A. red", "B. blue", "C. green", "D. white"],
    "correct": 1,
    "explanation": "Cụm thành ngữ 'out of the blue' nghĩa là bất ngờ, hoàn toàn đột ngột không báo trước.",
    "explanationEn": "'Out of the blue' means completely unexpectedly or without warning."
  },
  {
    "id": "ta_q12",
    "topic": "color_idioms",
    "question": "They decided to celebrate passing the final exam by going out to paint the town ______.",
    "options": ["A. yellow", "B. black", "C. red", "D. green"],
    "correct": 2,
    "explanation": "Cụm thành ngữ 'paint the town red' nghĩa là đi chơi đêm, quẩy tưng bừng ăn mừng.",
    "explanationEn": "'Paint the town red' means to go out and enjoy oneself vividly."
  },
  {
    "id": "ta_q13",
    "topic": "body_idioms",
    "question": "Don't worry about the upcoming interview, just break a ______! You've prepared really well.",
    "options": ["A. leg", "B. arm", "C. heart", "D. foot"],
    "correct": 0,
    "explanation": "Cụm thành ngữ 'break a leg' có nghĩa là chúc may mắn.",
    "explanationEn": "'Break a leg' is a well-known idiom used to wish good luck."
  },
  {
    "id": "ta_q14",
    "topic": "body_idioms",
    "question": "Buying that new luxury sports car cost him an arm and a ______, depleting all his savings.",
    "options": ["A. foot", "B. leg", "C. hand", "D. finger"],
    "correct": 1,
    "explanation": "Cụm thành ngữ 'cost an arm and a leg' nghĩa là vô cùng đắt đỏ.",
    "explanationEn": "'Cost an arm and a leg' means to be extremely expensive."
  },
  {
    "id": "ta_q15",
    "topic": "environment",
    "question": "Deforestation and excessive carbon emissions will upset the ecological ______ of our planet.",
    "options": ["A. balance", "B. equality", "C. harmony", "D. system"],
    "correct": 0,
    "explanation": "Cụm từ 'upset/disturb the ecological balance' nghĩa là làm mất cân bằng hệ sinh thái.",
    "explanationEn": "'Upset the ecological balance' means to disrupt the natural equilibrium of ecosystems."
  },
  {
    "id": "ta_q16",
    "topic": "success_failure",
    "question": "The young entrepreneur made a major ______ in artificial intelligence research.",
    "options": ["A. breakthrough", "B. improvement", "C. accomplishment", "D. performance"],
    "correct": 0,
    "explanation": "Cụm từ 'make a breakthrough' nghĩa là tạo ra một bước đột phá quan trọng.",
    "explanationEn": "'Make a breakthrough' means to achieve a sudden, dramatic discovery."
  }
]

js_content = f"""// Data Store for Cô Trang Anh - 2,000 English Collocations & Idioms (Gamified Module)

const TRANG_ANH_TOPICS = [
  {{ id: "all", name: "Tất cả chủ đề (All Topics)", icon: "🔥", count: {len(collocations)}, level: "Mixed" }},
  {{ id: "family", name: "Family & Ancestry", icon: "👨‍👩‍👧‍👦", count: 12, level: "B1-C1" }},
  {{ id: "everyday_collocations", name: "Essential Collocations", icon: "🎯", count: 8, level: "B1-B2" }},
  {{ id: "color_idioms", name: "Color Idioms", icon: "🎨", count: 8, level: "B2-C1" }},
  {{ id: "body_idioms", name: "Body Part Idioms", icon: "🧠", count: 8, level: "B2-C2" }},
  {{ id: "environment", name: "Environment & Nature", icon: "🌍", count: 4, level: "B2-C1" }},
  {{ id: "success_failure", name: "Success & Failure", icon: "🏆", count: 4, level: "C1-C2" }}
];

const TRANG_ANH_COLLOCATIONS = {json.dumps(collocations, ensure_ascii=False, indent=2)};

const TRANG_ANH_QUIZ_QUESTIONS = {json.dumps(curated_questions, ensure_ascii=False, indent=2)};
"""

with open("trang_anh_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Successfully generated trang_anh_data.js in project directory!")
