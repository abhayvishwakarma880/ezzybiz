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
  LuHeart as Heart,
  LuPlane as Plane,
  LuStar as Star,
  // LuPassport as Passport,
  LuIdCard as IdCard,
  LuCalendar as Calendar,
  // LuHome as Home,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";
import { FaPassport } from "react-icons/fa";

const VISA_TYPES = [
  {
    icon: Briefcase,
    title: "Investor Visa",
    description: "Investor visas for entrepreneurs and business owners establishing companies in mainland and free zone jurisdictions across the UAE.",
  },
  {
    icon: Users,
    title: "Employment Visa",
    description: "Professional employment visa processing services for companies hiring employees and skilled professionals in the UAE.",
  },
  {
    icon: Home,
    title: "Family Visa",
    description: "Family sponsorship and residence visa assistance for spouses, children, and dependent family members in the UAE.",
  },
  {
    icon: Award,
    title: "Golden Visa",
    description: "Long-term UAE Golden Visa assistance for eligible investors, entrepreneurs, professionals, and skilled individuals.",
  },
  {
    icon: Globe,
    title: "Freelance Visa",
    description: "Freelance visa solutions for independent professionals, digital creators, consultants, and remote workers in Dubai.",
  },
  {
    icon: HandShake,
    title: "Partner Visa",
    description: "Partner visa processing services for shareholders and partners involved in UAE business operations and company ownership.",
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Business Opportunities",
    description: "Access one of the world's fastest-growing business environments with global investment and networking opportunities.",
  },
  {
    icon: Shield,
    title: "Tax-Friendly Environment",
    description: "Benefit from investor-friendly policies and a modern economic environment in the UAE.",
  },
  {
    icon: Star,
    title: "High Quality Lifestyle",
    description: "Enjoy world-class infrastructure, healthcare, education, safety, and luxury living standards in Dubai and the UAE.",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    description: "Eligible residents can sponsor spouses, children, and family members under UAE immigration regulations.",
  },
  {
    icon: Plane,
    title: "Global Connectivity",
    description: "Live and operate from one of the world's leading international business and travel hubs.",
  },
  {
    icon: Calendar,
    title: "Long-Term Residency Options",
    description: "Explore long-term residency opportunities including investor visas and UAE Golden Visa programs.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation & Eligibility Check", description: "Discuss your visa requirements and determine the most suitable UAE visa category based on your goals and eligibility." },
  { step: "02", title: "Documentation Preparation", description: "Prepare and submit all required legal documents, passport copies, photographs, and supporting paperwork." },
  { step: "03", title: "Application Submission", description: "Complete immigration applications and government processing procedures with professional assistance." },
  { step: "04", title: "Medical & Emirates ID", description: "Coordinate medical testing, biometrics, and Emirates ID registration as part of the UAE residency process." },
  { step: "05", title: "Visa Approval & Stamping", description: "Receive your approved UAE residence visa and complete the final immigration formalities successfully." },
];

const WHY_CHOOSE = [
  "Professional immigration consultants",
  "Fast and reliable visa processing",
  "Complete documentation support",
  "Transparent and professional guidance",
  "Investor and family visa expertise",
  "End-to-end UAE immigration assistance",
];

const FAQS = [
  {
    question: "What types of UAE visas does EzzyBiz provide?",
    answer: "We provide investor visas, employment visas, family visas, Golden Visa assistance, freelance visas, and partner visa services across the UAE.",
  },
  {
    question: "Can I sponsor my family with a UAE residence visa?",
    answer: "Yes, eligible UAE residents can sponsor spouses, children, and dependent family members according to UAE immigration regulations.",
  },
  {
    question: "How long does UAE visa processing take?",
    answer: "Visa processing timelines depend on the visa category and approvals required, but many applications are completed within a few working days.",
  },
  {
    question: "Does EzzyBiz assist with Emirates ID and medical testing?",
    answer: "Yes, we provide complete coordination for medical testing, biometrics, Emirates ID registration, and immigration procedures.",
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

function VisaTypeCard({ visa, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = visa.icon;

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
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{visa.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{visa.description}</p>
    </div>
  );
}

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`group p-5 rounded-xl bg-gradient-to-br from-[#fef8f9] to-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#d7193f]/10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-lg bg-[#d7193f]/5 flex items-center justify-center mb-3">
        <Icon size={18} className="text-[#d7193f]" />
      </div>
      <h3 className="font-semibold text-gray-800 text-sm mb-1">{benefit.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
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

export default function AllVisa() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [visaTypesRef, visaTypesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });
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
              <FaPassport size={12} className="text-[#d7193f]" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">UAE VISA SERVICES</span>
            </div>

            <h1 className="font-['Playfair_Display',serif] text-[clamp(34px,5vw,54px)] font-bold text-[#0f0f1a] leading-[1.2] mb-4">
              Professional UAE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Visa Services In Dubai</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mb-8">
              EzzyBiz provides reliable UAE visa services for entrepreneurs, investors, business owners, employees, 
              and families across Dubai and the UAE. Our experts simplify the visa application process with complete 
              documentation, approvals, and immigration support for smooth and hassle-free processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                Apply For Visa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">ALL VISA SERVICES</span>
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-5">
              Complete UAE Visa & Immigration Solutions
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed text-left">
              <p>
                The UAE offers multiple visa options for entrepreneurs, investors, professionals, employees, and families 
                looking to live, work, or establish businesses in Dubai and across the Emirates. Choosing the right visa 
                category and completing the required procedures correctly is essential for smooth approval and compliance.
              </p>
              <p>
                EzzyBiz provides end-to-end visa assistance including investor visas, employment visas, family sponsorship, 
                Golden Visa support, Emirates ID processing, medical testing coordination, and immigration documentation services.
              </p>
              <p>
                Our experienced consultants guide clients through every stage of the UAE visa process with professional support, 
                transparent communication, and reliable corporate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VISA TYPES SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={visaTypesRef}
            className={`transition-all duration-600 ${
              visaTypesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">VISA TYPES</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Our UAE Visa Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VISA_TYPES.map((visa, idx) => (
                <VisaTypeCard key={idx} visa={visa} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={benefitsRef}
            className={`transition-all duration-600 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHY UAE VISA</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Benefits Of UAE Residency & Visa Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENEFITS.map((benefit, idx) => (
                <BenefitCard key={idx} benefit={benefit} index={idx} />
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
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">VISA PROCESS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                UAE Visa Application Process
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
                Why Choose EzzyBiz For UAE Visa Services
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
                Apply For Your UAE Visa With Confidence
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for professional UAE visa services, smooth immigration support, and reliable 
                residency solutions across Dubai and the UAE.
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