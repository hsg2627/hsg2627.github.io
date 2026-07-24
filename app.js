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
  initFovModule();
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

// ==================== ENGLISH COLLOCATIONS GAMIFICATION MODULE LOGIC ====================
function getTaCollocationsPool() {
  let pool = (typeof TRANG_ANH_COLLOCATIONS !== 'undefined') ? [...TRANG_ANH_COLLOCATIONS] : [];
  if (typeof COLLOCATIONS_DATA !== 'undefined' && Array.isArray(COLLOCATIONS_DATA)) {
    const existing = new Set(pool.map(x => (x.phrase || '').toLowerCase()));
    COLLOCATIONS_DATA.forEach(item => {
      if (item.term && !existing.has(item.term.toLowerCase())) {
        pool.push({
          id: item.id,
          phrase: item.term,
          meaning: item.vn,
          topic: "everyday_collocations",
          type: item.pos || "Collocation",
          example: item.ex1 || item.def || "",
          ipa: item.ipa || ""
        });
        existing.add(item.term.toLowerCase());
      }
    });
  }
  return pool;
}

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
  let questions = (typeof TRANG_ANH_QUIZ_QUESTIONS !== 'undefined') ? [...TRANG_ANH_QUIZ_QUESTIONS] : [];
  
  if (typeof COLLOCATIONS_DATA !== 'undefined' && Array.isArray(COLLOCATIONS_DATA)) {
    const isLevelFilter = ['B1', 'B2', 'C1', 'C2'].includes(taCurrentTopic);
    const filteredData = COLLOCATIONS_DATA.filter(item => {
      if (!item.cloze1 || !item.distractors || item.distractors.length < 3) return false;
      if (isLevelFilter) return item.level === taCurrentTopic;
      return true;
    });

    filteredData.slice(0, 60).forEach((item) => {
      const wrong = item.distractors.slice(0, 3).map(d => d.word);
      const options = [item.term, ...wrong];
      const seed = item.term.length % 4;
      const shiftedOpts = options.slice(seed).concat(options.slice(0, seed));
      const correctIdx = shiftedOpts.indexOf(item.term);
      const formattedOpts = shiftedOpts.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`);
      
      questions.push({
        id: `auto_q_${item.id}`,
        topic: item.level || "B2",
        level: item.level || "B2",
        question: item.cloze1,
        options: formattedOpts,
        correct: correctIdx,
        explanation: `Cụm từ '${item.term}' nghĩa là: ${item.vn}.`,
        explanationEn: item.ex1 || item.def || ""
      });
    });
  }

  if (taCurrentTopic === 'all') return questions;
  const isLevel = ['B1', 'B2', 'C1', 'C2'].includes(taCurrentTopic);
  if (isLevel) {
    return questions.filter(q => (q.level === taCurrentTopic || q.topic === taCurrentTopic));
  }
  return questions.filter(q => q.topic === taCurrentTopic);
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
      <div class="explanation-header">💡 Giải thích đáp án:</div>
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
    recordQuizAttempt("English Collocations Quiz", taCurrentTopic, 1, 1);
  } else {
    if (taHearts > 0) taHearts--;
    recordQuizAttempt("English Collocations Quiz", taCurrentTopic, 0, 1);
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

  alert(`🔍 GỢI Ý:\n${q.explanation}`);
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

  // Pick 8 random collocations from full pool
  const pool = getTaCollocationsPool().sort(() => Math.random() - 0.5).slice(0, 8);
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

  const pool = getTaCollocationsPool();
  if (pool.length === 0) return;
  if (scrambleCurrentIdx >= pool.length) scrambleCurrentIdx = 0;
  const item = pool[scrambleCurrentIdx];
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
  const pool = getTaCollocationsPool();
  const item = pool[scrambleCurrentIdx];
  const userPhrase = scrambleUserSlots.map(s => s ? s.word : '').join(' ').trim();
  
  if (userPhrase.toLowerCase() === item.phrase.toLowerCase()) {
    addXP(40, "Word Scramble Solved!");
    alert(`🎉 CHÍNH XÁC! Cụm từ chuẩn: "${item.phrase}"`);
  } else {
    alert(`❌ CHƯA CHÍNH XÁC!\nĐáp án đúng là: "${item.phrase}"`);
  }
}

function nextScrambleQuestion() {
  const pool = getTaCollocationsPool();
  scrambleCurrentIdx = (scrambleCurrentIdx + 1) % pool.length;
  renderScrambleQuestion();
}

// 4. 3D Flashcard Functions
function initTaFlashcards() {
  taFcDeck = getTaCollocationsPool();
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
  if (!grid) return;

  const pool = getTaCollocationsPool();

  function renderBank(filter = "") {
    grid.innerHTML = "";
    const filtered = pool.filter(item => 
      item.phrase.toLowerCase().includes(filter.toLowerCase()) ||
      item.meaning.toLowerCase().includes(filter.toLowerCase())
    );

    const limit = filter ? filtered.length : 150;
    filtered.slice(0, limit).forEach(item => {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div class="vocab-word">${item.phrase}</div>
        <div class="vocab-pos">${item.type || 'Collocation'} ${item.ipa ? '• ' + item.ipa : ''}</div>
        <div class="vocab-vn">🇻🇳 ${item.meaning}</div>
        ${item.example ? `<div class="vocab-def" style="margin-top:0.5rem; font-style:italic;">• ${item.example}</div>` : ''}
      `;
      grid.appendChild(card);
    });

    if (!filter && filtered.length > 150) {
      const moreInfo = document.createElement("div");
      moreInfo.style.cssText = "grid-column: 1/-1; text-align: center; padding: 1rem; color: var(--text-muted); font-weight: 600;";
      moreInfo.textContent = `💡 Đang hiển thị 150 / ${filtered.length.toLocaleString()} cụm từ. Nhập từ khóa vào ô tìm kiếm ở trên để tra cứu toàn bộ kho cụm từ!`;
      grid.appendChild(moreInfo);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderBank(e.target.value);
    });
  }

  renderBank();
}

// ==========================================================================
// FOCUS ON VOCABULARY MODULE LOGIC & DATA STORES
// ==========================================================================

let currentFovChapter = "all";

