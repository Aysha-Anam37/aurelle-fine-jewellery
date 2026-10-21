export type CollectionKey =
  | 'gold'
  | 'diamond'
  | 'minimal'
  | 'daily'
  | 'wedding'
  | 'antique';

export interface JewelleryItem {
  id: string;
  name: string;
  category: string;
  collection: CollectionKey;
  priceINR: number;
  description: string;
  craftDetails: string;
  dimensions: string;
  stylingTip: string;
  image: string;
  curatorTag?: string;
  featured?: boolean;
}

// Dedicated luxury assets - 100% unique per product
export const ASSETS = {
  // Campaign heroes & workshop
  goldHero: '/src/assets/images/hero_aurelle_gold_editorial_1792574387696.jpg',
  diamondHero: '/src/assets/images/hero_aurelle_diamond_editorial_1792574388116.jpg',
  atelier: '/src/assets/images/brand_aurelle_atelier_1792574388526.jpg',

  // Section 1: Gold Collection - Dedicated unique product photography
  goldRingLonde: '/src/assets/images/gold_sculptural_ring_1792575219539.jpg',
  goldChokerSoleil: '/src/assets/images/gold_fluid_choker_1792575219844.jpg',
  goldEarringsDune: '/src/assets/images/gold_faceted_huggies_1792575219652.jpg',
  goldPendantSolstice: '/src/assets/images/gold_solstice_pendant_1792575219931.jpg',
  goldCuffMiraya: '/src/assets/images/gold_contour_cuff_1792575221121.jpg',
  goldBridalChokerRani: '/src/assets/images/gold_bridal_choker_1792575221297.jpg',
  goldChainEtoile: '/src/assets/images/gold_link_chain_1792575222298.jpg',
  goldJhumkasShringar: '/src/assets/images/gold_droplet_jhumkas_1792575223290.jpg',

  // Section 2: Diamond Collection - Dedicated unique product photography
  diamondRingSolitaire: '/src/assets/images/diamond_solitaire_ring_1792575223574.jpg',
  diamondStudsStellar: '/src/assets/images/diamond_brilliant_studs_1792575224085.jpg',
  diamondPendantAurora: '/src/assets/images/diamond_teardrop_pendant_1792575224425.jpg',
  diamondNecklacePalais: '/src/assets/images/diamond_riviere_collar_1792575225562.jpg',
  diamondBraceletSymphony: '/src/assets/images/diamond_line_bracelet_1792575225044.jpg',
  diamondChokerNocturne: '/src/assets/images/diamond_cascade_choker_1792575226155.jpg',
  diamondRingPaveBand: '/src/assets/images/diamond_eternity_band_1792575226073.jpg',
  diamondEarringsPearDrop: '/src/assets/images/diamond_pear_drop_earrings_1792575226979.jpg',

  // Section 3: Minimal Collection - Dedicated unique product photography
  minimalHeroFlatlay: '/src/assets/images/minimal_collection_hero_1792576693802.jpg',
  minimalThinBandRing: '/src/assets/images/minimal_thin_band_ring_1792576694643.jpg',
  minimalBarPendant: '/src/assets/images/minimal_delicate_chain_pendant_1792576694569.jpg',
  minimalBeadedBracelet: '/src/assets/images/minimal_subtle_chain_bracelet_1792576694586.jpg',

  // Section 4: Daily Wear Collection - Dedicated unique product photography
  dailyPaperclipChain: '/src/assets/images/daily_wear_paperclip_necklace_1792576695238.jpg',
  dailyDomeRing: '/src/assets/images/daily_wear_bezel_ring_1792576695715.jpg',
  dailyStackBangles: '/src/assets/images/daily_wear_stackable_bangles_1792576696304.jpg',
  dailyHuggieHoops: '/src/assets/images/daily_wear_huggie_earrings_1792576696503.jpg',

  // Section 5: Wedding Collection - Refined, delicate bridal jewellery
  weddingLayeredHaar: '/src/assets/images/wedding_graceful_bridal_necklace_1792579895025.jpg',
  weddingChokerSuite: '/src/assets/images/wedding_delicate_bridal_choker_1792579912429.jpg',
  weddingKundanBangles: '/src/assets/images/wedding_bridal_kundan_bangles_1792576698681.jpg',
  weddingChandelierJhumkas: '/src/assets/images/wedding_bridal_statement_earrings_1792576698369.jpg',

  // Section 6: Antique Gold Collection - Dedicated botanical and floral heritage jewellery
  antiqueTempleNecklace: '/src/assets/images/antique_floral_heritage_necklace_1792579891950.jpg',
  antiqueNakshiJhumkas: '/src/assets/images/antique_floral_petal_jhumkas_1792579893229.jpg',
  antiqueTempleKada: '/src/assets/images/antique_vine_leaf_bangle_1792579894453.jpg',
  antiqueFiligreeRing: '/src/assets/images/antique_floral_filigree_ring_1792579895889.jpg',
};

