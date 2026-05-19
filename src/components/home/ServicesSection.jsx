import {
  FiBriefcase as BriefcaseBusiness,
  FiGlobe as Globe,
  FiFileText as FileCheck,
  FiShield as ShieldCheck,
  FiDollarSign as BadgeDollarSign,
  FiFile as ReceiptText,
  FiArrowRight as ArrowRight,
  FiMessageCircle as MessageCircle,
} from "react-icons/fi";
import {
  MdBusiness as Building2,
  MdAccountBalance as Landmark,
  MdPayments as Banknote,
} from "react-icons/md";

const SERVICES = [
  {
    icon: Building2,
    title: "Mainland Company Formation",
    description:
      "Start your mainland business in Dubai with complete support for trade licenses, approvals, legal documentation, and government registration. We simplify the entire setup process for fast business launch.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Free Zone Company Setup",
    description:
      "Launch your business in UAE free zones with tax-efficient solutions, 100% foreign ownership benefits, flexible office options, and streamlined company registration services.",
  },
  {
    icon: Globe,
    title: "Offshore Company Formation",
    description:
      "Establish offshore companies for international business operations, asset protection, and global expansion with secure and compliant corporate structuring solutions.",
  },
  {
    icon: FileCheck,
    title: "Business License Services",
    description:
      "Get expert assistance for obtaining, renewing, and modifying business licenses across mainland, free zone, and offshore jurisdictions in the UAE.",
  },
  {
    icon: ShieldCheck,
    title: "PRO & Government Services",
    description:
      "Professional document clearing and government liaison services for visas, approvals, Emirates ID, labor cards, immigration processing, and regulatory compliance.",
  },
  {
    icon: Landmark,
    title: "Investor & Employment Visa",
    description:
      "Complete visa processing services for investors, employees, partners, and family sponsorship with smooth UAE immigration support and documentation handling.",
  },
  {
    icon: BadgeDollarSign,
    title: "VAT Registration & Corporate Tax",
    description:
      "Ensure full UAE tax compliance with professional VAT registration, tax filing, corporate tax advisory, bookkeeping, and financial reporting services.",
  },
  {
    icon: ReceiptText,
    title: "Trademark Registration",
    description:
      "Protect your brand identity in the UAE with complete trademark registration, intellectual property support, and legal documentation assistance.",
  },
  // {
  //   icon: Banknote,
  //   title: "Bank Account Assistance",
  //   description:
  //     "Get support for opening corporate and business bank accounts in the UAE with proper documentation, compliance guidance, and banking consultation.",
  // },
];

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <div
      className="group relative bg-white rounded-[18px] p-6 border border-[#ebebeb] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-transparent hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Black circle overlay expanding from bottom */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#0a0a0a]/90 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

      {/* Bottom accent line - ALWAYS visible, matches the business setup accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#b81236] to-[#d7193f] transition-all duration-300 group-hover:h-[8px] z-10" />

      {/* Content wrapper to sit above the black overlay */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-[48px] h-[48px] rounded-xl bg-[#fff5f6] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#d7193f] group-hover:shadow-[0_8px_24px_rgba(215,25,63,0.4)]">
          <Icon
            size={22}
            className="text-[#d7193f] transition-colors duration-500 group-hover:text-white"
            strokeWidth={1.6}
          />
        </div>

        {/* Title */}
        <h3 className="text-[#0f0f1a] font-bold text-[16px] leading-[1.3] mb-2.5 transition-colors duration-500 group-hover:text-white font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-[13px] leading-[1.7] mb-1 font-sans transition-colors duration-500 group-hover:text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <>
      <section
        className="py-[15px] relative overflow-hidden font-sans"
        style={{
          background: "linear-gradient(to bottom, #fdfdfd, #f4f4f7)",
        }}
      >
        {/* Cinematic Deep Crimson Glow / Sun Source Effect radiating from Top-Center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#b81236]/20 via-[#d7193f]/8 to-transparent rounded-full blur-[110px] pointer-events-none -translate-y-1/2 z-0"
        />

        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d7193f 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative red blob */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #d7193f, transparent 70%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
          {/* ── SECTION HEADER ── */}
          <div className="text-center mb-[72px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#d7193f]" />
              <span className="text-[#d7193f] text-[12px] font-bold tracking-[3.5px] uppercase">
                Our Services
              </span>
              <span className="h-px w-8 bg-[#d7193f]" />
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f0f1a] font-bold leading-[1.15] mb-6 mx-auto font-serif"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                maxWidth: "680px",
              }}
            >
              Business Setup &amp; Corporate
              <span className="italic text-[#d7193f]"> Services </span>
              In Dubai
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-[2px] w-12 bg-[#d7193f] rounded-full" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#d7193f]" />
              <span className="h-[2px] w-12 bg-[#d7193f] rounded-full" />
            </div>

            {/* Description */}
            <p
              className="text-[#6b7280] text-[16px] leading-[1.9] mx-auto"
              style={{ maxWidth: "720px" }}
            >
              EzzyBiz provides complete business setup and corporate solutions
              in Dubai and across the UAE. From company formation and trade
              licenses to VAT registration and PRO services, we help
              entrepreneurs, startups, and international investors establish and
              grow their businesses with confidence.
            </p>
          </div>

          {/* ── SERVICES GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>

          {/* ── BOTTOM CTA BANNER ── */}
          {/* <div
            className="relative rounded-2xl overflow-hidden px-10 py-14 md:px-16 md:py-16"
            style={{
              background:
                "linear-gradient(135deg, #0f0f1a 0%, #1e0c10 50%, #2a0a14 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #d7193f 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(215,25,63,0.18), transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-[560px]">
                <h3
                  className="text-white font-bold leading-[1.2] mb-3 font-serif"
                  style={{
                    fontSize: "clamp(26px, 3.5vw, 38px)",
                  }}
                >
                  Start Your Business Journey
                  <span className="italic text-[#e8718a]"> In Dubai </span>
                  Today
                </h3>
                <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Our experienced consultants are ready to help you establish and grow
                  your business in the UAE with complete end-to-end corporate solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  className="flex items-center justify-center gap-[10px] h-[56px] px-8 bg-[#d7193f] text-white font-bold text-[13px] tracking-[0.07em] uppercase rounded-sm transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(215,25,63,0.4)] border-none cursor-pointer"
                >
                  <MessageCircle size={16} />
                  Talk To Expert
                </button>
                <button
                  className="flex items-center justify-center gap-[10px] h-[56px] px-8 bg-transparent text-white font-semibold text-[13px] tracking-[0.07em] uppercase rounded-sm transition-all duration-300 hover:-translate-y-[3px] hover:bg-white/10 cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <ArrowRight size={16} />
                  View All Services
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
