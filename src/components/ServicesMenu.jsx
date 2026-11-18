import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Crown, 
  Gem, 
  Flame, 
  Clock, 
  Check, 
  MessageCircle, 
  Search, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES, BRAND_INFO } from '../data/salonData';

export default function ServicesMenu({ onSelectServiceForBooking }) {
  const [activeCategory, setActiveCategory] = useState('hair');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Crown':
        return <Crown className="w-4 h-4" />;
      case 'Gem':
        return <Gem className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  // Filter services by category or search query
  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.brandBadge.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery.trim() !== '') {
      return matchesSearch;
    }
    return service.category === activeCategory;
  });

  const generateWhatsAppLink = (serviceName, price) => {
    const message = encodeURIComponent(
      `Hi Belezia Salon & Academy! I would like to book an appointment for: *${serviceName}* (${price}) at your Laxmi Nagar salon. Please let me know available slots.`
    );
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="services" className="py-20 bg-dark-950 relative">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Salon Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Luxury Services & Chemical Treatments
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Every service is performed using sealed, authentic formulations from global cosmetic houses.
            Select a category below or search our treatment menu.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Keratin, Hydra, INOA, Bridal, Pedicure)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-850 border border-neutral-700/80 focus:border-gold-500 text-white pl-11 pr-4 py-3 rounded-xl text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white bg-dark-750 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Desktop & Mobile Scrollable) */}
        {!searchQuery && (
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-md scale-102'
                      : 'bg-dark-850 text-neutral-300 hover:text-white hover:bg-dark-800 border border-neutral-800'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Search feedback if query is active */}
        {searchQuery && (
          <div className="text-center text-sm text-neutral-400 mb-8">
            Showing results for "<span className="text-gold-300 font-medium">{searchQuery}</span>" ({filteredServices.length} treatments found)
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-dark-850 rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                service.popular
                  ? 'border-gold-500/40 shadow-gold-sm hover:border-gold-400'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Card Top: Badges & Price */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.popular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/40">
                        Most Popular
                      </span>
                    )}
                    {service.discount && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                        {service.discount}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-dark-800 text-neutral-400 border border-neutral-700/60">
                      {service.brandBadge}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-serif font-bold text-lg sm:text-xl text-gold-400">
                      {service.price}
                    </div>
                    {service.originalPrice && (
                      <div className="text-xs text-neutral-500 line-through">
                        {service.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Name & Tagline */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {service.name}
                </h3>
                <div className="text-xs text-gold-400/90 font-medium mb-3">
                  {service.tagline}
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Duration & Highlights */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-neutral-800/80">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                <a
                  href={generateWhatsAppLink(service.name, service.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-dark-800 hover:bg-gold-500 hover:text-dark-950 text-gold-300 border border-gold-500/30 hover:border-gold-500 font-semibold py-2.5 px-3 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-green-400 group-hover/btn:text-dark-950" />
                  <span>Book on WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  title="Quick Reservation Form"
                  className="p-2.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Guarantee Note */}
        <div className="mt-12 p-6 rounded-2xl bg-dark-850/80 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Need a Custom Chemical or Bridal Consultation?</div>
              <div className="text-xs text-neutral-400">Our senior trichologists & bridal makeup experts offer free in-salon hair & skin assessments.</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Belezia Salon, I would like to consult with your senior master stylist for my hair/skin.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-dark-950 bg-gold-metallic px-5 py-2.5 rounded-lg hover:brightness-110 transition-all shrink-0"
          >
            Chat with Master Stylist
          </a>
        </div>
      </div>
    </section>
  );
}
