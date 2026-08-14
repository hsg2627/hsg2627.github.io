# -*- coding: utf-8 -*-
import json
import re

# Read deploy_full_destination_vocab.py
with open('c:/hsg2627.github.io/scratch/deploy_full_destination_vocab.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Extract the DATA array from deploy_full_destination_vocab.py
p_data_start = code.find('DATA = [')
p_data_end = code.find('\n]\n\nprint(f"Loaded')

if p_data_start == -1 or p_data_end == -1:
    print(f"Error finding DATA markers in deploy script. p_data_start={p_data_start}, p_data_end={p_data_end}")
    exit(1)

data_text = code[p_data_start + 7: p_data_end + 2]
# evaluate or parse data_text safely
local_dict = {}
exec("DATA = " + data_text, {}, local_dict)
existing_data = local_dict["DATA"]
print(f"Loaded {len(existing_data)} existing items.")

# Add Unit 26 Phrasal Verbs & take to
unit26_items = [
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Gamer Tama",
        "avatar": "🎮",
        "verb": "centre around",
        "sentence": "The festival activities primarily <span class='blank'>_______</span> traditional folk games and culinary arts.",
        "hint": "be main subject of attention/interest | xoay quanh ai hay một chủ đề nào đó",
        "meaningEn": "if sth centers around sb or sth, or you center sth around them, they are its main subject of attention or interest",
        "meaningVn": "xoay quanh ai hay một chủ đề nào đó",
        "options": ["centre around", "get into", "go in for", "mess about"],
        "correct": 0,
        "explanation": "Chính xác! 'Centre around' nghĩa là xoay quanh trọng tâm là ai hoặc chủ đề nào đó."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Artist Mimi",
        "avatar": "🎨",
        "verb": "get into",
        "sentence": "Recently, she has begun to <span class='blank'>_______</span> classical oil painting and chess.",
        "hint": "start enjoying sth or become enthusiastic about it | bắt đầu hứng thú với điều gì đó",
        "meaningEn": "start enjoying sth or become enthusiastic about it; (train/plane) arrive; become involved in a bad situation",
        "meaningVn": "bắt đầu hứng thú/đam mê điều gì; đến nơi (tàu xe); dính líu vào rắc rối",
        "options": ["get into", "go off", "keep up", "take out"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Get into' nghĩa là bắt đầu yêu thích say mê một sở thích hay hoạt động mới."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Coach Katsu",
        "avatar": "⚽",
        "verb": "go in for",
        "sentence": "My brother doesn't really <span class='blank'>_______</span> extreme sports like bungee jumping.",
        "hint": "enjoy a particular thing/activity or choose as career | thích thú, tham gia hoạt động/nghề nghiệp",
        "meaningEn": "enjoy a particular thing or activity; choose sth as a subject of study or as your career",
        "meaningVn": "thích thú về một chủ đề/hoạt động; chọn điều gì đó làm ngành nghề theo đuổi",
        "options": ["go in for", "seek out", "warm up", "take off"],
        "correct": 0,
        "explanation": "Đúng! 'Go in for' nghĩa là ham mê, có xu hướng tham gia hoặc chọn theo đuổi."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Maestro Luna",
        "avatar": "🎭",
        "verb": "go off",
        "sentence": "After eating too much seafood during the trip, I completely <span class='blank'>_______</span> sushi.",
        "hint": "stop liking sb or sth | không còn thích/chán ngấy",
        "meaningEn": "stop liking sb or sth; explode or be fired; leave a place; (food) spoil",
        "meaningVn": "dừng thích ai đó; nổ súng; rời khỏi nơi nào; (thực phẩm) bị hư hỏng, ôi thiu",
        "options": ["go off", "laze around", "put in", "centre around"],
        "correct": 0,
        "explanation": "Chính xác! 'Go off' sb/sth nghĩa là không còn thích, chán ngấy ai hoặc cái gì."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Gamer Tama",
        "avatar": "🎮",
        "verb": "grow on",
        "sentence": "I disliked the indie rock album at first, but it is slowly beginning to <span class='blank'>_______</span> me.",
        "hint": "if sth/sb grows on you, you start to like them more | dần dần khiến ai yêu thích",
        "meaningEn": "if sth or sb grows on you, you start to like them more",
        "meaningVn": "ai đó dần dà cảm thấy thích thú/mến mộ cái gì hơn",
        "options": ["grow on", "mess about", "take to", "keep up"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Grow on' nghĩa là dần dần chiếm được cảm tình, ngày càng thấy thích."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Artist Mimi",
        "avatar": "🎨",
        "verb": "hang out",
        "sentence": "During summer weekends, teenagers usually <span class='blank'>_______</span> at the local skatepark.",
        "hint": "spend time in a place or with people | dành thời gian giao lưu, tụ tập đi chơi",
        "meaningEn": "spend time in a particular place or with particular people; lean out of a window",
        "meaningVn": "dành thời gian với ai tại nơi nào đó; rướn người ra cửa sổ",
        "options": ["hang out", "take in", "seek out", "go off"],
        "correct": 0,
        "explanation": "Đúng! 'Hang out' nghĩa là dành thời gian tụ tập la cà cùng bạn bè."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Coach Katsu",
        "avatar": "⚽",
        "verb": "keep up",
        "sentence": "He jogged at a brisk pace, so I had to sprint just to <span class='blank'>_______</span> with him.",
        "hint": "continue to do sth or move at same speed | tiếp tục làm việc; chạy đuổi kịp tốc độ",
        "meaningEn": "continue to do sth; move at the same speed as sb or sth",
        "meaningVn": "tiếp tục làm việc gì đó; chạy theo kịp tốc độ của ai",
        "options": ["keep up", "laze around", "take out", "warm up"],
        "correct": 0,
        "explanation": "Chính xác! 'Keep up (with)' là duy trì nhịp độ, theo kịp bước ai đó."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Maestro Luna",
        "avatar": "🎭",
        "verb": "laze around",
        "sentence": "On lazy Sunday afternoons, there is nothing better than to <span class='blank'>_______</span> by the poolside.",
        "hint": "relax and enjoy yourself, doing no work | thư giãn và không làm gì cả",
        "meaningEn": "relax and enjoy yourself, doing no work",
        "meaningVn": "thư giãn và không làm gì cả, nghỉ ngơi lười biếng",
        "options": ["laze around", "put in", "centre around", "seek out"],
        "correct": 0,
        "explanation": "Rất tốt! 'Laze around' là thong thả nghỉ ngơi, xả hơi lười biếng."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Gamer Tama",
        "avatar": "🎮",
        "verb": "mess about",
        "sentence": "Stop trying to <span class='blank'>_______</span> in the workshop and focus on assembling the model plane!",
        "hint": "spend time doing things in relaxed way or behave silly | dành thời gian làm linh tinh, nghịch ngợm",
        "meaningEn": "spend time doing things in a relaxed way; behave in a silly way",
        "meaningVn": "dành thời gian làm gì thư giãn; cư xử một cách nghịch ngợm ngớ ngẩn",
        "options": ["mess about", "go in for", "take off", "grow on"],
        "correct": 0,
        "explanation": "Đúng! 'Mess about/around' là nghịch ngợm, làm trò bông đùa vô bổ."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Artist Mimi",
        "avatar": "🎨",
        "verb": "pick up",
        "sentence": "While living in Tokyo for six months, Leo managed to <span class='blank'>_______</span> conversational Japanese.",
        "hint": "learn skill without intending to or meet sb in vehicle | học lỏm, tiếp thu tự nhiên; đón ai",
        "meaningEn": "learn a new skill or start a habit without intending to; go and meet sb in a vehicle",
        "meaningVn": "bắt đầu học kĩ năng hay sở thích mới cách vô tình; đi đón ai bằng xe",
        "options": ["pick up", "get into", "take in", "keep up"],
        "correct": 0,
        "explanation": "Chính xác! 'Pick up' mang nghĩa học lỏm, tiếp thu kỹ năng một cách tự nhiên."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Coach Katsu",
        "avatar": "⚽",
        "verb": "put in",
        "sentence": "To master the violin concerto, she had to <span class='blank'>_______</span> at least four hours of daily practice.",
        "hint": "spend particular time/effort doing sth | dành thời gian hay công sức làm việc gì",
        "meaningEn": "spend a particular amount of time doing sth, or make a particular amount of effort in order to do sth",
        "meaningVn": "dành thời gian hay công sức làm việc gì đó",
        "options": ["put in", "laze around", "go off", "hang out"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Put in' (time/effort) là cống hiến, đầu tư nhiều thời gian công sức."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Maestro Luna",
        "avatar": "🎭",
        "verb": "seek out",
        "sentence": "Passionate antique collectors often travel across provinces to <span class='blank'>_______</span> rare handcrafted pottery.",
        "hint": "find sb/sth by looking in determined way | quyết tâm tìm kiếm ai/cái gì",
        "meaningEn": "find sb or sth by looking for them in a determined way",
        "meaningVn": "quyết tâm tìm kiếm, cất công săn lùng ai/cái gì",
        "options": ["seek out", "centre around", "mess about", "take to"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Seek out' nghĩa là chủ động cất công tìm kiếm mục tiêu xác định."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Gamer Tama",
        "avatar": "🎮",
        "verb": "take in",
        "sentence": "The two-week cultural tour will <span class='blank'>_______</span> visits to ancient temples and scenic mountain trails.",
        "hint": "include sth | bao gồm, bao quát",
        "meaningEn": "include sth",
        "meaningVn": "bao gồm, bao hàm",
        "options": ["take in", "take off", "grow on", "warm up"],
        "correct": 0,
        "explanation": "Đúng! 'Take in' có nghĩa là bao hàm, bao gồm các điểm đến hoặc nội dung."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Artist Mimi",
        "avatar": "🎨",
        "verb": "take off",
        "sentence": "The board game club really began to <span class='blank'>_______</span> once they started hosting weekly tournaments.",
        "hint": "have time away from work or become popular fast | có thời gian nghỉ; phất lên nhanh chóng",
        "meaningEn": "have a particular amount of time away from work; become successful or popular very fast",
        "meaningVn": "có thời gian nghỉ ngơi; trở nên thành công và nổi tiếng rất nhanh",
        "options": ["take off", "keep up", "laze around", "go off"],
        "correct": 0,
        "explanation": "Chính xác! 'Take off' nghĩa là cất cánh, bùng nổ độ nổi tiếng và thành công."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Coach Katsu",
        "avatar": "⚽",
        "verb": "take out",
        "sentence": "For his birthday celebration, his uncle decided to <span class='blank'>_______</span> him to a fancy steakhouse.",
        "hint": "take sb to cinema/restaurant and pay | dẫn ai đó đến rạp chiếu phim hay nhà hàng và khao tiền",
        "meaningEn": "take sb to a place like a cinema or a restaurant and usually pay for them",
        "meaningVn": "dẫn ai đó đến rạp chiếu phim hay nhà hàng và khao tiền",
        "options": ["take out", "put in", "seek out", "get into"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Take sb out' là mời, dẫn ai ra ngoài đi chơi/ăn uống và khao."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Maestro Luna",
        "avatar": "🎭",
        "verb": "warm up",
        "sentence": "Athletes should always spend fifteen minutes doing light stretches to <span class='blank'>_______</span> before the marathon.",
        "hint": "prepare for sport/activity by gentle exercises | khởi động (trước khi chơi thể thao)",
        "meaningEn": "prepare for a sport or activity by doing gentle exercises or practicing just before it starts",
        "meaningVn": "khởi động (trước khi chơi thể thao), làm nóng cơ thể",
        "options": ["warm up", "take to", "mess about", "grow on"],
        "correct": 0,
        "explanation": "Đúng! 'Warm up' là bài tập làm nóng người, khởi động trước buổi tập."
    },
    {
        "unit": 26,
        "unitTitle": "Unit 26: Preference & Leisure",
        "shop": "Leisure Garden",
        "speaker": "Artist Mimi",
        "avatar": "🎨",
        "verb": "take to",
        "sentence": "She immediately <span class='blank'>_______</span> oil painting as if she had been practicing for years.",
        "hint": "begin to like sb/sth or start habit | bắt đầu thích ai hoặc việc gì; bắt đầu một thói quen",
        "meaningEn": "begin to like sb or sth; start doing sth as a habit",
        "meaningVn": "thích ai hoặc việc gì; bắt đầu một thói quen",
        "options": ["take to", "go off", "hang out", "centre around"],
        "correct": 0,
        "explanation": "Chính xác! 'Take to' nghĩa là bén duyên, bắt đầu có cảm tình hoặc hình thành thói quen mới."
    }
]

# Merge avoiding duplicates
existing_verbs = set((item['unit'], item['verb']) for item in existing_data)
final_data = list(existing_data)
for item in unit26_items:
    if (item['unit'], item['verb']) not in existing_verbs:
        final_data.append(item)

print(f"Total merged phrasal verbs: {len(final_data)} items across 13 Units!")

# Idioms Tests Data
IDIOM_TESTS = [
    # Unit 2: Thinking and Learning
    {
        "id": 1,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "Winning the award so early in her career really seemed to _______, making her far less pleasant to work with.",
        "options": ["go to her head", "ring a bell", "split hairs", "take stock"],
        "correct": 0,
        "correctLabel": "A. go to her head",
        "explanation": "🌟 'Go to one's head': khiến ai trở nên kiêu ngạo, ngạo mạn vì thành công quá sớm."
    },
    {
        "id": 2,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "Walking through the busy market at night, you need to _______ to avoid pickpockets.",
        "options": ["put two and two together", "keep your wits about you", "know what's what", "take stock"],
        "correct": 1,
        "correctLabel": "B. keep your wits about you",
        "explanation": "🌟 'Keep your wits about you': luôn cảnh giác, tỉnh táo và sẵn sàng ứng phó trong mọi tình huống."
    },
    {
        "id": 3,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "The employees were kept completely _______ about the upcoming layoffs.",
        "options": ["round the bend", "quick on the uptake", "in the dark", "in the know of what's what"],
        "correct": 2,
        "correctLabel": "C. in the dark",
        "explanation": "🌟 'In the dark (about sth)': bị giữ bí mật, hoàn toàn không được thông báo hay biết gì."
    },
    {
        "id": 4,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "After thirty years in the industry, she really does _______.",
        "options": ["have a leg to stand on", "split hairs", "ring a bell", "know what's what"],
        "correct": 3,
        "correctLabel": "D. know what's what",
        "explanation": "🌟 'Know what's what': hiểu rõ ngọn ngành mọi sự việc, dày dặn kinh nghiệm và hiểu biết thực tế."
    },
    {
        "id": 5,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "Without any witnesses, the defendant didn't _______ in court.",
        "options": ["have a leg to stand on", "know what's what", "see the wood for the trees", "put two and two together"],
        "correct": 0,
        "correctLabel": "A. have a leg to stand on",
        "explanation": "🌟 'Not have a leg to stand on': không có chứng cứ hay cơ sở pháp lý vững chắc để tự bảo vệ mình."
    },
    {
        "id": 6,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "He was so focused on minor formatting errors that he couldn't _______ and missed the report's major flaw.",
        "options": ["have a leg to stand on", "see the wood for the trees", "split hairs", "take stock"],
        "correct": 1,
        "correctLabel": "B. see the wood for the trees",
        "explanation": "🌟 'See the wood for the trees': nhìn thấu bức tranh tổng thể (không bị che mắt bởi tiểu tiết vụn vặt)."
    },
    {
        "id": 7,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "It didn't take long for detectives to _______ once they found the muddy footprints.",
        "options": ["split hairs", "know what's what", "put two and two together", "ring a bell"],
        "correct": 2,
        "correctLabel": "C. put two and two together",
        "explanation": "🌟 'Put two and two together': xâu chuỗi dữ kiện/manh mối để đưa ra kết luận chuẩn xác."
    },
    {
        "id": 8,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "He had to repeat the instructions three times because she was so _______.",
        "options": ["quick on the uptake", "in the dark", "round the bend", "slow on the uptake"],
        "correct": 3,
        "correctLabel": "D. slow on the uptake",
        "explanation": "🌟 'Slow on the uptake': chậm tiếp thu, chậm hiểu (trái nghĩa với 'quick on the uptake')."
    },
    {
        "id": 9,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "That name doesn't _______; I don't think we've met before.",
        "options": ["ring a bell", "go to my head", "split hairs", "take stock"],
        "correct": 0,
        "correctLabel": "A. ring a bell",
        "explanation": "🌟 'Ring a bell': nghe quen tai, gợi nhớ một ấn tượng hoặc ký ức nào đó."
    },
    {
        "id": 10,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "After weeks of sleepless nights with the newborn, she felt like she was going _______.",
        "options": ["slow on the uptake", "round the bend", "in the dark", "split hairs"],
        "correct": 1,
        "correctLabel": "B. round the bend",
        "explanation": "🌟 'Go round the bend': phát điên, kiệt quệ thần kinh vì căng thẳng tột độ."
    },
    {
        "id": 11,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "Let's not _______ over minor wording; the overall message is clear.",
        "options": ["ring a bell", "know what's what", "split hairs", "take stock"],
        "correct": 2,
        "correctLabel": "C. split hairs",
        "explanation": "🌟 'Split hairs': soi mói chi li, tranh cãi vụn vặt không cần thiết."
    },
    {
        "id": 12,
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "question": "Before making any major decisions, it's wise to _______ of your finances.",
        "options": ["split hairs", "put two and two together", "go to your head", "take stock"],
        "correct": 3,
        "correctLabel": "D. take stock",
        "explanation": "🌟 'Take stock (of sth)': cân nhắc, đánh giá tổng thể tình hình tài chính trước khi hành động."
    },

    # Unit 4: Change and Technology
    {
        "id": 13,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "Despite his promises to change, colleagues doubted him, believing that _______.",
        "options": ["a leopard can't change its spots", "reinvent the wheel", "break the mould", "turn over a new leaf"],
        "correct": 0,
        "correctLabel": "A. a leopard can't change its spots",
        "explanation": "🌟 'A leopard can't change its spots': giang sơn dễ đổi bản tính khó dời, bản chất cố hữu khó lòng thay đổi."
    },
    {
        "id": 14,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "The renovated apartment came with _______, including a dishwasher and smart thermostat.",
        "options": ["the tools of the trade", "all mod cons", "know sth inside out", "change your tune"],
        "correct": 1,
        "correctLabel": "B. all mod cons",
        "explanation": "🌟 'All mod cons' (all modern conveniences): đầy đủ mọi thiết bị tiện nghi hiện đại."
    },
    {
        "id": 15,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "The young director decided to _______ by producing a film unlike anything the studio had made before.",
        "options": ["reinvent the wheel", "stick to her guns", "break the mould", "turn over a new leaf"],
        "correct": 2,
        "correctLabel": "C. break the mould",
        "explanation": "🌟 'Break the mould': phá vỡ khuôn mẫu truyền thống, tạo ra bước đột phá khác biệt hoàn toàn."
    },
    {
        "id": 16,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "Once she realized how much money was involved, he quickly began to _______.",
        "options": ["break the mould", "know sth inside out", "stick to his guns", "change his tune"],
        "correct": 3,
        "correctLabel": "D. change his tune",
        "explanation": "🌟 'Change one's tune': thay đổi hoàn toàn thái độ hoặc luận điệu khi quyền lợi thay đổi."
    },
    {
        "id": 17,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "He was planning to sell the house, but he had a _______ at the last minute.",
        "options": ["change of heart", "change of tune", "leopard's spots", "tool of the trade"],
        "correct": 0,
        "correctLabel": "A. change of heart",
        "explanation": "🌟 'Have a change of heart': thay đổi ý định, đổi lòng vào phút chót."
    },
    {
        "id": 18,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "After twenty years as a mechanic, he _______ every engine model imaginable.",
        "options": ["reinvents", "knows inside out", "breaks the mould", "changes his tune"],
        "correct": 1,
        "correctLabel": "B. knows inside out",
        "explanation": "🌟 'Know sth inside out': hiểu thấu như lòng bàn tay, thông thạo mọi khía cạnh."
    },
    {
        "id": 19,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "There's no need to _______; just use the existing template for the report.",
        "options": ["break the mould", "turn over a new leaf", "reinvent the wheel", "know it inside out"],
        "correct": 2,
        "correctLabel": "C. reinvent the wheel",
        "explanation": "🌟 'Reinvent the wheel': tốn công vô ích sáng tạo lại cái người khác đã làm sẵn và hoàn thiện."
    },
    {
        "id": 20,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "Despite intense criticism, the senator decided to _______ on the controversial policy.",
        "options": ["change her tune", "turn over a new leaf", "break the mould", "stick to her guns"],
        "correct": 3,
        "correctLabel": "D. stick to her guns",
        "explanation": "🌟 'Stick to one's guns': kiên định bảo vệ lập trường của mình, không khuất phục trước áp lực."
    },
    {
        "id": 21,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "For a professional photographer, a good camera and lighting kit are simply _______.",
        "options": ["the tools of the trade", "all mod cons", "the tools of the mould", "reinventing the wheel"],
        "correct": 0,
        "correctLabel": "A. the tools of the trade",
        "explanation": "🌟 'The tools of the trade': đồ nghề/dụng cụ thiết yếu phục vụ công việc chuyên môn."
    },
    {
        "id": 22,
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "question": "After the health scare, he decided to _______ and start eating healthier.",
        "options": ["reinvent the wheel", "turn over a new leaf", "change his tune", "break the mould"],
        "correct": 1,
        "correctLabel": "B. turn over a new leaf",
        "explanation": "🌟 'Turn over a new leaf': làm lại cuộc đời, bắt đầu một thói quen/lối sống mới tốt đẹp hơn."
    }
]

print(f"Loaded {len(IDIOM_TESTS)} Idiom Practice Test items across Unit 2 & 4!")

# Now build the full HTML section
final_data_json = json.dumps(final_data, ensure_ascii=False, indent=2)
idiom_data_json = json.dumps(IDIOM_TESTS, ensure_ascii=False, indent=2)

section_html = f'''        <!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 ==================== -->
        <section id="task-hsg12-vocab" class="view-panel task-view" style="padding: 0; margin: 0; width: 100%; max-width: 100%;">
          <div id="neko-michi-vocab-root">
            <style>
              #neko-michi-vocab-root {{
                --bg-sky: linear-gradient(180deg, #FDE2D1 0%, #FFF5EB 60%, #E8F5E9 100%);
                --wood-dark: #3E2723;
                --wood-light: #A1887F;
                --parchment: #FFFDF9;
                --border-dark: #4E342E;
                --indigo-text: #1E293B;
                --matcha-green: #2E7D32;
                --matcha-light: #E8F5E9;
                --terracotta: #D84315;
                --gold-coin: #F57F17;
                --sky-blue: #0284C7;
                --purple-accent: #7C3AED;
                --font-heading: 'Fredoka', cursive, sans-serif;
                --font-body: 'Plus Jakarta Sans', sans-serif;
                --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                --shadow-lg: 0 12px 24px -4px rgba(62, 39, 35, 0.18);
                font-family: var(--font-body);
                background-color: #2D201A;
                color: var(--indigo-text);
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 760px;
                padding: 16px;
                border-radius: 16px;
                box-sizing: border-box;
                width: 100%;
                position: relative;
              }}

              #neko-michi-vocab-root * {{
                box-sizing: border-box;
                user-select: none;
              }}

              #neko-michi-vocab-root #game-container {{
                width: 100%;
                max-width: 1100px;
                height: 750px;
                background: var(--bg-sky);
                border: 8px solid var(--border-dark);
                border-radius: 24px;
                position: relative;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
              }}

              #neko-michi-vocab-root #top-hud {{
                min-height: 74px;
                background: rgba(255, 253, 249, 0.96);
                backdrop-filter: blur(8px);
                border-bottom: 4px solid var(--border-dark);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                gap: 12px;
                flex-wrap: wrap;
                z-index: 10;
              }}

              #neko-michi-vocab-root .hud-title-group {{
                display: flex;
                align-items: center;
                gap: 12px;
                flex-wrap: wrap;
              }}

              #neko-michi-vocab-root .hud-title {{
                font-family: var(--font-heading);
                font-size: 22px;
                font-weight: 700;
                color: var(--wood-dark);
                display: flex;
                align-items: center;
                gap: 8px;
                text-shadow: 1px 1px 0px rgba(0,0,0,0.05);
              }}

              #neko-michi-vocab-root .btn-dict-open,
              #neko-michi-vocab-root .btn-idiom-open {{
                background: var(--matcha-green);
                color: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 12px;
                padding: 6px 14px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 3px 0 var(--border-dark);
                transition: all 0.15s ease;
              }}

              #neko-michi-vocab-root .btn-idiom-open {{
                background: var(--purple-accent);
              }}

              #neko-michi-vocab-root .btn-dict-open:hover,
              #neko-michi-vocab-root .btn-idiom-open:hover {{
                transform: translateY(-2px);
                box-shadow: 0 5px 0 var(--border-dark);
                filter: brightness(1.1);
              }}

              #neko-michi-vocab-root .btn-dict-open:active,
              #neko-michi-vocab-root .btn-idiom-open:active {{
                transform: translateY(2px);
                box-shadow: 0 1px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .hud-stats {{
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
              }}

              #neko-michi-vocab-root .stat-badge {{
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 12px;
                padding: 4px 12px;
                font-size: 13px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .stat-badge.unit-filter {{
                background: #FEF3C7;
                color: #92400E;
                border-color: #B45309;
              }}

              #neko-michi-vocab-root #street-viewport {{
                flex: 1;
                position: relative;
                background: transparent;
                cursor: pointer;
                overflow: hidden;
              }}

              #neko-michi-vocab-root canvas#street-canvas {{
                display: block;
                width: 100%;
                height: 100%;
              }}

              #neko-michi-vocab-root .modal-backdrop {{
                position: absolute;
                inset: 0;
                background: rgba(45, 32, 26, 0.65);
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                z-index: 50;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.25s ease;
              }}

              #neko-michi-vocab-root .modal-backdrop.active {{
                opacity: 1;
                pointer-events: auto;
              }}

              #neko-michi-vocab-root .quest-card {{
                background: var(--parchment);
                border: 4px solid var(--border-dark);
                border-radius: 24px;
                width: 100%;
                max-width: 740px;
                max-height: 90vh;
                overflow-y: auto;
                padding: 26px 30px;
                box-shadow: var(--shadow-lg);
                transform: translateY(20px) scale(0.95);
                transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
                display: flex;
                flex-direction: column;
                gap: 16px;
              }}

              #neko-michi-vocab-root .modal-backdrop.active .quest-card,
              #neko-michi-vocab-root .modal-backdrop.active .dict-modal-card,
              #neko-michi-vocab-root .modal-backdrop.active .idiom-modal-card {{
                transform: translateY(0) scale(1);
              }}

              #neko-michi-vocab-root .quest-header {{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px dashed var(--wood-light);
                padding-bottom: 12px;
              }}

              #neko-michi-vocab-root .quest-speaker {{
                display: flex;
                align-items: center;
                gap: 12px;
              }}

              #neko-michi-vocab-root .speaker-avatar {{
                width: 48px;
                height: 48px;
                background: #FFF;
                border: 3px solid var(--border-dark);
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 26px;
                box-shadow: 0 3px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .speaker-info h3 {{
                margin: 0;
                font-family: var(--font-heading);
                font-size: 18px;
                color: var(--wood-dark);
              }}

              #neko-michi-vocab-root .speaker-info p {{
                margin: 2px 0 0 0;
                font-size: 13px;
                color: var(--wood-light);
                font-weight: 600;
              }}

              #neko-michi-vocab-root .unit-tag {{
                background: var(--terracotta);
                color: #FFF;
                font-weight: 700;
                font-size: 12px;
                padding: 4px 10px;
                border-radius: 8px;
                border: 2px solid var(--border-dark);
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .instruction-label {{
                font-size: 13px;
                font-weight: 700;
                color: var(--matcha-green);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                display: inline-block;
                margin-bottom: 6px;
              }}

              #neko-michi-vocab-root .sentence-text {{
                font-size: 17px;
                font-weight: 600;
                line-height: 1.6;
                color: var(--wood-dark);
                background: #FFF;
                padding: 16px 20px;
                border: 3px solid var(--border-dark);
                border-radius: 16px;
                box-shadow: 0 4px 0 var(--border-dark);
                margin: 0;
              }}

              #neko-michi-vocab-root .sentence-text span.blank {{
                color: var(--terracotta);
                font-weight: 800;
                text-decoration: underline;
                text-decoration-thickness: 3px;
              }}

              #neko-michi-vocab-root .gloss-hint {{
                font-size: 13px;
                color: #4B5563;
                margin-top: 6px;
                font-style: italic;
                padding-left: 6px;
              }}

              #neko-michi-vocab-root .options-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
              }}

              #neko-michi-vocab-root .opt-btn {{
                background: #FFF;
                border: 3px solid var(--border-dark);
                border-radius: 14px;
                padding: 12px 16px;
                font-family: var(--font-body);
                font-size: 15px;
                font-weight: 700;
                color: var(--wood-dark);
                cursor: pointer;
                box-shadow: 0 4px 0 var(--border-dark);
                transition: all 0.15s ease;
                text-align: left;
              }}

              #neko-michi-vocab-root .opt-btn:hover {{
                background: #FFF3E0;
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .opt-btn:active {{
                transform: translateY(2px);
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .opt-btn.correct {{
                background: #D1FAE5 !important;
                border-color: #059669 !important;
                color: #065F46 !important;
                box-shadow: 0 4px 0 #059669 !important;
              }}

              #neko-michi-vocab-root .opt-btn.wrong {{
                background: #FEE2E2 !important;
                border-color: #DC2626 !important;
                color: #991B1B !important;
                box-shadow: 0 4px 0 #DC2626 !important;
              }}

              #neko-michi-vocab-root .feedback-box {{
                display: none;
                padding: 12px 16px;
                border-radius: 12px;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.4;
              }}

              #neko-michi-vocab-root .feedback-box.correct {{
                display: block;
                background: #ECFDF5;
                border: 2px solid #059669;
                color: #065F46;
              }}

              #neko-michi-vocab-root .feedback-box.wrong {{
                display: block;
                background: #FEF2F2;
                border: 2px solid #DC2626;
                color: #991B1B;
              }}

              #neko-michi-vocab-root .quest-actions {{
                display: flex;
                justify-content: flex-end;
                gap: 12px;
                margin-top: 4px;
              }}

              #neko-michi-vocab-root .btn-next {{
                background: var(--gold-coin);
                color: #3E2723;
                border: 3px solid var(--border-dark);
                border-radius: 12px;
                padding: 10px 22px;
                font-family: var(--font-heading);
                font-size: 16px;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 4px 0 var(--border-dark);
                transition: all 0.15s ease;
                display: none;
              }}

              #neko-michi-vocab-root .btn-next:hover {{
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .btn-next:active {{
                transform: translateY(2px);
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .btn-close-quest {{
                background: #F3F4F6;
                color: #4B5563;
                border: 3px solid var(--border-dark);
                border-radius: 12px;
                padding: 10px 18px;
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 4px 0 var(--border-dark);
                transition: all 0.15s ease;
              }}

              #neko-michi-vocab-root .btn-close-quest:hover {{
                background: #E5E7EB;
              }}

              #neko-michi-vocab-root #bottom-toolbar {{
                min-height: 70px;
                background: rgba(255, 253, 249, 0.96);
                backdrop-filter: blur(8px);
                border-top: 4px solid var(--border-dark);
                display: flex;
                align-items: center;
                padding: 8px 16px;
                gap: 8px;
                overflow-x: auto;
                z-index: 10;
              }}

              #neko-michi-vocab-root .shop-slot-btn {{
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 12px;
                padding: 6px 12px;
                font-size: 13px;
                font-weight: 700;
                color: var(--wood-dark);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 5px;
                box-shadow: 0 3px 0 var(--border-dark);
                transition: all 0.15s ease;
                white-space: nowrap;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .shop-slot-btn.active {{
                background: #FEF3C7;
                border-color: #D97706;
                color: #92400E;
                transform: translateY(2px);
                box-shadow: 0 1px 0 #D97706;
              }}

              #neko-michi-vocab-root .shop-slot-btn:hover {{
                background: #FFF3E0;
                transform: translateY(-2px);
                box-shadow: 0 5px 0 var(--border-dark);
              }}

              /* Handbook Modal */
              #neko-michi-vocab-root .dict-modal-card {{
                background: #FFFDF9;
                border: 4px solid var(--border-dark);
                border-radius: 24px;
                width: 100%;
                max-width: 940px;
                height: 88vh;
                max-height: 88vh;
                display: flex;
                flex-direction: column;
                box-shadow: var(--shadow-lg);
                overflow: hidden;
                transform: translateY(20px) scale(0.95);
                transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
              }}

              #neko-michi-vocab-root .dict-header {{
                padding: 16px 24px;
                background: #FDF8F0;
                border-bottom: 3px solid var(--border-dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .dict-filter-row {{
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                padding: 12px 20px;
                background: #FFF8EE;
                border-bottom: 2px solid #E5E7EB;
                flex-shrink: 0;
                overflow-y: auto;
                max-height: 120px;
              }}

              #neko-michi-vocab-root .dict-tab-btn {{
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 8px;
                padding: 6px 12px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.15s ease;
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .dict-tab-btn:hover {{
                background: #FEF3C7;
                transform: translateY(-1px);
              }}

              #neko-michi-vocab-root .dict-tab-btn.active {{
                background: var(--terracotta);
                color: #FFF;
                border-color: var(--border-dark);
                box-shadow: 0 1px 0 var(--border-dark);
                transform: translateY(1px);
              }}

              #neko-michi-vocab-root .dict-body {{
                flex: 1 1 auto;
                min-height: 0;
                overflow-y: auto;
                padding: 16px 24px;
                display: flex;
                flex-direction: column;
                gap: 12px;
              }}

              #neko-michi-vocab-root .dict-item-card {{
                background: #FFF;
                border: 2px solid #E5E7EB;
                border-left: 5px solid var(--matcha-green);
                border-radius: 12px;
                padding: 12px 16px;
                display: flex;
                flex-direction: column;
                gap: 6px;
              }}

              #neko-michi-vocab-root .dict-item-header {{
                display: flex;
                justify-content: space-between;
                align-items: center;
              }}

              #neko-michi-vocab-root .dict-verb {{
                font-family: var(--font-heading);
                font-size: 18px;
                font-weight: 700;
                color: var(--terracotta);
              }}

              #neko-michi-vocab-root .dict-unit-badge {{
                font-size: 12px;
                background: #F3F4F6;
                padding: 2px 8px;
                border-radius: 6px;
                font-weight: 700;
                color: #4B5563;
              }}

              #neko-michi-vocab-root .dict-meaning-en {{
                font-size: 15px;
                color: #1F2937;
                font-weight: 600;
              }}

              #neko-michi-vocab-root .dict-meaning-vn {{
                font-size: 14px;
                color: var(--matcha-green);
                font-weight: 700;
              }}

              /* Idioms Practice Modal */
              #neko-michi-vocab-root .idiom-modal-card {{
                background: #FFFDF9;
                border: 4px solid var(--border-dark);
                border-radius: 24px;
                width: 100%;
                max-width: 960px;
                height: 90vh;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                box-shadow: var(--shadow-lg);
                overflow: hidden;
                transform: translateY(20px) scale(0.95);
                transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
              }}

              #neko-michi-vocab-root .idiom-header {{
                padding: 16px 24px;
                background: #F5F3FF;
                border-bottom: 3px solid var(--border-dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .idiom-filter-row {{
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                padding: 12px 20px;
                background: #FAF5FF;
                border-bottom: 2px solid #E9D5FF;
                flex-shrink: 0;
              }}

              #neko-michi-vocab-root .idiom-tab-btn {{
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 8px;
                padding: 6px 14px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.15s ease;
                box-shadow: 0 2px 0 var(--border-dark);
              }}

              #neko-michi-vocab-root .idiom-tab-btn:hover {{
                background: #EDE9FE;
                transform: translateY(-1px);
              }}

              #neko-michi-vocab-root .idiom-tab-btn.active {{
                background: var(--purple-accent);
                color: #FFF;
                border-color: var(--border-dark);
                box-shadow: 0 1px 0 var(--border-dark);
                transform: translateY(1px);
              }}

              #neko-michi-vocab-root .idiom-body {{
                flex: 1 1 auto;
                min-height: 0;
                overflow-y: auto;
                padding: 20px 24px;
                display: flex;
                flex-direction: column;
                gap: 16px;
              }}

              #neko-michi-vocab-root .idiom-test-card {{
                background: #FFF;
                border: 2px solid #E5E7EB;
                border-left: 5px solid var(--purple-accent);
                border-radius: 16px;
                padding: 16px 20px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.04);
              }}

              #neko-michi-vocab-root .idiom-q-header {{
                display: flex;
                justify-content: space-between;
                align-items: center;
              }}

              #neko-michi-vocab-root .idiom-q-num {{
                font-family: var(--font-heading);
                font-size: 16px;
                font-weight: 700;
                color: var(--purple-accent);
              }}

              #neko-michi-vocab-root .idiom-q-text {{
                font-size: 16px;
                font-weight: 600;
                color: #1F2937;
                line-height: 1.5;
              }}

              #neko-michi-vocab-root .idiom-options-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
              }}

              #neko-michi-vocab-root .idiom-opt-btn {{
                background: #F9FAFB;
                border: 2px solid #D1D5DB;
                border-radius: 10px;
                padding: 10px 14px;
                font-size: 14px;
                font-weight: 600;
                color: #374151;
                cursor: pointer;
                text-align: left;
                transition: all 0.15s ease;
              }}

              #neko-michi-vocab-root .idiom-opt-btn:hover {{
                background: #F3E8FF;
                border-color: var(--purple-accent);
                color: var(--purple-accent);
              }}

              #neko-michi-vocab-root .idiom-opt-btn.correct {{
                background: #D1FAE5 !important;
                border-color: #059669 !important;
                color: #065F46 !important;
                font-weight: 700;
              }}

              #neko-michi-vocab-root .idiom-opt-btn.wrong {{
                background: #FEE2E2 !important;
                border-color: #DC2626 !important;
                color: #991B1B !important;
                font-weight: 700;
              }}

              #neko-michi-vocab-root .idiom-expl-box {{
                display: none;
                background: #F5F3FF;
                border: 2px solid #C4B5FD;
                border-radius: 10px;
                padding: 10px 14px;
                font-size: 13px;
                color: #4C1D95;
                font-weight: 600;
                line-height: 1.4;
              }}
            </style>

            <div id="game-container">
              <header id="top-hud">
                <div class="hud-title-group">
                  <div class="hud-title">
                    <span>🐾</span> Neko Michi: Phrasal Street
                  </div>
                  <button class="btn-dict-open" onclick="openHandbookModal()">
                    <span>📖</span> Sổ tay Verbs (13 Units / 137 Verbs)
                  </button>
                  <button class="btn-idiom-open" onclick="openIdiomModal()">
                    <span>🎭</span> Luyện Idioms Tests (22 Câu)
                  </button>
                </div>
                <div class="hud-stats">
                  <div class="stat-badge unit-filter" id="active-unit-badge">
                    <span>📍</span> <span id="current-unit-display">Tất Cả Units</span>
                  </div>
                  <div class="stat-badge coins">
                    <span>🪙</span> <span id="coin-counter">120</span> Koban
                  </div>
                  <div class="stat-badge harmony">
                    <span>🌸</span> <span id="harmony-counter">85%</span> Harmony
                  </div>
                </div>
              </header>

              <main id="street-viewport">
                <canvas id="street-canvas"></canvas>
              </main>

              <footer id="bottom-toolbar">
                <button class="shop-slot-btn active" id="filter-btn-all" onclick="setTopicFilter('all')">
                  <span>🌟</span> Tất Cả
                </button>
                <button class="shop-slot-btn" id="filter-btn-2" onclick="setTopicFilter(2)">
                  <span>📜</span> Unit 2 (Learn)
                </button>
                <button class="shop-slot-btn" id="filter-btn-4" onclick="setTopicFilter(4)">
                  <span>⚙️</span> Unit 4 (Tech)
                </button>
                <button class="shop-slot-btn" id="filter-btn-6" onclick="setTopicFilter(6)">
                  <span>🍵</span> Unit 6 (Work)
                </button>
                <button class="shop-slot-btn" id="filter-btn-8" onclick="setTopicFilter(8)">
                  <span>🐎</span> Unit 8 (Travel)
                </button>
                <button class="shop-slot-btn" id="filter-btn-10" onclick="setTopicFilter(10)">
                  <span>📢</span> Unit 10 (Media)
                </button>
                <button class="shop-slot-btn" id="filter-btn-12" onclick="setTopicFilter(12)">
                  <span>🎲</span> Unit 12 (Nature)
                </button>
                <button class="shop-slot-btn" id="filter-btn-14" onclick="setTopicFilter(14)">
                  <span>🪙</span> Unit 14 (Money)
                </button>
                <button class="shop-slot-btn" id="filter-btn-16" onclick="setTopicFilter(16)">
                  <span>🏛️</span> Unit 16 (Built)
                </button>
                <button class="shop-slot-btn" id="filter-btn-18" onclick="setTopicFilter(18)">
                  <span>🩺</span> Unit 18 (Health)
                </button>
                <button class="shop-slot-btn" id="filter-btn-20" onclick="setTopicFilter(20)">
                  <span>⚖️</span> Unit 20 (Power)
                </button>
                <button class="shop-slot-btn" id="filter-btn-22" onclick="setTopicFilter(22)">
                  <span>🎨</span> Unit 22 (Arts)
                </button>
                <button class="shop-slot-btn" id="filter-btn-24" onclick="setTopicFilter(24)">
                  <span>🌸</span> Unit 24 (People)
                </button>
                <button class="shop-slot-btn" id="filter-btn-26" onclick="setTopicFilter(26)">
                  <span>🎮</span> Unit 26 (Leisure)
                </button>
              </footer>

              <!-- Interactive Quest Modal -->
              <div id="quest-modal" class="modal-backdrop">
                <div class="quest-card">
                  <div class="quest-header">
                    <div class="quest-speaker">
                      <div class="speaker-avatar" id="modal-cat-avatar">🐱</div>
                      <div class="speaker-info">
                        <h3 id="modal-cat-name">Master Natsume</h3>
                        <p id="modal-shop-name">Scholar Academy Customer</p>
                      </div>
                    </div>
                    <div class="unit-tag" id="modal-unit-tag">Unit 2: Thinking & Learning</div>
                  </div>

                  <div class="quest-body">
                    <span class="instruction-label">Instruction: Chọn Phrasal Verb phù hợp</span>
                    <p class="sentence-text" id="modal-sentence">
                      I haven't written calligraphy in months; I need to <span class="blank">_______</span> my technique.
                    </p>
                    <div class="gloss-hint" id="modal-hint">Hint: practice and improve your skills or knowledge</div>
                  </div>

                  <div class="options-grid" id="modal-options"></div>

                  <div class="feedback-box" id="modal-feedback"></div>

                  <div class="quest-actions">
                    <button class="btn-close-quest" onclick="closeQuestModal()">
                      Đóng
                    </button>
                    <button class="btn-next" id="modal-next-btn" onclick="nextQuestInFilter()">
                      Câu Tiếp Theo ➔
                    </button>
                  </div>
                </div>
              </div>

              <!-- Dictionary Handbook Modal -->
              <div id="dict-modal" class="modal-backdrop">
                <div class="dict-modal-card">
                  <div class="dict-header">
                    <div>
                      <h3 style="font-family: var(--font-heading); font-size: 20px; color: var(--wood-dark); margin:0;">
                        📚 Destination C1 & C2: Phrasal Verbs Handbook
                      </h3>
                      <p style="font-size: 13px; color: #6B7280; margin: 4px 0 0 0;">Tổng hợp chi tiết định nghĩa tiếng Anh & nghĩa tiếng Việt cho toàn bộ 13 Topics (137 Verbs)</p>
                    </div>
                    <button class="btn-close-quest" onclick="closeHandbookModal()">✕ Đóng</button>
                  </div>

                  <div class="dict-filter-row">
                    <button class="dict-tab-btn active" id="dict-tab-all" onclick="filterHandbook('all')">Tất Cả (137 Verbs)</button>
                    <button class="dict-tab-btn" id="dict-tab-2" onclick="filterHandbook(2)">Unit 2 (Learn)</button>
                    <button class="dict-tab-btn" id="dict-tab-4" onclick="filterHandbook(4)">Unit 4 (Tech)</button>
                    <button class="dict-tab-btn" id="dict-tab-6" onclick="filterHandbook(6)">Unit 6 (Work)</button>
                    <button class="dict-tab-btn" id="dict-tab-8" onclick="filterHandbook(8)">Unit 8 (Travel)</button>
                    <button class="dict-tab-btn" id="dict-tab-10" onclick="filterHandbook(10)">Unit 10 (Media)</button>
                    <button class="dict-tab-btn" id="dict-tab-12" onclick="filterHandbook(12)">Unit 12 (Nature)</button>
                    <button class="dict-tab-btn" id="dict-tab-14" onclick="filterHandbook(14)">Unit 14 (Money)</button>
                    <button class="dict-tab-btn" id="dict-tab-16" onclick="filterHandbook(16)">Unit 16 (Built)</button>
                    <button class="dict-tab-btn" id="dict-tab-18" onclick="filterHandbook(18)">Unit 18 (Health)</button>
                    <button class="dict-tab-btn" id="dict-tab-20" onclick="filterHandbook(20)">Unit 20 (Power)</button>
                    <button class="dict-tab-btn" id="dict-tab-22" onclick="filterHandbook(22)">Unit 22 (Arts)</button>
                    <button class="dict-tab-btn" id="dict-tab-24" onclick="filterHandbook(24)">Unit 24 (People)</button>
                    <button class="dict-tab-btn" id="dict-tab-26" onclick="filterHandbook(26)">Unit 26 (Leisure)</button>
                  </div>

                  <div class="dict-body" id="dict-items-container">
                    <!-- Populated dynamically via JS -->
                  </div>
                </div>
              </div>

              <!-- Idioms Practice Tests Modal -->
              <div id="idiom-modal" class="modal-backdrop">
                <div class="idiom-modal-card">
                  <div class="idiom-header">
                    <div>
                      <h3 style="font-family: var(--font-heading); font-size: 20px; color: var(--purple-accent); margin:0;">
                        🎭 Destination C1 & C2: Idioms Practice Tests
                      </h3>
                      <p style="font-size: 13px; color: #6B7280; margin: 4px 0 0 0;">Bộ câu hỏi trắc nghiệm Idioms chuẩn đề thi HSG Quốc Gia & Chuyên Anh (Unit 2 & Unit 4)</p>
                    </div>
                    <button class="btn-close-quest" onclick="closeIdiomModal()">✕ Đóng</button>
                  </div>

                  <div class="idiom-filter-row">
                    <button class="idiom-tab-btn active" id="idiom-tab-all" onclick="filterIdioms('all')">Tất Cả (22 câu)</button>
                    <button class="idiom-tab-btn" id="idiom-tab-2" onclick="filterIdioms(2)">Unit 2: Thinking & Learning (12 câu)</button>
                    <button class="idiom-tab-btn" id="idiom-tab-4" onclick="filterIdioms(4)">Unit 4: Change & Technology (10 câu)</button>
                  </div>

                  <div class="idiom-body" id="idiom-items-container">
                    <!-- Populated dynamically via JS -->
                  </div>
                </div>
              </div>

            </div>

            <script>
              // Complete Destination C1 & C2 Phrasal Verbs Database
              const FULL_VOCAB_DATABASE = {final_data_json};

              // Complete Destination C1 & C2 Idioms Practice Tests
              const FULL_IDIOM_DATABASE = {idiom_data_json};

              let currentTopicFilter = 'all'; // 'all' or unit number
              let currentFilteredQuests = [...FULL_VOCAB_DATABASE];
              let currentQuestIndex = 0;

              let gameState = {{
                coins: 120,
                harmony: 85,
                activeQuest: null
              }};

              const canvas = document.getElementById('street-canvas');
              const ctx = canvas ? canvas.getContext('2d') : null;
              let cats = [];

              function resizeCanvas() {{
                if (!canvas || !canvas.parentElement) return;
                const w = canvas.parentElement.clientWidth;
                const h = canvas.parentElement.clientHeight;
                if (w > 0 && h > 0) {{
                  canvas.width = w;
                  canvas.height = h;
                }}
              }}
              window.addEventListener('resize', resizeCanvas);
              resizeCanvas();

              class CatVillager {{
                constructor(x, y, speed, name, sprite, unit) {{
                  this.x = x;
                  this.y = y;
                  this.speed = speed;
                  this.name = name;
                  this.sprite = sprite;
                  this.unit = unit;
                  this.bobble = Math.random() * Math.PI;
                  this.hasQuest = true;
                }}

                update() {{
                  this.x += this.speed;
                  this.bobble += 0.08;
                  const w = (canvas && canvas.width > 0) ? canvas.width : 1000;
                  if (this.x > w + 60) this.x = -60;
                  if (this.x < -60) this.x = w + 60;
                }}

                draw() {{
                  if (!ctx) return;
                  ctx.save();
                  const offsetY = Math.sin(this.bobble) * 4;

                  // Shadow
                  ctx.fillStyle = "rgba(0,0,0,0.12)";
                  ctx.beginPath();
                  ctx.ellipse(this.x + 24, this.y + 50, 22, 7, 0, 0, Math.PI * 2);
                  ctx.fill();

                  // Sprite
                  ctx.font = "42px 'Fredoka', sans-serif";
                  ctx.textAlign = "center";
                  ctx.fillText(this.sprite, this.x + 24, this.y + 40 + offsetY);

                  // Quest Icon
                  if (this.hasQuest) {{
                    ctx.fillStyle = "#FFF";
                    ctx.strokeStyle = "#4E342E";
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    if (ctx.roundRect) {{
                      ctx.roundRect(this.x - 6, this.y - 20 + offsetY, 60, 32, 10);
                    }} else {{
                      ctx.rect(this.x - 6, this.y - 20 + offsetY, 60, 32);
                    }}
                    ctx.fill();
                    ctx.stroke();

                    ctx.font = "15px sans-serif";
                    ctx.fillText("💬U" + this.unit, this.x + 24, this.y + 2 + offsetY);
                  }}
                  ctx.restore();
                }}
              }}

              function initCats() {{
                cats = [
                  new CatVillager(50, 380, 0.7, "Kuro", "🎓", 2),
                  new CatVillager(180, 390, -0.6, "Kotaro", "🔧", 4),
                  new CatVillager(310, 375, 0.8, "Mikan", "🍵", 6),
                  new CatVillager(440, 385, -0.7, "Tora", "🐎", 8),
                  new CatVillager(570, 380, 0.6, "Kiki", "📢", 10),
                  new CatVillager(700, 375, -0.8, "Ichi", "🪵", 16),
                  new CatVillager(830, 385, 0.7, "Chiyo", "🩺", 18),
                  new CatVillager(960, 380, -0.6, "Hanako", "🎨", 22),
                  new CatVillager(1080, 385, 0.75, "Tama", "🎮", 26)
                ];
              }}
              initCats();

              function drawStreet() {{
                if (!ctx || !canvas) return;
                if (canvas.width === 0 || canvas.height === 0) {{
                  resizeCanvas();
                }}
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Distant Hills
                ctx.fillStyle = "#D7E9D7";
                ctx.beginPath();
                ctx.arc(160, 280, 160, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(580, 290, 200, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(960, 280, 160, Math.PI, 0);
                ctx.fill();

                // Themed Buildings
                const buildingWidth = 130;
                const buildings = [
                  {{ title: "Academy (U2)", roof: "#C62828", icon: "📜", x: 10 }},
                  {{ title: "Workshop (U4)", roof: "#455A64", icon: "⚙️", x: 155 }},
                  {{ title: "Pavilion (U6)", roof: "#2E7D32", icon: "🍵", x: 300 }},
                  {{ title: "Station (U8)", roof: "#0284C7", icon: "🐎", x: 445 }},
                  {{ title: "Gazette (U10)", roof: "#D84315", icon: "📢", x: 590 }},
                  {{ title: "Guild (U16)", roof: "#6D28D9", icon: "🏛️", x: 735 }},
                  {{ title: "Plaza (U24)", roof: "#DB2777", icon: "🌸", x: 880 }},
                  {{ title: "Arcade (U26)", roof: "#059669", icon: "🎮", x: 1025 }}
                ];

                buildings.forEach(b => {{
                  ctx.fillStyle = "#F5EBE6";
                  ctx.strokeStyle = "#4E342E";
                  ctx.lineWidth = 4;
                  ctx.fillRect(b.x, 160, buildingWidth, 180);
                  ctx.strokeRect(b.x, 160, buildingWidth, 180);

                  ctx.strokeStyle = "#8D6E63";
                  ctx.lineWidth = 3;
                  ctx.strokeRect(b.x + 10, 180, buildingWidth - 20, 140);
                  ctx.strokeRect(b.x + 30, 220, 70, 100);

                  // Roof
                  ctx.fillStyle = b.roof;
                  ctx.beginPath();
                  ctx.moveTo(b.x - 10, 160);
                  ctx.lineTo(b.x + buildingWidth / 2, 115);
                  ctx.lineTo(b.x + buildingWidth + 10, 160);
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();

                  // Signboard
                  ctx.fillStyle = "#FFF";
                  ctx.strokeStyle = "#4E342E";
                  ctx.lineWidth = 2;
                  ctx.fillRect(b.x + 8, 175, buildingWidth - 16, 26);
                  ctx.strokeRect(b.x + 8, 175, buildingWidth - 16, 26);

                  ctx.fillStyle = "#3E2723";
                  ctx.font = "bold 11px sans-serif";
                  ctx.textAlign = "center";
                  ctx.fillText(b.icon + " " + b.title, b.x + buildingWidth / 2, 192);
                }});

                // Cobblestone Road
                ctx.fillStyle = "#D7CCC8";
                ctx.fillRect(0, 340, canvas.width, canvas.height - 340);
                ctx.strokeStyle = "#8D6E63";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(0, 340);
                ctx.lineTo(canvas.width, 340);
                ctx.stroke();

                // Decorative stones
                ctx.fillStyle = "#BCAAA4";
                for (let i = 20; i < canvas.width; i += 70) {{
                  ctx.beginPath();
                  ctx.ellipse(i, 400 + (i % 30), 16, 8, 0, 0, Math.PI * 2);
                  ctx.fill();
                }}

                // Update and draw cats
                cats.forEach(cat => {{
                  cat.update();
                  cat.draw();
                }});

                requestAnimationFrame(drawStreet);
              }}
              requestAnimationFrame(drawStreet);

              // Click handler on canvas to talk to cat or shop
              if (canvas) {{
                canvas.addEventListener('click', (e) => {{
                  const rect = canvas.getBoundingClientRect();
                  const clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
                  const clickY = (e.clientY - rect.top) * (canvas.height / rect.height);

                  let clickedCat = null;
                  for (let cat of cats) {{
                    if (Math.abs(clickX - (cat.x + 24)) < 45 && Math.abs(clickY - (cat.y + 20)) < 55) {{
                      clickedCat = cat;
                      break;
                    }}
                  }}

                  if (clickedCat) {{
                    openRandomQuest(clickedCat.unit);
                  }} else {{
                    openRandomQuest(currentTopicFilter === 'all' ? null : currentTopicFilter);
                  }}
                }});
              }}

              function setTopicFilter(unitId) {{
                currentTopicFilter = unitId;
                document.querySelectorAll('#neko-michi-vocab-root .shop-slot-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('filter-btn-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                if (unitId === 'all') {{
                  currentFilteredQuests = [...FULL_VOCAB_DATABASE];
                  document.getElementById('current-unit-display').innerText = "Tất Cả Units (" + FULL_VOCAB_DATABASE.length + " câu)";
                }} else {{
                  currentFilteredQuests = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                  const title = currentFilteredQuests.length > 0 ? currentFilteredQuests[0].unitTitle : "Unit " + unitId;
                  document.getElementById('current-unit-display').innerText = title + " (" + currentFilteredQuests.length + " câu)";
                }}
                currentQuestIndex = 0;
              }}

              function openRandomQuest(unitId) {{
                let questList = currentFilteredQuests;
                if (unitId && unitId !== 'all') {{
                  const list = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                  if (list.length > 0) questList = list;
                }}
                if (questList.length === 0) questList = FULL_VOCAB_DATABASE;

                const q = questList[Math.floor(Math.random() * questList.length)];
                gameState.activeQuest = q;
                displayQuest(q);
              }}

              function displayQuest(q) {{
                document.getElementById('modal-cat-name').innerText = q.speaker;
                document.getElementById('modal-cat-avatar').innerText = q.avatar;
                document.getElementById('modal-shop-name').innerText = q.shop + " Quest";
                document.getElementById('modal-unit-tag').innerText = q.unitTitle;
                document.getElementById('modal-sentence').innerHTML = q.sentence;
                document.getElementById('modal-hint').innerText = "💡 Hint: " + q.hint;

                const optContainer = document.getElementById('modal-options');
                optContainer.innerHTML = '';

                const feedback = document.getElementById('modal-feedback');
                feedback.className = 'feedback-box';
                feedback.style.display = 'none';

                const nextBtn = document.getElementById('modal-next-btn');
                nextBtn.style.display = 'none';

                q.options.forEach((opt, idx) => {{
                  const btn = document.createElement('button');
                  btn.className = 'opt-btn';
                  btn.innerText = (['A', 'B', 'C', 'D'][idx]) + ". " + opt;
                  btn.onclick = () => selectOption(idx, btn, q);
                  optContainer.appendChild(btn);
                }});

                document.getElementById('quest-modal').classList.add('active');
              }}

              function selectOption(idx, btn, q) {{
                const optButtons = document.querySelectorAll('#neko-michi-vocab-root .opt-btn');
                optButtons.forEach(b => b.disabled = true);

                const feedback = document.getElementById('modal-feedback');
                const nextBtn = document.getElementById('modal-next-btn');

                if (idx === q.correct) {{
                  btn.classList.add('correct');
                  feedback.className = 'feedback-box correct';
                  feedback.innerHTML = "🎉 " + q.explanation;
                  feedback.style.display = 'block';

                  gameState.coins += 15;
                  gameState.harmony = Math.min(100, gameState.harmony + 2);
                  document.getElementById('coin-counter').innerText = gameState.coins;
                  document.getElementById('harmony-counter').innerText = gameState.harmony + "%";
                }} else {{
                  btn.classList.add('wrong');
                  if (optButtons[q.correct]) optButtons[q.correct].classList.add('correct');
                  feedback.className = 'feedback-box wrong';
                  feedback.innerHTML = "❌ Chưa đúng rồi! " + q.explanation;
                  feedback.style.display = 'block';
                }}

                nextBtn.style.display = 'inline-block';
              }}

              function nextQuestInFilter() {{
                openRandomQuest(currentTopicFilter);
              }}

              function closeQuestModal() {{
                document.getElementById('quest-modal').classList.remove('active');
              }}

              // Handbook Modal Functions
              function openHandbookModal() {{
                filterHandbook('all');
                document.getElementById('dict-modal').classList.add('active');
              }}

              function closeHandbookModal() {{
                document.getElementById('dict-modal').classList.remove('active');
              }}

              function filterHandbook(unitId) {{
                document.querySelectorAll('#neko-michi-vocab-root .dict-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('dict-tab-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                const container = document.getElementById('dict-items-container');
                container.innerHTML = '';

                const list = unitId === 'all' 
                  ? FULL_VOCAB_DATABASE 
                  : FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);

                list.forEach(item => {{
                  const card = document.createElement('div');
                  card.className = 'dict-item-card';
                  card.innerHTML = `
                    <div class="dict-item-header">
                      <span class="dict-verb">✨ ${{item.verb}}</span>
                      <span class="dict-unit-badge">${{item.unitTitle}}</span>
                    </div>
                    <div class="dict-meaning-en">📖 <strong>Meaning:</strong> ${{item.meaningEn}}</div>
                    <div class="dict-meaning-vn">🇻🇳 <strong>Nghĩa:</strong> ${{item.meaningVn}}</div>
                    <div style="font-size:13px; color:#4B5563; font-style:italic; margin-top:2px;">
                      💬 <strong>Context:</strong> ${{item.sentence.replace(/<span class='blank'>_______<\\/span>/g, `<u><strong>${{item.verb}}</strong></u>`)}}
                    </div>
                  `;
                  container.appendChild(card);
                }});
              }}

              // Idioms Practice Modal Functions
              function openIdiomModal() {{
                filterIdioms('all');
                document.getElementById('idiom-modal').classList.add('active');
              }}

              function closeIdiomModal() {{
                document.getElementById('idiom-modal').classList.remove('active');
              }}

              function filterIdioms(unitId) {{
                document.querySelectorAll('#neko-michi-vocab-root .idiom-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('idiom-tab-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                const container = document.getElementById('idiom-items-container');
                container.innerHTML = '';

                const list = unitId === 'all'
                  ? FULL_IDIOM_DATABASE
                  : FULL_IDIOM_DATABASE.filter(q => q.unit === unitId);

                list.forEach((item, qIdx) => {{
                  const card = document.createElement('div');
                  card.className = 'idiom-test-card';
                  
                  let optionsHtml = '';
                  const letters = ['A', 'B', 'C', 'D'];
                  item.options.forEach((opt, optIdx) => {{
                    optionsHtml += `
                      <button class="idiom-opt-btn" onclick="checkIdiomAnswer(this, ${{item.id}}, ${{optIdx}}, ${{item.correct}})">
                        ${{letters[optIdx]}}. ${{opt}}
                      </button>
                    `;
                  }});

                  card.innerHTML = `
                    <div class="idiom-q-header">
                      <span class="idiom-q-num">Question #${{item.id}} (${{item.unitTitle}})</span>
                    </div>
                    <div class="idiom-q-text">${{item.question}}</div>
                    <div class="idiom-options-grid" id="idiom-opts-${{item.id}}">
                      ${{optionsHtml}}
                    </div>
                    <div class="idiom-expl-box" id="idiom-expl-${{item.id}}">
                      ${{item.explanation}}
                    </div>
                  `;
                  container.appendChild(card);
                }});
              }}

              function checkIdiomAnswer(btn, itemId, selectedIdx, correctIdx) {{
                const parent = document.getElementById('idiom-opts-' + itemId);
                if (!parent) return;
                const buttons = parent.querySelectorAll('.idiom-opt-btn');
                buttons.forEach(b => b.disabled = true);

                const explBox = document.getElementById('idiom-expl-' + itemId);

                if (selectedIdx === correctIdx) {{
                  btn.classList.add('correct');
                  if (explBox) {{
                    explBox.style.display = 'block';
                    explBox.style.background = '#ECFDF5';
                    explBox.style.borderColor = '#059669';
                    explBox.style.color = '#065F46';
                    explBox.innerHTML = '🎉 <strong>Chính xác!</strong> ' + explBox.innerHTML;
                  }}
                  gameState.coins += 20;
                  gameState.harmony = Math.min(100, gameState.harmony + 3);
                  document.getElementById('coin-counter').innerText = gameState.coins;
                  document.getElementById('harmony-counter').innerText = gameState.harmony + '%';
                }} else {{
                  btn.classList.add('wrong');
                  if (buttons[correctIdx]) buttons[correctIdx].classList.add('correct');
                  if (explBox) {{
                    explBox.style.display = 'block';
                    explBox.style.background = '#FEF2F2';
                    explBox.style.borderColor = '#DC2626';
                    explBox.style.color = '#991B1B';
                    explBox.innerHTML = '❌ <strong>Chưa đúng:</strong> ' + explBox.innerHTML;
                  }}
                }}
              }}
            </script>
          </div>
        </section>
'''

# Read index.html
with open('c:/hsg2627.github.io/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

start_marker = '<!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 ==================== -->'
end_marker = '<!-- ==================== VIEW 6B: SUBTASK - COMPREHENSIVE GRAMMAR (CGEL ACADEMIC EDITION) ==================== -->'

p1 = html.find(start_marker)
p2 = html.find(end_marker)

if p1 == -1 or p2 == -1:
    print(f"Error: Markers not found! p1={p1}, p2={p2}")
    exit(1)

new_html = html[:p1] + section_html + html[p2:]

with open('c:/hsg2627.github.io/index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("SUCCESS: index.html has been updated with Unit 26 & Idiom Practice Tests!")
