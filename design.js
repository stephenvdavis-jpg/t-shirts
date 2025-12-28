/**
 * Btown Brief Merch - Design Detail Page
 */

(function() {
  'use strict';

  // These IDs must match your HTML exactly
  const elements = {
    title: document.getElementById('title'),
    desc: document.getElementById('desc'),
    img: document.getElementById('img'),
    buttons: document.getElementById('buttons'),
    year: document.getElementById('year')
  };

  const productTypes = [
    { key: 'tee_front', label: 'Unisex Tee (Front)' },
    { key: 'tee_back', label: 'Unisex Tee (Back)' },
    { key: 'long_sleeve_front', label: 'Long Sleeve (Front)' },
    { key: 'long_sleeve_back', label: 'Long Sleeve (Back)' },
    { key: 'womens', label: "Women's Cut / Crop" },
    { key: 'embroidered', label: 'Embroidered' }
  ];

  const externalIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" style="width:16px; height:16px; margin-left:8px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  `;

  function getDesignSlug() {
    const params = new URLSearchParams(window.location.search);
    // Note: your script looks for '?d=slug'. 
    // Make sure your homepage links look like: design.html?d=champus-fossil
    return params.get('d');
  }

  function findDesign(slug) {
    if (!window.DESIGNS || !Array.isArray(window.DESIGNS)) return null;
    return window.DESIGNS.find(d => d.slug === slug);
  }

  function renderDesign(design) {
    // 1. Update basic text and image
    document.title = `${design.name} • Btown Brief Merch`;
    if (elements.title) elements.title.textContent = design.name;
    if (elements.desc) elements.desc.innerHTML = design.description || '';
    if (elements.img) {
      elements.img.src = design.image;
      elements.img.alt = design.name;
    }
    if (elements.year) elements.year.textContent = new Date().getFullYear();

    // 2. Clear and build product buttons
    if (elements.buttons) {
      elements.buttons.innerHTML = ''; // Clear "Loading..." or old content

      productTypes.forEach(typeInfo => {
        const product = design.products[typeInfo.key];
        if (product && product.href) {
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
          elements.buttons.appendChild(btn);
        }
      });
    }
  }

  function init() {
    const slug = getDesignSlug();
    if (!slug) return;

    const design = findDesign(slug);
    if (design) {
      renderDesign(design);
    } else {
      console.error("Design not found for slug:", slug);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
