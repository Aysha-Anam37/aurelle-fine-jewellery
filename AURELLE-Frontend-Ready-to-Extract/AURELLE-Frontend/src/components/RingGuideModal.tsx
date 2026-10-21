import React, { useState } from 'react';
import { X, Ruler, Sparkles, ShieldAlert } from 'lucide-react';

interface RingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIZE_CHART = [
  { inSize: '6', usSize: '3.75', mmDiameter: '14.6', circumference: '45.9' },
  { inSize: '8', usSize: '4.5', mmDiameter: '15.3', circumference: '48.0' },
  { inSize: '10', usSize: '5.25', mmDiameter: '15.9', circumference: '50.0' },
  { inSize: '12', usSize: '6.0', mmDiameter: '16.5', circumference: '51.9' },
  { inSize: '14', usSize: '6.75', mmDiameter: '17.2', circumference: '54.0' },
  { inSize: '16', usSize: '7.5', mmDiameter: '17.8', circumference: '56.0' },
  { inSize: '18', usSize: '8.25', mmDiameter: '18.5', circumference: '58.1' },
  { inSize: '20', usSize: '9.0', mmDiameter: '19.1', circumference: '60.0' },
  { inSize: '22', usSize: '9.75', mmDiameter: '19.7', circumference: '62.0' },
];

export const RingGuideModal: React.FC<RingGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sizing' | 'care'>('sizing');

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ring-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#140e0b] border border-[#332219] text-[#f7f2ea] shadow-2xl p-6 sm:p-8 my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close guide modal"
          className="absolute top-4 right-4 p-2 text-[#b5a698] hover:text-[#f8f5ee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dec595] mb-2 font-medium">
            <Ruler className="w-3.5 h-3.5 text-[#c69f58]" />
            <span>Aurelle Atelier Services</span>
          </div>
          <h3 id="ring-guide-title" className="text-2xl sm:text-3xl font-serif text-[#fbf7ee]">
            Sizing & Precious Metal Care
          </h3>
          <p className="text-xs text-[#a9998d] font-light mt-1">
            Precision guidelines to ensure your Aurelle heirloom fits effortlessly and retains its radiant finish.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 border-b border-[#2d1e16] mb-6">
          <button
            onClick={() => setActiveTab('sizing')}
            className={`pb-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] ${
              activeTab === 'sizing'
                ? 'border-[#c69f58] text-[#dec595]'
                : 'border-transparent text-[#b5a698] hover:text-[#e4d3c4]'
            }`}
          >
            Ring Size Conversion
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`pb-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] ${
              activeTab === 'care'
                ? 'border-[#c69f58] text-[#dec595]'
                : 'border-transparent text-[#b5a698] hover:text-[#e4d3c4]'
            }`}
          >
            Care & Maintenance
          </button>
        </div>

        {activeTab === 'sizing' ? (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#2d1e16] text-[#867568] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Indian Size</th>
                    <th className="py-2.5 px-3">US Size</th>
                    <th className="py-2.5 px-3">Diameter (mm)</th>
                    <th className="py-2.5 px-3">Circumference (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#241711] tabular-nums text-[#ded2c5]">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.inSize} className="hover:bg-[#1a120e]">
                      <td className="py-2.5 px-3 font-semibold text-[#dec595]">{row.inSize}</td>
                      <td className="py-2.5 px-3">{row.usSize}</td>
                      <td className="py-2.5 px-3">{row.mmDiameter} mm</td>
                      <td className="py-2.5 px-3">{row.circumference} mm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-[#1b120d] border border-[#2b1c14] text-xs text-[#baa89b] space-y-1.5">
              <span className="text-[#dec595] font-semibold block uppercase tracking-wider text-[11px]">
                How to Measure at Home:
              </span>
              <p>
                Wrap a narrow strip of paper snugly around the base of your intended finger. Mark the exact overlap point with a pen, measure with a flat ruler in millimeters, and match to the circumference above.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-[#c4b5a8] leading-relaxed">
            <div className="p-4 bg-[#1b120d] border border-[#2b1c14] space-y-2">
              <h4 className="text-sm font-serif text-[#fbf7ee] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#c69f58]" />
                <span>Preserving Polished Gold Surfaces</span>
              </h4>
              <p>
                Store your gold pieces individually in soft chamois pouches or lined jewelry compartments to prevent fine micro-abrasions. Clean gently using warm water, mild soap, and an ultra-soft lint-free microfiber cloth.
              </p>
            </div>

            <div className="p-4 bg-[#1b120d] border border-[#2b1c14] space-y-2">
              <h4 className="text-sm font-serif text-[#fbf7ee] flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#cbd5e1]" />
                <span>Maintaining Diamond Brilliance & Prongs</span>
              </h4>
              <p>
                Natural skin oils and cosmetics can cloud diamond facets over time. Periodic gentle brushing with a soft cosmetic brush beneath the stone basket restores optic refraction. We offer complimentary annual prong inspection at all Aurelle salons.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
