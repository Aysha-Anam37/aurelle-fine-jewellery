import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Gem, ShieldCheck, Heart, Mail, MapPin } from 'lucide-react';
import { ASSETS, ALL_COLLECTIONS, JewelleryItem } from '../data/jewelleryData';
import { ConsultationModal } from './ConsultationModal';

const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Collections', href: '/collections' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
];

function PageHeader({ active }: { active: string }) {
  return (
    <header className="site-page-header fixed top-0 left-0 right-0 z-40 border-b border-[#332219] bg-[#0b0807]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" aria-label="Aurelle home" className="font-brand text-xl tracking-[0.18em] text-[#e5ca8d] sm:text-2xl">AURELLE <span className="ml-1 text-[9px] tracking-[0.25em] text-[#a9998d]">FINE JEWELLERY</span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {pageLinks.map(link => <a key={link.href} href={link.href} aria-current={active === link.href ? 'page' : undefined} className={`text-xs uppercase tracking-[0.15em] transition-colors hover:text-[#e5ca8d] ${active === link.href ? 'text-[#e5ca8d]' : 'text-[#cbbdb0]'}`}>{link.label}</a>)}
        </nav>
        <a href="/contact-us" className="shrink-0 bg-[#c69f58] px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-[#0d0908] transition-colors hover:bg-[#d6af68] sm:px-4">Private Salon</a>
      </div>
      <nav aria-label="Mobile navigation" className="flex gap-5 overflow-x-auto border-t border-[#241812] px-4 py-3 lg:hidden">
        {pageLinks.map(link => <a key={link.href} href={link.href} aria-current={active === link.href ? 'page' : undefined} className={`whitespace-nowrap text-[10px] uppercase tracking-widest ${active === link.href ? 'text-[#e5ca8d]' : 'text-[#cbbdb0]'}`}>{link.label}</a>)}
      </nav>
    </header>
  );
}

function PageFooter() {
  return <footer className="border-t border-[#2a1e17] bg-[#090605] px-4 py-8 text-center text-xs text-[#8f7e71]"><a href="/" className="font-brand tracking-[0.2em] text-[#e5ca8d]">AURELLE</a><p className="mt-2">The art of fine jewellery. Crafted to be treasured.</p><p className="mt-4">© {new Date().getFullYear()} Aurelle Fine Jewellery · Illustrative concept designs</p></footer>;
}

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-[#2a1e17] px-4 pb-14 pt-44 text-center sm:px-6 sm:pb-20 sm:pt-48"><p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#c69f58]">{eyebrow}</p><h1 className="mx-auto max-w-4xl font-serif text-4xl font-light leading-tight text-[#f7f3eb] sm:text-5xl lg:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#b9a99d] sm:text-base">{description}</p></section>;
}

const allItems: JewelleryItem[] = ALL_COLLECTIONS.flatMap(collection => collection.items);
const galleryImages = [
  { src: ASSETS.goldHero, title: 'Sculptural Gold', subtitle: 'Warmth in every contour' },
  { src: ASSETS.diamondHero, title: 'The Art of Diamonds', subtitle: 'Light, precisely captured' },
  { src: ASSETS.minimalHeroFlatlay, title: 'The Minimal Edit', subtitle: 'Quiet, considered elegance' },
  { src: ASSETS.atelier, title: 'Atelier Craftsmanship', subtitle: 'The human hand behind the art' },
  { src: ASSETS.weddingGallery, title: 'Wedding Heirlooms', subtitle: 'Made for meaningful moments' },
  { src: ASSETS.antiqueGallery, title: 'Antique Gold', subtitle: 'A legacy of detail' },
];

