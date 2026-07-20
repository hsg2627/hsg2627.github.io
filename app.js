// Data Stores for VSTEP Reading Passages, Questions, Vocabulary & Strategies

const QUIZ_DATA = [
  {
    id: "test1_main_idea",
    title: "Passage 1: Minerals & Relative Hardness",
    category: "Main Idea",
    tag: "Ý CHÍNH",
    text: `One identifying characteristic of minerals is their relative hardness, which can be determined by scratching one mineral with another. In this type of test, a harder mineral can scratch a softer one, but a softer mineral is unable to scratch the harder one. The Mohs' hardness scale is used to rank minerals according to hardness. Ten minerals are listed in this scale, ranging from talc with a hardness of 1 to diamond with a hardness of 10. On this scale, quartz (number 7) is harder than feldspar (number 6) and is therefore able to scratch it; however, feldspar is unable to make a mark on quartz.`,
    questions: [
      {
        id: "q1",
        question: "Which of the following best states the subject of this passage?",
        options: [
          "A. The hardness of diamonds",
          "B. Identifying minerals by means of a scratch test",
          "C. Feldspar on the Mohs' scale",
          "D. Recognizing minerals in their natural state"
        ],
        correct: 1, // B
        explanation: "Text evidence: 'One identifying characteristic of minerals is their relative hardness, which can be determined by scratching one mineral with another.' Diamond and feldspar are specific supporting examples, not the overall subject.",
        explanationVn: "Giải thích: Câu đầu tiên nêu rõ chủ đề chính là việc xác định khoáng vật dựa trên phương pháp cọ xát (scratch test). Diamond và Feldspar chỉ là các ví dụ minh họa."
      },
      {
        id: "q2",
        question: "The main idea of this passage is that",
        options: [
          "A. the hardness of a mineral can be determined by its ability to make a mark on other minerals",
          "B. diamonds, with a hardness of 10 on the Mohs' scale, can scratch all other minerals",
          "C. a softer mineral cannot be scratched by a harder mineral",
          "D. talc is the first mineral listed on the Mohs' scale"
        ],
        correct: 0, // A
        explanation: "The main idea generalizes the overall paragraph logic: a mineral's relative hardness is identified by whether it can scratch/make a mark on another mineral.",
        explanationVn: "Giải thích: Ý chính bao quát cả đoạn là độ cứng khoáng vật được xác định thông qua khả năng làm trầy xước bề mặt các khoáng vật khác."
      }
    ]
  },
  {
    id: "test2_hurricanes",
    title: "Passage 2: Hurricanes in the North Atlantic",
    category: "Main Idea",
    tag: "Ý CHÍNH",
    text: `Hurricanes generally occur in the North Atlantic from May through November, with the peak of the hurricane season in September; only rarely will they occur from December through April in that part of the ocean. The main reason for the occurrence of hurricanes during this period is that the temperature on the water’s surface is at its warmest and the humidity of the air is at its highest.

Of the tropical storms that occur each year in the North Atlantic, only about five, on the average are powerful enough to be called hurricanes. To be classified as a hurricane, a tropical storm must have winds reaching speeds of at least 117 kilometers per hour, but the winds are often much higher than that; the winds of intense hurricanes can easily surpass 240 kilometers per hour.`,
    questions: [
      {
        id: "q3",
        question: "The passage mainly discusses",
        options: [
          "A. How many hurricanes occur each year",
          "B. The strength of hurricanes",
          "C. The weather in the North Atlantic",
          "D. Hurricanes in one part of the world"
        ],
        correct: 3, // D
        explanation: "The passage focuses specifically on hurricanes in the North Atlantic ('one part of the world'), discussing when and why they form there, as well as their wind speeds.",
        explanationVn: "Giải thích: Toàn bộ bài đọc tập trung nói về bão lốc ở khu vực Bắc Đại Tây Dương (một khu vực cụ thể trên thế giới)."
      },
      {
        id: "q4",
        question: "The best title for this passage would be",
        options: [
          "A. The North Atlantic Ocean",
          "B. Storms of the Northern Atlantic",
          "C. Hurricanes: The Damage and Destruction",
          "D. What happens from May through November"
        ],
        correct: 1, // B
        explanation: "Option B ('Storms of the Northern Atlantic') correctly incorporates both the geographic location (North Atlantic) and the topic (Hurricanes/Storms).",
        explanationVn: "Giải thích: Tiêu đề phù hợp nhất cần thể hiện được cả hai yếu tố: loại hình thời tiết (bão/hurricanes) và vị trí địa lý cụ thể (Bắc Đại Tây Dương)."
      }
    ]
  },
  {
    id: "test1_smog_vocab",
    title: "Passage 3: Photochemical Smog Formation",
    category: "Vocabulary",
    tag: "TỪ VỰNG",
    text: `The oxidation of exhaust gases is one of the primary sources of the world’s pollution. The brown haze that is poised over some of the world’s largest cities is properly called photochemical smog; it results from chemical reactions that take place in the air, using the energy of sunlight. The production of smog begins when gases are created in the cylinders of vehicle engines. It is there that oxygen and nitrogen gas combine as the fuel burns to form nitric oxide (NO), a colorless gas. The nitric oxide is forced out into the air through the vehicle tailpipe along with other gases.

When the gas reaches the air, it comes into contact with available oxygen from the atmosphere and combines with the oxygen to produce nitrogen dioxide (NO2), which is a gas with a brownish hue. This nitrogen dioxide plays a role in the formation of acid rain in wetter or more humid climates and tends to decompose back into nitric oxide as it releases an oxygen atom...`,
    questions: [
      {
        id: "q5",
        question: "The word 'poised' in paragraph 1 is closest in meaning to",
        options: [
          "A. interacting",
          "B. sitting",
          "C. blowing",
          "D. poisoning"
        ],
        correct: 1, // B
        explanation: "'Poised over' in this context means hovering or sitting suspended above the cities.",
        explanationVn: "Giải thích: 'Poised' là tính từ chỉ trạng thái đứng yên/lơ lửng trên bầu trời thành phố, đồng nghĩa với 'sitting'."
      },
      {
        id: "q6",
        question: "The phrase 'take place' in paragraph 1 is closest in meaning to",
        options: [
          "A. position themselves",
          "B. put",
          "C. are seated",
          "D. occur"
        ],
        correct: 3, // D
        explanation: "'Take place' is an idiom meaning to happen or occur.",
        explanationVn: "Giải thích: Cụm từ 'take place' có nghĩa là diễn ra/xảy ra, đồng nghĩa với 'occur'."
      },
      {
        id: "q7",
        question: "The word 'forced' in paragraph 1 is closest in meaning to",
        options: [
          "A. obliged",
          "B. required",
          "C. pushed",
          "D. commanded"
        ],
        correct: 2, // C
        explanation: "Gas being 'forced out' refers to physical expulsion or pushing out through the exhaust pipe.",
        explanationVn: "Giải thích: Trong ngữ cảnh khí thải bị đẩy ra từ ống bô xe, 'forced' mang nghĩa bị đẩy ra ngoài ('pushed')."
      },
      {
        id: "q8",
        question: "The word 'hue' in paragraph 2 could best be replaced by",
        options: [
          "A. color",
          "B. odor",
          "C. thickness",
          "D. smoke"
        ],
        correct: 0, // A
        explanation: "'Hue' refers to color or shade ('brownish hue' = brownish color).",
        explanationVn: "Giải thích: 'Hue' có nghĩa là màu sắc hoặc sắc thái màu, đồng nghĩa với 'color'."
      }
    ]
  },
  {
    id: "test5_pronouns",
    title: "Passage 4: Animal Congregation & Survival",
    category: "Vocabulary",
    tag: "ĐẠI TỪ",
    text: `Many types of animals combine the advantages of family association with those conferred by membership in still larger groups. Bees congregate in hives; some fish move in schools; ants gather in mounds; wolves live in packs; deer associate in herds. The main advantage of membership in a mass community is the safety that it provides. A large group of prey may be easier for a predator to find at any given point than is a small one, and a predator may think twice before taking on such a group; if a predator does decide to challenge a large group, it may merely encounter a confusing mass of moving bodies and possibly may not succeed in its primary goal.`,
    questions: [
      {
        id: "q10",
        question: "The word 'those' in the passage refers to",
        options: [
          "A. types",
          "B. animals",
          "C. advantages",
          "D. groups"
        ],
        correct: 2, // C
        explanation: "Parallel comparison: 'combine the advantages [A] of family association with those [advantages B] conferred by membership in larger groups.'",
        explanationVn: "Giải thích: Từ 'those' ở đây thay thế cho danh từ số nhiều 'advantages' để tránh lặp từ trong phép so sánh song song."
      },
      {
        id: "q11",
        question: "The word 'it' in line 4 refers to",
        options: [
          "A. advantage",
          "B. membership",
          "C. community",
          "D. safety"
        ],
        correct: 1, // B
        explanation: "'Membership in a mass community' is the subject that provides safety ('the safety that it provides').",
        explanationVn: "Giải thích: Từ 'it' thay thế cho việc trở thành thành viên trong cộng đồng ('membership')."
      },
      {
        id: "q12",
        question: "The word 'one' in the passage refers to",
        options: [
          "A. group",
          "B. prey",
          "C. predator",
          "D. point"
        ],
        correct: 0, // A
        explanation: "Contrasts a 'large group of prey' with a 'small one [group]'.",
        explanationVn: "Giải thích: Từ 'one' ở đây dùng để thay thế cho danh từ 'group' (nhóm con mồi nhỏ so với nhóm lớn)."
      }
    ]
  },
  {
    id: "test1_baikal_detail",
    title: "Passage 5: Lake Baikal",
    category: "Detail",
    tag: "THÔNG TIN CHI TIẾT",
    text: `Crescent-shaped Lake Baikal, in Siberia, is only the ninth largest lake in area at 385 miles (620 km) in length and 46 miles (74 km) in width, yet it is easily the largest body of fresh water in the world. It holds one-fifth of the world’s total fresh water, which is more than the total of all the water in the five Great Lakes; it holds so much fresh water in spite of its less-than-impressive area because it is by far the world's deepest lake. The average depth of the lake is 1,312 feet (400 meters) below sea level, and the Olkhon Crevice, the lowest known point, is more than 5,250 feet (1,600 meters) deep.`,
    questions: [
      {
        id: "q14",
        question: "What is stated in paragraph 1 about the shape of Lake Baikal?",
        options: [
          "A. It is wider than it is long.",
          "B. It is circular in shape.",
          "C. Its width is one-half of its length.",
          "D. It is shaped like a new moon."
        ],
        correct: 3, // D
        explanation: "Text evidence: 'Crescent-shaped Lake Baikal...' Crescent refers to the shape of a new moon.",
        explanationVn: "Giải thích: 'Crescent-shaped' nghĩa là hình trăng khuyết/trăng non ('shaped like a new moon')."
      },
      {
        id: "q15",
        question: "According to paragraph 1, Lake Baikal",
        options: [
          "A. holds one-fifth of the world’s water",
          "B. holds five times the water of the Great Lakes",
          "C. holds one-ninth of the world’s water",
          "D. holds 20 percent of the world’s fresh water"
        ],
        correct: 3, // D
        explanation: "Text evidence: 'holds one-fifth of the world’s total fresh water...' One-fifth (1/5) = 20 percent.",
        explanationVn: "Giải thích: 1/5 lượng nước ngọt (one-fifth of fresh water) tương đương với 20%."
      }
    ]
  },
  {
    id: "test1_moths_inference",
    title: "Passage 6: Defense Mechanism of Tiger Moths",
    category: "Inference",
    tag: "SUY RA & MỤC ĐÍCH",
    text: `One of the most beautiful of the more than 100,000 known species in the order Lepidoptera are the tiger moths, moths known for the striking appeal of their distinctive coloration. This type of moth is covered with highly conspicuous orange-and-black or yellow-and-black patterns of spots and stripes. Such boldly patterned color combinations are commonplace in the animal world, serving the function of forewarning potential predators of unpleasant tastes and smells. This is unquestionably the function served by the striking coloration of the garden tiger moth, which is quite visually attractive but is also poisonous to predators. Certain glands in the garden tiger moth produce strong toxins that circulate throughout the insect’s bloodstream, while other glands secrete bubbles that produce a noxious warning smell. The tiger moth, indeed, is a clear example of a concept that many predators intuitively understand, that creatures with the brightest coloration are often the least suitable to eat.`,
    questions: [
      {
        id: "q19",
        question: "It is implied in the passage about the order Lepidoptera that",
        options: [
          "A. all members of the order are moths",
          "B. there may be more than 100,000 species in this order",
          "C. all members of the order are brightly colored",
          "D. there are most likely fewer than 100,000 species in this order"
        ],
        correct: 1, // B
        explanation: "The text mentions 'more than 100,000 known species', implying that undiscovered species exist, making the total potentially higher than 100,000.",
        explanationVn: "Giải thích: Bài đọc ghi 'hơn 100.000 loài đã biết' (known species), suy ra tổng số loài trong bộ này có thể còn nhiều hơn 100.000."
      },
      {
        id: "q21",
        question: "What would most likely happen to a predator that wanted to eat a tiger moth?",
        options: [
          "A. The predator would be unable to catch it.",
          "B. The predator would capture it by poisoning it.",
          "C. The predator would be unable to find it.",
          "D. The predator would back away from it."
        ],
        correct: 3, // D
        explanation: "Text evidence: Bright colors warn predators of poison/smell, and predators intuitively understand to avoid such colorful creatures, so they back away.",
        explanationVn: "Giải thích: Màu sắc sặc sỡ đóng vai trò cảnh báo độc tố/mùi hôi, nên kẻ săn mồi sẽ chủ động tránh xa ('back away from it')."
      }
    ]
  },
  {
    id: "test1_camouflage_paraphrase",
    title: "Passage 7: Arctic Camouflage Strategies",
    category: "Paraphrase",
    tag: "CÁC DẠNG KHÁC",
    text: `Camouflage is one of the most effective ways for animals to avoid attack in the treeless Arctic. However, the summer and winter landscapes there are so diverse that a single protective coloring scheme would, of course, prove ineffective in one season or the other. Thus, many of the inhabitants of the Arctic tundra change their camouflage twice a year. The arctic fox is a clear-cut example of this phenomenon; it sports a brownish-gray coat in the summer which then turns white as cold weather sets in...`,
    questions: [
      {
        id: "q24",
        question: "What best paraphrases the sentence: 'However, the summer and winter landscapes there are so diverse that a single protective coloring scheme would, of course, prove ineffective in one season or the other.'?",
        options: [
          "A. Opposite conditions in summer and in winter necessitate different protective coloration for Arctic animals.",
          "B. The coloration of the summer and winter landscapes in the Arctic fails to protect the Arctic tundra.",
          "C. In a single season, protective colouring schemes are ineffective in the treeless Arctic.",
          "D. For many animals, a single protective coloring scheme effectively protects them during summer and winter months."
        ],
        correct: 0, // A
        explanation: "Option A retains both cause ('diverse landscapes' = 'opposite conditions') and effect ('single scheme ineffective' = 'necessitates different coloration').",
        explanationVn: "Giải thích: Đáp án A diễn đạt lại chính xác nhất: điều kiện thiên nhiên trái ngược vào mùa hè và mùa đông đòi hỏi động vật phải có các màu sắc tự vệ khác nhau."
      }
    ]
  }
];

