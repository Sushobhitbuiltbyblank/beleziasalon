import React from 'react';
import { Flame, Clock, Sparkles, MessageCircle, Gift, CheckCircle } from 'lucide-react';
import { SERVICES, BRAND_INFO } from '../data/salonData';

export default function SignatureCombos({ onSelectServiceForBooking }) {
  const combos = SERVICES.filter((s) => s.category === 'combos');

  const generateWhatsAppComboLink = (comboName, price) => {
    const message = encodeURIComponent(
      `Hi Belezia Salon! I want to claim the Special Combo Offer: *${comboName}* at ${price}. Please confirm my booking slot at your Laxmi Nagar salon.`
    );
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="combos" className="py-20 bg-dark-900 relative overflow-hidden border-t border-b border-gold-500/15">
      {/* Decorative Golden Ambient Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Limited-Period Salon Specials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Signature Combos & First-Visit Offers
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-300 text-sm sm:text-base">
            Curated multi-service pampering packages designed to deliver maximum results with up to 50% savings.
            Valid on advance WhatsApp reservation.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="relative rounded-2xl bg-gradient-to-b from-dark-850 to-dark-950 border border-gold-500/40 p-6 sm:p-8 shadow-xl shadow-black/60 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-gold-metallic text-dark-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-gold-sm">
                {combo.discount}
              </div>

              <div>
                {/* Title & Category */}
                <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-2">
                  <Gift className="w-4 h-4 text-gold-400" />
                  <span>{combo.brandBadge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {combo.name}
                </h3>

                <p className="text-xs sm:text-sm text-gold-300/90 font-medium mb-4">
                  {combo.tagline}
                </p>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {combo.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6 bg-dark-900/80 p-4 rounded-xl border border-neutral-800">
                  <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                    What's Included:
                  </div>
                  {combo.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Price & Booking */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-black text-gold-400">
                      {combo.price}
                    </span>
                    <span className="text-sm text-neutral-500 line-through">
                      {combo.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>Duration: {combo.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={generateWhatsAppComboLink(combo.name, combo.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial bg-gold-metallic text-dark-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
                    <span>Claim on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectServiceForBooking(combo)}
                    className="bg-dark-800 hover:bg-dark-750 text-neutral-200 border border-neutral-700 px-3.5 py-3 rounded-xl text-xs font-medium transition-colors"
                    title="Reserve via Form"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
