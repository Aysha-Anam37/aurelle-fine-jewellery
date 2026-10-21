import React from 'react';
import { JewelleryItem } from '../data/jewelleryData';
import { X, Trash2, Heart, Sparkles } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: JewelleryItem[];
  onRemoveItem: (id: string) => void;
  onSelectItem: (item: JewelleryItem) => void;
  onBookViewing: () => void;
}

const COLLECTION_TITLES: Record<string, string> = {
  gold: 'The Golden Collection',
  diamond: 'The Art of Diamonds',
  minimal: 'The Minimal Collection',
  daily: 'The Daily Wear Collection',
  wedding: 'The Heritage Wedding Collection',
  antique: 'The Antique Gold Collection',
};

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onSelectItem,
  onBookViewing,
}) => {
  if (!isOpen) return null;

  const totalEstimate = items.reduce((acc, curr) => acc + curr.priceINR, 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#130d0a] border-l border-[#2e2017] text-[#f7f2ea] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#281b14]">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#c69f58]" />
              <h3 id="wishlist-drawer-title" className="text-xl font-serif tracking-wide text-[#fdfbf7]">
                Curated Wishlist
              </h3>
              <span className="text-xs text-[#b8a798] tabular-nums">
                ({items.length} {items.length === 1 ? 'piece' : 'pieces'})
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close wishlist"
              className="p-1.5 text-[#a69688] hover:text-[#f8f5ee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Wishlisted Items */}
          <div className="mt-6 space-y-4 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
            {items.length === 0 ? (
              <div className="py-16 text-center text-[#9f8f83]">
                <Heart className="w-8 h-8 mx-auto mb-3 stroke-[1.2] opacity-40 text-[#c69f58]" />
                <p className="font-serif text-lg text-[#d8c9bc] mb-1">
                  Your curation is empty
                </p>
                <p className="text-xs max-w-xs mx-auto leading-relaxed text-[#a8978a]">
                  Explore Aurelle’s six signature collections to assemble your private selection.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#19110d] border border-[#2b1c14] hover:border-[#c69f58]/40 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} thumbnail`}
                    className="w-20 h-20 object-cover bg-black/40 shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectItem(item);
                      onClose();
                    }}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col justify-between flex-grow min-w-0">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#a8978a] truncate">
                        {COLLECTION_TITLES[item.collection] || 'Fine Jewellery'}
                      </div>
                      <button
                        onClick={() => {
                          onSelectItem(item);
                          onClose();
                        }}
                        className="text-sm font-serif text-[#faf6ed] hover:text-[#dec595] cursor-pointer truncate text-left w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
                      >
                        {item.name}
                      </button>
                      <div className="text-xs font-serif text-[#f6efe4] tabular-nums mt-0.5 font-medium">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#261a14] mt-2">
                      <span className="text-[10px] text-[#9c8e82]">
                        {item.dimensions}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from wishlist`}
                        className="text-[#9c8e82] hover:text-[#e57373] transition-colors p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e57373]"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bottom Valuation & Salon Booking */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-[#281b14] space-y-4">
            <div>
              <div className="flex items-baseline justify-between text-xs text-[#a09083]">
                <span className="uppercase tracking-wider">Curation Valuation (INR)</span>
                <span className="font-light text-[10px]">Illustrative total</span>
              </div>
              <div className="text-2xl font-serif text-[#fbf8f0] tabular-nums font-semibold mt-1">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </div>
            </div>

            <button
              onClick={onBookViewing}
              className="w-full py-3 bg-[#c69f58] hover:bg-[#d6af68] text-[#0d0908] font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Salon Viewing for Curation</span>
            </button>

            <p className="text-[10px] text-[#867568] text-center leading-normal">
              Private viewings offered in Colaba, Chanakyapuri, UB City, and Downtown Dubai.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
