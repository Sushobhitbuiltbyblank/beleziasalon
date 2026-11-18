import React from 'react';
import { Calendar, GraduationCap, ShieldCheck, Star, Award, Sparkles, ChevronRight } from 'lucide-react';
import { BRAND_INFO, AUTHENTIC_BRANDS } from '../data/salonData';

export default function Hero({ onOpenBooking, onOpenDemo }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-dark-950">
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85"
          alt="Belezia Salon & Academy Luxury Interior"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/85 to-dark-950/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent"></div>
        {/* Subtle decorative gold line glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-gold-500/35 mb-6 backdrop-blur-md shadow-gold-sm">
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
            <span className="text-xs sm:text-sm font-semibold text-gold-300 tracking-wider uppercase">
              11+ Years of Industry Excellence • East Delhi
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Luxury Beauty, Grooming & <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-serif">Professional Academy</span> <br className="hidden sm:inline" />
            in Laxmi Nagar
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
            East Delhi’s premier destination for bespoke hair transformations, chemical styling,
            7-in-1 Hydra Facials, and HD bridal artistry. Powered by <strong className="text-gold-300 font-medium">100% authentic L'Oréal Professionnel, Lotus Herbals & O3+</strong>,
            alongside government-recognized live-model beauty academy diplomas.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="bg-gold-metallic text-dark-950 font-bold px-7 py-3.5 rounded-lg shadow-gold-md hover:shadow-gold-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-dark-950 group-hover:scale-110 transition-transform" />
              <span>Book Salon Appointment</span>
              <ChevronRight className="w-4 h-4 text-dark-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#academy"
              className="bg-dark-850/90 hover:bg-dark-800 text-gold-300 border border-gold-500/40 hover:border-gold-400 font-semibold px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 group text-sm sm:text-base backdrop-blur-md"
            >
              <GraduationCap className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Explore Academy Courses</span>
            </a>
          </div>

          {/* Key Assurance Badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-300 pt-2 border-t border-neutral-800/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>100% Original Products Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span>4.9★ Rated (650+ Google Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Certified Master Stylists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Metrics Bar */}
      <div className="relative z-10 border-t border-b border-gold-500/20 bg-dark-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="pt-2 md:pt-0">
              <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient">
                11+ Years
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium mt-1">
                Industry Excellence
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient">
                25,000+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium mt-1">
                Delighted Clients
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient">
                1,200+
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium mt-1">
                Academy Alumni
              </div>
            </div>

            <div className="pt-2 md:pt-0 md:pl-6">
              <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient flex items-center justify-center gap-1">
                <span>4.9</span>
                <span className="text-amber-400 text-xl">★</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium mt-1">
                Top Rated in East Delhi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authorized Brands Ribbon */}
      <div className="relative z-10 bg-dark-950 py-3.5 border-b border-neutral-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 text-neutral-400 text-xs">
            <span className="text-gold-400/90 uppercase tracking-widest font-semibold flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              100% Original Products Used:
            </span>
            <div className="flex items-center flex-wrap gap-4 sm:gap-8 font-serif text-sm text-neutral-300">
              <span className="hover:text-gold-300 transition-colors">L'Oréal Professionnel</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-gold-300 transition-colors">INOA Ammonia-Free</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-gold-300 transition-colors">Lotus Herbals Professional</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-gold-300 transition-colors">O3+ Derma Care</span>
              <span className="text-neutral-700">•</span>
              <span className="hover:text-gold-300 transition-colors">Schwarzkopf Pro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
