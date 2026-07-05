import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Bath, 
  Grid2x2, 
  Hammer, 
  Droplets, 
  ArrowLeft, 
  CheckCircle2, 
  Star, 
  Shield, 
  HardHat, 
  Link as LinkIcon, 
  Menu, 
  X, 
  Clock, 
  Sparkles, 
  Layers, 
  MapPin, 
  UserCheck, 
  ChevronDown,
  Calculator
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { CostCalculator } from './components/CostCalculator';

import regeneratedImage1782902556519 from './assets/images/regenerated_image_1782902556519.png';
import regeneratedImage1782903804110 from './assets/images/regenerated_image_1782903804110.jpg';
import regeneratedImage1782902128082 from './assets/images/regenerated_image_1782902128082.png';
import regeneratedImage1782902129422 from './assets/images/regenerated_image_1782902129422.png';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'bathroom' | 'design' | 'sealing' | 'demolition'>('all');

  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleBg = useTransform(scrollY, [0, 800], [1.02, 1.18]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (clientY - top) / height - 0.5; // -0.5 to 0.5
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const navigationItems = [
    { label: 'דף הבית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'הדמיית לפני/אחרי', href: '#before-after' },
    { label: 'מפת הדרכים', href: '#timeline' },
    { label: 'מחשבון אפיון', href: '#calculator' },
    { label: 'פרויקטים', href: '#portfolio' },
    { label: 'עלינו', href: '#about' },
    { label: 'שאלות נפוצות', href: '#faq' },
    { label: 'צור קשר', href: '#contact' },
  ];

  const portfolioProjects = [
    {
      id: 1,
      category: 'bathroom',
      tag: 'חדרי רחצה פרימיום',
      title: 'שיפוץ חדר רחצה מאפס',
      desc: 'פירוק ותיקון יסודי של תשתיות צנרת, יישום מערכת איטום תלת-שכבתית מתקדמת, חיפוי בפורצלן מעוצב והתקנת כלים סניטריים יוקרתיים ברמת מילימטר.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'design',
      tag: 'עבודות עיצוב וגימור',
      title: 'עבודות גבס וחיפוי קירות דקורטיבי',
      desc: 'הנמכות תקרה מודרניות בשילוב תעלות מיזוג אוויר, תאורת לד נסתרת, בניית נישות טלוויזיה תלת-ממדיות והחלקה מושלמת בשכבות צבע סופרקריל פרימיום.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'sealing',
      tag: 'איטום ותשתיות חוץ',
      title: 'איטום גגות ורעפים',
      desc: 'זיהוי מוקדי כשל באיטום, פירוק והחלפת רעפים סדוקים, יישום יריעות איטום וביטומן תקני למניעת חדירות מים בעונת החורף.',
      image: regeneratedImage1782902128082
    },
    {
      id: 4,
      category: 'demolition',
      tag: 'עבודות הכנה ושלד',
      title: 'תשתיות איתנות ויציקה',
      desc: 'הריסה בטיחותית מתוכננת, פינוי פסולת למטמנות מורשות, הכנת קונסטרוקציה אמינה, ויציקת משטחי בטון חזקים ובעלי פילוס מוחלט לפני שלב הריצוף.',
      image: regeneratedImage1782902129422
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative selection:bg-blue-100 selection:text-blue-900" dir="rtl" id="home">
      {/* Subtle Background Pattern */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'auto',
        }}
      ></div>

      <AccessibilityWidget />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/972525211381?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%A0%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A0%D7%99%20%D7%96%D7%A7%D7%95%D7%A7%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%A0%D7%95%D7%A9%D7%90%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6%D7%99%D7%9D."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-xl hover:bg-emerald-600 transition-all flex items-center justify-center hover:scale-110 active:scale-95 duration-200 group animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="WhatsApp"
        id="floating-whatsapp"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-bold pr-0 group-hover:pr-2">
          צריכים שיפוץ? דברו איתי
        </span>
      </a>

      {/* Sticky Header Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm" id="main-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex flex-col text-right">
            <span className="text-xl sm:text-2xl font-black text-blue-900 tracking-tight">מני נפתלי</span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-600 tracking-wide uppercase">שיפוצי פרימיום ועבודות גמר</span>
          </a>

          {/* Desktop Navigation Links (Super Clean & Compact) */}
          <div className="hidden xl:flex items-center gap-5">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-slate-600 hover:text-blue-700 font-bold text-xs sm:text-sm transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] right-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Call CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:0525211381"
              className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 border border-blue-100 shadow-sm"
              id="header-call-btn"
            >
              <Phone size={14} />
              <span dir="ltr">052-521-1381</span>
            </a>
            <a 
              href="#calculator"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              id="header-quote-btn"
            >
              צור קשר
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-blue-900 focus:outline-none"
            aria-label="פתח תפריט"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-slate-100 overflow-hidden shadow-inner"
              id="mobile-dropdown"
            >
              <div className="px-4 py-4 space-y-3 flex flex-col">
                {navigationItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 hover:text-blue-700 hover:bg-slate-50 px-3 py-2 rounded-lg font-bold text-base transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a 
                    href="tel:0525211381"
                    className="bg-blue-50 text-blue-700 justify-center py-3 rounded-xl font-bold text-base flex items-center gap-2 border border-blue-100"
                  >
                    <Phone size={18} />
                    <span dir="ltr">052-521-1381</span>
                  </a>
                  <a 
                    href="#calculator"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-blue-600 text-white text-center py-3 rounded-xl font-bold text-base"
                  >
                    קבלו הצעת מחיר אישית
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header 
        className="relative bg-slate-950 text-white overflow-hidden py-20 md:py-32" 
        id="hero"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Parallax & Hover Interactive Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            y: yBg,
            scale: scaleBg,
            translateX: mousePosition.x * 25,
            translateY: mousePosition.y * 25,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585760380-e1163e84e2e0?q=80&w=2000&auto=format&fit=crop"
            alt="עיצוב פנים ושיפוצי יוקרה"
            className="w-full h-full object-cover object-center opacity-30 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90"></div>
        </motion.div>

        {/* Subtle decorative radial background glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & Content Column (Right Column in RTL) */}
            <div className="lg:col-span-7 flex flex-col items-start text-right">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs sm:text-sm font-extrabold mb-6 shadow-md backdrop-blur-md"
              >
                <Shield size={16} className="text-blue-300 shrink-0 animate-pulse" />
                <span>שיפוצי איכות באחריות מלאה • שירות בכל ארץ ישראל</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none text-right"
              >
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-400 mb-2">מני נפתלי</span>
                <span className="bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent font-black leading-tight block">
                  שיפוצי פרימיום ועבודות גמר
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed font-normal"
              >
                בונים לכם שקט נפשי מהיסוד ועד הגימור המושלם. מקצועיות בלתי מתפשרת, ניקיון וסדר מופתי לאורך כל שלבי העבודה, ורמת ביצוע וגימור מהגבוהות ביותר בישראל.
              </motion.p>

              {/* Three Key Pillars Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full mb-10 text-right"
              >
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="bg-blue-600/20 p-2.5 rounded-lg text-blue-400 shrink-0">
                    <Sparkles size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">ניקיון וסדר מופתי</h4>
                    <p className="text-xs text-slate-300 mt-0.5">סדר מוחלט ופינוי יומי בשטח.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="bg-blue-600/20 p-2.5 rounded-lg text-blue-400 shrink-0">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">מקצועיות ויושרה</h4>
                    <p className="text-xs text-slate-300 mt-0.5">עמידה בלו"ז ושקיפות מלאה.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-xl flex items-center gap-3 shadow-lg">
                  <div className="bg-blue-600/20 p-2.5 rounded-lg text-blue-400 shrink-0">
                    <Star size={20} className="fill-blue-400/20" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-sm">עבודה פרימיום</h4>
                    <p className="text-xs text-slate-300 mt-0.5">רמת גימור גבוהה ללא פשרות.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a 
                  href="#calculator"
                  className="w-full sm:w-auto bg-white text-blue-950 hover:bg-blue-50 px-8 py-4 rounded-xl font-black text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100"
                  id="hero-primary-cta"
                >
                  קבלו הצעת מחיר אישית
                  <ArrowLeft size={20} className="text-blue-950" />
                </a>
                <a 
                  href="https://wa.me/972525211381?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%A0%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A0%D7%99%20%D7%96%D7%A7%D7%95%D7%A7%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%A0%D7%9OS%D7%99%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6%D7%99%D7%9D."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-blue-600/30 hover:bg-blue-600/50 text-white border border-blue-400/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                  id="hero-secondary-cta"
                >
                  <MessageCircle size={20} />
                  התייעצות בוואטסאפ
                </a>
              </motion.div>
            </div>

            {/* Image Showcase Column - Highly Prominent (Left Column in RTL) */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[520px] flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl group z-10"
              >
                {/* Real-time cover photo */}
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
                  alt="פרויקט שיפוץ פרימיום - עבודה מוגמרת"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Premium gradient overlay to make the overlay label readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Overlying badge highlighting cleanliness and professionalism */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs sm:text-sm font-black px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm border border-blue-500/30">
                  <Sparkles size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
                  <span>עבודה מוגמרת • 100% נקי ומקצועי</span>
                </div>

                <div className="absolute bottom-4 right-4 left-4 bg-slate-900/90 border border-slate-800/80 p-4 rounded-xl backdrop-blur-md shadow-lg text-right">
                  <div className="flex items-center gap-2 text-blue-400 font-extrabold text-xs mb-1">
                    <Star size={12} className="fill-blue-400" />
                    <span>סטנדרט ביצוע פרימיום</span>
                  </div>
                  <h4 className="font-extrabold text-white text-sm sm:text-base mb-0.5">דיוק, ניקיון מופתי וגימור מושלם בשטח</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-medium">עבודה מוגמרת באחריות מלאה של מני נפתלי</p>
                </div>
              </motion.div>

              {/* Decorative background glow behind the card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20 z-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">מגוון השירותים שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">תחומי התמחות מובילים</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Bath size={32} />}
              title="שיפוץ חדרי רחצה"
              description="תכנון מקיף, החלפת אינסטלציה כולל מבדקי לחץ, ואיטום יסודי ומתקדם מפני נזילות."
              delay={0}
            />
            <ServiceCard 
              icon={<Grid2x2 size={32} />}
              title="ריצוף וחיפוי קירות"
              description="עבודות ריצוף מדויקות ויוקרתיות בפורמטים רחבים, גרניט פורצלן, אריחים מדוקקים ושיש."
              delay={0.05}
            />
            <ServiceCard 
              icon={<Hammer size={32} />}
              title="עבודות גבס וצבע"
              description="הנמכות תקרה דקורטיביות, בניית נישות מעוצבות, פתרונות תאורה נסתרת ורמת גימור גבוהה ביותר."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Droplets size={32} />}
              title="איטום, מרפסות וגגות"
              description="איטום קפדני למרפסות רטובות, גגות רעפים, פתרון ואיתור מוקדי רטיבות בשיטות מדעיות."
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* Interactive Before/After Comparison Slider (Extreme Polish Highlight) */}
      <section className="py-20 bg-white border-y border-slate-100" id="before-after">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">המחשת איכות הגימור</span>
            <h2 className="text-3xl font-extrabold text-blue-950 mt-3 mb-4">הדמיית לפני / אחרי אינטראקטיבית</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              גררו את המחוון ימינה ושמאלה כדי לראות את השינוי הדרמטי בחדר הרחצה – מפירוק ושלד מיושן ועד רמת גימור פרימיום יוקרתית.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 italic font-medium">
              * תמונה אמיתית להמחשת שלבי ביצוע: מימין שלד ותשתיות אינסטלציה, משמאל חיפוי גרניט פורצלן מושלם.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work: Road Map Timeline */}
      <section className="py-20 bg-slate-50" id="timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">הסטנדרט המקצועי שלנו</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">מפת הדרכים לשיפוץ הבטוח שלכם</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
              כדי לבנות לכם שקט נפשי מלא, יצרנו תהליך עבודה מובנה וקפדני שלב אחר שלב שמבטיח אפס הפתעות ותוצאה מושלמת:
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Interactive Cost Calculator */}
      <CostCalculator />

      {/* Portfolio/Gallery Section - Clean & Filterable */}
      <section className="py-20 bg-white" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">תיק עבודות בשטח</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">פרויקטים נבחרים שביצענו</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
              הקפדה על התשתיות היא הסוד שלנו לתוצאה שמחזיקה חיים שלמים. סננו לפי קטגוריות כדי לראות עבודות ממוקדות:
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="portfolio-filters">
            {[
              { id: 'all', label: 'כל הפרויקטים', icon: <Layers size={14} /> },
              { id: 'bathroom', label: 'חדרי רחצה', icon: <Bath size={14} /> },
              { id: 'design', label: 'גבס ועיצוב גמר', icon: <Hammer size={14} /> },
              { id: 'sealing', label: 'איטום וגגות', icon: <Droplets size={14} /> },
              { id: 'demolition', label: 'שלד והכנה', icon: <HardHat size={14} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                  activeFilter === tab.id 
                    ? 'bg-blue-600 text-white shadow-sm scale-105' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/60 transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {project.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-blue-950 text-xl mb-2.5">{project.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Call to Actions for Portfolio */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:meninaftali@gmail.com?subject=%D7%A4%D7%A0%D7%99%D7%92%D7%94%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6%D7%99%D7%9D&body=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A0%D7%99%2C%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%95%D7%AA%20%D7%A9%D7%9C%D7%9A%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%95%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5."
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-900 border border-blue-200 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm"
              id="portfolio-drive-btn"
            >
              <Mail size={18} className="text-blue-600" />
              שלחו לנו פנייה ישירה במייל
            </a>
            
            <a
              href="https://wa.me/972525211381?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%A0%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A0%D7%99%20%D7%96%D7%A7%D7%95%D7%A7%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%A0%D7%95%D7%A9%D7%90%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6%D7%99%D7%9D."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm animate-pulse"
              id="portfolio-whatsapp-btn"
            >
              <MessageCircle size={18} />
              התייעצו איתי ישירות בוואטסאפ
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Highly Professional and Compact */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text column */}
            <div className="lg:col-span-7">
              <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">הכירו את מני נפתלי</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-6">שיפוץ ותשתיות בסטנדרט חסר פשרות.</h2>
              <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full"></div>
              
              <p className="text-slate-700 leading-relaxed text-base mb-4">
                שיפוץ איכותי ויציב אינו מתחיל בצבע או בטיח החיצוני - הוא מתחיל בתכנון הנדסי קפדני, הכנת תשתיות נכונה ותפיסת עבודה מקצועית ומאורגנת. 
                בעשייה שלי, אין מקום לעיגול פינות. כל פרויקט מנוהל מתחילתו ועד לקבלת המפתח תוך שקיפות מרבית מול הלקוח.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-base mb-6">
                היעד המרכזי שלי הוא להעניק לכם **שקט נפשי מלא**. עבורי שקט אומר: תקשורת שוטפת ופתוחה, עבודה נקייה ומסודרת בסוף כל יום, ועבודה מקצועית שעומדת בתקנים המחמירים ביותר של ענף הבנייה.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span>עמידה מוחלטת בלוחות הזמנים</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span>שימוש בחומרים תקניים בלבד</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span>ניקיון יומיומי וסדר מופתי</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800 font-bold bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span>ליווי אישי של מני לאורך כל הדרך</span>
                </div>
              </div>
            </div>

            {/* Image column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25"></div>
                <img 
                  src={regeneratedImage1782902556519} 
                  alt="מני נפתלי בשטח" 
                  className="relative rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md h-auto object-cover border border-slate-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Short & Premium (3 High-Impact Reviews) */}
      <section className="py-20 bg-white border-t border-slate-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">לקוחות מרוצים</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">מה מספרים על מני נפתלי</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-150 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed text-sm sm:text-base">
                "מני הגיע בדיוק בשעה שקבענו, עבד בצורה נקייה ומאורגנת והשאיר לנו את הבית כמו חדש. לא הייתי צריך לעמוד לו על הראש אפילו רגע אחד. השקט הנפשי שקיבלנו היה שווה הכל."
              </p>
              <div className="font-extrabold text-blue-950 border-t border-slate-200/60 pt-4 text-sm">— משפחת כהן, עפולה</div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-150 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed text-sm sm:text-base">
                "לאחר ניסיון מאכזב מאוד עם קבלנים בעבר, הגעתי למני עם המון חששות. ההקפדה הפדנטית שלו על חומרי תשתית תקניים והשקיפות המלאה שלו החזירו לי לגמרי את האמון. ממליצה בחום!"
              </p>
              <div className="font-extrabold text-blue-950 border-t border-slate-200/60 pt-4 text-sm">— שרית ולוי, בית שאן</div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-150 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed text-sm sm:text-base">
                "עבודה מהירה, נקייה ומקצועית ביותר. מני עמד באופן מוחלט בלוחות הזמנים כפי שהתחייב בפנינו בפגישה הראשונה. פשוט מקצוען אמיתי ותענוג גדול לעבוד איתו."
              </p>
              <div className="font-extrabold text-blue-950 border-t border-slate-200/60 pt-4 text-sm">— משפחת אברהם, אור יהודה</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Sleek & Modern */}
      <section className="py-20 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full">תשובות לשאלות נפוצות</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">מידע שחשוב לדעת</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <details className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-extrabold text-base sm:text-lg text-blue-950 select-none">
                כמה זמן לוקח שיפוץ מקלחת ממוצע?
                <span className="transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-1 rounded-full text-blue-600 shrink-0">
                  <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-50 pt-4">
                שיפוץ יסודי ומלא של חדר רחצה (מקלחת קומפלט) לוקח לרוב בין 7 ל-10 ימי עבודה מלאים. משך הזמן תלוי במורכבות העבודה כגון הזזת קווי מים ראשיים, עבודות איטום יבשתיות וימי ייבוש נדרשים. אנחנו מקפידים לעדכן על כל שלב ושלב.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-extrabold text-base sm:text-lg text-blue-950 select-none">
                האם אתם מספקים חומרי גלם או שאני צריך לקנות?
                <span className="transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-1 rounded-full text-blue-600 shrink-0">
                  <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-50 pt-4">
                אנו דואגים ומספקים את כל חומרי המליטה, האיטום והתשתית הנדרשים לבנייה יציבה (בטון, מלט, צינורות SP/פקסגול, דבקים מיוחדים, חומרי איטום מורשים) כולם עם תו תקן ישראלי מחמיר. חומרי הגמר (חיפויים, כלים סניטריים, ברזים, ריצוף) נרכשים על ידי הלקוח לפי טעמו האישי ואנחנו מתקינים אותם בדייקנות עילאית.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-extrabold text-base sm:text-lg text-blue-950 select-none">
                איך אתם מוודאים שאתר העבודה והבית יישארו נקיים?
                <span className="transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-1 rounded-full text-blue-600 shrink-0">
                  <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-50 pt-4">
                שמירה על ניקיון וסדר היא כרטיס הביקור שלנו. אנו מכסים רצפות ורהיטים רגישים באזורי המעבר, דואגים לפינוי פסולת הבנייה באופן שוטף למכולות מורשות, ומקפידים על ניקוי יסודי של האזור בסיומו של כל יום עבודה.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-2xl bg-white [&_summary::-webkit-details-marker]:hidden shadow-sm transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-extrabold text-base sm:text-lg text-blue-950 select-none">
                איזו אחריות ניתנת על עבודות התשתית והאיטום?
                <span className="transition-transform duration-300 group-open:rotate-180 bg-blue-50 p-1 rounded-full text-blue-600 shrink-0">
                  <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-50 pt-4">
                אנחנו עומדים מאחורי העבודה שלנו במאת האחוזים. כל לקוח מקבל אחריות מפורטת בכתב על עבודות האינסטלציה והאיטום בחוזה העבודה המוסדר שלנו. במידה ותצוץ בעיה הקשורה לאיכות הביצוע, אנחנו כאן תמיד כדי לפתור אותה בהקדם.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA - Premium Blue Concept */}
      <section className="py-16 bg-blue-900 text-white overflow-hidden relative" id="cta-consult">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute inset-0 bg-blue-950 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
            alt="Interior construction layout" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5 text-right">
            <span className="text-blue-300 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-950/60 px-3 py-1.5 rounded-full border border-blue-800/50 inline-block mb-4">
              ייעוץ ותכנון ללא התחייבות
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white leading-tight">
              תכנון מקדים קפדני הוא המפתח לשיפוץ מושלם ושקט
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-light">
              חוסכים לכם משאבים יקרים ועוגמת נפש באמצעות תכנון מוקפד, שקיפות מלאה והכוונה הנדסית עוד לפני הנחת האריח הראשון. נגבש עבורכם מפרט עבודה מדויק, נגדיר לוחות זמנים ריאליים וניצור תוכנית פעולה מותאמת אישית לצרכים שלכם.
            </p>
            <a
              href="https://wa.me/972525211381?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%A0%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%AA%D7%90%D7%9D%20%D7%A9%D7%99%D7%97%D7%94%20%D7%9E%D7%A7%D7%93%D7%99%D7%9E%D7%94%20%D7%9C%D7%A7%D7%A8%D7%90%D7%AA%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-blue-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:scale-105"
              id="cta-whatsapp-link"
            >
              <MessageCircle size={22} className="text-blue-700" />
              תיאום פגישת ייעוץ ותכנון אישית
            </a>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end self-end">
            <img 
              src={regeneratedImage1782903804110} 
              alt="מני נפתלי קבלן שיפוצים" 
              className="h-[280px] sm:h-[350px] object-contain drop-shadow-[0_20px_50px_rgba(30,58,138,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-slate-950 text-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-blue-400 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-900/60">תיאום ופניות</span>
          <h2 className="text-3xl font-extrabold mt-4 mb-3">תיאום סיור באתר והערכת פרויקט</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg font-light">
            להבנת הצרכים הייחודיים של הנכס שלכם ולקבלת הערכת תקציב מסודרת ומקצועית, ניתן ליצור קשר ישיר במגוון דרכים מהירות:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <a href="tel:0525211381" className="flex flex-col items-center p-6 bg-slate-900 hover:bg-slate-850 rounded-2xl border border-slate-800 transition-colors group">
              <div className="bg-blue-600/10 p-4 rounded-full text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <span className="text-xs text-slate-400 mb-1">שיחה קולית מהירה</span>
              <span dir="ltr" className="font-extrabold text-lg text-white">052-521-1381</span>
              <span className="text-xs text-blue-400 mt-2">לחצו לחיוג ישיר</span>
            </a>

            <a href="mailto:meninaftali@gmail.com" className="flex flex-col items-center p-6 bg-slate-900 hover:bg-slate-850 rounded-2xl border border-slate-800 transition-colors group">
              <div className="bg-blue-600/10 p-4 rounded-full text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="text-xs text-slate-400 mb-1">דואר אלקטרוני</span>
              <span className="font-bold text-base text-white break-all">meninaftali@gmail.com</span>
              <span className="text-xs text-blue-400 mt-2">לשליחת שרטוטים ותוכניות</span>
            </a>

            <a 
              href="https://wa.me/972525211381?text=%D7%94%D7%99%D7%99%20%D7%9E%D7%A0%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A0%D7%99%20%D7%96%D7%A7%D7%95%D7%A7%20%D7%9C%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%A0%D7%95%D7%A9%D7%90%20%D7%A9%D7%99%D7%A4%D7%95%D7%A6%D7%99%D7%9D." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-slate-900 hover:bg-slate-850 rounded-2xl border border-slate-800 transition-colors group"
            >
              <div className="bg-emerald-600/10 p-4 rounded-full text-emerald-400 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <MessageCircle size={24} />
              </div>
              <span className="text-xs text-slate-400 mb-1">וואטסאפ ישיר</span>
              <span className="font-extrabold text-lg text-white">שלחו הודעה מהירה</span>
              <span className="text-xs text-emerald-400 mt-2">לשליחת תמונות מצב</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col items-center gap-3">
            <p className="text-base sm:text-lg font-medium text-slate-300">© {new Date().getFullYear()} מני נפתלי - שיפוצי פרימיום ועבודות גמר. כל הזכויות שמורות.</p>
            <p className="text-sm sm:text-base text-slate-400">
              נבנה על ידי <a href="https://eco-media-isreal.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">אקו מדיה מערכות</a>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 italic font-semibold mt-4">"ברכת ה' היא תעשיר"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Before / After Vertical Slider */
const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.type !== 'click') return;
    const container = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, container);
  };

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto h-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white select-none cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => {
        const container = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, container);
      }}
    >
      {/* After Image (Full background) */}
      <img 
        src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop" 
        alt="After Renovation - Modern Bathroom" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-4 left-4 bg-blue-600/90 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg z-10 backdrop-blur-sm shadow-sm">
        אחרי – שיפוץ פרימיום
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1974&auto=format&fit=crop" 
          alt="Before Renovation - Rough wall piping" 
          className="absolute inset-y-0 right-0 w-full h-full object-cover max-w-none"
          style={{ width: '100%', height: '100%', transform: 'scale(1)', transformOrigin: 'right' }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 right-4 bg-slate-800/90 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg z-10 backdrop-blur-sm shadow-sm">
          שלד ותשתיות אינסטלציה
        </div>
      </div>

      {/* Slider Bar & Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
          <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/* How We Work Process Timeline Component */
const ProcessTimeline = () => {
  const steps = [
    {
      num: '01',
      title: 'פגישת תיאום וסקירה בשטח',
      desc: 'אני מגיע אליכם לנכס באופן אישי. בודקים ביחד את התשתיות הקיימות (צנרת, נקודות חשמל, מצב האיטום), מקשיבים לרצונות שלכם וממפים את האפשרויות השונות.'
    },
    {
      num: '02',
      title: 'תמחור הוגן והסכם עבודה מפורט',
      desc: 'תקבלו הצעת מחיר מסודרת, שקופה ומפורטת לפי סעיפים, בלי הפתעות או "תוספות" מוזרות תוך כדי תנועה. החוזה מפרט לוחות זמנים מדויקים ואת תנאי האחריות.'
    },
    {
      num: '03',
      title: 'הכנה, פינוי ובידוד החלל',
      desc: 'אנחנו מכסים ושומרים על רהיטים ורצפות מפני אבק. מפרקים וקורעים את הקיים בצורה בטיחותית, ומפנים את כל פסולת הבנייה באופן שוטף למטמנות מורשות בלבד.'
    },
    {
      num: '04',
      title: 'ביצוע קפדני וליווי בשטח',
      desc: 'אני נמצא בשטח ומבצע את העבודה ישירות. מיישמים מערכות איטום ואינסטלציה מתקדמות עם תו תקן, עבודות ריצוף, גבס וצבע ברמת פילוס ודיוק מושלמת.'
    },
    {
      num: '05',
      title: 'בדיקות בטיחות, ניקיון ומסירה',
      desc: 'מבצעים מבדקי לחץ למים והצפה לאיטום. בסיום, מנקים ומסדרים את האתר כך שתקבלו בית מבריק ומוכן למגורים מיידיים, יחד עם תעודת אחריות רשמית.'
    }
  ];

  return (
    <div className="relative border-r-2 border-blue-100 mr-4 sm:mr-6 pr-6 sm:pr-8 space-y-10 py-4">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Timeline Node Icon/Number */}
          <div className="absolute -right-[43px] sm:-right-[51px] top-0 bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-extrabold text-xs sm:text-sm border-4 border-slate-50 shadow-md">
            {step.num}
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-blue-950 mb-1.5">{step.title}</h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};



const ServiceCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
    >
      <div className="mb-5 inline-block p-3.5 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 self-start shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-extrabold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

export default App;
