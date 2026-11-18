import React from 'react';
import { MapPin, Phone, Clock, Instagram, Heart, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-neutral-400 text-xs border-t border-neutral-800">
      {/* Top Banner Ribbon */}
      <div className="border-b border-neutral-800/80 bg-dark-900/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-medium">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>11+ Years of Industry Excellence in Laxmi Nagar, Delhi</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-gold-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Original Products Guaranteed
            </span>
            <span className="text-neutral-700">•</span>
            <span className="text-neutral-300">Mon-Sun 10AM - 9PM</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-500/50 bg-gradient-to-br from-gold-500/20 via-dark-850 to-dark-950 flex items-center justify-center shadow-gold-sm">
                <span className="font-serif font-black text-xl text-gold-400">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-[0.2em] text-white">
                  BELEZIA
                </span>
                <span className="text-[9px] font-sans font-medium tracking-[0.25em] text-gold-400 uppercase">
                  Salon & Academy • Delhi
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed pt-1">
              East Delhi's premier unisex luxury salon, clinical skincare center, bridal studio,
              and professional beauty & hairdressing academy. Built on 100% genuine products,
              certified master talent, and live practical education.
            </p>

            <div className="pt-2 space-y-2 text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="hover:text-gold-300 font-bold">
                  {BRAND_INFO.phoneDisplay} / {BRAND_INFO.phoneInternational}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Monday – Sunday: 10:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BRAND_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-850 border border-neutral-700 hover:border-gold-500 text-neutral-200 hover:text-white transition-all text-xs"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About 11-Yr Legacy</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Salon Treatments</a></li>
              <li><a href="#combos" className="hover:text-gold-400 transition-colors">Signature Combos</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Belezia Academy</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Before / After Gallery</a></li>
              <li><a href="#reviews" className="hover:text-gold-400 transition-colors">Client & Student Reviews</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Salon Services Directory (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Nano-Plastia & Hair Keratin</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Advanced Hair Botox Therapy</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">L'Oréal INOA Ammonia-Free Color</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">French Balayage & Highlights</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">7-in-1 Medical Hydra Facial</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Korean Glass Skin Facial</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">HD & Temptu Airbrush Bridal Makeup</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Acrylic & 3D Gel Nail Extensions</a></li>
            </ul>
          </div>

          {/* Academy Courses (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-sm tracking-wider uppercase border-b border-neutral-800 pb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-gold-400" />
              <span>Academy Diplomas</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Art of Hair Dressing (1 Month)</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Absolute Hair Dressing Diploma (4 Mo)</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Skin & Beautician Artistry (1 Month)</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Professional Cosmetology & Esthiology</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Complete Bridal & Media Makeup (3 Mo)</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Self-Grooming & Party Makeup</a></li>
              <li><a href="#academy" className="hover:text-gold-400 transition-colors">Nail Art & Extensions Certificate</a></li>
              <li><a href="#academy" className="text-gold-400 font-bold hover:underline">Book Free Demo Class →</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="bg-dark-950 border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-neutral-500 text-[11px]">
          <div>
            © {currentYear} Belezia Salon & Academy. All Rights Reserved. Shop G-56, Vikas Marg, Laxmi Nagar, Delhi - 110092.
          </div>
          <div className="flex items-center gap-4">
            <span>Authorized L'Oréal Professionnel & Lotus Salon</span>
            <span>•</span>
            <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-neutral-400 hover:text-white">
              072908 28680
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