// SECTION 1: GOLD JEWELLERY
export const GOLD_COLLECTION: JewelleryItem[] = [
  {
    id: 'gold-1',
    name: 'The Sculptural Wave Ring',
    category: 'Rings',
    collection: 'gold',
    priceINR: 68500,
    description: 'An undulating silhouette crafted with mirror-lapped curves that catch ambient light with an organic, liquid fluidity.',
    craftDetails: 'Molten-cast curvature with hand-buffed satin interior and high-polish exterior mirror finish.',
    dimensions: 'Band profile: 6.2mm tapering to 4.1mm',
    stylingTip: 'Wear solo on the index finger or nest against delicate slim bands.',
    image: ASSETS.goldRingLonde,
    curatorTag: 'Signature Masterpiece',
    featured: true,
  },
  {
    id: 'gold-2',
    name: 'Solar Fluid Choker',
    category: 'Chains & Necklaces',
    collection: 'gold',
    priceINR: 195000,
    description: 'A seamless torque collar that gracefully contours the collarbone, engineered for flexibility and weightless balance.',
    craftDetails: 'Hand-sculpted ergonomic torque form with discreet concealed tension clasp.',
    dimensions: 'Internal diameter: 125mm; Thickness: 5.5mm',
    stylingTip: 'Pairs effortlessly with an open-neckline silk jacket or evening bustier.',
    image: ASSETS.goldChokerSoleil,
    curatorTag: 'Iconic Masterpiece',
    featured: true,
  },
  {
    id: 'gold-3',
    name: 'Dune Faceted Huggie Earrings',
    category: 'Earrings & Studs',
    collection: 'gold',
    priceINR: 52000,
    description: 'Geometric beveling creates architectural facets that reflect warm golden light from every subtle head turn.',
    craftDetails: 'Eight hand-filed asymmetrical facets with secure click-lock posts.',
    dimensions: 'Outer hoop diameter: 14mm; Width: 4.8mm',
    stylingTip: 'A versatile essential for tailored daywear or stacked in multi-pierced ears.',
    image: ASSETS.goldEarringsDune,
    curatorTag: 'Everyday Luxury',
  },
  {
    id: 'gold-4',
    name: 'Celestial Solstice Pendant',
    category: 'Pendants',
    collection: 'gold',
    priceINR: 88000,
    description: 'A tactile circular pendant bearing hand-hammered sunray striations suspended on a delicate Venetian box chain.',
    craftDetails: 'Micro-relief engraving technique with double-sided reversible texture.',
    dimensions: 'Medallion diameter: 22mm; Chain length: 45cm + 5cm extension',
    stylingTip: 'Layer with longer fine chains or wear as a solitary poetic token.',
    image: ASSETS.goldPendantSolstice,
  },
  {
    id: 'gold-5',
    name: 'Miraya Polished Contour Cuff',
    category: 'Bracelets & Bangles',
    collection: 'gold',
    priceINR: 148000,
    description: 'A substantial architectural wrist cuff featuring sculpted wave borders that celebrate traditional metalworking.',
    craftDetails: 'Pressure-molded curved sheet metal with hand-smoothed rounded bevel edges.',
    dimensions: 'Width: 32mm; Adjustable inner circumference: 165mm',
    stylingTip: 'Stunning worn directly over a knit sleeve or bare sun-kissed wrist.',
    image: ASSETS.goldCuffMiraya,
    curatorTag: 'Statement Piece',
    featured: true,
  },
  {
    id: 'gold-6',
    name: 'Rani Heritage Bridal Choker',
    category: 'Chains & Necklaces',
    collection: 'gold',
    priceINR: 385000,
    description: 'An opulent royal design celebrating heritage bridal craftsmanship with ornate filigree mesh and handcrafted droplet fringes.',
    craftDetails: 'Intricate wire filigree fretwork with articulated beaded drops that chime softly in motion.',
    dimensions: 'Choker height: 58mm; Neckline spread: 180mm with adjustable silk cord',
    stylingTip: 'Designed as the centerpiece for wedding ceremonies, pairing with royal lehengas and heirloom sarees.',
    image: ASSETS.goldBridalChokerRani,
    curatorTag: 'Heritage Bridal',
    featured: true,
  },
  {
    id: 'gold-7',
    name: 'Starweave Braided Heritage Link Chain',
    category: 'Chains & Necklaces',
    collection: 'gold',
    priceINR: 125000,
    description: 'Substantial interlocking oval links hand-assembled in an intricate woven rhythm for timeless drape.',
    craftDetails: 'Individually linked and polished segments with heavy custom lobster clasp.',
    dimensions: 'Link gauge: 6.5mm; Overall length: 50cm',
    stylingTip: 'Worn solitary as a strong modern statement or suspended with statement pendants.',
    image: ASSETS.goldChainEtoile,
  },
  {
    id: 'gold-8',
    name: 'Shringar Filigree Droplet Jhumkas',
    category: 'Earrings & Studs',
    collection: 'gold',
    priceINR: 98000,
    description: 'Classic heritage bell earrings detailed with pierced latticework and cascading miniature golden seed bells.',
    craftDetails: 'Open-worked repoussé dome with featherweight hollow acoustics.',
    dimensions: 'Drop length: 48mm; Dome diameter: 20mm',
    stylingTip: 'Framed beautifully by swept-back hair and traditional festive silk ensembles.',
    image: ASSETS.goldJhumkasShringar,
    curatorTag: 'Heritage Craft',
  },
];

