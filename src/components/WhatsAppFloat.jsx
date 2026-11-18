import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Calendar, GraduationCap, Flame, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPresetUrl = (topic) => {
    let msg = "";
    if (topic === 'appointment') {
      msg = "Hi Belezia Salon! I would like to book a salon appointment at your Laxmi Nagar branch.";
    } else if (topic === 'academy') {
      msg = "Hi Belezia Academy! I want to book a Free Demo Class and inquire about beauty courses.";
    } else if (topic === 'combo') {
      msg = "Hi Belezia! I want to claim your First-Visit Radiance Glow combo (₹1,499).";
    }
    return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-dark-850 hover:bg-gold-500 hover:text-dark-950 text-neutral-300 border border-neutral-700 hover:border-gold-400 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick WhatsApp Chat Popup Card */}
      {isOpen && (
        <div className="bg-dark-900 border border-gold-500/40 rounded-2xl p-5 shadow-2xl w-[310px] sm:w-[340px] animate-fadeIn backdrop-blur-xl mb-1">
          <div className="flex items-start justify-between gap-2 pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-400 fill-green-400" />
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm">Belezia Salon & Academy</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span>Online • Instant Reply</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 my-3 leading-relaxed">
            Namaste! 🙏 How can we assist you today? Tap an option below to start a direct WhatsApp chat:
          </p>

          <div className="space-y-2">
            <a
              href={getPresetUrl('appointment')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-850 hover:bg-gold-500/20 text-neutral-200 hover:text-gold-300 border border-neutral-700/80 hover:border-gold-500/40 transition-all text-xs font-medium"
            >
              <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Book Salon Appointment</span>
            </a>

            <a
              href={getPresetUrl('academy')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-850 hover:bg-gold-500/20 text-neutral-200 hover:text-gold-300 border border-neutral-700/80 hover:border-gold-500/40 transition-all text-xs font-medium"
            >
              <GraduationCap className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Book Free Academy Demo Class</span>
            </a>

            <a
              href={getPresetUrl('combo')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-dark-850 hover:bg-gold-500/20 text-neutral-200 hover:text-gold-300 border border-neutral-700/80 hover:border-gold-500/40 transition-all text-xs font-medium"
            >
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Claim First-Visit Offer (₹1,499)</span>
            </a>
          </div>

          <div className="mt-3 pt-3 border-t border-neutral-800 text-[10px] text-neutral-500 text-center">
            Shop G-56, Near Laxmi Nagar Metro • 072908 28680
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp with Belezia Salon"
      >
        {/* Pulsing Ring Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10"></span>

        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold font-sans">
          {isOpen ? 'Close Chat' : 'WhatsApp Us'}
        </span>
      </button>
    </div>
  );
}
