import React, { useState, useEffect } from 'react';
import { JewelleryItem } from '../data/jewelleryData';
import { X, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPiece?: JewelleryItem | null;
}

const SALON_LOCATIONS = [
  'Mumbai · The Colaba Flagship Salon',
  'New Delhi · Chanakyapuri Private Suite',
  'Bengaluru · Lavelle Road Atelier',
  'Hyderabad · Banjara Hills Salon',
  'Kolkata · Alipore Heritage Residence',
  'Dubai · DIFC International Salon',
];

const COLLECTION_TITLES: Record<string, string> = {
  gold: 'The Golden Collection',
  diamond: 'The Art of Diamonds',
  minimal: 'The Minimal Collection',
  daily: 'The Daily Wear Collection',
  wedding: 'The Heritage Wedding Collection',
  antique: 'The Antique Gold Collection',
};

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedPiece,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: SALON_LOCATIONS[0],
    collectionFocus: '',
    preferredDate: '',
    notes: '',
  });

  useEffect(() => {
    if (selectedPiece) {
      const colName = COLLECTION_TITLES[selectedPiece.collection] || selectedPiece.collection;
      setFormData((prev) => ({
        ...prev,
        collectionFocus: `${selectedPiece.name} (${colName})`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        collectionFocus: 'All Six Signature Collections',
      }));
    }
  }, [selectedPiece, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Apps Script ContentService does not reliably expose a readable CORS response.
      // Send a simple text/plain POST to avoid a preflight request.
      await fetch('https://script.google.com/macros/s/AKfycbw9N2W9XG3bn03nAxsq7qRQDVaYhIEuJL0RKcsDdRNInzoHCK4ygnSIqPKFhJQCO5F2/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          formType: 'appointment',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          collectionFocus: formData.collectionFocus,
          preferredDate: formData.preferredDate,
          notes: formData.notes,
        }),
      });

      // In no-cors mode, the browser cannot read the server response. This indicates
      // the request was dispatched, not independently verified database storage.
      setSubmitted(true);
    } catch (error) {
      setSubmitError('We could not send your request. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#140e0b] border border-[#332219] text-[#f7f2ea] shadow-2xl p-6 sm:p-8 my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#a08f83] hover:text-[#f8f5ee] transition-colors p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#c69f58] mx-auto stroke-[1.5]" />
            <div className="text-xs uppercase tracking-widest text-[#dec595] font-semibold">
              Private Salon Viewing Confirmed
            </div>
            <h3 className="text-2xl font-serif text-[#ffffff]">
              Appointment Request Received
            </h3>
            <p className="text-sm text-[#bcaaa0] font-light leading-relaxed max-w-sm mx-auto">
              Thank you, {formData.name || 'esteemed guest'}. Our senior Aurelle jewellery advisor will contact you within 4 business hours to confirm your private salon appointment at {formData.location.split('·')[0]}.
            </p>

            <div className="p-4 bg-[#1b120d] border border-[#2e1e16] text-xs text-left space-y-1.5 text-[#baa89b]">
              <div>
                <span className="text-[#867568]">Collection Interest: </span>
                <span className="text-[#ecd9c2]">{formData.collectionFocus}</span>
              </div>
              <div>
                <span className="text-[#867568]">Salon Location: </span>
                <span className="text-[#ecd9c2]">{formData.location}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#c69f58] hover:bg-[#d4ab63] text-[#0d0908] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
            >
              Return to Gallery
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dec595] mb-2 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#c69f58]" />
                <span>The Aurelle Private Salon</span>
              </div>
              <h3 id="consultation-modal-title" className="text-2xl font-serif text-[#fbf7ee]">
                Request a Private Viewing
              </h3>
              <p className="text-xs text-[#a9998d] font-light mt-1">
                Experience our six curated Haute Joaillerie collections in an intimate, secure salon setting with bespoke advisors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] placeholder-[#6d5e53] focus:border-[#c69f58] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] placeholder-[#6d5e53] focus:border-[#c69f58] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@luxury.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] placeholder-[#6d5e53] focus:border-[#c69f58] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                  Private Salon Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] focus:border-[#c69f58] focus:outline-none transition-colors"
                >
                  {SALON_LOCATIONS.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#140e0b]">
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                  Collection Interest
                </label>
                <input
                  type="text"
                  value={formData.collectionFocus}
                  onChange={(e) => setFormData({ ...formData, collectionFocus: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] focus:border-[#c69f58] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a08f83] mb-1">
                  Preferred Date & Time Window
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next Saturday afternoon, 3 PM"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#1a120e] border border-[#302118] text-sm text-[#f5f0e6] placeholder-[#6d5e53] focus:border-[#c69f58] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                {submitError && (
                  <p role="alert" className="mb-3 text-xs text-red-300">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#c69f58] hover:bg-[#d6af68] disabled:opacity-60 disabled:cursor-wait text-[#0d0908] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer shadow-md"
                >
                  {isSubmitting ? 'Sending Request…' : 'Confirm Viewing Invitation'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#9c8e82] text-center pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#c69f58]" />
                <span>Salons strictly by appointment. Discrete, private viewing suite.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
