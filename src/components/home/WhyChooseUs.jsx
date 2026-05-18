import { useState, useEffect, useRef } from "react";
import {
  LuShieldCheck as ShieldCheck,
  LuZap as Zap,
  LuBadgeCheck as BadgeCheck,
  LuBuilding2 as Building2,
  LuHeadphones as Headphones,
  LuGlobe as Globe,
  LuArrowRight as ArrowRight,
  LuMessageCircle as MessageCircle,
} from "react-icons/lu";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Expert Business Consultants",
    description:
      "Our experienced corporate advisors provide strategic guidance for mainland, free zone, and offshore company formation across the UAE.",
  },
  {
    icon: Zap,
    title: "Fast & Hassle-Free Process",
    description:
      "We simplify documentation, approvals, and licensing procedures to ensure a smooth and efficient business setup experience.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Clear business setup packages with no hidden costs, giving you complete confidence and financial transparency from start to finish.",
  },
  {
    icon: Building2,
    title: "Complete Corporate Solutions",
    description:
      "From trade licenses and visas to VAT registration and PRO services, we provide complete end-to-end business support under one roof.",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    description:
      "Our professional support team stays connected throughout the process to ensure timely updates and seamless communication.",
  },
  {
    icon: Globe,
    title: "Trusted UAE Network",
    description:
      "Strong relationships with UAE authorities, free zones, and financial institutions help us deliver reliable corporate solutions efficiently.",
  },
];

const STATS = [
  { number: "500+", label: "Businesses Successfully Setup" },
  { number: "10+", label: "Years Of Industry Experience" },
  { number: "100%", label: "Client-Focused Solutions" },
  { number: "24/7", label: "Professional Consultation Support" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isNumeric = /^\d+/.test(target);
    if (!isNumeric) {
      setCount(target);
      return;
    }
    const end = parseInt(target);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ number, label, index, visible }) {
  const count = useCountUp(number, 1600, visible);
  return (
    <div
      className="relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#d7193f] hover:shadow-[0_8px_32px_rgba(215,25,63,0.12)] group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[#d7193f]" />
      <div
        className="font-bold leading-none mb-2 text-white"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(30px, 3.5vw, 44px)",
        }}
      >
        {count}
      </div>
      <div
        className="text-[12.5px] tracking-[0.05em] font-medium"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <div
      className="group flex flex-col h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#d7193f] hover:shadow-[0_8px_32px_rgba(215,25,63,0.1)]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Top Row: Icon and Title */}
      <div className="flex items-center gap-4 mb-3.5">
        <div
          className="shrink-0 w-[46px] h-[46px] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-[#d7193f] group-hover:shadow-[0_6px_20px_rgba(215,25,63,0.3)]"
          style={{ background: "rgba(215,25,63,0.1)" }}
        >
          <Icon
            size={22}
            className="text-[#d7193f] transition-colors duration-300 group-hover:text-white"
            strokeWidth={1.6}
          />
        </div>
        <h4
          className="text-white font-bold text-[16px] leading-[1.3] group-hover:text-[#e8718a] transition-colors duration-200"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {title}
        </h4>
      </div>

      {/* Description */}
      <p
        className="text-[13.5px] leading-[1.8]"
        style={{
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nunito+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: "#0a0a0a",
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Red ambient glow top-left */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(215,25,63,0.07), transparent 65%)",
          }}
        />
        {/* Red ambient glow bottom-right */}
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(215,25,63,0.06), transparent 65%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
          {/* ── TWO-COLUMN LAYOUT ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-stretch">
            {/* ─── LEFT COLUMN ─── */}
            <div className="flex flex-col h-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#d7193f]" />
                <span className="text-[#d7193f] text-[11.5px] font-bold tracking-[3.5px] uppercase">
                  Why Choose Us
                </span>
                <span className="h-px w-8 bg-[#d7193f]" />
              </div>

              {/* Heading */}
              <h2
                className="text-white font-bold leading-[1.15] mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(30px, 4vw, 48px)",
                }}
              >
                Why Choose{" "}
                <span className="italic text-[#d7193f]">EzzyBiz</span>
                <br />
                For Business Setup In Dubai
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-2 mb-5">
                <span className="h-[2px] w-10 bg-[#d7193f] rounded-full" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#d7193f]" />
                <span className="h-[2px] w-10 bg-[#d7193f] rounded-full" />
              </div>

              {/* Description */}
              <p
                className="text-[15px] leading-[1.9] mb-10"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                EzzyBiz delivers reliable and professional corporate solutions
                for entrepreneurs, startups, and international investors looking
                to establish their presence in the UAE. Our expert consultants
                simplify every stage of the business setup process with
                transparent guidance, fast approvals, and end-to-end support.
              </p>

              {/* Feature Cards Grid (First 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {FEATURES.slice(0, 4).map((feature, idx) => (
                  <FeatureCard key={idx} {...feature} index={idx} />
                ))}
              </div>
            </div>

            {/* ─── RIGHT COLUMN ─── */}
            <div ref={statsRef} className="flex flex-col gap-6 lg:pt-14 h-full">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => (
                  <StatCard
                    key={idx}
                    {...stat}
                    index={idx}
                    visible={statsVisible}
                  />
                ))}
              </div>

              {/* Highlight Card */}
              <div
                className="relative rounded-xl p-8 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(215,25,63,0.12), rgba(215,25,63,0.04))",
                  border: "1px solid rgba(215,25,63,0.2)",
                }}
              >
                {/* Glow */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(215,25,63,0.15), transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  {/* Quote mark */}
                  <div
                    className="text-[72px] leading-none text-[#d7193f] mb-2 opacity-30 select-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    "
                  </div>
                  <p
                    className="text-white text-[16px] leading-[1.85] mb-6 font-medium"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(15px, 1.4vw, 18px)",
                    }}
                  >
                    Helping entrepreneurs and global investors establish
                    successful businesses in Dubai with confidence and
                    compliance.
                  </p>

                  {/* CTA Button */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-[10px] h-[52px] px-7 bg-[#d7193f] text-white font-bold text-[13px] tracking-[0.07em] uppercase rounded-sm no-underline transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#b8162f] hover:shadow-[0_10px_32px_rgba(215,25,63,0.38)]"
                  >
                    <MessageCircle size={15} />
                    Book Free Consultation
                  </a>
                </div>
              </div>

              {/* Feature Cards Grid (Last 2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {FEATURES.slice(4, 6).map((feature, idx) => (
                  <FeatureCard key={idx + 4} {...feature} index={idx + 4} />
                ))}
              </div>

              {/* Trust bar */}
              {/* <div
                className="flex items-center gap-4 px-6 py-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex -space-x-2 shrink-0">
                  {["#c4a882", "#b8956e", "#d4b896", "#c8a87a"].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: c }}
                    >
                      {["A","B","M","S"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#d7193f"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Trusted by <span className="text-white font-semibold">500+ businesses</span> across UAE
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
