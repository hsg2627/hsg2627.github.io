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
let currentTab = "home";
let currentSubTab = "rc-overview";
let currentFilter = "All";
let userAnswers = {};
let score = 0;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSubTabs();
  initQuiz();
  initVocabulary();
});

// Main Tab Navigation (Home / Reading Comprehension / Listening / Collocations / Dashboard)
function initNavigation() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      navBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetSec = document.getElementById(tabId);
      if (targetSec) targetSec.classList.add("active");
      currentTab = tabId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Track GA4 page view tab
      trackGAEvent('page_view_tab', { tab_id: tabId });

      // Render dashboard if active
      if (tabId === 'learning-dashboard') {
        renderLearningDashboard();
      }
    });
  });
}

// Sub-tab Navigation inside skill modules (Reading Comprehension / Listening Skills)
function initSubTabs() {
  const containers = document.querySelectorAll(".tab-content");
  containers.forEach(container => {
    const subTabs = container.querySelectorAll(".sub-tab");
    const subContents = container.querySelectorAll(".sub-tab-content");

    subTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const subTabId = tab.getAttribute("data-subtab");
        subTabs.forEach(t => t.classList.remove("active"));
        subContents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        const targetSub = container.querySelector("#" + subTabId);
        if (targetSub) {
          targetSub.classList.add("active");
        }
        currentSubTab = subTabId;
      });
    });
  });
}

