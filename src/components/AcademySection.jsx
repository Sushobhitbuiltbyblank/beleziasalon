import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users2, 
  Award, 
  FileCheck, 
  CalendarCheck, 
  Briefcase, 
  PackageCheck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  PhoneCall,
  Download
} from 'lucide-react';
import { ACADEMY_HIGHLIGHTS, ACADEMY_COURSES, CAREER_PATHWAYS, BRAND_INFO } from '../data/salonData';

export default function AcademySection({ onOpenDemoModal }) {
  const [activeCourseCategory, setActiveCourseCategory] = useState('hair-dressing');
  const [expandedSyllabus, setExpandedSyllabus] = useState({});

  // Free Demo Form state
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    course: 'Hair Dressing & Styling Course',
    batch: 'Weekday Batch (Mon - Fri)',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleSyllabus = (programKey) => {
    setExpandedSyllabus((prev) => ({
      ...prev,
      [programKey]: !prev[programKey]
    }));
  };

  const currentCourseGroup = ACADEMY_COURSES.find((c) => c.id === activeCourseCategory) || ACADEMY_COURSES[0];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please provide your name and mobile number.");
      return;
    }

    const message = encodeURIComponent(
      `Hi Belezia Academy! 🎓\nI want to book a *Free Demo Class & Course Counselling*.\n\n• *Student Name:* ${formData.name}\n• *Mobile:* ${formData.mobile}\n• *Interested Course:* ${formData.course}\n• *Preferred Batch:* ${formData.batch}\n${formData.notes ? `• *Questions:* ${formData.notes}\n` : ''}\nPlease let me know the upcoming batch schedule at Laxmi Nagar, Delhi.`
    );

    const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const getHighlightIcon = (name) => {
    switch (name) {
      case 'Users2':
        return <Users2 className="w-5 h-5 text-gold-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-gold-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-gold-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-gold-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-gold-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-gold-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="academy" className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Academy Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            Belezia Hair & Cosmetology Academy • Laxmi Nagar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mb-4">
            Build a High-Earning Career in <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Salon & Beauty Industry</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"></div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Structured in line with premier institutions like VLCC Institute and L'Oréal Academy.
            Learn through <strong className="text-white">100% hands-on live model training</strong>, master salon business strategies,
            and graduate with government-recognized certifications.
          </p>
        </div>

        {/* 6 Academy Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {ACADEMY_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-dark-900 border border-neutral-800 hover:border-gold-500/40 transition-all flex items-start gap-4 group"
            >
              <div className="p-3 rounded-lg bg-dark-850 border border-gold-500/20 group-hover:border-gold-400 shrink-0 transition-colors">
                {getHighlightIcon(item.icon)}
              </div>
              <div>
                <h4 className="text-white font-serif font-bold text-sm sm:text-base group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Course Category Navigation Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {ACADEMY_COURSES.map((course) => {
            const isActive = activeCourseCategory === course.id;
            return (
              <button
                key={course.id}
                onClick={() => setActiveCourseCategory(course.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gold-metallic text-dark-950 font-bold shadow-gold-md scale-102'
                    : 'bg-dark-900 text-neutral-300 hover:text-white hover:bg-dark-850 border border-neutral-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{course.categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display & Curriculum Cards */}
        <div className="bg-dark-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-neutral-800">
            {/* Left: Category Overview & Image */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-neutral-700 aspect-video lg:aspect-[4/3] group">
                <img
                  src={currentCourseGroup.image}
                  alt={currentCourseGroup.categoryName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-metallic text-dark-950 shadow-gold-sm">
                    {currentCourseGroup.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs uppercase text-gold-400 font-semibold tracking-wider">Live Practical Training</div>
                  <div className="text-lg font-serif font-bold">{currentCourseGroup.categoryName}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850 border border-neutral-800">
                <div className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                  Faculty & Training Standard:
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Taught by senior L'Oréal & VLCC certified master instructors with 11+ years of live salon experience.
                  Each student performs on actual salon clients under strict personal guidance.
                </p>
              </div>
            </div>

            {/* Right: Detailed Program Offerings & Syllabus Accordions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  {currentCourseGroup.categoryName}
                </h3>
                <p className="text-gold-400 font-medium text-sm mb-3">
                  {currentCourseGroup.tagline}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {currentCourseGroup.shortDesc}
                </p>
              </div>

              {/* Sub-Programs in this Category */}
              <div className="space-y-4">
                {currentCourseGroup.programs.map((program, pIndex) => {
                  const programKey = `${currentCourseGroup.id}-${pIndex}`;
                  const isExpanded = !!expandedSyllabus[programKey];

                  return (
                    <div
                      key={pIndex}
                      className="rounded-xl bg-dark-850 border border-neutral-800 hover:border-gold-500/40 transition-colors overflow-hidden"
                    >
                      {/* Program Header */}
                      <div className="p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gold-500/15 text-gold-400 border border-gold-500/30">
                            {program.level}
                          </span>
                          <span className="text-xs text-neutral-400 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gold-500" />
                            {program.duration}
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
                          {program.title}
                        </h4>
                        <div className="text-xs text-neutral-400 mb-4">
                          Batch Mode: <span className="text-neutral-200">{program.batchType}</span>
                        </div>

                        {/* Accordion Toggle */}
                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-neutral-800">
                          <button
                            onClick={() => toggleSyllabus(programKey)}
                            className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide Syllabus Modules' : 'View Complete Syllabus Modules'}</span>
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>

                          <button
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                course: `${currentCourseGroup.categoryName} - ${program.title}`
                              }));
                              const formEl = document.getElementById('academy-form');
                              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-xs bg-dark-800 hover:bg-gold-500 hover:text-dark-950 text-neutral-200 hover:font-bold px-3 py-1.5 rounded-lg border border-neutral-700 transition-all"
                          >
                            Select for Demo Class
                          </button>
                        </div>
                      </div>

                      {/* Expandable Syllabus Content */}
                      {isExpanded && (
                        <div className="bg-dark-950/70 p-5 border-t border-neutral-800 space-y-2.5 animate-fadeIn">
                          <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                            Comprehensive Curriculum Modules:
                          </div>
                          {program.syllabus.map((topic, tIdx) => (
                            <div key={tIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Consultation Banner inside card */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-center sm:text-left">
              <div className="text-white font-serif font-bold text-base sm:text-lg">
                Not sure which beauty course fits your career goals?
              </div>
              <div className="text-xs sm:text-sm text-neutral-400">
                Speak directly with our Academy Director for free personalized counselling & fee structure.
              </div>
            </div>
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Belezia Academy, I want personalized course counselling for my beauty career.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-metallic text-dark-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-gold-sm hover:brightness-110 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Course Counsellor</span>
            </a>
          </div>
        </div>

        {/* Career Opportunities Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              Career Outcomes & Earning Potential
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Where Our Graduates Shine After Belezia
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              The Indian beauty and wellness industry is expanding at 18%+ CAGR. Here are lucrative paths our certified alumni follow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CAREER_PATHWAYS.map((path, idx) => (
              <div
                key={idx}
                className="bg-dark-900 border border-neutral-800 hover:border-gold-500/40 p-5 rounded-xl flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold text-xs mb-3 group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors">
                    0{idx + 1}
                  </div>
                  <h4 className="text-white font-serif font-bold text-sm mb-2 group-hover:text-gold-300 transition-colors">
                    {path.role}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {path.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-800">
                  <span className="text-[10px] uppercase font-bold text-neutral-500 block">Est. Earnings:</span>
                  <span className="text-xs font-bold text-gold-400">{path.earning}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Demo Class & Course Counselling Form */}
        <div id="academy-form" className="relative rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-gold-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Urgency & Guarantee */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Limited Seats Per Batch
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Book a <span className="text-gold-gradient">Free Demo Class</span> & Campus Visit
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Experience our teaching methodology first-hand before paying a single rupee.
                Attend a 1-hour live practical session with senior faculty, inspect our toolkits, and meet ongoing students.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Zero-cost 1-on-1 career consultation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Live model session observation in Laxmi Nagar</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Detailed printed course syllabus & fee breakdown</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <div className="text-xs text-neutral-400">
                  Direct Academy Helpline:
                  <div className="text-gold-400 font-bold text-sm">{BRAND_INFO.phoneDisplay}</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Form */}
            <div className="lg:col-span-7 bg-dark-950/90 border border-neutral-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h4 className="text-white font-serif font-bold text-lg mb-1">
                Reserve Your Free Demo Seat
              </h4>
              <p className="text-xs text-neutral-400 mb-6">
                Fill details below. Your request will open WhatsApp directly with our admissions desk.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-lg text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2.5 rounded-lg text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Course Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Course of Interest *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
                    >
                      <option value="Hair Dressing & Styling (Foundation / Comprehensive)">Hair Dressing & Styling (Foundation / Comprehensive)</option>
                      <option value="Beautician & Esthiology (Skin & Aesthetics)">Beautician & Esthiology (Skin & Aesthetics)</option>
                      <option value="Professional Makeup Artistry (Airbrush & HD Bridal)">Professional Makeup Artistry (Airbrush & HD Bridal)</option>
                      <option value="Nail Artistry & Extensions Course">Nail Artistry & Extensions Course</option>
                      <option value="Complete All-in-One Cosmetology Master Diploma">Complete All-in-One Cosmetology Master Diploma</option>
                    </select>
                  </div>

                  {/* Batch Preference */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Preferred Batch *
                    </label>
                    <select
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3 py-2.5 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-gold-500"
                    >
                      <option value="Weekday Regular (Mon to Fri)">Weekday Regular (Mon to Fri)</option>
                      <option value="Weekend Special (Sat & Sun)">Weekend Special (Sat & Sun)</option>
                      <option value="Flexible / Fast-Track Batch">Flexible / Fast-Track Batch</option>
                    </select>
                  </div>
                </div>

                {/* Additional queries */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Any specific question or goals? (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Want to open my own salon, need installment details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-dark-850 border border-neutral-700 focus:border-gold-500 text-white px-3.5 py-2 rounded-lg text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gold-metallic text-dark-950 font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-gold-md hover:shadow-gold-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageCircle className="w-4 h-4 fill-dark-950 text-gold-400" />
                  <span>Book Free Demo Class on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  🔒 We respect your privacy. No spam. You'll receive instant batch timetable & location guide on WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
