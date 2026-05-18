import { useEffect, useRef, useState } from "react";
import {
  LuMessageCircle as MessageCircle,
  LuArrowRight as ArrowRight,
  LuHeadphones as Headphones,
  LuBuilding2 as Building2,
  LuFileText as FileText,
  LuBadgeCheck as BadgeCheck,
  LuRocket as Rocket,
  // LuCheckCircle2 as CheckCircle2,
} from "react-icons/lu";

const STEPS = [
  {
    number: "01",
    icon: Headphones,
    title: "Free Consultation",
    description:
      "Discuss your business goals with our expert consultants and get the right guidance for mainland, free zone, or offshore company setup in Dubai.",
    tag: "Start Here",
  },
  {
    number: "02",
    icon: Building2,
    title: "Choose Business Activity",
    description:
      "Select the ideal business activity, license type, and jurisdiction based on your business model and future growth plans.",
    tag: "Strategy",
  },
  {
    number: "03",
    icon: FileText,
    title: "Documentation & Approval",
    description:
      "Our team handles all legal documentation, government approvals, and registration procedures for a smooth company formation process.",
    tag: "Legal",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "License & Visa Processing",
    description:
      "Receive your trade license and complete investor or employee visa processing with professional UAE compliance support.",
    tag: "Compliance",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch Your Business",
    description:
      "Start operating your business in Dubai with complete corporate assistance including banking, PRO services, and tax support.",
    tag: "Go Live",
  },
];

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize options to prevent observer thrashing on every render
  const optionsStr = JSON.stringify(options);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...JSON.parse(optionsStr) });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [optionsStr]);

  return [ref, isVisible];
}

function StepCard({ step, index, isEven }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col md:flex-row md:items-start md:gap-0 mb-6 md:mb-8 transition-all duration-[700ms] ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isEven ? "md:flex-row-reverse" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Spacer for desktop alternating layout */}
      <div className="hidden md:block md:w-[calc(50%-28px)]" />

      {/* Node */}
      <div className="flex justify-start md:justify-center w-[48px] md:w-[56px] pt-4 md:pt-5 relative z-10 shrink-0">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#d7193f] to-[#b81236] shadow-lg shadow-[#d7193f]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#d7193f]/30">
          <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse group-hover:animate-none" />
          <span className="font-bold text-white text-sm md:text-base leading-none z-10 font-['Inter',sans-serif] tracking-wide">
            {step.number}
          </span>
        </div>
        {/* Connection line */}
        {index < STEPS.length - 1 && (
          <div className="absolute left-[24px] md:left-1/2 top-[40px] md:top-[48px] w-[calc(100%-24px)] md:w-[calc(50%-28px)] h-[2px] bg-gradient-to-r from-[#d7193f]/30 to-transparent md:via-[#d7193f]/20 md:to-transparent hidden md:block" />
        )}
      </div>

      {/* Card */}
      <div className="w-full md:w-[calc(50%-28px)] pl-[52px] md:pl-0 -mt-8 md:mt-0">
        <div
          className={`relative bg-white rounded-xl overflow-hidden border border-[#d7193f]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#d7193f]/10 hover:border-[#d7193f] group-hover:shadow-2xl ${
            isEven 
              ? "border-l-2 border-l-[#d7193f] md:border-l-[1px] md:border-l-[#d7193f]/40 md:border-r-2 md:border-r-[#d7193f]" 
              : "border-l-2 border-l-[#d7193f]"
          }`}
        >
          <div className={`p-4 md:p-5 flex flex-col gap-2 ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
            {/* Tag */}
            <div className="flex items-center gap-2 mb-1">
              <div className={`w-6 h-[1px] bg-[#d7193f]/40 ${isEven ? "md:order-2 md:ml-2" : "md:mr-2"}`} />
              <span className="text-[9px] font-semibold tracking-[1.5px] uppercase text-[#d7193f] bg-[#d7193f]/5 px-2 py-0.5 rounded-full">
                {step.tag}
              </span>
              <div className={`w-6 h-[1px] bg-[#d7193f]/40 ${isEven ? "md:order-1 md:mr-2 md:block hidden" : "md:hidden"}`} />
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d7193f]/10 to-[#d7193f]/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d7193f]/15">
                <Icon size={16} strokeWidth={1.5} className="text-[#d7193f]" />
              </div>
              <div className={`flex-1 ${isEven ? "md:items-end" : ""}`}>
                <h3 className="font-['Inter',sans-serif] text-base md:text-lg font-bold text-[#0f0f1a] mb-1 transition-colors duration-200 group-hover:text-[#d7193f]">
                  {step.title}
                </h3>
                <p className="text-[12px] md:text-[13px] leading-relaxed text-[#6b7280] font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative accent */}
          <div className={`absolute top-0 w-1 h-full bg-gradient-to-b from-[#d7193f] to-[#e8718a] transition-all duration-300 group-hover:w-1.5 ${
            isEven ? "right-0" : "left-0"
          }`} />
        </div>
      </div>
    </div>
  );
}

