import React from 'react';
import { JewelleryItem, WEDDING_COLLECTION, ASSETS } from '../data/jewelleryData';
import { Heart, Eye, ArrowUpRight, Sparkles, Crown } from 'lucide-react';

interface WeddingSectionProps {
  onSelectItem: (item: JewelleryItem) => void;
  onToggleWishlist: (item: JewelleryItem) => void;
  isWishlisted: (id: string) => boolean;
}

export const WeddingSection: React.FC<WeddingSectionProps> = ({
  onSelectItem,
  onToggleWishlist,
  isWishlisted,
}) => {
  const featuredPiece =
    WEDDING_COLLECTION.find((item) => item.id === 'wed-1') || WEDDING_COLLECTION[0];

  return (
    <section
      id="wedding-jewellery"
      className="relative py-20 sm:py-28 bg-[#150d0a] text-[#fbf7f0] border-b border-[#301c13] overflow-hidden"
    >
      {/* Ambient royal crimson-tinged warm gold atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#dfb870]/8 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -left-32 w-[32rem] h-[32rem] bg-[#8c3220]/7 blur-[170px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#331c13_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#331c13]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#dfb870] font-medium mb-3">
              <span className="w-6 h-px bg-[#dfb870]" />
              <span>Section 05 · Graceful Bridal Jewellery</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#ffffff] mb-3">
              The Heritage Wedding Collection
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#dfb870] font-light">
              “Refined bridal grace for sacred beginnings.”
            </p>
          </div>

          <div className="max-w-md text-sm text-[#baa99b] leading-relaxed">
            <p>
              Graceful Indian bridal heirlooms uniting refined gold craftsmanship, delicate chokers, luminous natural pearls, and understated wedding jewelry designed for modern bridal elegance.
            </p>
            <div className="mt-2 text-xs text-[#a8978a] flex items-center gap-2">
              <Crown className="w-3.5 h-3.5 text-[#dfb870]" />
              <span>Refined Bridal Craftsmanship · Understated Wedding Luxury</span>
            </div>
          </div>
        </div>

        {/* Editorial Feature Spotlight: Aanya Graceful Tiered Bridal Necklace */}
        <div className="mt-12 mb-16 bg-[#1c110c] border border-[#3d2218] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#0e0806] aspect-[16/10]">
            <img
              src={featuredPiece.image}
              alt="Aanya Graceful Tiered Bridal Necklace Editorial Still"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0806]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#e8dbcc]">
              <span className="font-serif italic tracking-wide">Refined two-tier delicate gold chains with natural seed pearls</span>
              <span className="text-[#dfb870] uppercase tracking-widest text-[11px]">Graceful Bridal</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#dfb870] mb-2 font-medium flex items-center gap-1.5">
                <Crown className="w-3 h-3 text-[#dfb870]" />
                <span>Bridal Masterpiece</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#ffffff] mb-4">
                {featuredPiece.name}
              </h3>
              <p className="text-sm text-[#c4b5a8] leading-relaxed mb-6 font-light">
                {featuredPiece.description} Articulated fine chains and hand-placed natural seed pearls catch ambient light with effortless romance and weightless balance.
              </p>

              <div className="space-y-2.5 py-4 border-y border-[#331c13] text-xs text-[#b8a798]">
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
                  <span className="text-[#dfb870] text-right">{featuredPiece.stylingTip}</span>
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
                  aria-label="Wishlist featured bridal piece"
                  className={`p-2.5 border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dfb870] ${
                    isWishlisted(featuredPiece.id)
                      ? 'border-[#dfb870] bg-[#dfb870]/20 text-[#dfb870]'
                      : 'border-[#3d2218] text-[#baa89b] hover:border-[#dfb870] hover:text-[#f8f5ee]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(featuredPiece.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onSelectItem(featuredPiece)}
                  className="px-4 py-2.5 bg-[#dfb870] hover:bg-[#ebd095] text-[#0d0806] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f5eedc]"
                >
                  <span>Examine Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: All 4 Wedding Pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEDDING_COLLECTION.map((item) => {
            const wish = isWishlisted(item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-[#180f0b] border border-[#301c13] flex flex-col justify-between transition-all duration-300 hover:border-[#dfb870]/60 hover:shadow-xl hover:shadow-[#dfb870]/5 hover:-translate-y-0.5"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#0d0705]">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category} in The Heritage Wedding Collection`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180f0b] via-transparent to-transparent opacity-60" />

                  {/* Curator Tag */}
                  {item.curatorTag && (
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#dfb870] bg-[#0d0705]/85 backdrop-blur-sm px-2 py-0.5 border border-[#381f15]">
                      {item.curatorTag}
                    </div>
                  )}

                  {/* Action buttons on hover */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onToggleWishlist(item)}
                      aria-label={`Wishlist ${item.name}`}
                      className={`p-2 backdrop-blur-md transition-colors cursor-pointer border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dfb870] ${
                        wish
                          ? 'bg-[#dfb870] text-[#0d0806] border-[#dfb870]'
                          : 'bg-[#180f0b]/90 text-[#baa89b] border-[#38261c] hover:text-[#dfb870] hover:border-[#dfb870]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectItem(item)}
                      aria-label={`Quick view ${item.name}`}
                      className="p-2 bg-[#180f0b]/90 backdrop-blur-md text-[#baa89b] hover:text-[#dfb870] border border-[#38261c] hover:border-[#dfb870] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dfb870]"
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
                      <span className="text-[#dfb870]">Bridal Suite</span>
                    </div>

                    <h4 className="text-lg font-serif text-[#faf6ed] group-hover:text-[#dfb870] transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-xs text-[#baa99b] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-[#29170f] flex items-center justify-between">
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
                      className="text-xs uppercase tracking-wider font-semibold text-[#dfb870] hover:text-[#ffffff] flex items-center gap-1 group/btn cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dfb870]"
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
        <div className="mt-12 text-center text-xs text-[#9f8f83] max-w-2xl mx-auto border-t border-[#29170f] pt-6 font-light">
          Illustrative conceptual prices in Indian Rupees (₹). Pieces are showcased as conceptual jewellery designs for the Aurelle digital salon. No metal purity claims are made.
        </div>
      </div>
    </section>
  );
};