const FOV_VOCABULARY_DATA = [
  // --- CHAPTER 1: CAN WE BE HAPPIER? ---
  { word: "Instinctively", pos: "adverb", ipa: "/ɪnˈstɪŋktɪvli/", level: "B2", vn: "Theo bản năng, tự nhiên phát sinh", def: "Occurring because of a natural tendency to behave in a particular way or a natural ability to know something that is not learned.", example: "She instinctively reached out to catch the falling glass.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Philosophy", pos: "noun", ipa: "/fəˈlɑːsəfi/", level: "B2", vn: "Triết học, triết lý sống", def: "The study of the nature and meaning of existence, truth, good, and evil.", example: "His personal philosophy is to treat everyone with kindness.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Deed", pos: "noun", ipa: "/diːd/", level: "B2", vn: "Hành động, việc làm", def: "Something a person does, especially something that is very good or bad.", example: "A good deed is never wasted.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Restaurant", pos: "noun", ipa: "/ˈrestrɑːnt/", level: "A1", vn: "Nhà hàng, quán ăn", def: "A place where you can buy and eat a meal.", example: "We celebrated her graduation at an Italian restaurant.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Mystery", pos: "noun", ipa: "/ˈmɪstri/", level: "B1", vn: "Bí ẩn, điều chưa giải thích được", def: "An event, situation, etc., that people do not understand or cannot explain.", example: "The cause of the sudden disappearance remains a mystery.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Manner", pos: "noun", ipa: "/ˈmænər/", level: "B2", vn: "Cách thức, phong thái", def: "The way in which something is done or happens.", example: "He spoke in a calm and reassuring manner.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Graft", pos: "verb / noun", ipa: "/ɡræft/", level: "C1", vn: "Ghép vào, gắn kết cái mới vào", def: "To add something very different to something, so that it becomes part of it.", example: "Surgeons managed to graft new skin onto the wounded area.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Pace", pos: "noun", ipa: "/peɪs/", level: "B2", vn: "Nhịp độ, tốc độ tiến trình", def: "The speed at which something happens or is done.", example: "The pace of technological change is accelerating rapidly.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Steak", pos: "noun", ipa: "/steɪk/", level: "A2", vn: "Miếng thịt bít tết nướng", def: "A large, thick piece of good-quality red meat.", example: "He ordered a ribeye steak cooked to perfection.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Inherit", pos: "verb", ipa: "/ɪnˈherɪt/", level: "B2", vn: "Thừa hưởng, di truyền tính trạng", def: "To be born with the same character or physical appearance as your parents.", example: "She inherited her grandmother's artistic talent.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Monk", pos: "noun", ipa: "/mʌŋk/", level: "B2", vn: "Thầy tu, nhà sư", def: "A member of an all-male religious group living apart from secular society.", example: "The monk dedicated his day to prayer and meditation.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Devote", pos: "verb", ipa: "/dɪˈvoʊt/", level: "B2", vn: "Cống hiến, dành hết thời gian/tâm trí", def: "To use all or most of your time and effort in order to do something.", example: "She devotes hours every week to community service.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Therapy", pos: "noun", ipa: "/ˈθerəpi/", level: "B2", vn: "Liệu pháp điều trị, chữa trị tâm lý", def: "Treatment that helps someone feel better or grow stronger.", example: "Music therapy has proved effective in reducing anxiety.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Esteem", pos: "noun", ipa: "/ɪˈstiːm/", level: "C1", vn: "Sự tôn trọng, đánh giá cao", def: "A feeling of respect for someone, or a good opinion of someone.", example: "High self-esteem helps students overcome challenges.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Obscure", pos: "adjective", ipa: "/əbˈskjʊr/", level: "C1", vn: "Mơ hồ, khó hiểu (Từ trái nghĩa: precise)", def: "Not discovered or known about; unclear or vague.", example: "The manuscript was written in an obscure dialect.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Thrill", pos: "noun", ipa: "/θrɪl/", level: "B2", vn: "Cảm giác phấn khích (Từ trái nghĩa: boredom)", def: "A sudden feeling of excitement and pleasure.", example: "Riding the roller coaster gave her an incredible thrill.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Discipline", pos: "noun", ipa: "/ˈdɪsəplɪn/", level: "B2", vn: "Kỷ luật, sự tự giác (Từ trái nghĩa: indulgence)", def: "The practice of training self-control and rule obedience.", example: "Maintaining daily study discipline requires strong determination.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Longing", pos: "noun", ipa: "/ˈlɔːŋɪŋ/", level: "C1", vn: "Khao khát, mong mỏi tha thiết (Từ trái nghĩa: dislike)", def: "A yearning desire or strong wish for something.", example: "He felt a deep longing for his childhood home.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Cheerful", pos: "adjective", ipa: "/ˈtʃɪrfl/", level: "B1", vn: "Vui vẻ, phấn khởi (Từ trái nghĩa: serious)", def: "Noticeably happy and optimistic.", example: "Her cheerful smile brightened up the room.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Astonishing", pos: "adjective", ipa: "/əˈstɑːnɪʃɪŋ/", level: "B2", vn: "Đáng kinh ngạc, gây sửng sốt (Từ trái nghĩa: predictable)", def: "Extremely surprising or impressive; amazing.", example: "The athlete set an astonishing new world record.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Assert", pos: "verb", ipa: "/əˈsɜːrt/", level: "C1", vn: "Khẳng định, tuyên bố quả quyết (Từ trái nghĩa: deny)", def: "State a fact or belief confidently and forcefully.", example: "She asserted her independence by starting her own business.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Review", pos: "noun", ipa: "/rɪˈvjuː/", level: "B1", vn: "Sự đánh giá, xem xét (Không đồng nghĩa: proposal)", def: "A formal assessment or examination of something.", example: "The book received glowing reviews from critics.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Intervention", pos: "noun", ipa: "/ˌɪntərˈvenʃn/", level: "C1", vn: "Sự can thiệp, biện pháp điều trị (Từ trái nghĩa: inactivity)", def: "Action taken to improve a situation or treat a condition.", example: "Timely medical intervention saved the patient's life.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },
  { word: "Boost", pos: "verb", ipa: "/buːst/", level: "B2", vn: "Thúc đẩy, tăng cường (Từ trái nghĩa: limit)", def: "Help or encourage something to increase or improve.", example: "Positive feedback can boost employee confidence.", chapter: "ch1", chapterTitle: "Chapter 1: Can we be happier?" },

  // --- CHAPTER 2: INTO THE FLOW ---
  { word: "Gripped", pos: "adjective", ipa: "/ɡrɪpt/", level: "B2", vn: "Bị cuốn hút, bị lôi cuốn sâu sắc", def: "Deeply engaged, interested, or strongly affected by something.", example: "The audience was completely gripped by the suspenseful movie.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Absorbed", pos: "adjective", ipa: "/əbˈzɔːrbd/", level: "B2", vn: "Mải mê, say sưa (đến mức không chú ý xung quanh)", def: "Very interested in something, often to the point of not noticing other things happening around.", example: "She was so absorbed in her reading that she lost track of time.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Fiercely", pos: "adverb", ipa: "/ˈfɪrsli/", level: "B2", vn: "Dữ dội, mãnh liệt, quyết liệt", def: "Energetically and with strong feelings or intensity.", example: "The athletes competed fiercely for the championship gold medal.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Ache", pos: "verb / noun", ipa: "/eɪk/", level: "B1", vn: "Đau nhức ê ẩm, khát khao", def: "To feel a continuous but not very sharp pain in a body part.", example: "After running the marathon, her aching legs needed rest.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Explode", pos: "verb", ipa: "/ɪkˈsploʊd/", level: "B2", vn: "Bùng nổ, tăng vọt đột ngột", def: "To suddenly increase greatly in number, amount, or degree; or to burst with noise.", example: "E-sports exploded in popularity among teenagers worldwide.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Overcome", pos: "verb", ipa: "/ˌoʊvərˈkʌm/", level: "B2", vn: "Vượt qua, khống chế (khó khăn, cảm xúc)", def: "To successfully control or deal with a feeling or problem.", example: "She managed to overcome her fear of public speaking.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Intellectual", pos: "adjective / noun", ipa: "/ˌɪntəˈlektʃuəl/", level: "B2", vn: "Thuộc trí tuệ, cần suy nghĩ chuyên sâu", def: "Needing serious thought in order to be understood; or a well-educated person.", example: "Chess provides an intellectually stimulating challenge for players.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Drift", pos: "verb", ipa: "/drɪft/", level: "B2", vn: "Trôi dạt, sống trôi nổi không mục đích", def: "To move, change, or do something without any set plan or purpose.", example: "Without clear goals, it is easy to drift through life.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Confront", pos: "verb", ipa: "/kənˈfrʌnt/", level: "B2", vn: "Đương đầu, đối mặt trực diện với khó khăn", def: "To deal with something very difficult or unpleasant in a brave and determined way.", example: "Instead of avoiding problems, you should confront them directly.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Tension", pos: "noun", ipa: "/ˈtenʃn/", level: "B2", vn: "Sự căng thẳng, áp lực tâm lý", def: "A nervous feeling that makes it impossible to relax.", example: "Meditation helps reduce mental tension and anxiety.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Fulfillment", pos: "noun", ipa: "/fʊlˈfɪlmənt/", level: "C1", vn: "Sự mãn nguyện, cảm giác hoàn thành mục tiêu", def: "The feeling of being happy and satisfied with your life because of doing meaningful things.", example: "Volunteering brings a deep sense of personal fulfillment.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Motivation", pos: "noun", ipa: "/ˌmoʊtɪˈveɪʃn/", level: "B2", vn: "Động lực, lý do thúc đẩy hành động", def: "The reason why you want to do something or the willingness to achieve goals.", example: "High motivation is essential for mastering a complex skill.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Worthwhile", pos: "adjective", ipa: "/ˌwɜːrθˈwaɪl/", level: "B2", vn: "Đáng giá, có ý nghĩa", def: "Important, enjoyable, or interesting enough to be worth time and effort.", example: "Learning a foreign language is a difficult but worthwhile goal.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Interval", pos: "noun", ipa: "/ˈɪntərvl/", level: "B2", vn: "Khoảng thời gian nghỉ, định kỳ", def: "A period of time between two events or activities.", example: "The teacher scheduled tests at regular intervals throughout the semester.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Peer", pos: "noun", ipa: "/pɪr/", level: "B2", vn: "Bạn đồng lứa, bạn học, người cùng địa vị", def: "A person who is the same age or has the same social position/abilities as you.", example: "Teens are strongly influenced by their peer group.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Feedback", pos: "noun", ipa: "/ˈfiːdbæk/", level: "B2", vn: "Phản hồi, thông tin nhận xét", def: "Advice, criticism, or information about how good or useful something is.", example: "Immediate feedback helps learners correct their errors quickly.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Thus", pos: "adverb", ipa: "/ðʌs/", level: "B2", vn: "Do đó, vì vậy, như thế", def: "As a result of this; therefore.", example: "He studied hard and thus achieved high scores in all subjects.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Trivial", pos: "adjective", ipa: "/ˈtrɪviəl/", level: "B2", vn: "Tầm thường, không quan trọng", def: "Of little value or importance; minor.", example: "Don't waste precious time worrying about trivial matters.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Medal", pos: "noun", ipa: "/ˈmedl/", level: "B1", vn: "Huy chương", def: "A flat piece of metal given as a prize in a competition.", example: "She won a gold medal in the 100-meter sprint.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Amusement", pos: "noun", ipa: "/əˈmjuːzmənt/", level: "B2", vn: "Trò giải trí, hoạt động vui chơi", def: "An activity or game that provides entertainment.", example: "Playing board games is a popular family amusement.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Fictional", pos: "adjective", ipa: "/ˈfɪkʃənl/", level: "B2", vn: "Hư cấu, tưởng tượng (không có thật)", def: "Imaginary or invented; not real.", example: "Sherlock Holmes is a fictional detective created by Arthur Conan Doyle.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Strive", pos: "verb", ipa: "/straɪv/", level: "C1", vn: "Cố gắng hết sức, phấn đấu", def: "To make great efforts to achieve or obtain something.", example: "We must strive to achieve our highest potential.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Lung", pos: "noun", ipa: "/lʌŋ/", level: "B1", vn: "Lá phổi (cơ quan hô hấp)", def: "One of the two breathing organs in the chest.", example: "Deep breathing exercises expand your lungs and reduce stress.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },
  { word: "Distracted", pos: "adjective", ipa: "/dɪˈstræktɪd/", level: "B2", vn: "Mất tập trung, xao nhãng", def: "Unable to concentrate because one's attention is given to something else.", example: "Noise outside the exam room left many students distracted.", chapter: "ch2", chapterTitle: "Chapter 2: Into the Flow" },

  // --- CHAPTER ACADEMIC (CORE AWL) ---
  { word: "Ubiquitous", pos: "adjective", ipa: "/juːˈbɪkwɪtəs/", level: "B2", vn: "Phổ biến ở khắp mọi nơi, có mặt khắp nơi", def: "Present, appearing, or found everywhere.", example: "Smartphones have become ubiquitous in modern daily life.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Ephemeral", pos: "adjective", ipa: "/ɪˈfemərəl/", level: "C1", vn: "Phù du, chóng khánh, ngắn ngủi", def: "Lasting for a very short time.", example: "Fashions are ephemeral, changing with every season.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Plausible", pos: "adjective", ipa: "/ˈplɔːzəbl/", level: "B2", vn: "Hợp lý, đáng tin cậy", def: "Seeming reasonable or probable.", example: "She offered a plausible explanation for her tardiness.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Meticulous", pos: "adjective", ipa: "/məˈtɪkjələs/", level: "C1", vn: "Tỉ mỉ, cẩn thận từng chi tiết", def: "Showing great attention to detail; very careful and precise.", example: "The researcher conducted a meticulous analysis of the data.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Pragmatic", pos: "adjective", ipa: "/præɡˈmætɪk/", level: "C1", vn: "Thực tế, thực dụng, trọng thực tiễn", def: "Dealing with things sensibly and realistically.", example: "We need a pragmatic solution rather than an idealist theory.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Exacerbate", pos: "verb", ipa: "/ɪɡˈzæsərbeɪt/", level: "C1", vn: "Làm trầm trọng thêm, làm xấu đi", def: "Make a problem or bad situation worse.", example: "Pollution will exacerbate respiratory illnesses in urban areas.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Resilient", pos: "adjective", ipa: "/rɪˈzɪliənt/", level: "B2", vn: "Kiên cường, có khả năng phục hồi nhanh", def: "Able to withstand or recover quickly from difficult conditions.", example: "Local communities proved resilient in the face of the economic crisis.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Ambiguous", pos: "adjective", ipa: "/æmˈbɪɡjuəs/", level: "B2", vn: "Mơ hồ, nhập nhằng, có nhiều cách hiểu", def: "Open to more than one interpretation; unclear.", example: "The instructions were ambiguous and led to confusion.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Disparate", pos: "adjective", ipa: "/ˈdɪspərət/", level: "C2", vn: "Khác biệt hoàn toàn, không thể so sánh", def: "Essentially different in kind; not allowing comparison.", example: "The team brought together experts from disparate fields.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Profound", pos: "adjective", ipa: "/prəˈfaʊnd/", level: "B2", vn: "Sâu sắc, thâm thúy, ảnh hưởng to lớn", def: "Very great or intense; possessing deep insight.", example: "The discovery had a profound impact on medical science.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Consolidate", pos: "verb", ipa: "/kənˈsɑːlɪdeɪt/", level: "C1", vn: "Củng cố, hợp nhất", def: "Make something physically stronger or more solid; combine.", example: "The company plans to consolidate its market position.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Capricious", pos: "adjective", ipa: "/kəˈprɪʃəs/", level: "C2", vn: "Thất thường, hay thay đổi vô cớ", def: "Given to sudden and unaccountable changes of mood or behavior.", example: "The weather in the mountains can be highly capricious.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Impeccable", pos: "adjective", ipa: "/ɪmˈpekəbl/", level: "C1", vn: "Hoàn hảo, không chê vào đâu được", def: "Faultless; in accordance with the highest standards.", example: "Her English pronunciation and grammar are impeccable.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Substantiate", pos: "verb", ipa: "/səbˈstænʃieɪt/", level: "C2", vn: "Chứng minh, đưa ra bằng chứng xác minh", def: "Provide evidence to support or prove the truth of.", example: "The study failed to substantiate the claims made by the manufacturer.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Scrutinize", pos: "verb", ipa: "/ˈskruːtənaɪz/", level: "C1", vn: "Xem xét kỹ lưỡng, soi xét cẩn thận", def: "Examine or inspect closely and thoroughly.", example: "Inspectors scrutinize every component before shipping.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Inevitably", pos: "adverb", ipa: "/ɪnˈevɪtəbli/", level: "B2", vn: "Tất yếu, không thể tránh khỏi", def: "Certain to happen; unavoidably.", example: "Technological advancements inevitably reshape the labor market.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Paramount", pos: "adjective", ipa: "/ˈpærəmaʊnt/", level: "C1", vn: "Tối quan trọng, có ý nghĩa hàng đầu", def: "More important than anything else; supreme.", example: "Safety must remain the paramount concern for engineers.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Fluctuate", pos: "verb", ipa: "/ˈflʌktʃueɪt/", level: "B2", vn: "Biến động, dao động thất thường", def: "Rise and fall irregularly in number or amount.", example: "Stock prices fluctuate depending on market demand.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Divergence", pos: "noun", ipa: "/daɪˈvɜːrdʒəns/", level: "C1", vn: "Sự phân kỳ, sự khác biệt ý kiến/hướng đi", def: "A difference in opinions, interests, or direction.", example: "There is a clear divergence between the two research reports.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Fostering", pos: "verb", ipa: "/ˈfɔːstərɪŋ/", level: "B2", vn: "Thúc đẩy, nuôi dưỡng, khuyến khích phát triển", def: "Encouraging the development or growth of something.", example: "The school aims at fostering creativity among young learners.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Intrinsic", pos: "adjective", ipa: "/ɪnˈtrɪnzɪk/", level: "C1", vn: "Bản chất, thuộc về bên trong, cốt lõi", def: "Belonging naturally; essential.", example: "Interest in learning is an intrinsic motivation for success.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Elucidate", pos: "verb", ipa: "/ɪˈluːsɪdeɪt/", level: "C2", vn: "Làm sáng tỏ, giải thích rõ ràng", def: "Make something clear; explain thoroughly.", example: "The professor gave examples to elucidate the complex theorem.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Superfluous", pos: "adjective", ipa: "/suːˈpɜːrfluəs/", level: "C2", vn: "Dư thừa, thừa thải, không cần thiết", def: "Unnecessary, especially through being more than enough.", example: "Avoid including superfluous details in your academic summary.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Cognitive", pos: "adjective", ipa: "/ˈkɑːɡnətɪv/", level: "B2", vn: "Thuộc về nhận thức, trí tuệ", def: "Relating to mental processes of perception and reasoning.", example: "Reading enhances cognitive abilities in young children.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Empirical", pos: "adjective", ipa: "/ɪmˈpɪrɪkl/", level: "C1", vn: "Dựa trên thực nghiệm, quan sát thực tế", def: "Based on observation or experiment rather than theory.", example: "Scientific laws require strong empirical evidence to be accepted.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" }
];

const FOV_QUIZ_DATA = [
  // --- CHAPTER 1 QUESTIONS (ALL 23 EXERCISES) ---
  // Set 1 (7 questions)
  {
    id: "ch1_q1",
    chapter: "ch1",
    question: "Definition Match: 'occurring because of a natural tendency to behave in a particular way or a natural ability to know something that is not learned'",
    options: ["A. philosophy", "B. instinctively", "C. mystery", "D. manner"],
    correct: 1,
    explanation: "Instinctively means occurring because of a natural tendency or unlearned ability.",
    explanationVn: "Giải thích: 'Instinctively' (theo bản năng) xuất phát từ xu hướng tự nhiên không qua học tập."
  },
  {
    id: "ch1_q2",
    chapter: "ch1",
    question: "Definition Match: 'the study of the nature and meaning of existence, truth, good, and evil'",
    options: ["A. philosophy", "B. deed", "C. mystery", "D. manner"],
    correct: 0,
    explanation: "Philosophy is the study of existence, truth, good, and evil.",
    explanationVn: "Giải thích: 'Philosophy' (triết học) là việc nghiên cứu bản chất sự tồn tại, chân lý và đạo đức."
  },
  {
    id: "ch1_q3",
    chapter: "ch1",
    question: "Definition Match: 'something a person does, especially something that is very good or bad'",
    options: ["A. manner", "B. restaurant", "C. deed", "D. graft"],
    correct: 2,
    explanation: "Deed is something a person does, an action.",
    explanationVn: "Giải thích: 'Deed' (hành động, việc làm) là việc con người thực hiện (việc tốt hoặc xấu)."
  },
  {
    id: "ch1_q4",
    chapter: "ch1",
    question: "Definition Match: 'a place where you can buy and eat a meal'",
    options: ["A. mystery", "B. restaurant", "C. manner", "D. steak"],
    correct: 1,
    explanation: "Restaurant is a commercial place where meals are served.",
    explanationVn: "Giải thích: 'Restaurant' (nhà hàng) là nơi mua và ăn các bữa ăn."
  },
  {
    id: "ch1_q5",
    chapter: "ch1",
    question: "Definition Match: 'an event, situation, etc., that people do not understand or cannot explain'",
    options: ["A. mystery", "B. philosophy", "C. deed", "D. pace"],
    correct: 0,
    explanation: "Mystery is an unexplained or mysterious event/situation.",
    explanationVn: "Giải thích: 'Mystery' (bí ẩn) là sự kiện hay tình huống chưa thể giải thích được."
  },
  {
    id: "ch1_q6",
    chapter: "ch1",
    question: "Definition Match: 'the way in which something is done or happens'",
    options: ["A. graft", "B. manner", "C. pace", "D. esteem"],
    correct: 1,
    explanation: "Manner refers to the way or style in which something is done.",
    explanationVn: "Giải thích: 'Manner' (cách thức, phong thái) là phương thức việc gì đó được thực hiện."
  },
  {
    id: "ch1_q7",
    chapter: "ch1",
    question: "Definition Match: 'to add something very different to something, so that it becomes part of it'",
    options: ["A. inherit", "B. devote", "C. graft", "D. assert"],
    correct: 2,
    explanation: "Graft means to join or add something different onto something else.",
    explanationVn: "Giải thích: 'Graft' (ghép/gắn kết) là thêm một thành phần khác vào để trở thành một phần của nó."
  },

  // Set 2 (7 questions)
  {
    id: "ch1_q8",
    chapter: "ch1",
    question: "Definition Match: 'the speed at which something happens or is done'",
    options: ["A. pace", "B. therapy", "C. monk", "D. esteem"],
    correct: 0,
    explanation: "Pace refers to the rate of speed of progress or movement.",
    explanationVn: "Giải thích: 'Pace' (nhịp độ, tốc độ) là vận tốc diễn ra của một sự việc."
  },
  {
    id: "ch1_q9",
    chapter: "ch1",
    question: "Definition Match: 'a large, thick piece of good-quality red meat'",
    options: ["A. steak", "B. deed", "C. graft", "D. pace"],
    correct: 0,
    explanation: "Steak is a thick slice of high-quality red meat.",
    explanationVn: "Giải thích: 'Steak' (thịt bít tết) là miếng thịt đỏ dày chất lượng cao."
  },
  {
    id: "ch1_q10",
    chapter: "ch1",
    question: "Definition Match: 'to be born with the same character or physical appearance as your parents'",
    options: ["A. devote", "B. inherit", "C. assert", "D. review"],
    correct: 1,
    explanation: "Inherit means to receive genetic traits or physical features from parents.",
    explanationVn: "Giải thích: 'Inherit' (thừa hưởng, di truyền) là sinh ra mang đặc điểm của bố mẹ."
  },
  {
    id: "ch1_q11",
    chapter: "ch1",
    question: "Definition Match: 'a member of an all-male religious group that lives apart from other people'",
    options: ["A. monk", "B. therapy", "C. esteem", "D. deed"],
    correct: 0,
    explanation: "Monk is a member of a male religious community.",
    explanationVn: "Giải thích: 'Monk' (thầy tu, nhà sư) là nam tu sĩ sống trong cộng đồng tôn giáo riêng biệt."
  },
  {
    id: "ch1_q12",
    chapter: "ch1",
    question: "Definition Match: 'to use all or most of your time and effort in order to do something or help someone'",
    options: ["A. assert", "B. devote", "C. boost", "D. inherit"],
    correct: 1,
    explanation: "Devote means to dedicate time and energy to a cause or person.",
    explanationVn: "Giải thích: 'Devote' (cống hiến, dành trọn) là dùng toàn bộ thời gian/tâm trí cho mục tiêu."
  },
  {
    id: "ch1_q13",
    chapter: "ch1",
    question: "Definition Match: 'treatment that helps someone feel better or grow stronger'",
    options: ["A. therapy", "B. esteem", "C. mystery", "D. intervention"],
    correct: 0,
    explanation: "Therapy is healing treatment for physical or mental conditions.",
    explanationVn: "Giải thích: 'Therapy' (liệu pháp điều trị) là phương pháp giúp cải thiện sức khỏe."
  },
  {
    id: "ch1_q14",
    chapter: "ch1",
    question: "Definition Match: 'a feeling of respect for someone, or a good opinion of someone'",
    options: ["A. longing", "B. esteem", "C. discipline", "D. manner"],
    correct: 1,
    explanation: "Esteem is respect and high regard for someone.",
    explanationVn: "Giải thích: 'Esteem' (sự tôn trọng/kính trọng) là tình cảm nể trọng đối với ai đó."
  },

  // Part B (9 Odd-Word-Out Synonym questions)
  {
    id: "ch1_q15",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'thrill':",
    options: ["A. excitement", "B. boredom", "C. pleasure", "D. adventure"],
    correct: 1,
    explanation: "Excitement, pleasure, and adventure are synonyms for thrill. Boredom is the antonym (sự nhàm chán).",
    explanationVn: "Giải thích: Excitement, pleasure, adventure là từ đồng nghĩa với thrill (phấn khích). Boredom (nhàm chán) là từ trái nghĩa."
  },
  {
    id: "ch1_q16",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'discipline':",
    options: ["A. control", "B. regulation", "C. restraint", "D. indulgence"],
    correct: 3,
    explanation: "Control, regulation, and restraint mean discipline. Indulgence means self-gratification (nuông chiều/buông thả).",
    explanationVn: "Giải thích: Control, regulation, restraint là từ đồng nghĩa với discipline (kỷ luật). Indulgence (nuông chiều) là từ trái nghĩa."
  },
  {
    id: "ch1_q17",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'longing':",
    options: ["A. desire", "B. dislike", "C. wish", "D. want"],
    correct: 1,
    explanation: "Desire, wish, and want mean longing. Dislike is the opposite (không thích).",
    explanationVn: "Giải thích: Desire, wish, want là từ đồng nghĩa với longing (khao khát). Dislike (không thích) là từ trái nghĩa."
  },
  {
    id: "ch1_q18",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'cheerful':",
    options: ["A. serious", "B. happy", "C. positive", "D. joyful"],
    correct: 0,
    explanation: "Happy, positive, and joyful mean cheerful. Serious means solemn or somber (trầm lắng/nghiêm túc).",
    explanationVn: "Giải thích: Happy, positive, joyful là từ đồng nghĩa với cheerful (vui vẻ). Serious (nghiêm túc/trầm lắng) là từ trái nghĩa."
  },
  {
    id: "ch1_q19",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'astonishing':",
    options: ["A. amazing", "B. predictable", "C. surprising", "D. shocking"],
    correct: 1,
    explanation: "Amazing, surprising, and shocking mean astonishing. Predictable means expected (đoán trước được).",
    explanationVn: "Giải thích: Amazing, surprising, shocking là từ đồng nghĩa với astonishing (sửng sốt). Predictable (đoán trước được) là từ trái nghĩa."
  },
  {
    id: "ch1_q20",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'assert':",
    options: ["A. state", "B. declare", "C. claim", "D. deny"],
    correct: 3,
    explanation: "State, declare, and claim mean to assert. Deny means to state something is NOT true (phủ nhận).",
    explanationVn: "Giải thích: State, declare, claim có nghĩa là khẳng định/tuyên bố. Deny (phủ nhận) là từ trái nghĩa."
  },
  {
    id: "ch1_q21",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'review':",
    options: ["A. evaluation", "B. assessment", "C. description", "D. proposal"],
    correct: 3,
    explanation: "Evaluation, assessment, and description are related to review. Proposal is a plan/suggestion (đề xuất).",
    explanationVn: "Giải thích: Evaluation, assessment, description liên quan đến việc đánh giá/khảo sát. Proposal (đề xuất) không phải từ đồng nghĩa."
  },
  {
    id: "ch1_q22",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'intervention':",
    options: ["A. interference", "B. inactivity", "C. treatment", "D. interruption"],
    correct: 1,
    explanation: "Interference, treatment, and interruption are related to intervention. Inactivity means doing nothing.",
    explanationVn: "Giải thích: Interference, treatment, interruption có nghĩa liên quan đến sự can thiệp. Inactivity (không hoạt động) là từ trái nghĩa."
  },
  {
    id: "ch1_q23",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'boost':",
    options: ["A. increase", "B. enhance", "C. improve", "D. limit"],
    correct: 3,
    explanation: "Increase, enhance, and improve mean to boost. Limit means to restrict (giới hạn).",
    explanationVn: "Giải thích: Increase, enhance, improve nghĩa là thúc đẩy/tăng cường. Limit (giới hạn) là từ trái nghĩa."
  },

  // --- CHAPTER 2 QUESTIONS (24 QUESTIONS) ---
  {
    id: "ch2_q1",
    chapter: "ch2",
    question: "Definition Match: 'deeply engaged, interested, or strongly affected by something'",
    options: ["A. absorbed", "B. gripped", "C. distracted", "D. tension"],
    correct: 1,
    explanation: "Gripped means deeply engaged, interested, or strongly affected.",
    explanationVn: "Giải thích: 'Gripped' nghĩa là bị cuốn hút, lôi cuốn sâu sắc."
  },
  {
    id: "ch2_q2",
    chapter: "ch2",
    question: "Definition Match: 'very interested in something, often to the point of not noticing other things happening around you'",
    options: ["A. absorbed", "B. trivial", "C. fictional", "D. drift"],
    correct: 0,
    explanation: "Absorbed means deeply engrossed so as not to notice surroundings.",
    explanationVn: "Giải thích: 'Absorbed' nghĩa là mải mê, say sưa không chú ý xung quanh."
  },
  {
    id: "ch2_q3",
    chapter: "ch2",
    question: "Definition Match: 'energetically and with strong feelings'",
    options: ["A. fiercely", "B. thus", "C. worthwhile", "D. intellectual"],
    correct: 0,
    explanation: "Fiercely means with strong feelings, intensity, or energy.",
    explanationVn: "Giải thích: 'Fiercely' nghĩa là dữ dội, mãnh liệt."
  },
  {
    id: "ch2_q4",
    chapter: "ch2",
    question: "Definition Match: 'to feel a continuous but not very sharp pain in a part of your body'",
    options: ["A. ache", "B. strive", "C. confront", "D. lung"],
    correct: 0,
    explanation: "Ache means to feel a continuous mild pain.",
    explanationVn: "Giải thích: 'Ache' nghĩa là đau nhức ê ẩm kéo dài."
  },
  {
    id: "ch2_q5",
    chapter: "ch2",
    question: "Definition Match: 'to suddenly increase greatly in number, amount, or degree'",
    options: ["A. explode", "B. overcome", "C. drift", "D. motivate"],
    correct: 0,
    explanation: "Explode in this context means to suddenly increase greatly.",
    explanationVn: "Giải thích: 'Explode' nghĩa là bùng nổ, tăng vọt đột ngột."
  },
  {
    id: "ch2_q6",
    chapter: "ch2",
    question: "Definition Match: 'able to successfully control a feeling or problem that would prevent you from achieving something'",
    options: ["A. overcome", "B. confront", "C. strive", "D. absorb"],
    correct: 0,
    explanation: "Overcome means to successfully deal with or control a problem.",
    explanationVn: "Giải thích: 'Overcome' nghĩa là vượt qua, khống chế khó khăn."
  },
  {
    id: "ch2_q7",
    chapter: "ch2",
    question: "Definition Match: 'needing serious thought in order to be understood'",
    options: ["A. intellectual", "B. trivial", "C. fictional", "D. peer"],
    correct: 0,
    explanation: "Intellectual means requiring serious thought or mental effort.",
    explanationVn: "Giải thích: 'Intellectual' nghĩa là thuộc trí tuệ, đòi hỏi suy nghĩ chuyên sâu."
  },
  {
    id: "ch2_q8",
    chapter: "ch2",
    question: "Definition Match: 'to move, change, or do something without any plan or purpose'",
    options: ["A. drift", "B. strive", "C. confront", "D. ache"],
    correct: 0,
    explanation: "Drift means to move or live without purpose or aim.",
    explanationVn: "Giải thích: 'Drift' nghĩa là trôi dạt, sống trôi nổi không mục đích."
  },
  {
    id: "ch2_q9",
    chapter: "ch2",
    question: "Definition Match: 'to deal with something very difficult or unpleasant in a brave and determined way'",
    options: ["A. confront", "B. overcome", "C. avoid", "D. distracted"],
    correct: 0,
    explanation: "Confront means to face and deal with a difficult situation bravely.",
    explanationVn: "Giải thích: 'Confront' nghĩa là đương đầu, đối mặt trực diện với khó khăn."
  },
  {
    id: "ch2_q10",
    chapter: "ch2",
    question: "Definition Match: 'a nervous feeling that makes it impossible to relax'",
    options: ["A. tension", "B. fulfillment", "C. motivation", "D. feedback"],
    correct: 0,
    explanation: "Tension is mental or emotional strain causing nervousness.",
    explanationVn: "Giải thích: 'Tension' nghĩa là sự căng thẳng, áp lực tâm lý."
  },
  {
    id: "ch2_q11",
    chapter: "ch2",
    question: "Definition Match: 'the feeling of being happy and satisfied with your life because you are doing interesting, useful, or important things'",
    options: ["A. fulfillment", "B. tension", "C. amusement", "D. medal"],
    correct: 0,
    explanation: "Fulfillment is a feeling of satisfaction from achieving worthwhile things.",
    explanationVn: "Giải thích: 'Fulfillment' nghĩa là cảm giác mãn nguyện, tự hào với cuộc sống."
  },
  {
    id: "ch2_q12",
    chapter: "ch2",
    question: "Definition Match: 'the reason why you want to do something or eagerness to achieve goals'",
    options: ["A. motivation", "B. feedback", "C. interval", "D. peer"],
    correct: 0,
    explanation: "Motivation is the driving force or reason behind actions.",
    explanationVn: "Giải thích: 'Motivation' nghĩa là động lực, lý do thúc đẩy hành động."
  },
  {
    id: "ch2_q13",
    chapter: "ch2",
    question: "Fill in the blank: Supporters of democracy believe that 'life, liberty, and the pursuit of happiness' are not only ________ (valuable, meaningful) but also basic human rights.",
    options: ["A. worthwhile", "B. trivial", "C. fictional", "D. distracted"],
    correct: 0,
    explanation: "Worthwhile means valuable or meaningful enough to pursue.",
    explanationVn: "Giải thích: 'Worthwhile' nghĩa là đáng giá, có ý nghĩa."
  },
  {
    id: "ch2_q14",
    chapter: "ch2",
    question: "Fill in the blank: Schoolchildren take standardized tests at preset ________ (period, time) to find out whether they are achieving expected levels.",
    options: ["A. intervals", "B. feedback", "C. medals", "D. peers"],
    correct: 0,
    explanation: "Intervals refers to preset periods or spaces of time between events.",
    explanationVn: "Giải thích: 'Intervals' nghĩa là khoảng thời gian định kỳ."
  },
  {
    id: "ch2_q15",
    chapter: "ch2",
    question: "Fill in the blank: Researchers found that teens who spend large amounts of time with ________ (friend, classmate) instead of doing challenging tasks fail to develop their abilities.",
    options: ["A. peers", "B. medals", "C. lungs", "D. amusements"],
    correct: 0,
    explanation: "Peers refers to classmates, friends, or equals.",
    explanationVn: "Giải thích: 'Peers' nghĩa là bạn đồng lứa, bạn học."
  },
  {
    id: "ch2_q16",
    chapter: "ch2",
    question: "Fill in the blank: When left-handed people throw a baseball with their right hand, they get negative internal ________ (response, advice) showing how uncomfortable it is.",
    options: ["A. feedback", "B. tension", "C. medal", "D. interval"],
    correct: 0,
    explanation: "Feedback refers to internal or external response/evaluation.",
    explanationVn: "Giải thích: 'Feedback' nghĩa là thông tin phản hồi."
  },
  {
    id: "ch2_q17",
    chapter: "ch2",
    question: "Fill in the blank: There are many activities we cannot avoid; ________ (therefore, so), no one can be in the flow all of the time.",
    options: ["A. thus", "B. trivial", "C. absorbed", "D. strive"],
    correct: 0,
    explanation: "Thus means therefore, so, or as a result.",
    explanationVn: "Giải thích: 'Thus' nghĩa là do đó, vì vậy."
  },
  {
    id: "ch2_q18",
    chapter: "ch2",
    question: "Fill in the blank: It can be easy to fill your day with ________ (not valuable, unimportant) tasks and finish realizing you haven't done much.",
    options: ["A. trivial", "B. intellectual", "C. worthwhile", "D. gripped"],
    correct: 0,
    explanation: "Trivial means unimportant or of small value.",
    explanationVn: "Giải thích: 'Trivial' nghĩa là tầm thường, không quan trọng."
  },
  {
    id: "ch2_q19",
    chapter: "ch2",
    question: "Fill in the blank: Finishers' ________ (award, prize) and event T-shirts provide extra motivation for runners to participate in road races.",
    options: ["A. medals", "B. lungs", "C. peers", "D. intervals"],
    correct: 0,
    explanation: "Medals are awards given to race finishers.",
    explanationVn: "Giải thích: 'Medals' nghĩa là huy chương thưởng."
  },
  {
    id: "ch2_q20",
    chapter: "ch2",
    question: "Fill in the blank: Everyday ________ (hobby, activity) such as flying kites and playing video games can bring about flow if properly challenging.",
    options: ["A. amusements", "B. tensions", "C. lungs", "D. feedbacks"],
    correct: 0,
    explanation: "Amusements refers to hobbies, activities, or forms of entertainment.",
    explanationVn: "Giải thích: 'Amusements' nghĩa là trò giải trí, hoạt động vui chơi."
  },
  {
    id: "ch2_q21",
    chapter: "ch2",
    question: "Fill in the blank: In the ________ (imaginary, made-up) world of Second Life, online players create and trade items with one another.",
    options: ["A. fictional", "B. empirical", "C. intellectual", "D. trivial"],
    correct: 0,
    explanation: "Fictional means imaginary or made-up.",
    explanationVn: "Giải thích: 'Fictional' nghĩa là hư cấu, tưởng tượng."
  },
  {
    id: "ch2_q22",
    chapter: "ch2",
    question: "Fill in the blank: There are no shortcuts to a full life; humans must continually ________ (make every effort, try hard) to explore and achieve.",
    options: ["A. strive", "B. drift", "C. ache", "D. explode"],
    correct: 0,
    explanation: "Strive means to make every effort or try hard.",
    explanationVn: "Giải thích: 'Strive' nghĩa là cố gắng hết sức, phấn đấu."
  },
  {
    id: "ch2_q23",
    chapter: "ch2",
    question: "Fill in the blank: Conditions like asthma affect the small tubes that carry air in and out of the ________ (chest, organ for breathing).",
    options: ["A. lungs", "B. medals", "C. peers", "D. intervals"],
    correct: 0,
    explanation: "Lungs are the chest organs responsible for breathing.",
    explanationVn: "Giải thích: 'Lungs' nghĩa là lá phổi (cơ quan hô hấp)."
  },
  {
    id: "ch2_q24",
    chapter: "ch2",
    question: "Fill in the blank: For someone who is easily ________ (unfocused, inattentive), achieving flow is more difficult than for concentrated people.",
    options: ["A. distracted", "B. absorbed", "C. gripped", "D. fulfilled"],
    correct: 0,
    explanation: "Distracted means unfocused or inattentive.",
    explanationVn: "Giải thích: 'Distracted' nghĩa là mất tập trung, xao nhãng."
  },

  // --- CHAPTER ACADEMIC (CORE AWL) ---
  { word: "Ubiquitous", pos: "adjective", ipa: "/juːˈbɪkwɪtəs/", level: "B2", vn: "Phổ biến ở khắp mọi nơi, có mặt khắp nơi", def: "Present, appearing, or found everywhere.", example: "Smartphones have become ubiquitous in modern daily life.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Ephemeral", pos: "adjective", ipa: "/ɪˈfemərəl/", level: "C1", vn: "Phù du, chóng khánh, ngắn ngủi", def: "Lasting for a very short time.", example: "Fashions are ephemeral, changing with every season.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Plausible", pos: "adjective", ipa: "/ˈplɔːzəbl/", level: "B2", vn: "Hợp lý, đáng tin cậy", def: "Seeming reasonable or probable.", example: "She offered a plausible explanation for her tardiness.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Meticulous", pos: "adjective", ipa: "/məˈtɪkjələs/", level: "C1", vn: "Tỉ mỉ, cẩn thận từng chi tiết", def: "Showing great attention to detail; very careful and precise.", example: "The researcher conducted a meticulous analysis of the data.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Pragmatic", pos: "adjective", ipa: "/præɡˈmætɪk/", level: "C1", vn: "Thực tế, thực dụng, trọng thực tiễn", def: "Dealing with things sensibly and realistically.", example: "We need a pragmatic solution rather than an idealist theory.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Exacerbate", pos: "verb", ipa: "/ɪɡˈzæsərbeɪt/", level: "C1", vn: "Làm trầm trọng thêm, làm xấu đi", def: "Make a problem or bad situation worse.", example: "Pollution will exacerbate respiratory illnesses in urban areas.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Resilient", pos: "adjective", ipa: "/rɪˈzɪliənt/", level: "B2", vn: "Kiên cường, có khả năng phục hồi nhanh", def: "Able to withstand or recover quickly from difficult conditions.", example: "Local communities proved resilient in the face of the economic crisis.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Ambiguous", pos: "adjective", ipa: "/æmˈbɪɡjuəs/", level: "B2", vn: "Mơ hồ, nhập nhằng, có nhiều cách hiểu", def: "Open to more than one interpretation; unclear.", example: "The instructions were ambiguous and led to confusion.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Disparate", pos: "adjective", ipa: "/ˈdɪspərət/", level: "C2", vn: "Khác biệt hoàn toàn, không thể so sánh", def: "Essentially different in kind; not allowing comparison.", example: "The team brought together experts from disparate fields.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Profound", pos: "adjective", ipa: "/prəˈfaʊnd/", level: "B2", vn: "Sâu sắc, thâm thúy, ảnh hưởng to lớn", def: "Very great or intense; possessing deep insight.", example: "The discovery had a profound impact on medical science.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Consolidate", pos: "verb", ipa: "/kənˈsɑːlɪdeɪt/", level: "C1", vn: "Củng cố, hợp nhất", def: "Make something physically stronger or more solid; combine.", example: "The company plans to consolidate its market position.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Capricious", pos: "adjective", ipa: "/kəˈprɪʃəs/", level: "C2", vn: "Thất thường, hay thay đổi vô cớ", def: "Given to sudden and unaccountable changes of mood or behavior.", example: "The weather in the mountains can be highly capricious.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Impeccable", pos: "adjective", ipa: "/ɪmˈpekəbl/", level: "C1", vn: "Hoàn hảo, không chê vào đâu được", def: "Faultless; in accordance with the highest standards.", example: "Her English pronunciation and grammar are impeccable.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Substantiate", pos: "verb", ipa: "/səbˈstænʃieɪt/", level: "C2", vn: "Chứng minh, đưa ra bằng chứng xác minh", def: "Provide evidence to support or prove the truth of.", example: "The study failed to substantiate the claims made by the manufacturer.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Scrutinize", pos: "verb", ipa: "/ˈskruːtənaɪz/", level: "C1", vn: "Xem xét kỹ lưỡng, soi xét cẩn thận", def: "Examine or inspect closely and thoroughly.", example: "Inspectors scrutinize every component before shipping.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Inevitably", pos: "adverb", ipa: "/ɪnˈevɪtəbli/", level: "B2", vn: "Tất yếu, không thể tránh khỏi", def: "Certain to happen; unavoidably.", example: "Technological advancements inevitably reshape the labor market.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Paramount", pos: "adjective", ipa: "/ˈpærəmaʊnt/", level: "C1", vn: "Tối quan trọng, có ý nghĩa hàng đầu", def: "More important than anything else; supreme.", example: "Safety must remain the paramount concern for engineers.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Fluctuate", pos: "verb", ipa: "/ˈflʌktʃueɪt/", level: "B2", vn: "Biến động, dao động thất thường", def: "Rise and fall irregularly in number or amount.", example: "Stock prices fluctuate depending on market demand.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Divergence", pos: "noun", ipa: "/daɪˈvɜːrdʒəns/", level: "C1", vn: "Sự phân kỳ, sự khác biệt ý kiến/hướng đi", def: "A difference in opinions, interests, or direction.", example: "There is a clear divergence between the two research reports.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Fostering", pos: "verb", ipa: "/ˈfɔːstərɪŋ/", level: "B2", vn: "Thúc đẩy, nuôi dưỡng, khuyến khích phát triển", def: "Encouraging the development or growth of something.", example: "The school aims at fostering creativity among young learners.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Intrinsic", pos: "adjective", ipa: "/ɪnˈtrɪnzɪk/", level: "C1", vn: "Bản chất, thuộc về bên trong, cốt lõi", def: "Belonging naturally; essential.", example: "Interest in learning is an intrinsic motivation for success.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Elucidate", pos: "verb", ipa: "/ɪˈluːsɪdeɪt/", level: "C2", vn: "Làm sáng tỏ, giải thích rõ ràng", def: "Make something clear; explain thoroughly.", example: "The professor gave examples to elucidate the complex theorem.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Superfluous", pos: "adjective", ipa: "/suːˈpɜːrfluəs/", level: "C2", vn: "Dư thừa, thừa thải, không cần thiết", def: "Unnecessary, especially through being more than enough.", example: "Avoid including superfluous details in your academic summary.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Cognitive", pos: "adjective", ipa: "/ˈkɑːɡnətɪv/", level: "B2", vn: "Thuộc về nhận thức, trí tuệ", def: "Relating to mental processes of perception and reasoning.", example: "Reading enhances cognitive abilities in young children.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" },
  { word: "Empirical", pos: "adjective", ipa: "/ɪmˈpɪrɪkl/", level: "C1", vn: "Dựa trên thực nghiệm, quan sát thực tế", def: "Based on observation or experiment rather than theory.", example: "Scientific laws require strong empirical evidence to be accepted.", chapter: "ch_academic", chapterTitle: "Chapter Academic (Core AWL)" }
];

const FOV_QUIZ_DATA = [
  // --- CHAPTER 1 QUESTIONS (ALL 23 EXERCISES) ---
  // Set 1 (7 questions)
  {
    id: "ch1_q1",
    chapter: "ch1",
    question: "Definition Match: 'occurring because of a natural tendency to behave in a particular way or a natural ability to know something that is not learned'",
    options: ["A. philosophy", "B. instinctively", "C. mystery", "D. manner"],
    correct: 1,
    explanation: "Instinctively means occurring because of a natural tendency or unlearned ability.",
    explanationVn: "Giải thích: 'Instinctively' (theo bản năng) xuất phát từ xu hướng tự nhiên không qua học tập."
  },
  {
    id: "ch1_q2",
    chapter: "ch1",
    question: "Definition Match: 'the study of the nature and meaning of existence, truth, good, and evil'",
    options: ["A. philosophy", "B. deed", "C. mystery", "D. manner"],
    correct: 0,
    explanation: "Philosophy is the study of existence, truth, good, and evil.",
    explanationVn: "Giải thích: 'Philosophy' (triết học) là việc nghiên cứu bản chất sự tồn tại, chân lý và đạo đức."
  },
  {
    id: "ch1_q3",
    chapter: "ch1",
    question: "Definition Match: 'something a person does, especially something that is very good or bad'",
    options: ["A. manner", "B. restaurant", "C. deed", "D. graft"],
    correct: 2,
    explanation: "Deed is something a person does, an action.",
    explanationVn: "Giải thích: 'Deed' (hành động, việc làm) là việc con người thực hiện (việc tốt hoặc xấu)."
  },
  {
    id: "ch1_q4",
    chapter: "ch1",
    question: "Definition Match: 'a place where you can buy and eat a meal'",
    options: ["A. mystery", "B. restaurant", "C. manner", "D. steak"],
    correct: 1,
    explanation: "Restaurant is a commercial place where meals are served.",
    explanationVn: "Giải thích: 'Restaurant' (nhà hàng) là nơi mua và ăn các bữa ăn."
  },
  {
    id: "ch1_q5",
    chapter: "ch1",
    question: "Definition Match: 'an event, situation, etc., that people do not understand or cannot explain'",
    options: ["A. mystery", "B. philosophy", "C. deed", "D. pace"],
    correct: 0,
    explanation: "Mystery is an unexplained or mysterious event/situation.",
    explanationVn: "Giải thích: 'Mystery' (bí ẩn) là sự kiện hay tình huống chưa thể giải thích được."
  },
  {
    id: "ch1_q6",
    chapter: "ch1",
    question: "Definition Match: 'the way in which something is done or happens'",
    options: ["A. graft", "B. manner", "C. pace", "D. esteem"],
    correct: 1,
    explanation: "Manner refers to the way or style in which something is done.",
    explanationVn: "Giải thích: 'Manner' (cách thức, phong thái) là phương thức việc gì đó được thực hiện."
  },
  {
    id: "ch1_q7",
    chapter: "ch1",
    question: "Definition Match: 'to add something very different to something, so that it becomes part of it'",
    options: ["A. inherit", "B. devote", "C. graft", "D. assert"],
    correct: 2,
    explanation: "Graft means to join or add something different onto something else.",
    explanationVn: "Giải thích: 'Graft' (ghép/gắn kết) là thêm một thành phần khác vào để trở thành một phần của nó."
  },

  // Set 2 (7 questions)
  {
    id: "ch1_q8",
    chapter: "ch1",
    question: "Definition Match: 'the speed at which something happens or is done'",
    options: ["A. pace", "B. therapy", "C. monk", "D. esteem"],
    correct: 0,
    explanation: "Pace refers to the rate of speed of progress or movement.",
    explanationVn: "Giải thích: 'Pace' (nhịp độ, tốc độ) là vận tốc diễn ra của một sự việc."
  },
  {
    id: "ch1_q9",
    chapter: "ch1",
    question: "Definition Match: 'a large, thick piece of good-quality red meat'",
    options: ["A. steak", "B. deed", "C. graft", "D. pace"],
    correct: 0,
    explanation: "Steak is a thick slice of high-quality red meat.",
    explanationVn: "Giải thích: 'Steak' (thịt bít tết) là miếng thịt đỏ dày chất lượng cao."
  },
  {
    id: "ch1_q10",
    chapter: "ch1",
    question: "Definition Match: 'to be born with the same character or physical appearance as your parents'",
    options: ["A. devote", "B. inherit", "C. assert", "D. review"],
    correct: 1,
    explanation: "Inherit means to receive genetic traits or physical features from parents.",
    explanationVn: "Giải thích: 'Inherit' (thừa hưởng, di truyền) là sinh ra mang đặc điểm của bố mẹ."
  },
  {
    id: "ch1_q11",
    chapter: "ch1",
    question: "Definition Match: 'a member of an all-male religious group that lives apart from other people'",
    options: ["A. monk", "B. therapy", "C. esteem", "D. deed"],
    correct: 0,
    explanation: "Monk is a member of a male religious community.",
    explanationVn: "Giải thích: 'Monk' (thầy tu, nhà sư) là nam tu sĩ sống trong cộng đồng tôn giáo riêng biệt."
  },
  {
    id: "ch1_q12",
    chapter: "ch1",
    question: "Definition Match: 'to use all or most of your time and effort in order to do something or help someone'",
    options: ["A. assert", "B. devote", "C. boost", "D. inherit"],
    correct: 1,
    explanation: "Devote means to dedicate time and energy to a cause or person.",
    explanationVn: "Giải thích: 'Devote' (cống hiến, dành trọn) là dùng toàn bộ thời gian/tâm trí cho mục tiêu."
  },
  {
    id: "ch1_q13",
    chapter: "ch1",
    question: "Definition Match: 'treatment that helps someone feel better or grow stronger'",
    options: ["A. therapy", "B. esteem", "C. mystery", "D. intervention"],
    correct: 0,
    explanation: "Therapy is healing treatment for physical or mental conditions.",
    explanationVn: "Giải thích: 'Therapy' (liệu pháp điều trị) là phương pháp giúp cải thiện sức khỏe."
  },
  {
    id: "ch1_q14",
    chapter: "ch1",
    question: "Definition Match: 'a feeling of respect for someone, or a good opinion of someone'",
    options: ["A. longing", "B. esteem", "C. discipline", "D. manner"],
    correct: 1,
    explanation: "Esteem is respect and high regard for someone.",
    explanationVn: "Giải thích: 'Esteem' (sự tôn trọng/kính trọng) là tình cảm nể trọng đối với ai đó."
  },

  // Part B (9 Odd-Word-Out Synonym questions)
  {
    id: "ch1_q15",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'thrill':",
    options: ["A. excitement", "B. boredom", "C. pleasure", "D. adventure"],
    correct: 1,
    explanation: "Excitement, pleasure, and adventure are synonyms for thrill. Boredom is the antonym (sự nhàm chán).",
    explanationVn: "Giải thích: Excitement, pleasure, adventure là từ đồng nghĩa với thrill (phấn khích). Boredom (nhàm chán) là từ trái nghĩa."
  },
  {
    id: "ch1_q16",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'discipline':",
    options: ["A. control", "B. regulation", "C. restraint", "D. indulgence"],
    correct: 3,
    explanation: "Control, regulation, and restraint mean discipline. Indulgence means self-gratification (nuông chiều/buông thả).",
    explanationVn: "Giải thích: Control, regulation, restraint là từ đồng nghĩa với discipline (kỷ luật). Indulgence (nuông chiều) là từ trái nghĩa."
  },
  {
    id: "ch1_q17",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'longing':",
    options: ["A. desire", "B. dislike", "C. wish", "D. want"],
    correct: 1,
    explanation: "Desire, wish, and want mean longing. Dislike is the opposite (không thích).",
    explanationVn: "Giải thích: Desire, wish, want là từ đồng nghĩa với longing (khao khát). Dislike (không thích) là từ trái nghĩa."
  },
  {
    id: "ch1_q18",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'cheerful':",
    options: ["A. serious", "B. happy", "C. positive", "D. joyful"],
    correct: 0,
    explanation: "Happy, positive, and joyful mean cheerful. Serious means solemn or somber (trầm lắng/nghiêm túc).",
    explanationVn: "Giải thích: Happy, positive, joyful là từ đồng nghĩa với cheerful (vui vẻ). Serious (nghiêm túc/trầm lắng) là từ trái nghĩa."
  },
  {
    id: "ch1_q19",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'astonishing':",
    options: ["A. amazing", "B. predictable", "C. surprising", "D. shocking"],
    correct: 1,
    explanation: "Amazing, surprising, and shocking mean astonishing. Predictable means expected (đoán trước được).",
    explanationVn: "Giải thích: Amazing, surprising, shocking là từ đồng nghĩa với astonishing (sửng sốt). Predictable (đoán trước được) là từ trái nghĩa."
  },
  {
    id: "ch1_q20",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'assert':",
    options: ["A. state", "B. declare", "C. claim", "D. deny"],
    correct: 3,
    explanation: "State, declare, and claim mean to assert. Deny means to state something is NOT true (phủ nhận).",
    explanationVn: "Giải thích: State, declare, claim có nghĩa là khẳng định/tuyên bố. Deny (phủ nhận) là từ trái nghĩa."
  },
  {
    id: "ch1_q21",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'review':",
    options: ["A. evaluation", "B. assessment", "C. description", "D. proposal"],
    correct: 3,
    explanation: "Evaluation, assessment, and description are related to review. Proposal is a plan/suggestion (đề xuất).",
    explanationVn: "Giải thích: Evaluation, assessment, description liên quan đến việc đánh giá/khảo sát. Proposal (đề xuất) không phải từ đồng nghĩa."
  },
  {
    id: "ch1_q22",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'intervention':",
    options: ["A. interference", "B. inactivity", "C. treatment", "D. interruption"],
    correct: 1,
    explanation: "Interference, treatment, and interruption are related to intervention. Inactivity means doing nothing.",
    explanationVn: "Giải thích: Interference, treatment, interruption có nghĩa liên quan đến sự can thiệp. Inactivity (không hoạt động) là từ trái nghĩa."
  },
  {
    id: "ch1_q23",
    chapter: "ch1",
    question: "Find the word or phrase that is NOT a synonym for 'boost':",
    options: ["A. increase", "B. enhance", "C. improve", "D. limit"],
    correct: 3,
    explanation: "Increase, enhance, and improve mean to boost. Limit means to restrict (giới hạn).",
    explanationVn: "Giải thích: Increase, enhance, improve nghĩa là thúc đẩy/tăng cường. Limit (giới hạn) là từ trái nghĩa."
  },

  // --- ACADEMIC CORE QUESTIONS ---
  {
    id: "fov_q1",
    chapter: "ch_academic",
    question: "The team's research paper was praised because every claim was ________ by solid empirical data gathered over five years.",
    options: ["A. substantiated", "B. exacerbated", "C. repudiated", "D. fluctuated"],
    correct: 0,
    explanation: "Substantiated means proved or supported with evidence.",
    explanationVn: "Giải thích: 'Substantiated' nghĩa là được chứng minh/xác minh bằng bằng chứng."
  },
  {
    id: "fov_q2",
    chapter: "ch_academic",
    question: "Because the wording of the contract was overly ________, both parties interpreted the payment terms differently.",
    options: ["A. pragmatic", "B. ambiguous", "C. impeccable", "D. ubiquitous"],
    correct: 1,
    explanation: "Ambiguous means unclear or open to multiple interpretations.",
    explanationVn: "Giải thích: 'Ambiguous' nghĩa là mơ hồ, nhập nhằng."
  },
  {
    id: "fov_q3",
    chapter: "ch_academic",
    question: "Attempting to cut municipal budgets during a recession will only ________ existing social inequality.",
    options: ["A. consolidate", "B. elucidate", "C. exacerbate", "D. scrutinize"],
    correct: 2,
    explanation: "Exacerbate means to make a bad situation or problem worse.",
    explanationVn: "Giải thích: 'Exacerbate' nghĩa là làm trầm trọng thêm."
  },
  {
    id: "fov_q4",
    chapter: "ch_academic",
    question: "Rather than getting lost in abstract philosophy, the manager adopted a ________ approach to solve workplace disputes.",
    options: ["A. pragmatic", "B. superfluous", "C. ephemeral", "D. capricious"],
    correct: 0,
    explanation: "Pragmatic means practical and realistic rather than theoretical.",
    explanationVn: "Giải thích: 'Pragmatic' nghĩa là thực tế/thực dụng."
  },
  {
    id: "fov_q5",
    chapter: "ch_academic",
    question: "Ensure your final thesis statement is concise and remove any ________ sentences that do not support your main argument.",
    options: ["A. paramount", "B. resilient", "C. superfluous", "D. meticulous"],
    correct: 2,
    explanation: "Superfluous means unnecessary or extra beyond what is needed.",
    explanationVn: "Giải thích: 'Superfluous' nghĩa là dư thừa, không cần thiết."
  }
];

let fovFcIndex = 0;
let fovUserQuizAnswers = {};

function getFovFilteredData() {
  if (currentFovChapter === "all") return FOV_VOCABULARY_DATA;
  return FOV_VOCABULARY_DATA.filter(item => item.chapter === currentFovChapter);
}

function getFovFilteredQuizData() {
  if (currentFovChapter === "all") return FOV_QUIZ_DATA;
  return FOV_QUIZ_DATA.filter(item => item.chapter === currentFovChapter);
}

function initFovModule() {
  const chapterChips = document.querySelectorAll(".fov-chapter-chip");
  chapterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      chapterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFovChapter = chip.getAttribute("data-chapter") || "all";
      initFovFlashcards();
      initFovQuiz();
      initFovBank();
    });
  });

  initFovFlashcards();
  initFovQuiz();
  initFovBank();
}

