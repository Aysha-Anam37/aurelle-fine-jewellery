import React from 'react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenConsultation: () => void;
  onOpenRingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenConsultation,
  onOpenRingGuide,
}) => {
  return (
    <footer className="bg-[#090605] text-[#b3a395] border-t border-[#261913] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#21150f]">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-brand text-xl sm:text-2xl tracking-[0.18em] font-normal text-[#e5ca8d] uppercase block leading-none select-none">
                AURELLE
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a9998d] font-serif border-l border-[#3a281e] pl-2.5">
                Fine Jewellery
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#bcaaa0] leading-relaxed max-w-sm font-light">
              The Art of Fine Jewellery celebrating six distinct realms of precious artistry—from warm sculptural gold and celestial diamonds to sacred botanical heirlooms.
            </p>
            <div className="pt-2 text-xs text-[#dec595] tracking-wider uppercase font-medium">
              Private Salons: Mumbai · Delhi · Bengaluru · Dubai
            </div>
          </div>

          {/* Quick Nav Col: The Six Collections */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#dec595] font-semibold">
              The Six Collections
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('gold-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                >
                  01 The Golden Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('diamond-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1]"
                >
                  02 The Art of Diamonds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('minimal-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dec595]"
                >
                  03 The Minimal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('daily-wear-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                >
                  04 Daily Wear Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('wedding-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#dfb870]"
                >
                  05 Heritage Wedding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('antique-gold-jewellery')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
                >
                  06 Antique Gold
                </button>
              </li>
            </ul>
          </div>

          {/* Client Services & Studio */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#dec595] font-semibold">
              Client Concierge & Studio
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('atelier')}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                >
                  Master Craftsmanship & Casting Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                >
                  Private Salon Viewing Appointments
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRingGuide}
                  className="hover:text-[#eddcc4] transition-colors cursor-pointer text-left py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                >
                  Precious Metal Care & Ring Sizing Guide
                </button>
              </li>
              <li className="pt-2 text-[11px] text-[#867568]">
                Concierge desk: concierge@aurelle-jewellery.com
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#867568]">
          <div>
            © {new Date().getFullYear()} AURELLE Fine Jewellery. All rights reserved. Fictional luxury presentation.
          </div>
          <div className="flex gap-6">
            <span>Illustrative Concept Designs</span>
            <span>Indian Rupee Concept Valuation</span>
            <span>White-Glove Pan-India Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
