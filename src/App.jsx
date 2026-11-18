import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import ServicesMenu from './components/ServicesMenu';
import SignatureCombos from './components/SignatureCombos';
import AcademySection from './components/AcademySection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import Reviews from './components/Reviews';
import BookingSection from './components/BookingSection';
import ContactMap from './components/ContactMap';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BookingModal from './components/BookingModal';
import DemoClassModal from './components/DemoClassModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenBookingModal = (service = null) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleSelectServiceForInlineBooking = (service) => {
    setSelectedService(service);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-neutral-200 font-sans selection:bg-gold-500 selection:text-dark-950">
      {/* Top Announcement & Quick Contact Bar */}
      <TopBar />

      {/* Sticky Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBookingModal()}
        onOpenDemo={handleOpenDemoModal}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenBooking={() => handleOpenBookingModal()}
          onOpenDemo={handleOpenDemoModal}
        />

        {/* 11-Year Trust Highlights & Authenticity */}
        <TrustHighlights
          onOpenBooking={() => handleOpenBookingModal()}
          onOpenDemo={handleOpenDemoModal}
        />

        {/* Comprehensive Salon Services & Chemical Menu */}
        <ServicesMenu
          onSelectServiceForBooking={handleSelectServiceForInlineBooking}
        />

        {/* Signature Combos & First-Visit Offers */}
        <SignatureCombos
          onSelectServiceForBooking={handleSelectServiceForInlineBooking}
        />

        {/* Dedicated Belezia Academy View (VLCC Institute structure) */}
        <AcademySection
          onOpenDemoModal={handleOpenDemoModal}
        />

        {/* Visual Transformations & Before/After Gallery */}
        <BeforeAfterGallery />

        {/* Verified Dual-Tab Reviews & Google Trust */}
        <Reviews />

        {/* Interactive VIP Appointment Booking Widget */}
        <BookingSection
          preselectedService={selectedService}
        />

        {/* Location, Google Map & Transit Guidance */}
        <ContactMap />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right WhatsApp Quick Chat */}
      <WhatsAppFloat />

      {/* Universal Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
      />

      {/* Academy Free Demo Class Modal */}
      <DemoClassModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