// Open specific sub-tab inside Focus on Vocabulary module
function openFovSubTab(subTabId) {
  const container = document.getElementById("focus-on-vocabulary");
  if (!container) return;
  const subTabs = container.querySelectorAll(".sub-tab");
  const subContents = container.querySelectorAll(".sub-tab-content");

  subTabs.forEach(t => t.classList.remove("active"));
  subContents.forEach(c => c.classList.remove("active"));

  const targetTabBtn = container.querySelector(`.sub-tab[data-subtab="${subTabId}"]`);
  const targetContent = container.querySelector("#" + subTabId);

  if (targetTabBtn) targetTabBtn.classList.add("active");
  if (targetContent) targetContent.classList.add("active");
}

// 1. FOV Flashcards Logic
function initFovFlashcards() {
  fovFcIndex = 0;
  updateFovFlashcardUI();
}

function toggleFovFlashcardFlip() {
  const card = document.getElementById("fov-main-flashcard");
  if (card) card.classList.toggle("flipped");
}

function nextFovFlashcard() {
  const deck = getFovFilteredData();
  if (deck.length === 0) return;
  fovFcIndex = (fovFcIndex + 1) % deck.length;
  resetAndShowFovFlashcard();
}

function prevFovFlashcard() {
  const deck = getFovFilteredData();
  if (deck.length === 0) return;
  fovFcIndex = (fovFcIndex - 1 + deck.length) % deck.length;
  resetAndShowFovFlashcard();
}

