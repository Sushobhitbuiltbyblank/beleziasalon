import React from 'react';
import { X, ShieldCheck, Building2, MapPin, Phone, Mail, Globe, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export default function LegalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-dark-900 border border-gold-500/40 rounded-2xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg bg-dark-800 border border-neutral-700/80 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5" />
            Official Business Information
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Legal Entity & Organization Details
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Registered commercial and business verification details for Belezia Salon.
          </p>
        </div>

        {/* Business Details Grid */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Legal Enterprise Name</span>
                <span className="text-white font-bold text-base">BELEZIA SALON</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Udyam Registration Number</span>
                <span className="text-gold-400 font-mono font-bold text-sm">UDYAM-DL-04-0027496</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Enterprise Type & Ministry</span>
                <span className="text-neutral-200">Micro (Services) • M/o MSME, Govt. of India</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Trading / Operating Name</span>
                <span className="text-gold-400 font-semibold text-sm">Belezia Salon & Academy</span>
              </div>

              <div className="sm:col-span-2">
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Name of Unit(s)</span>
                <span className="text-neutral-200">1. M/S BLADE SALON AND WELLNESS PRIVATE LIMITED &nbsp;|&nbsp; 2. BELEZIA SALON</span>
              </div>

              <div className="sm:col-span-2">
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">National Industry Classification (NIC)</span>
                <span className="text-neutral-200 font-mono text-[11px]">NIC 96020 - Hairdressing, hair styling, skin care, makeup, facial massage, manicure & pedicure</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Official Domain</span>
                <span className="text-neutral-200 font-mono">beleziasalon.in</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Date of Registration</span>
                <span className="text-neutral-200">03/03/2022</span>
              </div>

              <div className="sm:col-span-2">
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Official Registered Address (As per Udyam)</span>
                <span className="text-neutral-200">G-56, Ground Floor, Belezia Salon, G Block, Vikas Marg, Laxmi Nagar, Delhi - 110092, India</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Registered Official Mobile</span>
                <span className="text-neutral-200 font-medium">+91 82851 71871 (Salon Desk: 072908 28680)</span>
              </div>

              <div>
                <span className="text-neutral-400 block text-[11px] uppercase tracking-wider">Registered Official Email</span>
                <span className="text-neutral-200 font-medium">jain.prabhat311@gmail.com / info@beleziasalon.in</span>
              </div>
            </div>
          </div>

          {/* Privacy & Compliance Statement */}
          <div className="p-4 rounded-xl bg-dark-950/80 border border-neutral-800 text-xs text-neutral-300 space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Customer Privacy & Data Protection Commitment</span>
            </div>
            <p className="text-neutral-400 leading-relaxed text-[11px]">
              <strong>Belezia Salon</strong> respects customer privacy and protects all personal information gathered via appointment bookings and academic demo registrations. We do not sell, rent, or share personal contact data with unauthorized third parties. All booking requests are processed strictly for appointment scheduling, customer service support, and academic admissions counseling.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gold-metallic text-dark-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-gold-sm hover:brightness-110 transition-all cursor-pointer"
          >
            Close Information
          </button>
        </div>
      </div>
    </div>
  );
}
