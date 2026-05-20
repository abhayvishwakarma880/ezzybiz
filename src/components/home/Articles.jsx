import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// SVG icon components
const IconBusinessSetup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const IconCompanyFormation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);

const IconCompliance = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

const IconInvestorVisa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 9h4" />
    <path d="M14 12h4" />
    <path d="M14 15h2" />
  </svg>
);

const IconEntrepreneurship = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconBanking = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <path d="M2 12h20" />
  </svg>
);

const articles = [
  {
    id: 1,
    category: 'Business Setup',
    gradient: 'from-blue-500 to-cyan-500',
    title: 'How to Start a Business in Dubai as a Foreign Investor',
    desc: 'A complete guide covering company formation, licensing options, investor visas, and the key steps to legally establish your business in Dubai.',
    readTime: '8 min read',
    Icon: IconBusinessSetup,
  },
  {
    id: 2,
    category: 'Company Formation',
    gradient: 'from-purple-500 to-pink-500',
    title: 'Mainland vs Free Zone Company Setup — Which is Right for You?',
    desc: 'Understand the differences between mainland and free zone business setup in the UAE, including ownership, costs, and operational flexibility.',
    readTime: '6 min read',
    Icon: IconCompanyFormation,
  },
  {
    id: 3,
    category: 'UAE Compliance',
    gradient: 'from-emerald-500 to-teal-500',
    title: 'Understanding VAT Registration Requirements in the UAE',
    desc: 'Learn when VAT registration becomes mandatory, the required documentation, and how businesses can stay compliant with UAE regulations.',
    readTime: '5 min read',
    Icon: IconCompliance,
  },
  {
    id: 4,
    category: 'Investor Visa',
    gradient: 'from-orange-500 to-red-500',
    title: 'Everything You Need to Know About UAE Investor Visas',
    desc: 'Explore the benefits, eligibility criteria, processing steps, and documentation required for obtaining an investor visa in Dubai.',
    readTime: '7 min read',
    Icon: IconInvestorVisa,
  },
  {
    id: 5,
    category: 'Entrepreneurship',
    gradient: 'from-indigo-500 to-purple-500',
    title: 'Top Business Opportunities in Dubai for 2026',
    desc: 'Discover fast-growing industries and profitable business opportunities for entrepreneurs planning to enter the UAE market.',
    readTime: '9 min read',
    Icon: IconEntrepreneurship,
  },
  {
    id: 6,
    category: 'Business Banking',
    gradient: 'from-rose-500 to-red-500',
    title: 'How to Open a Corporate Bank Account in Dubai',
    desc: 'A practical overview of the banking process, required documents, and common challenges businesses face while opening a UAE corporate bank account.',
    readTime: '6 min read',
    Icon: IconBanking,
  },
];

export default function Articles() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate()

  return (
    <section ref={ref} className="py-20 bg-[#f9fafb] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Soft blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-3">
            Business Setup &amp; Corporate Insights
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]"> from Dubai Experts</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Stay informed with expert guidance, business setup updates, licensing information, and practical insights for entrepreneurs planning to establish and grow in the UAE.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {articles.map((art, i) => (
            <div
              key={art.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? hovered === i ? 'translateY(-6px)' : 'translateY(0)'
                  : 'translateY(24px)',
                boxShadow: hovered === i
                  ? '0 8px 32px rgba(215,25,63,0.10)'
                  : '0 1px 3px rgba(0,0,0,0.06)',
                borderColor: hovered === i ? 'rgba(215,25,63,0.4)' : '#e5e7eb',
                transition: inView
                  ? `opacity 0.6s ease ${i * 0.08}s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.3s`
                  : `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${art.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${hovered === i ? 'scale-110' : ''}`}
                >
                  <art.Icon />
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                  {art.readTime}
                </span>
              </div>

              {/* Category */}
              <span
                className={`inline-block text-[11px] font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${art.gradient} mb-2`}
              >
                {art.category}
              </span>

              {/* Title */}
              <h3 className="text-[#0f0f1a] font-bold text-[15px] leading-snug mb-2">
                {art.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
                {art.desc}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-1.5">
                <span
                  className="text-[13px] font-semibold transition-colors"
                  style={{ color: hovered === i ? '#b01030' : '#d7193f' }}
                >
                  Read More
                </span>
                <svg
                  className={`w-4 h-4 text-[#d7193f] transition-transform duration-300 ${hovered === i ? 'translate-x-1' : ''}`}
                  fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>

              {/* Bottom gradient bar */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${art.gradient} transition-all duration-300 ${hovered === i ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Red accent top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#d7193f] to-[#e8718a]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div className="max-w-lg text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f0f1a] mb-2">
                Need Expert Guidance for Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">
                  Dubai Business Setup?
                </span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Speak with our experienced consultants for professional assistance with company formation, licensing, visas, and corporate services in the UAE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button onClick={()=>navigate('/contact')} className="bg-gradient-to-r from-[#d7193f] to-[#e8718a] text-white text-sm font-semibold px-7 py-3 rounded-xl shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                Book a Consultation
              </button>
              <button className="bg-white border border-gray-200 text-[#0f0f1a] text-sm font-semibold px-7 py-3 rounded-xl hover:border-[rgba(215,25,63,0.4)] hover:shadow-md transition-all duration-200 whitespace-nowrap">
                View All Articles
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}