const VOCABULARY_DATA = [
  { word: "Poised", pos: "adj.", def: "Hovering, balanced, or suspended in one place", vn: "Lơ lửng, cân bằng" },
  { word: "Take place", pos: "phr. v.", def: "To occur or happen", vn: "Xảy ra, diễn ra" },
  { word: "Hue", pos: "n.", def: "A color or shade of color", vn: "Màu sắc, sắc thái màu" },
  { word: "Play a role in", pos: "idiom", def: "To contribute to or serve a function in an outcome", vn: "Đóng vai trò trong" },
  { word: "Umbrageous", pos: "adj.", def: "Shaded or providing shade from direct sunlight", vn: "Râm mát, có bóng râm" },
  { word: "Haustoria", pos: "n.", def: "Specialized root-like structures of parasitic plants", vn: "Móc bám, rễ kí sinh" },
  { word: "Ponderous", pos: "adj.", def: "Very heavy, bulky, or massive", vn: "Nặng nề, to lớn" },
  { word: "Embarked on", pos: "phr. v.", def: "Started or began a course of action/career", vn: "Bắt đầu (sự nghiệp/hành trình)" },
  { word: "Repudiates", pos: "v.", def: "Refuses to accept, disowns, or rejects", vn: "Bác bỏ, từ chối chấp nhận" },
  { word: "Protagonist", pos: "n.", def: "The leading character or main figure", vn: "Nhân vật chính" },
  { word: "Endured", pos: "v.", def: "Lasted over a long period of time", vn: "Kéo dài, tồn tại qua thời gian" },
  { word: "Epic", pos: "adj.", def: "Extensive, heroic, or grand in scale", vn: "Mang tính lịch sử, trường 篇" },
  { word: "Congregate", pos: "v.", def: "To gather together in a crowd or group", vn: "Tập hợp, tụ họp" },
  { word: "Clastic", pos: "adj.", def: "Denoting rocks composed of broken fragments of older rocks", vn: "Trầm tích vỡ mảnh" },
  { word: "Cartographer", pos: "n.", def: "A person who draws or produces maps", vn: "Người vẽ bản đồ" },
  { word: "Filibuster", pos: "n.", def: "A prolonged speech obstructing legislative action", vn: "Thủ tục trì hoãn lập pháp" },
  { word: "Aposematic", pos: "adj.", def: "Warning coloration in animals indicating toxicity", vn: "Màu sắc cảnh báo độc tố" }
];

