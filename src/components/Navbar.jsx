import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, GraduationCap } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function Navbar({ onOpenBooking, onOpenDemo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Combos & Offers', href: '#combos', badge: 'Special' },
    { name: 'Academy', href: '#academy', highlight: true },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-dark-900/80 backdrop-blur-sm border-b border-neutral-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-500/50 bg-gradient-to-br from-gold-500/20 via-dark-850 to-dark-950 flex items-center justify-center shadow-gold-sm group-hover:border-gold-400 transition-all">
              <span className="font-serif font-black text-xl text-gold-400 group-hover:scale-110 transition-transform">
                B
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] text-white group-hover:text-gold-300 transition-colors">
                BELEZIA
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.25em] text-gold-400 uppercase">
                Salon & Academy • Delhi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all relative py-1 ${
                  link.highlight
                    ? 'text-gold-400 font-semibold hover:text-gold-300 flex items-center gap-1'
                    : 'text-neutral-300 hover:text-gold-400'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold bg-gold-500/20 text-gold-400 rounded-full border border-gold-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="text-xs font-semibold px-3.5 py-2 rounded border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 transition-colors flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academy Demo</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-gold-metallic text-dark-950 font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-gold-sm hover:shadow-gold-md hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-gold-metallic text-dark-950 font-bold text-xs px-2.5 py-1.5 rounded shadow-gold-sm"
            >
              Book
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white p-2 rounded-lg bg-dark-800 border border-neutral-700/60"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-950/98 border-b border-gold-500/20 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm py-2 px-3 rounded-lg border border-neutral-800 transition-colors ${
                  link.highlight
                    ? 'bg-gold-500/10 text-gold-400 border-gold-500/30 font-semibold'
                    : 'text-neutral-300 hover:bg-dark-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="gold-divider my-2"></div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gold-metallic text-dark-950 font-bold py-3 rounded-lg text-sm shadow-gold-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Salon Appointment</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenDemo();
              }}
              className="w-full bg-dark-800 hover:bg-dark-750 text-gold-400 border border-gold-500/40 font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Free Academy Demo Class</span>
            </button>

            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="w-full text-center py-2 text-xs text-neutral-400 hover:text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>Direct Call: {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
