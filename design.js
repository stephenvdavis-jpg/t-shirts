/**
 * Btown Brief Merch - Design Detail Page
 */

(function() {
  'use strict';

  const container = document.getElementById('design-detail');

  // Product type labels and order
  const productTypes = [
    { key: 'tee_front', label: 'Unisex Tee (Front)' },
    { key: 'tee_back', label: 'Unisex Tee (Back)' },
    { key: 'long_sleeve_front', label: 'Long Sleeve (Front)' },
    { key: 'long_sleeve_back', label: 'Long Sleeve (Back)' },
    { key: 'womens', label: "Women's Cut / Crop" },
    { key: 'embroidered', label: 'Embroidered' }
  ];

  // External link icon SVG
  const externalIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  `;

  // Get design slug from URL
  function getDesignSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('d');
  }

  // Find design by slug
  function findDesign(slug) {
    if (!window.DESIGNS || !Array.isArray(window.DESIGNS)) {
      return null;
    }
    return window.DESIGNS.find(d => d.slug === slug);
  }

  // Create product button
  function createProductButton(product, typeInfo) {
    const btn = document.createElement('a');
    btn.className = 'product-btn' + (typeInfo.key === 'embroidered' ? ' embroidered' : '');
    btn.href = product.href;
    btn.target = '_blank';
    btn.rel = 'noopener';
    
    btn.innerHTML = `
      <span class="label">${typeInfo.label}</span>
      <span class="price">${product.price}</span>
      ${externalIcon}
    `;
    
    return btn;
  }

  // Render design detail
  function renderDesign(design) {
    // Update page title
    document.title = `${design.name} - Btown Brief Merch`;

    // Count available products
    const availableProducts = productTypes.filter(pt => design.products[pt.key] !== null);
    
    // Build HTML
    let html = `
      <div class="design-hero">
        <img src="${design.image}" alt="${design.name}">
      </div>
      <div class="design-info">
        <div>
          <h1 class="design-title">${design.name}</h1>
          <p class="design-subtitle">Make a selection to view all 3-7 color options</p>
          ${design.description ? `<p class="design-description">${design.description}</p>` : ''}
        </div>
        <div>
          <p class="section-header">Choose a Product</p>
          <div class="product-buttons" id="buttons"></div>
        </div>
        <p class="sizing-warning">Be sure to check out shirt measurements on next page before ordering. Refunds are for quality control, not fit.</p>
      </div>
    `;
    
    container.innerHTML = html;
    
    // Add buttons
    const buttonsContainer = document.getElementById('buttons');
    
    for (const typeInfo of productTypes) {
      const product = design.products[typeInfo.key];
      if (product) {
        buttonsContainer.appendChild(createProductButton(product, typeInfo));
      }
    }
  }

  // Show error state
  function showError(message) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>Design not found</h3>
        <p>${message}</p>
        <a href="index.html" class="back-link" style="margin-top: 1rem; display: inline-flex;">
          ← Back to all designs
        </a>
      </div>
    `;
  }

  // Initialize
  function init() {
    const slug = getDesignSlug();
    
    if (!slug) {
      showError('No design specified');
      return;
    }

    const design = findDesign(slug);
    
    if (!design) {
      showError(`Could not find design: ${slug}`);
      return;
    }

    renderDesign(design);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
