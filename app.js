/**
 * Btown Brief Merch - Homepage App
 */

(function() {
  'use strict';

  const grid = document.getElementById('grid');
  const featuredGrid = document.getElementById('featured-grid');
  const featuredSection = document.getElementById('featured-section');
  const catalogSection = document.getElementById('catalog-section');
  const wornGrid = document.getElementById('worn-grid');
  const emptyState = document.getElementById('empty');
  const searchInput = document.getElementById('search');

  function getStartingPrice(design) {
    const prices = Object.values(design.products)
      .filter(Boolean)
      .map(product => Number.parseFloat(product.price.replace(/[^0-9.]/g, '')))
      .filter(Number.isFinite);

    return prices.length ? `From $${Math.min(...prices).toFixed(0)}` : '';
  }

  function getProductTags(design) {
    const products = design.products;
    const tags = [];

    if (products.tee_front || products.tee_back) tags.push('tee');
    if (products.womens) tags.push('crop');
    if (products.long_sleeve_front || products.long_sleeve_back) tags.push('long sleeve');
    if (products.embroidered) tags.push('embroidered');

    return tags.join(' · ');
  }

  // Create a card element for a design
  function createCard(design, featured = false) {
    const card = document.createElement('a');
    card.className = featured ? 'card card--featured' : 'card';
    card.href = `design.html?d=${design.slug}`;

    card.innerHTML = `
      <div class="card-image">
        <img src="${design.image}" alt="${design.name}" loading="lazy">
      </div>
      <div class="card-content">
        <div class="card-heading">
          <h3 class="card-title">${design.name}</h3>
          <p class="card-price">${getStartingPrice(design)}</p>
        </div>
        <p class="card-tags">${getProductTags(design)}</p>
      </div>
    `;

    return card;
  }

  // Render all designs
  function renderDesigns(designs) {
    grid.innerHTML = '';
    featuredGrid.innerHTML = '';

    if (designs.length === 0) {
      emptyState.style.display = 'block';
      featuredSection.hidden = true;
      catalogSection.hidden = true;
      return;
    }

    emptyState.style.display = 'none';

    const featuredDesigns = designs.filter(design => design.featured);
    const catalogDesigns = designs.filter(design => !design.featured);

    featuredSection.hidden = featuredDesigns.length === 0;
    catalogSection.hidden = catalogDesigns.length === 0;
    featuredDesigns.forEach(design => featuredGrid.appendChild(createCard(design, true)));
    catalogDesigns.forEach(design => grid.appendChild(createCard(design)));
  }

  function renderWornPhotos() {
    const photos = Array.isArray(window.WORN_PHOTOS) ? window.WORN_PHOTOS : [];
    wornGrid.innerHTML = '';

    if (photos.length === 0) {
      for (let index = 0; index < 3; index += 1) {
        const placeholder = document.createElement('div');
        placeholder.className = 'worn-placeholder';
        placeholder.textContent = 'Real people, real shirts — photo slot';
        wornGrid.appendChild(placeholder);
      }
      return;
    }

    photos.forEach(photo => {
      const figure = document.createElement('figure');
      figure.className = 'worn-photo';
      figure.innerHTML = `
        <a href="design.html?d=${photo.design}">
          <img src="${photo.file}" alt="${photo.caption}" loading="lazy">
        </a>
        <figcaption>${photo.caption}</figcaption>
      `;
      wornGrid.appendChild(figure);
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
    renderWornPhotos();

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