// App State
let currentTab = "overview";
let currentFilter = "All";
let userAnswers = {};
let score = 0;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initQuiz();
  initVocabulary();
});

// Navigation Handler
function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      navBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(tabId).classList.add("active");
      currentTab = tabId;
    });
  });
}

// Quiz Render & Handler
function initQuiz() {
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      renderQuiz();
    });
  });

  renderQuiz();
}

function renderQuiz() {
  const quizContainer = document.getElementById("quiz-passages-container");
  quizContainer.innerHTML = "";

  const filteredData = currentFilter === "All" 
    ? QUIZ_DATA 
    : QUIZ_DATA.filter(item => item.category === currentFilter);

  filteredData.forEach((passageData) => {
    const pCard = document.createElement("div");
    pCard.className = "passage-card";

    let questionsHtml = "";
    passageData.questions.forEach((q, qIndex) => {
      const isAnswered = userAnswers[q.id] !== undefined;
      const selectedOpt = userAnswers[q.id];

      let optionsHtml = "";
      q.options.forEach((opt, oIndex) => {
        let optClass = "option-btn";
        if (isAnswered) {
          if (oIndex === q.correct) optClass += " show-correct";
          if (selectedOpt === oIndex) {
            optClass += oIndex === q.correct ? " selected-correct" : " selected-incorrect";
          }
        }
        optionsHtml += `
          <button class="${optClass}" onclick="handleOptionSelect('${q.id}', ${oIndex}, ${q.correct})">
            <span>${opt}</span>
            ${isAnswered && oIndex === q.correct ? '<span>✓</span>' : ''}
            ${isAnswered && selectedOpt === oIndex && oIndex !== q.correct ? '<span>✗</span>' : ''}
          </button>
        `;
      });

      questionsHtml += `
        <div class="question-item" id="q-container-${q.id}">
          <div class="question-text">
            <span class="question-num">Q${qIndex + 1}.</span>
            <span>${q.question}</span>
          </div>
          <div class="options-grid">
            ${optionsHtml}
          </div>
          <div class="explanation-box ${isAnswered ? 'visible' : ''}">
            <div class="explanation-header">💡 Pedagogical Explanation:</div>
            <div>${q.explanation}</div>
            <div class="vn-translation">${q.explanationVn}</div>
          </div>
        </div>
      `;
    });

    // Parallel 2-column Layout: Left side passage, Right side questions
    pCard.innerHTML = `
      <div class="passage-header">
        <h3 class="passage-title">${passageData.title}</h3>
        <span class="passage-tag">${passageData.tag}</span>
      </div>
      <div class="passage-split-grid">
        <div class="passage-left-pane">
          <div class="pane-label">📄 Reading Passage</div>
          <div class="passage-body">${passageData.text}</div>
        </div>
        <div class="passage-right-pane">
          <div class="pane-label">❓ Practice Questions</div>
          <div class="questions-list">${questionsHtml}</div>
        </div>
      </div>
    `;

    quizContainer.appendChild(pCard);
  });

  updateScoreDisplay();
}