function resetAndShowFovFlashcard() {
  const card = document.getElementById("fov-main-flashcard");
  if (card) card.classList.remove("flipped");
  setTimeout(() => {
    updateFovFlashcardUI();
  }, 150);
}

function updateFovFlashcardUI() {
  const deck = getFovFilteredData();
  if (deck.length === 0) return;
  if (fovFcIndex >= deck.length) fovFcIndex = 0;

  const item = deck[fovFcIndex];

  const badgeEl = document.getElementById("fov-fc-badge");
  const counterEl = document.getElementById("fov-fc-counter");
  const termEl = document.getElementById("fov-fc-term");
  const ipaEl = document.getElementById("fov-fc-ipa");
  const posEl = document.getElementById("fov-fc-pos");
  const vnEl = document.getElementById("fov-fc-vn");
  const defEl = document.getElementById("fov-fc-def");
  const exEl = document.getElementById("fov-fc-ex");

  if (badgeEl) badgeEl.textContent = `${item.chapterTitle || 'VOCABULARY'} • CEFR ${item.level}`;
  if (counterEl) counterEl.textContent = `Card ${fovFcIndex + 1} of ${deck.length}`;
  if (termEl) termEl.textContent = item.word;
  if (ipaEl) ipaEl.textContent = item.ipa || '';
  if (posEl) posEl.textContent = item.pos || 'vocabulary';
  if (vnEl) vnEl.textContent = `🇻🇳 ${item.vn}`;
  if (defEl) defEl.textContent = item.def;
  if (exEl) exEl.textContent = item.example ? (`• ${item.example}`) : '';
}

