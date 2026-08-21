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
      // 1. Fetch HSG 12 topics
      const resHsg12 = await fetch('data/hsg12-topics.json').then(r => r.json()).catch(() => null);
      if (resHsg12) {
        // Reading passages
        if (Array.isArray(resHsg12.reading)) {
          resHsg12.reading.forEach(p => {
            searchIndex.push({
              title: p.title,
              category: 'Reading',
              badgeClass: 'badge--hsg',
              snippet: p.text ? p.text.substring(0, 110) + '...' : 'VSTEP / HSG Reading Passage',
              hash: '#hsg12-reading',
              subId: p.id
            });
          });
        }
        // Listening questions
        if (Array.isArray(resHsg12.listening)) {
          resHsg12.listening.forEach(l => {
            searchIndex.push({
              title: `Listening Q${l.qNum || ''}: ${(l.question || '').substring(0, 50)}...`,
              category: 'Listening',
              badgeClass: 'badge--hsg',
              snippet: l.question || '',
              hash: '#hsg12-listening',
              subId: l.id
            });
          });
        }
        // CGEL Grammar modules
        if (resHsg12.cgel_modules) {
          Object.entries(resHsg12.cgel_modules).forEach(([k, m]) => {
            searchIndex.push({
              title: m.title,
              category: 'CGEL Grammar',
              badgeClass: 'badge--cgel',
              snippet: m.desc || 'Comprehensive Grammar of the English Language',
              hash: '#hsg12-cgel',
              subId: k
            });
          });
        }
      }

      // 2. Fetch English 10 units
      const resE10 = await fetch('data/eng10-units.json').then(r => r.json()).catch(() => null);
      if (resE10 && Array.isArray(resE10.grammar_levels)) {
        resE10.grammar_levels.forEach(g => {
          searchIndex.push({
            title: `English 10: ${g.name || 'Level ' + g.id}`,
            category: 'English 10',
            badgeClass: 'badge--e10',
            snippet: g.theory ? g.theory.substring(0, 110) + '...' : 'English 10 Essential Grammar Practice',
            hash: '#english10',
            subId: g.id
          });
        });
      }

      // 3. Fetch Destination C1/C2 Vocab
      const resVocab = await fetch('data/vocab-c1c2.json').then(r => r.json()).catch(() => null);
      if (resVocab && Array.isArray(resVocab.units)) {
        const seenUnits = new Set();
        resVocab.units.forEach(u => {
          const unitKey = u.unit;
          if (!seenUnits.has(unitKey)) {
            seenUnits.add(unitKey);
            searchIndex.push({
              title: u.unitTitle || `Unit ${u.unit}`,
              category: 'Vocabulary',
              badgeClass: 'badge--vocab',
              snippet: `Academy: ${u.shop || 'Scholar Hall'} - Target C1/C2 Vocabulary Mastery`,
              hash: '#hsg12-vocab',
              subId: u.unit
            });
          }
          if (u.verb) {
            searchIndex.push({
              title: `Word: ${u.verb} (Unit ${u.unit})`,
              category: 'Vocabulary',
              badgeClass: 'badge--vocab',
              snippet: `${u.meaningEn || ''} - ${u.meaningVn || ''}`,
              hash: '#hsg12-vocab',
              subId: u.unit
            });
          }
        });
      }

      // 4. Default quick links
      searchIndex.push(
        { title: 'Arcane Idiom Sanctuary', category: 'Idioms', badgeClass: 'badge--vocab', snippet: 'Destination C1 & C2 Idioms Mastery Guide', hash: 'idioms.html', isExternal: true },
        { title: 'Monsterest Inn & Guild', category: 'Collocations', badgeClass: 'badge--hsg', snippet: 'Interactive Collocations & Lexicode Matrix', hash: 'lexicode.html', isExternal: true },
        { title: 'Learning Dashboard', category: 'Dashboard', badgeClass: 'badge--neutral', snippet: 'Personal learning statistics and mastery progress', hash: '#dashboard' }
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