// SECTION 2: DIAMOND JEWELLERY
export const DIAMOND_COLLECTION: JewelleryItem[] = [
  {
    id: 'dia-1',
    name: 'The Aurelle Solitaire Luminary',
    category: 'Rings',
    collection: 'diamond',
    priceINR: 420000,
    description: 'A commanding round brilliant solitaire held in a knife-edge cathedral setting, revealing maximum light refraction.',
    craftDetails: 'Precision six-prong optical crown with concealed micro-pavé bridge detail.',
    dimensions: 'Center stone look: 2.25ct equivalent; Band width: 2.1mm',
    stylingTip: 'The definitive bridal solitaire; pairs seamlessly with straight or curved eternity bands.',
    image: ASSETS.diamondRingSolitaire,
    curatorTag: 'Signature Solitaire',
    featured: true,
  },
  {
    id: 'dia-2',
    name: 'Stellar Facet Brilliant Studs',
    category: 'Earrings & Studs',
    collection: 'diamond',
    priceINR: 165000,
    description: 'Flawlessly proportioned round brilliant stones in low-profile three-prong martini settings that sit flush to the earlobe.',
    craftDetails: 'Ultra-low bezel seating designed for comfort and daily wear with screw-back closures.',
    dimensions: 'Stones: 1.00ct equivalent total pair; Setting depth: 3.4mm',
    stylingTip: 'The cornerstone of any refined jewellery wardrobe, from boardroom to gala.',
    image: ASSETS.diamondStudsStellar,
    curatorTag: 'Essential Brilliant',
    featured: true,
  },
  {
    id: 'dia-3',
    name: 'Aurora Teardrop Solitaire Pendant',
    category: 'Pendants',
    collection: 'diamond',
    priceINR: 240000,
    description: 'An elongated pear-silhouette pendant suspended from an inverted diamond-set bail on an ethereal whisper chain.',
    craftDetails: 'Three-prong V-tip protective setting with micro-pavé graduated bail.',
    dimensions: 'Pendant length: 18mm; Chain length: 42cm + 3cm adjustable',
    stylingTip: 'Draws the eye down the décolletage with refined vertical grace.',
    image: ASSETS.diamondPendantAurora,
    curatorTag: 'Editorial Favorite',
  },
  {
    id: 'dia-4',
    name: 'Palais Cascading River Collar',
    category: 'Necklaces & Chokers',
    collection: 'diamond',
    priceINR: 750000,
    description: 'A seamless river of graduated round brilliant diamonds individually articulated to rest flat against the neck.',
    craftDetails: 'Three-point articulated collets with integrated safety push-tongue clasp.',
    dimensions: 'Graduation: 5.5mm center to 2.8mm terminus; Length: 41cm',
    stylingTip: 'An heirloom red-carpet collar that elevates midnight velvet or clean monochrome attire.',
    image: ASSETS.diamondNecklacePalais,
    curatorTag: 'Fine Jewellery',
    featured: true,
  },
  {
    id: 'dia-5',
    name: 'Symphony Baguette Line Bracelet',
    category: 'Bracelets',
    collection: 'diamond',
    priceINR: 320000,
    description: 'A rhythmic alternation of step-cut baguette and round brilliant stones set in a crisp architectural line.',
    craftDetails: 'Channel-prong hybrid box settings with dual-wing hidden safety latches.',
    dimensions: 'Width: 3.8mm; Wrist length: 17.5cm',
    stylingTip: 'Stack beside a luxury timepiece or wear as an exquisite single shimmer line.',
    image: ASSETS.diamondBraceletSymphony,
    curatorTag: 'Modern Classic',
  },
  {
    id: 'dia-6',
    name: 'Nocturne Fine Jewellery Cascade Choker',
    category: 'Necklaces & Chokers',
    collection: 'diamond',
    priceINR: 890000,
    description: 'An avant-garde collar featuring asymmetrical clusters of marquise and brilliant stones cascading like frozen starlight.',
    craftDetails: 'Flexible multi-hinge framework engineered to move naturally with the body.',
    dimensions: 'Collar span: 135mm; Central cascade drop: 45mm',
    stylingTip: 'Reserved for grand galas, black-tie receptions, and celebratory high-society occasions.',
    image: ASSETS.diamondChokerNocturne,
    curatorTag: 'Collector Piece',
    featured: true,
  },
  {
    id: 'dia-7',
    name: 'Pavé Eternity Crown Band',
    category: 'Rings',
    collection: 'diamond',
    priceINR: 195000,
    description: 'A complete unbroken circle of precision micro-pavé stones set in scallop-shared prongs for panoramic sparkle.',
    craftDetails: 'Continuous 360-degree pavé setting with micro-bead prongs and smooth comfort-fit interior.',
    dimensions: 'Band width: 3.2mm; Profile height: 2.0mm',
    stylingTip: 'A poignant milestone band, anniversary tribute, or high-luxury wedding ring.',
    image: ASSETS.diamondRingPaveBand,
  },
  {
    id: 'dia-8',
    name: 'Pear-Cut Luminous Drop Earrings',
    category: 'Earrings & Studs',
    collection: 'diamond',
    priceINR: 285000,
    description: 'Round brilliant studs connected by delicate knife-edge bars to mesmerizing pendeloque pear-shaped drops.',
    craftDetails: 'Articulated swing joints that amplify natural light refraction with each motion.',
    dimensions: 'Total drop: 32mm; Pear drop dimensions: 9mm x 6mm',
    stylingTip: 'Brings radiant illumination to evening portraits and gala events.',
    image: ASSETS.diamondEarringsPearDrop,
    curatorTag: 'High Luminescence',
  },
];

