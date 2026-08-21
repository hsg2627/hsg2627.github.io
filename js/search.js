/**
 * SEARCH.JS - Client-Side Instant Fuzzy Search Engine (Fuse.js powered)
 * Lightweight, 100% offline-ready, no ads, instant search indexing.
 */

window.PortalSearch = (function() {
  let searchIndex = [];
  let fuseInstance = null;
  let isInitialized = false;

  // Initialize search index from datasets
  async function init() {
    if (isInitialized) return;

    try {
      // 1. Fetch English 10 units & grammar levels
      const resE10 = await fetch('data/eng10-units.json').then(r => r.json()).catch(() => null);
      if (resE10 && Array.isArray(resE10.grammar_levels)) {
        resE10.grammar_levels.forEach(g => {
          searchIndex.push({
            title: `Grammar: ${g.name || 'Level ' + g.id}`,
            category: 'Grammar',
            badgeClass: 'badge--e10',
            snippet: g.theory ? g.theory.replace(/<[^>]*>/g, ' ').substring(0, 110) + '...' : 'Grammar Practice (English 10)',
            hash: '#english10',
            subId: g.id
          });
        });
      }

      // 2. Fetch AI Evaluation Spot Error Tasks
      const resAiEval = await fetch('data/ai-eval-bank.json').then(r => r.json()).catch(() => null);
      if (resAiEval && Array.isArray(resAiEval.items)) {
        resAiEval.items.forEach(item => {
          const cat = (resAiEval.categories || []).find(c => c.id === (item.error.category || item.error.probe_category));
          const catName = cat ? cat.name : 'Đánh giá AI';
          const fullSentence = (item.spans || []).map(s => s.text).join('');
          searchIndex.push({
            title: `🤖 AI Eval: ${item.id} (${catName})`,
            category: 'AI Evaluation',
            badgeClass: 'badge--cgel',
            snippet: fullSentence.substring(0, 110) + '...',
            hash: '#ai-eval',
            subId: item.id
          });
        });
      }

      // 3. Default quick links
      searchIndex.push(
        { title: 'Doloc Town · Lexicode Matrix', category: 'Vocabulary', badgeClass: 'badge--vocab', snippet: 'Gamified Grade 10 Vocabulary & Collocation Trainer (CT GDPT 2018)', hash: 'lexicode.html', isExternal: true },
        { title: 'Practice Tests & Mock Quizzes', category: 'Practice Tests', badgeClass: 'badge--e10', snippet: 'Grade 10 Unit Grammar and Practice Tests', hash: '#quiz' },
        { title: 'Learning Analytics & Dashboard', category: 'Dashboard', badgeClass: 'badge--neutral', snippet: 'Personal learning statistics and data management', hash: '#dashboard' }
      );

      // Initialize Fuse.js if available, or fallback to robust regex fuzzy search
      if (typeof Fuse !== 'undefined') {
        fuseInstance = new Fuse(searchIndex, {
          keys: ['title', 'category', 'snippet'],
          threshold: 0.35,
          ignoreLocation: true
        });
      }

      isInitialized = true;
      console.log(`Search index ready: ${searchIndex.length} items.`);
    } catch (err) {
      console.warn('Failed to build search index:', err);
    }
  }

  // Perform search query
  function search(query) {
    if (!query || !query.trim()) return [];
    const q = query.trim().toLowerCase();

    if (fuseInstance) {
      return fuseInstance.search(q).slice(0, 8).map(res => res.item);
    }

    // Fallback native search
    return searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const catMatch = item.category.toLowerCase().includes(q);
      const snipMatch = item.snippet.toLowerCase().includes(q);
      return titleMatch || catMatch || snipMatch;
    }).slice(0, 8);
  }

  // Open / Close Modal UI
  function openSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-modal-input');
    if (modal) {
      modal.classList.add('open');
      if (input) {
        input.value = '';
        input.focus();
        renderResults([]);
      }
    }
  }

  function closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.remove('open');
  }

  function renderResults(results) {
    const container = document.getElementById('search-results-list');
    if (!container) return;

    if (!results || results.length === 0) {
      container.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          Type to search Reading passages, Listening, English 10, CGEL Grammar, or Vocab...
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(item => `
      <div class="search-result-item" onclick="PortalSearch.navigateTo('${item.hash}', ${item.isExternal || false}, '${item.subId || ''}')">
        <div class="search-result-item__main">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge ${item.badgeClass}">${item.category}</span>
            <span class="search-result-item__title">${item.title}</span>
          </div>
          <div class="search-result-item__snippet">${item.snippet}</div>
        </div>
        <span style="color: var(--indigo-600); font-weight: 700; font-size: 0.85rem;">Go &rarr;</span>
      </div>
    `).join('');
  }

  function navigateTo(hash, isExternal, subId) {
    closeSearchModal();
    if (isExternal) {
      window.location.href = hash;
    } else {
      window.location.hash = hash;
      if (hash === '#english10' && subId && window.openE10LevelModal) {
        setTimeout(() => {
          window.openE10LevelModal(subId);
        }, 150);
      } else if (hash === '#hsg12-cgel' && subId && window.openCgelModuleDetails) {
        setTimeout(() => {
          window.openCgelModuleDetails(subId);
        }, 150);
      }
    }
  }

  // Keyboard shortcut listener
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearchModal();
    } else if (e.key === 'Escape') {
      closeSearchModal();
    }
  });

  return {
    init,
    search,
    openSearchModal,
    closeSearchModal,
    renderResults,
    navigateTo
  };
})();
