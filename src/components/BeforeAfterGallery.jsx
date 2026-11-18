import React, { useState } from 'react';
import { 
  Sparkles, 
  Instagram, 
  ArrowRight, 
  SlidersHorizontal, 
  CheckCircle2, 
  Eye, 
  ExternalLink 
} from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER_ITEMS, BRAND_INFO } from '../data/salonData';

export default function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sliderPosition, setSliderPosition] = useState(50); // percentage for interactive comparison
  const [selectedBeforeAfter, setSelectedBeforeAfter] = useState(0);

  const filters = [
    { id: 'all', label: 'All Showcase' },
    { id: 'hair', label: 'Hair & Color' },
    { id: 'bridal', label: 'Bridal Studio' },
    { id: 'skincare', label: 'Skincare & Hydra' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'academy', label: 'Academy Live' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const currentBA = BEFORE_AFTER_ITEMS[selectedBeforeAfter];

  return (
    <section id="gallery" className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-850 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Transformations & Artistry
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Every client is a canvas; every transformation is a testament to 11+ years of master precision.
            Explore our latest hair, skin, bridal, and academy work.
          </p>
        </div>

        {/* Interactive Before & After Spotlight Card */}
        <div className="mb-20 bg-dark-950 rounded-2xl border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Interactive Client Transformation
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {currentBA.title}
              </h3>
            </div>

            {/* Toggle between Transformations */}
            <div className="flex items-center gap-2 bg-dark-850 p-1 rounded-xl border border-neutral-800">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedBeforeAfter(idx);
                    setSliderPosition(50);
                  }}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                    selectedBeforeAfter === idx
                      ? 'bg-gold-metallic text-dark-950 font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Split View / Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Slider Box */}
            <div className="lg:col-span-7">
              <div className="relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden select-none border border-neutral-700 shadow-xl group">
                {/* After Image (Full background) */}
                <img
                  src={currentBA.afterImg}
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-dark-950/80 backdrop-blur-md text-gold-300 font-bold text-xs px-3 py-1 rounded-md border border-gold-500/40">
                  AFTER: {currentBA.brand}
                </div>

                {/* Before Image (Clipped by slider position) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentBA.beforeImg}
                    alt="Before Transformation"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '600px' }}
                  />
                  <div className="absolute top-4 left-4 bg-dark-950/80 backdrop-blur-md text-neutral-300 font-bold text-xs px-3 py-1 rounded-md border border-neutral-700">
                    BEFORE
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-gold-400 shadow-gold-md cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-400 text-dark-950 flex items-center justify-center font-bold text-xs shadow-lg">
                    ⇄
                  </div>
                </div>

                {/* Range Input Overlay for Dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Drag to compare before and after"
                />
              </div>
              <div className="text-center text-xs text-neutral-400 mt-2">
                ← Slide horizontally to compare Before & After results →
              </div>
            </div>

            {/* Description & Results Points */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Before Treatment:
                </div>
                <p className="text-xs sm:text-sm text-neutral-300">
                  {currentBA.beforeText}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-gold-500/30">
                <div className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                  After Transformation:
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                  {currentBA.afterText}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Belezia Salon, I saw your ${currentBA.title} before/after transformation. I want a consultation for my hair/skin.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-metallic text-dark-950 font-bold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-gold-sm"
                >
                  <span>Book This Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-sm'
                  : 'bg-dark-850 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-dark-850 border border-neutral-800 hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-1 shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md text-gold-400 border border-gold-500/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-serif font-bold text-base mb-1 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-dark-850 via-dark-800 to-dark-850 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 via-rose-500 to-purple-600 p-0.5 shrink-0 shadow-lg">
              <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <div className="text-white font-serif font-bold text-lg sm:text-xl">
                Follow Us on Instagram {BRAND_INFO.instagramHandle}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">
                Daily live hair stories, bridal transformations, student reels, and flash discount drops.
              </div>
            </div>
          </div>

          <a
            href={BRAND_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gold-400 text-dark-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Visit @beleziasalonlaxminagar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
