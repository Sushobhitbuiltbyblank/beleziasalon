import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/salonData';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceName: initialService ? `${initialService.name} (${initialService.price})` : 'Hair Keratin / Botox Therapy',
    date: '',
    timeSlot: '11:00 AM - 01:00 PM',
    notes: ''
  });

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceName: `${initialService.name} (${initialService.price})`
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and WhatsApp number.");
      return;
    }

    const message = encodeURIComponent(
      `Hello Belezia Salon & Academy! ✨\nI want to book an appointment:\n\n• *Name:* ${formData.name}\n• *Mobile:* ${formData.phone}\n• *Service:* ${formData.serviceName}\n• *Date:* ${formData.date || 'Earliest available'}\n• *Time:* ${formData.timeSlot}\n${formData.notes ? `• *Note:* ${formData.notes}\n` : ''}\nPlease confirm my slot at Laxmi Nagar.`
    );

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-dark-900 border border-gold-500/40 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-lg bg-dark-800 border border-neutral-700/80"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            VIP Appointment Booking
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Book Your Belezia Experience
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Confirmed instantly on WhatsApp with guaranteed zero wait time upon arrival.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Radhika Roy"
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
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Select Desired Treatment
            </label>
            <select
              value={formData.serviceName}
              onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={`${s.name} (${s.price})`}>
                  {s.name} ({s.price})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Preferred Time Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
              >
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                <option value="06:00 PM - 08:30 PM">06:00 PM - 08:30 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Special Instructions / Hair Length (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Thick curls, looking for natural look..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold-metallic text-dark-950 font-bold py-3.5 rounded-xl text-sm shadow-gold-md hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
            <span>Confirm on WhatsApp ({BRAND_INFO.phoneDisplay})</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
            <span>100% genuine products unsealed in front of you.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
