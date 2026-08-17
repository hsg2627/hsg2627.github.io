import os
import json
import sys

sys.path.insert(0, r'c:\hsg2627.github.io\scratch')
from verify_idioms_data import idioms_data, units_meta

os.makedirs(r'c:\hsg2627.github.io\Idioms', exist_ok=True)

raw_json_str = json.dumps(idioms_data, ensure_ascii=False, indent=2)
units_json_str = json.dumps(units_meta, ensure_ascii=False, indent=2)

template = """<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arcane Idiom Sanctuary 🔮 Destination C1 & C2 Idioms Mastery</title>
  <!-- Google Fonts: Cinzel (Arcane Title), Plus Jakarta Sans (Sleek UI), VT323 (Pixel Stats) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=VT323&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --bg-dark: #0b0f19;
      --bg-surface: #121827;
      --panel-bg: #1a2236;
      --panel-card: #222d47;
      --panel-border: #38486e;
      --panel-border-glow: #6366f1;
      
      --accent-gold: #f59e0b;
      --accent-amber: #d97706;
      --accent-cyan: #38bdf8;
      --accent-purple: #a855f7;
      --accent-emerald: #10b981;
      --accent-rose: #f43f5e;
      --accent-blue: #3b82f6;
      
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      
      --font-title: 'Cinzel', serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-pixel: 'VT323', monospace;
      
      --border-game: 3px solid #0f172a;
      --box-shadow-game: 4px 4px 0px #090d16;
      --box-shadow-glow: 0 0 20px rgba(99, 102, 241, 0.25);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      background: var(--bg-dark);
      background-image: 
        radial-gradient(circle at 50% 10%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
        radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
        linear-gradient(rgba(11, 15, 25, 0.96), rgba(11, 15, 25, 0.96));
      color: var(--text-main);
      font-family: var(--font-body);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      overflow-x: hidden;
    }

    /* Layout Container */
    .app-container {
      width: 100%;
      max-width: 1020px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Sanctuary Top Header Bar */
    header.sanctuary-header {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 16px 22px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      position: relative;
      background-image: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
    }

    .sanctuary-brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .sanctuary-logo {
      font-size: 2.6rem;
      line-height: 1;
      filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.6));
      animation: float-orb 3.5s ease-in-out infinite;
    }

    @keyframes float-orb {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-5px) rotate(4deg); }
    }

    .sanctuary-title h1 {
      font-family: var(--font-title);
      font-size: 1.45rem;
      font-weight: 900;
      color: var(--accent-gold);
      letter-spacing: 0.5px;
      text-shadow: 2px 2px 0px #000;
    }

    .sanctuary-title p {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* Stat Badges */
    .sanctuary-stats {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .stat-badge {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 8px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.88rem;
      font-weight: 700;
      box-shadow: 2px 2px 0px #000;
      transition: border-color 0.2s, transform 0.15s;
    }

    .stat-badge:hover {
      border-color: var(--accent-cyan);
      transform: translateY(-1px);
    }

    .stat-badge span.icon {
      font-size: 1.15rem;
    }

    .stat-badge span.val {
      color: var(--accent-gold);
      font-family: var(--font-pixel);
      font-size: 1.45rem;
      line-height: 1;
    }

    /* Action Buttons */
    .game-btn {
      background: linear-gradient(180deg, #f59e0b, #d97706);
      color: #0b0f19;
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      font-family: var(--font-body);
      font-weight: 800;
      font-size: 0.9rem;
      padding: 9px 18px;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.12s ease-in-out;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-decoration: none;
    }

    .game-btn:hover {
      filter: brightness(1.15);
      transform: translate(-1px, -1px);
      box-shadow: 5px 5px 0px #090d16;
    }

    .game-btn:active {
      transform: translate(2px, 2px);
      box-shadow: 1px 1px 0px #090d16;
    }

    .game-btn.secondary {
      background: var(--panel-card);
      border-color: var(--panel-border);
      color: var(--text-main);
    }

    .game-btn.secondary:hover {
      background: #2b3859;
      border-color: var(--accent-cyan);
    }

    .game-btn.emerald {
      background: linear-gradient(180deg, #10b981, #059669);
      color: #fff;
    }

    .game-btn.purple {
      background: linear-gradient(180deg, #a855f7, #7e22ce);
      color: #fff;
    }

    .game-btn.cyan {
      background: linear-gradient(180deg, #38bdf8, #0284c7);
      color: #0b0f19;
    }

    .game-btn.rose {
      background: linear-gradient(180deg, #f43f5e, #be123c);
      color: #fff;
    }

    /* View Navigation */
    .view-section {
      display: none;
      animation: fadeInView 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .view-section.active {
      display: block;
    }

    @keyframes fadeInView {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Section Bar */
    .section-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .section-bar h2 {
      font-family: var(--font-title);
      font-size: 1.3rem;
      color: var(--accent-gold);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Unit Realm Cards Grid */
    .units-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
      gap: 16px;
    }

    .unit-card {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 20px;
      cursor: pointer;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
      gap: 14px;
      position: relative;
      overflow: hidden;
    }

    .unit-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 4px;
      background: var(--unit-color, var(--accent-gold));
    }

    .unit-card:hover {
      transform: translateY(-4px);
      border-color: var(--unit-color, var(--accent-gold));
      box-shadow: 6px 6px 0px #090d16;
    }

    .unit-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .unit-guardian-icon {
      font-size: 2.2rem;
      background: var(--panel-card);
      padding: 8px 12px;
      border-radius: 10px;
      border: 2px solid var(--panel-border);
      box-shadow: 2px 2px 0px #000;
    }

    .unit-badge {
      background: rgba(99, 102, 241, 0.18);
      border: 1px solid var(--panel-border-glow);
      color: var(--accent-cyan);
      font-size: 0.76rem;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 700;
    }

    .unit-info h3 {
      font-family: var(--font-title);
      font-size: 1.15rem;
      color: var(--accent-gold);
      margin-bottom: 5px;
    }

    .unit-info p {
      font-size: 0.86rem;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .unit-progress-container {
      width: 100%;
      height: 10px;
      background: #090d16;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid var(--panel-border);
    }

    .unit-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-amber), var(--accent-gold));
      width: 0%;
      transition: width 0.4s ease;
    }

    .unit-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--text-dim);
      font-weight: 700;
    }

    /* All Units Realm Banner Card */
    .grand-realm-card {
      grid-column: 1 / -1;
      background: linear-gradient(135deg, #1e1b4b 0%, #1a2236 100%);
      border: 3px solid #818cf8;
      border-radius: 12px;
      box-shadow: var(--box-shadow-game), 0 0 25px rgba(99, 102, 241, 0.25);
      padding: 22px 26px;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      transition: transform 0.2s;
    }

    .grand-realm-card:hover {
      transform: translateY(-3px);
      border-color: var(--accent-gold);
    }

    /* Mode Selection Grid */
    .modes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 16px;
      margin-top: 15px;
    }

    .mode-card {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 22px 18px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      transition: transform 0.2s, border-color 0.2s, background 0.2s;
    }

    .mode-card:hover {
      transform: translateY(-4px);
      background: var(--panel-card);
      border-color: var(--accent-gold);
      box-shadow: 6px 6px 0px #090d16;
    }

    .mode-icon {
      font-size: 3.2rem;
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    }

    .mode-card h3 {
      font-family: var(--font-title);
      font-size: 1.15rem;
      color: var(--accent-gold);
    }

    .mode-card p {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.45;
    }

    /* 3D FLASHCARD STYLES */
    .flashcard-wrapper {
      perspective: 1200px;
      width: 100%;
      max-width: 620px;
      height: 400px;
      margin: 20px auto;
      cursor: pointer;
    }

    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      border-radius: 14px;
    }

    .flashcard-inner.is-flipped {
      transform: rotateY(180deg);
    }

    .flashcard-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: var(--border-game);
      box-shadow: var(--box-shadow-game), 0 10px 30px rgba(0,0,0,0.5);
      border-radius: 14px;
      padding: 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--panel-bg);
      background-image: radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 80%);
    }

    .flashcard-back {
      transform: rotateY(180deg);
      background: #192033;
      border-color: var(--accent-gold);
      background-image: radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 80%);
    }

    .card-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-unit-badge {
      background: var(--panel-card);
      border: 1px solid var(--panel-border);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--accent-cyan);
    }

    .card-audio-btn {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      color: #fff;
      font-size: 1.3rem;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s, border-color 0.15s;
    }

    .card-audio-btn:hover {
      transform: scale(1.15);
      border-color: var(--accent-gold);
    }

    .card-main-content {
      text-align: center;
      margin: auto 0;
    }

    .card-idiom-title {
      font-family: var(--font-title);
      font-size: 2.1rem;
      font-weight: 900;
      color: #fff;
      margin-bottom: 8px;
      text-shadow: 2px 2px 0px #000;
      line-height: 1.25;
    }

    .card-meaning-vi-box {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--accent-gold);
      margin-bottom: 10px;
    }

    .card-def-en-box {
      font-size: 0.92rem;
      color: #e2e8f0;
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .card-example-quote {
      background: rgba(0,0,0,0.35);
      border-left: 3px solid var(--accent-gold);
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      font-size: 0.88rem;
      color: #cbd5e1;
      text-align: left;
      line-height: 1.4;
    }

    .card-controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 15px;
    }

    /* QUIZ & QUEST ARENA STYLES */
    .arena-card {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .arena-guardian-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 10px;
      padding: 14px 18px;
    }

    .guardian-profile {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .guardian-avatar {
      font-size: 2.2rem;
      animation: guardian-hover 2s ease-in-out infinite;
    }

    @keyframes guardian-hover {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    .guardian-hp-track {
      width: 150px;
      height: 14px;
      background: #090d16;
      border-radius: 7px;
      border: 1px solid var(--panel-border);
      overflow: hidden;
    }

    .guardian-hp-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-rose), var(--accent-emerald));
      width: 100%;
      transition: width 0.35s ease;
    }

    .question-prompt-box {
      text-align: center;
      padding: 10px 0;
    }

    .question-instruction {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .question-headline {
      font-family: var(--font-title);
      font-size: 1.8rem;
      color: var(--accent-gold);
      line-height: 1.3;
    }

    .question-sentence-box {
      font-size: 1.15rem;
      color: #fff;
      font-weight: 600;
      line-height: 1.55;
      background: rgba(0,0,0,0.3);
      padding: 16px 20px;
      border-radius: 8px;
      border-left: 4px solid var(--accent-cyan);
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    @media (min-width: 640px) {
      .options-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .option-btn {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      color: var(--text-main);
      padding: 14px 18px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      text-align: left;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 2px 2px 0px #000;
      line-height: 1.4;
    }

    .option-btn:hover:not(:disabled) {
      background: #2c3a5c;
      border-color: var(--accent-gold);
      transform: translate(-1px, -1px);
    }

    .option-btn.correct {
      background: rgba(16, 185, 129, 0.25) !important;
      border-color: var(--accent-emerald) !important;
      color: #34d399 !important;
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.3) !important;
    }

    .option-btn.wrong {
      background: rgba(244, 63, 94, 0.25) !important;
      border-color: var(--accent-rose) !important;
      color: #fb7185 !important;
    }

    .explanation-card {
      display: none;
      background: rgba(15, 23, 42, 0.85);
      border: 2px solid var(--panel-border-glow);
      border-radius: 8px;
      padding: 14px 18px;
      font-size: 0.92rem;
      line-height: 1.5;
      animation: fadeInView 0.2s ease;
    }

    /* RUNE MATCH MEMORY ARENA */
    .rune-arena {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .rune-stats-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 8px;
      padding: 10px 16px;
    }

    .rune-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 12px;
      margin-top: 8px;
    }

    .rune-tile {
      aspect-ratio: 1.3 / 1;
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 8px;
      padding: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.86rem;
      font-weight: 700;
      color: var(--text-main);
      box-shadow: 2px 2px 0px #000;
      transition: all 0.2s ease;
      user-select: none;
      line-height: 1.3;
    }

    .rune-tile:hover:not(.matched):not(.selected) {
      border-color: var(--accent-cyan);
      transform: translateY(-2px);
    }

    .rune-tile.selected {
      background: rgba(99, 102, 241, 0.35);
      border-color: var(--accent-cyan);
      color: #fff;
      transform: scale(1.03);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
    }

    .rune-tile.matched {
      background: rgba(16, 185, 129, 0.2);
      border-color: var(--accent-emerald);
      color: #a7f3d0;
      cursor: default;
      opacity: 0.85;
      transform: scale(0.98);
    }

    /* WORD SCRAMBLE MATRIX */
    .scramble-arena {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      text-align: center;
    }

    .scramble-slots-tray {
      min-height: 60px;
      width: 100%;
      max-width: 640px;
      background: #090d16;
      border: 2px dashed var(--panel-border);
      border-radius: 10px;
      padding: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }

    .scramble-pool-tray {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      max-width: 640px;
    }

    .word-tile {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-main);
      cursor: pointer;
      box-shadow: 2px 2px 0px #000;
      transition: all 0.12s ease;
    }

    .word-tile:hover {
      border-color: var(--accent-gold);
      transform: translateY(-2px);
    }

    .word-tile.placed {
      background: rgba(245, 158, 11, 0.2);
      border-color: var(--accent-gold);
      color: var(--accent-gold);
    }

    /* GRAND CODEX DICTIONARY */
    .codex-card {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game);
      border-radius: 12px;
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .codex-search-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }

    .search-input {
      flex: 1;
      min-width: 240px;
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      color: #fff;
      padding: 10px 16px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-family: var(--font-body);
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--accent-gold);
    }

    .codex-items-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 14px;
      max-height: 600px;
      overflow-y: auto;
      padding-right: 4px;
    }

    .codex-item {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      border-radius: 10px;
      padding: 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      transition: border-color 0.15s;
    }

    .codex-item:hover {
      border-color: var(--accent-cyan);
    }

    .codex-item-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }

    .codex-item-title {
      font-family: var(--font-title);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--accent-gold);
    }

    /* VICTORY & SUMMARY MODAL */
    .summary-card {
      background: var(--panel-bg);
      border: var(--border-game);
      box-shadow: var(--box-shadow-game), 0 0 40px rgba(245, 158, 11, 0.2);
      border-radius: 14px;
      padding: 32px 24px;
      text-align: center;
      max-width: 520px;
      margin: 20px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
    }

    .victory-orb {
      font-size: 4.2rem;
      animation: victory-pulse 1.2s ease-in-out infinite alternate;
    }

    @keyframes victory-pulse {
      from { transform: scale(0.95); filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.4)); }
      to { transform: scale(1.08); filter: drop-shadow(0 0 25px rgba(245, 158, 11, 0.8)); }
    }

    .summary-score-grid {
      display: flex;
      gap: 14px;
      margin: 10px 0;
    }

    .summary-stat-box {
      background: var(--panel-card);
      border: 2px solid var(--panel-border);
      padding: 12px 18px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      box-shadow: 2px 2px 0px #000;
    }

    .summary-stat-box .num {
      font-family: var(--font-pixel);
      font-size: 2rem;
      color: var(--accent-gold);
      line-height: 1;
    }

    .summary-stat-box .lbl {
      font-size: 0.78rem;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* Confetti Canvas */
    #confetti-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 99999;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .flashcard-wrapper {
        height: 440px;
      }
      .sanctuary-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>

  <canvas id="confetti-canvas"></canvas>

  <div class="app-container">
    
    <!-- TOP SANCTUARY GUILD HEADER -->
    <header class="sanctuary-header">
      <div class="sanctuary-brand">
        <a href="../index.html#hsg12-vocab" class="game-btn secondary" style="padding: 6px 12px; font-size: 0.8rem;" title="Quay lại English Insiders Portal">⬅️ Portal</a>
        <div class="sanctuary-logo">🔮</div>
        <div class="sanctuary-title">
          <h1>Arcane Idiom Sanctuary</h1>
          <p>Master 61 Advanced Idioms across 6 Destination C1 & C2 Units</p>
        </div>
      </div>
      <div class="sanctuary-stats">
        <button id="btn-sound-toggle" class="stat-badge" onclick="app.toggleSound()" style="cursor: pointer;" title="Bật/Tắt âm thanh SFX">
          <span class="icon" id="sound-icon">🔊</span>
          <span class="val" style="font-size: 0.9rem; font-family: var(--font-body);">SFX</span>
        </button>
        <div class="stat-badge" title="Arcane Gold Coins">
          <span class="icon">🪙</span>
          <span class="val" id="stat-gold">0</span>
        </div>
        <div class="stat-badge" title="Mana & EXP">
          <span class="icon">💖</span>
          <span class="val" id="stat-mana">0</span>
        </div>
        <div class="stat-badge" title="Mastered Idioms">
          <span class="icon">📜</span>
          <span class="val" id="stat-mastered">0/61</span>
        </div>
        <div class="stat-badge" title="Daily Streak">
          <span class="icon">🔥</span>
          <span class="val" id="stat-streak">1</span>
        </div>
      </div>
    </header>

    <!-- VIEW 1: HOME - UNIT REALM SELECTION -->
    <section id="view-home" class="view-section active">
      <div class="section-bar">
        <h2><span>🗺️</span> Choose Your Idiom Realm</h2>
        <button class="game-btn purple" onclick="app.showCodex()">🔍 Grand Codex Reference</button>
      </div>

      <div class="units-grid" id="units-container">
        <!-- Rendered by JS -->
      </div>
    </section>

    <!-- VIEW 2: MODE SELECTION -->
    <section id="view-mode-select" class="view-section">
      <div class="section-bar">
        <h2><span id="current-unit-icon">🦉</span> <span id="current-unit-title">Unit 2: Thinking & Learning</span></h2>
        <button class="game-btn secondary" onclick="app.showHome()">⬅️ Change Realm</button>
      </div>
      <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 15px;">
        Choose your training trial alongside the Sanctuary Guardians:
      </p>

      <div class="modes-grid">
        <div class="mode-card" onclick="app.startFlashcards()">
          <div class="mode-icon">📇</div>
          <h3>3D Arcane Grimoire</h3>
          <p>Flip 3D spellcards, listen to native speech, review English definitions, Vietnamese meanings, and exam examples.</p>
          <button class="game-btn" style="margin-top:auto;">Explore Grimoire</button>
        </div>

        <div class="mode-card" onclick="app.startQuizMode()">
          <div class="mode-icon">⚔️</div>
          <h3>Guardian Trial Arena</h3>
          <p>Defeat guardian monsters in intense multiple-choice battles by matching idioms with exact definitions.</p>
          <button class="game-btn" style="margin-top:auto;">Enter Trial</button>
        </div>

        <div class="mode-card" onclick="app.startQuestMode()">
          <div class="mode-icon">📜</div>
          <h3>Codex Context Quest</h3>
          <p>Complete official Destination C1 & C2 gap-fill exam sentences (A, B, C, D) to uncover ancient wisdom.</p>
          <button class="game-btn" style="margin-top:auto;">Accept Quest</button>
        </div>

        <div class="mode-card" onclick="app.startRuneMatch()">
          <div class="mode-icon">🔮</div>
          <h3>Rune Match Memory</h3>
          <p>Match Idiom runes with their respective meanings against time to rack up massive combo multipliers.</p>
          <button class="game-btn emerald" style="margin-top:auto;">Match Runes</button>
        </div>

        <div class="mode-card" onclick="app.startScrambleMode()">
          <div class="mode-icon">🧩</div>
          <h3>Word Matrix Scramble</h3>
          <p>Reassemble shattered word tiles into the complete idiom phrase under timed pressure.</p>
          <button class="game-btn purple" style="margin-top:auto;">Solve Puzzle</button>
        </div>
      </div>
    </section>

    <!-- VIEW 3: 3D FLASHCARD -->
    <section id="view-flashcard" class="view-section">
      <div class="section-bar">
        <h2><span>📇</span> Arcane Grimoire (<span id="fc-index">1</span>/<span id="fc-total">12</span>)</h2>
        <button class="game-btn secondary" onclick="app.showModeSelect()">⬅️ Mode Menu</button>
      </div>

      <div class="flashcard-wrapper" onclick="app.flipCard()">
        <div class="flashcard-inner" id="flashcard-card">
          <!-- Front Face -->
          <div class="flashcard-face flashcard-front">
            <div class="card-top-bar">
              <span class="card-unit-badge" id="fc-unit-tag">Unit 2: Thinking & Learning</span>
              <button class="card-audio-btn" onclick="event.stopPropagation(); app.speakCurrentIdiom();" title="Nghe phát âm Idiom">🔊</button>
            </div>
            <div class="card-main-content">
              <h2 class="card-idiom-title" id="fc-idiom">go to sb's head</h2>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 10px;">💡 Click or Press <strong style="color: var(--accent-gold);">Space</strong> to reveal meaning</p>
            </div>
            <div class="card-top-bar">
              <span style="font-size: 0.85rem; color: var(--text-dim);" id="fc-guardian-name">🦉 Athena Owl</span>
              <span style="font-size: 0.85rem; color: var(--accent-cyan);">Front Rune 🔄</span>
            </div>
          </div>
          <!-- Back Face -->
          <div class="flashcard-face flashcard-back">
            <div class="card-top-bar">
              <span class="card-unit-badge" style="background: rgba(245,158,11,0.2); color: var(--accent-gold);">Meaning & Context</span>
              <button class="card-audio-btn" onclick="event.stopPropagation(); app.speakCurrentIdiom();" title="Nghe phát âm Idiom">🔊</button>
            </div>
            <div class="card-main-content" style="text-align: left;">
              <div class="card-meaning-vi-box" id="fc-meaning-vi">khiến chúng ta quá đề cao bản thân và trở nên hống hách</div>
              <div class="card-def-en-box" id="fc-meaning-en">if success goes to sb's head, it makes them think that they are very important</div>
              <div class="card-example-quote" id="fc-example">Don't let all this sudden fame go to your head; stay humble and keep working hard.</div>
            </div>
            <div class="card-top-bar">
              <span style="font-size: 0.85rem; color: var(--text-dim);" id="fc-unit-name-back">Unit 2</span>
              <span style="font-size: 0.85rem; color: var(--accent-gold);">🔄 Flip Back</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card-controls">
        <button class="game-btn secondary" onclick="app.prevCard()">⬅️ Previous</button>
        <button class="game-btn emerald" id="btn-master-card" onclick="app.toggleMasterCurrent()">⭐ Master Idiom (+15 🪙)</button>
        <button class="game-btn" onclick="app.nextCard()">Next Idiom ➡️</button>
      </div>
    </section>

    <!-- VIEW 4: QUIZ TRIAL & QUEST ARENA -->
    <section id="view-quiz" class="view-section">
      <div class="section-bar">
        <h2><span id="quiz-mode-icon">⚔️</span> <span id="quiz-mode-title">Guardian Trial Arena</span></h2>
        <div style="font-family: var(--font-pixel); font-size: 1.5rem; color: var(--accent-gold);" id="quiz-progress-text">Trial 1/10</div>
      </div>

      <div class="arena-card">
        <div class="arena-guardian-bar">
          <div class="guardian-profile">
            <div class="guardian-avatar" id="quiz-guardian-avatar">🦉</div>
            <div>
              <div style="font-weight: 800; font-size: 0.96rem; color: var(--accent-gold);" id="quiz-guardian-name">Athena Owl of Wisdom</div>
              <div style="font-size: 0.78rem; color: var(--text-muted);">Sanctuary Guardian Challenge</div>
            </div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 4px; text-align: right;">Guardian HP</div>
            <div class="guardian-hp-track">
              <div class="guardian-hp-fill" id="quiz-hp-bar"></div>
            </div>
          </div>
        </div>

        <div class="question-prompt-box">
          <p class="question-instruction" id="quiz-instruction-text">Select the correct definition or Vietnamese meaning for the idiom:</p>
          <h2 class="question-headline" id="quiz-question-main">go to sb's head</h2>
        </div>

        <div class="options-grid" id="quiz-options-container">
          <!-- Rendered by JS -->
        </div>

        <div class="explanation-card" id="quiz-explanation">
          <div style="font-weight: 800; color: var(--accent-gold); margin-bottom: 6px;">📖 Sanctuary Codex Breakdown:</div>
          <div id="quiz-explanation-text">...</div>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
          <button class="game-btn" id="btn-quiz-next" style="display: none;" onclick="app.nextQuizQuestion()">Continue ➡️</button>
        </div>
      </div>
    </section>

    <!-- VIEW 5: RUNE MATCH MEMORY ARENA -->
    <section id="view-rune-match" class="view-section">
      <div class="section-bar">
        <h2><span>🔮</span> Rune Match Memory</h2>
        <button class="game-btn secondary" onclick="app.showModeSelect()">⬅️ Mode Menu</button>
      </div>

      <div class="rune-arena">
        <div class="rune-stats-bar">
          <div>⏳ Time: <span id="rune-timer" style="font-family: var(--font-pixel); font-size: 1.3rem; color: var(--accent-gold);">0s</span></div>
          <div>🔄 Moves: <span id="rune-moves" style="font-family: var(--font-pixel); font-size: 1.3rem; color: var(--accent-cyan);">0</span></div>
          <div>🔥 Combo: <span id="rune-combo" style="font-family: var(--font-pixel); font-size: 1.3rem; color: var(--accent-emerald);">x1</span></div>
          <div>📜 Matched: <span id="rune-matched-count" style="font-family: var(--font-pixel); font-size: 1.3rem; color: var(--accent-gold);">0/6</span></div>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-muted); text-align: center;">
          Click an <strong>Idiom Rune</strong> and match it with its corresponding <strong>Meaning Rune</strong>!
        </p>

        <div class="rune-grid" id="rune-grid-container">
          <!-- Rendered by JS -->
        </div>
      </div>
    </section>

    <!-- VIEW 6: WORD SCRAMBLE MATRIX -->
    <section id="view-scramble" class="view-section">
      <div class="section-bar">
        <h2><span>🧩</span> Word Matrix Scramble (<span id="scramble-idx">1</span>/<span id="scramble-total">5</span>)</h2>
        <button class="game-btn secondary" onclick="app.showModeSelect()">⬅️ Mode Menu</button>
      </div>

      <div class="scramble-arena">
        <div>
          <span class="card-unit-badge" id="scramble-unit-badge">Unit 2</span>
          <h3 style="font-size: 1.15rem; color: var(--accent-gold); margin-top: 10px;" id="scramble-prompt-meaning">khiến ai đó trở nên hống hách</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);" id="scramble-def-en">if success goes to sb's head...</p>
        </div>

        <div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 6px;">Constructed Idiom:</div>
          <div class="scramble-slots-tray" id="scramble-slots"></div>
        </div>

        <div>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 6px;">Available Word Runes:</div>
          <div class="scramble-pool-tray" id="scramble-pool"></div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: 10px;">
          <button class="game-btn secondary" onclick="app.resetScrambleTiles()">🔄 Clear</button>
          <button class="game-btn emerald" onclick="app.checkScrambleAnswer()">✨ Check Idiom</button>
          <button class="game-btn" id="btn-scramble-next" style="display: none;" onclick="app.nextScrambleQuestion()">Next ➡️</button>
        </div>
      </div>
    </section>

    <!-- VIEW 7: GRAND CODEX DICTIONARY -->
    <section id="view-codex" class="view-section">
      <div class="section-bar">
        <h2><span>🔍</span> Grand Codex Reference (61 Destination Idioms)</h2>
        <button class="game-btn secondary" onclick="app.showHome()">⬅️ Back to Realms</button>
      </div>

      <div class="codex-card">
        <div class="codex-search-row">
          <input type="text" id="codex-search-input" class="search-input" placeholder="Search idioms, English meaning, Vietnamese keywords..." oninput="app.filterCodex()">
          <select id="codex-unit-filter" class="search-input" style="max-width: 220px;" onchange="app.filterCodex()">
            <option value="all">🌟 All Units (61)</option>
            <option value="2">Unit 2: Thinking & Learning</option>
            <option value="4">Unit 4: Change & Tech</option>
            <option value="6">Unit 6: Time & Work</option>
            <option value="8">Unit 8: Movement</option>
            <option value="10">Unit 10: Communication</option>
            <option value="12">Unit 12: Chance & Nature</option>
          </select>
        </div>

        <div class="codex-items-list" id="codex-list-container">
          <!-- Rendered by JS -->
        </div>
      </div>
    </section>

    <!-- VIEW 8: SUMMARY & REWARD MODAL -->
    <section id="view-summary" class="view-section">
      <div class="summary-card">
        <div class="victory-orb">🏆</div>
        <h2 style="font-family: var(--font-title); color: var(--accent-gold); font-size: 1.7rem;">Trial Mastered!</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem;" id="summary-msg">
          The Sanctuary Guardians bestow their arcane blessings upon your lexical prowess!
        </p>

        <div class="summary-score-grid">
          <div class="summary-stat-box">
            <span class="num" id="sum-correct">10/10</span>
            <span class="lbl">Accuracy</span>
          </div>
          <div class="summary-stat-box">
            <span class="num" id="sum-gold">+100</span>
            <span class="lbl">Gold Coins</span>
          </div>
          <div class="summary-stat-box">
            <span class="num" id="sum-mana">+50</span>
            <span class="lbl">Mana EXP</span>
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 10px;">
          <button class="game-btn" onclick="app.restartCurrentMode()">🔄 Replay Trial</button>
          <button class="game-btn purple" onclick="app.showModeSelect()">📜 Choose Mode</button>
          <button class="game-btn secondary" onclick="app.showHome()">🏠 Realms Hub</button>
        </div>
      </div>
    </section>

  </div>

  <!-- SOUND SYNTHESIZER & SCRIPT ENGINE -->
  <script>
    const RAW_IDIOMS = __RAW_IDIOMS__;
    const UNITS_META = __UNITS_META__;

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

      playTone(freq, type, duration, delay = 0) {
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

      flip() { this.playTone(450, 'sine', 0.08); }
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
      match() {
        this.playTone(587.33, 'triangle', 0.1, 0);
        this.playTone(880.00, 'triangle', 0.18, 0.08);
      }
      fanfare() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, i) => this.playTone(f, 'triangle', 0.2, i * 0.12));
      }
    }

    class ArcaneIdiomsApp {
      constructor() {
        this.idioms = RAW_IDIOMS;
        this.units = UNITS_META;
        this.audio = new RetroAudio();
        
        this.currentUnitId = 'all'; // 'all' or unit number
        this.currentMode = null;
        this.currentCardIdx = 0;
        this.filteredIdioms = [];
        
        // Quiz state
        this.quizQueue = [];
        this.quizIdx = 0;
        this.quizScore = 0;
        
        // Rune Match state
        this.runeTimer = null;
        this.runeSeconds = 0;
        this.runeMoves = 0;
        this.runeCombo = 1;
        this.runeSelected = [];
        this.runeMatchedCount = 0;
        this.runeTotalPairs = 0;

        // Scramble state
        this.scrambleQueue = [];
        this.scrambleIdx = 0;
        this.placedWords = [];
        this.poolWords = [];

        this.loadStorage();
        this.initDOM();
        this.renderUnits();
        this.updateStatsDisplay();
      }

      loadStorage() {
        const saved = localStorage.getItem('arcane_idioms_save');
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
          mana: 0,
          masteredIdiomIds: [],
          streak: 1,
          lastPlayedDate: new Date().toDateString()
        };
      }

      saveStorage() {
        localStorage.setItem('arcane_idioms_save', JSON.stringify(this.state));
        this.updateStatsDisplay();
      }

      updateStatsDisplay() {
        document.getElementById('stat-gold').textContent = this.state.gold;
        document.getElementById('stat-mana').textContent = this.state.mana;
        document.getElementById('stat-mastered').textContent = `${this.state.masteredIdiomIds.length}/${this.idioms.length}`;
        document.getElementById('stat-streak').textContent = this.state.streak;
      }

      initDOM() {
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
      }

      switchView(viewId) {
        document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      showHome() {
        this.renderUnits();
        this.switchView('view-home');
      }

      showModeSelect() {
        let title = "🌟 Grand Master Realm (All 61 Idioms)";
        let icon = "🔮";
        if (this.currentUnitId !== 'all') {
          const u = this.units.find(item => item.id === this.currentUnitId);
          if (u) {
            title = u.title;
            icon = u.icon;
          }
        }
        document.getElementById('current-unit-icon').textContent = icon;
        document.getElementById('current-unit-title').textContent = title;
        this.switchView('view-mode-select');
      }

      selectUnit(unitId) {
        this.currentUnitId = unitId;
        if (unitId === 'all') {
          this.filteredIdioms = [...this.idioms];
        } else {
          this.filteredIdioms = this.idioms.filter(w => w.unit === unitId);
        }
        this.showModeSelect();
      }

      renderUnits() {
        const container = document.getElementById('units-container');
        container.innerHTML = '';

        // 1. Grand Master Realm Banner
        const allMastered = this.idioms.filter(w => this.state.masteredIdiomIds.includes(w.id)).length;
        const allPct = Math.round((allMastered / this.idioms.length) * 100);

        const banner = document.createElement('div');
        banner.className = 'grand-realm-card';
        banner.onclick = () => this.selectUnit('all');
        banner.innerHTML = `
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="font-size: 2.8rem; background: rgba(99,102,241,0.25); padding: 10px 14px; border-radius: 12px; border: 2px solid #818cf8;">🌟</div>
            <div>
              <h3 style="font-family: var(--font-title); font-size: 1.35rem; color: var(--accent-gold);">Grand Master Sanctuary</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 4px;">Train across all 61 Idioms from Destination C1 & C2 (Units 2, 4, 6, 8, 10, 12).</p>
            </div>
          </div>
          <div style="min-width: 180px;">
            <div class="unit-progress-container">
              <div class="unit-progress-fill" style="width: ${allPct}%;"></div>
            </div>
            <div class="unit-meta" style="margin-top: 6px; color: #cbd5e1;">
              <span>Progress: ${allPct}%</span>
              <span>${allMastered}/${this.idioms.length} Idioms</span>
            </div>
          </div>
        `;
        container.appendChild(banner);

        // 2. Individual Units
        this.units.forEach(u => {
          const uWords = this.idioms.filter(w => w.unit === u.id);
          const masteredCount = uWords.filter(w => this.state.masteredIdiomIds.includes(w.id)).length;
          const pct = Math.round((masteredCount / uWords.length) * 100);

          const card = document.createElement('div');
          card.className = 'unit-card';
          card.style.setProperty('--unit-color', u.theme_color);
          card.onclick = () => this.selectUnit(u.id);
          card.innerHTML = `
            <div class="unit-card-header">
              <div class="unit-guardian-icon">${u.icon}</div>
              <span class="unit-badge">${u.guardian}</span>
            </div>
            <div class="unit-info">
              <h3>${u.title}</h3>
              <p>${u.desc}</p>
            </div>
            <div>
              <div class="unit-progress-container">
                <div class="unit-progress-fill" style="width: ${pct}%;"></div>
              </div>
              <div class="unit-meta" style="margin-top: 6px;">
                <span>Progress: ${pct}%</span>
                <span>${masteredCount}/${uWords.length} Idioms</span>
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
        const item = this.filteredIdioms[this.currentCardIdx];
        if (!item) return;

        document.getElementById('flashcard-card').classList.remove('is-flipped');

        document.getElementById('fc-index').textContent = this.currentCardIdx + 1;
        document.getElementById('fc-total').textContent = this.filteredIdioms.length;
        document.getElementById('fc-unit-tag').textContent = item.unit_title;
        document.getElementById('fc-idiom').textContent = item.idiom;
        document.getElementById('fc-guardian-name').textContent = item.guardian;

        document.getElementById('fc-meaning-vi').textContent = item.meaning_vi;
        document.getElementById('fc-meaning-en').textContent = item.meaning_en;
        document.getElementById('fc-example').textContent = item.example;
        document.getElementById('fc-unit-name-back').textContent = item.unit_title;

        const btnMaster = document.getElementById('btn-master-card');
        const isMastered = this.state.masteredIdiomIds.includes(item.id);
        if (isMastered) {
          btnMaster.className = 'game-btn emerald';
          btnMaster.textContent = '⭐ Mastered';
        } else {
          btnMaster.className = 'game-btn secondary';
          btnMaster.textContent = '☆ Master Idiom (+15 🪙)';
        }
      }

      flipCard() {
        this.audio.flip();
        document.getElementById('flashcard-card').classList.toggle('is-flipped');
      }

      nextCard() {
        if (this.currentCardIdx < this.filteredIdioms.length - 1) {
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
        const item = this.filteredIdioms[this.currentCardIdx];
        const idx = this.state.masteredIdiomIds.indexOf(item.id);
        if (idx > -1) {
          this.state.masteredIdiomIds.splice(idx, 1);
        } else {
          this.state.masteredIdiomIds.push(item.id);
          this.state.gold += 15;
          this.state.mana += 5;
          this.audio.coin();
        }
        this.saveStorage();
        this.renderCard();
      }

      speakCurrentIdiom() {
        const item = this.filteredIdioms[this.currentCardIdx];
        if (!item) return;
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const phrase = item.clean_phrase || item.idiom;
          const u = new SpeechSynthesisUtterance(phrase);
          u.lang = 'en-US';
          u.rate = 0.9;
          window.speechSynthesis.speak(u);
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
        document.getElementById('quiz-mode-icon').textContent = type === 'meaning' ? '⚔️' : '📜';
        document.getElementById('quiz-mode-title').textContent = type === 'meaning' ? 'Guardian Trial Arena' : 'Codex Context Quest';

        const pool = [...this.filteredIdioms].sort(() => 0.5 - Math.random());
        const chosen = pool.slice(0, Math.min(count, pool.length));

        this.quizQueue = chosen.map(item => {
          const distractors = this.idioms
            .filter(w => w.id !== item.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          let options = [];
          if (type === 'meaning') {
            options = [
              { text: item.meaning_vi + ' (' + item.meaning_en.split('/')[0].slice(0, 65) + '...)', correct: true },
              ...distractors.map(d => ({ text: d.meaning_vi + ' (' + d.meaning_en.split('/')[0].slice(0, 65) + '...)', correct: false }))
            ];
          } else {
            // Sentence cloze
            if (item.cloze_options && item.cloze_options.length === 4) {
              options = item.cloze_options.map((opt, idx) => ({ text: opt, correct: idx === 0 }));
            } else {
              options = [
                { text: item.clean_phrase || item.idiom, correct: true },
                ...distractors.map(d => ({ text: d.clean_phrase || d.idiom, correct: false }))
              ];
            }
          }
          options.sort(() => 0.5 - Math.random());

          return {
            idiom: item,
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
        document.getElementById('quiz-progress-text').textContent = `Trial ${this.quizIdx + 1}/${totalQ}`;

        document.getElementById('quiz-guardian-avatar').textContent = q.idiom.guardian.split(' ')[0];
        document.getElementById('quiz-guardian-name').textContent = q.idiom.guardian;

        const hpPct = Math.max(10, Math.round(((totalQ - this.quizIdx) / totalQ) * 100));
        document.getElementById('quiz-hp-bar').style.width = `${hpPct}%`;

        if (q.type === 'meaning') {
          document.getElementById('quiz-instruction-text').textContent = "Select the exact definition and Vietnamese translation for the target idiom:";
          document.getElementById('quiz-question-main').className = "question-headline";
          document.getElementById('quiz-question-main').textContent = q.idiom.idiom;
        } else {
          document.getElementById('quiz-instruction-text').textContent = "Select the correct word or phrase to complete the exam context sentence:";
          document.getElementById('quiz-question-main').className = "question-sentence-box";
          document.getElementById('quiz-question-main').textContent = q.idiom.cloze_sentence || q.idiom.example.replace(q.idiom.idiom, '_____');
        }

        const container = document.getElementById('quiz-options-container');
        container.innerHTML = '';
        q.options.forEach((opt, oIdx) => {
          const btn = document.createElement('button');
          btn.className = 'option-btn';
          const letter = ['A','B','C','D'][oIdx];
          btn.innerHTML = `<span style="color:var(--accent-gold); font-family:var(--font-pixel); font-size:1.3rem;">${letter}.</span> <span>${opt.text}</span>`;
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
          this.state.mana += 5;
          if (!this.state.masteredIdiomIds.includes(q.idiom.id)) {
            this.state.masteredIdiomIds.push(q.idiom.id);
          }
        } else {
          btn.classList.add('wrong');
          this.audio.wrong();
          allBtns.forEach((b, idx) => {
            if (q.options[idx].correct) b.classList.add('correct');
          });
        }

        this.saveStorage();

        const expPanel = document.getElementById('quiz-explanation');
        const expText = document.getElementById('quiz-explanation-text');
        expText.innerHTML = `
          <strong>${q.idiom.idiom}</strong>: ${q.idiom.meaning_vi}<br>
          <span style="color:#cbd5e1;">EN Definition:</span> ${q.idiom.meaning_en}<br>
          <em style="color:#fde68a;">Example: "${q.idiom.example}"</em>
        `;
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

      /* =================== RUNE MATCH MEMORY =================== */
      startRuneMatch() {
        this.currentMode = 'match';
        this.switchView('view-rune-match');

        const pool = [...this.filteredIdioms].sort(() => 0.5 - Math.random());
        const pairCount = Math.min(6, pool.length);
        const selectedIdioms = pool.slice(0, pairCount);
        this.runeTotalPairs = pairCount;

        const cards = [];
        selectedIdioms.forEach(item => {
          cards.push({ id: item.id, type: 'idiom', text: item.idiom });
          cards.push({ id: item.id, type: 'meaning', text: item.meaning_vi });
        });

        cards.sort(() => 0.5 - Math.random());

        this.runeMoves = 0;
        this.runeCombo = 1;
        this.runeMatchedCount = 0;
        this.runeSelected = [];
        this.runeSeconds = 0;

        if (this.runeTimer) clearInterval(this.runeTimer);
        this.runeTimer = setInterval(() => {
          this.runeSeconds++;
          document.getElementById('rune-timer').textContent = `${this.runeSeconds}s`;
        }, 1000);

        this.updateRuneStats();

        const grid = document.getElementById('rune-grid-container');
        grid.innerHTML = '';
        cards.forEach(card => {
          const tile = document.createElement('div');
          tile.className = 'rune-tile';
          tile.textContent = card.text;
          tile.onclick = () => this.handleRuneClick(tile, card);
          grid.appendChild(tile);
        });
      }

      updateRuneStats() {
        document.getElementById('rune-moves').textContent = this.runeMoves;
        document.getElementById('rune-combo').textContent = `x${this.runeCombo}`;
        document.getElementById('rune-matched-count').textContent = `${this.runeMatchedCount}/${this.runeTotalPairs}`;
      }

      handleRuneClick(tile, card) {
        if (tile.classList.contains('matched') || tile.classList.contains('selected')) return;
        if (this.runeSelected.length >= 2) return;

        tile.classList.add('selected');
        this.audio.flip();
        this.runeSelected.push({ tile, card });

        if (this.runeSelected.length === 2) {
          this.runeMoves++;
          const [first, second] = this.runeSelected;

          if (first.card.id === second.card.id && first.card.type !== second.card.type) {
            // MATCH!
            setTimeout(() => {
              first.tile.classList.remove('selected');
              second.tile.classList.remove('selected');
              first.tile.classList.add('matched');
              second.tile.classList.add('matched');
              this.audio.match();
              this.runeMatchedCount++;
              this.runeCombo++;
              this.state.gold += 5 * this.runeCombo;
              this.state.mana += 2;
              this.saveStorage();
              this.updateRuneStats();
              this.runeSelected = [];

              if (this.runeMatchedCount === this.runeTotalPairs) {
                clearInterval(this.runeTimer);
                setTimeout(() => this.showSummary(), 600);
              }
            }, 300);
          } else {
            // WRONG!
            this.runeCombo = 1;
            this.updateRuneStats();
            setTimeout(() => {
              first.tile.classList.remove('selected');
              second.tile.classList.remove('selected');
              this.audio.wrong();
              this.runeSelected = [];
            }, 700);
          }
        }
      }

      /* =================== WORD SCRAMBLE MATRIX =================== */
      startScrambleMode() {
        this.currentMode = 'scramble';
        this.switchView('view-scramble');

        const pool = [...this.filteredIdioms].sort(() => 0.5 - Math.random());
        this.scrambleQueue = pool.slice(0, Math.min(5, pool.length));
        this.scrambleIdx = 0;
        this.renderScrambleQuestion();
      }

      renderScrambleQuestion() {
        const item = this.scrambleQueue[this.scrambleIdx];
        if (!item) return;

        document.getElementById('btn-scramble-next').style.display = 'none';
        document.getElementById('scramble-idx').textContent = this.scrambleIdx + 1;
        document.getElementById('scramble-total').textContent = this.scrambleQueue.length;
        document.getElementById('scramble-unit-badge').textContent = item.unit_title;
        document.getElementById('scramble-prompt-meaning').textContent = item.meaning_vi;
        document.getElementById('scramble-def-en').textContent = item.meaning_en;

        const clean = item.clean_phrase || item.idiom;
        const words = clean.split(/\s+/);
        this.placedWords = [];
        this.poolWords = words.map((w, idx) => ({ id: idx, word: w })).sort(() => 0.5 - Math.random());

        this.renderScrambleTrays();
      }

      renderScrambleTrays() {
        const slotsTray = document.getElementById('scramble-slots');
        const poolTray = document.getElementById('scramble-pool');

        slotsTray.innerHTML = '';
        poolTray.innerHTML = '';

        this.placedWords.forEach((pw, idx) => {
          const t = document.createElement('div');
          t.className = 'word-tile placed';
          t.textContent = pw.word;
          t.onclick = () => {
            this.placedWords.splice(idx, 1);
            this.poolWords.push(pw);
            this.audio.flip();
            this.renderScrambleTrays();
          };
          slotsTray.appendChild(t);
        });

        this.poolWords.forEach((pw, idx) => {
          const t = document.createElement('div');
          t.className = 'word-tile';
          t.textContent = pw.word;
          t.onclick = () => {
            this.poolWords.splice(idx, 1);
            this.placedWords.push(pw);
            this.audio.flip();
            this.renderScrambleTrays();
          };
          poolTray.appendChild(t);
        });
      }

      resetScrambleTiles() {
        const item = this.scrambleQueue[this.scrambleIdx];
        const clean = item.clean_phrase || item.idiom;
        const words = clean.split(/\s+/);
        this.placedWords = [];
        this.poolWords = words.map((w, idx) => ({ id: idx, word: w })).sort(() => 0.5 - Math.random());
        this.renderScrambleTrays();
      }

      checkScrambleAnswer() {
        const item = this.scrambleQueue[this.scrambleIdx];
        const clean = item.clean_phrase || item.idiom;
        const targetStr = clean.toLowerCase().trim();
        const userStr = this.placedWords.map(p => p.word).join(' ').toLowerCase().trim();

        if (userStr === targetStr) {
          this.audio.correct();
          this.state.gold += 12;
          this.state.mana += 6;
          if (!this.state.masteredIdiomIds.includes(item.id)) {
            this.state.masteredIdiomIds.push(item.id);
          }
          this.saveStorage();
          document.getElementById('btn-scramble-next').style.display = 'inline-flex';
        } else {
          this.audio.wrong();
        }
      }

      nextScrambleQuestion() {
        this.scrambleIdx++;
        if (this.scrambleIdx < this.scrambleQueue.length) {
          this.renderScrambleQuestion();
        } else {
          this.showSummary();
        }
      }

      /* =================== GRAND CODEX DICTIONARY =================== */
      showCodex() {
        this.switchView('view-codex');
        this.filterCodex();
      }

      filterCodex() {
        const query = document.getElementById('codex-search-input').value.toLowerCase().trim();
        const unitVal = document.getElementById('codex-unit-filter').value;

        const list = document.getElementById('codex-list-container');
        list.innerHTML = '';

        const results = this.idioms.filter(item => {
          const matchUnit = unitVal === 'all' || item.unit.toString() === unitVal;
          const matchQuery = !query || 
            item.idiom.toLowerCase().includes(query) ||
            item.meaning_vi.toLowerCase().includes(query) ||
            item.meaning_en.toLowerCase().includes(query);
          return matchUnit && matchQuery;
        });

        results.forEach(item => {
          const card = document.createElement('div');
          card.className = 'codex-item';
          card.innerHTML = `
            <div class="codex-item-top">
              <div>
                <span class="card-unit-badge" style="font-size: 0.72rem; padding: 2px 8px;">${item.unit_title}</span>
                <div class="codex-item-title" style="margin-top: 4px;">${item.idiom}</div>
              </div>
              <button class="card-audio-btn" style="width: 34px; height: 34px; font-size: 1rem;" onclick="app.speakIdiomText('${item.clean_phrase || item.idiom}')">🔊</button>
            </div>
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--accent-gold);">${item.meaning_vi}</div>
            <div style="font-size: 0.84rem; color: #cbd5e1; line-height: 1.4;">${item.meaning_en}</div>
            <div style="font-size: 0.8rem; color: #94a3b8; font-style: italic; border-left: 2px solid var(--accent-cyan); padding-left: 8px;">
              "${item.example}"
            </div>
          `;
          list.appendChild(card);
        });
      }

      speakIdiomText(text) {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text);
          u.lang = 'en-US';
          u.rate = 0.9;
          window.speechSynthesis.speak(u);
        }
      }

      /* =================== SUMMARY & REWARD =================== */
      showSummary() {
        this.audio.fanfare();
        this.fireConfetti();

        let correctText = "Complete!";
        let goldGain = 60;
        let manaGain = 30;

        if (this.currentMode === 'quiz' || this.currentMode === 'quest') {
          correctText = `${this.quizScore}/${this.quizQueue.length}`;
          goldGain = this.quizScore * 10;
          manaGain = this.quizScore * 5;
        } else if (this.currentMode === 'match') {
          correctText = `${this.runeMatchedCount} Pairs`;
          goldGain = Math.max(20, 80 - this.runeSeconds * 2);
          manaGain = 35;
        }

        document.getElementById('sum-correct').textContent = correctText;
        document.getElementById('sum-gold').textContent = `+${goldGain}`;
        document.getElementById('sum-mana').textContent = `+${manaGain}`;

        this.switchView('view-summary');
      }

      restartCurrentMode() {
        if (this.currentMode === 'quiz') this.startQuizMode();
        else if (this.currentMode === 'quest') this.startQuestMode();
        else if (this.currentMode === 'match') this.startRuneMatch();
        else if (this.currentMode === 'scramble') this.startScrambleMode();
        else this.startFlashcards();
      }

      fireConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];
        const colors = ['#f59e0b', '#38bdf8', '#10b981', '#a855f7', '#f43f5e', '#ec4899'];
        for (let i = 0; i < 80; i++) {
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
          if (frame < 130) requestAnimationFrame(render);
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

    window.addEventListener('DOMContentLoaded', () => {
      window.app = new ArcaneIdiomsApp();
    });
  </script>
</body>
</html>
"""

final_html = template.replace('__RAW_IDIOMS__', raw_json_str).replace('__UNITS_META__', units_json_str)

with open(r'c:\hsg2627.github.io\Idioms\index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"Successfully generated Idioms/index.html! Length: {len(final_html)} bytes")
