import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <style>{`
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

        .hero-img {
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
      `}</style> */}

      <section className="relative h-56 md:h-[calc(100vh-112px)] w-full overflow-hidden flex flex-col justify-end md:justify-center font-sans pt-8 md:pt-12 pb-6 md:pb-10">
        {/* ── BACKGROUND IMAGE ── */}
        <img
          src="/baner.png"
          alt="Hero Banner"
          className="hero-img absolute inset-0 w-full h-full object-cover md:object-fill object-center z-[-2]"
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
        <div className="relative z-10 h-18 md:h-24 md:w-full max-w-7xl md:mx-auto px-2 sm:px-6 md:px-16 mt-10 md:-mt-20">
          <div className="max-w-[200px] md:max-w-170 -mt-25 md:-mt-35">
            {/* Badge */}
            <div className="flex items-center gap-3 mb-0">
              <span
                className="text-[#d7193f] text-[6px] md:text-[12px] font-bold tracking-[3px] uppercase"
              >
                your trusted partner for
              </span>
            </div>
          
            {/* Red divider line */}
            {/* <div
              className="hero-divider h-[3px] bg-[#d7193f] mb-7 rounded-full"
            /> */}

            {/* Main Heading */}
            <h1
              className="text-white font-bold  leading-[1] md:leading-[1.1] mb-2 font-serif"
              style={{
                // fontSize: "clamp(34px, 9vw, 76px)",
                fontSize: "clamp(14px, 6vw, 76px)",
              }}
            >
              Business Setup
              <br />
              <span
                className=""
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                In <span className="text-[#D60922]">Dubai</span>
              </span>
            </h1>
            {/* Red divider line */}
            <div
              className="hero-divider h-[3px] bg-[#D60922] -mt-2 mb-2 w-10 md:w-28 rounded-full"
            />

            {/* Paragraph */}
            <p
              className="hero-p text-[8px] md:text-[18px] leading-[1.5] md:leading-[1.8] mb-2"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Company Setup, Mainland & Free Zone, Visa Services, <br /> VAT, Ejari & Banking Assistance - <br />
              <span className="text-[#D60922]">All Corporate Services Under One Roof.</span> 
            </p>

            {/* Buttons */}
            <div className="flex sm:flex-row gap-2 md:gap-4 sm:full sm:w-auto">
              <Link
                to="/contact"
                className="btn-primary flex items-center justify-center gap-[5px] h-[20px] md:h-[58px] px-2 md:px-8 bg-[#D60922] text-white font-bold text-[5px] md:text-[15px] tracking-[0.07em] uppercase rounded-sm cursor-pointer border-none no-underline"
              >
                <HiOutlineChatBubbleLeftRight className="text-[7px] md:text-xl" />
                Get Free Consultation
              </Link>

              <Link
                to="/vat"
                className="btn-outline flex items-center gap-[5px] h-[20px] md:h-[58px] px-2   md:px-8 bg-black text-white font-semibold text-[5px] md:text-[15px] tracking-[0.07em] uppercase rounded-sm cursor-pointer border-1 border-white"
                // style={{ border: "1px solid rgba(255,255,255,0.9)" }}
              >
                < FaWhatsapp className="h-5" />
                WhatsApp Now
              </Link>
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
