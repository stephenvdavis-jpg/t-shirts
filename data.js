/**
 * Btown Brief Merch - Product Data
 * 77 products across 15 designs
 */

// Raw product data from Printify
const rawProducts = [
  { href: "https://btown-b-merch.printify.me/product/25588858/sunset-and-amp-mountains-back-print", title: "Sunset & Mountains BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588230/champus-fossil-t-shirt", title: "Champus Fossil T-shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588229/university-of-the-pit-t-shirt", title: "University of the Pit T-shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588228/sunset-t-shirt-embroidered", title: "Sunset T-Shirt | Embroidered", price: "$35.00" },
  { href: "https://btown-b-merch.printify.me/product/25588227/port-of-burlington-t-shirt", title: "Port of Burlington T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588167/zebra-mussel-t-shirt", title: "Zebra Mussel T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588165/btown-brief-logo-back-print", title: "Btown Brief Logo BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588164/champus-fossil-back-print", title: "Champus Fossil BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588163/sturgeon-t-shirt", title: "Sturgeon T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588161/grade-a-twist-t-shirt", title: "Grade A Twist T-shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588160/one-rats-nest-t-shirt", title: "O.N.E. Rat's Nest T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588159/breakwater-lighthouse-t-shirt", title: "Breakwater Lighthouse T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588158/lake-glass-t-shirt", title: "Lake Glass T-shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588157/lake-glass-back-print", title: "Lake Glass BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588156/grade-a-twist-back-print", title: "Grade A Twist BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588155/university-of-the-pit-back-print", title: "University of the Pit BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588154/zebra-mussel-back-print", title: "Zebra Mussel BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588152/one-rats-nest-back-print", title: "O.N.E. Rat's Nest BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588151/port-of-burlington-back-print", title: "Port of Burlington BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588147/breakwater-lighthouse-back-print", title: "Breakwater Lighthouse BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588146/sturgeon-back-print", title: "Sturgeon BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588145/grid-of-btv", title: "Grid of BTV", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588144/filing-cabinet-t-shirt", title: "Filing Cabinet T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588143/filing-cabinet-back-print", title: "Filing Cabinet BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588142/grid-of-btv-back-print", title: "Grid of BTV BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588141/womens-crop-grid-of-btv", title: "Women's Crop Grid of BTV", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588140/womens-crop-filing-cabinet-t-shirt", title: "Womens Crop Filing Cabinet T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588139/church-and-amp-cherry-st-bike-womens-crop", title: "Church & Cherry St Bike Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588137/lake-glass-womens-cut", title: "Lake Glass Women's Cut", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588108/zebra-mussel-womens-crop", title: "Zebra Mussel Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588106/grade-a-twist-womens-crop", title: "Grade A Twist Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588105/breakwater-lighthouse-womens-cut", title: "Breakwater Lighthouse Women's Cut", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588104/rats-nest-womens-cut", title: "Rat's Nest Women's Cut", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588103/sturgeon-womens-crop", title: "Sturgeon Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588102/champus-fossil-womens-crop", title: "Champus Fossil Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588101/port-of-burlington-womens-crop", title: "Port of Burlington Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588099/btown-brief-logo-womens-crop", title: "Btown Brief Logo Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588098/university-of-the-pit-womens-crop", title: "University of the Pit Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588097/sunset-and-amp-mountains-t-shirt", title: "Sunset & Mountains T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588096/burlington-gray-print-t-shirt", title: "Burlington Gray Print T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588095/sunset-and-amp-mountains-womens-crop", title: "Sunset & Mountains Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588094/burlington-gray-t-shirt-embroidered", title: "Burlington Gray T-Shirt | Embroidered", price: "$35.00" },
  { href: "https://btown-b-merch.printify.me/product/25588093/burlington-gray-print-back-print", title: "Burlington Gray Print BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588092/burlington-gray-womens-crop", title: "Burlington Gray Women's Crop", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588091/long-sleeve-burlington-gray-print-t-shirt", title: "Long Sleeve Burlington Gray Print T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588090/long-sleeve-grid-of-btv", title: "Long Sleeve Grid of BTV", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588089/church-and-amp-cherry-st-bike-graphic-tee", title: "Church & Cherry St Bike Graphic Tee", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588088/long-sleeve-sunset-and-amp-mountains-t-shirt", title: "Long Sleeve Sunset & Mountains T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588087/long-sleeve-filing-cabinet-t-shirt", title: "Long Sleeve Filing Cabinet T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588086/long-sleeve-church-and-amp-cherry-st-bike-graphic-tee", title: "Long Sleeve Church & Cherry St Bike Graphic Tee", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588085/church-and-amp-cherry-st-bike-back-print", title: "Church & Cherry St Bike BACK PRINT", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588084/long-sleeve-lake-glass-t-shirt", title: "Long Sleeve Lake Glass T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588083/long-sleeve-university-of-the-pit-t-shirt", title: "Long Sleeve University of the Pit T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588055/long-sleeve-port-of-burlington-t-shirt", title: "Long Sleeve Port of Burlington T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588054/long-sleeve-zebra-mussel-t-shirt", title: "Long Sleeve Zebra Mussel T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588053/long-sleeve-sturgeon-t-shirt", title: "Long Sleeve Sturgeon T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588052/long-sleeve-one-rats-nest-t-shirt", title: "Long Sleeve O.N.E. Rat's Nest T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588051/long-sleeve-grade-a-twist-t-shirt", title: "Long Sleeve Grade A Twist T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588050/btown-brief-logo-t-shirt", title: "Btown Brief logo T-Shirt", price: "$25.00" },
  { href: "https://btown-b-merch.printify.me/product/25588048/long-sleeve-btown-brief-logo-t-shirt", title: "Long Sleeve Btown Brief logo T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588047/long-sleeve-breakwater-lighthouse-t-shirt", title: "Long Sleeve Breakwater Lighthouse T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588046/long-sleeve-champus-fossil-t-shirt", title: "Long Sleeve Champus Fossil T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588045/back-print-long-sleeve-sunset-and-amp-mountains-t-shirt", title: "BACK PRINT Long Sleeve Sunset & Mountains T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588044/back-print-long-sleeve-burlington-gray-print-t-shirt", title: "BACK PRINT Long Sleeve Burlington Gray Print T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588041/back-print-long-sleeve-filing-cabinet-t-shirt", title: "BACK PRINT Long Sleeve Filing Cabinet T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588040/back-print-long-sleeve-grid-of-btv", title: "BACK PRINT Long Sleeve Grid of BTV", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588039/back-print-long-sleeve-church-and-amp-cherry-st-bike-graphic-tee", title: "BACK PRINT Long Sleeve Church & Cherry St Bike Graphic Tee", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588038/back-print-long-sleeve-university-of-the-pit-t-shirt", title: "BACK PRINT Long Sleeve University of the Pit T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588037/back-print-long-sleeve-zebra-mussel-t-shirt", title: "BACK PRINT Long Sleeve Zebra Mussel T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588036/back-print-long-sleeve-lake-glass-t-shirt", title: "BACK PRINT Long Sleeve Lake Glass T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588035/back-print-long-sleeve-sturgeon-t-shirt", title: "BACK PRINT Long Sleeve Sturgeon T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588034/back-print-long-sleeve-one-rats-nest-t-shirt", title: "BACK PRINT Long Sleeve O.N.E. Rat's Nest T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588033/back-print-long-sleeve-btown-brief-logo-t-shirt", title: "BACK PRINT Long Sleeve Btown Brief logo T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588032/back-print-long-sleeve-champus-fossil-t-shirt", title: "BACK PRINT Long Sleeve Champus Fossil T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588031/back-print-long-sleeve-grade-a-twist-t-shirt", title: "BACK PRINT Long Sleeve Grade A Twist T-shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588030/back-print-long-sleeve-port-of-burlington-t-shirt", title: "BACK PRINT Long Sleeve Port of Burlington T-Shirt", price: "$30.00" },
  { href: "https://btown-b-merch.printify.me/product/25588029/back-print-long-sleeve-breakwater-lighthouse-t-shirt", title: "BACK PRINT Long Sleeve Breakwater Lighthouse T-Shirt", price: "$30.00" }
];

// Image mapping: slug -> filename
const imageMapping = {
  "breakwater-lighthouse": "breakwater-lighthouse.jpg",
  "btown-brief-logo": "btown-brief-logo.jpg",
  "burlington-gray": "burlington-gray.jpg",
  "champus-fossil": "champus-fossil.jpg",
  "church-cherry-st-bike": "church-cherry-st-bike.jpg",
  "filing-cabinet": "filing-cabinet.jpg",
  "grade-a-twist": "grade-a-twist.jpg",
  "grid-of-btv": "grid-of-btv.jpg",
  "lake-glass": "lake-champlain.jpg",
  "one-rats-nest": "one-rats-nest.jpg",
  "port-of-burlington": "port-of-burlington.jpg",
  "sturgeon": "sturgeon.jpg",
  "sunset-mountains": "sunset-mountains.jpg",
  "university-of-the-pit": "university-of-the-pit.jpg",
  "zebra-mussel": "zebra-mussel.jpg"
};

// Design descriptions / inspiration
const designDescriptions = {
  "breakwater-lighthouse": "Everyone has a photo of the Breakwater Lighthouse, so instead of another pretty picture, I treated it like a navigational chart. The kind of blueprint the original designers might have used to build it.",
  "zebra-mussel": "Since the zebra mussel is the undeniable villain of the ecosystem, I decided to give it the \"know your enemy\" treatment, turning a sharp, invasive nuisance into a surprisingly intricate, vintage-looking biology specimen.",
  "one-rats-nest": "If you look up in the Old North End you see a chaotic tangle of power lines and dangling sneakers rather than sky, so I captured that gritty texture to create a graphic that feels like an actual reminder of Btown.",
  "sunset-mountains": "Inspired by the 90s fleece era, this design simplifies the sunset over the Adirondacks into pure geometry and neon accents, looking like a vintage badge you'd find on a piece of gear that's been in your trunk for twenty years.",
  "btown-brief-logo": "I illustrated the newsletter's mascot, the black Lab (Roxy and Phoebe!) to create a character that feels both trustworthy, and like she's been delivering the local news since 1955 with those studious glasses on.",
  "burlington-gray": "While tourists chase the green summers and orange autumns, this design honors the honest, slate-gray reality of the months between, matched to the view out your window during Vermont's infamous cold, mud season.",
  "port-of-burlington": "The Lake Champlain ferry is a daily ritual for so many of us, and I wanted this to feel like something the deckhands would actually wear. Something nautical, industrial, and quietly proud.",
  "university-of-the-pit": "Taking the classic collegiate aesthetic and applying it to Burlington's most famous hole in the ground, this varsity-style memorial commemorates the decade spent waiting for a rebuild from the ashes of Church St's old mall.",
  "filing-cabinet": "The world's tallest filing cabinet is a piece of local lore that defies explanation, so I gave it the abstract wireframe treatment it deserves. While the real cabinet has many more levels, I feel like this representation hits the right notes.",
  "grade-a-twist": "The maple creemee is basically our state religion, but most shirts treat it like a joke. I wanted to give it the reverence of a vintage culinary brand.",
  "grid-of-btv": "From the Whale Tails to the flannel, this design arranges the visual vocabulary of the city into a clean grid, distilling the \"Burlington Starter Pack\" down to its most recognizable icons.",
  "champus-fossil": "I wanted to strip away the cartoon mascot vibe entirely and treat Champ like a prehistoric biology specimen, creating a shirt for true believers that feels less like a souvenir and more like a page ripped from an old field journal.",
  "sturgeon": "While Champ gets the press, the Sturgeon is the actual prehistoric dinosaur swimming in Lake Champlain (living as old as 150 years), so I designed this as a heritage piece that turns a muddy lake dweller into a fine-line natural history etching.",
  "church-cherry-st-bike": "Channeling the bold, blocky aesthetic, I turned the daily commute through the Church & Cherry intersection into a piece of stark modernist art that elevates a routine bike ride into a heroic act of transit.",
  "lake-glass": "On those rare, windless evenings, Champlain goes completely still and the sunset warps across tiny ripples like molten glass. I wanted to capture that abstract moment, cropped so tight you don't immediately know it's water, just color and texture."
};

// Decode HTML entities
function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

// Classify product type from title
function classifyProductType(title) {
  const lower = title.toLowerCase();
  
  // Check embroidered first (highest priority)
  if (lower.includes('embroidered')) {
    return 'embroidered';
  }
  
  // Check for back print indicator
  const isBack = lower.includes('back print');
  
  // Check for long sleeve
  const isLongSleeve = lower.includes('long sleeve');
  
  // Check for women's variants
  const isWomens = lower.includes("women's") || lower.includes("womens") || 
                   lower.includes("women's crop") || lower.includes("womens crop") ||
                   lower.includes("women's cut") || lower.includes("womens cut");
  
  if (isLongSleeve) {
    return isBack ? 'long_sleeve_back' : 'long_sleeve_front';
  }
  
  if (isWomens) {
    return 'womens';
  }
  
  // Default tee
  return isBack ? 'tee_back' : 'tee_front';
}

// Extract base design name from title
function extractDesignName(title) {
  let name = decodeEntities(title);
  
  // Tokens to remove (order matters for some)
  const removeTokens = [
    /\s*\|\s*embroidered/gi,
    /\bembroidered\b/gi,
    /\bback\s*print\b/gi,
    /\blong\s*sleeve\b/gi,
    /\bwomen'?s?\s*crop\b/gi,
    /\bwomen'?s?\s*cut\b/gi,
    /\bgraphic\s*tee\b/gi,
    /\bt-?shirt\b/gi,
    /\btee\b/gi,
    /\bprint\b/gi  // For "Burlington Gray Print" -> "Burlington Gray"
  ];
  
  for (const token of removeTokens) {
    name = name.replace(token, '');
  }
  
  // Clean up extra spaces and trim
  name = name.replace(/\s+/g, ' ').trim();
  
  return name;
}

// Convert design name to slug
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Normalize slug for grouping (handle variants)
function normalizeSlugForGrouping(slug, originalTitle) {
  // O.N.E. Rat's Nest and Rat's Nest should group together
  if (slug.includes('rat') && slug.includes('nest')) {
    return 'one-rats-nest';
  }
  // "Sunset T-Shirt | Embroidered" should group with "Sunset & Mountains"
  if (slug === 'sunset') {
    return 'sunset-mountains';
  }
  return slug;
}

// Process all products
function processProducts() {
  const designs = {};
  const bucketCounts = {
    tee_front: 0,
    tee_back: 0,
    long_sleeve_front: 0,
    long_sleeve_back: 0,
    womens: 0,
    embroidered: 0
  };
  const unclassified = [];
  const uniqueUrls = new Set();
  
  for (const product of rawProducts) {
    const decodedTitle = decodeEntities(product.title);
    const productType = classifyProductType(decodedTitle);
    const designName = extractDesignName(decodedTitle);
    let slug = toSlug(designName);
    const groupSlug = normalizeSlugForGrouping(slug, decodedTitle);
    
    uniqueUrls.add(product.href);
    
    // Track bucket counts
    if (bucketCounts.hasOwnProperty(productType)) {
      bucketCounts[productType]++;
    } else {
      unclassified.push({ title: decodedTitle, productType });
    }
    
    // Create design entry if needed
    if (!designs[groupSlug]) {
      // Determine display name (prefer one with O.N.E. for Rat's Nest)
      let displayName = designName;
      if (groupSlug === 'one-rats-nest' && !designName.toLowerCase().includes('o.n.e')) {
        displayName = "O.N.E. Rat's Nest";
      }
      
      designs[groupSlug] = {
        slug: groupSlug,
        name: displayName,
        image: `./${imageMapping[groupSlug] || groupSlug + '.jpg'}`,
        description: designDescriptions[groupSlug] || '',
        products: {
          tee_front: null,
          tee_back: null,
          long_sleeve_front: null,
          long_sleeve_back: null,
          womens: null,
          embroidered: null
        }
      };
    }
    
    // Add product to design
    designs[groupSlug].products[productType] = {
      href: product.href,
      title: decodedTitle,
      price: product.price
    };
  }
  
  return { designs, bucketCounts, unclassified, uniqueUrls };
}

// Run processing and audit
const { designs, bucketCounts, unclassified, uniqueUrls } = processProducts();

// Convert to array for easier iteration
const designsArray = Object.values(designs);

// Audit output
console.log('=== BTOWN BRIEF MERCH AUDIT ===');
console.log(`Total products parsed: ${rawProducts.length}`);
console.log(`Total unique product URLs: ${uniqueUrls.size}`);
console.log(`Total designs created: ${designsArray.length}`);
console.log('');
console.log('Products per bucket:');
console.log(`  tee_front: ${bucketCounts.tee_front}`);
console.log(`  tee_back: ${bucketCounts.tee_back}`);
console.log(`  long_sleeve_front: ${bucketCounts.long_sleeve_front}`);
console.log(`  long_sleeve_back: ${bucketCounts.long_sleeve_back}`);
console.log(`  womens: ${bucketCounts.womens}`);
console.log(`  embroidered: ${bucketCounts.embroidered}`);
console.log('');

if (unclassified.length > 0) {
  console.error('UNCLASSIFIED PRODUCTS:');
  unclassified.forEach(p => console.error(`  - ${p.title} (${p.productType})`));
}

// Validation
if (uniqueUrls.size !== 77) {
  console.error(`❌ VALIDATION FAILED: Expected 77 unique URLs, got ${uniqueUrls.size}`);
} else {
  console.log('✅ VALIDATION PASSED: 77 unique product URLs');
}

if (designsArray.length !== 15) {
  console.error(`❌ VALIDATION FAILED: Expected 15 designs, got ${designsArray.length}`);
} else {
  console.log('✅ VALIDATION PASSED: 15 designs');
}

console.log('');
console.log('Designs:');
designsArray.forEach(d => {
  const optionCount = Object.values(d.products).filter(p => p !== null).length;
  console.log(`  ${d.name} (${d.slug}): ${optionCount} options`);
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.DESIGNS = designsArray;
}