// Go back to Home tab
function goHome() {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(b => b.classList.remove("active"));
  tabContents.forEach(c => c.classList.remove("active"));

  const homeBtn = document.querySelector('.nav-btn[data-tab="home"]');
  const homeTab = document.getElementById("home");

  if (homeBtn) homeBtn.classList.add("active");
  if (homeTab) homeTab.classList.add("active");
  currentTab = "home";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open a skill tab (e.g., reading-comprehension) from homepage card
function openSkillTab(tabId) {
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(b => b.classList.remove("active"));
  tabContents.forEach(c => c.classList.remove("active"));

  const targetBtn = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
  const targetTab = document.getElementById(tabId);

  if (targetBtn) targetBtn.classList.add("active");
  if (targetTab) {
    targetTab.classList.add("active");
    currentTab = tabId;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Switch to quiz sub-tab and filter by category (called from skill cards)
function filterQuizCategory(category) {
  // Switch to rc-quiz sub-tab
  const subTabs = document.querySelectorAll(".sub-tab");
  const subContents = document.querySelectorAll(".sub-tab-content");

  subTabs.forEach(t => t.classList.remove("active"));
  subContents.forEach(c => c.classList.remove("active"));

  const quizSubTab = document.querySelector('.sub-tab[data-subtab="rc-quiz"]');
  const quizContent = document.getElementById("rc-quiz");

  if (quizSubTab) quizSubTab.classList.add("active");
  if (quizContent) quizContent.classList.add("active");
  currentSubTab = "rc-quiz";

  // Apply filter
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
  if (userAnswers[qId] !== undefined) return;

  userAnswers[qId] = selectedIdx;
  const isCorrect = selectedIdx === correctIdx;
  if (isCorrect) {
    score++;
  }

  // Find category for this question
  let cat = currentFilter !== 'All' ? currentFilter : 'Main Idea';
  if (typeof QUIZ_DATA !== 'undefined') {
    QUIZ_DATA.forEach(p => {
      p.questions.forEach(q => {
        if (q.id === qId) cat = q.category;
      });
    });
  }

  recordQuizAttempt('Reading', cat, isCorrect ? 1 : 0, 1);
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

// ==================== COLLOCATIONS MODULE LOGIC ====================
let collocCurrentPage = 1;
const collocItemsPerPage = 24;
let collocSearchQuery = "";
let collocLevelFilter = "All";
let collocUnitFilter = "All";
let collocFilteredList = [];
let collocFlashcardIndex = 0;
let collocFlashcardDeck = [];

let sufferQuizItems = [];
let sufferUserAnswers = {};
let sufferScore = 0;

function initCollocations() {
  if (typeof COLLOCATIONS_DATA === 'undefined') return;

  collocFilteredList = [...COLLOCATIONS_DATA];
  collocFlashcardDeck = [...COLLOCATIONS_DATA];

  const searchInput = document.getElementById("colloc-search");
  const unitSelect = document.getElementById("colloc-unit-select");
  const filterChips = document.querySelectorAll(".colloc-filter-chip");
  const prevBtn = document.getElementById("colloc-prev-page");
  const nextBtn = document.getElementById("colloc-next-page");

  // Populate Unit selector dropdown if COLLOCATIONS_UNITS is available
  if (unitSelect && typeof COLLOCATIONS_UNITS !== 'undefined') {
    unitSelect.innerHTML = '<option value="All">📚 Tất cả 101 Units (Sub-decks)</option>';
    COLLOCATIONS_UNITS.forEach(unitName => {
      const opt = document.createElement("option");
      opt.value = unitName;
      opt.textContent = `Unit: ${unitName}`;
      unitSelect.appendChild(opt);
    });

    unitSelect.addEventListener("change", (e) => {
      collocUnitFilter = e.target.value;
      collocCurrentPage = 1;
      applyCollocFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      collocSearchQuery = e.target.value.toLowerCase().trim();
      collocCurrentPage = 1;
      applyCollocFilters();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      collocLevelFilter = chip.getAttribute("data-level");
      collocCurrentPage = 1;
      applyCollocFilters();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (collocCurrentPage > 1) {
        collocCurrentPage--;
        renderCollocationsPage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const maxPage = Math.ceil(collocFilteredList.length / collocItemsPerPage);
      if (collocCurrentPage < maxPage) {
        collocCurrentPage++;
        renderCollocationsPage();
      }
    });
  }

  renderCollocationsPage();
  updateFlashcardUI();
  generateSufferQuizRound();
}

function applyCollocFilters() {
  if (typeof COLLOCATIONS_DATA === 'undefined') return;

  collocFilteredList = COLLOCATIONS_DATA.filter(item => {
    const matchesSearch = !collocSearchQuery || 
      item.term.toLowerCase().includes(collocSearchQuery) ||
      item.vn.toLowerCase().includes(collocSearchQuery) ||
      item.def.toLowerCase().includes(collocSearchQuery) ||
      (item.pos && item.pos.toLowerCase().includes(collocSearchQuery));

    const matchesLevel = collocLevelFilter === "All" || item.level === collocLevelFilter;
    const matchesUnit = collocUnitFilter === "All" || item.unit === collocUnitFilter;

    return matchesSearch && matchesLevel && matchesUnit;
  });

  renderCollocationsPage();
}

// ==================== SUFFER QUIZ MODE (ANKI CLOZE TEST) ====================
function generateSufferQuizRound() {
  if (typeof COLLOCATIONS_DATA === 'undefined') return;

  // Filter items that have cloze or examples
  const eligible = COLLOCATIONS_DATA.filter(item => item.cloze1 || item.ex1);
  if (eligible.length === 0) return;

  // Pick 10 random items
  sufferQuizItems = [...eligible].sort(() => Math.random() - 0.5).slice(0, 10);
  sufferUserAnswers = {};
  sufferScore = 0;

  renderSufferQuiz();
}

function renderSufferQuiz() {
  const container = document.getElementById("suffer-quiz-container");
  const scoreDisplay = document.getElementById("suffer-score-display");
  if (!container) return;

  container.innerHTML = "";

  sufferQuizItems.forEach((item, qIdx) => {
    const qCard = document.createElement("div");
    qCard.className = "passage-card";
    qCard.style.marginBottom = "1.5rem";

    const isAnswered = sufferUserAnswers[item.id] !== undefined;
    const selectedIdx = sufferUserAnswers[item.id];

    // Generate 4 options (1 correct term + 3 distractors from Google Sheet dataset)
    if (!item.quizOptions) {
      let optionWords = [];
      if (Array.isArray(item.distractors) && item.distractors.length >= 3) {
        optionWords = item.distractors.slice(0, 3).map(d => d.word);
      } else {
        optionWords = COLLOCATIONS_DATA
          .filter(d => d.term !== item.term)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(d => d.term);
      }
      
      const allOpts = [item.term, ...optionWords].sort(() => Math.random() - 0.5);
      item.quizOptions = allOpts;
      item.correctIdx = allOpts.indexOf(item.term);
    }

    let optsHtml = "";
    item.quizOptions.forEach((optTerm, oIdx) => {
      let btnClass = "option-btn";
      if (isAnswered) {
        if (oIdx === item.correctIdx) btnClass += " show-correct";
        if (selectedIdx === oIdx) {
          btnClass += oIdx === item.correctIdx ? " selected-correct" : " selected-incorrect";
        }
      }
      optsHtml += `
        <button class="${btnClass}" onclick="handleSufferAnswer('${item.id}', ${oIdx}, ${item.correctIdx})">
          <span>${optTerm}</span>
          ${isAnswered && oIdx === item.correctIdx ? '<span>✓</span>' : ''}
          ${isAnswered && selectedIdx === oIdx && oIdx !== item.correctIdx ? '<span>✗</span>' : ''}
        </button>
      `;
    });

    const clozeText = item.cloze1 ? item.cloze1 : item.ex1.replace(item.term, '_____________');

    qCard.innerHTML = `
      <div class="passage-header">
        <h4 style="font-size: 1.1rem; color: var(--brand-teal-dark); font-weight: 800;">Question ${qIdx + 1} of 10</h4>
        <span class="level-badge level-${item.level.toLowerCase()}">${item.level} | ${item.unit || 'Unit'}</span>
      </div>
      <div style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.25rem; color: var(--text-primary); font-weight: 500;">
        ${clozeText}
      </div>
      <div class="options-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        ${optsHtml}
      </div>
      <div class="explanation-box ${isAnswered ? 'visible' : ''}">
        <div class="explanation-header">💡 Đáp án chuẩn: ${item.term} ${item.ipa ? `(${item.ipa})` : ''}</div>
        <div style="margin-bottom: 0.35rem;"><strong>🇻🇳 Nghĩa Tiếng Việt:</strong> ${item.vn}</div>
        ${item.def ? `<div style="margin-bottom: 0.35rem;"><strong>Định nghĩa Tiếng Anh:</strong> ${item.def}</div>` : ''}
        ${item.ex1_vn ? `<div class="vn-translation">Dịch nghĩa câu ví dụ: ${item.ex1_vn}</div>` : ''}
      </div>
    `;

    container.appendChild(qCard);
  });

  if (scoreDisplay) {
    const totalAnswered = Object.keys(sufferUserAnswers).length;
    scoreDisplay.textContent = `${sufferScore} / 10 Đúng (${totalAnswered} Đã trả lời)`;
  }
}

function handleSufferAnswer(itemId, selectedIdx, correctIdx) {
  if (sufferUserAnswers[itemId] !== undefined) return;

  sufferUserAnswers[itemId] = selectedIdx;
  const isCorrect = selectedIdx === correctIdx;
  if (isCorrect) {
    sufferScore++;
  }

  recordQuizAttempt('Collocations', 'Suffer Quiz', isCorrect ? 1 : 0, 1);
  renderSufferQuiz();
}

function renderCollocationsPage() {
  const grid = document.getElementById("colloc-grid");
  const pageInfo = document.getElementById("colloc-page-info");
  const prevBtn = document.getElementById("colloc-prev-page");
  const nextBtn = document.getElementById("colloc-next-page");

  if (!grid) return;

  grid.innerHTML = "";

  const totalItems = collocFilteredList.length;
  const maxPage = Math.ceil(totalItems / collocItemsPerPage) || 1;
  if (collocCurrentPage > maxPage) collocCurrentPage = maxPage;

  const startIdx = (collocCurrentPage - 1) * collocItemsPerPage;
  const pageItems = collocFilteredList.slice(startIdx, startIdx + collocItemsPerPage);

  if (pageItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <h3>🔍 Không tìm thấy cụm Collocation phù hợp</h3>
        <p>Vui lòng thử từ khóa tìm kiếm hoặc bộ lọc khác.</p>
      </div>
    `;
  } else {
    pageItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "colloc-card";

      let levelClass = "level-b2";
      if (item.level === "B1") levelClass = "level-b1";
      if (item.level === "C1") levelClass = "level-c1";
      if (item.level === "C2") levelClass = "level-c2";

      let exHtml = "";
      if (item.ex1) {
        exHtml += `<div class="example-item"><div class="example-en">• ${item.ex1}</div>${item.ex1_vn ? `<div class="example-vn">🇻🇳 ${item.ex1_vn}</div>` : ''}</div>`;
      }
      if (item.ex2) {
        exHtml += `<div class="example-item"><div class="example-en">• ${item.ex2}</div>${item.ex2_vn ? `<div class="example-vn">🇻🇳 ${item.ex2_vn}</div>` : ''}</div>`;
      }

      card.innerHTML = `
        <div>
          <div class="colloc-header">
            <h3 class="colloc-term">${item.term}</h3>
            <div class="colloc-meta-badges">
              <span class="level-badge ${levelClass}">${item.level}</span>
            </div>
          </div>
          ${item.ipa ? `<div class="colloc-ipa">${item.ipa}</div>` : ''}
          ${item.pos ? `<span class="colloc-pos-tag">${item.pos}</span>` : ''}
          <div class="colloc-vn">🇻🇳 ${item.vn}</div>
          ${item.def ? `<div class="colloc-def">${item.def}</div>` : ''}
        </div>
        ${exHtml ? `<div class="colloc-examples">${exHtml}</div>` : ''}
      `;

      grid.appendChild(card);
    });
  }

  if (pageInfo) {
    pageInfo.textContent = `Page ${collocCurrentPage} of ${maxPage} (${totalItems.toLocaleString()} items)`;
  }
  if (prevBtn) prevBtn.disabled = collocCurrentPage <= 1;
  if (nextBtn) nextBtn.disabled = collocCurrentPage >= maxPage;
}

// Flashcard 3D Interactive Logic
function toggleFlashcardFlip() {
  const card = document.getElementById("main-flashcard");
  if (card) {
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      const item = collocFlashcardDeck[collocFlashcardIndex];
      if (item && item.term) {
        recordFlashcardFlip(item.term);
      }
    }
  }
}

function nextCollocFlashcard() {
  if (collocFlashcardDeck.length === 0) return;
  collocFlashcardIndex = (collocFlashcardIndex + 1) % collocFlashcardDeck.length;
  resetAndShowFlashcard();
}

function prevCollocFlashcard() {
  if (collocFlashcardDeck.length === 0) return;
  collocFlashcardIndex = (collocFlashcardIndex - 1 + collocFlashcardDeck.length) % collocFlashcardDeck.length;
  resetAndShowFlashcard();
}

function shuffleCollocFlashcards() {
  if (typeof COLLOCATIONS_DATA === 'undefined') return;
  collocFlashcardDeck = [...COLLOCATIONS_DATA].sort(() => Math.random() - 0.5);
  collocFlashcardIndex = 0;
  resetAndShowFlashcard();
}

function resetAndShowFlashcard() {
  const card = document.getElementById("main-flashcard");
  if (card) card.classList.remove("flipped");
  setTimeout(() => {
    updateFlashcardUI();
  }, 150);
}

function updateFlashcardUI() {
  if (collocFlashcardDeck.length === 0) return;
  const item = collocFlashcardDeck[collocFlashcardIndex];

  const counter = document.getElementById("fc-counter");
  const termEl = document.getElementById("fc-term");
  const ipaEl = document.getElementById("fc-ipa");
  const posEl = document.getElementById("fc-pos");
  const vnEl = document.getElementById("fc-vn");
  const defEl = document.getElementById("fc-def");
  const exEl = document.getElementById("fc-ex");

  if (counter) counter.textContent = `Card ${collocFlashcardIndex + 1} of ${collocFlashcardDeck.length.toLocaleString()}`;
  if (termEl) termEl.textContent = item.term;
  if (ipaEl) ipaEl.textContent = item.ipa || '';
  if (posEl) posEl.textContent = item.pos || '';
  if (vnEl) vnEl.textContent = '🇻🇳 ' + item.vn;
  if (defEl) defEl.textContent = item.def || '';
  if (exEl) exEl.textContent = item.ex1 ? ('• ' + item.ex1) : '';
}

// Add initCollocations to DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initCollocations();
  initTrangAnhGamificationModule();
  renderLearningDashboard();
});

// ==================== GA4 & LEARNING DASHBOARD LOGIC ====================
function trackGAEvent(eventName, eventParams = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
  console.log('[GA4 Event]:', eventName, eventParams);
}

function getLearningStats() {
  const defaultStats = {
    streak: { count: 1, lastDate: new Date().toISOString().split('T')[0] },
    flashcardsCount: 0,
    attempts: [
      { id: 1, time: 'Initial Practice', skill: 'Reading (Main Idea)', score: '2/2', pct: 100 },
      { id: 2, time: 'Initial Practice', skill: 'Reading (Vocabulary)', score: '2/2', pct: 100 },
      { id: 3, time: 'Initial Practice', skill: 'Collocations (Suffer Quiz)', score: '8/10', pct: 80 }
    ],
    catStats: {
      'Main Idea': { correct: 2, total: 2 },
      'Vocabulary': { correct: 2, total: 2 },
      'Detail': { correct: 1, total: 2 },
      'Inference': { correct: 1, total: 2 },
      'Paraphrase': { correct: 1, total: 1 },
      'Collocations': { correct: 8, total: 10 }
    }
  };

  try {
    const data = localStorage.getItem('ENGLISH_INSIDERS_STATS');
    if (!data) return defaultStats;
    return JSON.parse(data);
  } catch (e) {
    return defaultStats;
  }
}

function saveLearningStats(stats) {
  try {
    localStorage.setItem('ENGLISH_INSIDERS_STATS', JSON.stringify(stats));
  } catch (e) {}
}

function recordQuizAttempt(skillName, catName, correct, total) {
  const stats = getLearningStats();
  const pct = Math.round((correct / total) * 100);
  const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString();

  // Record attempt
  stats.attempts.unshift({
    id: Date.now(),
    time: nowStr,
    skill: `${skillName} (${catName})`,
    score: `${correct}/${total}`,
    pct: pct
  });

  // Keep last 30 attempts
  if (stats.attempts.length > 30) stats.attempts.pop();

  // Category stats
  if (!stats.catStats[catName]) {
    stats.catStats[catName] = { correct: 0, total: 0 };
  }
  stats.catStats[catName].correct += correct;
  stats.catStats[catName].total += total;

  // Streak calculation
  const today = new Date().toISOString().split('T')[0];
  if (stats.streak.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (stats.streak.lastDate === yesterday) {
      stats.streak.count += 1;
    } else {
      stats.streak.count = 1;
    }
    stats.streak.lastDate = today;
  }

  saveLearningStats(stats);

  // Track GA4 event
  trackGAEvent('quiz_completed', {
    skill: skillName,
    category: catName,
    score: correct,
    total: total,
    accuracy: pct
  });

  // Re-render dashboard if currently active
  if (currentTab === 'learning-dashboard') {
    renderLearningDashboard();
  }
}

function recordFlashcardFlip(term) {
  const stats = getLearningStats();
  stats.flashcardsCount = (stats.flashcardsCount || 0) + 1;
  saveLearningStats(stats);

  trackGAEvent('flashcard_flipped', { term: term });
}

function resetLearningStats() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử học tập và đặt lại thống kê không?")) {
    localStorage.removeItem('ENGLISH_INSIDERS_STATS');
    renderLearningDashboard();
  }
}

let chartCatAccInstance = null;
let chartScoreTrendInstance = null;
let chartActivityInstance = null;

function renderLearningDashboard() {
  const stats = getLearningStats();

  // 1. Stat Summary Cards
  const streakEl = document.getElementById("dash-streak-count");
  const totalQuizzesEl = document.getElementById("dash-total-quizzes");
  const flashcardsEl = document.getElementById("dash-flashcards-count");
  const overallAccEl = document.getElementById("dash-overall-acc");

  const totalQuizzes = stats.attempts.length;
  let sumCorrect = 0;
  let sumTotal = 0;
  Object.values(stats.catStats).forEach(cs => {
    sumCorrect += cs.correct;
    sumTotal += cs.total;
  });
  const overallAcc = sumTotal > 0 ? ((sumCorrect / sumTotal) * 100).toFixed(1) : "0.0";

  if (streakEl) streakEl.textContent = `${stats.streak.count || 1} Day Streak 🔥`;
  if (totalQuizzesEl) totalQuizzesEl.textContent = `${totalQuizzes} Quizzes`;
  if (flashcardsEl) flashcardsEl.textContent = `${(stats.flashcardsCount || 0).toLocaleString()} Cards`;
  if (overallAccEl) overallAccEl.textContent = `${overallAcc}% Accuracy`;

  // 2. Table History Log
  const tbody = document.getElementById("dash-history-table-body");
  if (tbody) {
    tbody.innerHTML = "";
    if (stats.attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Chưa có lịch sử làm bài. Hãy thử sức với các bài Quiz để xem thống kê!</td></tr>`;
    } else {
      stats.attempts.slice(0, 10).forEach(att => {
        const tr = document.createElement("tr");
        let badgeStyle = "background: #dcfce7; color: #15803d;";
        if (att.pct < 50) badgeStyle = "background: #fee2e2; color: #b91c1c;";
        else if (att.pct < 80) badgeStyle = "background: #fef3c7; color: #b45309;";

        tr.innerHTML = `
          <td>${att.time}</td>
          <td><strong>${att.skill}</strong></td>
          <td>${att.score}</td>
          <td><span style="${badgeStyle} font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 50px; font-size: 0.8rem;">${att.pct}%</span></td>
        `;
        tbody.appendChild(tr);
      });
    }
  }

  // 3. Render Chart.js Visualizations (if Chart constructor exists)
  if (typeof Chart === 'undefined') return;

  // Chart 1: Category Accuracy (Bar Chart)
  const ctxCat = document.getElementById("chartCategoryAccuracy");
  if (ctxCat) {
    if (chartCatAccInstance) chartCatAccInstance.destroy();
    const catNames = ['Main Idea', 'Vocabulary', 'Detail', 'Inference', 'Paraphrase', 'Collocations'];
    const catData = catNames.map(cn => {
      const cs = stats.catStats[cn];
      return cs && cs.total > 0 ? Math.round((cs.correct / cs.total) * 100) : 0;
    });

    chartCatAccInstance = new Chart(ctxCat, {
      type: 'bar',
      data: {
        labels: catNames,
        datasets: [{
          label: 'Accuracy (%)',
          data: catData,
          backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#0d9488'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 100 } },
        plugins: { legend: { display: false } }
      }
    });
  }

  // Chart 2: Score Trend (Line Chart)
  const ctxTrend = document.getElementById("chartScoreTrend");
  if (ctxTrend) {
    if (chartScoreTrendInstance) chartScoreTrendInstance.destroy();
    const recentAtts = [...stats.attempts].reverse().slice(-10);
    const labels = recentAtts.map((a, i) => `Attempt #${i+1}`);
    const dataPts = recentAtts.map(a => a.pct);

    chartScoreTrendInstance = new Chart(ctxTrend, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Score Accuracy (%)',
          data: dataPts,
          borderColor: '#0f766e',
          backgroundColor: 'rgba(15, 118, 110, 0.12)',
          fill: true,
          tension: 0.35,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { min: 0, max: 100 } }
      }
    });
  }

  // Chart 3: Skill Activity Breakdown (Doughnut Chart)
  const ctxAct = document.getElementById("chartActivityBreakdown");
  if (ctxAct) {
    if (chartActivityInstance) chartActivityInstance.destroy();
    chartActivityInstance = new Chart(ctxAct, {
      type: 'doughnut',
      data: {
        labels: ['Reading Quizzes', 'Colloc Quizzes', 'Flashcards Reviewed'],
        datasets: [{
          data: [
            stats.attempts.filter(a => a.skill.includes('Reading')).length,
            stats.attempts.filter(a => a.skill.includes('Collocations')).length,
            stats.flashcardsCount || 1
          ],
          backgroundColor: ['#0f766e', '#0d9488', '#f59e0b']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

// ==================== CÔ TRANG ANH GAMIFICATION MODULE LOGIC ====================
let taXP = 0;
let taStreak = 1;
let taHearts = 5;
let taCurrentTopic = "all";
let taQuizCurrentIdx = 0;
let taQuizUserAnswers = {};
let taQuizScore = 0;

let taPowerups = { '5050': true, 'hint': true };

// Speed Match State
let matchTimerInterval = null;
let matchSeconds = 0;
let matchScore = 0;
let matchCombo = 1;
let matchSelectedCard = null;
let matchTiles = [];

// Word Scramble State
let scrambleCurrentIdx = 0;
let scrambleUserSlots = [];
let scramblePoolWords = [];

// Flashcard State
let taFcDeck = [];
let taFcIndex = 0;

function initTrangAnhGamificationModule() {
  if (typeof TRANG_ANH_COLLOCATIONS === 'undefined') return;

  loadTaStats();
  initTaQuiz();
  initSpeedMatchGame();
  initTaScramble();
  initTaFlashcards();
  initTaBank();
}

function loadTaStats() {
  try {
    const saved = localStorage.getItem("ENGLISH_INSIDERS_TA_GAMIFIED");
    if (saved) {
      const parsed = JSON.parse(saved);
      taXP = parsed.xp || 0;
      taStreak = parsed.streak || 1;
    }
  } catch (e) {}
  updateTaStatsUI();
}

function saveTaStats() {
  try {
    localStorage.setItem("ENGLISH_INSIDERS_TA_GAMIFIED", JSON.stringify({
      xp: taXP,
      streak: taStreak
    }));
  } catch (e) {}
}

function addXP(amount, reason = "") {
  taXP += amount;
  saveTaStats();
  updateTaStatsUI();
  showXpFloatAnimation(amount, reason);
}

function showXpFloatAnimation(amount, reason) {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.bottom = "20%";
  el.style.right = "10%";
  el.style.background = "linear-gradient(135deg, #f59e0b, #d97706)";
  el.style.color = "#ffffff";
  el.style.padding = "0.75rem 1.5rem";
  el.style.borderRadius = "20px";
  el.style.fontWeight = "800";
  el.style.fontSize = "1.2rem";
  el.style.boxShadow = "0 10px 25px rgba(245, 158, 11, 0.4)";
  el.style.zIndex = "9999";
  el.style.transition = "all 0.8s ease-out";
  el.innerHTML = `+${amount} XP! ${reason}`;

  document.body.appendChild(el);

  setTimeout(() => {
    el.style.transform = "translateY(-40px)";
    el.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 900);
}

function getRankLevelInfo(xp) {
  if (xp < 100) return { level: 1, title: "Lv. 1 Novice Learner" };
  if (xp < 350) return { level: 2, title: "Lv. 2 Collocation Apprentice" };
  if (xp < 800) return { level: 3, title: "Lv. 3 Idiom Expert" };
  if (xp < 1500) return { level: 4, title: "Lv. 4 Master Collocator" };
  return { level: 5, title: "Lv. 5 Legend of Idioms 👑" };
}

function updateTaStatsUI() {
  const levelInfo = getRankLevelInfo(taXP);
  
  const levelEl = document.getElementById("ta-level-title");
  const xpEl = document.getElementById("ta-xp-count");
  const streakEl = document.getElementById("ta-streak-count");
  const heartsEl = document.getElementById("ta-hearts-display");
  const accEl = document.getElementById("ta-accuracy-display");

  if (levelEl) levelEl.textContent = levelInfo.title;
  if (xpEl) xpEl.textContent = `${taXP.toLocaleString()} XP`;
  if (streakEl) streakEl.textContent = `${taStreak} Day 🔥`;
  
  if (heartsEl) {
    let hStr = "";
    for (let i = 0; i < taHearts; i++) hStr += "❤️";
    for (let i = taHearts; i < 5; i++) hStr += "🖤";
    heartsEl.textContent = hStr || "🖤 (No Lives)";
  }

  if (accEl) {
    const totalAns = Object.keys(taQuizUserAnswers).length;
    if (totalAns === 0) {
      accEl.textContent = "100%";
    } else {
      const pct = Math.round((taQuizScore / totalAns) * 100);
      accEl.textContent = `${pct}%`;
    }
  }
}

// 1. Quiz Arena Functions
function initTaQuiz() {
  const filterBtns = document.querySelectorAll("#ta-topic-filters .filter-chip");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      taCurrentTopic = btn.getAttribute("data-topic");
      taQuizCurrentIdx = 0;
      renderTaQuizCard();
    });
  });

  renderTaQuizCard();
}

function getFilteredQuizQuestions() {
  if (typeof TRANG_ANH_QUIZ_QUESTIONS === 'undefined') return [];
  if (taCurrentTopic === 'all') return TRANG_ANH_QUIZ_QUESTIONS;
  return TRANG_ANH_QUIZ_QUESTIONS.filter(q => q.topic === taCurrentTopic);
}

function renderTaQuizCard() {
  const container = document.getElementById("ta-quiz-card-container");
  if (!container) return;

  const questions = getFilteredQuizQuestions();
  container.innerHTML = "";

  if (questions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <h3>🎯 Không có câu hỏi nào cho chủ đề này</h3>
      </div>
    `;
    return;
  }

  if (taQuizCurrentIdx >= questions.length) taQuizCurrentIdx = 0;
  const q = questions[taQuizCurrentIdx];

  const qCard = document.createElement("div");
  qCard.className = "passage-card";
  qCard.style.marginBottom = "1.5rem";

  const isAnswered = taQuizUserAnswers[q.id] !== undefined;
  const selectedOpt = taQuizUserAnswers[q.id];

  let optionsHtml = "";
  q.options.forEach((opt, oIdx) => {
    let optClass = "option-btn";
    if (isAnswered) {
      if (oIdx === q.correct) optClass += " show-correct";
      if (selectedOpt === oIdx) {
        optClass += oIdx === q.correct ? " selected-correct" : " selected-incorrect";
      }
    }
    optionsHtml += `
      <button class="${optClass}" id="opt-btn-${q.id}-${oIdx}" onclick="handleTaQuizAnswer('${q.id}', ${oIdx}, ${q.correct})">
        <span>${opt}</span>
        ${isAnswered && oIdx === q.correct ? '<span>✓</span>' : ''}
        ${isAnswered && selectedOpt === oIdx && oIdx !== q.correct ? '<span>✗</span>' : ''}
      </button>
    `;
  });

  qCard.innerHTML = `
    <div class="passage-header">
      <h4 style="font-size: 1.1rem; color: #7c3aed; font-weight: 800;">Question ${taQuizCurrentIdx + 1} of ${questions.length}</h4>
      <span class="badge-tag gamified-badge">${q.topic.toUpperCase()}</span>
    </div>
    <div style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 1.5rem; color: var(--text-primary); font-weight: 600;">
      ${q.question}
    </div>
    <div class="options-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem;">
      ${optionsHtml}
    </div>
    <div class="explanation-box ${isAnswered ? 'visible' : ''}">
      <div class="explanation-header">💡 Giải thích từ Cô Trang Anh:</div>
      <div><strong>🇻🇳 Dịch nghĩa:</strong> ${q.explanation}</div>
      ${q.explanationEn ? `<div style="margin-top:0.4rem; color:var(--text-muted);"><strong>🇬🇧 English Context:</strong> ${q.explanationEn}</div>` : ''}
    </div>

    <div style="display: flex; justify-content: space-between; margin-top: 1.5rem;">
      <button class="card-btn outline-amber" style="width: auto;" onclick="prevTaQuizQuestion()" ${taQuizCurrentIdx === 0 ? 'disabled' : ''}>← Câu trước</button>
      <button class="card-btn filled gamified-btn" style="width: auto;" onclick="nextTaQuizQuestion()">Câu tiếp theo →</button>
    </div>
  `;

  container.appendChild(qCard);
}

function handleTaQuizAnswer(qId, selectedIdx, correctIdx) {
  if (taQuizUserAnswers[qId] !== undefined) return;

  taQuizUserAnswers[qId] = selectedIdx;
  const isCorrect = selectedIdx === correctIdx;

  if (isCorrect) {
    taQuizScore++;
    addXP(50, "Quiz Arena Correct!");
    recordQuizAttempt("Cô Trang Anh Quiz", taCurrentTopic, 1, 1);
  } else {
    if (taHearts > 0) taHearts--;
    recordQuizAttempt("Cô Trang Anh Quiz", taCurrentTopic, 0, 1);
  }

  updateTaStatsUI();
  renderTaQuizCard();
}

function prevTaQuizQuestion() {
  if (taQuizCurrentIdx > 0) {
    taQuizCurrentIdx--;
    renderTaQuizCard();
  }
}

function nextTaQuizQuestion() {
  const questions = getFilteredQuizQuestions();
  if (taQuizCurrentIdx < questions.length - 1) {
    taQuizCurrentIdx++;
    renderTaQuizCard();
  } else {
    alert("🎉 Bạn đã hoàn thành tất cả các câu hỏi thuộc chủ đề này!");
  }
}

function usePowerup5050() {
  const questions = getFilteredQuizQuestions();
  if (questions.length === 0) return;
  const q = questions[taQuizCurrentIdx];
  if (taQuizUserAnswers[q.id] !== undefined) return;

  // Find 2 wrong options and hide them
  let wrongIndices = [];
  q.options.forEach((opt, idx) => {
    if (idx !== q.correct) wrongIndices.push(idx);
  });
  wrongIndices.sort(() => Math.random() - 0.5);

  const hide1 = wrongIndices[0];
  const hide2 = wrongIndices[1];

  const btn1 = document.getElementById(`opt-btn-${q.id}-${hide1}`);
  const btn2 = document.getElementById(`opt-btn-${q.id}-${hide2}`);

  if (btn1) btn1.style.visibility = "hidden";
  if (btn2) btn2.style.visibility = "hidden";

  document.getElementById("btn-5050").disabled = true;
}

function usePowerupHint() {
  const questions = getFilteredQuizQuestions();
  if (questions.length === 0) return;
  const q = questions[taQuizCurrentIdx];

  alert(`🔍 GỢI Ý CÔ TRANG ANH:\n${q.explanation}`);
  document.getElementById("btn-hint").disabled = true;
}

// 2. Speed Match Functions
function initSpeedMatchGame() {
  if (typeof TRANG_ANH_COLLOCATIONS === 'undefined') return;

  const grid = document.getElementById("ta-match-grid");
  if (!grid) return;

  clearInterval(matchTimerInterval);
  matchSeconds = 0;
  matchScore = 0;
  matchCombo = 1;
  matchSelectedCard = null;

  document.getElementById("match-timer-display").textContent = "00:00";
  document.getElementById("match-score-display").textContent = "0 / 8";
  document.getElementById("match-combo-display").textContent = "x1";

  // Pick 8 random collocations
  const pool = [...TRANG_ANH_COLLOCATIONS].sort(() => Math.random() - 0.5).slice(0, 8);
  matchTiles = [];

  pool.forEach((item, idx) => {
    matchTiles.push({ id: `eng_${idx}`, pairId: idx, text: item.phrase, type: 'eng' });
    matchTiles.push({ id: `vie_${idx}`, pairId: idx, text: item.meaning, type: 'vie' });
  });

  matchTiles.sort(() => Math.random() - 0.5);

  grid.innerHTML = "";
  matchTiles.forEach(tile => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.id = `tile-${tile.id}`;
    card.textContent = tile.text;
    card.onclick = () => handleMatchTileClick(tile);
    grid.appendChild(card);
  });

  // Start timer
  matchTimerInterval = setInterval(() => {
    matchSeconds++;
    const mins = String(Math.floor(matchSeconds / 60)).padStart(2, '0');
    const secs = String(matchSeconds % 60).padStart(2, '0');
    document.getElementById("match-timer-display").textContent = `${mins}:${secs}`;
  }, 1000);
}

function handleMatchTileClick(tile) {
  const tileEl = document.getElementById(`tile-${tile.id}`);
  if (!tileEl || tileEl.classList.contains("matched")) return;

  if (!matchSelectedCard) {
    matchSelectedCard = tile;
    tileEl.classList.add("selected");
  } else if (matchSelectedCard.id === tile.id) {
    matchSelectedCard = null;
    tileEl.classList.remove("selected");
  } else {
    // Check match
    const prevEl = document.getElementById(`tile-${matchSelectedCard.id}`);
    if (matchSelectedCard.pairId === tile.pairId && matchSelectedCard.type !== tile.type) {
      // MATCH!
      if (prevEl) prevEl.classList.replace("selected", "matched");
      tileEl.classList.add("matched");

      matchScore++;
      const xpGained = 30 * matchCombo;
      addXP(xpGained, `Speed Match Combo x${matchCombo}!`);
      matchCombo++;

      document.getElementById("match-score-display").textContent = `${matchScore} / 8`;
      document.getElementById("match-combo-display").textContent = `x${matchCombo}`;

      matchSelectedCard = null;

      if (matchScore === 8) {
        clearInterval(matchTimerInterval);
        setTimeout(() => {
          alert(`🎉 XUẤT SẮC! Bạn đã ghép thành công tất cả 8 cặp trong ${matchSeconds} giây!`);
        }, 300);
      }
    } else {
      // MISMATCH
      tileEl.classList.add("wrong-shake");
      if (prevEl) prevEl.classList.add("wrong-shake");
      matchCombo = 1;
      document.getElementById("match-combo-display").textContent = "x1";

      setTimeout(() => {
        if (prevEl) prevEl.classList.remove("selected", "wrong-shake");
        tileEl.classList.remove("wrong-shake");
        matchSelectedCard = null;
      }, 450);
    }
  }
}

// 3. Word Scramble Functions
function initTaScramble() {
  if (typeof TRANG_ANH_COLLOCATIONS === 'undefined') return;
  scrambleCurrentIdx = 0;
  renderScrambleQuestion();
}

function renderScrambleQuestion() {
  const container = document.getElementById("scramble-game-container");
  if (!container) return;

  const item = TRANG_ANH_COLLOCATIONS[scrambleCurrentIdx];
  const phraseWords = item.phrase.split(" ");
  scramblePoolWords = [...phraseWords].sort(() => Math.random() - 0.5);
  scrambleUserSlots = Array(phraseWords.length).fill(null);

  container.innerHTML = `
    <div class="scramble-box">
      <div class="scramble-prompt">🇻🇳 Meaning: "${item.meaning}"</div>
      <div style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem;">Cụm từ gốc gồm ${phraseWords.length} từ. Nhấp các ô từ bên dưới để ghép:</div>

      <div class="scramble-slots" id="scramble-slots-container">
        ${scrambleUserSlots.map((s, idx) => `<div class="scramble-slot" onclick="removeScrambleSlot(${idx})">${s || ''}</div>`).join('')}
      </div>

      <div class="scramble-pool" id="scramble-pool-container">
        ${scramblePoolWords.map((w, idx) => `<button class="scramble-tile" id="sc-tile-${idx}" onclick="pickScrambleWord('${w.replace(/'/g, "\\'")}', ${idx})">${w}</button>`).join('')}
      </div>

      <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
        <button class="card-btn outline-amber" style="width: auto;" onclick="resetScrambleQuestion()">🔄 Lấy lại từ đầu</button>
        <button class="card-btn filled gamified-btn" style="width: auto;" onclick="checkScrambleAnswer()">✅ Kiểm tra đáp án</button>
        <button class="card-btn outline-amber" style="width: auto;" onclick="nextScrambleQuestion()">Câu tiếp →</button>
      </div>
    </div>
  `;
}

function pickScrambleWord(word, tileIdx) {
  const firstEmpty = scrambleUserSlots.indexOf(null);
  if (firstEmpty !== -1) {
    scrambleUserSlots[firstEmpty] = { word, tileIdx };
    const tileBtn = document.getElementById(`sc-tile-${tileIdx}`);
    if (tileBtn) tileBtn.classList.add("used");
    renderScrambleSlots();
  }
}

function removeScrambleSlot(slotIdx) {
  const slotObj = scrambleUserSlots[slotIdx];
  if (slotObj) {
    const tileBtn = document.getElementById(`sc-tile-${slotObj.tileIdx}`);
    if (tileBtn) tileBtn.classList.remove("used");
    scrambleUserSlots[slotIdx] = null;
    renderScrambleSlots();
  }
}

function renderScrambleSlots() {
  const container = document.getElementById("scramble-slots-container");
  if (!container) return;
  container.innerHTML = scrambleUserSlots.map((s, idx) => 
    `<div class="scramble-slot" onclick="removeScrambleSlot(${idx})">${s ? s.word : ''}</div>`
  ).join('');
}

function resetScrambleQuestion() {
  renderScrambleQuestion();
}

function checkScrambleAnswer() {
  const item = TRANG_ANH_COLLOCATIONS[scrambleCurrentIdx];
  const userPhrase = scrambleUserSlots.map(s => s ? s.word : '').join(' ').trim();
  
  if (userPhrase.toLowerCase() === item.phrase.toLowerCase()) {
    addXP(40, "Word Scramble Solved!");
    alert(`🎉 CHÍNH XÁC! Cụm từ chuẩn: "${item.phrase}"`);
  } else {
    alert(`❌ CHƯA CHÍNH XÁC!\nĐáp án đúng là: "${item.phrase}"`);
  }
}

function nextScrambleQuestion() {
  scrambleCurrentIdx = (scrambleCurrentIdx + 1) % TRANG_ANH_COLLOCATIONS.length;
  renderScrambleQuestion();
}

// 4. 3D Flashcard Functions
function initTaFlashcards() {
  if (typeof TRANG_ANH_COLLOCATIONS === 'undefined') return;
  taFcDeck = [...TRANG_ANH_COLLOCATIONS];
  taFcIndex = 0;
  updateTaFlashcardUI();
}

function toggleTaFlashcardFlip() {
  const card = document.getElementById("ta-main-flashcard");
  if (card) card.classList.toggle("flipped");
}

function nextTaFlashcard() {
  if (taFcDeck.length === 0) return;
  taFcIndex = (taFcIndex + 1) % taFcDeck.length;
  resetAndShowTaFlashcard();
}

function prevTaFlashcard() {
  if (taFcDeck.length === 0) return;
  taFcIndex = (taFcIndex - 1 + taFcDeck.length) % taFcDeck.length;
  resetAndShowTaFlashcard();
}

function markTaFcMastered() {
  addXP(15, "Flashcard Mastered!");
  nextTaFlashcard();
}

function markTaFcNeedPractice() {
  nextTaFlashcard();
}

function resetAndShowTaFlashcard() {
  const card = document.getElementById("ta-main-flashcard");
  if (card) card.classList.remove("flipped");
  setTimeout(() => {
    updateTaFlashcardUI();
  }, 150);
}

function updateTaFlashcardUI() {
  if (taFcDeck.length === 0) return;
  const item = taFcDeck[taFcIndex];

  const tagEl = document.getElementById("ta-fc-topic-tag");
  const counterEl = document.getElementById("ta-fc-counter");
  const termEl = document.getElementById("ta-fc-term");
  const ipaEl = document.getElementById("ta-fc-ipa");
  const vnEl = document.getElementById("ta-fc-vn");
  const exEl = document.getElementById("ta-fc-ex");

  if (tagEl) tagEl.textContent = (item.topic || 'Collocation').toUpperCase();
  if (counterEl) counterEl.textContent = `Card ${taFcIndex + 1} of ${taFcDeck.length}`;
  if (termEl) termEl.textContent = item.phrase;
  if (ipaEl) ipaEl.textContent = item.ipa || '';
  if (vnEl) vnEl.textContent = item.meaning;
  if (exEl) exEl.textContent = item.example ? (`• ${item.example}`) : '';
}

function speakTaTerm() {
  if (taFcDeck.length === 0) return;
  const item = taFcDeck[taFcIndex];
  if (typeof window.speechSynthesis !== 'undefined') {
    const utter = new SpeechSynthesisUtterance(item.phrase);
    utter.lang = 'en-US';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }
}

// 5. Glossary Bank Functions
function initTaBank() {
  const searchInput = document.getElementById("ta-bank-search");
  const grid = document.getElementById("ta-bank-grid");
  if (!grid || typeof TRANG_ANH_COLLOCATIONS === 'undefined') return;

  function renderBank(filter = "") {
    grid.innerHTML = "";
    const filtered = TRANG_ANH_COLLOCATIONS.filter(item => 
      item.phrase.toLowerCase().includes(filter.toLowerCase()) ||
      item.meaning.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-word">${item.phrase}</div>
        <div class="vocab-pos">${item.type || 'Collocation'} • ${item.ipa || ''}</div>
        <div class="vocab-vn">🇻🇳 ${item.meaning}</div>
        ${item.example ? `<div class="vocab-def" style="margin-top:0.5rem; font-style:italic;">• ${item.example}</div>` : ''}
      `;
      grid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderBank(e.target.value);
    });
  }

  renderBank();
}





