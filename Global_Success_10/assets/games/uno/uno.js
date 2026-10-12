/* =========================================================================
   UNO GAME - GAME LOGIC (Global Success 10 · English Insiders)
   Mechanics:
   - 4 Teams take turns choosing from 15 question cards.
   - Correct answer -> Reward Stage.
   - Push-your-luck: Take points OR Draw again for more points.
   - Bomb card (💣) wipes all turn points and ends turn.
   - Rare card: Safe 5 pts OR Gamble (lose all pts or swap score with another team).
   - Incorrect answer -> Lose turn.
   - Most points wins!
   ========================================================================= */

(function () {
  'use strict';

  // --- QUESTIONS DATA: 19 HIGHLIGHT SONGS FOR "NAME THAT SONG" ---
  const QUESTIONS = [
    { id: 1, title: "Dai Dai", artist: "Shakira & Burna Boy", vid: "fcnDmrtj6Sk", start: 48 },
    { id: 2, title: "Baby", artist: "Justin Bieber", vid: "GqWYJT-iMTw", start: 45 },
    { id: 3, title: "What Makes You Beautiful", artist: "One Direction", vid: "d57qSDCxVA4", start: 46 },
    { id: 4, title: "APT.", artist: "ROSÉ & Bruno Mars", vid: "DiTd771WumE", start: 29 },
    { id: 5, title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", vid: "nugmZqIP0uk", start: 27 },
    { id: 6, title: "We Don't Talk Anymore", artist: "Charlie Puth", vid: "ffqliB42Nh4", start: 47 },
    { id: 7, title: "I Do", artist: "911", vid: "x17ZnrQHI90", start: 49 },
    { id: 8, title: "Nothing's Going to Change My Love For You", artist: "Westlife", vid: "S6AI2qlVjtY", start: 53 },
    { id: 9, title: "Tan Biến", artist: "M4U", vid: "rNW6MLNyMwk", start: 76 },
    { id: 10, title: "Mưa Trên Phố Huế", artist: "Dân ca xứ Huế", vid: "48XgscozT-A", start: 72 },
    { id: 11, title: "Chiếc Khăn Piêu", artist: "Tùng Dương ft. Đinh Nhật Minh Sáo Trúc", vid: "nIGb7Z_NwBM", start: 59 },
    { id: 12, title: "Trống Cơm", artist: "Cường Seven, NSND Tự Long, SOOBIN", vid: "xJN73LSnito", start: 43 },
    { id: 13, title: "Em Tôi", artist: "Liên Minh Kỳ Tích · Anh Trai Vượt Ngàn Chông Gai", vid: "RKd3P1R2G0Q", start: 125 },
    { id: 14, title: "Try Everything", artist: "Shakira · Zootopia OST", vid: "c6rP-YP4c5I", start: 48 },
    { id: 15, title: "Wavin' Flag", artist: "K'NAAN · World Cup Anthem", vid: "WTJSt4wP2ME", start: 34 },
    { id: 16, title: "Flashlight", artist: "Jessie J · Pitch Perfect 2 OST", vid: "pJxuD9fiibM", start: 52 },
    { id: 17, title: "Sugar", artist: "Maroon 5", vid: "wSOc5jmvF-k", start: 44 },
    { id: 18, title: "Beauty And A Beat", artist: "Justin Bieber ft. Nicki Minaj", vid: "Ys7-6_t7OEQ", start: 78 },
    { id: 19, title: "See Tình", artist: "Hoàng Thùy Linh · Cukak Remix", vid: "omh8RAoJ47M", start: 42 }
  ];

  // --- GAME STATE ---
  const state = {
    teams: [
      { id: 1, name: "Team 1", score: 0 },
      { id: 2, name: "Team 2", score: 0 },
      { id: 3, name: "Team 3", score: 0 },
      { id: 4, name: "Team 4", score: 0 }
    ],
    currentTeamIdx: 0,
    answeredQuestions: new Set(),
    activeQuestion: null,
    turnScore: 0,
    isCardFlipped: false,
    soundMuted: false
  };

  // --- AUDIO SOUND EFFECTS ---
  const sounds = {
    flip: new Audio('media/media5.mp3'),
    bomb: new Audio('media/media4.mp3'),
    cheer: new Audio('media/media1.mp3'),
    click: new Audio('media/media6.mp3')
  };

  function playSound(type) {
    if (state.soundMuted) return;
    try {
      const s = sounds[type];
      if (s) {
        s.currentTime = 0;
        s.play().catch(() => {});
      }
    } catch (_) {}
  }

  // --- DOM ELEMENTS ---
  const elements = {
    teamCards: [
      document.getElementById('team-card-1'),
      document.getElementById('team-card-2'),
      document.getElementById('team-card-3'),
      document.getElementById('team-card-4')
    ],
    teamScores: [
      document.getElementById('score-1'),
      document.getElementById('score-2'),
      document.getElementById('score-3'),
      document.getElementById('score-4')
    ],
    teamNames: [
      document.getElementById('name-1'),
      document.getElementById('name-2'),
      document.getElementById('name-3'),
      document.getElementById('name-4')
    ],
    statusBar: document.getElementById('status-bar'),
    cardsGrid: document.getElementById('cards-grid'),
    
    // Question Modal (Name That Song)
    questionModal: document.getElementById('question-modal'),
    qModalTitle: document.getElementById('q-modal-title'),
    playerTrackId: document.getElementById('player-track-id'),
    mysteryMask: document.getElementById('mystery-mask'),
    vinylDisc: document.getElementById('vinyl-disc'),
    maskStatus: document.getElementById('mask-status'),
    eqBars: document.getElementById('eq-bars'),
    btnQPlaySong: document.getElementById('btn-q-play-song'),
    qPlayIcon: document.getElementById('q-play-icon'),
    qPlayTxt: document.getElementById('q-play-txt'),
    btnQReplaySong: document.getElementById('btn-q-replay-song'),
    btnQExtLink: document.getElementById('btn-q-ext-link'),
    unoYtAudio: document.getElementById('uno-yt-audio'),
    answerBox: document.getElementById('answer-box'),
    answerText: document.getElementById('answer-text'),
    answerArtist: document.getElementById('answer-artist'),
    answerYtLink: document.getElementById('answer-yt-link'),
    btnRevealAnswer: document.getElementById('btn-reveal-answer'),
    btnCorrect: document.getElementById('btn-correct'),
    btnWrong: document.getElementById('btn-wrong'),
    btnCloseQ: document.getElementById('btn-close-q'),
    
    // Reward Modal
    rewardModal: document.getElementById('reward-modal'),
    rewardTeamTitle: document.getElementById('reward-team-title'),
    rewardScoreText: document.getElementById('reward-score-text'),
    unoCard3D: document.getElementById('uno-card-3d'),
    cardFront: document.getElementById('card-front'),
    cardValBig: document.getElementById('card-val-big'),
    cardCornerTL: document.getElementById('card-corner-tl'),
    cardCornerBR: document.getElementById('card-corner-br'),
    cardDesc: document.getElementById('card-desc'),
    btnBank: document.getElementById('btn-bank'),
    btnDrawAgain: document.getElementById('btn-draw-again'),
    btnDoneReward: document.getElementById('btn-done-reward'),
    
    // Rare Modal
    rareModal: document.getElementById('rare-modal'),
    btnRareSafe: document.getElementById('btn-rare-safe'),
    btnRareGamble: document.getElementById('btn-rare-gamble'),
    
    // Swap Modal
    swapModal: document.getElementById('swap-modal'),
    swapTeamsGrid: document.getElementById('swap-teams-grid'),
    
    // Victory Modal
    victoryModal: document.getElementById('victory-modal'),
    winnerName: document.getElementById('winner-name'),
    podiumGrid: document.getElementById('podium-grid'),
    btnRestartGame: document.getElementById('btn-restart-game'),
    
    // Header controls
    btnMute: document.getElementById('btn-mute'),
    btnFullscreen: document.getElementById('btn-fullscreen'),
    btnLeaderboard: document.getElementById('btn-leaderboard')
  };

  // --- INITIALIZATION ---
  function init() {
    renderScoreboard();
    renderCardsGrid();
    bindEvents();
    updateTurnIndicator();
  }

  // --- SCOREBOARD RENDERING ---
  function renderScoreboard() {
    state.teams.forEach((team, idx) => {
      elements.teamScores[idx].textContent = team.score;
      elements.teamNames[idx].textContent = team.name;
    });
  }

  function updateTurnIndicator() {
    const activeTeam = state.teams[state.currentTeamIdx];
    elements.teamCards.forEach((card, idx) => {
      if (idx === state.currentTeamIdx) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    elements.statusBar.innerHTML = `🎯 Lượt của: <span class="highlight" style="color:${getTeamColor(state.currentTeamIdx)}">${activeTeam.name}</span> — Hãy chọn một số trên bảng!`;
  }

  function getTeamColor(idx) {
    const colors = ['#FF6B6B', '#4CC9F0', '#52B788', '#F7B267'];
    return colors[idx] || '#FFF';
  }

  // --- GRID RENDERING (19 CARDS) ---
  function renderCardsGrid() {
    elements.cardsGrid.innerHTML = '';
    QUESTIONS.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'grid-card';
      if (state.answeredQuestions.has(q.id)) {
        card.classList.add('answered');
      }

      card.innerHTML = `
        <span class="card-number">${q.id}</span>
        <span class="card-label">Bài hát ${q.id} 🎵</span>
      `;

      card.addEventListener('click', () => {
        if (!state.answeredQuestions.has(q.id)) {
          openQuestion(q);
        }
      });

      elements.cardsGrid.appendChild(card);
    });
  }

  // --- QUESTION MODAL (NAME THAT SONG) ---
  function openQuestion(q) {
    state.activeQuestion = q;
    const currentTeam = state.teams[state.currentTeamIdx];
    
    elements.qModalTitle.textContent = `🎵 Bài hát #${q.id} · ${currentTeam.name} đang đoán`;
    elements.qModalTitle.style.color = getTeamColor(state.currentTeamIdx);

    if (elements.playerTrackId) {
      elements.playerTrackId.textContent = `❓ Tên bài hát #${q.id}: ? ? ? ? ?`;
    }

    // Reset Mystery Mask
    if (elements.mysteryMask) {
      elements.mysteryMask.classList.remove('revealed');
    }
    if (elements.maskStatus) {
      elements.maskStatus.textContent = 'Nhấn "Phát đoạn cao trào" để nghe';
    }

    // Audio Clue Setup - HIDDEN SONG TITLE!
    stopAudioClue();

    // Reset Answer Box
    elements.answerBox.classList.remove('revealed');
    elements.answerText.textContent = q.title;
    if (elements.answerArtist) {
      elements.answerArtist.textContent = `(${q.artist})`;
    }
    if (elements.answerYtLink) {
      elements.answerYtLink.href = `https://music.youtube.com/watch?v=${q.vid}`;
    }
    if (elements.btnQExtLink) {
      elements.btnQExtLink.href = `https://music.youtube.com/watch?v=${q.vid}`;
    }

    playSound('click');
    elements.questionModal.classList.add('active');
  }

  // --- SONG AUDIO CLUE ENGINE (100% RELIABLE HTML5 AUDIO) ---
  const songAudio = new Audio();
  let isCluePlaying = false;

  songAudio.addEventListener('ended', () => {
    stopAudioClue();
  });

  function stopAudioClue() {
    try {
      songAudio.pause();
      songAudio.currentTime = 0;
    } catch (_) {}
    if (elements.unoYtAudio) elements.unoYtAudio.src = 'about:blank';
    isCluePlaying = false;
    if (elements.qPlayIcon) elements.qPlayIcon.textContent = '▶';
    if (elements.qPlayTxt) elements.qPlayTxt.textContent = 'Phát đoạn cao trào (Highlight)';
    if (elements.btnQPlaySong) elements.btnQPlaySong.classList.remove('is-playing');
    if (elements.eqBars) elements.eqBars.classList.remove('is-playing');
    if (elements.vinylDisc) elements.vinylDisc.classList.remove('is-spinning');
    if (elements.maskStatus) elements.maskStatus.textContent = 'Đã tạm dừng';
  }

  function toggleAudioClue() {
    if (!state.activeQuestion) return;
    if (isCluePlaying) {
      stopAudioClue();
    } else {
      isCluePlaying = true;
      if (elements.qPlayIcon) elements.qPlayIcon.textContent = '⏸';
      if (elements.qPlayTxt) elements.qPlayTxt.textContent = 'Đang phát... (Nhấn để tạm dừng)';
      if (elements.btnQPlaySong) elements.btnQPlaySong.classList.add('is-playing');
      if (elements.eqBars) elements.eqBars.classList.add('is-playing');
      if (elements.vinylDisc) elements.vinylDisc.classList.add('is-spinning');
      if (elements.maskStatus) elements.maskStatus.textContent = '🎶 Đang phát nhạc... Hãy lắng nghe!';
      
      const q = state.activeQuestion;
      // Play high-quality local highlight snippet without any browser autoplay restrictions
      songAudio.src = `media/songs/song${q.id}.mp3`;
      songAudio.currentTime = 0;
      songAudio.play().catch((err) => {
        console.warn('Local audio play error, trying embed fallback:', err);
        if (elements.unoYtAudio) {
          elements.unoYtAudio.src = `https://www.youtube.com/embed/${q.vid}?start=${q.start}&autoplay=1&enablejsapi=1&playsinline=1`;
        }
      });
    }
  }

  function replayAudioClue() {
    if (!state.activeQuestion) return;
    try {
      songAudio.currentTime = 0;
    } catch (_) {}
    if (!isCluePlaying) {
      toggleAudioClue();
    } else {
      songAudio.play().catch(() => {});
    }
  }

  function closeQuestionModal() {
    stopAudioClue();
    elements.questionModal.classList.remove('active');
    state.activeQuestion = null;
  }

  function revealQuestionAnswer() {
    elements.answerBox.classList.add('revealed');
    if (elements.mysteryMask) {
      elements.mysteryMask.classList.add('revealed');
    }
    playSound('flip');
  }

  function handleAnswer(isCorrect) {
    if (!state.activeQuestion) return;
    
    // Mark as answered
    state.answeredQuestions.add(state.activeQuestion.id);
    renderCardsGrid();
    closeQuestionModal();

    if (isCorrect) {
      playSound('cheer');
      // Go to Reward Screen
      openRewardScreen();
    } else {
      playSound('click');
      alert(`❌ Sai rồi! ${state.teams[state.currentTeamIdx].name} mất lượt.`);
      nextTurn();
    }
  }

  // --- REWARD / CARD DRAW FLOW ---
  function openRewardScreen() {
    state.turnScore = 0;
    state.isCardFlipped = false;
    const currentTeam = state.teams[state.currentTeamIdx];

    elements.rewardTeamTitle.textContent = `🎉 ${currentTeam.name} TRẢ LỜI ĐÚNG! · VÒNG RÚT THẺ`;
    elements.rewardTeamTitle.style.color = getTeamColor(state.currentTeamIdx);
    updateTurnScoreDisplay();

    // Reset 3D card
    elements.unoCard3D.classList.remove('flipped');
    elements.btnBank.style.display = 'none';
    elements.btnDrawAgain.style.display = 'none';
    elements.btnDoneReward.style.display = 'none';

    elements.rewardModal.classList.add('active');

    // Automatically draw the first card after 400ms
    setTimeout(() => {
      drawRewardCard();
    }, 450);
  }

  function updateTurnScoreDisplay() {
    elements.rewardScoreText.textContent = `Điểm tích luỹ lượt này: +${state.turnScore} điểm`;
  }

  // Generate Deck Card
  function drawRewardCard() {
    playSound('flip');
    elements.unoCard3D.classList.remove('flipped');

    // Hide choice buttons during draw
    elements.btnBank.style.display = 'none';
    elements.btnDrawAgain.style.display = 'none';
    elements.btnDoneReward.style.display = 'none';

    setTimeout(() => {
      // Determine card type:
      // ~65% Number Points, ~15% Bomb, ~12% Rare Card, ~8% Penalty (-4)
      const roll = Math.random();
      let card = null;

      if (roll < 0.15) {
        // Bomb card
        card = { type: 'bomb', val: 0, label: '💣', color: 'c-bomb', desc: 'MẤT TẤT CẢ ĐIỂM!' };
      } else if (roll < 0.27) {
        // Rare card
        card = { type: 'rare', val: 0, label: '🌟', color: 'c-rare', desc: 'THẺ HIẾM ĐẶC BIỆT!' };
      } else if (roll < 0.35) {
        // Penalty card
        card = { type: 'penalty', val: -4, label: '-4', color: 'c-penalty', desc: 'TRỪ 4 ĐIỂM' };
      } else {
        // Points card (1 to 12)
        const possiblePoints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const val = possiblePoints[Math.floor(Math.random() * possiblePoints.length)];
        const colors = ['c-red', 'c-blue', 'c-green', 'c-yellow'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        card = { type: 'point', val: val, label: `+${val}`, color: color, desc: `CỘNG ${val} ĐIỂM` };
      }

      applyCardFront(card);
      elements.unoCard3D.classList.add('flipped');

      setTimeout(() => {
        handleCardOutcome(card);
      }, 600);
    }, 300);
  }

  function applyCardFront(card) {
    // Reset colors
    elements.cardFront.className = `card-face card-front ${card.color}`;
    elements.cardValBig.textContent = card.label;
    elements.cardCornerTL.textContent = card.label;
    elements.cardCornerBR.textContent = card.label;
    elements.cardDesc.textContent = card.desc;
  }

  function handleCardOutcome(card) {
    if (card.type === 'bomb') {
      playSound('bomb');
      state.turnScore = 0;
      updateTurnScoreDisplay();
      elements.cardDesc.textContent = '💥 BOOM! MẤT HẾT ĐIỂM LƯỢT NÀY!';
      elements.btnDoneReward.style.display = 'inline-flex';
      elements.btnDoneReward.textContent = 'Quay về bảng (Hết lượt)';
    } else if (card.type === 'rare') {
      // Trigger Rare Choice Modal
      openRareModal();
    } else if (card.type === 'penalty') {
      playSound('click');
      state.turnScore = Math.max(0, state.turnScore - 4);
      updateTurnScoreDisplay();
      elements.btnBank.style.display = 'inline-flex';
      elements.btnDrawAgain.style.display = 'inline-flex';
      elements.btnBank.textContent = `💰 Giữ ${state.turnScore} điểm`;
    } else {
      // Points
      playSound('click');
      state.turnScore += card.val;
      updateTurnScoreDisplay();
      elements.btnBank.style.display = 'inline-flex';
      elements.btnDrawAgain.style.display = 'inline-flex';
      elements.btnBank.textContent = `💰 Giữ ${state.turnScore} điểm`;
    }
  }

  // --- RARE CARD MODAL ---
  function openRareModal() {
    elements.rareModal.classList.add('active');
  }

  function closeRareModal() {
    elements.rareModal.classList.remove('active');
  }

  function handleRareSafe() {
    closeRareModal();
    state.turnScore += 5;
    updateTurnScoreDisplay();
    elements.cardDesc.textContent = '🛡️ An toàn nhận +5 điểm!';
    elements.btnBank.style.display = 'inline-flex';
    elements.btnDrawAgain.style.display = 'inline-flex';
    elements.btnBank.textContent = `💰 Giữ ${state.turnScore} điểm`;
    playSound('cheer');
  }

  function handleRareGamble() {
    closeRareModal();
    // 50% chance: Lose all points OR Swap points with another team
    const isLucky = Math.random() < 0.5;
    if (isLucky) {
      playSound('cheer');
      // Swap points modal
      openSwapModal();
    } else {
      playSound('bomb');
      state.turnScore = 0;
      updateTurnScoreDisplay();
      elements.cardDesc.textContent = '💀 XUI XẺO! Bạn đã mất sạch điểm lượt này!';
      elements.btnDoneReward.style.display = 'inline-flex';
      elements.btnDoneReward.textContent = 'Quay về bảng (Hết lượt)';
    }
  }

  // --- SWAP MODAL ---
  function openSwapModal() {
    elements.swapTeamsGrid.innerHTML = '';
    const myIdx = state.currentTeamIdx;
    const myTeam = state.teams[myIdx];

    state.teams.forEach((team, idx) => {
      if (idx !== myIdx) {
        const btn = document.createElement('button');
        btn.className = 'swap-team-btn';
        btn.innerHTML = `
          <span>${team.name}</span>
          <span style="color:#2EC4B6">${team.score} điểm</span>
        `;
        btn.addEventListener('click', () => {
          // Perform swap!
          const temp = myTeam.score;
          myTeam.score = team.score;
          team.score = temp;
          renderScoreboard();
          elements.swapModal.classList.remove('active');
          alert(`🔄 HOÁN ĐỔI THÀNH CÔNG!\n${myTeam.name} đổi điểm với ${team.name}!\n${myTeam.name}: ${myTeam.score} điểm · ${team.name}: ${team.score} điểm`);
          
          elements.cardDesc.textContent = `🔄 Đã hoán đổi điểm với ${team.name}!`;
          elements.btnBank.style.display = 'inline-flex';
          elements.btnDrawAgain.style.display = 'inline-flex';
          elements.btnBank.textContent = `💰 Giữ ${state.turnScore} điểm`;
        });
        elements.swapTeamsGrid.appendChild(btn);
      }
    });

    elements.swapModal.classList.add('active');
  }

  // --- BANK POINTS & END TURN ---
  function bankPoints() {
    const currentTeam = state.teams[state.currentTeamIdx];
    currentTeam.score += state.turnScore;
    renderScoreboard();
    playSound('cheer');

    elements.rewardModal.classList.remove('active');
    nextTurn();
  }

  function finishRewardWithoutBank() {
    elements.rewardModal.classList.remove('active');
    nextTurn();
  }

  function nextTurn() {
    state.currentTeamIdx = (state.currentTeamIdx + 1) % state.teams.length;
    updateTurnIndicator();

    // Check if all answered
    if (state.answeredQuestions.size >= QUESTIONS.length) {
      setTimeout(() => {
        showVictoryScreen();
      }, 500);
    }
  }

  // --- VICTORY SCREEN ---
  function showVictoryScreen() {
    playSound('cheer');
    // Sort teams by score descending
    const sorted = [...state.teams].sort((a, b) => b.score - a.score);
    const winner = sorted[0];

    elements.winnerName.textContent = `🏆 ${winner.name} CHIẾN THẮNG với ${winner.score} điểm!`;

    // Render podium
    elements.podiumGrid.innerHTML = '';
    const podiumOrder = [sorted[1], sorted[0], sorted[2], sorted[3]];
    const classes = ['podium-2nd', 'podium-1st', 'podium-3rd', 'podium-4th'];
    const ranks = ['#2', '#1', '#3', '#4'];

    podiumOrder.forEach((team, idx) => {
      if (!team) return;
      const col = document.createElement('div');
      col.className = `podium-col ${classes[idx]}`;
      col.innerHTML = `
        <span class="podium-team">${team.name}</span>
        <div class="podium-pillar">${ranks[idx]}</div>
        <span class="podium-score">${team.score}đ</span>
      `;
      elements.podiumGrid.appendChild(col);
    });

    elements.victoryModal.classList.add('active');
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // Reveal Answer
    elements.btnRevealAnswer.addEventListener('click', revealQuestionAnswer);

    // Audio Clue Toggle & Replay
    if (elements.btnQPlaySong) {
      elements.btnQPlaySong.addEventListener('click', toggleAudioClue);
    }
    if (elements.btnQReplaySong) {
      elements.btnQReplaySong.addEventListener('click', replayAudioClue);
    }

    // Correct / Wrong
    elements.btnCorrect.addEventListener('click', () => handleAnswer(true));
    elements.btnWrong.addEventListener('click', () => handleAnswer(false));
    elements.btnCloseQ.addEventListener('click', closeQuestionModal);

    // Reward Actions
    elements.btnBank.addEventListener('click', bankPoints);
    elements.btnDrawAgain.addEventListener('click', drawRewardCard);
    elements.btnDoneReward.addEventListener('click', finishRewardWithoutBank);

    // Rare Modal
    elements.btnRareSafe.addEventListener('click', handleRareSafe);
    elements.btnRareGamble.addEventListener('click', handleRareGamble);

    // Victory Restart
    elements.btnRestartGame.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn chơi lại từ đầu?')) {
        state.teams.forEach(t => t.score = 0);
        state.answeredQuestions.clear();
        state.currentTeamIdx = 0;
        renderScoreboard();
        renderCardsGrid();
        updateTurnIndicator();
        elements.victoryModal.classList.remove('active');
      }
    });

    // Score adjustments (+ / -)
    document.querySelectorAll('.btn-adj').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const teamIdx = parseInt(e.target.dataset.team, 10);
        const delta = parseInt(e.target.dataset.adj, 10);
        state.teams[teamIdx].score = Math.max(0, state.teams[teamIdx].score + delta);
        renderScoreboard();
      });
    });

    // Edit Team Names
    elements.teamNames.forEach((el, idx) => {
      el.addEventListener('click', () => {
        const newName = prompt(`Nhập tên mới cho ${state.teams[idx].name}:`, state.teams[idx].name);
        if (newName && newName.trim()) {
          state.teams[idx].name = newName.trim();
          renderScoreboard();
          updateTurnIndicator();
        }
      });
    });

    // Header controls
    elements.btnMute.addEventListener('click', () => {
      state.soundMuted = !state.soundMuted;
      elements.btnMute.textContent = state.soundMuted ? '🔇 Bật âm thanh' : '🔊 Tắt âm';
    });

    elements.btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    elements.btnLeaderboard.addEventListener('click', showVictoryScreen);
  }

  // Start the game!
  window.addEventListener('DOMContentLoaded', init);
})();
