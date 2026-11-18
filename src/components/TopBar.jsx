import React from 'react';
import { Phone, MapPin, Clock, Instagram, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function TopBar() {
  return (
    <div className="bg-dark-950 text-neutral-300 text-xs border-b border-gold-500/15 py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Timings */}
        <div className="flex items-center flex-wrap justify-center md:justify-start gap-4">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>Near Laxmi Nagar Metro (Gate 1), Vikas Marg, Delhi</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <span>Mon – Sun: 10:00 AM – 9:00 PM</span>
          </div>
        </div>

        {/* Right: Guarantee & Contacts */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-gold-400 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>100% Original Products Guaranteed</span>
          </div>
          <span className="hidden lg:inline text-neutral-600">•</span>
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-white hover:text-gold-400 font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>Call: {BRAND_INFO.phoneDisplay}</span>
          </a>
          <span className="text-neutral-600">•</span>
          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-neutral-300 hover:text-gold-400 transition-colors"
            title="Follow us on Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-gold-500" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
