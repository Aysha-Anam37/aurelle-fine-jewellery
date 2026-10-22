import React, { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onOpenRingGuide: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenConsultation,
  onOpenRingGuide,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCollectionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setCollectionsDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const collectionsList = [
    { id: 'gold-jewellery', key: 'gold', num: '01', title: 'The Golden Collection', tag: 'Polished Sculptural Gold' },
    { id: 'diamond-jewellery', key: 'diamond', num: '02', title: 'The Art of Diamonds', tag: 'Celestial Solitaires & River Collars' },
    { id: 'minimal-jewellery', key: 'minimal', num: '03', title: 'The Minimal Collection', tag: 'Delicate Wire & Fine Lines' },
    { id: 'daily-wear-jewellery', key: 'daily', num: '04', title: 'The Daily Wear Collection', tag: 'Everyday Luxury & Paperclip Links' },
    { id: 'wedding-jewellery', key: 'wedding', num: '05', title: 'The Heritage Wedding Collection', tag: 'Regal Jadau & Polki Masterpieces' },
    { id: 'antique-gold-jewellery', key: 'antique', num: '06', title: 'The Antique Gold Collection', tag: 'Botanical Relief & Aged Patina' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0e0a09]/95 backdrop-blur-md border-b border-[#2a1e17] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0a0706]/95 via-[#0a0706]/60 to-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Luxury Editorial Uppercase Serif AURELLE Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-baseline gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58]"
          aria-label="AURELLE Fine Jewellery Home"
        >
          <span className="font-brand text-xl sm:text-2xl text-[#e5ca8d] group-hover:text-[#f3deab] transition-colors leading-none tracking-[0.18em] font-normal uppercase select-none drop-shadow-sm">
            AURELLE
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#a9998d] font-serif hidden lg:inline border-l border-[#3a281e] pl-2.5">
            Fine Jewellery
          </span>
        </a>

        {/* Zone 2: Navigation links across all six collections & atelier */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm tracking-wider uppercase font-medium text-[#cbbdb0]"
        >
          <a href="/about-us" className="transition-colors whitespace-nowrap shrink-0 hover:text-[#e8cf96] py-1">About</a>
          <a href="/gallery" className="transition-colors whitespace-nowrap shrink-0 hover:text-[#e8cf96] py-1">Gallery</a>
          <a href="/contact-us" className="transition-colors whitespace-nowrap shrink-0 hover:text-[#e8cf96] py-1">Contact</a>
          <button
            onClick={() => scrollToSection('gold-jewellery')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#e8cf96] py-1 border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer ${
              activeSection === 'gold'
                ? 'text-[#e8cf96] border-[#c69f58]'
                : 'border-transparent'
            }`}
          >
            Gold
          </button>
          <button
            onClick={() => scrollToSection('diamond-jewellery')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#f8f6f0] py-1 border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cbd5e1] cursor-pointer ${
              activeSection === 'diamond'
                ? 'text-[#f8f6f0] border-[#cbd5e1]'
                : 'border-transparent'
            }`}
          >
            Diamonds
          </button>

          {/* All 6 Collections Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCollectionsDropdownOpen(!collectionsDropdownOpen)}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-[#e8cf96] py-1 border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer ${
                ['minimal', 'daily', 'wedding', 'antique'].includes(activeSection)
                  ? 'text-[#e8cf96] border-[#c69f58]'
                  : 'border-transparent'
              }`}
              aria-expanded={collectionsDropdownOpen}
            >
              <span>Collections</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${collectionsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {collectionsDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 bg-[#120d0a] border border-[#2f2018] shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-[#a8978a] border-b border-[#231812] font-semibold">
                  6 Curated Fine Collections
                </div>
                {collectionsList.map((col) => (
                  <button
                    key={col.id}
                    onClick={() => scrollToSection(col.id)}
                    className={`w-full text-left px-3 py-2.5 transition-colors flex items-center justify-between group cursor-pointer ${
                      activeSection === col.key
                        ? 'bg-[#c69f58]/15 text-[#f5eedc]'
                        : 'hover:bg-[#1a120e] text-[#cbbdb0]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#c69f58]">{col.num}</span>
                        <span className="text-xs font-serif font-medium text-[#f5eedc] group-hover:text-[#dec595] transition-colors">
                          {col.title}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#8f7e71] tracking-normal mt-0.5 pl-5">
                        {col.tag}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8f7e71] group-hover:text-[#c69f58] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
                <a
                  href="/collections"
                  onClick={() => setCollectionsDropdownOpen(false)}
                  className="mt-2 flex items-center justify-between border-t border-[#2a1e17] px-3 py-3 text-xs uppercase tracking-widest text-[#e2c58c] transition-colors hover:bg-[#1a120e] hover:text-white"
                >
                  <span>View all collections</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('atelier')}
            className="hover:text-[#e8cf96] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer"
          >
            Master Craft
          </button>
          <button
            onClick={onOpenRingGuide}
            className="hover:text-[#e8cf96] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer"
          >
            Sizing Guide
          </button>
        </nav>

        {/* Zone 3: Actions + Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label={`View curated wishlist (${wishlistCount} items)`}
            className="relative p-2 text-[#dfd4c5] hover:text-[#c69f58] transition-colors rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer"
            title="Curated Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c69f58] text-[#0a0706] font-bold text-[10px] flex items-center justify-center rounded-full tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Private Salon Button */}
          <button
            onClick={onOpenConsultation}
            className="px-3 sm:px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#0d0908] bg-[#c69f58] hover:bg-[#d6b068] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 rounded-none shadow-sm flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e5ca8d]"
          >
            <Sparkles className="w-3.5 h-3.5 hidden sm:inline" />
            <span>Private Salon</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 text-[#dfd4c5] hover:text-[#c69f58] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c69f58] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#110c09] border-b border-[#2d1e17] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-3 border-b border-[#231710] pb-4 text-xs uppercase tracking-widest sm:grid-cols-4">
            <a href="/about-us" onClick={() => setMobileMenuOpen(false)} className="text-[#cbbdb0] hover:text-[#e8cf96]">About Us</a>
            <a href="/collections" onClick={() => setMobileMenuOpen(false)} className="text-[#cbbdb0] hover:text-[#e8cf96]">Collections</a>
            <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-[#cbbdb0] hover:text-[#e8cf96]">Gallery</a>
            <a href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="text-[#cbbdb0] hover:text-[#e8cf96]">Contact Us</a>
          </div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#a9998d] pb-2 border-b border-[#231710]">
            The 6 Signature Collections
          </div>
          <div className="flex flex-col space-y-3 text-sm font-medium">
            {collectionsList.map((col) => (
              <button
                key={col.id}
                onClick={() => scrollToSection(col.id)}
                className="flex items-center justify-between text-left py-1 text-[#f5eedc] hover:text-[#e8cf96] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#c69f58] font-mono">{col.num}</span>
                  <span>{col.title}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#c69f58]" />
              </button>
            ))}
            <div className="pt-2 border-t border-[#231710] space-y-2">
              <button
                onClick={() => scrollToSection('atelier')}
                className="flex items-center justify-between text-left py-1 text-[#cbbdb0] hover:text-[#e8cf96] transition-colors cursor-pointer w-full"
              >
                <span>Master Craftsmanship</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8f7e71]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRingGuide();
                }}
                className="flex items-center justify-between text-left py-1 text-[#cbbdb0] hover:text-[#e8cf96] transition-colors cursor-pointer w-full"
              >
                <span>Ring Sizing & Care Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8f7e71]" />
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-[#231710] flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#c69f58] text-[#0d0908] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Salon Viewing</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
