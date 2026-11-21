import React from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Sparkles, 
  HeartHandshake, 
  CheckCircle2, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import { BRAND_INFO, TRUST_BADGES } from '../data/salonData';

export default function TrustHighlights({ onOpenBooking, onOpenDemo }) {
  const getBadgeIcon = (name) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-gold-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-gold-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-gold-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-gold-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            East Delhi’s Gold Standard in Beauty
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            11+ Years of Craftsmanship & Trust
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Founded in the vibrant heart of Laxmi Nagar, <strong className="text-white font-semibold">Belezia Salon</strong> (operating as Belezia Salon & Academy) was built on a single
            uncompromising promise: <strong className="text-gold-300 font-semibold">100% genuine luxury products</strong> and
            master-level artistry, delivered with hospital-grade hygiene and warm hospitality.
          </p>
        </div>

        {/* 2-Column Story & Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Image with Floating Experience Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl shadow-black group">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                alt="Belezia Salon Master Stylist at Work"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent"></div>

              {/* Floating Gold Experience Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-dark-900/90 border border-gold-500/40 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-400 font-bold">Laxmi Nagar, Delhi</div>
                    <div className="text-white font-serif font-bold text-lg">Shop G-56, Near Metro Gate 1</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/50 flex flex-col items-center justify-center text-center">
                    <span className="text-gold-300 font-serif font-black text-base leading-none">11+</span>
                    <span className="text-[9px] uppercase tracking-wider text-gold-400 font-bold">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Guarantees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              Why Discerning Clients & Ambitious Students Choose <span className="text-gold-gradient">Belezia</span>
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Whether you come to us for a life-changing <strong className="text-white">Hair Botox or Keratin therapy</strong>,
              an ethereal <strong className="text-white">HD bridal makeover</strong>, or to embark on your professional career through our
              <strong className="text-white"> Academy Diploma</strong>, you receive the full backing of our eleven-year legacy.
            </p>

            {/* Checklist of 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-850/80 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Open Product Policy</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Every L'Oréal color tube & Lotus ampoule is unsealed right at your chair.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-850/80 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">100% Live Model Academy</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Students gain muscle memory on real clients under strict faculty guidance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-850/80 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Zero Wait-Time Booking</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">WhatsApp slot reservation guarantees your chair is ready the moment you walk in.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-850/80 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Transparent Pricing</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">No hidden surprises or forced upselling. Honest salon and academy rates.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="bg-gold-metallic text-dark-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-gold-sm hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenDemo}
                className="text-gold-400 hover:text-gold-300 font-semibold text-sm border-b border-gold-500/50 hover:border-gold-300 py-1 transition-all"
              >
                Enquire for Academy Batches →
              </button>
            </div>
          </div>
        </div>

        {/* 6 Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="bg-dark-850 p-6 rounded-xl border border-neutral-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-800 border border-gold-500/30 flex items-center justify-center mb-4 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-colors">
                {getBadgeIcon(badge.icon)}
              </div>
              <h3 className="text-white font-serif font-bold text-lg mb-2 group-hover:text-gold-300 transition-colors">
                {badge.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
