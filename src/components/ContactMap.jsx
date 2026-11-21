import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-dark-950 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-850 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Find Us in Laxmi Nagar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Visit Belezia Salon & Academy
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-400 text-sm sm:text-base">
            Conveniently located on Main Vikas Marg, directly beside Laxmi Nagar Metro Station.
            Valet assistance & parking available nearby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-dark-900 border border-neutral-800 hover:border-gold-500/40 p-6 rounded-2xl transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark-850 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-0.5">Salon & Academy Address</h3>
                  <div className="text-xs text-gold-400 font-semibold mb-1.5 flex flex-wrap items-center gap-1.5">
                    <span>Legal Business Name: <strong className="text-white">Belezia Salon</strong></span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400 font-mono text-[11px]">Udyam: UDYAM-DL-04-0027496</span>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                  <div className="mt-2 text-xs font-semibold text-gold-400 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Landmark: Near Gate No. 1, Laxmi Nagar Metro Station, Vikas Marg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="bg-dark-900 border border-neutral-800 hover:border-gold-500/40 p-6 rounded-2xl transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark-850 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-1">Direct Call & WhatsApp</h3>
                  <div className="space-y-1">
                    <a
                      href={`tel:${BRAND_INFO.phoneRaw}`}
                      className="block text-base font-bold text-gold-400 hover:underline"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                    <div className="text-xs text-neutral-400">
                      Udyam Registered Mobile: <a href="tel:+918285171871" className="text-neutral-200 hover:underline font-medium">+91 82851 71871</a>
                    </div>
                    <div className="text-xs text-neutral-400">
                      Official Email: <a href="mailto:jain.prabhat311@gmail.com" className="text-neutral-200 hover:underline">jain.prabhat311@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-dark-900 border border-neutral-800 hover:border-gold-500/40 p-6 rounded-2xl transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark-850 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-1">Opening Hours</h3>
                  <p className="text-sm text-neutral-300 font-medium">
                    Monday – Sunday: 10:00 AM – 9:00 PM
                  </p>
                  <p className="text-xs text-gold-400/90 mt-1">
                    Open 365 days a year including festival seasons & national holidays.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Belezia Salon, I want directions to your Laxmi Nagar branch.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold-metallic text-dark-950 font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-gold-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
              <span>Get Live Location on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7 bg-dark-900 rounded-2xl border border-gold-500/30 overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 bg-dark-850 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-semibold text-white">Live Salon Location</span>
                <span className="text-neutral-500">• Vikas Marg, East Delhi</span>
              </div>
              <a
                href="https://maps.google.com/?q=Belezia+Salon+Laxmi+Nagar+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1 font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map iframe container */}
            <div className="relative flex-1 min-h-[380px] w-full">
              <iframe
                title="Belezia Salon & Academy Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9963248889895!2d77.2750694!3d28.6304412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb528b74f4c9%3A0x644c330f6530a61a!2sLaxmi%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale contrast-125 invert-[0.9] opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-3.5 bg-dark-850 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
              <span>Metro Route: Exit Gate 1 at Laxmi Nagar Station & walk 200m towards Vikas Marg.</span>
              <span className="text-gold-400 font-semibold hidden sm:inline">Free Parking Near Metro Gate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
