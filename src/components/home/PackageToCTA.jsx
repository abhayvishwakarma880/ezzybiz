import { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdOutlineStorefront } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaHandshake, FaRocket } from "react-icons/fa6";

/* ─── Intersection observer hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { 
        setInView(true); 
        obs.disconnect(); 
      } 
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Data ─── */
const packages = [
  {
    name: "Starter Package",
    bestFor: "Ideal For Startups & Small Businesses",
    icon: <MdOutlineWorkspacePremium />,
    featured: false,
    cta: "Get Started",
    features: ["Mainland / Free Zone Registration", "Trade License Assistance", "Business Activity Consultation", "Documentation Support", "Basic PRO Services"],
  },
  {
    name: "Professional Package",
    bestFor: "Best For Growing Businesses",
    icon: <RiVipCrownLine />,
    featured: true,
    label: "Most Popular",
    cta: "Choose Package",
    features: ["Complete Company Formation", "Investor Visa Assistance", "PRO & Government Services", "VAT Registration Support", "Business Banking Guidance", "Priority Consultation"],
  },
  {
    name: "Enterprise Package",
    bestFor: "For International Investors & Enterprises",
    icon: <FaHandshake />,
    featured: false,
    cta: "Contact Us",
    features: ["End-to-End Corporate Solutions", "Multi Visa Processing", "Corporate Tax & Compliance", "Trademark Registration", "Dedicated Account Manager", "Premium Business Support"],
  },
];

const industries = [
  { icon: <MdOutlineStorefront />, title: "E-Commerce", desc: "Launch and scale online businesses with UAE licensing and digital commerce solutions." },
  { icon: <HiOutlineBuildingOffice />, title: "Real Estate", desc: "Professional business setup support for real estate agencies, brokers, and property consultants." },
  { icon: <TbWorld />, title: "IT & Technology", desc: "Business formation solutions for software companies, tech startups, and digital service providers." },
  { icon: <MdOutlineStorefront />, title: "Trading Business", desc: "Complete licensing and compliance support for import, export, and general trading companies." },
  { icon: <HiOutlineBuildingOffice />, title: "Consultancy Services", desc: "Setup solutions for management, marketing, financial, and professional consultancy firms." },
  { icon: <FaRocket />, title: "Hospitality & Tourism", desc: "Corporate services for tourism agencies, restaurants, hotels, and hospitality businesses." },
];

const testimonials = [
  { name: "Ahmed Raza", company: "Trading Business Owner", initials: "AR", review: "EzzyBiz made our Dubai company setup process simple and stress-free. Their consultants handled everything professionally from licensing to approvals." },
  { name: "Sarah Williams", company: "International Investor", initials: "SW", review: "The team provided excellent guidance throughout the entire business setup journey. Highly professional and responsive support." },
  { name: "Mohammed Ali", company: "Technology Startup Founder", initials: "MA", review: "From documentation to visa processing, EzzyBiz handled every step efficiently. Great experience working with their consultants." },
];

const faqs = [
  { q: "How long does it take to setup a company in Dubai?", a: "The timeline depends on the business activity and jurisdiction, but most company formations can be completed within a few working days." },
  { q: "Can foreign investors own 100% of a UAE company?", a: "Yes, many mainland and free zone business activities now allow 100% foreign ownership in the UAE." },
  { q: "Which is better: Mainland or Free Zone?", a: "The right option depends on your business goals, target market, visa requirements, and operational needs. Our consultants help you choose the best structure." },
  { q: "Do I need a physical office for company registration?", a: "Depending on the jurisdiction and license type, flexible office solutions and virtual office options may be available." },
  { q: "Does EzzyBiz help with visas and bank accounts?", a: "Yes, we provide complete support for investor visas, employee visas, Emirates ID processing, and business banking assistance." },
];

