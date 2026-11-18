import React, { useState } from 'react';
import { Star, Quote, Award, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { REVIEWS_SALON, REVIEWS_ACADEMY, BRAND_INFO } from '../data/salonData';

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('salon'); // 'salon' | 'academy'

  return (
    <section id="reviews" className="py-20 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-850 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Words of Love & Success
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Over a decade of smiles, stunning bridal looks, restored hair health, and transformed student careers.
          </p>
        </div>

        {/* Dual Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('salon')}
            className={`px-6 py-3 rounded-xl font-serif font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              activeTab === 'salon'
                ? 'bg-gold-metallic text-dark-950 shadow-gold-md scale-105'
                : 'bg-dark-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Salon Client Reviews (4.9★)
          </button>

          <button
            onClick={() => setActiveTab('academy')}
            className={`px-6 py-3 rounded-xl font-serif font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
              activeTab === 'academy'
                ? 'bg-gold-metallic text-dark-950 shadow-gold-md scale-105'
                : 'bg-dark-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Academy Student Success Stories
          </button>
        </div>

        {/* Reviews Grid */}
        {activeTab === 'salon' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {REVIEWS_SALON.map((review) => (
              <div
                key={review.id}
                className="bg-dark-900 border border-neutral-800 hover:border-gold-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-neutral-500">{review.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-serif font-bold text-sm sm:text-base">
                      {review.name}
                    </h4>
                    <div className="text-[11px] text-neutral-400">{review.location}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-gold-400 px-2.5 py-1 rounded bg-dark-850 border border-gold-500/20">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {REVIEWS_ACADEMY.map((student) => (
              <div
                key={student.id}
                className="bg-dark-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-gold-400 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(student.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{student.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <div>
                    <h4 className="text-white font-serif font-bold text-base">
                      {student.name}
                    </h4>
                    <div className="text-xs text-gold-400 font-medium">{student.course}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-dark-850 border border-neutral-700/60 text-[11px] text-neutral-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span>{student.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Reviews Trust Bar */}
        <div className="p-6 rounded-2xl bg-dark-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="text-white font-serif font-bold text-sm sm:text-base flex items-center gap-2">
                <span>Google Rating 4.9 / 5.0</span>
                <span className="text-xs text-gold-400 font-sans font-normal">(650+ Verified Client Reviews)</span>
              </div>
              <div className="text-xs text-neutral-400">
                Official Business Profile: Belezia Salon & Academy, Vikas Marg, Laxmi Nagar
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Belezia+Salon+Laxmi+Nagar+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-neutral-200 hover:text-white border border-neutral-700 flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
