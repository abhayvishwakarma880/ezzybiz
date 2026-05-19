import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBuilding2 as Building2,
  // LuGlobe as Globe,
  LuAward as Award,
  LuHandshake as HandShake,
  LuFileCheck as FileCheck,
  LuBuilding as Building,
  LuUsers as Users,
  LuChevronRight as ChevronRight,
  LuPhone as Phone,
  LuMessageCircle as MessageCircle,
  LuArrowRight as ArrowRight,
  // LuCheckCircle2 as CheckCircle2,
  LuBriefcase as Briefcase,
  LuShield as Shield,
  LuClock as Clock,
  LuTrendingUp as TrendingUp,
  // LuMapPin as MapPin,
  LuDollarSign as DollarSign,
  LuZap as Zap,
  LuShoppingCart as ShoppingCart,
  LuLaptop as Laptop,
  LuCode as Code,
  LuMegaphone as Megaphone,
  LuPlane as Plane,
  LuTruck as Truck,
  LuPackage as Package,
  LuFactory as Factory,
  LuSmartphone as Smartphone,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";

const BENEFITS = [
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Maintain complete ownership of your company without requiring a local sponsor or UAE national partner.",
  },
  {
    icon: DollarSign,
    title: "Affordable Business Setup",
    description: "RAK Free Zone offers cost-effective business setup solutions suitable for startups, SMEs, and international investors.",
  },
  {
    icon: MapPin,
    title: "Strategic Business Location",
    description: "Benefit from excellent connectivity to UAE ports, airports, regional markets, and international trade routes.",
  },
  {
    icon: Zap,
    title: "Fast Company Registration",
    description: "Enjoy simplified company formation procedures and efficient trade license approvals for smooth business setup.",
  },
  {
    icon: Building,
    title: "Flexible Office Solutions",
    description: "Choose from flexi desks, offices, warehouses, and industrial facilities based on your business requirements.",
  },
  {
    icon: Users,
    title: "Investor Visa Eligibility",
    description: "Apply for investor and employee visas with complete UAE immigration and visa processing support services.",
  },
];

const BUSINESS_ACTIVITIES = [
  { name: "General Trading", icon: ShoppingCart },
  { name: "Import & Export", icon: Truck },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "Logistics & Warehousing", icon: Package },
  { name: "E-Commerce", icon: Laptop },
  { name: "Consultancy Services", icon: TrendingUp },
  { name: "IT & Technology", icon: Code },
  { name: "Media & Marketing", icon: Megaphone },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Professional Services", icon: Briefcase },
];

const PROCESS_STEPS = [
  { step: "01", title: "Business Consultation", description: "Discuss your business requirements and select the right RAK Free Zone business activity and company structure." },
  { step: "02", title: "Choose License Type", description: "Select the appropriate commercial, industrial, service, or professional license for your business operations." },
  { step: "03", title: "Documentation Submission", description: "Prepare and submit all required company registration documents and shareholder information for approvals." },
  { step: "04", title: "License Issuance", description: "Receive your RAK Free Zone trade license and complete company incorporation procedures successfully." },
  { step: "05", title: "Visa & Banking Assistance", description: "Complete investor visa processing and business bank account setup with expert UAE corporate guidance." },
];

const WHY_CHOOSE = [
  "Professional free zone setup consultants",
  "Affordable and transparent business solutions",
  "Fast company registration process",
  "Complete visa and PRO support",
  "Business banking assistance",
  "End-to-end UAE corporate services",
];