export function SitePages({ path }: { path: string }) {
  const [salonOpen, setSalonOpen] = useState(false);
  const [query, setQuery] = useState('');
  const active = path === '/' ? '/' : path;
  const isCollections = path === '/collections';
  const isGallery = path === '/gallery';
  const isAbout = path === '/about-us';
  const isContact = path === '/contact-us';
  const filteredItems = allItems.filter(item => `${item.name} ${item.category} ${item.collection}`.toLowerCase().includes(query.toLowerCase()));

  return <div className="min-h-screen bg-[#0b0807] text-[#f7f3eb]">
    <PageHeader active={active} />
    {isAbout && <>
      <PageIntro eyebrow="Our Story · AURELLE" title="Jewellery with a sense of permanence." description="Aurelle is a fine-jewellery concept shaped around thoughtful design, considered details, and pieces that feel personal today and treasured for years to come." />
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:px-8">
        <img src={ASSETS.atelier} alt="Aurelle-inspired jewellery atelier" className="h-[320px] w-full object-cover sm:h-[440px]" />
        <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#c69f58]">Our philosophy</p><h2 className="mt-4 font-serif text-3xl font-light leading-snug sm:text-4xl">Modern expression. Enduring craft.</h2><p className="mt-5 text-sm leading-7 text-[#b9a99d]">We bring together sculptural gold, luminous diamonds, delicate everyday pieces, and celebratory heirloom-inspired designs. Each collection is curated to offer a different expression of personal style.</p><div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"><div className="border-l border-[#c69f58] pl-4"><Gem className="mb-3 h-5 w-5 text-[#c69f58]"/><h3 className="font-serif text-xl">Considered design</h3><p className="mt-2 text-xs leading-6 text-[#9f8f83]">Balanced silhouettes, rich textures, and purposeful detail.</p></div><div className="border-l border-[#c69f58] pl-4"><Heart className="mb-3 h-5 w-5 text-[#c69f58]"/><h3 className="font-serif text-xl">Personal meaning</h3><p className="mt-2 text-xs leading-6 text-[#9f8f83]">Pieces selected for milestones, rituals, and everyday moments.</p></div></div></div>
      </section>
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl border border-[#38291e] bg-[#100b09] px-6 py-8 text-center sm:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c69f58]">
            Meet Our Founder
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-[#f7f3eb]">
            Aysha Anam
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#9f8f83]">
            Founder, Aurelle Fine Jewellery
          </p>
        </div>
      </section>
      <section className="border-y border-[#2a1e17] bg-[#100b09] px-4 py-12 text-center sm:px-6"><p className="mx-auto max-w-2xl font-serif text-2xl font-light leading-relaxed text-[#e8d7b8] sm:text-3xl">“True elegance is not loud. It is remembered.”</p><p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#8f7e71]">The Aurelle point of view</p></section>
    </>}

    {isCollections && <>
      <PageIntro eyebrow="Discover Aurelle" title="Six collections. One enduring point of view." description="Explore a considered edit of gold, diamonds, minimal essentials, daily-wear favourites, wedding statements, and antique-inspired designs." />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-[#9f8f83]">Explore the collection preview</p><label className="flex items-center gap-3 border-b border-[#5a4330] py-2 sm:w-72"><span className="text-[10px] uppercase tracking-widest text-[#c69f58]">Search</span><input type="search" aria-label="Search jewellery collections" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search jewellery…" className="min-w-0 flex-1 bg-transparent text-sm text-[#f7f3eb] outline-none placeholder:text-[#75665b] focus-visible:ring-1 focus-visible:ring-[#c69f58]" /></label></div>
        {filteredItems.length ? <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">{filteredItems.map(item => <article key={item.id} className="group border border-[#2a1e17] bg-[#100b09] transition-colors hover:border-[#8b6a3b]"><img src={item.image} alt={item.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"/><div className="p-3 sm:p-4"><p className="text-[9px] uppercase tracking-[0.18em] text-[#c69f58]">{item.collection}</p><h2 className="mt-2 font-serif text-base sm:text-lg">{item.name}</h2><p className="mt-2 line-clamp-2 text-xs leading-5 text-[#9f8f83]">{item.description}</p><button onClick={() => setSalonOpen(true)} className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#e2c58c] hover:text-white">Enquire <ArrowRight className="h-3 w-3"/></button></div></article>)}</div> : <div className="border border-[#2a1e17] px-6 py-16 text-center"><p className="font-serif text-2xl">No matching pieces</p><p className="mt-2 text-sm text-[#9f8f83]">Try a different search term.</p></div>}
      </section>
    </>}

    {isGallery && <>
      <PageIntro eyebrow="The Aurelle Edit" title="A closer look at the details." description="A visual showcase of sculptural forms, precious stones, atelier inspiration, and heirloom-style artistry across the Aurelle collections." />
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-3 lg:px-8">{galleryImages.map((item, index) => <article key={item.title} className={`group relative overflow-hidden bg-[#100b09] ${index === 0 || index === 3 ? 'sm:row-span-2' : ''}`}><img src={item.src} alt={item.title} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 || index === 3 ? 'h-[420px] sm:h-full sm:min-h-[520px]' : 'h-[280px] sm:h-[320px]'}`} /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"><p className="text-[9px] uppercase tracking-[0.25em] text-[#e1c78e]">Aurelle gallery</p><h2 className="mt-2 font-serif text-2xl">{item.title}</h2><p className="mt-1 text-xs text-[#d1c1b3]">{item.subtitle}</p></div></article>)}</section>
    </>}

    {isContact && <>
      <PageIntro eyebrow="Client Concierge" title="Your Aurelle experience begins here." description="Ask about a collection, request a private viewing, or share what you have in mind. Our Private Salon request form helps you send the details for a tailored enquiry." />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-16 md:py-16 lg:px-8">
        <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#c69f58]">We would love to hear from you</p><h2 className="mt-4 font-serif text-3xl font-light sm:text-4xl">A personal conversation, at your pace.</h2><p className="mt-5 text-sm leading-7 text-[#b9a99d]">Choose the collection that speaks to you and tell us your preferred viewing window. The Private Salon form captures your enquiry details.</p><div className="mt-8 space-y-5"><div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c69f58]"/><div><h3 className="text-sm text-[#f1e7d8]">Private Salon locations</h3><p className="mt-1 text-xs leading-6 text-[#9f8f83]">Mumbai · New Delhi · Bengaluru · Hyderabad · Kolkata · Dubai</p></div></div><div className="flex gap-4"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#c69f58]"/><div><h3 className="text-sm text-[#f1e7d8]">By appointment</h3><p className="mt-1 text-xs leading-6 text-[#9f8f83]">Request a private viewing for a more considered experience.</p></div></div><div className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-[#c69f58]"/><div><h3 className="text-sm text-[#f1e7d8]">Enquiries</h3><p className="mt-1 text-xs leading-6 text-[#9f8f83]">Use the Private Salon request form to share your contact details and interest.</p></div></div></div><button onClick={() => setSalonOpen(true)} className="mt-9 inline-flex items-center gap-3 bg-[#c69f58] px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-[#0d0908] transition-colors hover:bg-[#d6af68]">Open enquiry form <ArrowUpRight className="h-4 w-4"/></button></div>
        <div className="relative min-h-[340px] overflow-hidden border border-[#38291e]"><img src={ASSETS.diamondHero} alt="Aurelle diamond jewellery editorial" className="absolute inset-0 h-full w-full object-cover opacity-70"/><div className="absolute inset-0 bg-gradient-to-t from-[#0b0807] via-[#0b0807]/25 to-transparent"/><div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"><Sparkles className="mb-4 h-6 w-6 text-[#e0c184]"/><h3 className="font-serif text-3xl">The Private Salon</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[#d1c1b3]">A quieter setting to discover the pieces, details, and stories that feel right for you.</p></div></div>
      </section>
    </>}

    <section className="border-y border-[#2a1e17] bg-[#100b09] px-4 py-10 text-center sm:px-6"><p className="font-serif text-2xl font-light text-[#e8d7b8]">Find the piece that feels like yours.</p><button onClick={() => setSalonOpen(true)} className="mt-5 inline-flex items-center gap-2 border border-[#8b6a3b] px-5 py-3 text-[10px] uppercase tracking-widest text-[#e8d7b8] transition-colors hover:bg-[#c69f58] hover:text-[#0b0807]">Request a private viewing <ArrowRight className="h-3.5 w-3.5"/></button></section>
    <PageFooter />
    <ConsultationModal isOpen={salonOpen} onClose={() => setSalonOpen(false)} />
  </div>;
}
