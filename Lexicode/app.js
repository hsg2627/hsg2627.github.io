// ========================================================
// Monsterest Inn & Guild — Lexicode Vocabulary Engine
// Extracted from index.html for performance & maintainability
// ========================================================

// Embedded Complete 108 Vocabulary Dataset
const RAW_VOCAB = [
  {
    "id": 1,
    "term": "breadwinner",
    "clean_word": "breadwinner",
    "type": "n",
    "desc": "n a person who earns money to support their family",
    "example": "In many modern households, both parents are equal --.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 2,
    "term": "household chore",
    "clean_word": "household chore",
    "type": "n",
    "desc": "n routine task done around the house such as cleaning or washing",
    "example": "Sharing -- equally builds mutual respect among family members.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 3,
    "term": "carbon footprint",
    "clean_word": "carbon footprint",
    "type": "n",
    "desc": "n amount of greenhouse gases produced by human activities",
    "example": "Riding bicycles instead of motorbikes reduces your daily --.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 4,
    "term": "eco-friendly",
    "clean_word": "eco-friendly",
    "type": "adj",
    "desc": "adj not harming the environment",
    "example": "We should use -- cloth bags instead of single-use plastic.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 5,
    "term": "sustainable",
    "clean_word": "sustainable",
    "type": "adj",
    "desc": "adj causing little or no damage to the environment and able to continue for a long time",
    "example": "Solar and wind energy provide a -- source of clean electricity.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 6,
    "term": "decompose",
    "clean_word": "decompose",
    "type": "v",
    "desc": "v to break down into basic parts naturally through bacterial action",
    "example": "Organic food waste can -- quickly into rich garden fertilizer.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 7,
    "term": "appliance",
    "clean_word": "appliance",
    "type": "n",
    "desc": "n a machine or device designed to do a particular domestic job",
    "example": "Always switch off electrical -- when they are not in active use.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 8,
    "term": "emission",
    "clean_word": "emission",
    "type": "n",
    "desc": "n the production and discharge of something, especially gas or radiation",
    "example": "The government aims to cut carbon dioxide -- significantly by 2030.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 9,
    "term": "gratitude",
    "clean_word": "gratitude",
    "type": "n",
    "desc": "n the feeling of being grateful and wanting to express thanks",
    "example": "Children expressed deep -- to their parents on Thanksgiving day.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 10,
    "term": "nurture",
    "clean_word": "nurture",
    "type": "v",
    "desc": "v to care for and protect someone or something while they are growing",
    "example": "Parents work hard to -- a loving and supportive family environment.",
    "category": "Wing 1: Family Life & Green Living",
    "monster": "🍄 Sprout Sprite"
  },
  {
    "id": 11,
    "term": "volunteer",
    "clean_word": "volunteer",
    "type": "v / n",
    "desc": "v / n to offer to do something without being paid",
    "example": "High school students often -- to tutor children at local orphanages.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 12,
    "term": "charity",
    "clean_word": "charity",
    "type": "n",
    "desc": "n an organization set up to provide help and raise money for those in need",
    "example": "All ticket sales from the charity concert went to building rural schools.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 13,
    "term": "non-profit",
    "clean_word": "non-profit",
    "type": "adj",
    "desc": "adj not established for the purpose of making a profit",
    "example": "The -- youth club organizes free English classes every weekend.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 14,
    "term": "remote area",
    "clean_word": "remote area",
    "type": "n",
    "desc": "n a place situated far from main population centers and difficult to reach",
    "example": "Medical volunteers traveled to -- to vaccinate ethnic minority children.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 15,
    "term": "donate",
    "clean_word": "donate",
    "type": "v",
    "desc": "v to give money, food, or clothes to help a person or organization",
    "example": "Neighbours gathered to -- warm clothes and books for flood victims.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 16,
    "term": "instrument",
    "clean_word": "instrument",
    "type": "n",
    "desc": "n an object used for producing musical sounds",
    "example": "The traditional Dan Bau is a unique Vietnamese stringed --.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 17,
    "term": "audience",
    "clean_word": "audience",
    "type": "n",
    "desc": "n the assembled spectators or listeners at a public event",
    "example": "The energetic performance captivated the entire -- from start to finish.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 18,
    "term": "passionate",
    "clean_word": "passionate",
    "type": "adj",
    "desc": "adj having or showing strong feelings or enthusiasm",
    "example": "Young singers are extremely -- about preserving traditional folk music.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 19,
    "term": "melody",
    "clean_word": "melody",
    "type": "n",
    "desc": "n a sequence of single notes that is musically satisfying; a tune",
    "example": "The gentle acoustic -- brought back warm memories of childhood.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 20,
    "term": "dedication",
    "clean_word": "dedication",
    "type": "n",
    "desc": "n the quality of being committed to a task or purpose with devotion",
    "example": "Community leaders praised the -- of teachers working in mountainous areas.",
    "category": "Wing 2: Community & Music",
    "monster": "🛡️ Stone Golem"
  },
  {
    "id": 21,
    "term": "artificial intelligence",
    "clean_word": "artificial intelligence",
    "type": "n",
    "desc": "n the simulation of human intelligence processes by computer systems",
    "example": "Modern learning apps use -- to recommend personalized exercises.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 22,
    "term": "interactive",
    "clean_word": "interactive",
    "type": "adj",
    "desc": "adj allowing a two-way flow of information between a computer and a user",
    "example": "Students engage enthusiastically with -- grammar quizzes on the portal.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 23,
    "term": "processor",
    "clean_word": "processor",
    "type": "n",
    "desc": "n the central component of a computer that performs electronic calculations",
    "example": "The new laptop model features a powerful -- that runs software smoothly.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 24,
    "term": "software",
    "clean_word": "software",
    "type": "n",
    "desc": "n the programs and other operating information used by a computer",
    "example": "Educational -- makes revising vocabulary much more engaging.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 25,
    "term": "portable",
    "clean_word": "portable",
    "type": "adj",
    "desc": "adj easily carried or moved because of being light and small",
    "example": "A tablet is a -- digital device suitable for studying while traveling.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 26,
    "term": "gadget",
    "clean_word": "gadget",
    "type": "n",
    "desc": "n a small mechanical or electronic device with a practical use",
    "example": "Smartphones have become an indispensable everyday -- for teenagers.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 27,
    "term": "revolutionary",
    "clean_word": "revolutionary",
    "type": "adj",
    "desc": "adj involving or causing a complete or dramatic change",
    "example": "The introduction of online learning was a -- step in education.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 28,
    "term": "educational",
    "clean_word": "educational",
    "type": "adj",
    "desc": "adj providing useful knowledge or relating to schooling",
    "example": "Teachers select high-quality -- podcasts for English listening practice.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 29,
    "term": "access",
    "clean_word": "access",
    "type": "n / v",
    "desc": "n / v the means or opportunity to approach or use something",
    "example": "High-speed internet gives learners instant -- to global digital libraries.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 30,
    "term": "stimulate",
    "clean_word": "stimulate",
    "type": "v",
    "desc": "v to encourage interest or activity in something",
    "example": "Gamified learning activities help -- curiosity and creative thinking.",
    "category": "Wing 3: Inventions & Digital Learning",
    "monster": "🔮 Shadow Familiar"
  },
  {
    "id": 31,
    "term": "equality",
    "clean_word": "equality",
    "type": "n",
    "desc": "n the state of being equal, especially in status, rights, and opportunities",
    "example": "Gender -- ensures equal pay and promotion chances for men and women.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 32,
    "term": "discrimination",
    "clean_word": "discrimination",
    "type": "n",
    "desc": "n the unjust or prejudicial treatment of different categories of people",
    "example": "Laws are strictly enforced to eliminate racial and gender -- at workplaces.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 33,
    "term": "wage",
    "clean_word": "wage",
    "type": "n",
    "desc": "n a fixed regular payment earned for work or services",
    "example": "Female workers should receive the same minimum -- as their male colleagues.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 34,
    "term": "promote",
    "clean_word": "promote",
    "type": "v",
    "desc": "v to support or encourage the progress and growth of something",
    "example": "International campaigns -- girls' education in developing nations.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 35,
    "term": "international organization",
    "clean_word": "international organization",
    "type": "n",
    "desc": "n an entity established by treaty or agreement with a global scope",
    "example": "UNICEF is a prominent -- dedicated to child welfare and development.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 36,
    "term": "partnership",
    "clean_word": "partnership",
    "type": "n",
    "desc": "n an association of two or more entities working toward shared goals",
    "example": "Vietnam has established strategic -- with numerous countries worldwide.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 37,
    "term": "cooperation",
    "clean_word": "cooperation",
    "type": "n",
    "desc": "n the process of working together to the same end",
    "example": "Regional -- among ASEAN member states fosters economic stability.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 38,
    "term": "represent",
    "clean_word": "represent",
    "type": "v",
    "desc": "v to speak or act on behalf of someone or a community",
    "example": "Youth delegates were chosen to -- their country at the ASEAN summit.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 39,
    "term": "eliminate",
    "clean_word": "eliminate",
    "type": "v",
    "desc": "v to completely remove or get rid of something undesirable",
    "example": "Global programs strive to -- poverty and illiteracy in rural communities.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 40,
    "term": "empower",
    "clean_word": "empower",
    "type": "v",
    "desc": "v to give someone the authority or confidence to make decisions",
    "example": "Digital skills training helps -- young women to pursue tech careers.",
    "category": "Wing 4: Gender Equality & Global Partners",
    "monster": "🦊 Moonlit Kitsune"
  },
  {
    "id": 41,
    "term": "biodiversity",
    "clean_word": "biodiversity",
    "type": "n",
    "desc": "n the variety of plant and animal life in a particular habitat or ecosystem",
    "example": "Tropical rainforests in Vietnam harbor extraordinary levels of --.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 42,
    "term": "habitat",
    "clean_word": "habitat",
    "type": "n",
    "desc": "n the natural home or environment of an animal, plant, or organism",
    "example": "Deforestation destroys the natural -- of rare and endangered species.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 43,
    "term": "conservation",
    "clean_word": "conservation",
    "type": "n",
    "desc": "n the protection of plants, animals, and natural resources",
    "example": "Wildlife -- parks play a vital role in preventing species extinction.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 44,
    "term": "ecotourism",
    "clean_word": "ecotourism",
    "type": "n",
    "desc": "n responsible travel to natural areas that conserves the environment",
    "example": "Visiting Cat Tien National Park is a popular form of sustainable --.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 45,
    "term": "flora and fauna",
    "clean_word": "flora and fauna",
    "type": "n",
    "desc": "n the plants (flora) and animals (fauna) of a particular region",
    "example": "The island sanctuary is renowned for its diverse native --.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 46,
    "term": "endangered species",
    "clean_word": "endangered species",
    "type": "n",
    "desc": "n a species of animal or plant that is seriously at risk of extinction",
    "example": "The Saola is one of the most critically -- found in Southeast Asia.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 47,
    "term": "preserve",
    "clean_word": "preserve",
    "type": "v",
    "desc": "v to maintain something in its original or existing state",
    "example": "Strict regulations are implemented to -- the ancient mangrove forests.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 48,
    "term": "destination",
    "clean_word": "destination",
    "type": "n",
    "desc": "n the place to which someone or something is going or being sent",
    "example": "Phong Nha - Ke Bang is a famous ecotourism -- for adventure travelers.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 49,
    "term": "sustainable tourism",
    "clean_word": "sustainable tourism",
    "type": "n",
    "desc": "n tourism that respects local people, travelers, cultural heritage, and environment",
    "example": "Promoting -- ensures that local communities directly benefit from visitors.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
  },
  {
    "id": 50,
    "term": "ecosystem",
    "clean_word": "ecosystem",
    "type": "n",
    "desc": "n a biological community of interacting organisms and their physical environment",
    "example": "Coral reefs constitute a fragile marine -- sensitive to water warming.",
    "category": "Wing 5: Environment & Ecotourism",
    "monster": "👑 Elder Dragonling"
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
            "title": "Wing 1: Family Life & Green Living",
            "desc": "10 Key vocabulary terms on family responsibilities, household chores, and eco-friendly lifestyles (Units 1 & 2).",
            "monster": "🍄 Sprout Sprite",
            "range": [
                  1,
                  10
            ]
      },
      {
            "id": 1,
            "title": "Wing 2: Community & Music",
            "desc": "10 Key vocabulary terms on volunteer dedication, charity, instruments, and music appreciation (Units 3 & 4).",
            "monster": "🛡️ Stone Golem",
            "range": [
                  11,
                  20
            ]
      },
      {
            "id": 2,
            "title": "Wing 3: Inventions & Digital Learning",
            "desc": "10 Key vocabulary terms on AI technology, computer hardware, digital tools, and modern education (Units 5 & 8).",
            "monster": "🔮 Shadow Familiar",
            "range": [
                  21,
                  30
            ]
      },
      {
            "id": 3,
            "title": "Wing 4: Gender Equality & Global Partners",
            "desc": "10 Key vocabulary terms on equal rights, eliminating bias, ASEAN, and international cooperation (Units 6 & 7).",
            "monster": "🦊 Moonlit Kitsune",
            "range": [
                  31,
                  40
            ]
      },
      {
            "id": 4,
            "title": "Wing 5: Environment & Ecotourism",
            "desc": "10 Key vocabulary terms on biodiversity, wildlife conservation, habitats, and sustainable tourism (Units 9 & 10).",
            "monster": "👑 Elder Dragonling",
            "range": [
                  41,
                  50
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