export default function BusinessSetupProcess() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.1 });
  const timelineRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      // Use requestAnimationFrame for the DOM read to prevent layout thrashing
      requestAnimationFrame(() => {
        if (!timelineRef.current) return;
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on the middle of the screen
        const startPos = windowHeight * 0.5;
        const scrolled = startPos - rect.top;
        let progress = scrolled / rect.height;
        
        // Clamp between 0 and 1
        targetProgress = Math.max(0, Math.min(1, progress));
      });
    };

    const renderLoop = () => {
      // Lerp (Linear Interpolation) for buttery smooth momentum
      currentProgress += (targetProgress - currentProgress) * 0.08;
      
      if (timelineRef.current) {
        // Only update DOM if the change is noticeable
        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          timelineRef.current.style.setProperty('--scroll-progress', `${currentProgress * 100}%`);
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init target
    currentProgress = targetProgress; // Snap to initial position immediately
    renderLoop();   // Start loop
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#fef8f9] via-white to-[#fff5f6] font-['Inter',sans-serif] py-16 md:py-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Static gradient orbs instead of animated to prevent repaint lag on scroll */}
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/5 rounded-full blur-[80px] transform-gpu" />
        <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/5 rounded-full blur-[100px] transform-gpu" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d7193f]/20 to-transparent" />
      </div>

      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        {/* Header - More Compact */}
        <div 
          ref={headerRef} 
          className={`text-center mb-12 md:mb-16 transition-all duration-[600ms] ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 backdrop-blur-sm border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-4">
            {/* <CheckCircle2 size={12} className="text-[#d7193f]" /> */}
            <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">Streamlined Process</span>
          </div>
          
          <h2 className="font-['Playfair_Display',serif] text-[clamp(28px,4vw,44px)] font-bold text-[#0f0f1a] leading-[1.2] mb-3">
            Simple & Fast Business
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]"> Setup Process</span>
            <br />
            in Dubai
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#d7193f]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d7193f]" />
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#d7193f] to-transparent" />
          </div>
          
          <p className="text-[13px] md:text-[14px] leading-relaxed text-[#6b7280] font-normal max-w-[540px] mx-auto">
            Professional guidance, transparent procedures, and end-to-end corporate support
            <br className="hidden sm:block" />
            for entrepreneurs and global investors.
          </p>
        </div>

        {/* Timeline - More Compact */}
        <div ref={timelineRef} className="relative max-w-[980px] mx-auto">
          {/* Vertical Spine - Background */}
          <div className="absolute left-[24px] md:left-1/2 top-8 bottom-8 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-[#d7193f]/20 via-[#d7193f]/10 to-transparent rounded-full" aria-hidden="true">
            {/* Active Filled Spine */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-[#d7193f] to-[#e8718a] rounded-full z-10 will-change-auto"
              style={{ height: 'var(--scroll-progress, 0%)' }}
            />
            {/* Scroll Indicator Dot - Hardware Accelerated & Smoothed via JS Lerp */}
            <div 
              className="absolute left-1/2 w-[12px] h-[32px] rounded-full bg-gradient-to-b from-[#d7193f] to-[#e8718a] shadow-[0_0_16px_rgba(215,25,63,0.9)] z-20 will-change-auto"
              style={{ 
                top: 'var(--scroll-progress, 0%)',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          
          {STEPS.map((step, idx) => (
            <StepCard
              key={idx}
              step={step}
              index={idx}
              isEven={idx % 2 === 0}
            />
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        {/* <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#d7193f]/10">
          <div className="bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] rounded-xl p-5 md:p-6 relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-[#d7193f]/10 to-transparent" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d7193f]/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-white text-lg md:text-xl font-bold font-['Playfair_Display',serif] mb-1">
                  Ready to <span className="text-[#e8718a]">Launch</span> Your Business?
                </h4>
                <p className="text-white/60 text-xs md:text-sm">
                  Get a free consultation and tailored quote for your UAE company setup.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="group flex items-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105">
                  Start Now 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 border border-white/20 text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                  <MessageCircle size={14} />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}