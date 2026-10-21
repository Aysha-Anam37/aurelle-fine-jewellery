import React from 'react';
import { ASSETS } from '../data/jewelleryData';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface HeroIntroProps {
  onExploreGold: () => void;
  onExploreDiamonds: () => void;
  onExploreCollection: (id: string) => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({
  onExploreGold,
  onExploreDiamonds,
  onExploreCollection,
}) => {
  const collectionPills = [
    { id: 'gold-jewellery', num: '01', name: 'The Golden Collection' },
    { id: 'diamond-jewellery', num: '02', name: 'The Art of Diamonds' },
    { id: 'minimal-jewellery', num: '03', name: 'The Minimal Collection' },
    { id: 'daily-wear-jewellery', num: '04', name: 'The Daily Wear Collection' },
    { id: 'wedding-jewellery', num: '05', name: 'The Heritage Wedding Collection' },
    { id: 'antique-gold-jewellery', num: '06', name: 'The Antique Gold Collection' },
  ];

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-[#231812]">
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c69f58]/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#8ba4c9]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Kicker with Luxury Editorial Uppercase Serif AURELLE Wordmark */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="font-brand text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase font-normal text-[#e5ca8d] mb-3 select-none drop-shadow-sm">
            AURELLE
          </div>
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#c69f58] mb-5 font-medium flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#c69f58]/40" />
            <span>The Art of Fine Jewellery</span>
            <span className="w-8 h-px bg-[#c69f58]/40" />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#f9f6f0] leading-[1.08] mb-6 text-balance">
            Two distinct realms of rare beauty.
          </h1>
          <p className="text-base sm:text-lg text-[#b8aba0] font-light leading-relaxed max-w-2xl mx-auto">
            Discover Aurelle’s signature universe—from the sunlit warmth of sculptural polished gold to the razor-sharp optic fire of celestial diamonds, curated across six bespoke collections.
          </p>
        </div>

        {/* Dual Signature Gateways: Gold on left, Diamonds on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Gateway 1: The Golden Collection */}
          <div className="group relative overflow-hidden bg-[#150f0c] border border-[#302119] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#c69f58]/60 hover:shadow-2xl hover:shadow-[#c69f58]/10">
            {/* Background image preview with luxury gradient scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={ASSETS.goldHero}
                alt="The Golden Collection Campaign Editorial Showcase"
                className="w-full h-full object-cover object-center opacity-45 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120d0a] via-[#120d0a]/80 to-[#120d0a]/40" />
            </div>

            {/* Top metadata */}
            <div className="relative z-10 mb-20 sm:mb-28">
              <div className="text-xs uppercase tracking-[0.25em] text-[#dec595] font-medium mb-3">
                Section 01 · Precious Metal
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#fbf8f0] mb-3 group-hover:text-[#f3deab] transition-colors">
                The Golden Collection
              </h2>
              <p className="text-sm text-[#d4c3b6] font-light italic font-serif tracking-wide">
                “A timeless expression of elegance.”
              </p>
            </div>

            {/* Bottom action */}
            <div className="relative z-10 pt-4 border-t border-[#35251c]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#a6978a] tracking-wider uppercase">
                  Chokers · Sculptural Rings · Cuffs · Bridal
                </span>
                <button
                  onClick={onExploreGold}
                  className="px-5 py-3 bg-[#c69f58] hover:bg-[#d6af68] text-[#0d0908] font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
                >
                  <span>Explore Gold</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Gateway 2: The Art of Diamonds */}
          <div className="group relative overflow-hidden bg-[#0e0c0e] border border-[#262028] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:border-[#cbd5e1]/60 hover:shadow-2xl hover:shadow-[#cbd5e1]/10">
            {/* Background image preview with luxury gradient scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={ASSETS.diamondHero}
                alt="The Art of Diamonds Campaign Editorial Showcase"
                className="w-full h-full object-cover object-center opacity-45 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0d] via-[#0d0a0d]/85 to-[#0d0a0d]/40" />
            </div>

            {/* Top metadata */}
            <div className="relative z-10 mb-20 sm:mb-28">
              <div className="text-xs uppercase tracking-[0.25em] text-[#e2e8f0] font-medium mb-3">
                Section 02 · Rare Luminescence
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#ffffff] mb-3 group-hover:text-[#f1f5f9] transition-colors">
                The Art of Diamonds
              </h2>
              <p className="text-sm text-[#cbd5e1] font-light italic font-serif tracking-wide">
                “Brilliance, beautifully understated.”
              </p>
            </div>

            {/* Bottom action */}
            <div className="relative z-10 pt-4 border-t border-[#262029]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#9b949f] tracking-wider uppercase">
                  Solitaires · Cascading Collars · Baguettes
                </span>
                <button
                  onClick={onExploreDiamonds}
                  className="px-5 py-3 bg-[#f8f9fa] hover:bg-white text-[#0f0c11] font-medium text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffffff]"
                >
                  <span>Explore Diamonds</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Six Collections Curated Navigator Bar */}
        <div className="mt-10 bg-[#120c09] border border-[#2b1d15] p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#241710] mb-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dec595] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#c69f58]" />
              <span>Explore All Six Curated Collections</span>
            </div>
            <div className="text-[11px] text-[#9f8e82] uppercase tracking-wider">
              32 Conceptually Mastercrafted Designs
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {collectionPills.map((col) => (
              <button
                key={col.id}
                onClick={() => onExploreCollection(col.id)}
                className="group/pill text-left p-3 bg-[#17100c] border border-[#2d1e17] hover:border-[#c69f58]/60 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono text-[#c69f58] mb-1">{col.num}</div>
                <div className="text-xs font-serif text-[#f2e9db] group-hover/pill:text-[#dec595] transition-colors leading-tight">
                  {col.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quiet editorial reassurance strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs tracking-wider uppercase text-[#a9998d]">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#c69f58]" />
            <span>Master Artisan Handcraft</span>
          </div>
          <span aria-hidden="true" className="text-[#3b2a22]">·</span>
          <span>Bespoke Private Viewings</span>
          <span aria-hidden="true" className="text-[#3b2a22]">·</span>
          <span>Pan-India Secured White-Glove Delivery</span>
        </div>
      </div>
    </section>
  );
};
