import { useState, useEffect, useRef } from 'react';
import { MdOutlineStorefront } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { TbShip, TbStethoscope } from 'react-icons/tb';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';

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

const industries = [
  { title: 'Trading & Import Export',  icon: <TbShip size={22} />,                   gradient: 'from-blue-500 to-cyan-500',    stats: '150+ Clients', desc: 'Licensing, documentation, and banking assistance for trading businesses in Dubai.' },
  { title: 'E-Commerce Businesses',    icon: <MdOutlineStorefront size={22} />,       gradient: 'from-purple-500 to-pink-500',  stats: '120+ Clients', desc: 'E-commerce licensing, VAT registration, and scalable setup solutions in the UAE.' },
  { title: 'Real Estate Companies',    icon: <HiOutlineBuildingOffice2 size={22} />,  gradient: 'from-emerald-500 to-teal-500', stats: '80+ Clients',  desc: 'Business setup and corporate support for property management companies.' },
  { title: 'Restaurants & Cafés',      icon: <MdOutlineRestaurantMenu size={22} />,   gradient: 'from-orange-500 to-red-500',   stats: '100+ Clients', desc: 'Licensing, approvals, and operational setup for food and hospitality businesses.' },
  { title: 'Consulting & Professional',icon: <BsBriefcase size={20} />,               gradient: 'from-indigo-500 to-purple-500',stats: '90+ Clients',  desc: 'Professional business structures for consultants and service providers in Dubai.' },
  { title: 'Healthcare & Medical',     icon: <TbStethoscope size={22} />,             gradient: 'from-rose-500 to-red-500',     stats: '60+ Clients',  desc: 'Regulatory guidance and corporate setup for healthcare-related businesses.' },
];

const clients = [
  { country: 'India',         code: 'in',  count: '150+', color: 'from-orange-500 to-red-500' },
  { country: 'United Kingdom',code: 'gb',  count: '80+',  color: 'from-blue-500 to-indigo-500' },
  { country: 'Canada',        code: 'ca',  count: '60+',  color: 'from-red-500 to-red-700' },
  { country: 'Saudi Arabia',  code: 'sa',  count: '45+',  color: 'from-green-500 to-emerald-500' },
  { country: 'USA',           code: 'us',  count: '70+',  color: 'from-blue-600 to-cyan-500' },
  { country: 'Germany',       code: 'de',  count: '40+',  color: 'from-yellow-500 to-orange-500' },
];

export default function Clientele() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section ref={ref} className="py-20 bg-[#f9fafb] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-3">
            Trusted Across
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]"> Diverse Industries</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            EzzyBiz supports startups, entrepreneurs, and growing companies with reliable business setup, licensing, and corporate solutions across the UAE.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((ind, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? (hovered === i ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(24px)',
                boxShadow: hovered === i ? '0 8px 32px rgba(215,25,63,0.10)' : '0 1px 3px rgba(0,0,0,0.06)',
                borderColor: hovered === i ? 'rgba(215,25,63,0.4)' : '#e5e7eb',
                transition: inView
                  ? `opacity 0.6s ease ${i * 0.08}s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.3s`
                  : `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ind.gradient} flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${hovered === i ? 'scale-110' : ''}`}>
                  {ind.icon}
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{ind.stats}</span>
              </div>
              <h3 className="text-[#0f0f1a] font-bold text-[15px] mb-2 transition-colors">{ind.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">{ind.desc}</p>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${ind.gradient} transition-all duration-300 ${hovered === i ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>

        {/* Global Clients */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f0f1a] mb-2">
              Serving Entrepreneurs <span className="text-[#d7193f]">Worldwide</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              We assist clients from across the globe looking to establish their presence in Dubai.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`c${i}`)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-white border rounded-xl p-4 text-center overflow-hidden"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? (hovered === `c${i}` ? 'translateY(-6px)' : 'translateY(0)') : 'translateY(20px)',
                  borderColor: hovered === `c${i}` ? 'rgba(215,25,63,0.4)' : '#e5e7eb',
                  transition: inView
                    ? `opacity 0.5s ease ${i * 0.07}s, transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.3s`
                    : `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
                }}
              >
                <img src={`https://flagcdn.com/w80/${c.code}.png`} alt={c.country} className="w-12 h-8 object-cover rounded mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <p className="text-[#0f0f1a] font-semibold text-sm group-hover:text-[#d7193f] transition-colors">{c.country}</p>
                <p className="text-gray-400 text-xs mt-0.5">{c.count} Clients</p>
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${c.color} w-0 group-hover:w-full transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
