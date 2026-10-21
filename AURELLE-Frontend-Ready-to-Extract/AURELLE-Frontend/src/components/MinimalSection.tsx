import React from 'react';
import { JewelleryItem, MINIMAL_COLLECTION, ASSETS } from '../data/jewelleryData';
import { Heart, Eye, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

interface MinimalSectionProps {
  onSelectItem: (item: JewelleryItem) => void;
  onToggleWishlist: (item: JewelleryItem) => void;
  isWishlisted: (id: string) => boolean;
}

export const MinimalSection: React.FC<MinimalSectionProps> = ({
  onSelectItem,
  onToggleWishlist,
  isWishlisted,
}) => {
  const featuredPiece =
    MINIMAL_COLLECTION.find((item) => item.id === 'min-4') || MINIMAL_COLLECTION[0];

  return (
    <section
      id="minimal-jewellery"
      className="relative py-20 sm:py-28 bg-[#100d0b] text-[#f7f3eb] border-b border-[#281c15] overflow-hidden"
    >
      {/* Ambient serene warm champagne & soft obsidian atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#c69f58]/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 -left-32 w-[28rem] h-[28rem] bg-[#ad8242]/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#291d17_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2c1f18]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#dec595] font-medium mb-3">
              <span className="w-6 h-px bg-[#c69f58]" />
              <span>Section 03 · Architectural Understatement</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#fcf9f2] mb-3">
              The Minimal Collection
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#dec595] font-light">
              “Pure lines, weightless grace.”
            </p>
          </div>

          <div className="max-w-md text-sm text-[#baa99b] leading-relaxed">
            <p>
              Understated and architectural. Delicate gold wire bands, whisper chains, and micro floating accents designed for serene, modern restraint.
            </p>
            <div className="mt-2 text-xs text-[#a8978a] flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c69f58]" />
              <span>Whisper-thin gauges · Unencumbered daily elegance</span>
            </div>
          </div>
        </div>

        {/* Editorial Feature Spotlight: Travertine Minimal Suite */}
        <div className="mt-12 mb-16 bg-[#16110e] border border-[#2f2119] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#0c0908] aspect-[16/10]">
            <img
              src={ASSETS.minimalHeroFlatlay}
              alt="The Travertine Minimal Suite Editorial Still"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a08]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#e8dbcc]">
              <span className="font-serif italic tracking-wide">Captured on warm travertine stone</span>
              <span className="text-[#dec595] uppercase tracking-widest text-[11px]">Curated Suite</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#dec595] mb-2 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#c69f58]" />
                <span>Editorial Spotlight</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#fbf7ee] mb-4">
                {featuredPiece.name}
              </h3>
              <p className="text-sm text-[#c1b2a5] leading-relaxed mb-6 font-light">
                {featuredPiece.description} Each piece is stripped of excess, letting the purity of precious warm gold speak in tranquil, geometric balance.
              </p>

              <div className="space-y-2.5 py-4 border-y border-[#2c1f18] text-xs text-[#b8a798]">
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
                  <span className="text-[#dec595] text-right">{featuredPiece.stylingTip}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#a8978a]">
                  Illustrative Price
                </span>
                <span className="text-2xl font-serif text-[#fbf7ee] tabular-nums font-medium">
                  ₹{featuredPiece.priceINR.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(featuredPiece)}
                  aria-label="Wishlist featured minimal suite"
                  className={`p-2.5 border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] ${
                    isWishlisted(featuredPiece.id)
                      ? 'border-[#c69f58] bg-[#c69f58]/20 text-[#dec595]'
                      : 'border-[#38261c] text-[#baa89b] hover:border-[#c69f58] hover:text-[#f8f5ee]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(featuredPiece.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onSelectItem(featuredPiece)}
                  className="px-4 py-2.5 bg-[#c69f58] hover:bg-[#d4ab63] text-[#0d0908] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
                >
                  <span>Examine Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: All 4 Minimal Pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINIMAL_COLLECTION.map((item) => {
            const wish = isWishlisted(item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-[#15100d] border border-[#2c1f18] flex flex-col justify-between transition-all duration-300 hover:border-[#c69f58]/60 hover:shadow-xl hover:shadow-[#c69f58]/5 hover:-translate-y-0.5"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#0c0908]">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category} in The Minimal Collection`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15100d] via-transparent to-transparent opacity-60" />

                  {/* Curator Tag */}
                  {item.curatorTag && (
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#dec595] bg-[#0c0908]/85 backdrop-blur-sm px-2 py-0.5 border border-[#302118]">
                      {item.curatorTag}
                    </div>
                  )}

                  {/* Action buttons on hover */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onToggleWishlist(item)}
                      aria-label={`Wishlist ${item.name}`}
                      className={`p-2 backdrop-blur-md transition-colors cursor-pointer border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] ${
                        wish
                          ? 'bg-[#c69f58] text-[#0d0908] border-[#c69f58]'
                          : 'bg-[#15100d]/90 text-[#baa89b] border-[#38261c] hover:text-[#dec595] hover:border-[#c69f58]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectItem(item)}
                      aria-label={`Quick view ${item.name}`}
                      className="p-2 bg-[#15100d]/90 backdrop-blur-md text-[#baa89b] hover:text-[#dec595] border border-[#38261c] hover:border-[#c69f58] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
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
                      <span className="text-[#dec595]">Minimal Collection</span>
                    </div>

                    <h4 className="text-lg font-serif text-[#faf6ed] group-hover:text-[#dec595] transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-xs text-[#baa99b] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-[#261913] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#9f8e82]">
                        Illustrative Price
                      </span>
                      <span className="text-base font-serif text-[#f6efe4] tabular-nums font-medium">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#dec595] hover:text-[#f8f5ee] flex items-center gap-1 group/btn cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
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
        <div className="mt-12 text-center text-xs text-[#9f8f83] max-w-2xl mx-auto border-t border-[#261913] pt-6 font-light">
          Illustrative conceptual prices in Indian Rupees (₹). Pieces are showcased as conceptual jewellery designs for the Aurelle digital salon. No metal purity claims are made.
        </div>
      </div>
    </section>
  );
};