function speakFovTerm() {
  const deck = getFovFilteredData();
  if (deck.length === 0) return;
  const item = deck[fovFcIndex];
  if (typeof window.speechSynthesis !== 'undefined') {
    const utter = new SpeechSynthesisUtterance(item.word);
    utter.lang = 'en-US';
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }
}

// 2. FOV Practice Quiz Logic
function initFovQuiz() {
  fovUserQuizAnswers = {};
  renderFovQuiz();
}

function resetFovQuiz() {
  fovUserQuizAnswers = {};
  renderFovQuiz();
}

function renderFovQuiz() {
  const container = document.getElementById("fov-quiz-container");
  const scoreDisplay = document.getElementById("fov-score-display");
  if (!container) return;

  const quizPool = getFovFilteredQuizData();
  container.innerHTML = "";
  let correctCount = 0;
  const total = quizPool.length;

  quizPool.forEach((q, qIndex) => {
    const isAnswered = fovUserQuizAnswers.hasOwnProperty(q.id);
    const selectedOpt = fovUserQuizAnswers[q.id];
    if (isAnswered && selectedOpt === q.correct) {
      correctCount++;
    }

    const card = document.createElement("div");
    card.className = "quiz-passage-card";
    card.style.marginBottom = "1.5rem";

    let optionsHTML = q.options.map((opt, oIndex) => {
      let optClass = "quiz-option";
      if (isAnswered) {
        if (oIndex === q.correct) optClass += " correct";
        else if (oIndex === selectedOpt) optClass += " incorrect";
      }
      return `<button class="${optClass}" onclick="selectFovOption('${q.id}', ${oIndex})" ${isAnswered ? 'disabled' : ''}>${opt}</button>`;
    }).join("");

    let explanationHTML = "";
    if (isAnswered) {
      explanationHTML = `
        <div class="explanation-box active">
          <div class="explanation-header">💡 Detailed Explanation & Context Evidence</div>
          <p style="margin-bottom: 0.5rem;"><strong>English:</strong> ${q.explanation}</p>
          <p><strong>Tiếng Việt:</strong> ${q.explanationVn}</p>
        </div>
      `;
    }

    card.innerHTML = `
      <div style="font-weight: 800; color: var(--brand-teal); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.85rem;">Question ${qIndex + 1} of ${total}</div>
      <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; line-height: 1.5;">${q.question}</div>
      <div class="options-grid">${optionsHTML}</div>
      ${explanationHTML}
    `;

    container.appendChild(card);
  });

  if (scoreDisplay) {
    scoreDisplay.textContent = `${correctCount} / ${total} Đúng`;
  }
}

