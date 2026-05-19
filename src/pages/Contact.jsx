import { useEffect, useRef, useState } from "react";
import {
  // LuMapPin as MapPin,
  LuPhone as Phone,
  LuMail as Mail,
  LuClock as Clock,
  LuChevronRight as ChevronRight,
  LuMessageCircle as MessageCircle,
  LuArrowRight as ArrowRight,
  // LuCheckCircle2 as CheckCircle2,
  LuBriefcase as Briefcase,
  LuShield as Shield,
  LuZap as Zap,
  // LuGlobe as Globe,
  LuSend as Send,
  LuUser as User,
  LuAtSign as AtSign,
  LuBuilding2 as Building2,
  LuFileText as FileText,
  LuUsers as Users,
  LuAward as Award,
  // LuHome as Home,
  LuCreditCard as CreditCard,
  LuReceipt as Receipt,
  LuLandmark as Landmark,
  LuFileCheck as FileCheck,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle, FiAlertCircle } from "react-icons/fi";
import { BiPieChart, BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Office Address",
    description: "Office 210, Business Bay,\nDubai, United Arab Emirates",
  },
  {
    icon: Phone,
    title: "Phone Number",
    description: "+971 52 706 9469\n+971 4 569 9557",
  },
  {
    icon: Mail,
    title: "Email Address",
    description: "info@ezzybiz.ae\nsupport@ezzybiz.ae",
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "Monday - Saturday\n9:00 AM - 6:30 PM",
  },
];

const SERVICE_OPTIONS = [
  "Mainland Company Formation",
  "Dubai Free Zone Setup",
  "Sharjah Free Zone Setup",
  "Ajman Free Zone Setup",
  "RAK Free Zone Setup",
  "Visa Services",
  "Golden Visa",
  "Ejari Services",
  "VAT Services",
  "Business Banking",
  "PRO Services",
  "Other Corporate Services",
];

const WHY_CHOOSE = [
  {
    icon: Briefcase,
    title: "Professional Business Consultants",
    description: "Experienced consultants providing reliable guidance for UAE company formation and corporate services.",
  },
  {
    icon: Shield,
    title: "Transparent & Reliable Support",
    description: "Clear communication, professional consultation, and smooth business setup assistance across the UAE.",
  },
  {
    icon: Zap,
    title: "Fast Response & Assistance",
    description: "Quick support for inquiries, documentation, visa processing, and business setup consultations.",
  },
  {
    icon: Globe,
    title: "Complete Corporate Solutions",
    description: "From company setup and visas to VAT and banking support, we provide complete UAE business solutions.",
  },
];

const FAQS = [
  {
    question: "How can I contact EzzyBiz consultants?",
    answer: "You can contact our team through phone, email, WhatsApp, or the consultation form available on our website.",
  },
  {
    question: "Do you provide free business consultation?",
    answer: "Yes, EzzyBiz provides professional consultation to help clients understand UAE business setup and corporate service requirements.",
  },
  {
    question: "Can international investors contact EzzyBiz remotely?",
    answer: "Yes, we assist local and international clients through online consultation and remote business setup support services.",
  },
  {
    question: "What services does EzzyBiz provide?",
    answer: "We provide mainland and free zone company formation, visa services, VAT support, business banking assistance, Ejari services, and complete UAE corporate solutions.",
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

function ContactInfoCard({ info, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = info.icon;

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
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{info.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{info.description}</p>
    </div>
  );
}

function WhyChooseCard({ item, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = item.icon;

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
      <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
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

// Web3Forms Access Key - Replace with your own key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "6321f359-02b0-4e8d-be16-c120b165a4bc";

export default function Contact() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contactInfoRef, contactInfoVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [whyRef, whyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [mapRef, mapVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqRef, faqVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare Web3Forms payload containing only the active, uncommented fields
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(result.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      alert("Something went wrong while sending the form. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <MessageCircle size={12} className="text-[#d7193f]" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">CONTACT EZZYBIZ</span>
            </div>

            <h1 className="font-['Playfair_Display',serif] text-[clamp(34px,5vw,54px)] font-bold text-[#0f0f1a] leading-[1.2] mb-4">
              Get In Touch With Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Business Setup Experts</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-600 mb-8">
              Connect with EzzyBiz for professional business setup, visa services, VAT support, banking assistance, 
              and corporate solutions across Dubai and the UAE. Our consultants are ready to guide you through every 
              step of your business journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={scrollToForm} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 cursor-pointer">
                Book Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+971527069469" className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md no-underline cursor-pointer">
                <MessageCircle size={14} /> Talk To Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT INFO SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={contactInfoRef}
            className={`transition-all duration-600 ${
              contactInfoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">CONTACT INFORMATION</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-3">
                Let's Build Your Business In Dubai
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Our experienced consultants are available to assist entrepreneurs, startups, SMEs, and global investors 
                with reliable UAE business setup and corporate solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTACT_INFO.map((info, idx) => (
                <ContactInfoCard key={idx} info={info} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={formRef}
            className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-600 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Form Left Side */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">SEND MESSAGE</span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,34px)] font-bold text-[#0f0f1a] mb-3">
                Request Free Business Consultation
              </h2>
              {/* <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and our consultants will contact you shortly with professional guidance 
                and customized business solutions for your UAE setup requirements.
              </p> */}

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-600" />
                    <span className="text-green-700 text-sm">Thank you! Our team will contact you shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <AtSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div> */}

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div> */}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tell Us About Your Business Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors resize-none"
                    placeholder="Please describe your business requirements and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Submit Inquiry <Send size={14} /></>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Why Choose Us Preview */}
            <div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                  <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHY CONTACT US</span>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0f0f1a] mb-4">
                  Why Businesses Choose EzzyBiz
                </h3>
                <div className="space-y-4">
                  {WHY_CHOOSE.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#d7193f]/5 flex items-center justify-center shrink-0">
                          <Icon size={14} className="text-[#d7193f]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Contact */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-12 h-[1px] bg-gray-200" />
                    <span className="text-xs text-gray-400">OR REACH US DIRECTLY</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="tel:+971527069469" className="flex items-center gap-2 text-gray-600 hover:text-[#d7193f] transition-colors text-sm">
                      <Phone size={14} /> Call Us
                    </a>
                    <a href="https://wa.me/971527069469" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors text-sm">
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8">
          <div
            ref={mapRef}
            className={`transition-all duration-600 ${
              mapVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">OUR LOCATION</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-3">
                Visit Our Dubai Office
              </h2>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-6">
                Meet our consultants at our Dubai office for professional business setup consultation and personalized 
                corporate service assistance.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3610.579!2x55.265!3x25.204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b3b0f1b7b%3A0x2b0f1b7b3b0f1b7b!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EzzyBiz Office Location"
                className="w-full"
              />
            </div>

            <div className="text-center mt-6">
              <a
                href="https://maps.google.com/?q=Business+Bay+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#d7193f] text-sm font-semibold hover:gap-3 transition-all"
              >
                Get Directions <ArrowRight size={14} />
              </a>
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
                Ready To Start Your UAE Business Journey?
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for professional business setup consultation, reliable corporate services, 
                and smooth company formation solutions across Dubai and the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={scrollToForm} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 cursor-pointer">
                  Get Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a href="tel:+971527069469" className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 no-underline cursor-pointer">
                  <MessageCircle size={14} /> Talk To Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}