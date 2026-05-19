import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuFileText as FileText,
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
  // LuHome as Home,
  // LuMapPin as MapPin,
  LuDollarSign as DollarSign,
  LuZap as Zap,
  // LuFileSignature as FileSignature,
  LuScrollText as ScrollText,
  LuFolderCheck as FolderCheck,
  LuStamp as Stamp,
  LuKey as Key,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";
import { FaFileSignature } from "react-icons/fa";
// import { FaPassport } from "react-icons/fa";

const EJARI_SERVICES = [
  {
    icon: Stamp,
    title: "Ejari Registration",
    description: "Professional assistance for registering residential and commercial tenancy contracts through the Dubai Ejari system.",
  },
  {
    icon: Clock,
    title: "Ejari Renewal",
    description: "Smooth renewal services for existing Ejari contracts to maintain tenancy compliance in Dubai.",
  },
  {
    icon: Building,
    title: "Commercial Ejari Services",
    description: "Ejari registration support for offices, shops, warehouses, and commercial business properties in Dubai.",
  },
  {
    icon: Home,
    title: "Residential Ejari Services",
    description: "Complete tenancy registration services for apartments, villas, and residential properties across Dubai.",
  },
  {
    icon: FaFileSignature,
    title: "Tenancy Contract Assistance",
    description: "Professional support for tenancy documentation, contract updates, amendments, and related rental procedures.",
  },
  {
    icon: FolderCheck,
    title: "Document Verification",
    description: "Review and verification of tenancy documents and supporting paperwork for successful Ejari processing.",
  },
];

const BENEFITS = [
  {
    icon: Shield,
    title: "Legal Tenancy Protection",
    description: "Ejari officially records tenancy agreements and provides legal recognition for rental contracts in Dubai.",
  },
  {
    icon: Users,
    title: "Required For Visa Processing",
    description: "Ejari registration is commonly required for UAE residence visa and immigration-related procedures.",
  },
  {
    icon: Zap,
    title: "Utility Connections",
    description: "Ejari certificates are required for activating DEWA and other utility services in Dubai.",
  },
  {
    icon: Briefcase,
    title: "Business Compliance",
    description: "Commercial Ejari registration supports trade license requirements and business operations in Dubai.",
  },
  {
    icon: Globe,
    title: "Transparent Rental System",
    description: "Ejari helps maintain transparency and compliance between landlords and tenants under Dubai regulations.",
  },
  {
    icon: FileCheck,
    title: "Smooth Documentation Process",
    description: "Professional Ejari assistance helps simplify tenancy registration and related documentation procedures.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Document Collection", description: "Collect tenancy contracts, Emirates ID copies, passport documents, and property-related paperwork." },
  { step: "02", title: "Document Verification", description: "Review and verify all tenancy documents to ensure compliance with Ejari registration requirements." },
  { step: "03", title: "Application Submission", description: "Submit Ejari registration applications and supporting documents through the official registration system." },
  { step: "04", title: "Approval & Processing", description: "Complete tenancy registration processing and government verification procedures successfully." },
  { step: "05", title: "Ejari Certificate Issuance", description: "Receive the official Ejari certificate for your residential or commercial tenancy registration." },
];

const WHY_CHOOSE = [
  "Professional Ejari registration assistance",
  "Fast and reliable processing support",
  "Complete documentation guidance",
  "Commercial and residential tenancy expertise",
  "Transparent and professional consultation",
  "End-to-end Dubai tenancy support",
];

const FAQS = [
  {
    question: "What is Ejari in Dubai?",
    answer: "Ejari is the official tenancy contract registration system regulated by the Dubai Land Department for residential and commercial rental agreements.",
  },
  {
    question: "Is Ejari mandatory in Dubai?",
    answer: "Yes, Ejari registration is required for many visa, tenancy, utility, and business-related services in Dubai.",
  },
  {
    question: "Can EzzyBiz assist with commercial Ejari registration?",
    answer: "Yes, we provide complete Ejari support for offices, shops, warehouses, and commercial business properties in Dubai.",
  },
  {
    question: "Does Ejari need renewal?",
    answer: "Yes, Ejari registration is generally renewed along with tenancy contract renewals to maintain compliance.",
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

function EjariServiceCard({ service, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = service.icon;

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
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
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

export default function Ejari() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [servicesRef, servicesVisible] = useIntersectionObserver({ threshold: 0.1 });
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
              <ScrollText size={12} className="text-[#d7193f]" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">EJARI SERVICES</span>
            </div>

            <h1 className="font-['Playfair_Display',serif] text-[clamp(34px,5vw,54px)] font-bold text-[#0f0f1a] leading-[1.2] mb-4">
              Professional Ejari
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Registration Services In Dubai</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mb-8">
              EzzyBiz provides reliable Ejari registration and tenancy contract services for businesses and individuals 
              across Dubai. Our experts simplify the Ejari process with complete documentation support, contract 
              registration assistance, and professional guidance for smooth compliance with Dubai tenancy regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                Register Ejari <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHAT IS EJARI</span>
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
            </div>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-5">
              What Is Ejari Registration In Dubai?
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed text-left">
              <p>
                Ejari is an official tenancy contract registration system introduced by the Dubai Land Department (DLD) 
                to regulate rental agreements in Dubai. The system ensures transparency between landlords and tenants 
                while legally registering residential and commercial lease contracts.
              </p>
              <p>
                Ejari registration is mandatory for many essential services in Dubai including residence visa applications, 
                Emirates ID processing, utility connections, trade license activities, and business operations requiring 
                a registered office address.
              </p>
              <p>
                EzzyBiz provides complete Ejari assistance including tenancy contract registration, Ejari renewals, 
                documentation support, tenancy updates, and professional consultation for businesses and residents across Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR EJARI SERVICES SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={servicesRef}
            className={`transition-all duration-600 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">OUR SERVICES</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Our Ejari & Tenancy Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EJARI_SERVICES.map((service, idx) => (
                <EjariServiceCard key={idx} service={service} index={idx} />
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
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHY EJARI</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Benefits Of Ejari Registration In Dubai
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
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">REGISTRATION PROCESS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Ejari Registration Process
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
                Why Choose EzzyBiz For Ejari Services
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
                Register Your Ejari With Confidence
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for professional Ejari registration services, smooth tenancy processing, 
                and reliable Dubai documentation support.
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