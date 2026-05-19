import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LuChevronRight as ChevronRight } from "react-icons/lu";

export default function PrivacyPolicy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: "This Privacy Policy explains how EzzyBiz collects, uses, stores, and protects information provided by visitors, clients, and users of our website and corporate services. By accessing our website, you agree to the practices described in this policy."
    },
    {
      title: "2. Information We Collect",
      content: "We may collect personal and business information including name, email address, phone number, company details, business requirements, and documents submitted through contact forms, consultations, or service inquiries."
    },
    {
      title: "3. How We Use Your Information",
      content: "The information collected may be used to provide consultation services, respond to inquiries, process business setup requests, improve website functionality, communicate with clients, and maintain compliance with UAE corporate service requirements."
    },
    {
      title: "4. Data Protection & Security",
      content: "EzzyBiz takes appropriate security measures to protect personal and business information against unauthorized access, misuse, disclosure, or loss. We maintain confidentiality and professional handling of all client data."
    },
    {
      title: "5. Cookies Policy",
      content: "Our website may use cookies and analytics tools to improve browsing experience, monitor website performance, and understand visitor interactions. Users can manage browser cookie settings according to their preferences."
    },
    {
      title: "6. Third-Party Disclosure",
      content: "EzzyBiz does not sell or share personal information with unauthorized third parties. Information may only be shared when required for official business processing, legal compliance, or UAE government procedures related to requested services."
    },
    {
      title: "7. User Rights",
      content: "Users may request updates, corrections, or removal of personal information where applicable, subject to legal and regulatory requirements."
    },
    {
      title: "8. Policy Updates",
      content: "EzzyBiz reserves the right to update or modify this Privacy Policy at any time to reflect business, legal, or operational changes. Updated versions will be published on this page."
    },
    {
      title: "9. Contact Information",
      content: "For questions regarding this Privacy Policy or our data practices, please contact EzzyBiz through our official contact channels available on the website."
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
              <span className="text-[#d7193f] font-medium">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#d7193f]">LEGAL INFORMATION</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            EzzyBiz is committed to protecting your privacy and maintaining the security of your personal and business information while using our website and corporate services.
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
              Contact Legal Team <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