// SECTION 3: MINIMAL COLLECTION
export const MINIMAL_COLLECTION: JewelleryItem[] = [
  {
    id: 'min-1',
    name: 'The Aura Micro Solitaire Wire Band',
    category: 'Thin Rings',
    collection: 'minimal',
    priceINR: 32000,
    description: 'An ultra-fine 1.2mm delicate gold wire band adorned with a single flush bezel micro stone for pure understated charm.',
    craftDetails: 'Cold-forged thin gauge wire with micro-bezel protective rim and smooth inner curve.',
    dimensions: 'Profile thickness: 1.2mm; Micro stone: 0.05ct equivalent',
    stylingTip: 'The ultimate minimalist stacking ring, worn across knuckles or layered as a whisper trio.',
    image: ASSETS.minimalThinBandRing,
    curatorTag: 'Delicate Minimal',
    featured: true,
  },
  {
    id: 'min-2',
    name: 'Horizon Floating Bar Pendant',
    category: 'Fine Necklaces',
    collection: 'minimal',
    priceINR: 44000,
    description: 'A featherweight fine gold chain suspending a miniature polished geometric bar that rests gently along the collarbone.',
    craftDetails: 'Solid-cast micro bar with integrated seamless internal slide-through chain hole.',
    dimensions: 'Bar length: 16mm; Bar gauge: 2.2mm; Chain: 40cm + 5cm extension',
    stylingTip: 'Subtle enough for daily linen shirts, elegant enough for evening décolletage.',
    image: ASSETS.minimalBarPendant,
    curatorTag: 'Modernist Line',
  },
  {
    id: 'min-3',
    name: 'Satellites Beaded Thread Bracelet',
    category: 'Subtle Bracelets',
    collection: 'minimal',
    priceINR: 38000,
    description: 'Delicate micro-chain punctuated by hand-spaced golden spherical beads, designed for skin-soft weightless balance.',
    craftDetails: 'Laser-soldered micro links with diamond-cut miniature spheres and spring-ring clasp.',
    dimensions: 'Chain gauge: 0.9mm; Bead diameter: 2.5mm; Length: 17cm',
    stylingTip: 'Moves like a second skin; pairs seamlessly with fine wristwatches.',
    image: ASSETS.minimalBeadedBracelet,
    curatorTag: 'Weightless Form',
  },
  {
    id: 'min-4',
    name: 'The Travertine Minimal Suite',
    category: 'Curated Sets',
    collection: 'minimal',
    priceINR: 98000,
    description: 'A curated minimalist trio featuring the wire band, whisper chain disc pendant, and micro stud pair in warm gold harmony.',
    craftDetails: 'Coordinated hand-polished satin finish across all three matching pieces.',
    dimensions: 'Pendant disc: 8mm; Ring: 1.3mm; Studs: 3mm diameter',
    stylingTip: 'Complete everyday capsule for the discerning minimalist.',
    image: ASSETS.minimalHeroFlatlay,
    curatorTag: 'Capsule Set',
    featured: true,
  },
];

