import React, { useState } from 'react';
import { X, GraduationCap, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND_INFO, ACADEMY_COURSES } from '../data/salonData';

export default function DemoClassModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Hair Dressing & Styling (Foundation / Comprehensive)',
    batch: 'Weekday Batch (Mon - Fri)',
    city: 'Delhi NCR'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }

    const message = encodeURIComponent(
      `Hello Belezia Academy! 🎓\nI want to book a *Free Demo Class & Counselling Session*.\n\n• *Student Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *Interested Course:* ${formData.course}\n• *Batch Preference:* ${formData.batch}\n• *Location:* ${formData.city}\n\nPlease share the upcoming batch timetable and syllabus brochure for your Laxmi Nagar campus.`
    );

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-dark-900 border border-gold-500/40 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg bg-dark-800 border border-neutral-700/80"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Zero-Cost Academy Demo
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Book Free Demo Class
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Experience 100% practical training on live models at our Laxmi Nagar academy.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Suman Choudhary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              WhatsApp Mobile Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 072908 28680"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Course of Interest
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              <option value="Professional Hair Dressing & Styling (1 to 4 Months)">Professional Hair Dressing & Styling (1 to 4 Months)</option>
              <option value="Beautician & Esthiology (Skin & Aesthetics Diploma)">Beautician & Esthiology (Skin & Aesthetics Diploma)</option>
              <option value="Professional Makeup Artistry (Airbrush & HD Bridal)">Professional Makeup Artistry (Airbrush & HD Bridal)</option>
              <option value="Nail Artistry & Extensions Certificate (15-30 Days)">Nail Artistry & Extensions Certificate (15-30 Days)</option>
              <option value="All-in-One Cosmetology & Salon Management Master Program">All-in-One Cosmetology & Salon Management Master Program</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Preferred Batch Mode
              </label>
              <select
                value={formData.batch}
                onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
              >
                <option value="Weekday Regular (Mon - Fri)">Weekday Regular (Mon - Fri)</option>
                <option value="Weekend Special (Sat - Sun)">Weekend Special (Sat - Sun)</option>
                <option value="Flexible / Part-Time">Flexible / Part-Time</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Current City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gold-metallic text-dark-950 font-bold py-3.5 rounded-xl text-sm shadow-gold-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
            <span>Confirm Free Demo on WhatsApp</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            <span>100% Placement Assistance & Live Model Training</span>
          </div>
        </form>
      </div>
    </div>
  );
}
