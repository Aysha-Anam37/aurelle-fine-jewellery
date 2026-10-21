import React, { useState } from 'react';
import { JewelleryItem, DIAMOND_COLLECTION, DIAMOND_CATEGORIES, ASSETS } from '../data/jewelleryData';
import { Heart, Eye, ArrowUpRight, Diamond } from 'lucide-react';

interface DiamondSectionProps {
  onSelectItem: (item: JewelleryItem) => void;
  onToggleWishlist: (item: JewelleryItem) => void;
  isWishlisted: (id: string) => boolean;
}

export const DiamondSection: React.FC<DiamondSectionProps> = ({
  onSelectItem,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? DIAMOND_COLLECTION
      : DIAMOND_COLLECTION.filter((item) => item.category === selectedCategory);

  const featuredPiece =
    DIAMOND_COLLECTION.find((item) => item.id === 'dia-1') || DIAMOND_COLLECTION[0];

  return (
    <section
      id="diamond-jewellery"
      className="relative py-20 sm:py-28 bg-[#0c0a0c] text-[#f5f5f7] border-b border-[#241e24] overflow-hidden"
    >
      {/* Ambient cool silver-ivory & deep cocoa lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#cbd5e1]/6 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 -left-32 w-[28rem] h-[28rem] bg-[#94a3b8]/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#201920_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#271f28]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#e2e8f0] font-medium mb-3">
              <span className="w-6 h-px bg-[#cbd5e1]" />
              <span>Section 02 · Aurelle Fine Jewellery</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#ffffff] mb-3">
              The Art of Diamonds
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-[#e2e8f0] font-light">
              “Brilliance, beautifully understated.”
            </p>
          </div>

          <div className="max-w-md text-sm text-[#c5bdc8] leading-relaxed">
            <p>
              Crisp geometric facets and refined studio lighting set against velvety dark chocolate backgrounds. Diamonds captured in their genuine optical fire—deliberate, restrained, and eternal.
            </p>
            <div className="mt-2 text-xs text-[#a99fa9] flex items-center gap-2">
              <Diamond className="w-3.5 h-3.5 text-[#e2e8f0]" />
              <span>Realistic optical facets · Conceptual demonstration designs</span>
            </div>
          </div>
        </div>

        {/* Editorial Feature Spotlight: Aurelle Solitaire Luminary */}
        <div className="mt-12 mb-16 bg-[#130f14] border border-[#2e2430] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 relative group overflow-hidden bg-[#0a080a] aspect-[16/10]">
            <img
              src={ASSETS.diamondHero}
              alt="The Aurelle Solitaire Luminary Still"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a080a]/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f1f5f9]">
              <span className="font-serif italic tracking-wide">Macro optical dispersion and cathedral mount</span>
              <span className="text-[#cbd5e1] uppercase tracking-widest text-[11px]">Signature Solitaire</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#cbd5e1] mb-2 font-medium">
                Fine Jewellery Solitaire
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#ffffff] mb-4">
                {featuredPiece.name}
              </h3>
              <p className="text-sm text-[#c5bdc8] leading-relaxed mb-6 font-light">
                {featuredPiece.description} Calibrated to catch the slightest hint of natural daylight, evoking crystalline purity without theatrical exaggeration.
              </p>

              <div className="space-y-2.5 py-4 border-y border-[#281f2a] text-xs text-[#c5bdc8]">
                <div className="flex justify-between">
                  <span className="text-[#988f9a]">Prong Architecture:</span>
                  <span className="text-[#f1f5f9] text-right">{featuredPiece.craftDetails}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#988f9a]">Specifications:</span>
                  <span className="text-[#f1f5f9]">{featuredPiece.dimensions}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#988f9a]">
                  Illustrative Price
                </span>
                <span className="text-2xl font-serif text-[#ffffff] tabular-nums font-medium">
                  ₹{featuredPiece.priceINR.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleWishlist(featuredPiece)}
                  aria-label="Wishlist featured diamond piece"
                  className={`p-2.5 border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1] ${
                    isWishlisted(featuredPiece.id)
                      ? 'border-[#cbd5e1] bg-[#cbd5e1]/20 text-[#f8fafc]'
                      : 'border-[#362b38] text-[#c5bdc8] hover:border-[#cbd5e1] hover:text-[#ffffff]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(featuredPiece.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => onSelectItem(featuredPiece)}
                  className="px-4 py-2.5 bg-[#f8f9fa] hover:bg-white text-[#0f0c11] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1]"
                >
                  <span>Examine Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {DIAMOND_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1] ${
                  selectedCategory === cat
                    ? 'bg-[#f1f5f9] text-[#0f0c11] border-[#f1f5f9] font-semibold shadow-sm'
                    : 'bg-[#140f15]/70 text-[#c5bdc8] border-[#291f2a] hover:text-[#ffffff] hover:border-[#423344]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#a89fa9] font-light">
            Showing <span className="text-[#f1f5f9] font-medium tabular-nums">{filteredItems.length}</span> pieces
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const wish = isWishlisted(item.id);
            return (
              <div
                key={item.id}
                className="group relative bg-[#120e13] border border-[#261e27] flex flex-col justify-between transition-all duration-300 hover:border-[#cbd5e1]/60 hover:shadow-xl hover:shadow-[#cbd5e1]/5 hover:-translate-y-0.5"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#090709]">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category} in The Art of Diamonds`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e13] via-transparent to-transparent opacity-60" />

                  {/* Curator unboxed note */}
                  {item.curatorTag && (
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#f1f5f9] bg-[#0c090c]/85 backdrop-blur-sm px-2 py-0.5 border border-[#2f2430]">
                      {item.curatorTag}
                    </div>
                  )}

                  {/* Action buttons on hover */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onToggleWishlist(item)}
                      aria-label={`Wishlist ${item.name}`}
                      className={`p-2 backdrop-blur-md transition-colors cursor-pointer border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1] ${
                        wish
                          ? 'bg-[#ffffff] text-[#0d0908] border-[#ffffff]'
                          : 'bg-[#140e15]/90 text-[#b5a9b7] border-[#2e2330] hover:text-[#ffffff] hover:border-[#cbd5e1]'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={() => onSelectItem(item)}
                      aria-label={`Quick view ${item.name}`}
                      className="p-2 bg-[#140e15]/90 backdrop-blur-md text-[#b5a9b7] hover:text-[#ffffff] border border-[#2e2330] hover:border-[#cbd5e1] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Clean unboxed metadata with dot separator */}
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#a89fa9] mb-1.5">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#cbd5e1]">Diamond Art</span>
                    </div>

                    <h4 className="text-lg font-serif text-[#ffffff] group-hover:text-[#e2e8f0] transition-colors leading-snug line-clamp-1">
                      {item.name}
                    </h4>

                    <p className="mt-2 text-xs text-[#b8adb9] line-clamp-2 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-3 border-t border-[#231a24] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#988f9a]">
                        Illustrative Price
                      </span>
                      <span className="text-base font-serif text-[#ffffff] tabular-nums font-medium">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectItem(item)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#f1f5f9] hover:text-white flex items-center gap-1 group/btn cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1]"
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
        <div className="mt-12 text-center text-xs text-[#988f9a] max-w-2xl mx-auto border-t border-[#231a24] pt-6 font-light">
          Illustrative conceptual prices in Indian Rupees (₹). Conceptual demonstration designs for preview. No diamond certification or gemstone grades are implied.
        </div>
      </div>
    </section>
  );
};