const FAQS = [
  {
    question: "Can foreigners fully own a RAK Free Zone company?",
    answer: "Yes, RAK Free Zone companies allow 100% foreign ownership without requiring a local sponsor.",
  },
  {
    question: "Is RAK Free Zone suitable for international businesses?",
    answer: "Yes, RAK Free Zone is a popular choice for international trading, manufacturing, logistics, and service-based companies due to its strategic location and affordable setup options.",
  },
  {
    question: "Can I apply for UAE residence visas through RAK Free Zone?",
    answer: "Yes, investors and eligible employees can apply for UAE residence visas through RAK Free Zone companies.",
  },
  {
    question: "Can RAK Free Zone companies conduct international business?",
    answer: "Yes, RAK Free Zone companies can operate internationally and conduct global trading and commercial activities efficiently.",
  },
];

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`group p-6 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#d7193f]/5 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d7193f]/10 to-[#d7193f]/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d7193f]/15">
        <Icon size={22} className="text-[#d7193f]" />
      </div>
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{benefit.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
    </div>
  );
}

function ActivityCard({ activity, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = activity.icon;

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 border border-gray-100 transition-all duration-300 hover:bg-white hover:border-[#d7193f]/20 hover:shadow-sm ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="w-7 h-7 rounded-md bg-[#d7193f]/5 flex items-center justify-center group-hover:bg-[#d7193f]/10 transition-colors">
        <Icon size={13} className="text-[#d7193f]" />
      </div>
      <span className="text-sm text-gray-700 group-hover:text-[#d7193f] transition-colors">{activity.name}</span>
    </div>
  );
}

function ProcessStep({ step, index }) {
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start group transition-all duration-400 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d7193f] to-[#b81236] flex items-center justify-center shadow-lg shadow-[#d7193f]/20">
          <span className="text-white text-sm font-bold">{step.step}</span>
        </div>
        {index < PROCESS_STEPS.length - 1 && (
          <div className="absolute top-10 left-5 w-px h-12 bg-gradient-to-b from-[#d7193f]/40 to-transparent hidden md:block" />
        )}
      </div>
      <div className="flex-1 pb-6">
        <h4 className="font-semibold text-gray-900 text-base mb-1">{step.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`border-b border-gray-100 transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.question}</span>
        <ChevronRight
          size={18}
          className={`text-[#d7193f] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function RAKFZ() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activitiesRef, activitiesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [processRef, processVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [whyRef, whyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqRef, faqVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-white font-['Inter',sans-serif]">
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#fef8f9] via-white to-[#fff5f6] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 backdrop-blur-sm border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-5">
              <CheckCircle2 size={12} className="text-[#d7193f]" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">RAK FREE ZONE SETUP</span>
            </div>

            <h1 className="font-['Playfair_Display',serif] text-[clamp(34px,5vw,54px)] font-bold text-[#0f0f1a] leading-[1.2] mb-4">
              RAK Free Zone
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Company Formation Services</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mb-8">
              Establish your business in Ras Al Khaimah Free Zone with cost-effective company formation solutions, 
              investor-friendly regulations, and complete corporate support. EzzyBiz helps entrepreneurs, startups, 
              and global investors launch and grow their businesses across the UAE with smooth registration and 
              compliance assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                Start Your Company <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md no-underline">
                <MessageCircle size={14} /> Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRODUCTION SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={introRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-600 ${
              introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">RAK FREE ZONE</span>
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-5">
              What Is RAK Free Zone Company Formation?
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed text-left">
              <p>
                RAK Free Zone company formation allows entrepreneurs and international investors to establish businesses 
                in one of the UAE's most business-friendly and cost-effective free zones. Ras Al Khaimah offers flexible 
                setup solutions, modern infrastructure, and simplified regulations for startups, SMEs, and international companies.
              </p>
              <p>
                RAK Free Zone is strategically located with strong access to UAE ports, airports, and international trade 
                routes, making it an ideal destination for trading, manufacturing, logistics, consultancy, and service-based businesses.
              </p>
              <p>
                EzzyBiz provides complete assistance for RAK Free Zone company setup including business activity selection, 
                trade license registration, visa processing, office solutions, banking support, and UAE corporate compliance services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={benefitsRef}
            className={`transition-all duration-600 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">KEY BENEFITS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Benefits Of RAK Free Zone Company Formation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <BenefitCard key={idx} benefit={benefit} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BUSINESS ACTIVITIES SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={activitiesRef}
            className={`transition-all duration-600 ${
              activitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">BUSINESS ACTIVITIES</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Popular Business Activities In RAK Free Zone
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {BUSINESS_ACTIVITIES.map((activity, idx) => (
                <ActivityCard key={idx} activity={activity} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <div
            ref={processRef}
            className={`transition-all duration-600 ${
              processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">SETUP PROCESS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                RAK Free Zone Company Setup Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              {PROCESS_STEPS.map((step, idx) => (
                <ProcessStep key={idx} step={step} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE EZZYBIZ ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={whyRef}
            className={`transition-all duration-600 ${
              whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHY EZZYBIZ</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Why Choose EzzyBiz For RAK Free Zone Setup
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHY_CHOOSE.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-4 rounded-lg bg-gray-50/50 border border-gray-100 transition-all duration-300 hover:bg-white hover:border-[#d7193f]/20 hover:shadow-sm ${
                    whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-[#d7193f] shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <div
            ref={faqRef}
            className={`transition-all duration-600 ${
              faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">FAQ</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              {FAQS.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={ctaRef}
            className={`bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-600 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d7193f]/10 to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d7193f]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8718a]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="font-['Playfair_Display',serif] text-[clamp(24px,4vw,34px)] font-bold text-white mb-3">
                Launch Your RAK Free Zone Business Today
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for smooth company formation, expert consultation, and reliable corporate 
                solutions for your RAK Free Zone business setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                  Get Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+971527069469" className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 no-underline cursor-pointer">
                  <Phone size={14} /> Talk To Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}