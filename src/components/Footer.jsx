import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Company Setup", to: "/dubaimainland" },
  { label: "Visa Services", to: "/allvisa" },
  { label: "VAT Services", to: "/vat" },
  { label: "Banking", to: "/banking" },
  { label: "Contact Us", to: "/contact" }
];

const serviceLinks = [
  { label: "Dubai Mainland", to: "/dubaimainland" },
  { label: "Dubai Free Zone", to: "/dubaifreezone" },
  { label: "Sharjah Free Zone", to: "/sharjahfreezone" },
  { label: "Ajman Free Zone", to: "/ajmanfreezone" },
  { label: "RAK Free Zone", to: "/rakfreezone" },
  { label: "All visa service", to: "/allvisa" },
  { label: "Golden visa", to: "/goldenvisa" },
  { label: "ejar", to: "/ejari" }
];

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  { icon: <FaYoutube />, label: "YouTube", href: "#" },
];

const bottomLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
  { label: "Cookie Policy", to: "/cookie-policy" }
];

const BuildingIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ColHeading = ({ children }) => (
  <div className="mb-6">
    <h4 className="font-['Cormorant_Garamond'] text-[19px] font-bold text-white mb-3 leading-tight">
      {children}
    </h4>
    <div className="w-7 h-[1.5px] bg-gradient-to-r from-red-600 to-transparent" />
  </div>
);

const FooterLink = ({ to = "#", children }) => (
  <li>
    <Link to={to}
      className="group flex items-center text-[13.5px] text-white/40 hover:text-white transition-all duration-300 gap-0">
      <span className="inline-block w-0 group-hover:w-4 h-px bg-red-600 transition-all duration-300 flex-shrink-0 group-hover:mr-2 mr-0" />
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.07]">

      <style>{`footer { font-family: 'Outfit', sans-serif; }`}</style>

      {/* ══ MAIN 4-COLUMN GRID ══ */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.5fr] gap-10 lg:gap-14 py-16 lg:py-20">

          {/* ── COL 1: Brand ── */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 no-underline group select-none">
              <img src="/logoIcon.png" alt="EzzyBiz Logo" className="h-11 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />
              <span className="font-serif text-[27px] font-bold text-white transition-colors duration-300 group-hover:text-red-500">
                EzzyBiz
              </span>
            </Link>

            <p className="text-[13.5px] text-white/40 leading-[1.9] mb-7 max-w-[285px]">
              EzzyBiz provides professional business setup, company formation, PRO, VAT, and corporate solutions for entrepreneurs, startups, and global investors across Dubai and the UAE.
            </p>

            <p className="text-[10px] tracking-[0.16em] uppercase text-white/25 mb-3">
              Follow Us
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label}
                  className="w-9 h-9 border border-white/[0.08] rounded-[9px] flex items-center justify-center text-white/40 text-[13px] hover:border-red-600 hover:text-white hover:bg-red-600/15 hover:-translate-y-0.5 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="flex flex-col gap-[11px]">
              {quickLinks.map((item, i) => (
                <FooterLink key={i} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </div>          {/* ── COL 3: Services ── */}
          <div>
            <ColHeading>Our Services</ColHeading>
            <ul className="flex flex-col gap-[11px]">
              {serviceLinks.map((item, i) => (
                <FooterLink key={i} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact + Newsletter ── */}
          <div>
            <ColHeading>Contact Information</ColHeading>

            <div className="flex flex-col gap-4 mb-8">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] flex-shrink-0 border border-white/[0.08] rounded-[9px] flex items-center justify-center mt-0.5">
                  <IoLocationOutline className="text-red-500 text-[15px]" />
                </div>
                <span className="text-white/40 text-[13px] leading-relaxed pt-1">
                  1603 The Citadel Tower,<br />Business Bay, Dubai
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] flex-shrink-0 border border-white/[0.08] rounded-[9px] flex items-center justify-center mt-0.5">
                  <MdOutlinePhone className="text-red-500 text-[15px]" />
                </div>
                <a href="tel:+971523177073"
                  className="text-white/40 text-[13px] pt-1 hover:text-white transition-colors duration-300">
                  +971 52 317 7073
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] flex-shrink-0 border border-white/[0.08] rounded-[9px] flex items-center justify-center mt-0.5">
                  <MdOutlineMailOutline className="text-red-500 text-[15px]" />
                </div>
                <a href="mailto:info@ezzybiz.ae"
                  className="text-white/40 text-[13px] pt-1 hover:text-white transition-colors duration-300">
                  info@ezzybiz.ae
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-[34px] h-[34px] flex-shrink-0 border border-white/[0.08] rounded-[9px] flex items-center justify-center mt-0.5">
                  <FiClock className="text-red-500 text-[15px]" />
                </div>
                <span className="text-white/40 text-[13px] leading-relaxed pt-1">
                  Monday – Saturday<br />9:00 AM – 6:30 PM
                </span>
              </div>

            </div>

            
          </div>

        </div>
      </div>

      {/* ══ DIVIDER ══ */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 py-5">

          <div className="flex flex-col gap-1">
            <span className="text-[12.5px] text-white/25">
              © 2026 EzzyBiz. All Rights Reserved.
            </span>
            
          </div>
          <div>
            <span className=" text-white/15 tracking-[0.04em] flex items-center gap-2">
              Design & Developed By: <a href="https://codecrafter.co.in/" target="_blank"><img className="h-8" src="https://kashtkart.netlify.app/assets/ccws-l-lAMUu5.png" /></a>
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {bottomLinks.map((l, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-white/15 text-[9px]">•</span>}
                <Link to={l.to} className="text-[12px] text-white/25 hover:text-red-500 transition-colors duration-300">
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}