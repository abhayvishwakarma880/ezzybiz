import { useState, useEffect, useRef } from 'react';

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

const stories = [
  {
    industry: 'Trading Company',
    title: 'Mainland Company Setup',
    desc: 'Complete mainland registration, investor visa, and UAE banking support for international entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    badge: 'from-blue-500 to-cyan-500',
  },
  {
    industry: 'E-Commerce',
    title: 'E-Commerce License Setup',
    desc: 'E-commerce license, payment gateways, and warehouse operations established in Dubai South.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    badge: 'from-purple-500 to-pink-500',
  },
  {
    industry: 'Hospitality',
    title: 'Restaurant License & Visas',
    desc: 'Trade license, food safety approvals, and 25+ staff visas processed for a fine dining establishment.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    badge: 'from-orange-500 to-red-500',
  },
  {
    industry: 'Consulting',
    title: 'DIFC Office & License',
    desc: 'Professional license, premium DIFC office space, and corporate banking for a consulting firm.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    badge: 'from-emerald-500 to-teal-500',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Businesses We've Helped
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Launch in Dubai</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            From licensing to visas, we've helped hundreds of entrepreneurs establish their businesses across the UAE.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/30 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s`,
              }}
            >
              <img src={s.image} alt={s.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 rounded-full text-[11px] font-semibold text-white bg-gradient-to-r ${s.badge}`}>
                  {s.industry}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
