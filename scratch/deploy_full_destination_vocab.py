# -*- coding: utf-8 -*-
import json
import re

DATA = [
    # ==================== UNIT 2: THINKING AND LEARNING ====================
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Scholar Kuro",
        "avatar": "🎓",
        "verb": "brush up on",
        "sentence": "I have an examination tomorrow; I must <span class='blank'>_______</span> my literature notes tonight.",
        "hint": "practice and improve your skills or knowledge | chải chuốt, ôn lại kiến thức",
        "meaningEn": "practice and improve your skills or knowledge of sth",
        "meaningVn": "chải chuốt, ôn lại kiến thức",
        "options": ["brush up on", "come round to", "figure out", "take in"],
        "correct": 0,
        "explanation": "Đúng! 'Brush up on' nghĩa là ôn tập, trau dồi lại kiến thức hoặc kỹ năng."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Elder Daifuku",
        "avatar": "📜",
        "verb": "come round to",
        "sentence": "At first the council opposed the reform, but they finally <span class='blank'>_______</span> our proposal.",
        "hint": "change your opinion or decision because sb has persuaded you | đổi ý vì bị ai đó thuyết phục",
        "meaningEn": "change your opinion or decision because sb has persuaded you to agree with them",
        "meaningVn": "đổi ý vì bị ai đó thuyết phục",
        "options": ["come round to", "hit upon", "think over", "read up on"],
        "correct": 0,
        "explanation": "Chính xác! 'Come round to' nghĩa là thay đổi quan điểm sau khi được thuyết phục."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Professor Tama",
        "avatar": "🐱",
        "verb": "come up with",
        "sentence": "The research team managed to <span class='blank'>_______</span> an ingenious hypothesis for the experiment.",
        "hint": "think of an idea or plan | nảy ra ý tưởng, kế hoạch",
        "meaningEn": "think of sth such as an idea or plan",
        "meaningVn": "nảy ra ý tưởng, phát minh",
        "options": ["come up with", "face up to", "puzzle out", "swot up on"],
        "correct": 0,
        "explanation": "Rất tốt! 'Come up with' là nảy ra ý tưởng hoặc đề xuất một kế hoạch."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Master Natsume",
        "avatar": "🐾",
        "verb": "face up to",
        "sentence": "You must <span class='blank'>_______</span> the fact that the experimental data did not match the theory.",
        "hint": "accept sth and try to deal with it | đối diện sự thật",
        "meaningEn": "accept sth and try to deal with it",
        "meaningVn": "chấp nhận đối diện với thực tế",
        "options": ["face up to", "make out", "piece together", "think up"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Face up to' là can đảm đối diện và xử lý sự thật khó khăn."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Scholar Kuro",
        "avatar": "🎓",
        "verb": "figure out",
        "sentence": "We spent hours analyzing the ciphertext to <span class='blank'>_______</span> the hidden message.",
        "hint": "be able to understand sth or solve a problem | hiểu ra, giải quyết vấn đề",
        "meaningEn": "be able to understand sth or solve a problem",
        "meaningVn": "hiểu ra, giải quyết được gì đó",
        "options": ["figure out", "come up with", "think through", "mull over"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Figure out' mang nghĩa tính toán ra, tìm ra cách giải quyết vấn đề."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Elder Daifuku",
        "avatar": "📜",
        "verb": "hit upon",
        "sentence": "While strolling in the bamboo grove, she <span class='blank'>_______</span> the solution to the riddle.",
        "hint": "suddenly have an idea or discover sth by chance | đột nhiên nảy ra ý tưởng",
        "meaningEn": "suddenly have an idea; discover sth by chance",
        "meaningVn": "đột nhiên nảy ra ý tưởng, vô tình phát hiện",
        "options": ["hit upon", "brush up on", "make out", "swot up on"],
        "correct": 0,
        "explanation": "Chính xác! 'Hit upon' là bất chợt nảy ra một phát kiến hay ý tưởng."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Professor Tama",
        "avatar": "🐱",
        "verb": "make out",
        "sentence": "The old parchment was so faded that we could barely <span class='blank'>_______</span> the signature.",
        "hint": "see, hear or understand sb or sth with difficulty | nhận ra/hiểu cách khó khăn",
        "meaningEn": "see, hear or understand sb or sth with difficulty; suggest; imply",
        "meaningVn": "hiểu/nhận ra một cách khó khăn; gợi ý",
        "options": ["make out", "piece together", "think over", "take in"],
        "correct": 0,
        "explanation": "Đúng! 'Make out' là nhìn/nghe/hiểu một cách khó khăn."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Master Natsume",
        "avatar": "🐾",
        "verb": "mull over",
        "sentence": "Take a few days to <span class='blank'>_______</span> the job contract before accepting.",
        "hint": "think carefully about sth over a period of time | suy ngẫm kỹ lưỡng",
        "meaningEn": "think carefully about sth over a period of time",
        "meaningVn": "dành thời gian nghĩ kỹ về một vấn đề",
        "options": ["mull over", "face up to", "puzzle out", "come up with"],
        "correct": 0,
        "explanation": "Chính xác! 'Mull over' nghĩa là suy ngẫm, cân nhắc kỹ càng qua thời gian."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Scholar Kuro",
        "avatar": "🎓",
        "verb": "piece together",
        "sentence": "The historians had to <span class='blank'>_______</span> fragments of folklore to understand the dynasty.",
        "hint": "learn the truth by considering all separate bits of information | xâu chuỗi thông tin",
        "meaningEn": "learn the truth about sth by considering all the separate bits of information",
        "meaningVn": "tìm ra sự thật bằng cách xâu chuỗi các mảnh ghép thông tin",
        "options": ["piece together", "brush up on", "think up", "read up on"],
        "correct": 0,
        "explanation": "Tuyệt hảo! 'Piece together' là lắp ghép các bằng chứng/thông tin rời rạc."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Elder Daifuku",
        "avatar": "📜",
        "verb": "puzzle out",
        "sentence": "The students worked diligently to <span class='blank'>_______</span> the complex logic paradox.",
        "hint": "discover or understand sth by thinking hard about it | vắt óc suy nghĩ để hiểu",
        "meaningEn": "discover or understand sth by thinking hard about it",
        "meaningVn": "khám phá, tìm hiểu vấn đề bằng cách suy nghĩ liên tục",
        "options": ["puzzle out", "hit upon", "come round to", "take in"],
        "correct": 0,
        "explanation": "Rất chuẩn! 'Puzzle out' là khổ công suy nghĩ để tìm ra lời giải."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Professor Tama",
        "avatar": "🐱",
        "verb": "read up on",
        "sentence": "Before traveling abroad, she made sure to <span class='blank'>_______</span> local customs and laws.",
        "hint": "get information on a subject by reading a lot about it | đọc nhiều để tìm hiểu",
        "meaningEn": "get information on a particular subject by reading a lot about it",
        "meaningVn": "nghiên cứu, dành thời gian đọc nhiều tài liệu về chủ đề nào đó",
        "options": ["read up on", "make out", "think through", "face up to"],
        "correct": 0,
        "explanation": "Đúng! 'Read up on' nghĩa là tra cứu, đọc nhiều sách vở."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Scholar Kuro",
        "avatar": "🎓",
        "verb": "swot up on",
        "sentence": "He stayed up until midnight to <span class='blank'>_______</span> grammar rules for the HSG exam.",
        "hint": "study sth very hard, especially for an examination | học siêng năng ôn thi",
        "meaningEn": "study sth very hard, especially for an examination",
        "meaningVn": "học cày cuốc chăm chỉ để chuẩn bị cho kỳ thi",
        "options": ["swot up on", "come up with", "mull over", "piece together"],
        "correct": 0,
        "explanation": "Chính xác! 'Swot up on' là ôn thi, dùi mài kinh sử cấp tốc."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Master Natsume",
        "avatar": "🐾",
        "verb": "take in",
        "sentence": "There was so much dense theory in the seminar that I couldn't <span class='blank'>_______</span> it all.",
        "hint": "understand and remember sth; accept as real | tiếp thu, hiểu và ghi nhớ",
        "meaningEn": "understand and remember sth that you hear or read; accept sth as true",
        "meaningVn": "hiểu và nhớ kiến thức; tiếp thu điều được nghe/đọc",
        "options": ["take in", "figure out", "think over", "hit upon"],
        "correct": 0,
        "explanation": "Tuyệt! 'Take in' là tiếp thu, lĩnh hội thông tin vào đầu."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Elder Daifuku",
        "avatar": "📜",
        "verb": "think over",
        "sentence": "The director asked the board to <span class='blank'>_______</span> the merger offer thoroughly.",
        "hint": "consider a problem or decision carefully | cân nhắc kỹ lưỡng",
        "meaningEn": "consider a problem or decision carefully",
        "meaningVn": "cân nhắc vấn đề hoặc quyết định một cách kỹ lưỡng",
        "options": ["think over", "brush up on", "puzzle out", "come round to"],
        "correct": 0,
        "explanation": "Đúng! 'Think over' là suy nghĩ, cân nhắc kỹ trước khi kết luận."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Professor Tama",
        "avatar": "🐱",
        "verb": "think through",
        "sentence": "Before launching the strategy, you must <span class='blank'>_______</span> every possible scenario.",
        "hint": "consider facts in an organized and thorough way | suy nghĩ thấu đáo từ đầu đến cuối",
        "meaningEn": "consider the facts about sth in an organized and thorough way",
        "meaningVn": "suy nghĩ thấu đáo một cách có tổ chức và cặn kẽ",
        "options": ["think through", "make out", "hit upon", "read up on"],
        "correct": 0,
        "explanation": "Rất chuẩn! 'Think through' là tư duy thấu đáo, tính hết mọi rủi ro."
    },
    {
        "unit": 2,
        "unitTitle": "Unit 2: Thinking & Learning",
        "shop": "Scholar Academy",
        "speaker": "Master Natsume",
        "avatar": "🐾",
        "verb": "think up",
        "sentence": "The mischievous student tried to <span class='blank'>_______</span> an elaborate excuse for being late.",
        "hint": "invent or imagine sth, especially an excuse | bịa ra, nghĩ ra cớ",
        "meaningEn": "invent or imagine sth, especially an excuse",
        "meaningVn": "nghĩ ra, bịa ra cái cớ",
        "options": ["think up", "face up to", "mull over", "swot up on"],
        "correct": 0,
        "explanation": "Chính xác! 'Think up' là phát minh, bịa ra một câu chuyện hay lời giải thích."
    },

    # ==================== UNIT 4: CHANGE AND TECHNOLOGY ====================
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "back up",
        "sentence": "Always remember to <span class='blank'>_______</span> your project files onto an external drive.",
        "hint": "make a copy of computer info; give support | sao lưu dữ liệu / ủng hộ",
        "meaningEn": "make a copy of information on your computer; give support to sb",
        "meaningVn": "sao chép thông tin dự phòng; ủng hộ ai đó",
        "options": ["back up", "change into", "mix up", "switch on"],
        "correct": 0,
        "explanation": "Chính xác! 'Back up' là tạo bản sao lưu dữ liệu máy tính."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Engineer Ren",
        "avatar": "⚙️",
        "verb": "change around",
        "sentence": "Let's <span class='blank'>_______</span> the laboratory furniture to create more workspace.",
        "hint": "move things to different positions | đổi chỗ, thay đổi vị trí",
        "meaningEn": "move things so that they are in different places or positions",
        "meaningVn": "thay đổi vị trí sắp xếp đồ vật",
        "options": ["change around", "do away with", "wear out", "fade away"],
        "correct": 0,
        "explanation": "Đúng! 'Change around' là hoán đổi vị trí sắp đặt các vật."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Artisan Suzume",
        "avatar": "🧪",
        "verb": "change into",
        "sentence": "In winter, water can freeze and <span class='blank'>_______</span> solid ice crystal structures.",
        "hint": "stop being in one state and become another | biến thành trạng thái khác",
        "meaningEn": "stop being in one state, condition or form and start being in another",
        "meaningVn": "chuyển hoặc khiến vật chuyển sang trạng thái khác; thay quần áo",
        "options": ["change into", "back up", "use up", "test out"],
        "correct": 0,
        "explanation": "Chính xác! 'Change into' là chuyển đổi trạng thái hoặc thay trang phục."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "change out of",
        "sentence": "After fixing the oily gears, Kotaro quickly <span class='blank'>_______</span> his dirty coveralls.",
        "hint": "take off clothes and put on different ones | cởi bỏ trang phục đang mặc",
        "meaningEn": "take off the clothes you are wearing and put on different ones",
        "meaningVn": "thay bộ quần áo đang mặc thành bộ khác",
        "options": ["change out of", "key in", "mix up", "make into"],
        "correct": 0,
        "explanation": "Đúng! 'Change out of' là thay bộ đồ đang mặc ra."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Engineer Ren",
        "avatar": "⚙️",
        "verb": "do away with",
        "sentence": "The new automation software will completely <span class='blank'>_______</span> tedious manual paperwork.",
        "hint": "get rid of sth | bãi bỏ, loại trừ",
        "meaningEn": "get rid of sth",
        "meaningVn": "vứt bỏ, bãi bỏ cái gì đó không cần thiết",
        "options": ["do away with", "do up", "turn into", "take apart"],
        "correct": 0,
        "explanation": "Tuyệt! 'Do away with' là vứt bỏ, xóa bỏ hoàn toàn một phương thức cũ."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Artisan Suzume",
        "avatar": "🧪",
        "verb": "do up",
        "sentence": "They hired an architect to <span class='blank'>_______</span> the vintage workshop facade.",
        "hint": "repair, paint and improve old building; fasten | tân trang, làm mới; thắt dây",
        "meaningEn": "repair, paint and improve an old building, car, boat; fasten clothing",
        "meaningVn": "tân trang, sửa chữa làm mới; thắt/cài lại (quần áo)",
        "options": ["do up", "fade away", "use up", "switch off"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Do up' mang nghĩa tân trang nhà cửa hoặc cài/thắt nút quần áo."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "fade away",
        "sentence": "With the rise of digital screens, the use of analog gauges began to <span class='blank'>_______</span>.",
        "hint": "disappear slowly | dần dần mờ nhạt, biến mất",
        "meaningEn": "disappear slowly",
        "meaningVn": "dần dần phai mờ, biến mất",
        "options": ["fade away", "key in", "change around", "test out"],
        "correct": 0,
        "explanation": "Đúng! 'Fade away' là mờ dần rồi biến mất theo thời gian."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Engineer Ren",
        "avatar": "⚙️",
        "verb": "key in",
        "sentence": "You must <span class='blank'>_______</span> your passcode to unlock the secure server console.",
        "hint": "put information into computer using keys | nhập dữ liệu bằng bàn phím",
        "meaningEn": "put information into a computer or electronic machine using keys",
        "meaningVn": "nhập dữ liệu vào máy tính bằng bàn phím",
        "options": ["key in", "turn into", "wear out", "change into"],
        "correct": 0,
        "explanation": "Chính xác! 'Key in' là gõ/nhập mã hoặc dữ liệu bằng bàn phím."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Artisan Suzume",
        "avatar": "🧪",
        "verb": "make into",
        "sentence": "The inventors aim to <span class='blank'>_______</span> recycled plastic filaments into sturdy robotic limbs.",
        "hint": "change sb/sth so they become sth else | biến đổi thành cái gì",
        "meaningEn": "change sb or sth so that they become sth else",
        "meaningVn": "biến đổi người/vật thành cái khác",
        "options": ["make into", "back up", "mix up", "do away with"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Make into' là chế tạo/biến đổi nguyên liệu thành sản phẩm mới."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "mix up",
        "sentence": "Label each vial carefully so you don't <span class='blank'>_______</span> the chemical compounds.",
        "hint": "put things together without order; confuse | xáo trộn, nhầm lẫn",
        "meaningEn": "put things together without any order; confuse one thing with another",
        "meaningVn": "trộn lẫn lộn không trật tự; nhầm lẫn đối tượng",
        "options": ["mix up", "take apart", "switch on", "do up"],
        "correct": 0,
        "explanation": "Đúng! 'Mix up' là làm lẫn lộn hoặc nhầm lẫn giữa các thứ với nhau."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Engineer Ren",
        "avatar": "⚙️",
        "verb": "switch on",
        "sentence": "Press the green valve handle to <span class='blank'>_______</span> the main steam turbine.",
        "hint": "start a machine or light working | bật công tắc khởi động",
        "meaningEn": "start a machine/light/etc working",
        "meaningVn": "mở/bật máy móc, thiết bị điện",
        "options": ["switch on", "fade away", "use up", "change out of"],
        "correct": 0,
        "explanation": "Chính xác! 'Switch on' là bật công tắc nguồn hoạt động."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "take apart",
        "sentence": "To repair the grandfather clock, Kotaro had to <span class='blank'>_______</span> the entire gear mechanism.",
        "hint": "separate an object into pieces | tháo rời từng bộ phận",
        "meaningEn": "separate an object into pieces",
        "meaningVn": "tháo rời đồ vật thành nhiều mảnh",
        "options": ["take apart", "turn into", "fade away", "wear out"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Take apart' là rã máy, tháo rời thiết bị thành các linh kiện."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Artisan Suzume",
        "avatar": "🧪",
        "verb": "test out",
        "sentence": "The aerospace lab will <span class='blank'>_______</span> the new wing alloy in a high-speed wind tunnel.",
        "hint": "try using a machine/product to see if it works | thử nghiệm kiểm tra",
        "meaningEn": "try using sth to find out whether it works correctly or is satisfactory",
        "meaningVn": "kiểm tra thử xem máy móc/sản phẩm có hoạt động tốt không",
        "options": ["test out", "do away with", "change around", "key in"],
        "correct": 0,
        "explanation": "Đúng! 'Test out' là chạy thử nghiệm kiểm định chất lượng."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Engineer Ren",
        "avatar": "⚙️",
        "verb": "turn into",
        "sentence": "With continuous innovation, the small workshop will <span class='blank'>_______</span> an industrial empire.",
        "hint": "change or develop into sth different | phát triển trở thành",
        "meaningEn": "change or develop into sth different; make sth develop into sth different",
        "meaningVn": "biến thành, phát triển thành một thứ hoàn toàn khác",
        "options": ["turn into", "mix up", "back up", "wear out"],
        "correct": 0,
        "explanation": "Rất tốt! 'Turn into' là biến chuyển thành một thực thể mới."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Mechanic Kotaro",
        "avatar": "🔧",
        "verb": "use up",
        "sentence": "Don't run the backup generators unnecessarily or you will <span class='blank'>_______</span> all the fuel.",
        "hint": "use all of a supply of sth | dùng hết sạch, cạn kiệt",
        "meaningEn": "use all of a supply of sth",
        "meaningVn": "cạn kiệt, sử dụng hết sạch tài nguyên",
        "options": ["use up", "do up", "change into", "fade away"],
        "correct": 0,
        "explanation": "Chính xác! 'Use up' nghĩa là tiêu thụ hết nhẵn tài nguyên dự trữ."
    },
    {
        "unit": 4,
        "unitTitle": "Unit 4: Change & Technology",
        "shop": "Clockwork Workshop",
        "speaker": "Artisan Suzume",
        "avatar": "🧪",
        "verb": "wear out",
        "sentence": "Constant friction against steel rails will eventually <span class='blank'>_______</span> the train's brake pads.",
        "hint": "use sth so much it no longer works | hao mòn, sờn rách hư hỏng",
        "meaningEn": "use sth a lot so that it no longer works; or can no longer be used",
        "meaningVn": "dùng nhiều đến mức bị mòn, hư hỏng, rách cũ",
        "options": ["wear out", "switch on", "key in", "change around"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Wear out' là bị mài mòn, hỏng hóc sau thời gian dài sử dụng."
    },

    # ==================== UNIT 6: TIME AND WORK ====================
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "crop up",
        "sentence": "Unexpected delivery delays always seem to <span class='blank'>_______</span> during the festive season.",
        "hint": "appear or happen suddenly or unexpectedly | xuất hiện bất ngờ",
        "meaningEn": "appear or happen suddenly or unexpectedly",
        "meaningVn": "xuất hiện một cách bất chợt, ngoài dự kiến",
        "options": ["crop up", "dive in", "knock off", "wind down"],
        "correct": 0,
        "explanation": "Chính xác! 'Crop up' là bất thình lình nảy sinh vấn đề."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "dive in",
        "sentence": "Once the recipe was finalized, the apprentice bakers were eager to <span class='blank'>_______</span>.",
        "hint": "start doing sth in a very enthusiastic way | bắt tay làm hăng say",
        "meaningEn": "start doing sth in a very enthusiastic way",
        "meaningVn": "bắt đầu làm việc gì đó một cách đầy hào hứng, say mê",
        "options": ["dive in", "lay off", "make up", "while away"],
        "correct": 0,
        "explanation": "Đúng! 'Dive in' là lao vào làm việc với tinh thần nhiệt huyết."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "end up",
        "sentence": "If you neglect quality control, you will <span class='blank'>_______</span> with ruined batches of pastries.",
        "hint": "be in a particular place or state after doing sth | rốt cuộc, kết cục là",
        "meaningEn": "be in a particular place or state after doing sth or because of doing it",
        "meaningVn": "rốt cuộc là, cuối cùng rơi vào trạng thái/kết quả gì",
        "options": ["end up", "kick off", "knuckle down to", "press ahead with"],
        "correct": 0,
        "explanation": "Chuẩn! 'End up' là cuối cùng dẫn đến kết cục/tình cảnh nào đó."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "kick off with",
        "sentence": "The tea ceremony festival will <span class='blank'>_______</span> an exquisite matcha tasting demonstration.",
        "hint": "begin with | bắt đầu với sự kiện gì",
        "meaningEn": "begin (with)",
        "meaningVn": "bắt đầu, khởi động bằng việc gì",
        "options": ["kick off with", "knock off", "lie ahead", "set out"],
        "correct": 0,
        "explanation": "Chính xác! 'Kick off with' là mở màn, bắt đầu chương trình với tiết mục nào."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "knock off",
        "sentence": "The kitchen staff usually <span class='blank'>_______</span> at 9 PM when the teahouse closes.",
        "hint": "stop working, usually at the end of the day | tan ca, nghỉ làm cuối ngày",
        "meaningEn": "stop working, usually at the end of the day",
        "meaningVn": "ngừng làm việc, tan làm (thường là cuối ngày)",
        "options": ["knock off", "dive in", "take on", "tide over"],
        "correct": 0,
        "explanation": "Tuyệt! 'Knock off' là hết giờ làm việc, đóng cửa nghỉ ngơi."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "knuckle down to",
        "sentence": "With the master exam only a week away, it is time to <span class='blank'>_______</span> serious practice.",
        "hint": "start working hard, especially on overdue work | bắt đầu làm việc cật lực",
        "meaningEn": "start working hard, especially when you should have done this earlier",
        "meaningVn": "bắt tay vào làm việc chăm chỉ, tập trung cao độ",
        "options": ["knuckle down to", "crop up", "lay off", "while away"],
        "correct": 0,
        "explanation": "Đúng! 'Knuckle down to' là dồn hết tâm trí vào làm việc nghiêm túc."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "lay off",
        "sentence": "During the off-peak season, the cafe owner had to temporarily <span class='blank'>_______</span> two seasonal assistants.",
        "hint": "end employment temporarily; stop using | cho nghỉ việc tạm thời / ngưng dùng",
        "meaningEn": "end sb's employment temporarily because there is not enough work; stop doing/using",
        "meaningVn": "sa thải, cho nhân viên nghỉ việc tạm thời; ngưng làm gì",
        "options": ["lay off", "make up", "press ahead with", "set out"],
        "correct": 0,
        "explanation": "Chính xác! 'Lay off' là cắt giảm nhân sự do thiếu việc làm."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "lie ahead",
        "sentence": "Challenging apprenticeships <span class='blank'>_______</span>, but great honor awaits those who persevere.",
        "hint": "be going to happen in the future | sắp sửa diễn ra ở phía trước",
        "meaningEn": "if sth lies ahead, it is going to happen to you in the future",
        "meaningVn": "sắp sửa xảy ra trong tương lai, đang chờ đợi phía trước",
        "options": ["lie ahead", "end up", "snowed under with", "wind down"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Lie ahead' là đón đợi trong tương lai."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "make up",
        "sentence": "Since I took Tuesday off for a medical checkup, I worked overtime on Friday to <span class='blank'>_______</span> the hours.",
        "hint": "work at different times to compensate for missed time | làm bù giờ",
        "meaningEn": "work at different times from usual because you have not worked enough at normal times",
        "meaningVn": "làm việc bù cho khoảng thời gian vắng mặt",
        "options": ["make up", "crop up", "knock off", "tide over"],
        "correct": 0,
        "explanation": "Đúng! 'Make up' là làm bù thời gian/công việc đã bị thiếu."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "press ahead with",
        "sentence": "Despite rising tea leaf prices, the pavilion decided to <span class='blank'>_______</span> its menu expansion.",
        "hint": "continue doing sth in a determined way despite difficulties | quyết tâm đẩy mạnh",
        "meaningEn": "continue doing sth in a determined way, despite difficulties or interruptions",
        "meaningVn": "quyết tâm tiếp tục thực hiện dù gặp khó khăn, phản đối",
        "options": ["press ahead with", "dive in", "lay off", "while away"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Press ahead with' là kiên trì tiến hành bất chấp trở ngại."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "set out",
        "sentence": "The founder <span class='blank'>_______</span> with an ambition to brew the finest ceremonial green tea in the province.",
        "hint": "start doing sth in order to achieve an aim | bắt tay vào làm để đạt mục tiêu",
        "meaningEn": "start doing or working on sth in order to achieve an aim",
        "meaningVn": "bắt tay vào thực hiện với một mục tiêu rõ ràng",
        "options": ["set out", "kick off with", "knuckle down to", "take on"],
        "correct": 0,
        "explanation": "Chính xác! 'Set out' là khởi sự nhằm đạt tới đích đến."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "snowed under with",
        "sentence": "With the grand banquet tomorrow, the head chef is completely <span class='blank'>_______</span> catering orders.",
        "hint": "having too much work to deal with | ngập đầu trong công việc",
        "meaningEn": "if you are snowed under with sth, you have too much of sth to deal with",
        "meaningVn": "bị ngợp, ngập đầu trong công việc không xuể",
        "options": ["snowed under with", "knuckled down to", "laid off", "whiled away"],
        "correct": 0,
        "explanation": "Đúng! 'Snowed under with' mô tả tình trạng việc ngập đầu không kịp thở."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "take on",
        "sentence": "To manage the tourist rush, the tea pavilion plans to <span class='blank'>_______</span> five extra servers.",
        "hint": "start to employ sb; accept responsibility | tuyển dụng / nhận thêm việc",
        "meaningEn": "start to employ sb; accept some work or responsibility",
        "meaningVn": "tuyển dụng nhân sự mới; gánh vác trách nhiệm",
        "options": ["take on", "crop up", "end up", "wind down"],
        "correct": 0,
        "explanation": "Chính xác! 'Take on' là tuyển thêm người hoặc nhận thêm việc."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "tide over",
        "sentence": "This cash advance should <span class='blank'>_______</span> the supplier until the invoice is processed.",
        "hint": "help sb get to the end of a difficult period, especially with money | giúp vượt khó",
        "meaningEn": "help sb to get to the end of a difficult period of time, especially giving them money",
        "meaningVn": "giúp ai đó vượt qua giai đoạn khó khăn (nhất là hỗ trợ tiền nong)",
        "options": ["tide over", "dive in", "knock off", "lie ahead"],
        "correct": 0,
        "explanation": "Chuẩn! 'Tide sb over' là cứu cánh, giúp trang trải qua cơn bĩ cực."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Chef Mikan",
        "avatar": "🍵",
        "verb": "while away",
        "sentence": "Customers love to sit on the garden veranda and <span class='blank'>_______</span> the afternoon sipping sencha.",
        "hint": "spend time in a relaxed way when you have nothing else to do | giết thời gian thư thả",
        "meaningEn": "spend time in a relaxed way when you have nothing else to do",
        "meaningVn": "thư giãn, giết thời gian thảnh thơi khi không có gì gấp",
        "options": ["while away", "make up", "press ahead with", "set out"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'While away' là thả hồn thư giãn, tiêu khiển thời gian."
    },
    {
        "unit": 6,
        "unitTitle": "Unit 6: Time & Work",
        "shop": "Matcha Tea Pavilion",
        "speaker": "Tea Master Ryu",
        "avatar": "🫖",
        "verb": "wind down",
        "sentence": "After the festival concluded, the pavilion staff took three days off to <span class='blank'>_______</span> and recuperate.",
        "hint": "gradually reduce work; relax after stress | nghỉ ngơi xả hơi sau bận rộn",
        "meaningEn": "end or finish gradually; reduce work before stopping; relax after excitement/worry",
        "meaningVn": "hoàn thành dần; giảm khối lượng việc; nghỉ ngơi thư giãn sau căng thẳng",
        "options": ["wind down", "kick off with", "knuckle down to", "snowed under with"],
        "correct": 0,
        "explanation": "Chính xác! 'Wind down' là từ từ hạ nhiệt công việc và nghỉ ngơi hồi sức."
    },

    # ==================== UNIT 8: MOVEMENT AND TRANSPORT ====================
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "cordon off",
        "sentence": "Guards had to <span class='blank'>_______</span> the bridge intersection after a freight wagon overturned.",
        "hint": "stop people entering an area with ropes or barriers | phong tỏa khu vực",
        "meaningEn": "stop people from entering an area by putting sth such as a rope around it",
        "meaningVn": "phong tỏa khu vực (do cơ quan có thẩm quyền thực hiện)",
        "options": ["cordon off", "creep up on", "fall behind", "go astray"],
        "correct": 0,
        "explanation": "Chính xác! 'Cordon off' là giăng dây phong tỏa hiện trường."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "creep up on",
        "sentence": "The scout cat managed to <span class='blank'>_______</span> the pirate sentry in absolute silence.",
        "hint": "move towards sb quietly to surprise them | rón rén lại gần gây bất ngờ",
        "meaningEn": "move towards sb quietly and slowly, especially because you want to surprise them",
        "meaningVn": "tiếp cận ai đó một cách nhẹ nhàng, lén lút để gây bất ngờ",
        "options": ["creep up on", "head off", "hold back", "move in with"],
        "correct": 0,
        "explanation": "Đúng! 'Creep up on' là rón rén tiến sát phía sau ai đó."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "fall behind",
        "sentence": "If your carriage loses a wheel on the mountain pass, you will quickly <span class='blank'>_______</span> the convoy.",
        "hint": "move slower than others; make less progress | rớt lại phía sau, tụt hậu",
        "meaningEn": "move more slowly than others; make less progress than others",
        "meaningVn": "bị bỏ xa (khoảng cách); bị tụt hậu (tiến độ/trình độ)",
        "options": ["fall behind", "move on", "move out", "pull over"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Fall behind' là bị tụt lại phía sau đoàn."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "go astray",
        "sentence": "Due to inaccurate sea charts, several merchant vessels <span class='blank'>_______</span> in the archipelago.",
        "hint": "become lost or go to the wrong place | đi lạc đường, lạc hướng",
        "meaningEn": "become lost or go to the wrong place",
        "meaningVn": "đi lạc đường, thất lạc nơi chốn",
        "options": ["go astray", "slip away", "stop aside", "stop off"],
        "correct": 0,
        "explanation": "Đúng! 'Go astray' là đi chệch hướng, lạc lối."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "head off",
        "sentence": "Mounted couriers rode along the riverbank to <span class='blank'>_______</span> the runaway ferry.",
        "hint": "prevent sb going swh by getting in front; prevent sth | chặn đường đón đầu",
        "meaningEn": "prevent sb from going swh by getting in front of them; prevent sth happening",
        "meaningVn": "vượt lên trước để chặn đường; ngăn chặn điều gì xảy ra",
        "options": ["head off", "tip up", "walk out", "cordon off"],
        "correct": 0,
        "explanation": "Chính xác! 'Head off' là đón đầu chặn đường hoặc ngăn chặn sự việc."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "hold back",
        "sentence": "The coastal sea wall was built to <span class='blank'>_______</span> high tidal surges during storms.",
        "hint": "stop sb or sth from moving forwards | ngăn cản, kìm giữ lại",
        "meaningEn": "stop sb or sth from moving forwards",
        "meaningVn": "ngăn cản, giữ lại không cho tiến về phía trước",
        "options": ["hold back", "creep up on", "fall behind", "go astray"],
        "correct": 0,
        "explanation": "Tuyệt! 'Hold back' là ngăn cản, kìm nén không cho tiến tới."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "move in with",
        "sentence": "After transferring to the capital harbor, Hayate decided to <span class='blank'>_______</span> his fellow navigators.",
        "hint": "start living in a different house with sb | chuyển đến sống chung",
        "meaningEn": "start living in a different house or flat with sb",
        "meaningVn": "chuyển đến nhà/căn hộ mới để sống cùng ai đó",
        "options": ["move in with", "move on", "move out", "pull over"],
        "correct": 0,
        "explanation": "Chính xác! 'Move in with' là dọn đến ở chung nhà với ai."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "move on",
        "sentence": "Having surveyed the northern coastline, the expedition is ready to <span class='blank'>_______</span> to the eastern islands.",
        "hint": "leave one place and travel to another; change topic | tiếp tục đi tiếp, chuyển sang",
        "meaningEn": "leave one place and travel to another; stop doing sth and begin doing sth different",
        "meaningVn": "rời nơi này đi nơi khác; chuyển sang làm việc mới",
        "options": ["move on", "slip away", "stop aside", "stop off"],
        "correct": 0,
        "explanation": "Đúng! 'Move on' là tiếp tục hành trình sang chặng mới."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "move out",
        "sentence": "The old guild master decided to <span class='blank'>_______</span> of the dockside residence and retire to the mountains.",
        "hint": "permanently leave the house where you live | dọn đi hẳn, chuyển nhà",
        "meaningEn": "permanently leave the house or flat where you live",
        "meaningVn": "dọn đi hẳn khỏi nơi cư trú hiện tại",
        "options": ["move out", "tip up", "walk out", "cordon off"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Move out' là dọn toàn bộ đồ đạc rời khỏi nhà cũ."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "pull over",
        "sentence": "Seeing a fallen pine on the highway, the coachman immediately <span class='blank'>_______</span> to the roadside.",
        "hint": "stop by the side of the road in a vehicle | tấp xe vào lề đường dừng lại",
        "meaningEn": "stop by the side of the road in a car or other vehicle",
        "meaningVn": "dừng xe tấp vào lề đường",
        "options": ["pull over", "creep up on", "fall behind", "go astray"],
        "correct": 0,
        "explanation": "Chính xác! 'Pull over' là điều khiển xe tấp vào lề để đỗ."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "slip away",
        "sentence": "While the harbor festival was in full swing, the secret envoy managed to <span class='blank'>_______</span> on a midnight skiff.",
        "hint": "leave secretly and quietly | lén lút rời đi trong im lặng",
        "meaningEn": "leave secretly",
        "meaningVn": "lẻn rời đi một cách bí mật, êm thấm",
        "options": ["slip away", "head off", "hold back", "move in with"],
        "correct": 0,
        "explanation": "Rất tốt! 'Slip away' là rời đi lặng lẽ không ai nhận ra."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "step aside",
        "sentence": "The senior captain offered to <span class='blank'>_______</span> on the gangway so the emergency medical team could pass.",
        "hint": "move so that sb can pass; leave a job for sb | đứng dạt sang một bên nhường đường / nhường chức",
        "meaningEn": "move so that sb can pass you; leave a job so that sb else can take over",
        "meaningVn": "nhường chỗ/đường cho ai đi qua; nhường chức vụ cho người khác",
        "options": ["step aside", "move on", "move out", "pull over"],
        "correct": 0,
        "explanation": "Đúng! 'Step aside' là né sang một bên nhường lối hoặc nhường quyền lực."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "stop off",
        "sentence": "On our delivery route from Kyoto to Tokyo, we will <span class='blank'>_______</span> in Nagoya to change fresh horses.",
        "hint": "visit swh briefly before continuing to another place | dừng chân ghé lại trên đường đi",
        "meaningEn": "visit swh before continuing to another place",
        "meaningVn": "dừng chân ghé lại nơi nào đó trên đường đi",
        "options": ["stop off", "tip up", "walk out", "cordon off"],
        "correct": 0,
        "explanation": "Chính xác! 'Stop off' là ghé ngang một địa điểm trên lộ trình."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Navigator Hayate",
        "avatar": "⛵",
        "verb": "tip up",
        "sentence": "When the crane lifted the heavy cargo crate unevenly, it caused the cart to <span class='blank'>_______</span>.",
        "hint": "have one end move upwards; overturn | lật nghiêng, dốc ngược đồ ra",
        "meaningEn": "(of an object) have one end move upwards; turn upside down so things come out",
        "meaningVn": "lật ngược lại (đồ vật); lật nghiêng làm đổ đồ bên trong ra",
        "options": ["tip up", "creep up on", "fall behind", "go astray"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Tip up' là bị bập bênh, nghiêng lật một đầu."
    },
    {
        "unit": 8,
        "unitTitle": "Unit 8: Movement & Transport",
        "shop": "Post Station & Harbor",
        "speaker": "Courier Tora",
        "avatar": "🐎",
        "verb": "walk out",
        "sentence": "Furious over unfair cargo tariffs, the dock workers decided to <span class='blank'>_______</span> of negotiations.",
        "hint": "leave a meeting/job/relationship suddenly in anger | bỏ ra ngoài, đình công",
        "meaningEn": "leave a meeting, job, relationship before end, usually because angry/bored",
        "meaningVn": "bỏ ra ngoài buổi họp; đột ngột rời bỏ công việc/mối quan hệ",
        "options": ["walk out", "head off", "hold back", "move in with"],
        "correct": 0,
        "explanation": "Đúng! 'Walk out' là đùng đùng bỏ đi phản đối hoặc đình công."
    },

    # ==================== UNIT 10: COMMUNICATION AND THE MEDIA ====================
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "blurt out",
        "sentence": "In a moment of intense excitement, the witness accidentally <span class='blank'>_______</span> the confidential headline.",
        "hint": "say sth suddenly without thinking | buột miệng, lỡ lời nói ra",
        "meaningEn": "say sth suddenly without thinking about the effect it will have",
        "meaningVn": "lỡ miệng nói gì đó mà không suy nghĩ kỹ (thường do quá khích/hồi hộp)",
        "options": ["blurt out", "catch on", "come out", "come out with"],
        "correct": 0,
        "explanation": "Chính xác! 'Blurt out' là buột miệng nói hớ điều bí mật."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "catch on",
        "sentence": "The new illustrated comic format took only a few weeks to <span class='blank'>_______</span> across the kingdom.",
        "hint": "understand; become popular or fashionable | trở nên phổ biến, thịnh hành",
        "meaningEn": "understand; become popular or fashionable",
        "meaningVn": "hiểu; trở nên phổ biến, được ưa chuộng khắp nơi",
        "options": ["catch on", "dry up", "blurt out", "come out"],
        "correct": 0,
        "explanation": "Đúng! 'Catch on' là trở thành trào lưu thịnh hành rộng rãi."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "come out",
        "sentence": "The investigative gazette on maritime trade secrets will <span class='blank'>_______</span> this Friday morning.",
        "hint": "become available to buy/see; become known | được phát hành, xuất bản",
        "meaningEn": "become available to buy or see; become easy to notice; become known",
        "meaningVn": "được xuất bản, phát hành; được công chúng biết đến",
        "options": ["come out", "come out with", "dry up", "catch on"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Come out' là được xuất bản, ra mắt công chúng."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "come out with",
        "sentence": "During the live press debate, the mayor suddenly <span class='blank'>_______</span> a sensational declaration.",
        "hint": "say sth suddenly that surprises or shocks people | bất ngờ tuyên bố, thốt ra",
        "meaningEn": "say sth suddenly, usually sth that surprises or shocks people",
        "meaningVn": "đột nhiên nói hay thốt lên điều gì đó gây sốc/bất ngờ",
        "options": ["come out with", "blurt out", "dry up", "catch on"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Come out with' là tung ra một phát ngôn bất ngờ."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "dry up",
        "sentence": "When the microphone unexpectedly glitched, the young debater got flustered and <span class='blank'>_______</span>.",
        "hint": "stop talking because you forgot what to say | cạn lời, khựng lại quên bài",
        "meaningEn": "stop talking because you have forgotten what you were going to say",
        "meaningVn": "dừng nói chuyện, câm lặng vì đột ngột quên mất định nói gì",
        "options": ["dry up", "come out", "blurt out", "catch on"],
        "correct": 0,
        "explanation": "Chính xác! 'Dry up' là bỗng nhiên tắc lời, quên bài khi phát biểu."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "get across",
        "sentence": "The lecturer used illustrative diagrams to <span class='blank'>_______</span> her thesis <span class='blank'>to</span> the audience.",
        "hint": "make people understand sth | làm cho ai đó hiểu",
        "meaningEn": "make people understand sth",
        "meaningVn": "làm cho người khác hiểu rõ điều mình muốn nói",
        "options": ["get across", "get around", "get through to", "let on"],
        "correct": 0,
        "explanation": "Đúng! 'Get across' là truyền đạt thành công ý tưởng cho người nghe hiểu."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "get around",
        "sentence": "In this bustling marketplace, news of the new guild decree will <span class='blank'>_______</span> within hours.",
        "hint": "if news gets around, a lot of people hear it | lan truyền thông tin, tin tức",
        "meaningEn": "if news gets (a)round, a lot of people hear it",
        "meaningVn": "lan truyền tin tức, được nhiều người biết đến",
        "options": ["get around", "pass on", "put across", "set down"],
        "correct": 0,
        "explanation": "Chính xác! 'Get around' là tin đồn/tin tức lan truyền rộng rãi."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "get through to",
        "sentence": "I have explained the editorial standards three times, but I cannot <span class='blank'>_______</span> him.",
        "hint": "make sb understand what you are trying to say; connect by phone | làm cho ai hiểu / nối máy",
        "meaningEn": "be connected by telephone; make sb understand what you are trying to say",
        "meaningVn": "nối máy điện thoại; làm cho ai đó thấu hiểu điều mình nói",
        "options": ["get through to", "shout down", "speak out", "talk over"],
        "correct": 0,
        "explanation": "Chuẩn! 'Get through to' là làm cho ai đó thực sự thấu hiểu thông điệp của bạn."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "let on",
        "sentence": "He knew who had won the prestigious journalism prize, but he refused to <span class='blank'>_______</span>.",
        "hint": "talk about sth that is intended to be a secret | tiết lộ bí mật",
        "meaningEn": "talk about sth that is intended to be a secret",
        "meaningVn": "hé lộ, tiết lộ bí mật của ai đó",
        "options": ["let on", "talk around", "pass on", "set down"],
        "correct": 0,
        "explanation": "Đúng! 'Let on' là để lộ ra, buột miệng tiết lộ điều bí mật."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "pass on",
        "sentence": "Please make sure to <span class='blank'>_______</span> this urgent bulletin to all regional editors.",
        "hint": "give sb sth/message given to you | truyền thông tin, chuyển tiếp thông điệp",
        "meaningEn": "give sb sth, for example a message, that sb else has given you",
        "meaningVn": "truyền tin, chuyển tiếp thông điệp cho người khác",
        "options": ["pass on", "put across", "speak out", "talk around"],
        "correct": 0,
        "explanation": "Chính xác! 'Pass on' là chuyển giao thông điệp, truyền lại thông tin."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "put across",
        "sentence": "The chief editor was skilled at <span class='blank'>_______</span> complex political viewpoints in simple prose.",
        "hint": "explain an idea/belief in an easy-to-understand way | giải thích cho ai đó hiểu",
        "meaningEn": "explain an idea, belief, etc in a way that is easy to understand",
        "meaningVn": "giải thích ý tưởng một cách rõ ràng, dễ hiểu",
        "options": ["put across", "shout down", "talk over", "let on"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Put across' là truyền tải thông điệp một cách dễ hiểu, thuyết phục."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "set down",
        "sentence": "The guild committee met to <span class='blank'>_______</span> strict standards for journalistic integrity.",
        "hint": "write on paper; state officially | ghi chú lại, đặt ra tiêu chuẩn chính thức",
        "meaningEn": "write sth on paper to not forget; state officially how sth should be done",
        "meaningVn": "ghi chú lại trên giấy tờ; ban hành quy tắc, đặt ra tiêu chuẩn",
        "options": ["set down", "get around", "get through to", "speak out"],
        "correct": 0,
        "explanation": "Đúng! 'Set down' là ghi chép lại hoặc quy định rõ ràng trong văn bản."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "shout down",
        "sentence": "Disorderly hecklers tried to <span class='blank'>_______</span> the spokesperson during the press conference.",
        "hint": "make it difficult to hear sb by shouting over them | la ó lấn át, át tiếng người nói",
        "meaningEn": "make it difficult to hear what sb says by shouting while they are speaking",
        "meaningVn": "la hét, la lớn chen ngang để lấn át tiếng người khác",
        "options": ["shout down", "talk over", "pass on", "let on"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Shout down' là hò hét át tiếng của người đang phát biểu."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "speak out",
        "sentence": "Brave investigative journalists must <span class='blank'>_______</span> against media censorship.",
        "hint": "state your opinion firmly and publicly | lên tiếng công khai bày tỏ quan điểm",
        "meaningEn": "state your opinion firmly and publicly, esp to protest or defend sth",
        "meaningVn": "bày tỏ quan điểm một cách mạnh mẽ, dứt khoát để phản đối/bảo vệ",
        "options": ["speak out", "talk around", "get across", "put across"],
        "correct": 0,
        "explanation": "Chính xác! 'Speak out' là dũng cảm lên tiếng trước công chúng."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Reporter Kiki",
        "avatar": "📢",
        "verb": "talk over",
        "sentence": "Let us schedule a formal editorial meeting to <span class='blank'>_______</span> the publication roadmap.",
        "hint": "discuss a problem or a plan | thảo luận, bàn bạc kỹ",
        "meaningEn": "discuss a problem or a plan",
        "meaningVn": "bàn luận, thảo luận về một vấn đề hay kế hoạch",
        "options": ["talk over", "shout down", "get around", "set down"],
        "correct": 0,
        "explanation": "Đúng! 'Talk over' là thảo luận chi tiết một vấn đề với ai."
    },
    {
        "unit": 10,
        "unitTitle": "Unit 10: Communication & Media",
        "shop": "Town Crier & Gazette",
        "speaker": "Newsman Satsuki",
        "avatar": "📰",
        "verb": "talk around",
        "sentence": "After hours of patient negotiation, the team managed to <span class='blank'>_______</span> the chief to approve the story.",
        "hint": "succeed in persuading sb to agree to sth | thuyết phục ai đó đồng ý",
        "meaningEn": "succeed in persuading sb to agree to sth; discuss without touching core issues",
        "meaningVn": "thuyết phục được ai đó đồng thuận; bàn luận vòng vo",
        "options": ["talk around", "get through to", "pass on", "let on"],
        "correct": 0,
        "explanation": "Rất tốt! 'Talk sb around' là thuyết phục được ai đó đổi ý theo mình."
    },

    # ==================== UNIT 12: CHANCE AND NATURE ====================
    {
        "unit": 12,
        "unitTitle": "Unit 12: Chance & Nature",
        "shop": "Botanical Sanctuary",
        "speaker": "Botanist Momiji",
        "avatar": "🌿",
        "verb": "chance upon",
        "sentence": "While foraging deep in the enchanted forest, the herbalist <span class='blank'>_______</span> a rare glowing moss.",
        "hint": "find or see sb/sth when you did not expect to | tình cờ bắt gặp",
        "meaningEn": "find or see sb or sth when you did not expect to",
        "meaningVn": "vô tình bắt gặp ai/cái gì ngoài dự kiến",
        "options": ["chance upon", "come across", "cool down", "cut back on"],
        "correct": 0,
        "explanation": "Chính xác! 'Chance upon' là tình cờ phát hiện ra một điều bất ngờ."
    },
    {
        "unit": 12,
        "unitTitle": "Unit 12: Chance & Nature",
        "shop": "Botanical Sanctuary",
        "speaker": "Forest Guide Shika",
        "avatar": "🦌",
        "verb": "come across",
        "sentence": "During our mountain trek, we <span class='blank'>_______</span> a crystal-clear spring hidden behind boulders.",
        "hint": "meet sb or find sth by chance | tình cờ gặp/tìm thấy",
        "meaningEn": "meet sb or find sth by chance",
        "meaningVn": "tình cờ gặp ai đó hoặc tìm thấy thứ gì",
        "options": ["come across", "chance upon", "cool down", "cut back on"],
        "correct": 0,
        "explanation": "Đúng! 'Come across' là tình cờ bắt gặp trên đường đi."
    },
    {
        "unit": 12,
        "unitTitle": "Unit 12: Chance & Nature",
        "shop": "Botanical Sanctuary",
        "speaker": "Botanist Momiji",
        "avatar": "🌿",
        "verb": "cool down",
        "sentence": "After walking under the blazing midday sun, travelers rest under the cedar shade to <span class='blank'>_______</span>.",
        "hint": "become cooler; make sb less angry | hạ nhiệt; làm bớt giận",
        "meaningEn": "become cooler, or make sth cooler; become less angry",
        "meaningVn": "hạ nhiệt độ; làm dịu cơn giận",
        "options": ["cool down", "cut back on", "chance upon", "come across"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Cool down' là làm mát, hạ nhiệt hoặc bình tĩnh lại."
    },
    {
        "unit": 12,
        "unitTitle": "Unit 12: Chance & Nature",
        "shop": "Botanical Sanctuary",
        "speaker": "Forest Guide Shika",
        "avatar": "🦌",
        "verb": "cut back on",
        "sentence": "Due to drought conditions, regional gardens must <span class='blank'>_______</span> their water usage.",
        "hint": "reduce the amount of sth, especially spending/consumption | cắt giảm chi tiêu, tiêu thụ",
        "meaningEn": "reduce the amount of sth, especially money that you spend",
        "meaningVn": "giảm bớt, cắt giảm (đặc biệt là tiền bạc, kinh phí, tài nguyên)",
        "options": ["cut back on", "cool down", "come across", "chance upon"],
        "correct": 0,
        "explanation": "Chính xác! 'Cut back on' là tiết giảm, cắt bớt mức tiêu dùng."
    },

    # ==================== UNIT 14: QUANTITY AND MONEY ====================
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Merchant Torajiro",
        "avatar": "🏮",
        "verb": "club together",
        "sentence": "All feline shop owners agreed to <span class='blank'>_______</span> to purchase festive street lamps.",
        "hint": "combine money together to buy sth | góp tiền chung",
        "meaningEn": "combine money together with a group of people to buy something",
        "meaningVn": "góp tiền chung với nhau để mua thứ gì",
        "options": ["club together", "pay back", "pay out", "size up"],
        "correct": 0,
        "explanation": "Đúng! 'Club together' là hùn hạp, chung tiền mua sắm."
    },
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Banker Ginji",
        "avatar": "💰",
        "verb": "pay back",
        "sentence": "I promise to <span class='blank'>_______</span> the full investment sum by the end of the fiscal quarter.",
        "hint": "return borrowed money | trả nợ, hoàn tiền vay",
        "meaningEn": "give sb the same amount of money that you borrowed from them",
        "meaningVn": "trả nợ, trả lại số tiền đã mượn",
        "options": ["pay back", "pay out", "take away", "weigh down"],
        "correct": 0,
        "explanation": "Chính xác! 'Pay back' là thanh toán hoàn trả nợ vay."
    },
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Merchant Torajiro",
        "avatar": "🏮",
        "verb": "pay out",
        "sentence": "The maritime trade consortium had to <span class='blank'>_______</span> millions in insurance for the lost galleon.",
        "hint": "spend/provide large sum of money | chi trả một khoản tiền lớn",
        "meaningEn": "spend or pay money, esp a lot of money; provide invested money",
        "meaningVn": "chi trả số tiền rất lớn (bồi thường, đầu tư)",
        "options": ["pay out", "club together", "size up", "pay back"],
        "correct": 0,
        "explanation": "Tuyệt! 'Pay out' là chi trả khoản tiền lớn cho bồi thường hay đầu tư."
    },
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Banker Ginji",
        "avatar": "💰",
        "verb": "size up",
        "sentence": "The appraiser took a long look at the antique gemstone to <span class='blank'>_______</span> its real auction value.",
        "hint": "think carefully and form an opinion about someone/situation | đánh giá, xem xét kỹ",
        "meaningEn": "think carefully and form an opinion about a person or situation",
        "meaningVn": "suy nghĩ cẩn thận, xem xét đánh giá đối tượng hoặc tình huống",
        "options": ["size up", "weigh down", "take away", "pay out"],
        "correct": 0,
        "explanation": "Đúng! 'Size up' là đánh giá, thẩm định người hoặc tình huống."
    },
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Merchant Torajiro",
        "avatar": "🏮",
        "verb": "take away",
        "sentence": "If you <span class='blank'>_______</span> operational expenses from total revenue, you get net profit.",
        "hint": "remove one quantity from another | trừ đi, bớt ra",
        "meaningEn": "remove one number or quantity from another number or quantity",
        "meaningVn": "lấy bớt ra, trừ đi một số lượng từ một tổng",
        "options": ["take away", "club together", "pay back", "weigh down"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Take away' là trừ bớt số lượng/chi phí đi."
    },
    {
        "unit": 14,
        "unitTitle": "Unit 14: Quantity & Money",
        "shop": "Merchant Guild",
        "speaker": "Banker Ginji",
        "avatar": "💰",
        "verb": "weigh down",
        "sentence": "Excessive tax burdens and unpaid debts began to <span class='blank'>_______</span> the young artisan.",
        "hint": "make heavy, unable to move; cause worry/burdens | đè nặng gánh nặng tâm trí",
        "meaningEn": "make sb heavy and unable to move easily; cause problems or make sb worried",
        "meaningVn": "đè nặng làm di chuyển khó khăn; gây gánh nặng, lo âu",
        "options": ["weigh down", "size up", "pay out", "take away"],
        "correct": 0,
        "explanation": "Chính xác! 'Weigh down' là đè nặng, tạo gánh nặng tâm lý hoặc thể xác."
    },

    # ==================== UNIT 16: MATERIAL AND THE BUILT ENVIRONMENT ====================
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "board up",
        "sentence": "Residents hurried to <span class='blank'>_______</span> all ground floor windows before the winter blizzard arrived.",
        "hint": "cover window or door with wooden boards | đóng ván bịt kín cửa sổ",
        "meaningEn": "cover a window or door with wooden boards",
        "meaningVn": "đóng kín, bịt cửa sổ/cửa chính bằng ván gỗ",
        "options": ["board up", "close up", "cut out", "fix up"],
        "correct": 0,
        "explanation": "Chính xác! 'Board up' là đóng đinh các tấm ván bịt kín cửa chống bão."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "close up",
        "sentence": "The timber merchants usually <span class='blank'>_______</span> their warehouses at dusk for security.",
        "hint": "lock the doors of a building or business | khóa cửa đóng cửa tiệm",
        "meaningEn": "lock the doors of a building or business",
        "meaningVn": "khóa cửa tòa nhà hoặc đóng cửa doanh nghiệp",
        "options": ["close up", "knock down", "pile up", "prop up"],
        "correct": 0,
        "explanation": "Đúng! 'Close up' là khóa chặt cửa công ty hoặc cửa hiệu khi hết giờ."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "come out",
        "sentence": "With this traditional vinegar soak, the resin stains on the work apron will easily <span class='blank'>_______</span>.",
        "hint": "be removed by washing; particular result | giặt sạch vết bẩn, tẩy ra",
        "meaningEn": "be removed from clothing by washing or rubbing; have a particular result",
        "meaningVn": "vết bẩn được giặt sạch, phai ra; mang lại kết quả nhất định",
        "options": ["come out", "put in", "put together", "put up"],
        "correct": 0,
        "explanation": "Tuyệt! 'Come out' là vết bẩn biến mất sau khi giặt tẩy."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "cut out",
        "sentence": "The master stonecutter used a diamond chisel to <span class='blank'>_______</span> precise marble tiles from the slab.",
        "hint": "remove by cutting; stop eating/doing sth harmful | cắt gọt từ mảnh lớn / kiêng cữ",
        "meaningEn": "remove sth from a larger piece by cutting; stop eating or doing sth unhealthy",
        "meaningVn": "cắt nhỏ ra từ khối lớn; ngừng ăn/làm việc gì hại sức khỏe",
        "options": ["cut out", "set up", "spread out", "take down"],
        "correct": 0,
        "explanation": "Chính xác! 'Cut out' là cắt gọt tạo hình từ một khối vật liệu lớn."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "fix up",
        "sentence": "The villagers gathered on Sunday to clean and <span class='blank'>_______</span> the communal shrine pavilion.",
        "hint": "clean, repair or decorate sth | dọn dẹp, sửa chữa trang trí",
        "meaningEn": "clean, repair or decorate sth",
        "meaningVn": "dọn dẹp, tân trang, sửa chữa hoặc trang trí lại",
        "options": ["fix up", "water down", "wear down", "board up"],
        "correct": 0,
        "explanation": "Đúng! 'Fix up' là sửa sang, trang hoàng lại nhà cửa công trình."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "knock down",
        "sentence": "The construction team had to <span class='blank'>_______</span> the crumbling brick chimney for safety reasons.",
        "hint": "destroy a building or wall | phá dỡ tòa nhà, bức tường",
        "meaningEn": "destroy a building or wall (knock/pull/tear down)",
        "meaningVn": "phá dỡ, đánh sập tòa nhà hoặc bức tường",
        "options": ["knock down", "prop up", "close up", "put together"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Knock down' là phá dỡ bức tường hoặc công trình cũ nát."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "pile up",
        "sentence": "Untrimmed timber beams began to <span class='blank'>_______</span> in the sawmill yard during the rainy week.",
        "hint": "amount increases a lot; accumulate | chất đống, dồn ứ lại",
        "meaningEn": "if sth piles up, the amount of it increases a lot",
        "meaningVn": "chất đống, gia tăng số lượng nhanh chóng",
        "options": ["pile up", "put up", "spread out", "take down"],
        "correct": 0,
        "explanation": "Đúng! 'Pile up' là xếp chồng chất, dồn ứ với số lượng lớn."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "prop up",
        "sentence": "Carpenters used angled cedar pillars to <span class='blank'>_______</span> the leaning pagoda roof.",
        "hint": "stop sth falling by putting sth under it; support financially | chống đỡ không cho ngã / hậu thuẫn",
        "meaningEn": "stop sth from falling by putting sth under/against it; help an organization continue to exist",
        "meaningVn": "chống đỡ vật lý ngăn đồ sập; hậu thuẫn tài chính duy trì hệ thống",
        "options": ["prop up", "knock down", "water down", "cut out"],
        "correct": 0,
        "explanation": "Chính xác! 'Prop up' là chống đỡ công trình hoặc hậu thuẫn duy trì."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "put in",
        "sentence": "The guild hired a skilled smith to <span class='blank'>_______</span> ornate iron hinges on the main gate.",
        "hint": "fix equipment in place ready to use; official claim | lắp đặt thiết bị / nộp yêu cầu",
        "meaningEn": "fix equipment in place and make it ready to use; make official request",
        "meaningVn": "lắp đặt thiết bị vào đúng chỗ; đưa ra yêu cầu chính thức",
        "options": ["put in", "wear down", "board up", "close up"],
        "correct": 0,
        "explanation": "Đúng! 'Put in' là lắp ráp trang thiết bị vào công trình."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "put together",
        "sentence": "It took five master craftspeople two weeks to <span class='blank'>_______</span> the complex timber clocktower frame.",
        "hint": "make by joining parts; organize work/team | lắp ráp các bộ phận; lập đội ngũ",
        "meaningEn": "make sth by joining all its parts; prepare work by collecting ideas; choose team",
        "meaningVn": "lắp ráp, nối các mảnh lại với nhau; thu thập ý tưởng lập kế hoạch; lập đội ngũ",
        "options": ["put together", "take down", "fix up", "spread out"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Put together' là lắp ghép hoàn chỉnh các mảnh cấu kiện."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "put up",
        "sentence": "The villagers banded together to <span class='blank'>_______</span> a sturdy stone retaining wall along the hillside.",
        "hint": "build a structure; let sb stay in house | xây dựng tường/nhà; cho ở nhờ",
        "meaningEn": "build sth such as a wall, fence or house; let sb stay in your house",
        "meaningVn": "xây dựng công trình (tường, hàng rào, nhà); cho ai ở nhờ nhà",
        "options": ["put up", "knock down", "water down", "pile up"],
        "correct": 0,
        "explanation": "Chính xác! 'Put up' là dựng lên bức tường, hàng rào hoặc cho khách trú ngụ."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "set up",
        "sentence": "The surveyors arrived early to <span class='blank'>_______</span> their precision optical levels on the plaza.",
        "hint": "build structure, put equipment ready; establish | thiết lập máy móc; thành lập cơ sở",
        "meaningEn": "build structure or put in place; make equipment ready; establish",
        "meaningVn": "cài đặt, bố trí máy móc sẵn sàng; xây dựng hệ thống cơ sở",
        "options": ["set up", "wear down", "close up", "board up"],
        "correct": 0,
        "explanation": "Đúng! 'Set up' là lắp đặt, căn chỉnh thiết bị vào vị trí sẵn sàng hoạt động."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "spread out",
        "sentence": "The architect instructed the builders to <span class='blank'>_______</span> across the foundation grid to lay mortar evenly.",
        "hint": "people move away from each other to cover large area | tản ra khắp khu vực",
        "meaningEn": "if people in a group spread out, they move away from another to cover a large area",
        "meaningVn": "(người) tản ra khắp nơi để bao quát một diện tích rộng",
        "options": ["spread out", "pile up", "prop up", "put in"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Spread out' là dàn hàng, tản rộng ra khắp mặt bằng."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "take down",
        "sentence": "Once the masonry dried, workers began to <span class='blank'>_______</span> the heavy scaffolding platforms.",
        "hint": "separate large structure into pieces; write down notes | tháo dỡ giàn giáo/công trình; ghi chép",
        "meaningEn": "separate a large structure into pieces; write down information",
        "meaningVn": "tháo dỡ công trình, cấu trúc lớn; ghi chép lại lời nói",
        "options": ["take down", "put together", "fix up", "cut out"],
        "correct": 0,
        "explanation": "Chính xác! 'Take down' là tháo dỡ công trình xây dựng tạm thời."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Master Carpenter Ichi",
        "avatar": "🪵",
        "verb": "water down",
        "sentence": "Do not <span class='blank'>_______</span> the sealant lacquer with excess solvent or it will lose water resistance.",
        "hint": "dilute liquid; make statement less powerful/offensive | pha loãng chất lỏng; làm giảm uy lực bài viết",
        "meaningEn": "add water to liquid to dilute it; make statement less offensive or powerful",
        "meaningVn": "pha loãng nước/dung dịch; nói giảm nói tránh làm dịu phát ngôn",
        "options": ["water down", "wear down", "knock down", "prop up"],
        "correct": 0,
        "explanation": "Tuyệt! 'Water down' là pha loãng dung dịch hoặc làm giảm độ gay gắt của văn bản."
    },
    {
        "unit": 16,
        "unitTitle": "Unit 16: Material & Built",
        "shop": "Carpentry & Masonry Guild",
        "speaker": "Architect Yoko",
        "avatar": "📐",
        "verb": "wear down",
        "sentence": "Decades of foot traffic over the granite steps will gradually <span class='blank'>_______</span> the stone edges.",
        "hint": "make sth disappear/thinner by rubbing; make sb lose confidence | mài mòn; làm kiệt sức",
        "meaningEn": "make sth disappear or thinner by rubbing; make sb lose energy or confidence",
        "meaningVn": "làm mòn mỏng dần do cọ xát; làm ai đó kiệt quệ ý chí, mất tự tin",
        "options": ["wear down", "board up", "set up", "put up"],
        "correct": 0,
        "explanation": "Chính xác! 'Wear down' là mài mòn theo năm tháng hoặc bào mòn tinh thần."
    },

    # ==================== UNIT 18: REACTIONS AND HEALTH ====================
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "black out",
        "sentence": "Overcome by extreme exhaustion in the crowded furnace, the miner suddenly <span class='blank'>_______</span>.",
        "hint": "suddenly become unconscious; make a place dark | đột nhiên ngất đi, bất tỉnh; mất điện",
        "meaningEn": "suddenly become unconscious; make a place dark by turning off lights",
        "meaningVn": "đột nhiên bất tỉnh, ngất xỉu; cúp điện làm tối om",
        "options": ["black out", "come out in", "cool down", "dry up"],
        "correct": 0,
        "explanation": "Chính xác! 'Black out' là hoa mắt bất tỉnh hoặc tắt ngấm ánh sáng."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "come out in",
        "sentence": "After touching the poisonous swamp ivy, her skin began to <span class='blank'>_______</span> an itchy rash.",
        "hint": "become covered in spots/rash | nổi mẩn đỏ, phát ban khắp da",
        "meaningEn": "become covered in spots, a rash, etc.",
        "meaningVn": "bị nổi lên da nhiều mụn, vết mẩn đỏ hoặc phát ban",
        "options": ["come out in", "black out", "wear down", "water down"],
        "correct": 0,
        "explanation": "Đúng! 'Come out in' là bị nổi đầy mẩn ngứa/phát ban trên da."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "come round",
        "sentence": "After fainting from the summer heat, the traveler drank cool water and began to <span class='blank'>_______</span>.",
        "hint": "become conscious again after being unconscious | hồi tỉnh, tỉnh lại",
        "meaningEn": "become conscious again after being unconscious; visit sb; happen regularly",
        "meaningVn": "có nhận thức trở lại sau khi bất tỉnh; đến thăm ai; sự kiện lặp lại định kỳ",
        "options": ["come round", "cotton on", "crease up", "get down"],
        "correct": 0,
        "explanation": "Chính xác! 'Come round' là tỉnh lại sau khi ngất xỉu."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "cotton on",
        "sentence": "It took the apprentice quite a while to <span class='blank'>_______</span> to the master's subtle distillation hints.",
        "hint": "begin to realize or understand sth | bắt đầu hiểu ra, vỡ lẽ",
        "meaningEn": "begin to realize or understand sth",
        "meaningVn": "bắt đầu nhận ra hay hiểu được điều gì đó",
        "options": ["cotton on", "lash out", "play up", "shrivel up"],
        "correct": 0,
        "explanation": "Đúng! 'Cotton on' là bắt đầu vỡ lẽ, hiểu ra vấn đề."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "crease up",
        "sentence": "The comical antics of the playful kittens never failed to <span class='blank'>_______</span> the weary clinic staff.",
        "hint": "laugh a lot, or make sb laugh a lot | cười nắc nẻ, làm ai cười nghiêng ngả",
        "meaningEn": "laugh a lot, or make sb laugh a lot",
        "meaningVn": "cười nhiều, hoặc làm cho ai đó cười nghiêng ngả",
        "options": ["crease up", "get over", "pull through", "ward off"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Crease up' là làm cho ai đó cười nghiêng ngả, vui vẻ."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "follow up",
        "sentence": "The physician scheduled a home visit next Tuesday to <span class='blank'>_______</span> on the patient's recovery.",
        "hint": "check health of treated patient; investigate further | theo dõi sau điều trị / tìm hiểu thêm",
        "meaningEn": "check the health of sb who has received medical treatment; try to find out more",
        "meaningVn": "theo dõi sức khỏe của người vừa được chữa trị; tiếp tục điều tra",
        "options": ["follow up", "lash out", "summon up", "play up"],
        "correct": 0,
        "explanation": "Chính xác! 'Follow up' là theo dõi tiến trình hồi phục sau điều trị."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "get down",
        "sentence": "Continuous rainy weather and chronic fatigue can really <span class='blank'>_______</span> a hardworking scholar.",
        "hint": "make sb feel sad or lose hope | làm ai buồn bã, chán nản",
        "meaningEn": "make sb feel sad or lose hope",
        "meaningVn": "làm ai đó trở nên buồn bã và mất tinh thần, hy vọng",
        "options": ["get down", "come round", "get over", "ward off"],
        "correct": 0,
        "explanation": "Đúng! 'Get sb down' là làm ai đó nản lòng, suy sụp tinh thần."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "get over",
        "sentence": "With proper herbal tea and adequate rest, you will quickly <span class='blank'>_______</span> the seasonal flu.",
        "hint": "recover from illness/shock; solve problem | bình phục, vượt qua bệnh tật",
        "meaningEn": "start to feel happy or well again after sth bad; solve or deal with a problem",
        "meaningVn": "trở nên khỏe hơn sau thời gian bệnh/khó khăn; giải quyết vượt qua vấn đề",
        "options": ["get over", "crease up", "pass away", "shrivel up"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Get over' là vượt qua cơn bạo bệnh hoặc nỗi buồn."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "go down well with",
        "sentence": "The introduction of nutritious herbal soup is sure to <span class='blank'>_______</span> the recuperating villagers.",
        "hint": "produce a particular good reaction | đón nhận nồng nhiệt, phản ứng tốt",
        "meaningEn": "produce a particular reaction (well/badly with sb)",
        "meaningVn": "tạo ra phản ứng (tốt/xấu) với ai đó",
        "options": ["go down well with", "cotton on to", "pull through", "lash out at"],
        "correct": 0,
        "explanation": "Chính xác! 'Go down well with sb' là được ai đó đón nhận tích cực."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "lash out at",
        "sentence": "Under extreme sleep deprivation, the stressed guard began to <span class='blank'>_______</span> his comrades.",
        "hint": "speak angrily to; try to hit suddenly | giận dữ mắng nhiếc, tấn công bất ngờ",
        "meaningEn": "try to hit or attack sb suddenly; speak angrily to or against sb",
        "meaningVn": "đột nhiên tấn công ai dữ dội; giận dữ chỉ trích/mắng nhiếc ai",
        "options": ["lash out at", "follow up", "summon up", "play up"],
        "correct": 0,
        "explanation": "Đúng! 'Lash out at' là giận dữ chỉ trích, đay nghiến người khác."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "pass away",
        "sentence": "The beloved village elder quietly <span class='blank'>_______</span> in his sleep surrounded by family.",
        "hint": "die (polite euphemism) | qua đời, tạ thế",
        "meaningEn": "die (used to avoid saying 'die' when you think this might upset sb)",
        "meaningVn": "qua đời, tạ thế (cách nói trang trọng, giảm nhẹ)",
        "options": ["pass away", "get down", "ward off", "shrivel up"],
        "correct": 0,
        "explanation": "Chính xác! 'Pass away' là cách nói lịch sự, nhẹ nhàng thay cho từ mất/qua đời."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "play up",
        "sentence": "During the damp monsoon season, his old knee injury begins to <span class='blank'>_______</span> again.",
        "hint": "cause difficulties or pain; behave badly | dở chứng đau đớn / quậy phá",
        "meaningEn": "cause difficulties or pain for sb; behave badly",
        "meaningVn": "gây nên đau đớn khó khăn (vết thương tái phát); quậy phá cư xử tệ",
        "options": ["play up", "cotton on", "crease up", "pull through"],
        "correct": 0,
        "explanation": "Chuẩn! 'Play up' là bệnh/vết thương tái phát làm đau đớn."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "pull through",
        "sentence": "Despite severe fever and weak pulse, the resilient feline managed to <span class='blank'>_______</span> thanks to antidote.",
        "hint": "stay alive after serious illness/injury; succeed in crisis | qua khỏi cơn nguy kịch",
        "meaningEn": "manage to stay alive after being very ill or injured; succeed in difficult situation",
        "meaningVn": "thành công sống sót sau bạo bệnh/chấn thương; vượt qua tình huống hiểm nghèo",
        "options": ["pull through", "lash out", "get down", "pass away"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Pull through' là hồi sinh, qua khỏi cơn nguy kịch."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "shrivel up",
        "sentence": "Without adequate irrigation, the medicinal herbs will quickly <span class='blank'>_______</span> in the arid wind.",
        "hint": "become smaller, thinner, not fresh | khô héo, teo tóp lại",
        "meaningEn": "become smaller and thinner and not look fresh and healthy; become weaker",
        "meaningVn": "bị héo khô, teo nhỏ lại, gầy gò ốm yếu thiếu sức sống",
        "options": ["shrivel up", "come round", "follow up", "ward off"],
        "correct": 0,
        "explanation": "Chính xác! 'Shrivel up' là khô héo teo tóp lại do mất nước/sức khỏe."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Doctor Chiyo",
        "avatar": "🩺",
        "verb": "summon up",
        "sentence": "The frightened kitten had to <span class='blank'>_______</span> the courage to swallow the bitter medicine.",
        "hint": "manage to produce courage/quality in difficult situation | dồn hết can đảm",
        "meaningEn": "manage to produce a quality or reaction that helps you deal with difficult situation",
        "meaningVn": "dồn hết can đảm, gom hết sức lực để đối diện khó khăn",
        "options": ["summon up", "play up", "get over", "crease up"],
        "correct": 0,
        "explanation": "Đúng! 'Summon up the courage' là lấy hết can đảm đối mặt."
    },
    {
        "unit": 18,
        "unitTitle": "Unit 18: Reactions & Health",
        "shop": "Apothecary Clinic",
        "speaker": "Herbalist Yuzu",
        "avatar": "🌱",
        "verb": "ward off",
        "sentence": "Elderly herbalists hang dried mugwort bundles over doorways to <span class='blank'>_______</span> pestilence.",
        "hint": "prevent sb/sth from harming you | phòng ngừa, xua đuổi tai họa/bệnh tật",
        "meaningEn": "do sth to prevent sb or sth from harming you",
        "meaningVn": "phòng ngừa, phòng tránh, xua đuổi điều nguy hại",
        "options": ["ward off", "cotton on", "get down", "pull through"],
        "correct": 0,
        "explanation": "Chính xác! 'Ward off' là phòng tránh, xua đuổi bệnh tật nguy hại."
    },

    # ==================== UNIT 20: POWER AND SOCIAL ISSUES ====================
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "back down",
        "sentence": "Faced with unanimous petition from the town guild, the minister had to <span class='blank'>_______</span> from the tax increase.",
        "hint": "stop asking for sth due to opposition | lùi bước, nhượng bộ",
        "meaningEn": "stop asking for sth or stop saying you will do sth because a lot of people oppose you",
        "meaningVn": "thừa nhận sai, nhận thua/nhượng bộ vì nhiều người phản đối",
        "options": ["back down", "blend in", "crack down", "give in"],
        "correct": 0,
        "explanation": "Chính xác! 'Back down' là lùi bước, rút lại quyết định trước sức ép."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "blend in",
        "sentence": "The undercover detective dressed like a regular market vendor to <span class='blank'>_______</span> with the crowd.",
        "hint": "look similar to surroundings so not noticed | hòa lẫn, trà trộn",
        "meaningEn": "if sb/sth blends in, they are similar to others around them and not noticed",
        "meaningVn": "hòa lẫn, kết hợp và thích nghi không gây chú ý",
        "options": ["blend in", "bring about", "lock up", "phase out"],
        "correct": 0,
        "explanation": "Đúng! 'Blend in' là hòa nhập, trà trộn không để ai phát hiện."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "bring about",
        "sentence": "The educational decree aims to <span class='blank'>_______</span> long-lasting social equality in the kingdom.",
        "hint": "make sth happen, cause change | đem lại, tạo ra sự thay đổi",
        "meaningEn": "make sth happen, especially cause changes in a situation",
        "meaningVn": "gây ra, tạo nên điều gì đó, đặc biệt là thay đổi tình thế",
        "options": ["bring about", "get off", "opt out", "single out"],
        "correct": 0,
        "explanation": "Chuẩn! 'Bring about' là mang lại, tạo nên sự chuyển biến tích cực."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "crack down on",
        "sentence": "The city prefecture decided to strictly <span class='blank'>_______</span> counterfeit coinage rings.",
        "hint": "start dealing with crime strictly | thẳng tay trấn áp, trừng trị",
        "meaningEn": "start dealing with sb or sth much more strictly",
        "meaningVn": "phạt, xử phạt, trừng trị giải quyết vấn đề nghiêm ngặt",
        "options": ["crack down on", "hit back at", "stand up to", "talk down to"],
        "correct": 0,
        "explanation": "Chính xác! 'Crack down on' là siết chặt kỷ cương, thẳng tay trừng phạt."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "get in",
        "sentence": "After an intense election campaign, the reformist candidate managed to <span class='blank'>_______</span> as council chief.",
        "hint": "be elected for political job | đắc cử, trúng cử chức vụ",
        "meaningEn": "be elected for a political job",
        "meaningVn": "được bầu/trúng cử vào một chức vụ trong chính trị",
        "options": ["get in", "get off", "give in", "take over"],
        "correct": 0,
        "explanation": "Tuyệt! 'Get in' là đắc cử vào một cơ quan quyền lực."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "get off",
        "sentence": "Due to insufficient forensic evidence, the suspect managed to <span class='blank'>_______</span> with just a minor warning.",
        "hint": "not be punished severely in court | được tha bổng, giảm nhẹ tội",
        "meaningEn": "not be punished severely or at all in court; have holiday; send in post",
        "meaningVn": "được giảm nhẹ tội/tha bổng trước tòa; được nghỉ phép; gửi thư",
        "options": ["get off", "back down", "blend in", "lock up"],
        "correct": 0,
        "explanation": "Đúng! 'Get off' là thoát khỏi án phạt nặng."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "give in to",
        "sentence": "The heroic defenders swore they would never <span class='blank'>_______</span> foreign invaders' demands.",
        "hint": "stop competing, surrender | nhượng bộ, đầu hàng",
        "meaningEn": "stop competing/arguing and accept defeat; cannot control wanting sth",
        "meaningVn": "chịu thua, nhượng bộ, đầu hàng; từ bỏ kiềm chế",
        "options": ["give in to", "hit back at", "opt out of", "push around"],
        "correct": 0,
        "explanation": "Chính xác! 'Give in' là chịu thua, khuất phục trước đối phương."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "hit back",
        "sentence": "The senator immediately organized a press conference to <span class='blank'>_______</span> at slanderous rumors.",
        "hint": "criticize sb who criticized you; retaliate | phản công, đáp trả chỉ trích",
        "meaningEn": "criticize sb who has criticized you; deliberately hurt sb who hurt you",
        "meaningVn": "chỉ trích ngược lại người đã công kích mình; trả đũa",
        "options": ["hit back", "bring about", "phase out", "stand up to"],
        "correct": 0,
        "explanation": "Chuẩn! 'Hit back' là đáp trả, đánh trả lại những đòn công kích."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "lock up",
        "sentence": "The High Court ordered the bailiffs to <span class='blank'>_______</span> the convicted smugglers for five years.",
        "hint": "put sb in prison; lock all doors | tống giam vào tù / khóa chặt cửa",
        "meaningEn": "put sb in a prison; lock all doors and windows",
        "meaningVn": "bỏ tù ai đó; khóa kỹ cửa không cho ai vào",
        "options": ["lock up", "crack down", "get in", "talk down to"],
        "correct": 0,
        "explanation": "Đúng! 'Lock up' là tống giam vào nhà tù."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "opt out of",
        "sentence": "Individual provinces have the right to <span class='blank'>_______</span> the national trading treaty.",
        "hint": "decide not to take part in sth | lựa chọn rút lui, không tham gia",
        "meaningEn": "decide not to take part in sth or stop taking part in it",
        "meaningVn": "lựa chọn không tham gia, xin rút khỏi chương trình/hiệp định",
        "options": ["opt out of", "back down from", "blend in with", "single out of"],
        "correct": 0,
        "explanation": "Chính xác! 'Opt out of' là tự nguyện rút lui không tham dự."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "phase out",
        "sentence": "The environment ministry agreed to gradually <span class='blank'>_______</span> single-use coal furnaces by next winter.",
        "hint": "gradually stop using sth | từng bước loại bỏ dần",
        "meaningEn": "gradually stop using sth",
        "meaningVn": "dần dần từ bỏ, xóa bỏ việc sử dụng thứ gì đó theo lộ trình",
        "options": ["phase out", "push around", "take over", "bring about"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Phase out' là loại bỏ dần dần qua từng giai đoạn."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "push around",
        "sentence": "Never let arrogant senior guild officers <span class='blank'>_______</span> you in the workshop.",
        "hint": "keep ordering sb unfairly; bully | ức hiếp, sai bảo hống hách",
        "meaningEn": "keep telling sb what to do in an unfair or unpleasant way",
        "meaningVn": "bắt ép, thúc đẩy, bắt nạt ai đó một cách thô lỗ",
        "options": ["push around", "get off", "give in", "hit back"],
        "correct": 0,
        "explanation": "Đúng! 'Push sb around' là bắt nạt, sai khiến người khác quá đáng."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "single out",
        "sentence": "The superintendent decided to <span class='blank'>_______</span> the youngest recruit for exceptional bravery.",
        "hint": "choose one person for special attention | chọn riêng ra để tuyên dương/phạt",
        "meaningEn": "choose one person from a group for special attention (praise or criticism)",
        "meaningVn": "gây sự chú ý đặc biệt, chọn riêng một người để khen thưởng hoặc phê bình",
        "options": ["single out", "blend in", "crack down", "opt out"],
        "correct": 0,
        "explanation": "Chính xác! 'Single out' là chọn riêng một cá nhân để nêu gương hoặc chỉ trích."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "stand up to",
        "sentence": "It takes immense integrity to <span class='blank'>_______</span> corrupt magistrates who abuse their power.",
        "hint": "not allow yourself to be treated badly by authority | đứng lên kháng cự kẻ quyền thế",
        "meaningEn": "not allow yourself to be treated badly, especially by sb in authority",
        "meaningVn": "đương đầu, dũng cảm chống lại kẻ có quyền lực đối xử bất công",
        "options": ["stand up to", "back down from", "talk down to", "lock up"],
        "correct": 0,
        "explanation": "Tuyệt! 'Stand up to' là dũng cảm đương đầu, không chịu khuất phục."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Governor Kenshin",
        "avatar": "⚖️",
        "verb": "take over",
        "sentence": "A prestigious trade corporation offered to <span class='blank'>_______</span> the struggling harbor shipyard.",
        "hint": "take control of sth; begin doing what sb else did | tiếp quản, nắm quyền",
        "meaningEn": "take control of sth; begin to do sth that sb else was doing",
        "meaningVn": "kiểm soát thứ gì đó; đảm nhận công việc của ai đang làm",
        "options": ["take over", "bring about", "phase out", "get in"],
        "correct": 0,
        "explanation": "Chính xác! 'Take over' là tiếp quản, thâu tóm quyền kiểm soát."
    },
    {
        "unit": 20,
        "unitTitle": "Unit 20: Power & Social Issues",
        "shop": "Council Hall",
        "speaker": "Agent Yami",
        "avatar": "🥷",
        "verb": "talk down to",
        "sentence": "A good teacher should never <span class='blank'>_______</span> pupils as though they are incapable of understanding.",
        "hint": "talk as if others are inferior | nói giọng trịch thượng, khinh miệt",
        "meaningEn": "talk to sb as if you think they are not as clever or important as you are",
        "meaningVn": "nói chuyện tỏ vẻ xem thường, giọng điệu trịch thượng",
        "options": ["talk down to", "crack down on", "hit back at", "push around"],
        "correct": 0,
        "explanation": "Đúng! 'Talk down to' là lên giọng kẻ cả, coi thường người đối diện."
    },

    # ==================== UNIT 22: QUALITY AND THE ARTS ====================
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "brighten up",
        "sentence": "A fresh bouquet of cherry blossoms will instantly <span class='blank'>_______</span> the gallery showroom.",
        "hint": "have more color/light; look happier; sunnier weather | làm rực rỡ, bừng sáng",
        "meaningEn": "start to have more color or light; start looking happier; weather becomes sunnier",
        "meaningVn": "trở nên sáng sủa hơn; làm thứ gì đó rạng rỡ; trở nên tươi vui",
        "options": ["brighten up", "liven up", "mess up", "paper over"],
        "correct": 0,
        "explanation": "Chính xác! 'Brighten up' là làm bừng sáng không gian hoặc tâm trạng."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "check out",
        "sentence": "The museum appraiser arrived to <span class='blank'>_______</span> the provenance of the antique oil painting.",
        "hint": "examine to ensure true/satisfactory | kiểm tra tính xác thực",
        "meaningEn": "examine sb or sth to be certain everything is correct, true or satisfactory",
        "meaningVn": "kiểm tra ai hay thứ gì để đảm bảo chắc chắn mọi thứ đúng đắn",
        "options": ["check out", "make over", "patch up", "run down"],
        "correct": 0,
        "explanation": "Đúng! 'Check out' là kiểm tra, thẩm định nguồn gốc và chất lượng."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "liven up",
        "sentence": "Adding traditional shamisen melodies will certainly <span class='blank'>_______</span> the art exhibition atmosphere.",
        "hint": "make more interesting or exciting | khuấy động, làm sống động",
        "meaningEn": "make sth more interesting or exciting; give interesting appearance/taste",
        "meaningVn": "làm thứ gì đó trở nên có sức sống, sôi động và cuốn hút hơn",
        "options": ["liven up", "brighten up", "scrape through", "smarten up"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Liven up' là thổi bùng sức sống, khuấy động bầu không khí."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "make over",
        "sentence": "The studio hired a renowned decorator to completely <span class='blank'>_______</span> the theater foyer.",
        "hint": "change or improve appearance | lột xác, tân trang diện mạo",
        "meaningEn": "change or improve the appearance of sb or sth",
        "meaningVn": "thay đổi hoặc cải thiện toàn diện vẻ ngoài của ai/cái gì",
        "options": ["make over", "mess up", "stand out", "touch up"],
        "correct": 0,
        "explanation": "Chính xác! 'Make over' là làm mới, đại tu diện mạo."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "mess up",
        "sentence": "Be careful when applying gold leaf; one shaky hand movement can <span class='blank'>_______</span> the entire canvas.",
        "hint": "make a mistake, spoil sth | làm hỏng bét, làm lộn xộn",
        "meaningEn": "make a mistake or do sth badly; make sth dirty or untidy",
        "meaningVn": "gây nên lỗi lầm hoặc làm gì hỏng bét; làm mọi thứ hỗn độn",
        "options": ["mess up", "pick up", "paper over", "write off"],
        "correct": 0,
        "explanation": "Chuẩn! 'Mess up' là phá hỏng, làm rối tung công việc."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "paper over",
        "sentence": "Attempting to <span class='blank'>_______</span> fundamental structural flaws with fresh plaster is dangerous.",
        "hint": "hide a problem rather than finding solution | che đậy, lấp liếm lỗi lầm",
        "meaningEn": "hide a problem or disagreement rather than finding a satisfactory solution",
        "meaningVn": "trốn tránh, che đậy vấn đề thay vì đối diện giải quyết tận gốc",
        "options": ["paper over", "patch up", "smarten up", "waste away"],
        "correct": 0,
        "explanation": "Đúng! 'Paper over' là tìm cách che đậy tạm thời vấn đề trầm trọng."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "patch up",
        "sentence": "The art conservationist managed to carefully <span class='blank'>_______</span> the torn silk tapestry.",
        "hint": "repair quickly; reconcile friendship | chắp vá sửa tạm / hàn gắn tình cảm",
        "meaningEn": "repair sth quickly and not well; become friends again; give basic first aid",
        "meaningVn": "sửa chữa nhanh chóng chắp vá; làm bạn trở lại sau cãi vã; sơ cứu",
        "options": ["patch up", "brighten up", "run down", "stand out"],
        "correct": 0,
        "explanation": "Chính xác! 'Patch up' là chắp vá phục hồi hoặc hàn gắn mâu thuẫn."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "pick up",
        "sentence": "After the exhibition opened in Tokyo, sales of handcrafted ceramics began to <span class='blank'>_______</span> rapidly.",
        "hint": "improve, increase | khởi sắc, hồi phục, tăng trưởng",
        "meaningEn": "improve; become stronger or greater",
        "meaningVn": "cải thiện, khởi sắc, phục hồi",
        "options": ["pick up", "mess up", "scrape through", "touch up"],
        "correct": 0,
        "explanation": "Tuyệt! 'Pick up' là khởi sắc, có dấu hiệu đi lên rõ rệt."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "run down",
        "sentence": "Decades of neglected maintenance caused the historic riverside opera house to become completely <span class='blank'>_______</span>.",
        "hint": "reduce size/importance, deteriorate | xuống cấp, thoái trào",
        "meaningEn": "if an organization or area is run down, its size and activity is reduced; deteriorate",
        "meaningVn": "trở nên xuống cấp, sập xệ; suy giảm quy mô và tầm quan trọng",
        "options": ["run down", "make over", "paper over", "waste away"],
        "correct": 0,
        "explanation": "Chính xác! 'Run down' là bị xuống cấp tồi tàn theo thời gian."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "scrape through",
        "sentence": "With only minimal preparation, the apprentice was relieved to barely <span class='blank'>_______</span> his gilding evaluation.",
        "hint": "succeed, but not impressively | trót lọt qua kỳ thi, vừa đủ đậu",
        "meaningEn": "succeed in doing sth, but not in a very impressive way",
        "meaningVn": "trót lọt qua, vượt qua một cách trầy trật suýt rớt",
        "options": ["scrape through", "liven up", "smarten up", "write off"],
        "correct": 0,
        "explanation": "Đúng! 'Scrape through' là vừa đủ điểm đậu, vượt qua trong gang tấc."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "smarten up",
        "sentence": "Before greeting the imperial art judges, the apprentice took time to <span class='blank'>_______</span> his workshop uniform.",
        "hint": "improve appearance, tidy up | tút tát, làm cho tươm tất gọn gàng",
        "meaningEn": "improve appearance by cleaning/painting; make yourself look tidy and clean",
        "meaningVn": "cải thiện vẻ ngoài bằng cách sơn sửa; làm bản thân trở nên bảnh bao, gọn gàng",
        "options": ["smarten up", "mess up", "patch up", "touch up"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Smarten up' là chỉnh đốn cho gọn gàng, lịch sự."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "stand out",
        "sentence": "Her vivid impressionist portraits truly <span class='blank'>_______</span> among hundreds of conventional entries.",
        "hint": "be much more impressive; easy to notice | nổi bật vượt trội",
        "meaningEn": "be much more impressive or important than others; easy to see or notice",
        "meaningVn": "trở nên quan trọng/ấn tượng hơn hẳn; nổi bật dễ thấy",
        "options": ["stand out", "brighten up", "paper over", "run down"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Stand out' là nổi bật, vượt trội hẳn so với xung quanh."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "touch up",
        "sentence": "The master artist used a fine sable brush to gently <span class='blank'>_______</span> highlights in the lacquer portrait.",
        "hint": "make surface look better with small improvements | dặm lại, tút lại vài nét nhỏ",
        "meaningEn": "make a surface look better with small improvements",
        "meaningVn": "trang trí, tân trang dặm lại vài nét nhỏ trên bề mặt",
        "options": ["touch up", "check out", "make over", "waste away"],
        "correct": 0,
        "explanation": "Chính xác! 'Touch up' là dặm sửa, chấm phá thêm vài chi tiết nhỏ."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Curator Daiki",
        "avatar": "🖼️",
        "verb": "waste away",
        "sentence": "Deprived of natural light and nourishment, the delicate bonsai tree began to <span class='blank'>_______</span>.",
        "hint": "gradually become thinner/weaker | gầy mòn, suy kiệt tàn tạ",
        "meaningEn": "gradually become thinner and weaker over a period of time (due to illness)",
        "meaningVn": "gầy gò, ốm yếu, xanh xao héo mòn dần theo thời gian",
        "options": ["waste away", "pick up", "scrape through", "smarten up"],
        "correct": 0,
        "explanation": "Đúng! 'Waste away' là tiều tụy, gầy mòn vì bệnh tật hoặc thiếu dưỡng chất."
    },
    {
        "unit": 22,
        "unitTitle": "Unit 22: Quality & Arts",
        "shop": "Artisan Gallery",
        "speaker": "Painter Hanako",
        "avatar": "🎨",
        "verb": "write off",
        "sentence": "After the carriage collision crushed the wagon frame, insurers decided to completely <span class='blank'>_______</span> the vehicle.",
        "hint": "damage beyond repair; stop giving attention | phế bỏ (xe); xóa sổ, coi như bỏ đi",
        "meaningEn": "damage vehicle so badly not worth repairing; decide sb/sth will not succeed",
        "meaningVn": "gây thiệt hại đến mức không đáng sửa (phế phẩm); bỏ mặc vì coi như vô vọng",
        "options": ["write off", "brighten up", "liven up", "patch up"],
        "correct": 0,
        "explanation": "Chính xác! 'Write off' là tuyên bố phế bỏ, coi như bỏ đi vì không thể cứu vãn."
    },

    # ==================== UNIT 24: RELATIONSHIPS AND PEOPLE ====================
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "answer back",
        "sentence": "In traditional apprenticeships, pupils were taught never to <span class='blank'>_______</span> to the guild masters.",
        "hint": "reply rudely to person with authority | cãi lại, hỗn hào đáp trả",
        "meaningEn": "reply rudely to sb who has more authority than you",
        "meaningVn": "phản bác, cãi lại người có thẩm quyền/bề trên một cách vô lễ",
        "options": ["answer back", "ask out", "break up", "bring out"],
        "correct": 0,
        "explanation": "Chính xác! 'Answer back' là cãi tay đôi, nói hỗn với bề trên."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "ask out",
        "sentence": "After weeks of nervous anticipation, Kenji finally found the courage to <span class='blank'>_______</span> Yuki to the fireworks festival.",
        "hint": "invite sb on romantic date | mời ai đi hẹn hò",
        "meaningEn": "invite sb to go with you to cinema, restaurant because you want romantic relationship",
        "meaningVn": "hẹn hò, mời ai đó đi chơi vì muốn bắt đầu mối quan hệ lãng mạn",
        "options": ["ask out", "bump into", "cancel out", "crowd around"],
        "correct": 0,
        "explanation": "Đúng! 'Ask sb out' là ngỏ lời mời ai đi hẹn hò."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "break up",
        "sentence": "Differences in long-term life goals eventually caused the young couple to amicably <span class='blank'>_______</span>.",
        "hint": "end relationship; divide into pieces; meeting ends | chia tay; tan rã; bế mạc",
        "meaningEn": "end relationship; break sth into smaller pieces; meeting ends and people leave",
        "meaningVn": "chia tay, kết thúc mối quan hệ; chia nhỏ ra; giải tán/kết thúc buổi họp",
        "options": ["break up", "bring together", "come between", "go together"],
        "correct": 0,
        "explanation": "Chính xác! 'Break up' là kết thúc mối quan hệ tình cảm hoặc giải tán."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "bring out",
        "sentence": "A good creative mentor always knows how to <span class='blank'>_______</span> the best hidden talents in their students.",
        "hint": "make show a quality; launch new product | khơi dậy phẩm chất / tung sản phẩm mới",
        "meaningEn": "make sb/sth show a quality that they have; produce new product and sell it",
        "meaningVn": "làm phẩm chất của ai đó biểu lộ ra; đưa sản phẩm mới ra thị trường",
        "options": ["bring out", "meet up", "open up", "pick on"],
        "correct": 0,
        "explanation": "Tuyệt! 'Bring out' là khơi dậy, làm nổi bật phẩm chất tốt đẹp."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "bring together",
        "sentence": "The annual harvest lantern celebration helps to <span class='blank'>_______</span> estranged family members from all provinces.",
        "hint": "create situation where people meet and connect | gắn kết, tụ họp mọi người",
        "meaningEn": "create a situation in which people meet and do sth together, especially when apart",
        "meaningVn": "tụ tập mọi người lại với nhau (đặc biệt lâu ngày không gặp)",
        "options": ["bring together", "sound out", "take after", "answer back"],
        "correct": 0,
        "explanation": "Chính xác! 'Bring together' là gắn kết, mang mọi người về bên nhau."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "bump into",
        "sentence": "While buying fresh tea leaves at the market, I happened to <span class='blank'>_______</span> my childhood classmate.",
        "hint": "meet sb unexpectedly; hit against sth | tình cờ đụng mặt, chạm trán",
        "meaningEn": "meet sb unexpectedly; accidentally hit against sth",
        "meaningVn": "tình cờ gặp ai đó; vô tình va chạm phải thứ gì",
        "options": ["bump into", "ask out", "break up", "come between"],
        "correct": 0,
        "explanation": "Đúng! 'Bump into' là tình cờ bắt gặp ai đó trên đường."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "cancel out",
        "sentence": "Their opposite personality traits seemed to perfectly <span class='blank'>_______</span> their individual weaknesses.",
        "hint": "stop having effect; balance each other | triệt tiêu tác dụng xấu, bù trừ",
        "meaningEn": "stop sth from having any effect",
        "meaningVn": "làm tiêu tan hiệu ứng, tác dụng bù trừ triệt tiêu nhau",
        "options": ["cancel out", "crowd around", "go together", "meet up"],
        "correct": 0,
        "explanation": "Chuẩn xác! 'Cancel out' là triệt tiêu, hóa giải lẫn nhau."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "come between",
        "sentence": "Petty financial jealousy should never be allowed to <span class='blank'>_______</span> two lifelong companions.",
        "hint": "harm the relationship between two people | xen vào gây rạn nứt tình cảm",
        "meaningEn": "if sth comes between two people, it harms their relationship",
        "meaningVn": "can thiệp, chen ngang gây rạn nứt mối quan hệ của hai người",
        "options": ["come between", "bring out", "open up", "sound out"],
        "correct": 0,
        "explanation": "Đúng! 'Come between' là làm chia rẽ, rạn nứt tình cảm."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "crowd around",
        "sentence": "Curious villagers began to <span class='blank'>_______</span> the wandering minstrel performing on the street.",
        "hint": "move together to surround sb/sth | xúm xít vây quanh",
        "meaningEn": "move to a particular place at the same time as a lot of other people",
        "meaningVn": "bu quanh, xúm lại đông đúc quanh ai/cái gì",
        "options": ["crowd around", "pick on", "take after", "answer back"],
        "correct": 0,
        "explanation": "Chính xác! 'Crowd around' là vây quanh, xúm lại theo dõi."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "go together",
        "sentence": "Patience and deep empathy naturally <span class='blank'>_______</span> in any successful lasting friendship.",
        "hint": "frequently exist together; blend nicely | đi đôi với nhau, hòa hợp",
        "meaningEn": "if two things go together, they frequently exist together or seem harmonious in combination",
        "meaningVn": "xuất hiện cùng nhau; kết hợp với nhau, đi đôi với nhau một cách hài hòa",
        "options": ["go together", "ask out", "bump into", "cancel out"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Go together' là luôn đi đôi và bổ trợ hoàn hảo cho nhau."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "meet up",
        "sentence": "The alumni group decided to <span class='blank'>_______</span> at the old teahouse every spring equinox.",
        "hint": "come together with sb as planned | gặp gỡ, hội ngộ",
        "meaningEn": "come together with sb, either unexpectedly or as planned",
        "meaningVn": "gặp gỡ, tụ họp lại với ai đó (theo kế hoạch hoặc tình cờ)",
        "options": ["meet up", "bring out", "come between", "open up"],
        "correct": 0,
        "explanation": "Đúng! 'Meet up' là hẹn gặp mặt, tụ họp bạn bè."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "open up",
        "sentence": "In the quiet courtyard under the stars, she finally began to <span class='blank'>_______</span> about her past hardships.",
        "hint": "talk freely about feelings; unlock | bộc bạch tâm tư, trải lòng",
        "meaningEn": "talk more about personal feelings and experiences; open locked door",
        "meaningVn": "cởi mở, trải lòng bộc bạch cảm xúc; mở khóa cửa",
        "options": ["open up", "pick on", "sound out", "take after"],
        "correct": 0,
        "explanation": "Chính xác! 'Open up' là mở lòng chia sẻ những tâm tư thầm kín."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "pick on",
        "sentence": "The teacher stepped in firmly when older students tried to <span class='blank'>_______</span> the quiet new transfer pupil.",
        "hint": "treat sb unfairly, criticize/bully | bắt nạt, nhắm vào ức hiếp",
        "meaningEn": "keep treating sb badly or unfairly, especially by criticizing them",
        "meaningVn": "bắt nạt, ức hiếp, liên tục đối xử bất công và chỉ trích ai",
        "options": ["pick on", "break up", "bring together", "cancel out"],
        "correct": 0,
        "explanation": "Chuẩn! 'Pick on' là nhắm vào bắt nạt, trù dập ai đó."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Matchmaker Hana",
        "avatar": "💌",
        "verb": "sound out",
        "sentence": "Before proposing the partnership agreement, the envoy wished to quietly <span class='blank'>_______</span> the foreign merchants.",
        "hint": "try to find out opinions/feelings | thăm dò ý kiến, ướm lời",
        "meaningEn": "try to find out sb's opinions, ideas, feelings",
        "meaningVn": "thăm dò cảm xúc, ý kiến, suy nghĩ của người khác",
        "options": ["sound out", "answer back", "bump into", "go together"],
        "correct": 0,
        "explanation": "Chính xác! 'Sound out' là ướm hỏi, thăm dò suy nghĩ của đối phương."
    },
    {
        "unit": 24,
        "unitTitle": "Unit 24: Relationships",
        "shop": "Friendship Plaza",
        "speaker": "Counselor Rin",
        "avatar": "🌸",
        "verb": "take after",
        "sentence": "With her keen artistic eye and gentle humor, the daughter clearly <span class='blank'>_______</span> her grandmother.",
        "hint": "look or behave like an older relative | giống ai trong dòng họ",
        "meaningEn": "look or behave like an older relative",
        "meaningVn": "giống với ai đó (về tính cách, ngoại hình của người thân lớn tuổi)",
        "options": ["take after", "ask out", "bring out", "meet up"],
        "correct": 0,
        "explanation": "Tuyệt vời! 'Take after' là thừa hưởng nét ngoại hình hoặc tính cách từ người thân."
    }
]

print(f"Loaded {len(DATA)} phrasal verbs across all 12 units!")

# Generate Section HTML
section_html = '''        <!-- ==================== VIEW 6: SUBTASK - VOCABULARY HSG 12 ==================== -->
        <section id="task-hsg12-vocab" class="view-panel task-view" style="padding: 0; margin: 0; width: 100%; max-width: 100%;">
          <div id="neko-michi-vocab-root">
            <style>
              #neko-michi-vocab-root {
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
              }

              #neko-michi-vocab-root * {
                box-sizing: border-box;
                user-select: none;
              }

              #neko-michi-vocab-root #game-container {
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
              }

              #neko-michi-vocab-root #top-hud {
                min-height: 74px;
                background: rgba(255, 253, 249, 0.96);
                backdrop-filter: blur(8px);
                border-bottom: 4px solid var(--border-dark);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;
                z-index: 10;
                flex-wrap: wrap;
                gap: 10px;
              }

              #neko-michi-vocab-root .hud-title-group {
                display: flex;
                align-items: center;
                gap: 12px;
              }

              #neko-michi-vocab-root .hud-title {
                font-family: var(--font-heading);
                font-size: 24px;
                font-weight: 700;
                color: var(--wood-dark);
                display: flex;
                align-items: center;
                gap: 8px;
              }

              #neko-michi-vocab-root .hud-stats {
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
              }

              #neko-michi-vocab-root .stat-badge {
                background: var(--parchment);
                border: 3px solid var(--border-dark);
                border-radius: 999px;
                padding: 5px 14px;
                font-size: 15px;
                font-weight: 800;
                display: flex;
                align-items: center;
                gap: 6px;
                box-shadow: var(--shadow-sm);
              }

              #neko-michi-vocab-root .stat-badge.coins { color: var(--gold-coin); }
              #neko-michi-vocab-root .stat-badge.harmony { color: var(--matcha-green); }
              #neko-michi-vocab-root .stat-badge.unit-filter { color: var(--terracotta); background: #FFF7ED; font-size: 13px; }

              #neko-michi-vocab-root .btn-dict-open {
                background: var(--sky-blue);
                color: #FFF;
                border: 3px solid var(--border-dark);
                border-radius: 999px;
                padding: 6px 16px;
                font-family: var(--font-heading);
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
                box-shadow: 0 3px 0 var(--border-dark);
                transition: all 0.15s ease;
                display: flex;
                align-items: center;
                gap: 6px;
              }

              #neko-michi-vocab-root .btn-dict-open:hover {
                transform: translateY(-2px);
                background: #0369A1;
                box-shadow: 0 5px 0 var(--border-dark);
              }

              #neko-michi-vocab-root #street-viewport {
                flex: 1;
                position: relative;
                overflow: hidden;
              }

              #neko-michi-vocab-root canvas#street-canvas {
                display: block;
                width: 100%;
                height: 100%;
              }

              #neko-michi-vocab-root .modal-backdrop {
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
              }

              #neko-michi-vocab-root .modal-backdrop.active {
                opacity: 1;
                pointer-events: auto;
              }

              #neko-michi-vocab-root .quest-card {
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
              }

              #neko-michi-vocab-root .modal-backdrop.active .quest-card {
                transform: translateY(0) scale(1);
              }

              #neko-michi-vocab-root .quest-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 3px dashed var(--wood-light);
                padding-bottom: 12px;
              }

              #neko-michi-vocab-root .quest-speaker {
                display: flex;
                align-items: center;
                gap: 12px;
              }

              #neko-michi-vocab-root .speaker-avatar {
                font-size: 36px;
                background: #FFF;
                border: 3px solid var(--border-dark);
                border-radius: 50%;
                width: 54px;
                height: 54px;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              #neko-michi-vocab-root .speaker-info h3 {
                font-family: var(--font-heading);
                font-size: 20px;
                color: var(--wood-dark);
                margin: 0;
              }

              #neko-michi-vocab-root .speaker-info p {
                font-size: 14px;
                color: #6B7280;
                font-weight: 600;
                margin: 0;
              }

              #neko-michi-vocab-root .unit-tag {
                background: #FEF3C7;
                color: #92400E;
                border: 2px solid #F59E0B;
                padding: 4px 12px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 700;
              }

              #neko-michi-vocab-root .quest-body {
                background: #FDF8F0;
                border: 2px solid #EFE4D6;
                border-radius: 16px;
                padding: 16px 20px;
              }

              #neko-michi-vocab-root .instruction-label {
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: var(--terracotta);
                margin-bottom: 6px;
                display: block;
              }

              #neko-michi-vocab-root .sentence-text {
                font-size: 19px;
                line-height: 1.6;
                font-weight: 600;
                color: var(--indigo-text);
                margin: 0;
              }

              #neko-michi-vocab-root .sentence-text .blank {
                display: inline-block;
                min-width: 140px;
                border-bottom: 3px solid var(--terracotta);
                color: var(--terracotta);
                text-align: center;
                font-weight: 800;
                padding: 0 8px;
              }

              #neko-michi-vocab-root .gloss-hint {
                margin-top: 10px;
                font-size: 15px;
                color: #4B5563;
                background: rgba(255,255,255,0.75);
                padding: 8px 12px;
                border-radius: 8px;
                border-left: 3px solid #F59E0B;
                margin-bottom: 0;
                font-weight: 500;
              }

              #neko-michi-vocab-root .options-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
              }

              #neko-michi-vocab-root .btn-option {
                background: #FFFFFF;
                border: 3px solid var(--border-dark);
                border-radius: 14px;
                padding: 14px 18px;
                font-family: var(--font-body);
                font-size: 17px;
                font-weight: 700;
                color: var(--wood-dark);
                cursor: pointer;
                text-align: center;
                transition: all 0.15s ease;
                box-shadow: 0 4px 0 var(--border-dark);
              }

              #neko-michi-vocab-root .btn-option:hover {
                background: #FFF9C4;
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--border-dark);
              }

              #neko-michi-vocab-root .btn-option:active {
                transform: translateY(2px);
                box-shadow: 0 2px 0 var(--border-dark);
              }

              #neko-michi-vocab-root .btn-option.correct {
                background: var(--matcha-green) !important;
                color: #FFF !important;
                border-color: #1B5E20 !important;
                box-shadow: 0 4px 0 #1B5E20 !important;
              }

              #neko-michi-vocab-root .btn-option.incorrect {
                background: #E53935 !important;
                color: #FFF !important;
                border-color: #B71C1C !important;
                box-shadow: 0 4px 0 #B71C1C !important;
              }

              #neko-michi-vocab-root .feedback-box {
                display: none;
                padding: 14px 18px;
                border-radius: 14px;
                font-size: 16px;
                line-height: 1.5;
                font-weight: 600;
                animation: nekoFadeIn 0.2s ease;
              }

              #neko-michi-vocab-root .feedback-box.correct {
                display: block;
                background: var(--matcha-light);
                border: 2px solid var(--matcha-green);
                color: #1B5E20;
              }

              #neko-michi-vocab-root .feedback-box.incorrect {
                display: block;
                background: #FFEBEE;
                border: 2px solid #E53935;
                color: #B71C1C;
              }

              #neko-michi-vocab-root .quest-actions {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
              }

              #neko-michi-vocab-root .btn-next {
                background: var(--terracotta);
                color: #FFF;
                font-family: var(--font-heading);
                font-size: 18px;
                font-weight: 700;
                border: 3px solid var(--border-dark);
                border-radius: 12px;
                padding: 10px 24px;
                cursor: pointer;
                box-shadow: 0 4px 0 var(--border-dark);
                transition: all 0.15s ease;
              }

              #neko-michi-vocab-root .btn-next:hover {
                background: #E64A19;
                transform: translateY(-2px);
                box-shadow: 0 6px 0 var(--border-dark);
              }

              #neko-michi-vocab-root .btn-close-quest {
                background: #FFF;
                color: var(--wood-dark);
                font-family: var(--font-heading);
                font-size: 15px;
                font-weight: 700;
                border: 2px solid var(--border-dark);
                border-radius: 12px;
                padding: 8px 16px;
                cursor: pointer;
              }

              @keyframes nekoFadeIn {
                from { opacity: 0; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
              }

              #neko-michi-vocab-root #bottom-toolbar {
                min-height: 80px;
                background: rgba(255, 253, 249, 0.96);
                border-top: 4px solid var(--border-dark);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 8px 12px;
                z-index: 10;
                gap: 6px;
                flex-wrap: nowrap;
                overflow-x: auto;
                scrollbar-width: thin;
              }

              #neko-michi-vocab-root .shop-slot-btn {
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 12px;
                padding: 6px 12px;
                font-family: var(--font-heading);
                font-size: 14px;
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
              }

              #neko-michi-vocab-root .shop-slot-btn.active {
                background: #FEF3C7;
                border-color: #D97706;
                color: #92400E;
                transform: translateY(2px);
                box-shadow: 0 1px 0 #D97706;
              }

              #neko-michi-vocab-root .shop-slot-btn:hover {
                background: #FFF3E0;
                transform: translateY(-2px);
                box-shadow: 0 5px 0 var(--border-dark);
              }

              /* Handbook Modal */
              #neko-michi-vocab-root .dict-modal-card {
                background: #FFFDF9;
                border: 4px solid var(--border-dark);
                border-radius: 24px;
                width: 100%;
                max-width: 940px;
                max-height: 88vh;
                display: flex;
                flex-direction: column;
                box-shadow: var(--shadow-lg);
                overflow: hidden;
              }

              #neko-michi-vocab-root .dict-header {
                padding: 16px 24px;
                background: #FDF8F0;
                border-bottom: 3px solid var(--border-dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 12px;
              }

              #neko-michi-vocab-root .dict-filter-row {
                display: flex;
                gap: 6px;
                flex-wrap: wrap;
                padding: 10px 20px;
                background: #FFF8EE;
                border-bottom: 2px solid #E5E7EB;
                max-height: 110px;
                overflow-y: auto;
              }

              #neko-michi-vocab-root .dict-tab-btn {
                background: #FFF;
                border: 2px solid var(--border-dark);
                border-radius: 8px;
                padding: 4px 10px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                white-space: nowrap;
              }

              #neko-michi-vocab-root .dict-tab-btn.active {
                background: var(--terracotta);
                color: #FFF;
                border-color: var(--border-dark);
              }

              #neko-michi-vocab-root .dict-body {
                flex: 1;
                overflow-y: auto;
                padding: 16px 24px;
                display: flex;
                flex-direction: column;
                gap: 12px;
              }

              #neko-michi-vocab-root .dict-item-card {
                background: #FFF;
                border: 2px solid #E5E7EB;
                border-left: 5px solid var(--matcha-green);
                border-radius: 12px;
                padding: 12px 16px;
                display: flex;
                flex-direction: column;
                gap: 6px;
              }

              #neko-michi-vocab-root .dict-item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }

              #neko-michi-vocab-root .dict-verb {
                font-family: var(--font-heading);
                font-size: 18px;
                font-weight: 700;
                color: var(--terracotta);
              }

              #neko-michi-vocab-root .dict-unit-badge {
                font-size: 12px;
                background: #F3F4F6;
                padding: 2px 8px;
                border-radius: 6px;
                font-weight: 700;
                color: #4B5563;
              }

              #neko-michi-vocab-root .dict-meaning-en {
                font-size: 15px;
                color: #1F2937;
                font-weight: 600;
              }

              #neko-michi-vocab-root .dict-meaning-vn {
                font-size: 14px;
                color: var(--matcha-green);
                font-weight: 700;
              }
            </style>

            <div id="game-container">
              <header id="top-hud">
                <div class="hud-title-group">
                  <div class="hud-title">
                    <span>🐾</span> Neko Michi: Phrasal Street
                  </div>
                  <button class="btn-dict-open" onclick="openHandbookModal()">
                    <span>📖</span> Sổ tay Tra Cứu (12 Units / 120+ Verbs)
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
                      <p style="font-size: 13px; color: #6B7280; margin: 4px 0 0 0;">Tổng hợp chi tiết định nghĩa tiếng Anh & nghĩa tiếng Việt cho toàn bộ 12 Topics</p>
                    </div>
                    <button class="btn-close-quest" onclick="closeHandbookModal()">✕ Đóng</button>
                  </div>

                  <div class="dict-filter-row">
                    <button class="dict-tab-btn active" id="dict-tab-all" onclick="filterHandbook('all')">Tất Cả (120+ Verbs)</button>
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
                  </div>

                  <div class="dict-body" id="dict-items-container">
                    <!-- Populated dynamically via JS -->
                  </div>
                </div>
              </div>

            </div>

            <script>
              // Complete Destination C1 & C2 Phrasal Verbs Database
              const FULL_VOCAB_DATABASE = ''' + json.dumps(DATA, ensure_ascii=False, indent=2) + ''';

              let currentTopicFilter = 'all'; // 'all' or unit number (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24)
              let currentFilteredQuests = [...FULL_VOCAB_DATABASE];
              let currentQuestIndex = 0;

              let gameState = {
                coins: 120,
                harmony: 85,
                activeQuest: null
              };

              const canvas = document.getElementById('street-canvas');
              const ctx = canvas ? canvas.getContext('2d') : null;
              let cats = [];

              function resizeCanvas() {
                if (!canvas || !canvas.parentElement) return;
                const w = canvas.parentElement.clientWidth;
                const h = canvas.parentElement.clientHeight;
                if (w > 0 && h > 0) {
                  canvas.width = w;
                  canvas.height = h;
                }
              }
              window.addEventListener('resize', resizeCanvas);
              resizeCanvas();

              class CatVillager {
                constructor(x, y, speed, name, sprite, unit) {
                  this.x = x;
                  this.y = y;
                  this.speed = speed;
                  this.name = name;
                  this.sprite = sprite;
                  this.unit = unit;
                  this.bobble = Math.random() * Math.PI;
                  this.hasQuest = true;
                }

                update() {
                  this.x += this.speed;
                  this.bobble += 0.08;
                  const w = (canvas && canvas.width > 0) ? canvas.width : 1000;
                  if (this.x > w + 60) this.x = -60;
                  if (this.x < -60) this.x = w + 60;
                }

                draw() {
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
                  if (this.hasQuest) {
                    ctx.fillStyle = "#FFF";
                    ctx.strokeStyle = "#4E342E";
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    if (ctx.roundRect) {
                      ctx.roundRect(this.x - 6, this.y - 20 + offsetY, 60, 32, 10);
                    } else {
                      ctx.rect(this.x - 6, this.y - 20 + offsetY, 60, 32);
                    }
                    ctx.fill();
                    ctx.stroke();

                    ctx.font = "15px sans-serif";
                    ctx.fillText("💬U" + this.unit, this.x + 24, this.y + 2 + offsetY);
                  }
                  ctx.restore();
                }
              }

              function initCats() {
                cats = [
                  new CatVillager(50, 380, 0.7, "Kuro", "🎓", 2),
                  new CatVillager(190, 390, -0.6, "Kotaro", "🔧", 4),
                  new CatVillager(330, 375, 0.8, "Mikan", "🍵", 6),
                  new CatVillager(470, 385, -0.7, "Tora", "🐎", 8),
                  new CatVillager(610, 380, 0.6, "Kiki", "📢", 10),
                  new CatVillager(750, 375, -0.8, "Ichi", "🪵", 16),
                  new CatVillager(890, 385, 0.7, "Chiyo", "🩺", 18),
                  new CatVillager(1020, 380, -0.6, "Hanako", "🎨", 22)
                ];
              }
              initCats();

              function drawStreet() {
                if (!ctx || !canvas) return;
                if (canvas.width === 0 || canvas.height === 0) {
                  resizeCanvas();
                }
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
                const buildingWidth = 140;
                const buildings = [
                  { title: "Academy (U2)", roof: "#C62828", icon: "📜", x: 15 },
                  { title: "Workshop (U4)", roof: "#455A64", icon: "⚙️", x: 175 },
                  { title: "Pavilion (U6)", roof: "#2E7D32", icon: "🍵", x: 335 },
                  { title: "Station (U8)", roof: "#0284C7", icon: "🐎", x: 495 },
                  { title: "Gazette (U10)", roof: "#D84315", icon: "📢", x: 655 },
                  { title: "Guild (U16)", roof: "#6D28D9", icon: "🏛️", x: 815 },
                  { title: "Plaza (U24)", roof: "#DB2777", icon: "🌸", x: 975 }
                ];

                buildings.forEach(b => {
                  ctx.fillStyle = "#F5EBE6";
                  ctx.strokeStyle = "#4E342E";
                  ctx.lineWidth = 4;
                  ctx.fillRect(b.x, 160, buildingWidth, 180);
                  ctx.strokeRect(b.x, 160, buildingWidth, 180);

                  ctx.strokeStyle = "#8D6E63";
                  ctx.lineWidth = 3;
                  ctx.strokeRect(b.x + 10, 180, buildingWidth - 20, 140);
                  ctx.strokeRect(b.x + 35, 220, 70, 100);

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
                  ctx.fillRect(b.x + 8, 180, buildingWidth - 16, 26);
                  ctx.strokeRect(b.x + 8, 180, buildingWidth - 16, 26);

                  ctx.font = "bold 11px 'Plus Jakarta Sans', sans-serif";
                  ctx.fillStyle = "#3E2723";
                  ctx.textAlign = "center";
                  ctx.fillText(b.icon + " " + b.title, b.x + buildingWidth / 2, 197);
                });

                // Road
                ctx.fillStyle = "#D7CCC8";
                ctx.fillRect(0, 340, canvas.width, canvas.height - 340);
                ctx.strokeStyle = "#A1887F";
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(0, 340);
                ctx.lineTo(canvas.width, 340);
                ctx.stroke();

                cats.forEach(cat => {
                  cat.update();
                  cat.draw();
                });

                requestAnimationFrame(drawStreet);
              }
              requestAnimationFrame(drawStreet);

              if (canvas) {
                canvas.addEventListener('click', (e) => {
                  const rect = canvas.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const clickY = e.clientY - rect.top;

                  cats.forEach(cat => {
                    const dist = Math.hypot(clickX - (cat.x + 24), clickY - (cat.y + 40));
                    if (dist < 45) {
                      triggerCatQuest(cat.unit);
                    }
                  });
                });
              }

              function setTopicFilter(unitId) {
                currentTopicFilter = unitId;

                // Update Toolbar UI
                document.querySelectorAll('#neko-michi-vocab-root .shop-slot-btn').forEach(btn => btn.classList.remove('active'));
                const targetBtnId = unitId === 'all' ? 'filter-btn-all' : 'filter-btn-' + unitId;
                const activeBtn = document.getElementById(targetBtnId);
                if (activeBtn) activeBtn.classList.add('active');

                // Update Filtered list
                if (unitId === 'all') {
                  currentFilteredQuests = [...FULL_VOCAB_DATABASE];
                  document.getElementById('current-unit-display').innerText = "Tất Cả Units (" + FULL_VOCAB_DATABASE.length + " câu)";
                } else {
                  currentFilteredQuests = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                  const titleMap = {
                    2: "Unit 2: Thinking & Learning",
                    4: "Unit 4: Change & Technology",
                    6: "Unit 6: Time & Work",
                    8: "Unit 8: Movement & Transport",
                    10: "Unit 10: Communication & Media",
                    12: "Unit 12: Chance & Nature",
                    14: "Unit 14: Quantity & Money",
                    16: "Unit 16: Material & Built",
                    18: "Unit 18: Reactions & Health",
                    20: "Unit 20: Power & Social",
                    22: "Unit 22: Quality & Arts",
                    24: "Unit 24: Relationships"
                  };
                  document.getElementById('current-unit-display').innerText = (titleMap[unitId] || ("Unit " + unitId)) + " (" + currentFilteredQuests.length + " câu)";
                }

                currentQuestIndex = 0;
                triggerNextQuestFromList();
              }

              function triggerCatQuest(unitId) {
                const list = FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);
                if (list.length > 0) {
                  const randomQ = list[Math.floor(Math.random() * list.length)];
                  openQuestModal(randomQ);
                } else {
                  triggerRandomQuest();
                }
              }

              function triggerNextQuestFromList() {
                if (currentFilteredQuests.length === 0) return;
                const q = currentFilteredQuests[currentQuestIndex % currentFilteredQuests.length];
                openQuestModal(q);
              }

              function nextQuestInFilter() {
                currentQuestIndex++;
                triggerNextQuestFromList();
              }

              function triggerRandomQuest() {
                const q = FULL_VOCAB_DATABASE[Math.floor(Math.random() * FULL_VOCAB_DATABASE.length)];
                openQuestModal(q);
              }

              function openQuestModal(quest) {
                gameState.activeQuest = quest;

                document.getElementById('modal-cat-avatar').innerText = quest.avatar;
                document.getElementById('modal-cat-name').innerText = quest.speaker;
                document.getElementById('modal-shop-name').innerText = quest.shop + " Customer";
                document.getElementById('modal-unit-tag').innerText = quest.unitTitle;
                document.getElementById('modal-sentence').innerHTML = quest.sentence;
                document.getElementById('modal-hint').innerHTML = "<strong>Gợi ý:</strong> " + quest.hint;

                const optionsContainer = document.getElementById('modal-options');
                optionsContainer.innerHTML = '';

                // Shuffle options
                const shuffled = quest.options.map((opt, i) => ({ opt, isCorrect: i === quest.correct }))
                                              .sort(() => Math.random() - 0.5);

                shuffled.forEach((item) => {
                  const btn = document.createElement('button');
                  btn.className = 'btn-option';
                  btn.innerText = item.opt;
                  btn.onclick = () => handleAnswer(item.isCorrect, btn, quest);
                  optionsContainer.appendChild(btn);
                });

                const fb = document.getElementById('modal-feedback');
                fb.className = 'feedback-box';
                fb.style.display = 'none';

                document.getElementById('quest-modal').classList.add('active');
              }

              function handleAnswer(isCorrect, selectedBtn, quest) {
                const allButtons = document.querySelectorAll('#neko-michi-vocab-root .btn-option');
                allButtons.forEach(b => b.disabled = true);

                const feedbackBox = document.getElementById('modal-feedback');

                if (isCorrect) {
                  selectedBtn.classList.add('correct');
                  feedbackBox.className = 'feedback-box correct';
                  feedbackBox.innerHTML = `<strong>🌟 Chính Xác (+20 Koban)!</strong><br>${quest.explanation}<br><em>🇻🇳 Nghĩa tiếng Việt:</em> <strong>${quest.meaningVn}</strong>`;
                  
                  gameState.coins += 20;
                  gameState.harmony = Math.min(100, gameState.harmony + 5);
                } else {
                  selectedBtn.classList.add('incorrect');
                  allButtons.forEach(b => {
                    if (b.innerText === quest.options[quest.correct]) b.classList.add('correct');
                  });
                  feedbackBox.className = 'feedback-box incorrect';
                  feedbackBox.innerHTML = `<strong>🍂 Hãy Ghi Nhớ:</strong><br>${quest.explanation}<br><em>🇻🇳 Nghĩa tiếng Việt:</em> <strong>${quest.meaningVn}</strong>`;
                  
                  gameState.harmony = Math.max(10, gameState.harmony - 2);
                }

                document.getElementById('coin-counter').innerText = gameState.coins;
                document.getElementById('harmony-counter').innerText = gameState.harmony + '%';

                feedbackBox.style.display = 'block';
              }

              function closeQuestModal() {
                document.getElementById('quest-modal').classList.remove('active');
              }

              // Handbook Modal logic
              function openHandbookModal() {
                filterHandbook('all');
                document.getElementById('dict-modal').classList.add('active');
              }

              function closeHandbookModal() {
                document.getElementById('dict-modal').classList.remove('active');
              }

              function filterHandbook(unitId) {
                document.querySelectorAll('#neko-michi-vocab-root .dict-tab-btn').forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.getElementById('dict-tab-' + unitId);
                if (activeBtn) activeBtn.classList.add('active');

                const container = document.getElementById('dict-items-container');
                container.innerHTML = '';

                const list = unitId === 'all' 
                  ? FULL_VOCAB_DATABASE 
                  : FULL_VOCAB_DATABASE.filter(q => q.unit === unitId);

                list.forEach(item => {
                  const card = document.createElement('div');
                  card.className = 'dict-item-card';
                  card.innerHTML = `
                    <div class="dict-item-header">
                      <span class="dict-verb">✨ ${item.verb}</span>
                      <span class="dict-unit-badge">${item.unitTitle}</span>
                    </div>
                    <div class="dict-meaning-en">📖 <strong>Meaning:</strong> ${item.meaningEn}</div>
                    <div class="dict-meaning-vn">🇻🇳 <strong>Nghĩa:</strong> ${item.meaningVn}</div>
                    <div style="font-size:13px; color:#4B5563; font-style:italic; margin-top:2px;">
                      💬 <strong>Context:</strong> ${item.sentence.replace(/<span class='blank'>_______<\/span>/g, `<u><strong>${item.verb}</strong></u>`)}
                    </div>
                  `;
                  container.appendChild(card);
                });
              }
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

print("Successfully replaced and updated index.html with all 12 units!")
