import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LuChevronRight as ChevronRight } from "react-icons/lu";

export default function TermsConditions() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the EzzyBiz website and our corporate services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website and services."
    },
    {
      title: "2. Provision of Services",
      content: "EzzyBiz provides professional business setup, company formation, visa assistance, VAT services, and banking support in the UAE. All services are subject to regulatory approvals, government fees, and complete client documentation."
    },
    {
      title: "3. Client Obligations",
      content: "Clients must provide accurate, complete, and updated information and documents necessary for company setup, visa processing, or legal procedures. EzzyBiz is not liable for delays caused by incorrect or missing client information."
    },
    {
      title: "4. Fees & Payments",
      content: "All fees for corporate services, licensing, government processing, and consultation must be paid in accordance with the agreed service agreement. Fees are non-refundable once government or processing steps have commenced."
    },
    {
      title: "5. Limitation of Liability",
      content: "While EzzyBiz strives to provide accurate advice and professional support, we are not responsible for delays, rejections, or policy updates by UAE government authorities, free zone offices, or financial institutions."
    },
    {
      title: "6. Intellectual Property",
      content: "All content, designs, logos, text, and materials on the EzzyBiz website are the intellectual property of EzzyBiz. Unauthorized use, copying, or distribution is strictly prohibited."
    },
    {
      title: "7. Governing Law",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai."
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
              <span className="text-[#d7193f] font-medium">Terms & Conditions</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#d7193f]">LEGAL INFORMATION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Terms & Conditions
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our corporate business setup and consulting services in Dubai & UAE.
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