/* ─── Shared Badge ─── */
const Badge = ({ text, theme = "light" }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${theme === 'dark' ? 'bg-[#d7193f]/10 border-[#d7193f]/20' : 'bg-[#d7193f]/5 border-[#d7193f]/10'} mb-6`}>
    <span className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-pulse" />
    <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#d7193f] font-['Inter',sans-serif]">{text}</span>
  </div>
);

/* ─── PACKAGES SECTION ─── */
function PackagesSection() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-5 md:py-6 bg-[#f9fafb] relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d7193f]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-[700ms] ease-out will-change-transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* <Badge text="Business Packages" theme="light" /> */}
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-[#0f0f1a] mb-5 leading-tight">
            Affordable Business Setup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Solutions In Dubai</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-gray-600 leading-relaxed">
            Choose the right business setup package tailored to your goals, industry, and investment plans. EzzyBiz offers flexible and transparent corporate solutions for entrepreneurs, startups, and international investors across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <div key={i} className={`relative p-8 rounded-2xl border transition-all duration-300 will-change-transform ${pkg.featured ? "bg-white border-[#d7193f] shadow-[0_20px_50px_rgba(215,25,63,0.1)] -translate-y-2 md:-translate-y-4" : "bg-white border-gray-200 hover:border-[#d7193f]/40 hover:shadow-[0_20px_40px_rgba(215,25,63,0.05)] hover:-translate-y-2"} flex flex-col`}
                 style={{ opacity: inView ? 1 : 0, transform: inView ? (pkg.featured ? "translateY(-16px)" : "translateY(0)") : "translateY(40px)", transition: `all 0.7s ease-out ${0.15 + i * 0.15}s` }}>
              
              {pkg.featured && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                  {pkg.label}
                </div>
              )}
              
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors ${pkg.featured ? "bg-[#d7193f]/10 text-[#d7193f] border border-[#d7193f]/20" : "bg-[#d7193f]/5 text-[#d7193f] border border-[#d7193f]/10"}`}>
                  {pkg.icon}
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0f0f1a] mb-2">{pkg.name}</h3>
                <p className="font-['Inter',sans-serif] text-xs text-gray-500">{pkg.bestFor}</p>
              </div>
              
              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 font-['Inter',sans-serif] text-sm text-gray-600">
                    <FaCheckCircle className={`mt-0.5 text-[15px] shrink-0 ${pkg.featured ? "text-[#d7193f]" : "text-gray-400"}`} />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-xl font-['Inter',sans-serif] font-semibold text-sm transition-all duration-300 ${pkg.featured ? "bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white shadow-[0_8px_20px_rgba(215,25,63,0.25)] hover:shadow-[0_12px_25px_rgba(215,25,63,0.4)] hover:-translate-y-1" : "bg-transparent border border-gray-200 text-[#0f0f1a] hover:bg-[#d7193f]/5 hover:border-[#d7193f]/30 hover:text-[#d7193f]"}`}>
                {pkg.cta} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INDUSTRIES SECTION ─── */
function IndustriesSection() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-20 md:py-24 bg-[#0f0f1a] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-[700ms] ease-out will-change-transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* <Badge text="Industries We Serve" theme="dark" /> */}
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Business Solutions For <br />
            <span className="text-[#d7193f]">Multiple Industries</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-gray-400 leading-relaxed">
            EzzyBiz provides tailored company formation and corporate solutions for businesses across multiple industries in the UAE market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(215,25,63,0.1)] hover:-translate-y-1 hover:border-[#d7193f]/30 will-change-transform"
                 style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease-out ${0.1 + i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-xl bg-[#d7193f]/10 border border-[#d7193f]/20 flex items-center justify-center text-[#d7193f] text-xl mb-5 group-hover:bg-[#d7193f]/20 transition-colors">
                {ind.icon}
              </div>
              <h4 className="font-['Playfair_Display',serif] text-xl font-bold text-white mb-3 group-hover:text-[#d7193f] transition-colors">{ind.title}</h4>
              <p className="font-['Inter',sans-serif] text-sm text-gray-400 leading-relaxed mb-4">{ind.desc}</p>
              <div className="text-[#d7193f] font-bold text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS SECTION ─── */
function TestimonialsSection() {
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-20 md:py-24 bg-[#f9fafb] relative overflow-hidden" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-[700ms] ease-out will-change-transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* <Badge text="Client Testimonials" theme="light" /> */}
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-[#0f0f1a] mb-5 leading-tight">
            Trusted By Entrepreneurs <br />
            <span className="text-[#d7193f]">& Global Investors</span>
          </h2>
          <p className="font-['Inter',sans-serif] text-gray-600 leading-relaxed">
            Our clients trust EzzyBiz for reliable business setup, professional corporate services, and smooth company formation solutions across Dubai and the UAE.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white border border-gray-200 rounded-2xl flex flex-col gap-5 transition-all duration-300 hover:border-[#d7193f]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(215,25,63,0.05)] will-change-transform"
                 style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(35px)", transition: `all 0.7s ease-out ${0.15 + i * 0.15}s` }}>
              <div className="text-[#d7193f] text-[15px] tracking-[3px]">★★★★★</div>
              <p className="font-['Inter',sans-serif] text-[15px] text-gray-600 italic leading-relaxed flex-1">"{t.review}"</p>
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100 mt-2">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d7193f] to-[#b81236] flex items-center justify-center font-['Playfair_Display',serif] font-bold text-white shadow-lg shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-['Inter',sans-serif] font-bold text-[14px] text-[#0f0f1a]">{t.name}</div>
                  <div className="font-['Inter',sans-serif] text-[12px] text-gray-500 mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ SECTION ─── */
function FAQSection() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView(0.1);
  return (
    <section className="py-20 md:py-24 bg-[#1a1a2e] relative overflow-hidden" ref={ref}>
      <div className="max-w-[800px] mx-auto px-6 md:px-10 relative z-10">
        <div className={`text-center mb-16 transition-all duration-[700ms] ease-out will-change-transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* <Badge text="Frequently Asked Questions" theme="dark" /> */}
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Common Questions About <br />
            <span className="text-[#d7193f]">Business Setup In Dubai</span>
          </h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-xl border transition-all duration-300 will-change-transform ${open === i ? "border-[#d7193f] bg-[#d7193f]/5 shadow-sm" : "border-white/10 bg-[#0f0f1a] hover:border-[#d7193f]/30"}`}
                 style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-20px)", transition: `all 0.6s ease-out ${0.1 + i * 0.1}s` }}>
              <button className="w-full flex items-center justify-between p-5 md:p-6 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className={`font-['Inter',sans-serif] font-semibold text-[15px] md:text-base pr-4 transition-colors ${open === i ? "text-[#d7193f]" : "text-white"}`}>{faq.q}</span>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? "bg-[#d7193f] text-white" : "bg-[#d7193f]/10 text-[#d7193f] border border-[#d7193f]/20"}`}>
                  {open === i ? <FiMinus size={16} /> : <FiPlus size={16} />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-[400ms] ease-out ${open === i ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-5 md:px-6 pb-6 pt-0 font-['Inter',sans-serif] text-[14.5px] text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA SECTION ─── */
function FinalCTASection() {
  const [ref, inView] = useInView(0.2);
  return (
    <section className="py-24 md:py-32 bg-[#f9fafb] relative overflow-hidden" ref={ref}>
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_15%_50%,rgba(215,25,63,0.06)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_85%_50%,rgba(215,25,63,0.03)_0%,transparent_60%)] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)" }} />
      
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-[800ms] ease-out will-change-transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-[1px] bg-[#d7193f]/40" />
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#d7193f] font-['Inter',sans-serif]">Start Today</span>
            <span className="w-8 h-[1px] bg-[#d7193f]/40" />
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-[clamp(36px,5vw,64px)] font-bold text-[#0f0f1a] mb-6 leading-[1.1]">
            Start Your Business Journey <br className="hidden md:block" />In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Dubai</span> Today
          </h2>
          
          <p className="font-['Inter',sans-serif] text-gray-600 text-[15px] md:text-lg mb-10 max-w-[600px] mx-auto leading-relaxed">
            Partner with EzzyBiz for reliable company formation, corporate services, and professional business solutions tailored for the UAE market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(215,25,63,0.3)] hover:shadow-[0_15px_40px_rgba(215,25,63,0.45)] hover:-translate-y-1 transition-all duration-300">
              <FaRocket /> Get Free Consultation
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-gray-200 text-[#0f0f1a] font-['Inter',sans-serif] font-semibold text-[15px] flex items-center justify-center gap-3 hover:bg-[#d7193f]/5 hover:border-[#d7193f]/30 hover:text-[#d7193f] transition-all duration-300">
              <FaHandshake /> Talk To Our Experts
            </button>
          </div>
          
          <p className="font-['Inter',sans-serif] text-[12.5px] text-gray-500 tracking-wide">Trusted by startups, entrepreneurs, and global investors across the UAE.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT EXPORT ─── */
export default function PackageToCTA() {
  return (
    <>
      <PackagesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}