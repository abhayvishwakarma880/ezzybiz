import { useState, useEffect, useRef } from "react";
import { RiBuildingLine } from "react-icons/ri";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { TbShieldCheck } from "react-icons/tb";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";

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
      className="stat-item"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.12}s`,
      }}
    >
      <span className="stat-value">{animated || value}</span>
      <span className="stat-label">{label}</span>
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim: rgba(201,168,76,0.15);
          --red: #C0392B;
          --black: #0A0A0A;
          --off-white: #F7F5F0;
          --gray-text: #6B6B6B;
          --border: rgba(201,168,76,0.2);
        }

        .about-section {
          font-family: 'DM Sans', sans-serif;
          background: #F9F8F5;
          padding: 100px 0;
          overflow: hidden;
          position: relative;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,168,76,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-container {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── GRID ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── LEFT ── */
        .left-col { position: relative; }

        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4/5;
          background: linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
          box-shadow: 0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px var(--border);
        }

        .image-wrapper img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          mix-blend-mode: luminosity;
          opacity: 0.85;
        }

        .image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            160deg,
            rgba(10,10,10,0.15) 0%,
            rgba(201,168,76,0.08) 50%,
            rgba(10,10,10,0.55) 100%
          );
        }

        .image-label {
          position: absolute;
          bottom: 28px; left: 28px;
          display: flex; align-items: center; gap: 10px;
        }
        .image-label-icon {
          width: 42px; height: 42px;
          background: var(--gold);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #000; font-size: 20px;
          flex-shrink: 0;
        }
        .image-label-text { color: #fff; }
        .image-label-text span { display: block; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.7; }
        .image-label-text strong { font-size: 15px; font-weight: 600; }

        /* floating stats card */
        .stats-card {
          position: absolute;
          bottom: -36px;
          right: -32px;
          background: #0A0A0A;
          border: 1px solid rgba(192,57,43,0.25);
          border-radius: 20px;
          padding: 28px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 32px;
          min-width: 300px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
          z-index: 10;
        }

        .stat-item { display: flex; flex-direction: column; gap: 4px; }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 30px;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }
        .stat-label {
          font-size: 10.5px;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        /* ── RIGHT ── */
        .right-col { padding-top: 10px; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--gold-dim);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 6px 16px 6px 10px;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s;
        }
        .section-badge.visible { opacity: 1; transform: translateY(0); }
        .badge-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        .badge-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .main-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 3.5vw, 50px);
          font-weight: 700;
          color: var(--black);
          line-height: 1.15;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(16px);
          transition: all 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s;
        }
        .main-heading.visible { opacity: 1; transform: translateY(0); }
        .heading-accent { color: var(--red); }

        .main-desc {
          font-size: 15.5px;
          color: var(--gray-text);
          line-height: 1.8;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s;
        }
        .main-desc.visible { opacity: 1; transform: translateY(0); }

        /* highlights */
        .highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 28px 0 32px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s;
        }
        .highlights.visible { opacity: 1; transform: translateY(0); }

        .highlight-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .highlight-item:hover {
          border-color: var(--gold);
          background: var(--gold-dim);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.1);
        }
        .highlight-icon {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #000; font-size: 15px;
          flex-shrink: 0;
        }
        .highlight-text {
          font-size: 12.5px;
          font-weight: 500;
          color: #2a2a2a;
          line-height: 1.35;
        }

        /* vision/mission */
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }
        .vm-grid.visible { opacity: 1; transform: translateY(0); }

        .vm-card {
          padding: 22px 20px;
          border-radius: 16px;
          background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
          border: 1px solid rgba(201,168,76,0.15);
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .vm-card:hover {
          border-color: rgba(201,168,76,0.4);
          transform: translateY(-3px);
        }
        .vm-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .vm-card:hover::before { opacity: 1; }

        .vm-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .vm-icon { font-size: 16px; opacity: 0.8; }
        .vm-desc {
          font-size: 12.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
        }

        /* CTA */
        .cta-block {
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.7s cubic-bezier(0.22,1,0.36,1) 0.65s;
        }
        .cta-block.visible { opacity: 1; transform: translateY(0); }

        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 10px;
        }
        .cta-desc {
          font-size: 13.5px;
          color: var(--gray-text);
          line-height: 1.7;
          margin-bottom: 24px;
          max-width: 480px;
        }
        .cta-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--red), #922B21);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(192,57,43,0.3);
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(192,57,43,0.45);
          background: linear-gradient(135deg, #d63e2e, #a93226);
        }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: var(--black);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: 1.5px solid rgba(0,0,0,0.18);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-secondary:hover {
          border-color: var(--gold);
          color: #8a5e00;
          background: var(--gold-dim);
          transform: translateY(-2px);
        }

        .btn-arrow { font-size: 16px; transition: transform 0.3s ease; }
        .btn-primary:hover .btn-arrow,
        .btn-secondary:hover .btn-arrow { transform: translateX(3px); }

        /* ── BOTTOM STRIP ── */
        .bottom-strip {
          margin-top: 100px;
          background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%);
          border-radius: 24px;
          border: 1px solid rgba(201,168,76,0.15);
          padding: 60px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .bottom-strip::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%);
          pointer-events: none;
        }

        .strip-badge {
          display: inline-flex; align-items: center; gap: 6px;
          margin-bottom: 14px;
        }
        .strip-badge-line {
          width: 24px; height: 1px;
          background: var(--gold);
        }
        .strip-badge-text {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
        }

        .strip-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 2.5vw, 36px);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .strip-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          max-width: 520px;
        }

        .strip-buttons { display: flex; flex-direction: column; gap: 12px; min-width: 200px; }

        .btn-gold {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: #000;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(201,168,76,0.25);
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.4);
        }

        .btn-ghost {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 28px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-ghost:hover {
          border-color: rgba(201,168,76,0.4);
          color: var(--gold);
          background: rgba(201,168,76,0.05);
          transform: translateY(-2px);
        }

        /* responsive */
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 60px; }
          .left-col { display: none; }
          .stats-card { position: static; margin-top: 20px; }
          .bottom-strip { grid-template-columns: 1fr; }
          .strip-buttons { flex-direction: row; }
        }
        @media (max-width: 640px) {
          .about-container { padding: 0 20px; }
          .highlights { grid-template-columns: 1fr; }
          .vm-grid { grid-template-columns: 1fr; }
          .bottom-strip { padding: 36px 28px; }
          .strip-buttons { flex-direction: column; }
        }
      `}</style>

      <section className="about-section" ref={sectionRef}>
        <div className="about-container">

          {/* ── MAIN GRID ── */}
          <div className="about-grid">

            {/* LEFT */}
            <div className="left-col">
              <div
                className="image-wrapper"
                style={{
                  opacity: sectionInView ? 1 : 0,
                  transform: sectionInView ? "translateX(0)" : "translateX(-30px)",
                  transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
                  alt="Dubai skyline — EzzyBiz"
                />
                <div className="image-overlay" />
                <div className="image-label">
                  <div className="image-label-icon">
                    <RiBuildingLine />
                  </div>
                  <div className="image-label-text">
                    <span>Headquartered in</span>
                    <strong>Dubai, UAE</strong>
                  </div>
                </div>
              </div>

              {/* floating stats card */}
              <div className="stats-card" ref={statsRef}>
                {stats.map((s, i) => (
                  <StatItem key={i} value={s.value} label={s.label} index={i} inView={statsInView} />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="right-col">

              <div className={`section-badge ${sectionInView ? "visible" : ""}`}>
                <div className="badge-dot" />
                <span className="badge-text">About EzzyBiz</span>
              </div>

              <h2 className={`main-heading ${sectionInView ? "visible" : ""}`}>
                Trusted Business Setup &{" "}
                <span className="heading-accent">Corporate Service</span>{" "}
                Provider In Dubai
              </h2>

              <p className={`main-desc ${sectionInView ? "visible" : ""}`}>
                EzzyBiz is a professional corporate consultancy firm helping entrepreneurs, startups, and international investors establish and grow their businesses across the UAE. With deep industry knowledge and a client-focused approach, we simplify the entire business setup process with reliable guidance, transparent solutions, and end-to-end corporate support.
              </p>

              <p
                className="main-desc"
                style={{
                  opacity: sectionInView ? 1 : 0,
                  transform: sectionInView ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.38s",
                }}
              >
                From mainland and free zone company formation to VAT registration, PRO services, licensing, and compliance management, our experienced consultants ensure every stage of your business journey is handled smoothly and efficiently.
              </p>

              <div className={`highlights ${sectionInView ? "visible" : ""}`}>
                {highlights.map((h, i) => (
                  <div className="highlight-item" key={i}>
                    <div className="highlight-icon">{h.icon}</div>
                    <span className="highlight-text">{h.text}</span>
                  </div>
                ))}
              </div>

              {/* Vision / Mission */}
              <div className={`vm-grid ${sectionInView ? "visible" : ""}`}>
                <div className="vm-card">
                  <div className="vm-title">
                    <HiOutlineGlobeAlt className="vm-icon" />
                    Our Vision
                  </div>
                  <p className="vm-desc">
                    To become a trusted corporate partner for entrepreneurs and global businesses by delivering professional, transparent, and growth-driven business solutions across the UAE.
                  </p>
                </div>
                <div className="vm-card">
                  <div className="vm-title">
                    <TbShieldCheck className="vm-icon" />
                    Our Mission
                  </div>
                  <p className="vm-desc">
                    Simplifying business setup and corporate compliance in Dubai through expert consultation, efficient processes, and reliable end-to-end support for every client.
                  </p>
                </div>
              </div>

              {/* CTA */}
              {/* <div className={`cta-block ${sectionInView ? "visible" : ""}`}>
                <h3 className="cta-heading">Build Your Business In Dubai With Confidence</h3>
                <p className="cta-desc">
                  Partner with EzzyBiz and experience seamless company formation, corporate services, and business growth solutions tailored for the UAE market.
                </p>
                <div className="cta-buttons">
                  <a href="#" className="btn-primary">
                    Start Your Company
                    <span className="btn-arrow">→</span>
                  </a>
                  <a href="#" className="btn-secondary">
                    Talk To Our Experts
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div> */}

            </div>
          </div>

          {/* ── BOTTOM STRIP ── */}
          <div className="bottom-strip">
            <div>
              <div className="strip-badge">
                <div className="strip-badge-line" />
                <span className="strip-badge-text">Get Started Today</span>
              </div>
              <h2 className="strip-heading">
                Build Your Business In Dubai<br />With Confidence
              </h2>
              <p className="strip-desc">
                Partner with EzzyBiz and experience seamless company formation, corporate services, and business growth solutions tailored for the UAE market.
              </p>
            </div>
            <div className="strip-buttons">
              <a href="#" className="btn-gold">
                <RiBuildingLine style={{ fontSize: 18 }} />
                Start Your Company
              </a>
              <a href="#" className="btn-ghost">
                <FaHandshake style={{ fontSize: 16 }} />
                Talk To Our Experts
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}