// SECTION 4: DAILY WEAR COLLECTION
export const DAILY_WEAR_COLLECTION: JewelleryItem[] = [
  {
    id: 'daily-1',
    name: 'Soham Modern Paperclip Link Necklace',
    category: 'Everyday Necklaces',
    collection: 'daily',
    priceINR: 72000,
    description: 'Lightweight elongated open links hand-assembled for everyday ease, transitioning effortlessly from desk to evening dinner.',
    craftDetails: 'Hollow-core drawn wire engineering for featherweight comfort without sacrificing visual presence.',
    dimensions: 'Link size: 14mm x 4.5mm; Overall necklace length: 45cm',
    stylingTip: 'Wear alone with relaxed tailoring or clip charms into individual links.',
    image: ASSETS.dailyPaperclipChain,
    curatorTag: 'Everyday Essential',
    featured: true,
  },
  {
    id: 'daily-2',
    name: 'Courbe Polished Dome Ring',
    category: 'Daily Rings',
    collection: 'daily',
    priceINR: 48000,
    description: 'Smooth, ergonomic domed band with a low-profile flush-set brilliant stone, snag-free for active daily routines.',
    craftDetails: 'Gypsy/flush setting protects stone girdle from daily impact; comfort-fit rounded shank.',
    dimensions: 'Dome height: 4.5mm; Top width: 8.5mm tapering to 4mm',
    stylingTip: 'An indispensable thumb or index statement piece built to endure everyday wear.',
    image: ASSETS.dailyDomeRing,
    curatorTag: 'Modern Classic',
  },
  {
    id: 'daily-3',
    name: 'Duo Stackable Everyday Bangles',
    category: 'Everyday Bangles',
    collection: 'daily',
    priceINR: 86000,
    description: 'A pairing of slim solid gold bangles with smooth rounded edges, crafted for effortless chime and everyday stackability.',
    craftDetails: 'Seamless spun tube construction with high-tensile spring resilience.',
    dimensions: 'Bangle width: 3.2mm each; Inner diameter: 60mm (Standard size 2.4)',
    stylingTip: 'Classic wrist essentials that complement casual knits, silk shirts, and business suits.',
    image: ASSETS.dailyStackBangles,
    curatorTag: 'Stackable Pair',
    featured: true,
  },
  {
    id: 'daily-4',
    name: 'Aura Everyday Rounded Huggies',
    category: 'Everyday Earrings',
    collection: 'daily',
    priceINR: 39000,
    description: 'Classic hollow-form rounded gold huggie hoops with secure comfort click-posts for effortless 24/7 wear.',
    craftDetails: 'Precision recessed hinge mechanism and rounded interior edges that prevent hair snagging.',
    dimensions: 'Outer diameter: 15mm; Tube thickness: 3.8mm',
    stylingTip: 'Sleep-in, swim-in, live-in huggies that serve as the foundation of any ear stack.',
    image: ASSETS.dailyHuggieHoops,
    curatorTag: 'Live-In Luxury',
  },
];

