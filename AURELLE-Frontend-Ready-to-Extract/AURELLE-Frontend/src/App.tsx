import React, { useState, useEffect } from 'react';
import { JewelleryItem, GOLD_COLLECTION, DIAMOND_COLLECTION } from './data/jewelleryData';
import { Navbar } from './components/Navbar';
import { HeroIntro } from './components/HeroIntro';
import { GoldSection } from './components/GoldSection';
import { DiamondSection } from './components/DiamondSection';
import { MinimalSection } from './components/MinimalSection';
import { DailyWearSection } from './components/DailyWearSection';
import { WeddingSection } from './components/WeddingSection';
import { AntiqueGoldSection } from './components/AntiqueGoldSection';
import { AtelierCraft } from './components/AtelierCraft';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ConsultationModal } from './components/ConsultationModal';
import { RingGuideModal } from './components/RingGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  // Wishlist state: start with curated favorites as realistic luxury initial state
  const [wishlist, setWishlist] = useState<JewelleryItem[]>([
    GOLD_COLLECTION[0], // The Sculptural Wave Ring
    DIAMOND_COLLECTION[1], // Stellar Facet Brilliant Studs
  ]);

  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<JewelleryItem | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isRingGuideOpen, setIsRingGuideOpen] = useState(false);
  const [consultationPiece, setConsultationPiece] = useState<JewelleryItem | null>(null);

  // Lock body scroll whenever any modal or drawer is active
  useEffect(() => {
    const isAnyModalOpen = Boolean(
      selectedItem || isWishlistOpen || isConsultationOpen || isRingGuideOpen
    );
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem, isWishlistOpen, isConsultationOpen, isRingGuideOpen]);

  // Global escape key handler to close active overlays
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setIsWishlistOpen(false);
        setIsConsultationOpen(false);
        setIsRingGuideOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll detection for active section in navbar across all six collections
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        { id: 'gold-jewellery', key: 'gold' },
        { id: 'diamond-jewellery', key: 'diamond' },
        { id: 'minimal-jewellery', key: 'minimal' },
        { id: 'daily-wear-jewellery', key: 'daily' },
        { id: 'wedding-jewellery', key: 'wedding' },
        { id: 'antique-gold-jewellery', key: 'antique' },
      ];

      for (const sec of sectionIds) {
        const elem = document.getElementById(sec.id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sec.key);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleWishlist = (item: JewelleryItem) => {
    setWishlist((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id: string) => {
    return wishlist.some((i) => i.id === id);
  };

  const handleBookViewingForPiece = (item: JewelleryItem) => {
    setConsultationPiece(item);
    setIsConsultationOpen(true);
  };

  const handleOpenGeneralConsultation = () => {
    setConsultationPiece(null);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0807] text-[#f7f3eb] flex flex-col font-sans selection:bg-[#c69f58]/30 selection:text-[#f8f5ee]">
      {/* Top Bar Navigation */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConsultation={handleOpenGeneralConsultation}
        onOpenRingGuide={() => setIsRingGuideOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* Campaign Hero Gateway with "Explore Gold", "Explore Diamonds", and 6-Collection Navigator */}
        <HeroIntro
          onExploreGold={() => scrollTo('gold-jewellery')}
          onExploreDiamonds={() => scrollTo('diamond-jewellery')}
          onExploreCollection={(id) => scrollTo(id)}
        />

        {/* Section 01: The Golden Collection */}
        <GoldSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Section 02: The Art of Diamonds */}
        <DiamondSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Section 03: The Minimal Collection */}
        <MinimalSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Section 04: The Daily Wear Collection */}
        <DailyWearSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Section 05: The Heritage Wedding Collection */}
        <WeddingSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Section 06: The Antique Gold Collection */}
        <AntiqueGoldSection
          onSelectItem={(item) => setSelectedItem(item)}
          onToggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
        />

        {/* Atelier Craftsmanship Story */}
        <AtelierCraft onBookViewing={handleOpenGeneralConsultation} />
      </main>

      {/* Editorial Footer */}
      <Footer
        onScrollToSection={(id) => scrollTo(id)}
        onOpenConsultation={handleOpenGeneralConsultation}
        onOpenRingGuide={() => setIsRingGuideOpen(true)}
      />

      {/* Quick View / Product Detail Modal */}
      <ProductDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedItem ? isWishlisted(selectedItem.id) : false}
        onBookViewingForPiece={handleBookViewingForPiece}
      />

      {/* Wishlist Slide-Over Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemoveItem={(id) => setWishlist((prev) => prev.filter((i) => i.id !== id))}
        onSelectItem={(item) => setSelectedItem(item)}
        onBookViewing={() => {
          setIsWishlistOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Private Salon Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedPiece={consultationPiece}
      />

      {/* Sizing & Precious Metal Care Modal */}
      <RingGuideModal
        isOpen={isRingGuideOpen}
        onClose={() => setIsRingGuideOpen(false)}
      />
    </div>
  );
}