function handleOptionSelect(qId, selectedIdx, correctIdx) {
  if (userAnswers[qId] !== undefined) return; // Prevent re-answer

  userAnswers[qId] = selectedIdx;
  if (selectedIdx === correctIdx) {
    score++;
  }

  renderQuiz();
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("score-display");
  const totalAnswered = Object.keys(userAnswers).length;
  let totalQuestions = 0;
  QUIZ_DATA.forEach(p => totalQuestions += p.questions.length);

  scoreDisplay.textContent = `${score} / ${totalQuestions} Correct (${totalAnswered} Answered)`;
}

// Vocabulary Render & Search
function initVocabulary() {
  const vocabGrid = document.getElementById("vocab-grid");
  const searchInput = document.getElementById("vocab-search");

  function renderVocab(filter = "") {
    vocabGrid.innerHTML = "";
    const filtered = VOCABULARY_DATA.filter(v => 
      v.word.toLowerCase().includes(filter.toLowerCase()) ||
      v.def.toLowerCase().includes(filter.toLowerCase()) ||
      v.vn.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(v => {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-word">${v.word}</div>
        <div class="vocab-pos">${v.pos}</div>
        <div class="vocab-def">${v.def}</div>
        <div class="vocab-vn">🇻🇳 ${v.vn}</div>
      `;
      vocabGrid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", (e) => {
    renderVocab(e.target.value);
  });

  renderVocab();
}

// Global Helper to filter quiz category & switch tab from Reading Comprehension Skills cards
function filterAndSwitchQuiz(category) {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(b => b.classList.remove("active"));
  tabContents.forEach(c => c.classList.remove("active"));

  const quizNavBtn = document.querySelector('.nav-btn[data-tab="quiz"]');
  const quizTabContent = document.getElementById("quiz");

  if (quizNavBtn && quizTabContent) {
    quizNavBtn.classList.add("active");
    quizTabContent.classList.add("active");
    currentTab = "quiz";
  }

  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    if (chip.getAttribute("data-filter") === category) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  currentFilter = category;
  renderQuiz();

  quizTabContent.scrollIntoView({ behavior: 'smooth' });
}