// SECTION 5: WEDDING COLLECTION
export const WEDDING_COLLECTION: JewelleryItem[] = [
  {
    id: 'wed-1',
    name: 'Aanya Graceful Tiered Bridal Necklace',
    category: 'Bridal Necklaces',
    collection: 'wedding',
    priceINR: 485000,
    description: 'An airy, graceful two-tier bridal necklace featuring delicate gold chains punctuated with luminous natural seed pearls and restrained bezel-set stones.',
    craftDetails: 'Delicate articulated link engineering with protective bezel stone mounts and hand-strung natural seed pearl drapes.',
    dimensions: 'Tier 1 length: 42cm; Tier 2 length: 48cm with 5cm extension drape',
    stylingTip: 'Drapes with romantic lightness across the collarbone, complementing modern pastel, ivory, and blush wedding lehengas.',
    image: ASSETS.weddingLayeredHaar,
    curatorTag: 'Graceful Bridal',
    featured: true,
  },
  {
    id: 'wed-2',
    name: 'Meera Delicate Gold Bridal Choker',
    category: 'Bridal Chokers',
    collection: 'wedding',
    priceINR: 395000,
    description: 'An understated bridal collar handcrafted in openwork gold filigree, finished with a subtle whisper-light fringe of natural micro-pearl droplets.',
    craftDetails: 'Fine pierced gold openwork lattice with flexible comfort lining and micro-pearl prong mounts.',
    dimensions: 'Choker height: 26mm; Inner collar span: 125mm; Pearl droplet fringe: 6mm',
    stylingTip: 'Brings refined sophistication without overwhelming the neckline, pairing effortlessly with plunging and sweetheart necklines.',
    image: ASSETS.weddingChokerSuite,
    curatorTag: 'Understated Bridal',
  },
  {
    id: 'wed-3',
    name: 'Meenakari Royal Bridal Kada Pair',
    category: 'Bridal Bangles',
    collection: 'wedding',
    priceINR: 450000,
    description: 'Pair of elegant bridal openable kadas adorned with intricate royal floral meenakari enamel and raised kundan stonework.',
    craftDetails: 'Screw-lock side hinge with enamel floral interior and natural uncut polki surrounds.',
    dimensions: 'Width: 38mm; Inner circumference: 175mm (Fit size 2.4 - 2.6)',
    stylingTip: 'Flank traditional glass or red chooda bangles with these monumental heirloom kadas.',
    image: ASSETS.weddingKundanBangles,
    curatorTag: 'Heirloom Kada',
  },
  {
    id: 'wed-4',
    name: 'Noor Chandelier Bridal Jhumkas',
    category: 'Statement Earrings',
    collection: 'wedding',
    priceINR: 240000,
    description: 'Grand chandelier jhumkas with emerald and ruby floral studs and multiple tiers of natural seed pearl fringes.',
    craftDetails: 'Articulated multi-tier filigree cages with weight-distributing ear-support chain loops.',
    dimensions: 'Total earring drop: 82mm; Dome span: 28mm',
    stylingTip: 'Frame your bridal portrait with dramatic movement and royal resonance.',
    image: ASSETS.weddingChandelierJhumkas,
    curatorTag: 'Royal Statement',
  },
];

