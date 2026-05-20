import { useState, useEffect, useRef } from "react";
import { RiBuildingLine } from "react-icons/ri";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { TbShieldCheck, TbCertificate, TbClock, TbUsers, TbRocket, TbStar } from "react-icons/tb";
import { MdOutlineWorkspacePremium, MdOutlineEmojiEvents } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import {  LuArrowRight, LuPhone, LuMessageCircle } from "react-icons/lu";

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isPercent = String(target).includes("%");
    const isPlus = String(target).includes("+");
    const isSlash = String(target).includes("/");
    if (isSlash) { setCount(target); return; }
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * num);
      setCount(current + (isPercent ? "%" : isPlus ? "+" : ""));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const StatItem = ({ value, label, index, inView }) => {
  const animated = useCountUp(value, 1800 + index * 200, inView);
  return (
    <div
      className="flex flex-col gap-1 transition-all duration-600"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.12}s`,
      }}
    >
      <span className="text-3xl md:text-4xl font-bold text-[#d7193f] leading-none">
        {animated || value}
      </span>
      <span className="text-[11px] text-gray-500 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
};

const highlights = [
  { icon: <MdOutlineWorkspacePremium />, text: "Professional Business Setup Consultants" },
  { icon: <HiOutlineGlobeAlt />, text: "Complete UAE Corporate Solutions" },
  { icon: <TbShieldCheck />, text: "Fast & Hassle-Free Registration Process" },
  { icon: <FaHandshake />, text: "Reliable Support For Global Investors" },
];

const stats = [
  { value: "500+", label: "Businesses Successfully Established" },
  { value: "10+", label: "Years Of Industry Experience" },
  { value: "100%", label: "Client-Focused Solutions" },
  { value: "24/7", label: "Dedicated Consultation Support" },
];

export default function AboutSection() {
  const [statsInView, setStatsInView] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsInView(true); obs1.disconnect(); } },
      { threshold: 0.3 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSectionInView(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) obs1.observe(statsRef.current);
    if (sectionRef.current) obs2.observe(sectionRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#fef8f9] via-white to-[#fff5f6] py-10 md:py-28 overflow-hidden font-['Inter',sans-serif]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d7193f]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
          {/* LEFT COLUMN */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
              style={{
                opacity: sectionInView ? 1 : 0,
                transform: sectionInView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/bb/19/dc/bb19dc3b56d00260b01578863be70788.jpg"
                alt="Dubai skyline — EzzyBiz"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0f1a]/20 via-[#d7193f]/10 to-[#0f0f1a]/60" />
              
              {/* Image Label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d7193f] to-[#b81236] flex items-center justify-center text-white text-xl">
                  <RiBuildingLine />
                </div>
                <div className="text-white">
                  <span className="text-[10px] tracking-wider uppercase opacity-70 block">Headquartered in</span>
                  <strong className="text-sm font-semibold">Dubai, UAE</strong>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div
              ref={statsRef}
              className="absolute -bottom-8 -right-4 lg:-right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 grid grid-cols-2 gap-5 min-w-[280px] lg:min-w-[340px] z-10"
            >
              {stats.map((s, i) => (
                <StatItem key={i} value={s.value} label={s.label} index={i} inView={statsInView} />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="pt-0 lg:pt-4">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-[#d7193f]/5 backdrop-blur-sm border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-6 transition-all duration-600 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#d7193f]">About EzzyBiz</span>
            </div>

            {/* Heading */}
            <h2
              className={`font-sans text-[clamp(32px,4vw,48px)] font-bold text-[#0f0f1a] leading-[1.2] mb-6 transition-all duration-700 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Trusted Business Setup &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">Corporate Service</span>{" "}
              Provider In Dubai
            </h2>

            {/* Description */}
            <p
              className={`text-[15px] text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.3s", fontFamily: "'Mont', sans-serif", fontWeight: 800 }}
            >
              EzzyBiz is a professional corporate consultancy firm helping entrepreneurs, startups, and international 
              investors establish and grow their businesses across the UAE. With deep industry knowledge and a 
              client-focused approach, we simplify every step of your business journey.
            </p>

            {/* Highlights Grid */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 transition-all duration-700 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.45s" }}
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#d7193f]/20 hover:-translate-y-0.5 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d7193f]/10 to-[#d7193f]/5 flex items-center justify-center text-[#d7193f] text-base">
                    {h.icon}
                  </div>
                  <span className="text-[12.5px] font-medium text-gray-700">{h.text}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div
              className={`grid sm:grid-cols-2 gap-4 mb-10 transition-all duration-700 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.55s" }}
            >
              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] border border-[#d7193f]/10 transition-all duration-300 hover:border-[#d7193f]/30 hover:-translate-y-1 group">
                <div className="flex items-center gap-2 mb-3">
                  <HiOutlineGlobeAlt className="text-[#d7193f] text-lg" />
                  <h3 className="font-bold text-[#d7193f] text-base">Our Vision</h3>
                </div>
                <p className="text-[12.5px] text-gray-400 leading-relaxed">
                  To become a trusted corporate partner for entrepreneurs and global businesses by delivering 
                  professional, transparent, and growth-driven business solutions across the UAE.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] border border-[#d7193f]/10 transition-all duration-300 hover:border-[#d7193f]/30 hover:-translate-y-1 group">
                <div className="flex items-center gap-2 mb-3">
                  <TbShieldCheck className="text-[#d7193f] text-lg" />
                  <h3 className="font-bold text-[#d7193f] text-base">Our Mission</h3>
                </div>
                <p className="text-[12.5px] text-gray-400 leading-relaxed">
                  Simplifying business setup and corporate compliance in Dubai through expert consultation, 
                  efficient processes, and reliable end-to-end support for every client.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.65s" }}
            >
              <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105">
                Start Your Company
                <LuArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md">
                <LuMessageCircle size={14} />
                Talk To Our Experts
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}