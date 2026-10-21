import React from 'react';
import { ASSETS } from '../data/jewelleryData';
import { Sparkles, Compass, Shield } from 'lucide-react';

interface AtelierCraftProps {
  onBookViewing: () => void;
}

export const AtelierCraft: React.FC<AtelierCraftProps> = ({ onBookViewing }) => {
  return (
    <section id="atelier" className="py-20 sm:py-28 bg-[#0a0706] text-[#f7f3eb] relative border-b border-[#241913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image col */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#332219] shadow-2xl bg-[#140e0b]">
              <img
                src={ASSETS.atelier}
                alt="Aurelle Master Jeweller Atelier Hands examining high jewellery"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0706]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-[#d8c8b8]">
                <span className="font-serif italic">The Aurelle Workshop · Hand-finished prongs</span>
                <span className="text-[#c69f58] uppercase tracking-widest text-[11px]">Bespoke Craft</span>
              </div>
            </div>
          </div>

          {/* Text and story col */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.3em] text-[#c69f58] font-medium mb-3">
              Heritage of the Bench
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#fbf7f0] mb-6 leading-tight">
              Where metal finds its voice and light finds its home.
            </h2>
            <p className="text-sm sm:text-base text-[#baa99b] leading-relaxed mb-6 font-light">
              Every curve of our gold and every facet of our diamond collection is born from meticulous benchwork. We balance ancient Indian lost-wax techniques with modern optical engineering to achieve jewelry that breathes, drapes, and radiates without compromise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-[#261a14] mb-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#dec595] font-medium mb-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#c69f58]" />
                  <span>Fluid Form</span>
                </div>
                <p className="text-xs text-[#a8978a] leading-relaxed">
                  Sculpted to fit the human contour naturally with balanced weight.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[#dec595] font-medium mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c69f58]" />
                  <span>Optic Balance</span>
                </div>
                <p className="text-xs text-[#a8978a] leading-relaxed">
                  Low-profile settings engineered to maximize refractive dispersion.
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-[#dec595] font-medium mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#c69f58]" />
                  <span>Quiet Luxury</span>
                </div>
                <p className="text-xs text-[#a8978a] leading-relaxed">
                  Restrained proportions meant to be cherished across a lifetime.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onBookViewing}
                className="px-6 py-3 bg-[#c69f58] hover:bg-[#d6af68] text-[#0d0908] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
              >
                Request Private Salon Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