// SECTION 6: ANTIQUE GOLD COLLECTION
export const ANTIQUE_GOLD_COLLECTION: JewelleryItem[] = [
  {
    id: 'ant-1',
    name: 'Padma Floral Antique Heritage Necklace',
    category: 'Heritage Necklaces',
    collection: 'antique',
    priceINR: 495000,
    description: 'An exquisite antique matte-gold necklace meticulously chiseled with blossoming floral rosettes, delicate trailing vines, and layered botanical leaf motifs.',
    craftDetails: 'Hand-chiseled repoussé botanical openwork with aged matte patina and oxidized shadow relief.',
    dimensions: 'Necklace length: 44cm; Central floral pendant: 48mm x 42mm',
    stylingTip: 'A refined botanical heirloom that pairs majestically with rich handloom Kanjeevaram and Banarasi silks.',
    image: ASSETS.antiqueTempleNecklace,
    curatorTag: 'Botanical Heritage',
    featured: true,
  },
  {
    id: 'ant-2',
    name: 'Pushpa Petal Antique Gold Jhumkas',
    category: 'Antique Earrings',
    collection: 'antique',
    priceINR: 155000,
    description: 'Sculpted antique gold bell jhumkas crowned with delicate multi-layered flower petals and finished with rhythmic golden micro-bead droplets.',
    craftDetails: 'Repoussé floral petal cap with hand-stippled leaf veins and warm oxidized antique gold finish.',
    dimensions: 'Drop length: 50mm; Bell diameter: 24mm',
    stylingTip: 'Framed to catch soft candlelight, these botanical jhumkas bring subtle, timeless poise.',
    image: ASSETS.antiqueNakshiJhumkas,
    curatorTag: 'Floral Petal Art',
  },
  {
    id: 'ant-3',
    name: 'Vana Botanical Vine Antique Kada',
    category: 'Antique Bangles',
    collection: 'antique',
    priceINR: 285000,
    description: 'Heavy antique gold kada adorned with deeply hand-engraved curling vine tendrils, delicate foliate leaves, and miniature blooming buds.',
    craftDetails: 'Solid-core forged gold with continuous hand-carved botanical relief and aged matte patina.',
    dimensions: 'Bangle width: 28mm; Inner diameter: 58mm (Comfort fit size 2.4 - 2.6)',
    stylingTip: 'Wear singularly on the wrist as a commanding yet graceful testament to nature-inspired metalcraft.',
    image: ASSETS.antiqueTempleKada,
    curatorTag: 'Aged Botanical Patina',
  },
  {
    id: 'ant-4',
    name: 'Kusuma Floral Filigree Heritage Ring',
    category: 'Heritage Rings',
    collection: 'antique',
    priceINR: 78000,
    description: 'Statement cocktail ring featuring an intricate pierced filigree floral rosette flanked by hand-engraved leaf shoulders in aged antique gold.',
    craftDetails: 'Openwork wire filigree rosette with micro-beaded center and burnished leaf contours.',
    dimensions: 'Rosette diameter: 22mm; Tapered band: 4mm',
    stylingTip: 'An artisanal conversation piece celebrating the delicate romance of historical Indian botanical goldsmithing.',
    image: ASSETS.antiqueFiligreeRing,
    curatorTag: 'Artisan Filigree',
  },
];

