export const BRAND_INFO = {
  name: "Belezia Salon & Academy",
  shortName: "Belezia",
  tagline: "11+ Years of Industry Excellence | 100% Original Products & Guaranteed Quality Services",
  experienceYears: 11,
  address: "Shop No. G-56, Near Laxmi Nagar Metro Station, Vikas Marg, Laxmi Nagar, Delhi - 110092",
  landmark: "Beside Metro Gate 1, Vikas Marg, Laxmi Nagar",
  phoneDisplay: "072908 28680",
  phoneInternational: "+91 72908 28680",
  phoneRaw: "+917290828680",
  whatsappNumber: "917290828680",
  instagram: "https://www.instagram.com/beleziasalonlaxminagar/",
  instagramHandle: "@beleziasalonlaxminagar",
  timings: "Monday – Sunday: 10:00 AM – 9:00 PM",
  rating: "4.9",
  reviewsCount: "650+",
  clientsServed: "25,000+",
  studentsTrained: "1,200+",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9963248889895!2d77.2750694!3d28.6304412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb528b74f4c9%3A0x644c330f6530a61a!2sLaxmi%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const AUTHENTIC_BRANDS = [
  { name: "L'Oréal Professionnel", role: "Authorized Hair Color & Texture Partner", icon: "Sparkles" },
  { name: "INOA Ammonia-Free", role: "Scalp Comfort & Oil Delivery System", icon: "ShieldCheck" },
  { name: "Lotus Herbals Professional", role: "Organic Phyto-Rx Skincare", icon: "Heart" },
  { name: "O3+ Professional", role: "Derma Brightening & Bridal Care", icon: "Award" },
  { name: "Schwarzkopf Professional", role: "Bonacure & Igora Color Suite", icon: "Star" },
  { name: "Bluesky & CND", role: "Hypoallergenic Nail Extensions & Gel", icon: "CheckCircle2" },
];

export const TRUST_BADGES = [
  {
    icon: "Clock",
    title: "11+ Years of Legacy",
    description: "East Delhi's trusted beauty landmark since 2013 with 25,000+ satisfied clients."
  },
  {
    icon: "ShieldCheck",
    title: "100% Genuine Products",
    description: "Strict zero-counterfeit policy. Genuine L'Oréal, Lotus & O3+ opened in front of you."
  },
  {
    icon: "Award",
    title: "Certified Master Stylists",
    description: "Internationally trained trichologists, master colorists and certified bridal makeup artists."
  },
  {
    icon: "GraduationCap",
    title: "Hands-on Academy Training",
    description: "Government-recognized curriculum with 100% live model training and placement support."
  },
  {
    icon: "Sparkles",
    title: "Hospital-Grade Hygiene",
    description: "Autoclaved tools, single-use disposable kits, sanitized stations for every client."
  },
  {
    icon: "HeartHandshake",
    title: "Affordable Luxury",
    description: "Ultra-premium salon finishes and academy courses at honest, transparent East Delhi pricing."
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "hair",
    name: "Hair Styling & Chemical",
    tagline: "Cut, Color, Smoothening, Botox & Keratin",
    icon: "Scissors"
  },
  {
    id: "skincare",
    name: "Advanced Skincare & Facials",
    tagline: "Hydra Facial, Glass Skin & Organic De-Tan",
    icon: "Sparkles"
  },
  {
    id: "bridal",
    name: "Bridal & Groom Studio",
    tagline: "HD / Airbrush Makeup & Pre-Bridal Glow",
    icon: "Crown"
  },
  {
    id: "nails",
    name: "Hands, Feet & Nails",
    tagline: "Spa Pedicures, Acrylic & 3D Nail Art",
    icon: "Gem"
  },
  {
    id: "combos",
    name: "Signature Combos & Offers",
    tagline: "Curated First-Visit & Seasonal Packages",
    icon: "Flame"
  }
];

export const SERVICES = [
  // HAIR SERVICES
  {
    id: "hair-keratin",
    category: "hair",
    name: "Nano-Plastia & Keratin Treatment",
    tagline: "Zero Frizz, Mirror Shine & Silky Manageability",
    description: "Deep protein infusion that restores brittle bonds, eliminates unwanted frizz, and imparts ultra-glossy finish lasting 4 to 6 months.",
    price: "From ₹2,999",
    duration: "150 - 180 mins",
    popular: true,
    brandBadge: "L'Oréal / Global Keratin",
    highlights: ["Formaldehyde-free options", "Lasts 4-6 months", "Post-wash blow dry included"]
  },
  {
    id: "hair-botox",
    category: "hair",
    name: "Advanced Hair Botox Deep Therapy",
    tagline: "Intensive Anti-Ageing Cortex Rejuvenation",
    description: "Nutritive deep conditioning complex with collagen, hyaluronic acid, and keratin that fills strand gaps for silky, featherlight hair.",
    price: "From ₹3,499",
    duration: "120 - 150 mins",
    popular: true,
    brandBadge: "Premium Molecular Care",
    highlights: ["Repairs bleached/damaged hair", "Intense hydration", "Zero chemical fumes"]
  },
  {
    id: "hair-color-inoa",
    category: "hair",
    name: "L'Oréal INOA Ammonia-Free Global Color",
    tagline: "100% Grey Coverage with Uncompromised Scalp Comfort",
    description: "Patented ODS2 oil delivery technology that delivers intense, multi-dimensional color while maintaining the hair fiber's natural lipid balance.",
    price: "From ₹2,499",
    duration: "90 mins",
    popular: false,
    brandBadge: "L'Oréal INOA",
    highlights: ["Zero ammonia smell", "6 weeks intense hydration", "Supreme shine"]
  },
  {
    id: "hair-highlights",
    category: "hair",
    name: "Balayage, Ombré & French Highlights",
    tagline: "Sun-Kissed Dimensional Color Artistry",
    description: "Customized hand-painted balayage and foil highlights personalized to your skin undertone with bond-protecting olaplex-grade care.",
    price: "From ₹3,999",
    duration: "180 mins",
    popular: true,
    brandBadge: "L'Oréal Majirel / Blond Studio",
    highlights: ["Gloss toner included", "Custom color placement", "No harsh brassy tones"]
  },
  {
    id: "hair-smoothening",
    category: "hair",
    name: "Permanent Rebonding & Smoothening",
    tagline: "Silky Straight Hair with Natural Movement",
    description: "Tames unmanageable curls and waves into poker-straight, radiant strands with high thermal protection and deep conditioning neutralizer.",
    price: "From ₹3,499",
    duration: "180 - 210 mins",
    popular: false,
    brandBadge: "L'Oréal X-Tenso Moisturist",
    highlights: ["Long-lasting poker straight finish", "Nutri-cation technology", "Silky soft touch"]
  },
  {
    id: "hair-cut-women",
    category: "hair",
    name: "Women's Precision Haircut & Blowdry",
    tagline: "Personalized Face-Framing Cut by Master Stylists",
    description: "Detailed scalp consultation, luxurious shampoo, deep conditioning mask, precision styling (Layers, Curtain Bangs, Textured Bob), and salon blast blowdry.",
    price: "₹699",
    duration: "45 mins",
    popular: false,
    brandBadge: "Master Stylist",
    highlights: ["Shampoo & mask included", "Heat-shield blowdry", "Styling guidance"]
  },
  {
    id: "hair-cut-men",
    category: "hair",
    name: "Men's Barbering & Fade Haircut",
    tagline: "Sharp Tapers, Textured Quiffs & Beard Sculpting",
    description: "Scissor-over-comb precision, high/low skin fade, refreshing cold towel wash, beard outline shaping, and matte finish styling.",
    price: "₹349",
    duration: "35 mins",
    popular: false,
    brandBadge: "Executive Grooming",
    highlights: ["Refreshing hair wash", "Beard alignment", "Razor neck trim"]
  },
  {
    id: "hair-spa",
    category: "hair",
    name: "L'Oréal Mythic Oil & Detox Hair Spa",
    tagline: "Intense Scalp Acupressure & Argan Nourishment",
    description: "Soothing head massage stimulating blood circulation, ozonated steam for deep follicle penetration, and leave-in elixir shine finish.",
    price: "From ₹999",
    duration: "60 mins",
    popular: false,
    brandBadge: "L'Oréal Hair Spa Pro",
    highlights: ["20 mins acupressure massage", "Deep steam infusion", "Relieves stress & dandruff"]
  },

  // SKINCARE & FACIALS
  {
    id: "skin-hydra-facial",
    category: "skincare",
    name: "7-in-1 Hydra Facial Medical-Grade Glow",
    tagline: "Deep Pore Vacuum Cleansing & Hyaluronic Infusion",
    description: "Multi-step treatment: vortex extraction of blackheads, fruit acid exfoliation, ultrasound serum penetration, RF skin tightening, and cold hammer sealing.",
    price: "₹1,999",
    duration: "75 mins",
    popular: true,
    brandBadge: "Medical Aesthetic Machine",
    highlights: ["Instant blackhead removal", "Zero downtime", "Plumping hyaluronic boost"]
  },
  {
    id: "skin-glass-facial",
    category: "skincare",
    name: "Korean Glass Skin Infusion Facial",
    tagline: "Translucent, Dewy, Porcelain Complexion",
    description: "Inspired by Seoul's top clinics: triple peptide cleansing, botanical lactic peeling, nano-infusion of collagen ampoules, and cooling biocellulose mask.",
    price: "₹2,499",
    duration: "80 mins",
    popular: true,
    brandBadge: "K-Beauty Derma Complex",
    highlights: ["Dewy reflective glow", "Tightens enlarged pores", "Deep lymphatic massage"]
  },
  {
    id: "skin-detan",
    category: "skincare",
    name: "Organic Lotus Phyto-Rx De-Tan Therapy",
    tagline: "Instant Sun Damage & Melanin Removal",
    description: "Non-bleaching natural enzyme formulation with kojic acid and licorice extracts that brightens stubborn tanning on face, neck, and shoulders.",
    price: "₹699",
    duration: "35 mins",
    popular: false,
    brandBadge: "Lotus Herbals Professional",
    highlights: ["No ammonia/harsh bleach", "Even skin tone", "Includes soothing toner"]
  },
  {
    id: "skin-o3-bridal",
    category: "skincare",
    name: "O3+ Whitening & Bridal Radiance Facial",
    tagline: "Celebrity Grade Oxygenating Treatment",
    description: "Award-winning 8-step derma procedure that dramatically reduces pigmentation spots, suppresses melanin, and activates natural inner luminance.",
    price: "₹2,799",
    duration: "90 mins",
    popular: false,
    brandBadge: "O3+ Professional",
    highlights: ["Rubber peel-off alginate mask", "High-frequency spot treatment", "Bridal photogenic shine"]
  },
  {
    id: "skin-cleanup",
    category: "skincare",
    name: "Lotus Phyto-Rx Deep Pore Clean-Up",
    tagline: "Essential Refreshment for Active Urbanites",
    description: "Purifying cleanse, gentle walnut micro-dermabrasion, herbal steam, hygienic comedone extraction, and pore-minimizing astringent pack.",
    price: "₹799",
    duration: "45 mins",
    popular: false,
    brandBadge: "Lotus Herbals Professional",
    highlights: ["Blackhead & whitehead removal", "Oil control", "Antioxidant face mask"]
  },

  // BRIDAL & GROOM
  {
    id: "bridal-hd",
    category: "bridal",
    name: "Bespoke HD Bridal Makeup & Hairstyling",
    tagline: "Flawless, High-Definition Perfection for 4K Cameras",
    description: "Ultra-fine silicon base that blends invisibly into skin without cakey texture. Includes international luxury lashes, jewelry setting, and regal dupatta styling.",
    price: "₹9,999",
    duration: "180 mins",
    popular: true,
    brandBadge: "MAC / Huda Beauty / Estée Lauder",
    highlights: ["Sweat & tear proof", "Real mink-feel 3D lashes", "Dupatta & jewelry placement"]
  },
  {
    id: "bridal-airbrush",
    category: "bridal",
    name: "Signature Airbrush Bridal Masterpiece",
    tagline: "Featherweight 24-Hour Velvety Waterproof Glamour",
    description: "Micro-atomized cosmetic mist applied through high-precision air compressor for poreless, velvety complexion that withstands intense heat and emotions.",
    price: "₹14,999",
    duration: "210 mins",
    popular: true,
    brandBadge: "Temptu Pro Airbrush",
    highlights: ["Completely smudge proof", "Zero brush marks", "Ultra-lightweight feel"]
  },
  {
    id: "pre-bridal-glow",
    category: "bridal",
    name: "Pre-Bridal Radiance Glow Package",
    tagline: "Complete Head-to-Toe Transformation Over 2-3 Sessions",
    description: "Full body chocolate wax & aroma polishing, Hydra Facial + O3+ Bridal Glow, L'Oréal Mythic Hair Spa, Luxury Gel Nail Extensions, and Deluxe Mani-Pedi.",
    price: "₹7,999",
    duration: "Multi-Session",
    popular: true,
    brandBadge: "Full Body Luxury Care",
    highlights: ["Split over 2-3 visits", "Full body brightening", "Customizable steps"]
  },
  {
    id: "groom-royalty",
    category: "bridal",
    name: "Royal Groom Wedding Makeover",
    tagline: "Polished, Confident Elegance for the Modern Groom",
    description: "Haircut & beard sculpting by Senior Master, Face De-Tan & Hydra Brightening Facial, Charcoal blackhead removal, Hand grooming, and subtle HD camera touch-up.",
    price: "₹3,499",
    duration: "120 mins",
    popular: false,
    brandBadge: "Men's Luxury Grooming",
    highlights: ["Subtle matte skin prep", "Precision beard alignment", "Stress-relief head massage"]
  },
  {
    id: "party-glam",
    category: "bridal",
    name: "Celebrity Party & Engagement Makeup",
    tagline: "Red-Carpet Glamour for Cocktails & Receptions",
    description: "Signature smokey or cut-crease eyes, sculpted cheekbones, dewy luminous skin base, and trendy designer hairstyle (Hollywood waves, textured braids).",
    price: "₹2,999",
    duration: "90 mins",
    popular: false,
    brandBadge: "MAC & Anastasia Beverly Hills",
    highlights: ["Choice of bold or nude look", "Hairstyling included", "Includes premium lashes"]
  },

  // HANDS, FEET & NAILS
  {
    id: "nail-acrylic-full",
    category: "nails",
    name: "Full Set Acrylic Nail Extensions & Gel Paint",
    tagline: "Durable, Flawless Length & Sculpted Shapes",
    description: "Custom extension tips shaped to coffin, almond, stiletto, or square, overlayed with high-strength acrylic polymer and cured with 3-week gel polish.",
    price: "₹1,499",
    duration: "90 mins",
    popular: true,
    brandBadge: "Bluesky / CND Pro",
    highlights: ["Any length & shape", "Choice of 100+ gel shades", "Zero chipping guarantee"]
  },
  {
    id: "nail-3d-art",
    category: "nails",
    name: "3D Nail Art, Chrome & Encapsulated Ombre",
    tagline: "Couture Statement Art for Trendsetters",
    description: "Intricate hand-painted flowers, Swarovski crystal embellishments, metallic chrome mirror finish, and French ombré transitions.",
    price: "From ₹499",
    duration: "45 mins",
    popular: false,
    brandBadge: "Japanese & Korean Gel Art",
    highlights: ["Crystal studs & foil accents", "High gloss topcoat", "Custom designs from reference"]
  },
  {
    id: "spa-pedicure-royal",
    category: "nails",
    name: "Royal Aromatherapy Spa Pedicure",
    tagline: "Dead-Skin Buffing, Callus Care & Calming Massage",
    description: "Warm mineral salt soak, deep exfoliating pumice & apricot scrub, cuticle rejuvenation, calloused heel filing, and cooling peppermint foot mask.",
    price: "₹899",
    duration: "60 mins",
    popular: false,
    brandBadge: "Lotus Aroma Spa",
    highlights: ["Deep heel crack softening", "15-min relaxing foot massage", "Anti-fungal sanitizer"]
  },
  {
    id: "spa-manicure",
    category: "nails",
    name: "Luxury Hand Care & Whitening Manicure",
    tagline: "Velvety Soft Hands & Healthy Cuticles",
    description: "Enzyme hand soak, dead cuticle trimming, almond oil hand polishing, reflexology massage, and protective strengthening base coat.",
    price: "₹699",
    duration: "45 mins",
    popular: false,
    brandBadge: "Lotus Phyto-Rx",
    highlights: ["Brightens hand tan", "Moisturizes dry cuticles", "Shiny buff or polish"]
  },

  // SIGNATURE COMBOS & OFFERS
  {
    id: "combo-first-visit",
    category: "combos",
    name: "First-Visit Radiance Glow Combo",
    tagline: "Our #1 Most Loved First-Time Guest Package",
    description: "Complete Face & Neck Organic De-Tan + Lotus Phyto-Rx Clean-up + Deep Conditioning Shampoo + Precision Haircut & Blast Blowdry.",
    price: "₹1,499",
    originalPrice: "₹2,800",
    discount: "46% OFF",
    duration: "90 mins",
    popular: true,
    brandBadge: "Special Welcome Offer",
    highlights: ["Complimentary hair wash & cut", "Instant visible glow", "Ideal for both men & women"]
  },
  {
    id: "combo-hair-makeover",
    category: "combos",
    name: "Total Hair Revive & Botox Combo",
    tagline: "Intense Frizz-Elimination & Cortex Repair",
    description: "Global Hair Keratin or Hair Botox Therapy (Any Hair Length) + Complimentary Post-Treatment Deep Hair Spa + Hair Trim & Expert Styling Consultation.",
    price: "₹2,999",
    originalPrice: "₹6,000",
    discount: "50% OFF",
    duration: "180 mins",
    popular: true,
    brandBadge: "Unisex Mega Value",
    highlights: ["Valid for all lengths up to waist", "L'Oréal / Botox Formula", "Free hair trimming included"]
  },
  {
    id: "combo-mens-executive",
    category: "combos",
    name: "Men's Executive Grooming Package",
    tagline: "Complete Weekend Refreshment for Busy Gentlemen",
    description: "Precision Fade Haircut + Beard Styling with Razor Line-up + Face & Neck Tan Removal + Invigorating 15-Minute Head Massage with Hair Wash.",
    price: "₹799",
    originalPrice: "₹1,500",
    discount: "47% OFF",
    duration: "60 mins",
    popular: false,
    brandBadge: "Men's Special",
    highlights: ["All-in-one grooming", "Anti-tan brightening", "Stress-buster head massage"]
  },
  {
    id: "combo-hydra-pamper",
    category: "combos",
    name: "Bridal & Party Pamper Trio",
    tagline: "Glowing Face, Pristine Nails & Silky Smooth Hair",
    description: "Medical-Grade 7-in-1 Hydra Facial + Royal Spa Pedicure + L'Oréal Deep Nourishing Hair Spa with Blowdry Finish.",
    price: "₹2,499",
    originalPrice: "₹4,800",
    discount: "48% OFF",
    duration: "135 mins",
    popular: true,
    brandBadge: "Weekend Favorite",
    highlights: ["Zero downtime glow", "Complete head-to-toe pampering", "Complimentary green tea"]
  }
];

export const ACADEMY_HIGHLIGHTS = [
  {
    icon: "Users2",
    title: "100% Live Model Practice",
    desc: "Train directly on real clients under strict master supervision, not just plastic mannequin heads."
  },
  {
    icon: "Award",
    title: "11+ Years Master Faculty",
    desc: "Learn real-world commercial salon techniques from veteran L'Oréal & celebrity certified artists."
  },
  {
    icon: "FileCheck",
    title: "Recognized Certification",
    desc: "Industry-accredited diploma and certificates accepted across top salons and overseas beauty chains."
  },
  {
    icon: "CalendarCheck",
    title: "Flexible Weekday / Weekend",
    desc: "Morning, afternoon, and Sunday batches designed for college students and working professionals."
  },
  {
    icon: "Briefcase",
    title: "100% Placement & Internship",
    desc: "Direct in-house paid internship at Belezia Salon with interview prep and salon setup guidance."
  },
  {
    icon: "PackageCheck",
    title: "Free Professional Tool Kit",
    desc: "Receive premium practice scissors, brushes, or nail supplies depending on your enrolled program."
  }
];

export const ACADEMY_COURSES = [
  {
    id: "hair-dressing",
    categoryName: "Hair Dressing & Styling",
    badge: "Most High-Income Potential",
    tagline: "From Tool Handling to Master Chemical Transformations",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Master progressive precision haircutting, L'Oréal coloring science, Keratin, Botox, and advanced bridal styling.",
    programs: [
      {
        title: "Foundation / Art of Hair Dressing",
        duration: "1 Month (Fast-Track)",
        batchType: "Weekday & Weekend Available",
        level: "Beginner",
        syllabus: [
          "Professional grooming, salon ergonomics, sanitation & tool disinfection",
          "Hair anatomy, texture identification, scalp porosity & consultation basics",
          "Cutting tool mastery: ergonomics of straight shears, thinning scissors, and clippers",
          "Backwash protocols, scalp stimulation massage, and professional blow-dry finishes",
          "Thermal hair styling: high-temperature straight ironing, crimping, curling tongs & hot rollers",
          "Core haircuts: Classic Straight blunt cut, U-Cut, Deep V-Cut, Basic 90° & 180° layers",
          "Introduction to traditional braiding, French plaits, and party coiffures"
        ]
      },
      {
        title: "Comprehensive / Absolute Hair Dressing Program",
        duration: "2 to 4 Months (Diploma)",
        batchType: "Full-Time & Flexible Batches",
        level: "Beginner to Advanced Master",
        syllabus: [
          "Progressive geometric haircuts: graduated bobs, asymmetrical cuts, razor texturizing",
          "Contemporary Men's Barbering: skin fades, beard sculpting, razor detailing, pompadours",
          "Advanced Hair Coloring Science: Color wheel, level system, grey coverage with L'Oréal Majirel",
          "Ammonia-free coloring with INOA and global highlights, balayage, and ombré toning",
          "Chemical texture restructuring: Permanent Rebonding, Smoothening, and Neutralizing",
          "Advanced Keratin Protein Therapy & Hair Botox restorative formulas",
          "Trichology & scalp therapeutics: treating severe alopecia, dandruff, and split ends",
          "Bridal and red-carpet elaborate updos with padding, extensions, and hair accessories",
          "Salon Operations: pricing strategy, client retention, inventory management & billing"
        ]
      }
    ]
  },
  {
    id: "beautician-skin",
    categoryName: "Beautician & Esthiology (Skin & Aesthetics)",
    badge: "High-Demand Salon Career",
    tagline: "Scientific Skin Analysis, Machine Facials & Organic Therapies",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Comprehensive study of skin histology, electrical machine treatments, Hydra Facial protocols, and spa body polishing.",
    programs: [
      {
        title: "Beginners Beauty Artistry Course",
        duration: "1 Month",
        batchType: "Weekday / Weekend",
        level: "Beginner",
        syllabus: [
          "Skin anatomy, epidermis layers, skin type diagnosis (dry, oily, combination, sensitive)",
          "Painless threading techniques: eyebrows, upper lip, chin, and full-face shaping",
          "Waxing methodologies: strip wax, peel-off liposoluble Brazilian wax & hygiene",
          "Bleaching protocols, patch testing, safety contraindications, and natural de-tanning",
          "Facial massage theory: 14 pressure points, lymph drainage, blood flow activation",
          "Step-by-step 3-step clean-up procedures using organic Lotus Phyto-Rx formulations",
          "Hygienic basic manicure and pedicure procedures with nail cuticle care"
        ]
      },
      {
        title: "Professional Diploma in Cosmetology & Esthiology",
        duration: "3 to 4 Months",
        batchType: "Master Diploma",
        level: "Beginner to Pro Aesthetician",
        syllabus: [
          "Advanced derma-skincare science: hyperpigmentation, acne vulgaris, and premature ageing",
          "7-in-1 Hydra Facial machine protocols: vortex vacuum, ultrasonic scrubber, radiofrequency",
          "Korean Glass Skin therapy: microneedling ampoules, collagen induction, LED photon therapy",
          "Electrotherapy in aesthetics: High Frequency acne zapping, Galvanic deep iontophoresis",
          "Advanced De-Tan, fruit lactic peels, enzyme exfoliation, and spot correction",
          "Luxury body polishing, chocolate wraps, and aromatherapy relaxation techniques",
          "Client consultation cards, derma safety compliance, and clinical hygiene protocols"
        ]
      }
    ]
  },
  {
    id: "makeup-artistry",
    categoryName: "Professional Makeup Artistry",
    badge: "Celebrity & Bridal Specialist",
    tagline: "Airbrush, HD Bridal, Reception & Red Carpet Artistry",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Learn color theory, undertone matching, airbrush compressor handling, and royal bridal couture transformations.",
    programs: [
      {
        title: "Self-Grooming & Party Makeup Workshop",
        duration: "10 to 15 Days",
        batchType: "Short-Term Masterclass",
        level: "Beginner",
        syllabus: [
          "Daily flawless 10-minute office & corporate makeup routines",
          "Color wheel application: identifying warm, cool, and neutral undertones",
          "Eye makeup basics: day soft browns, classic winged eyeliner, and false lash application",
          "Contouring, highlighting, and blush placement suited to unique facial shapes",
          "Evening glam smokey eyes with glitter and transfer-proof lip application",
          "Traditional saree draping, Gujarati pleats, and modern lehenga dupatta pinning"
        ]
      },
      {
        title: "Complete Bridal & Media Makeup Master Diploma",
        duration: "2 to 3 Months",
        batchType: "Professional Certification",
        level: "Intermediate to Pro",
        syllabus: [
          "HD Makeup technology: micro-fine base formulation for 4K video and photography",
          "Airbrush Makeup mastery: gun disassembly, compressor pressure control, seamless blending",
          "Color correction: neutralizing dark circles, acne scars, birthmarks & vitiligo",
          "North Indian, South Indian, Muslim, and Christian traditional bridal styling",
          "Cocktail, Sangeet & Reception modern fusion looks with 3D eye artistry",
          "Bridal jewelry placement, matha patti setting, can-can skirt setting & dupatta draping",
          "Lighting, vanity photography, Instagram portfolio building, and bridal client contracts"
        ]
      }
    ]
  },
  {
    id: "nail-artistry",
    categoryName: "Nail Artistry & Extensions",
    badge: "Trending High-Margin Skill",
    tagline: "Acrylic Sculpting, Gel Extensions & 3D Crystal Art",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    shortDesc: "Master modern acrylic monomer chemistry, UV/LED gel extensions, ombre chrome art, and gentle nail removal.",
    programs: [
      {
        title: "Certificate in Nail Art & Extensions",
        duration: "15 to 30 Days (Intensive)",
        batchType: "Fast-Track Certification",
        level: "All Levels Welcome",
        syllabus: [
          "Nail anatomy, keratin nail plate health, cuticle prep, and fungal prevention",
          "Gel polish application protocols: base coat curing, zero chipping topcoat seals",
          "Acrylic nail extension sculpting: liquid-to-powder bead consistency, tip placement",
          "Hard gel and polygel extension overlays for natural lightweight strength",
          "Popular nail shaping: Square, Squoval, Coffin/Ballerina, Almond, and Stiletto",
          "Trending nail art: French ombre, metallic chrome, cat-eye magnetic effects, glitter gradients",
          "3D nail charms, rhinestones, encapsulated flowers, and safe soak-off removal methods"
        ]
      }
    ]
  }
];

export const CAREER_PATHWAYS = [
  {
    role: "Senior Salon Hair Stylist / Colorist",
    earning: "₹35,000 – ₹70,000 / month",
    desc: "Work with top luxury salon chains in Delhi NCR or international salon brands."
  },
  {
    role: "Freelance Bridal Makeup Artist",
    earning: "₹15,000 – ₹45,000 / wedding",
    desc: "Command your own booking rates for destination weddings, fashion shoots & parties."
  },
  {
    role: "Salon Entrepreneur / Studio Owner",
    earning: "₹1,000,000+ / year",
    desc: "Launch your own independent beauty parlour or unisex salon with Belezia's mentor support."
  },
  {
    role: "Brand Educator & Technical Trainer",
    earning: "₹40,000 – ₹85,000 / month",
    desc: "Train upcoming professionals representing global cosmetic and hair color houses."
  },
  {
    role: "Certified Nail Technician & Artist",
    earning: "₹30,000 – ₹60,000 / month",
    desc: "Booming demand in luxury nail bars, bridal studios, and freelance mobile nail services."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Dimensional Caramel Balayage & Blowout",
    category: "hair",
    categoryLabel: "Hair Color",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    client: "Salon Client",
    desc: "L'Oréal INOA color melt with bond builder care."
  },
  {
    id: 2,
    title: "Airbrush HD Royal Bridal Transformation",
    category: "bridal",
    categoryLabel: "Bridal Studio",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    client: "Bride Priyanka",
    desc: "Sweat-proof base with 3D mink lashes & jewelry styling."
  },
  {
    id: 3,
    title: "Nano-Plastia & Keratin Glass Hair",
    category: "hair",
    categoryLabel: "Hair Treatment",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    client: "Salon Client",
    desc: "Mirror-shine transformation eliminating 100% frizzy texture."
  },
  {
    id: 4,
    title: "7-in-1 Hydra Facial Porcelain Radiance",
    category: "skincare",
    categoryLabel: "Skincare",
    image: "https://images.unsplash.com/photo-1512290900672-1f55a10ea6e0?auto=format&fit=crop&w=800&q=80",
    client: "Skin Client",
    desc: "Deep vacuum extraction followed by hyaluronic plumping."
  },
  {
    id: 5,
    title: "Academy Live Practical Masterclass",
    category: "academy",
    categoryLabel: "Belezia Academy",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    client: "Batch of 2024",
    desc: "Students performing progressive sectioning on live models."
  },
  {
    id: 6,
    title: "Coffin French Ombre & 3D Crystal Nails",
    category: "nails",
    categoryLabel: "Nail Studio",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    client: "Salon Client",
    desc: "Acrylic extensions with crystal studs and high-gloss topcoat."
  },
  {
    id: 7,
    title: "Executive Fade & Sculpted Beard",
    category: "hair",
    categoryLabel: "Men's Barbering",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    client: "Grooming Client",
    desc: "Razor sharp skin fade with beard contouring and wash."
  },
  {
    id: 8,
    title: "Academy Certification Award Ceremony",
    category: "academy",
    categoryLabel: "Belezia Academy",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    client: "Graduates",
    desc: "Proud students receiving their accredited diplomas."
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    title: "Hair Keratin & Frizz Correction",
    category: "Hair Transformation",
    beforeText: "Frizzy, dry, unmanageable curls damaged from heat styling",
    afterText: "Glossy, pin-straight silk with 0% frizz and deep moisture",
    beforeImg: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    brand: "L'Oréal Keratin Pro"
  },
  {
    title: "De-Tan & 7-in-1 Hydra Glow",
    category: "Skin Rejuvenation",
    beforeText: "Sun-damaged uneven pigmentation, clogged pores and dull skin",
    afterText: "Visible brightening, extracted blackheads, and porcelain dewy finish",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1512290900672-1f55a10ea6e0?auto=format&fit=crop&w=600&q=80",
    brand: "Hydra Machine + Lotus Phyto-Rx"
  }
];

export const REVIEWS_SALON = [
  {
    id: 1,
    name: "Aakanksha Sharma",
    location: "Laxmi Nagar, Delhi",
    rating: 5,
    service: "Hair Botox & Global Highlights",
    date: "2 weeks ago",
    text: "I had severely damaged hair from previous chemical bleaching. The senior master at Belezia recommended Hair Botox instead of harsh chemicals. The results are unbelievable! My hair feels like liquid silk. They opened the original L'Oréal products right in front of me. Highly recommend!"
  },
  {
    id: 2,
    name: "Rohan Verma",
    location: "Preet Vihar, Delhi",
    rating: 5,
    service: "Men's Executive Grooming Combo",
    date: "1 month ago",
    text: "Hands down the best grooming salon near Laxmi Nagar Metro Station. Got their ₹799 combo: haircut, beard styling, and face de-tan. The stylist took his time with the fade and didn't rush. Super clean, hygienic, and the staff is genuinely courteous."
  },
  {
    id: 3,
    name: "Simran Kaur",
    location: "Nirman Vihar, Delhi",
    rating: 5,
    service: "Airbrush Bridal Makeup & Pre-Bridal",
    date: "3 weeks ago",
    text: "Belezia was my bridal dream team! The airbrush makeup was featherlight, didn't crack even after 14 hours of pheras and dance, and looked ethereal in 4K photography. Everyone complimented my bridal glow. Thank you so much!"
  },
  {
    id: 4,
    name: "Meenakshi Gupta",
    location: "Swasthya Vihar, Delhi",
    rating: 5,
    service: "Korean Glass Facial & Acrylic Nails",
    date: "Just yesterday",
    text: "Tried their Korean Glass Skin facial and acrylic extensions. My skin has never looked this luminous. The nail artist is super skilled and did exact Pinterest nail art with chrome finish. East Delhi's hidden gem!"
  }
];

export const REVIEWS_ACADEMY = [
  {
    id: 1,
    name: "Neha Rajput",
    course: "Comprehensive Hair Dressing Program",
    outcome: "Now Senior Stylist at a Renowned Chain in Noida",
    rating: 5,
    text: "I joined Belezia Academy with zero knowledge of scissors or hair theory. What set them apart was 100% practical practice on real clients rather than just plastic dummy heads. Within 3 months I mastered L'Oréal color science and fades. Got placed immediately!"
  },
  {
    id: 2,
    name: "Pooja Kashyap",
    course: "Professional Bridal & Media Makeup Diploma",
    outcome: "Successful Freelance Bridal Artist (Earning ₹60k+/mo)",
    rating: 5,
    text: "The faculty teaches with so much patience. They covered airbrush compressor handling, saree draping, and how to create a high-converting Instagram portfolio. Today I get bridal bookings all across East Delhi and NCR."
  },
  {
    id: 3,
    name: "Kunal Chauhan",
    course: "Complete Cosmetology & Salon Management",
    outcome: "Opened Own Unisex Salon in Shahdara",
    rating: 5,
    text: "Belezia doesn't just teach techniques; they teach you how to run a salon profitably. From inventory sourcing to pricing packages and hygiene SOPs, Sir guided me even after graduation. Forever grateful!"
  }
];

export const FAQS = [
  {
    q: "How do I book an appointment or claim first-visit discount?",
    a: "You can click any 'Book on WhatsApp' button on this website or call us directly at 072908 28680. We confirm your preferred slot instantly on WhatsApp with guaranteed zero wait time upon arrival."
  },
  {
    q: "Are the cosmetic and hair products 100% genuine?",
    a: "Yes, 100%. Belezia has been an authorized salon partner in East Delhi for 11+ years. We use genuine L'Oréal Professionnel, INOA, Lotus Herbals Professional, O3+, and top nail brands. Every product tube/vial is unsealed in front of the client."
  },
  {
    q: "What is the location and nearest metro station?",
    a: "We are situated at Shop No. G-56, Vikas Marg, Laxmi Nagar, Delhi - 110092. The salon is just a 2-minute walk from Laxmi Nagar Metro Station (Blue Line, Gate No. 1)."
  },
  {
    q: "Do Academy students get practical training on live models?",
    a: "Yes! At Belezia Academy, students train on live human models under direct master supervision to build real commercial salon confidence, which is why our placement rate is unmatched."
  },
  {
    q: "Can I attend a Free Demo Class before enrolling in the Academy?",
    a: "Absolutely! We offer complimentary 1-on-1 counseling and a Free Live Demo Class so you can experience the teaching methodology, inspect the equipment, and speak with alumni before enrolling."
  }
];