function selectFovOption(questionId, optionIndex) {
  fovUserQuizAnswers[questionId] = optionIndex;
  renderFovQuiz();
}

// 3. FOV Academic Vocab Explorer Logic
function initFovBank() {
  const searchInput = document.getElementById("fov-bank-search");
  const grid = document.getElementById("fov-bank-grid");
  const chips = document.querySelectorAll(".fov-level-chip");
  if (!grid) return;

  let currentLevelFilter = "All";

  function renderFovBankGrid() {
    grid.innerHTML = "";
    const filterText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const pool = getFovFilteredData();

    const filtered = pool.filter(item => {
      const matchText = item.word.toLowerCase().includes(filterText) ||
                        item.vn.toLowerCase().includes(filterText) ||
                        item.def.toLowerCase().includes(filterText);
      const matchLevel = currentLevelFilter === "All" || item.level === currentLevelFilter;
      return matchText && matchLevel;
    });

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="vocab-word">${item.word}</div>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <span class="badge-tag" style="font-size:0.7rem; background:#e0f2fe; color:#0369a1;">${item.chapterTitle || 'Chapter'}</span>
            <span class="badge-tag" style="font-size:0.7rem;">CEFR ${item.level}</span>
          </div>
        </div>
        <div class="vocab-pos">${item.pos} ${item.ipa ? '• ' + item.ipa : ''}</div>
        <div class="vocab-vn">🇻🇳 ${item.vn}</div>
        <div class="vocab-def" style="margin-top:0.5rem; color:var(--text-secondary);">${item.def}</div>
        ${item.example ? `<div class="vocab-def" style="margin-top:0.5rem; font-style:italic;">• ${item.example}</div>` : ''}
      `;
      grid.appendChild(card);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">Không tìm thấy từ vựng phù hợp với từ khóa, Chapter hoặc cấp độ đã chọn.</div>`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", renderFovBankGrid);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentLevelFilter = chip.getAttribute("data-fovlevel") || "All";
      renderFovBankGrid();
    });
  });

  renderFovBankGrid();
}





