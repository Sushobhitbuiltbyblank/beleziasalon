# Belezia Salon & Academy — Official Website

Official website and digital presence for **Belezia Salon & Academy**, located in Laxmi Nagar, Delhi. Inspired by luxury dark-and-gold aesthetic design with modern responsive layout, interactive service menu, dedicated beauty academy section (modeled after VLCC Institute / L'Oréal Academy), and instant WhatsApp VIP booking.

---

## 🌟 Brand & Business Overview
- **Brand Name:** Belezia Salon & Academy
- **Experience:** 11+ Years of Industry Excellence in East Delhi
- **Promise:** 100% Original Products Guaranteed (L'Oréal Professionnel, INOA, Lotus Herbals Professional, O3+)
- **Location:** Shop No. G-56, Near Laxmi Nagar Metro Station (Gate No. 1), Vikas Marg, Laxmi Nagar, Delhi - 110092
- **Timings:** Monday – Sunday, 10:00 AM – 9:00 PM
- **Phone / WhatsApp:** 072908 28680 / +91 72908 28680
- **Email:** experts@beleziasalon.in
- **Instagram:** [@beleziasalonlaxminagar](https://www.instagram.com/beleziasalonlaxminagar/)
- **Google Reviews:** 4.9★ Rated (650+ verified client reviews)

---

## 🚀 Key Features & Highlights

### 1. Luxury Dark & Gold Aesthetic
- Deep rich black and charcoal background (`#0B0B0B` / `#121212`) accented with metallic warm gold gradients (`#D4AF37`, `#C5A059`).
- Elegant serif display typography (`Playfair Display`, `Cinzel`) paired with clean sans-serif body text (`Plus Jakarta Sans`).

### 2. Comprehensive Categorized Salon Menu
- **Hair Styling & Chemical Treatments:** Precision Haircuts (Women & Men), L'Oréal INOA Ammonia-Free Color, Majirel Root Touch-ups, Nano-Plastia & Keratin Protein Treatments, Advanced Hair Botox, Permanent Rebonding/Smoothening, and Luxury Mythic Hair Spa.
- **Advanced Skincare & Facials:** 7-in-1 Medical Hydra Facial, Korean Glass Skin Facial, Organic Lotus Phyto-Rx De-Tan, and O3+ Bridal Glow Facials.
- **Bridal & Groom Studio:** HD Bridal Makeup, Temptu Pro Airbrush Makeup, Pre-Bridal Radiance Packages, and Royal Groom Wedding Makeovers.
- **Hands, Feet & Nails:** Royal Aromatherapy Spa Pedicures, Whitening Manicures, Full Set Acrylic / Gel Nail Extensions, and 3D Nail Art.
- **Signature Combos & First-Visit Offers:** Curated grooming & De-Tan packages with up to 50% savings and instant WhatsApp booking.

### 3. Dedicated "Belezia Academy" (VLCC / L'Oréal Academy Model)
- **100% Live Model Practice:** Hands-on training on real clients under veteran faculty supervision.
- **Course Categories:**
  1. *Professional Hair Dressing & Styling* (Foundation & Comprehensive Diploma)
  2. *Beautician & Esthiology* (Skin & Machine Aesthetics Diploma)
  3. *Professional Makeup Artistry* (Airbrush, HD Bridal & Portfolio Masterclass)
  4. *Nail Artistry & Extensions* (Acrylic & 3D Gel Art Certification)
- **Interactive Syllabus Accordions:** Expandable modules covering tool mastery, chemical science, and salon business management.
- **Career Pathways:** Realistic earning potentials and career trajectories (Senior Stylist, Freelance Bridal Artist, Salon Entrepreneur).
- **Free Demo Class Enquiry:** Direct form generating pre-filled WhatsApp admissions inquiries.

### 4. Interactive Before / After Comparison Slider
- Drag-to-compare interactive slider showcasing authentic transformations (Hair Keratin & Frizz Correction, 7-in-1 Hydra Facial Glow).
- Filterable visual portfolio grid and direct Instagram follow callout.

### 5. Instant WhatsApp VIP Booking
- Integrated WhatsApp reservation widget formatting client name, selected service, date, and preferred time slot for zero wait time upon arrival.
- Floating bottom-right WhatsApp quick-chat widget with one-click presets.

---

## 🛠️ Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom Gold & Dark Luxury Theme)
- **Icons:** Lucide React
- **Deployment Target:** Vercel (with `vercel.json` SPA rewrite configuration)

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Belezia Salon & Academy official website"
   ```
2. Create a new repository on GitHub and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Import the repository into [Vercel](https://vercel.com):
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add your Custom Domain in **Project Settings > Domains**.

### Option 2: Via Vercel CLI
```bash
npx vercel --prod
```

---

## 📁 Project Architecture
```
Belezia Salon Website/
├── index.html               # SEO meta tags, Google Fonts, OpenGraph, JSON-LD schema
├── vercel.json              # SPA rewrite rule to prevent 404s on route refresh
├── tailwind.config.js       # Luxury gold & dark charcoal color palettes and fonts
├── vite.config.js           # Vite React configuration
├── package.json             # Scripts & dependencies
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Main application layout & modals
    ├── index.css            # Custom scrollbar, gold gradients & shimmer styles
    ├── data/
    │   └── salonData.js     # Centralized brand info, services, combos, academy syllabus, reviews
    └── components/
        ├── TopBar.jsx               # Announcement bar with phone, timings & location
        ├── Navbar.jsx               # Sticky header with logo, navigation links & book button
        ├── Hero.jsx                 # Full-viewport hero banner with metrics & authentic brand ribbon
        ├── TrustHighlights.jsx      # 11-year legacy, open product policy, certified masters
        ├── ServicesMenu.jsx         # Categorized tabs with search & WhatsApp booking
        ├── SignatureCombos.jsx      # Special first-visit & seasonal value combos
        ├── AcademySection.jsx       # VLCC-style academy view, syllabus accordions & demo form
        ├── BeforeAfterGallery.jsx   # Interactive comparison slider & filterable gallery
        ├── Reviews.jsx              # Dual-tab salon client & academy student reviews
        ├── BookingSection.jsx       # Interactive WhatsApp reservation widget
        ├── ContactMap.jsx           # Full address, landmark, phone, timings & Google Map
        ├── FaqSection.jsx           # Accordion for genuine products & academy questions
        ├── Footer.jsx               # Comprehensive sitemap, business information & legal notes
        ├── WhatsAppFloat.jsx        # Floating WhatsApp action button with quick presets
        ├── BookingModal.jsx         # Global popup for instant appointment booking
        └── DemoClassModal.jsx       # Global popup for free academy demo class booking
```
