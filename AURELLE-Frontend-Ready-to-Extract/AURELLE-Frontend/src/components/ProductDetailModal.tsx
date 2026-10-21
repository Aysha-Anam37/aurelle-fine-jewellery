import React, { useState } from 'react';
import { JewelleryItem } from '../data/jewelleryData';
import { X, Heart, ZoomIn, Calendar, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  item: JewelleryItem | null;
  onClose: () => void;
  onToggleWishlist: (item: JewelleryItem) => void;
  isWishlisted: boolean;
  onBookViewingForPiece: (item: JewelleryItem) => void;
}

const COLLECTION_TITLES: Record<string, string> = {
  gold: 'The Golden Collection',
  diamond: 'The Art of Diamonds',
  minimal: 'The Minimal Collection',
  daily: 'The Daily Wear Collection',
  wedding: 'The Heritage Wedding Collection',
  antique: 'The Antique Gold Collection',
};

const COLLECTION_ACCENTS: Record<string, string> = {
  gold: '#dec595',
  diamond: '#cbd5e1',
  minimal: '#dec595',
  daily: '#c69f58',
  wedding: '#dfb870',
  antique: '#d4af37',
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onToggleWishlist,
  isWishlisted,
  onBookViewingForPiece,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!item) return null;

  const collectionTitle = COLLECTION_TITLES[item.collection] || 'Aurelle Fine Jewellery';
  const accentColor = COLLECTION_ACCENTS[item.collection] || '#dec595';
  const isDiamond = item.collection === 'diamond';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl overflow-hidden border shadow-2xl transition-all my-8 ${
          isDiamond
            ? 'bg-[#120e14] border-[#2d2230] text-[#f5f5f7]'
            : 'bg-[#150f0c] border-[#38261c] text-[#f7f2ea]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2 text-[#b5a698] hover:text-[#f8f5ee] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Column */}
          <div className="relative aspect-square sm:aspect-auto md:min-h-[460px] bg-black/40 overflow-hidden flex items-center justify-center">
            <img
              src={item.image}
              alt={`${item.name} macro view`}
              className={`w-full h-full object-cover transition-transform duration-500 cursor-zoom-in ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm px-2.5 py-1 text-[11px] text-[#dec595] flex items-center gap-1.5 border border-white/10 select-none">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Click to reset' : 'Click to zoom macro'}</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Collection Header */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#a8978a] mb-2">
                <span>{item.category}</span>
                <span aria-hidden="true">·</span>
                <span style={{ color: accentColor }} className="font-medium">
                  {collectionTitle}
                </span>
              </div>

              <h3 id="modal-product-title" className="text-2xl sm:text-3xl font-serif text-[#ffffff] mb-3 leading-snug">
                {item.name}
              </h3>

              <div className="mb-6">
                <span className="block text-[11px] uppercase tracking-wider text-[#a8978a]">
                  Illustrative Conceptual Price
                </span>
                <span className="text-3xl font-serif text-[#fbf7ee] tabular-nums font-medium">
                  ₹{item.priceINR.toLocaleString('en-IN')}
                </span>
              </div>

              <p className="text-sm text-[#c4b6a9] leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Craft & Specifications */}
              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div>
                  <span className="text-[#a08f82] block uppercase tracking-wider mb-0.5">
                    Bench Craftsmanship:
                  </span>
                  <span className="text-[#ded1c4]">{item.craftDetails}</span>
                </div>
                <div>
                  <span className="text-[#a08f82] block uppercase tracking-wider mb-0.5">
                    Proportions & Dimensions:
                  </span>
                  <span className="text-[#ded1c4]">{item.dimensions}</span>
                </div>
                <div>
                  <span className="text-[#a08f82] block uppercase tracking-wider mb-0.5">
                    Curator's Styling Note:
                  </span>
                  <span className="text-[#dec595] italic font-serif text-sm">
                    “{item.stylingTip}”
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onToggleWishlist(item)}
                  className={`flex-1 py-3 px-4 text-xs uppercase tracking-wider font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] ${
                    isWishlisted
                      ? 'bg-[#c69f58] text-[#0d0908] border-[#c69f58]'
                      : 'border-white/20 text-[#eddccb] hover:border-[#c69f58]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onBookViewingForPiece(item);
                  }}
                  className="flex-1 py-3 px-4 text-xs uppercase tracking-wider font-semibold bg-[#c69f58] hover:bg-[#d6b068] text-[#0d0908] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Inquire / View Piece</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#9f8f83] text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c69f58]" />
                <span>Conceptual design for preview. No gold purity or gemstone certification claimed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
