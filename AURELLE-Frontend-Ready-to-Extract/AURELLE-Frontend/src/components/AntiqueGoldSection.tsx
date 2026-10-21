import React from 'react';
import { JewelleryItem, ANTIQUE_GOLD_COLLECTION, ASSETS } from '../data/jewelleryData';
import { Heart, Eye, ArrowUpRight, Sparkles, Landmark } from 'lucide-react';

interface AntiqueGoldSectionProps {
  onSelectItem: (item: JewelleryItem) => void;
  onToggleWishlist: (item: JewelleryItem) => void;
  isWishlisted: (id: string) => boolean;
}

export const AntiqueGoldSection: React.FC<AntiqueGoldSectionProps> = ({
  onSelectItem,
  onToggleWishlist,
  isWishlisted,
}) => {
  const featuredPiece =
    ANTIQUE_GOLD_COLLECTION.find((item) => item.id === 'ant-1') || ANTIQUE_GOLD_COLLECTION[0];

  return (
    <section
      id="antique-gold-jewellery"
      className="relative py-20 sm:py-28 bg-[#120c08] text-[#fbf7ee] border-b border-[#2b1a10] overflow-hidden"
    >
      {/* Ambient aged bronze-gold temple atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#d4af37]/7 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-[#8a6820]/6 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#2a1a10_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2b1a10]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
              <span className="w-6 h-px bg-[#d4af37]" />
              <span>Section 06 · Sacred Botanical Heritage</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#fdfbf7] mb-3">
              The Antique Gold Collection
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#d4af37] font-light">
              “Aged botanical artistry and timeless Indian heritage.”
            </p>
          </div>

          <div className="max-w-md text-sm text-[#baa99b] leading-relaxed">
            <p>
              Muted, rich, aged-gold patinas celebrated through intricate botanical engravings, delicate flower-petal detailing, and graceful leaf and vine filigree inspired by historical Indian goldsmithing.
            </p>
            <div className="mt-2 text-xs text-[#a8978a] flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Intricate Botanical Relief · Aged Floral Heritage</span>
            </div>
          </div>
        </div>

        {/* Editorial Feature Spotlight: Padma Floral Antique Heritage Necklace */}
        <div className="mt-12 mb-16 bg-[#18100a] border border-[#382316] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#0a0705] aspect-[16/10]">
            <img
              src={featuredPiece.image}
              alt="Padma Floral Antique Heritage Necklace Editorial Still"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#e8dbcc]">
              <span className="font-serif italic tracking-wide">Hand-chiseled botanical floral repoussé with antique matte finish</span>
              <span className="text-[#d4af37] uppercase tracking-widest text-[11px]">Botanical Heirloom</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-2 font-medium flex items-center gap-1.5">
                <Landmark className="w-3 h-3 text-[#d4af37]" />
                <span>Botanical Heritage Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#ffffff] mb-4">
                {featuredPiece.name}
              </h3>
              <p className="text-sm text-[#c4b5a8] leading-relaxed mb-6 font-light">
                {featuredPiece.description} Chiseled using centuries-old repoussé techniques, each floral petal and vine is finished in an authentic antique matte tone with natural oxidized shadows.
              </p>

              <div className="space-y-2.5 py-4 border-y border-[#2b1a10] text-xs text-[#b8a798]">
                <div className="flex justify-between">
                  <span className="text-[#a08f82]">Craftsmanship:</span>
                  <span className="text-[#eddcc0] text-right">{featuredPiece.craftDetails}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a08f82]">Dimensions:</span>
                  <span className="text-[#eddcc0]">{featuredPiece.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a08f82]">Styling Note:</span>
                  <span className="text-[#d4af37] text-right">{featuredPiece.stylingTip}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#a8978a]">
                  Illustrative Price
                </span>
                <span className="text-2xl font-serif text-[#ffffff] tabular-nums font-medium">
                  ₹{featuredPiece.priceINR.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(featuredPiece)}
                  aria-label="Wishlist featured antique piece"
                  className={`p-2.5 border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] ${
                    isWishlisted(featuredPiece.id)
                      ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]'
                      : 'border-[#382316] text-[#baa89b] hover:border-[#d4af37] hover:text-[#f8f5ee]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(featuredPiece.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onSelectItem(featuredPiece)}
                  className="px-4 py-2.5 bg-[#d4af37] hover:bg-[#e4bf47] text-[#0d0905] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f5eedc]"
                >
                  <span>Examine Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: All 4 Antique Pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANTIQUE_GOLD_COLLECTION.map((item) => {
            const wish = isWishlisted(item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-[#170f09] border border-[#2b1a10] flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-xl hover:shadow-[#d4af37]/5 hover:-translate-y-0.5"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#090604]">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category} in The Antique Gold Collection`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170f09] via-transparent to-transparent opacity-60" />

                  {/* Curator Tag */}
                  {item.curatorTag && (
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#090604]/85 backdrop-blur-sm px-2 py-0.5 border border-[#331f13]">
                      {item.curatorTag}
                    </div>
                  )}

                  {/* Action buttons on hover */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onToggleWishlist(item)}
                      aria-label={`Wishlist ${item.name}`}
                      className={`p-2 backdrop-blur-md transition-colors cursor-pointer border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] ${
                        wish
                          ? 'bg-[#d4af37] text-[#0d0905] border-[#d4af37]'
                          : 'bg-[#170f09]/90 text-[#baa89b] border-[#38261c] hover:text-[#d4af37] hover:border-[#d4af37]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectItem(item)}
                      aria-label={`Quick view ${item.name}`}
                      className="p-2 bg-[#170f09]/90 backdrop-blur-md text-[#baa89b] hover:text-[#d4af37] border border-[#38261c] hover:border-[#d4af37] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#a8978a] mb-1.5">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#d4af37]">Antique Gold</span>
                    </div>

                    <h4 className="text-lg font-serif text-[#faf6ed] group-hover:text-[#d4af37] transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-xs text-[#baa99b] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-[#26170e] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#9f8e82]">
                        Illustrative Price
                      </span>
                      <span className="text-base font-serif text-[#ffffff] tabular-nums font-medium">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-[#ffffff] flex items-center gap-1 group/btn cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet disclaimer and collection note */}
        <div className="mt-12 text-center text-xs text-[#9f8f83] max-w-2xl mx-auto border-t border-[#26170e] pt-6 font-light">
          Illustrative conceptual prices in Indian Rupees (₹). Pieces are showcased as conceptual jewellery designs for the Aurelle digital salon. No metal purity claims are made.
        </div>
      </div>
    </section>
  );
};
