import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes widthIn {
          from { width: 0; }
          to   { width: 56px; }
        }

        .hero-video {
          animation: kenBurns 8s ease-out forwards;
        }
        .hero-badge   { animation: fadeUp 0.7s ease forwards 0.3s; opacity: 0; }
        .hero-divider { animation: widthIn 0.6s ease forwards 0.7s; width: 0; }
        .hero-h1      { animation: fadeUp 0.8s ease forwards 0.8s; opacity: 0; }
        .hero-p       { animation: fadeUp 0.8s ease forwards 1.1s; opacity: 0; }
        .hero-btns    { animation: fadeUp 0.8s ease forwards 1.35s; opacity: 0; }
        .hero-scroll  { animation: fadeIn 1s ease forwards 1.8s; opacity: 0; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .btn-primary:hover::before { transform: translateX(0); }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(215,25,63,0.38);
        }

        .btn-outline {
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .btn-outline:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.6) !important;
        }

        .scroll-dot {
          animation: scrollBounce 1.6s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }

        .stat-item {
          animation: fadeUp 0.7s ease forwards;
          opacity: 0;
        }
        .stat-item:nth-child(1) { animation-delay: 1.6s; }
        .stat-item:nth-child(2) { animation-delay: 1.75s; }
        .stat-item:nth-child(3) { animation-delay: 1.9s; }
      `}</style>

      <section className="relative h-[calc(100vh-112px)] w-full overflow-hidden flex flex-col justify-between font-sans pt-8 md:pt-12 pb-6 md:pb-10">
        {/* ── BACKGROUND VIDEO ── */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover z-[-2]"
        >
          <source src="/dubai.mp4" type="video/mp4" />
          {/* Fallback poster */}
        </video>

        {/* ── DARK OVERLAY (cinematic gradient) ── */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.28) 60%)",
          }}
        />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 z-[-1] opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
          }}
        />

        {/* ── HERO CONTENT ── */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-16 mt-2 md:mt-0">
          <div className="max-w-[680px]">

            {/* Badge */}
            {/* <div className="hero-badge flex items-center gap-3 mb-6">
              <span
                className="text-[#d7193f] text-[12px] font-bold tracking-[3px] uppercase"
              >
                Dubai Corporate Business Solutions
              </span>
            </div> */}

            {/* Red divider line */}
            {/* <div
              className="hero-divider h-[3px] bg-[#d7193f] mb-7 rounded-full"
            /> */}

            {/* Main Heading */}
            <h1
              className="hero-h1 text-white font-bold leading-[1.1] mb-6 font-serif"
              style={{
                fontSize: "clamp(42px, 6vw, 76px)",
              }}
            >
              Start Your Business
              <br />
              <span
                className="italic"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Journey In Dubai
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className="hero-p text-[18px] leading-[1.8] mb-9"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Business setup, company formation, VAT, compliance and
              corporate services for entrepreneurs and global investors.
            </p>

            {/* ── STATS BAR ── */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-9">
              {[
                { number: "1500+", label: "Companies Formed" },
                { number: "12+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
              ].map(({ number, label }) => (
                <div key={label} className="stat-item flex flex-col">
                  <span
                    className="text-white font-bold leading-none mb-1 font-serif"
                    style={{
                      fontSize: "clamp(26px, 3vw, 38px)",
                    }}
                  >
                    {number}
                  </span>
                  <span
                    className="text-[12px] tracking-[1.5px] uppercase font-semibold"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="hero-btns flex flex-wrap gap-4">
              <button
                className="btn-primary flex items-center gap-[10px] h-[58px] px-8 bg-[#d7193f] text-white font-bold text-[14px] tracking-[0.07em] uppercase rounded-sm cursor-pointer border-none"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Get Free Consultation
              </button>

              <button
                className="btn-outline flex items-center gap-[10px] h-[58px] px-8 bg-transparent text-white font-semibold text-[14px] tracking-[0.07em] uppercase rounded-sm cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.28)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Explore Services
              </button>
            </div>

          </div>
        </div>



        {/* ── SCROLL INDICATOR ── */}
        <div className="hero-scroll absolute right-8 bottom-10 z-10 flex flex-col items-center gap-2">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-semibold"
            style={{
              color: "rgba(255,255,255,0.4)",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Scroll
          </span>
          <div
            className="w-[1px] h-12 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <div
              className="scroll-dot absolute top-0 left-0 w-full bg-[#d7193f]"
              style={{ height: "40%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}