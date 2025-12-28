/**
 * Btown Brief Merch - Homepage App
 */

(function() {
  'use strict';

  const grid = document.getElementById('grid');
  const emptyState = document.getElementById('empty');
  const searchInput = document.getElementById('search');

  // Create a card element for a design
  function createCard(design) {
    const optionCount = Object.values(design.products).filter(p => p !== null).length;
    
    const card = document.createElement('a');
    card.className = 'card';
    card.href = `design.html?d=${design.slug}`;
    
    card.innerHTML = `
      <div class="card-image">
        <img src="${design.image}" alt="${design.name}" loading="lazy">
      </div>
      <div class="card-content">
        <h2 class="card-title">${design.name}</h2>
        <p class="card-meta">Click through to see other colors</p>
        <p class="card-hint">${optionCount} option${optionCount !== 1 ? 's' : ''}</p>
      </div>
    `;
    
    return card;
  }

  // Render all designs
  function renderDesigns(designs) {
    grid.innerHTML = '';
    
    if (designs.length === 0) {
      emptyState.style.display = 'block';
      return;
    }
    
    emptyState.style.display = 'none';
    
    designs.forEach(design => {
      grid.appendChild(createCard(design));
    });
  }

  // Filter designs by search term
  function filterDesigns(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    
    if (!term) {
      return window.DESIGNS;
    }
    
    return window.DESIGNS.filter(design => 
      design.name.toLowerCase().includes(term) ||
      design.slug.includes(term)
    );
  }

  // Handle search input
  function handleSearch() {
    const filtered = filterDesigns(searchInput.value);
    renderDesigns(filtered);
  }

  // Debounce helper
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Initialize
  function init() {
    if (!window.DESIGNS || !Array.isArray(window.DESIGNS)) {
      console.error('DESIGNS data not loaded');
      return;
    }

    // Initial render
    renderDesigns(window.DESIGNS);

    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 150));
    
    // Clear search on escape
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        handleSearch();
        searchInput.blur();
      }
    });

    console.log(`Loaded ${window.DESIGNS.length} designs`);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
