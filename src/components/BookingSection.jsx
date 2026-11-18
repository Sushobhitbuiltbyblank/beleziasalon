import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, SERVICE_CATEGORIES } from '../data/salonData';

export default function BookingSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceCategory: preselectedService ? preselectedService.name : 'Hair Styling / Keratin Treatment',
    preferredDate: '',
    preferredTime: '11:00 AM - 01:00 PM',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update when preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: `${preselectedService.name} (${preselectedService.price})`
      }));
    }
  }, [preselectedService]);

  const timeSlots = [
    '10:00 AM - 12:00 PM (Morning Slot)',
    '12:00 PM - 02:00 PM (Afternoon Slot)',
    '02:00 PM - 04:00 PM (Mid-Day Slot)',
    '04:00 PM - 06:00 PM (Evening Slot)',
    '06:00 PM - 08:30 PM (Prime Evening Slot)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = encodeURIComponent(
      `Hello Belezia Salon & Academy! ✨\nI would like to book a salon appointment:\n\n• *Client Name:* ${formData.name}\n• *Contact Phone:* ${formData.phone}\n• *Service Requested:* ${formData.serviceCategory}\n• *Preferred Date:* ${formData.preferredDate || 'Earliest Available'}\n• *Time Slot:* ${formData.preferredTime}\n${formData.notes ? `• *Special Notes:* ${formData.notes}\n` : ''}\nPlease confirm my slot at your Laxmi Nagar branch.`
    );

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Decorative Light Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hospitality & Assurances */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Instant VIP Reservation
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Reserve Your Salon Visit with <br />
              <span className="text-gold-gradient">Guaranteed Zero Waiting</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We respect your valuable time. Confirming your appointment on WhatsApp secures your preferred stylist,
              sanitized chair, and authentic sealed product batches before you arrive.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/80 border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Instant WhatsApp Confirmation</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Receive immediate confirmation and directions link right on your WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/80 border border-neutral-800">
                <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">100% Genuine L'Oréal & Lotus Products</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Every chemical treatment kit is opened and unsealed in your presence.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-dark-850/80 border border-neutral-800">
                <Calendar className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Open 7 Days a Week</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Operating Monday through Sunday, 10:00 AM to 9:00 PM for your convenience.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-850 border border-gold-500/20 text-xs text-neutral-300">
              <strong className="text-gold-400 block mb-1">Prefer to speak directly?</strong>
              Call our front desk at <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-white font-bold underline hover:text-gold-300">{BRAND_INFO.phoneDisplay}</a>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Booking Widget */}
          <div className="lg:col-span-7 bg-dark-950 border border-gold-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-gold-metallic text-dark-950 text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-gold-sm">
              Quick 60-Sec Booking
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Book Your Appointment
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Complete this form to generate a formatted WhatsApp booking request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Mehra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    WhatsApp Phone Number *
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
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Select Service / Combo *
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="Hair Keratin / Botox Therapy">Hair Keratin / Botox Therapy</option>
                  <option value="L'Oréal INOA / Majirel Hair Color & Highlights">L'Oréal INOA / Majirel Hair Color & Highlights</option>
                  <option value="Permanent Rebonding / Smoothening">Permanent Rebonding / Smoothening</option>
                  <option value="Precision Haircut & Styling (Women / Men)">Precision Haircut & Styling (Women / Men)</option>
                  <option value="7-in-1 Hydra Facial Glow">7-in-1 Hydra Facial Glow</option>
                  <option value="Korean Glass Skin Facial">Korean Glass Skin Facial</option>
                  <option value="HD / Airbrush Bridal Makeup Consultation">HD / Airbrush Bridal Makeup Consultation</option>
                  <option value="Pre-Bridal Radiance Glow Package">Pre-Bridal Radiance Glow Package</option>
                  <option value="Royal Groom Wedding Package">Royal Groom Wedding Package</option>
                  <option value="Full Set Acrylic / Gel Nail Extensions">Full Set Acrylic / Gel Nail Extensions</option>
                  <option value="First-Visit Radiance Combo (₹1,499)">First-Visit Radiance Combo (₹1,499)</option>
                  <option value="Total Hair Revive & Botox Combo (₹2,999)">Total Hair Revive & Botox Combo (₹2,999)</option>
                  <option value="Men's Executive Grooming Combo (₹799)">Men's Executive Grooming Combo (₹799)</option>
                  <option value="Custom Hair & Skin Consultation">Custom Hair & Skin Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Time slot */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Any Specific Hair Length / Skin Concern? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Waist-length hair, dry scalp, sensitive skin..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2 rounded-xl text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-gold-metallic text-dark-950 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-gold-md hover:shadow-gold-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
                <span>Confirm on WhatsApp ({BRAND_INFO.phoneDisplay})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>Instant reply • No advance booking deposit required</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
