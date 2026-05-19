import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LuChevronRight as ChevronRight } from "react-icons/lu";

export default function CookiePolicy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. What Are Cookies?",
      content: "Cookies are small text files stored on your computer or mobile device when you visit a website. They help the website recognize your device, remember preferences, and improve your overall browsing experience."
    },
    {
      title: "2. How We Use Cookies",
      content: "EzzyBiz uses cookies to analyze website traffic, remember user choices, customize marketing campaigns, and ensure our business setup and consultation tools function smoothly. We only use cookies that are necessary for operational and analytical purposes."
    },
    {
      title: "3. Types of Cookies We Use",
      content: "We use essential cookies (necessary to navigate the site), performance and analytics cookies (to understand how visitors interact with the site, e.g., Google Analytics), and marketing cookies (to deliver relevant advertisements and measure campaign effectiveness)."
    },
    {
      title: "4. Managing Cookie Preferences",
      content: "Most web browsers allow you to control cookie settings through browser preferences. You can choose to block or delete cookies, but doing so may limit your ability to use certain features on our website."
    },
    {
      title: "5. Third-Party Cookies",
      content: "Some cookies on our website are placed by third-party services, such as Google Analytics, Google Ads, or Meta Pixel. These third parties have their own privacy and cookie policies governing how they handle data."
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#fef8f9] via-white to-[#fff5f6] pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/3 rounded-full blur-3xl" />
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8 -mt-2">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Link
                to="/"
                className="hover:text-[#d7193f] transition-colors no-underline"
              >
                Home
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#d7193f] font-medium">Cookie Policy</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#d7193f]">LEGAL INFORMATION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Cookie Policy
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            This Cookie Policy explains how EzzyBiz uses cookies and similar tracking technologies to improve your experience on our platform.
          </p>
        </div>
      </section>

      {/* ========== CONTENT SECTION ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="group border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-[#d7193f] transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-8 text-[15px] md:text-[16px]">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Last Updated Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Last Updated: May 2026
            </span>
            <Link
              to="/contact"
              className="text-xs font-semibold text-[#d7193f] hover:text-[#b81236] transition-colors no-underline flex items-center gap-1 group"
            >
              Contact Support <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