export const ALL_COLLECTIONS: {
  key: CollectionKey;
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: JewelleryItem[];
  theme: {
    bg: string;
    border: string;
    accent: string;
    tag: string;
  };
}[] = [
  {
    key: 'gold',
    id: 'gold-jewellery',
    name: 'The Golden Collection',
    tagline: 'A timeless expression of elegance.',
    description:
      'Deep espresso tones cradle the warm, reflective radiance of molten silhouettes. Each creation honors ancient casting and contemporary balance with pure polished fluidity.',
    items: GOLD_COLLECTION,
    theme: {
      bg: '#120d0b',
      border: '#281c15',
      accent: '#c69f58',
      tag: 'Section 01 · Aurelle Fine Metalwork',
    },
  },
  {
    key: 'diamond',
    id: 'diamond-jewellery',
    name: 'The Art of Diamonds',
    tagline: 'Brilliance, beautifully understated.',
    description:
      'Crisp geometric facets and refined studio lighting set against velvety dark chocolate backgrounds. Diamonds captured in their genuine optical fire—deliberate, restrained, and eternal.',
    items: DIAMOND_COLLECTION,
    theme: {
      bg: '#0c0a0c',
      border: '#241e24',
      accent: '#cbd5e1',
      tag: 'Section 02 · Aurelle Fine Jewellery',
    },
  },
  {
    key: 'minimal',
    id: 'minimal-jewellery',
    name: 'The Minimal Collection',
    tagline: 'Pure lines, weightless grace.',
    description:
      'Understated and architectural. Delicate gold wire bands, whisper chains, and micro floating accents designed for serene, modern restraint.',
    items: MINIMAL_COLLECTION,
    theme: {
      bg: '#110e0c',
      border: '#2b211a',
      accent: '#dec595',
      tag: 'Section 03 · Architectural Understatement',
    },
  },
  {
    key: 'daily',
    id: 'daily-wear-jewellery',
    name: 'The Daily Wear Collection',
    tagline: 'Effortless luxury for everyday rituals.',
    description:
      'Engineered for active, contemporary life without compromising on precious craft. Snag-free dome rings, lightweight paperclip chains, and live-in huggie hoops.',
    items: DAILY_WEAR_COLLECTION,
    theme: {
      bg: '#140f0c',
      border: '#2f2018',
      accent: '#c69f58',
      tag: 'Section 04 · Everyday Elegance',
    },
  },
  {
    key: 'wedding',
    id: 'wedding-jewellery',
    name: 'The Heritage Wedding Collection',
    tagline: 'Refined bridal grace for sacred beginnings.',
    description:
      'Graceful Indian bridal heirlooms uniting refined gold craftsmanship, delicate chokers, luminous natural pearls, and understated wedding jewelry designed for modern bridal elegance.',
    items: WEDDING_COLLECTION,
    theme: {
      bg: '#150d0a',
      border: '#331c13',
      accent: '#dfb870',
      tag: 'Section 05 · Graceful Bridal Jewellery',
    },
  },
  {
    key: 'antique',
    id: 'antique-gold-jewellery',
    name: 'The Antique Gold Collection',
    tagline: 'Aged botanical artistry and timeless Indian heritage.',
    description:
      'Muted, rich, aged-gold patinas celebrated through intricate botanical engravings, delicate flower-petal detailing, and graceful leaf and vine filigree inspired by historical Indian goldsmithing.',
    items: ANTIQUE_GOLD_COLLECTION,
    theme: {
      bg: '#120c08',
      border: '#2a1a10',
      accent: '#d4af37',
      tag: 'Section 06 · Sacred Botanical Heritage',
    },
  },
];

export const GOLD_CATEGORIES = [
  'All',
  'Rings',
  'Chains & Necklaces',
  'Earrings & Studs',
  'Pendants',
  'Bracelets & Bangles',
];

export const DIAMOND_CATEGORIES = [
  'All',
  'Rings',
  'Earrings & Studs',
  'Pendants',
  'Necklaces & Chokers',
  'Bracelets',
];

export const BRAND_STORY = {
  name: 'Aurelle',
  motto: 'Fine Jewellery & Precious Artistry',
  tagline: 'Where molten beauty meets celestial brilliance',
  description:
    'Founded on the dual pillars of warm heritage craftsmanship and precision optical radiance, Aurelle crafts conceptual pieces designed to outlast generations. Every creation is an intimate dialogue between master metalsmiths and the purest light.',
};
