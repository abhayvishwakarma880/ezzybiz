import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiPhone, FiMail, FiChevronDown, FiMenu, FiX, FiMessageSquare } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "/about" },
  {
    label: "Company Setup",
    dropdown: [
      { label: "Dubai Mainland", href: "/dubaimainland" },
      { label: "Dubai Free Zone", href: "/dubaifreezone" },
      { label: "Sharjah Free Zone", href: "/sharjahfreezone" },
      { label: "Ajman Free Zone", href: "#" },
      { label: "RAK Free Zone", href: "#" },
    ],
  },
  {
    label: "Visa Services",
    dropdown: [
      { label: "All visa service", href: "#" },
      { label: "Golden visa", href: "#" },
      { label: "ejar", href: "#" },
    ],
  },
  { label: "VAT Services", href: "#" },
  { label: "Banking", href: "#" },
  { label: "Contact Us", href: "#" },
];

const ClockIcon = () => <FiClock size={14} />;
const PhoneIcon = () => <FiPhone size={14} />;
const MailIcon = () => <FiMail size={14} />;
const ChevronDown = () => <FiChevronDown size={12} strokeWidth={2.5} />;
const MenuIcon = () => <FiMenu size={22} />;
const CloseIcon = () => <FiX size={22} />;
const FacebookIcon = () => <FaFacebookF size={15} />;
const InstagramIcon = () => <FaInstagram size={15} />;
const LinkedInIcon = () => <FaLinkedinIn size={15} />;
const YouTubeIcon = () => <FaYoutube size={15} />;

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`
        absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)]
        min-w-[230px] bg-white border-t-[3px] border-[#C8102E]
        rounded-b-md overflow-hidden z-[9999]
        shadow-[0_12px_40px_rgba(0,0,0,0.13)]
        transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-top
        ${isOpen
          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }
      `}
    >
      {items.map((item, i) => (
        <Link
          key={i}
          to={item.href || "#"}
          className={`
            flex items-center gap-[10px] px-5 py-[11px]
            text-[#1a1a2e] no-underline text-[13.5px] font-medium tracking-[0.02em] font-serif
            transition-all duration-[180ms] ease-in-out
            hover:bg-[#fdf0f2] hover:text-[#C8102E] hover:pl-[26px]
            ${i < items.length - 1 ? "border-b border-[#f0f0f0]" : ""}
          `}
        >
          <span className="w-[5px] h-[5px] rounded-full bg-[#C8102E] shrink-0" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (idx) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* Nav underline pseudo-element (cannot be done in pure Tailwind) */}
      <style>{`
        .nav-underline { position: relative; }
        .nav-underline::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #C8102E;
          transition: width 0.25s ease;
        }
        .nav-underline:hover::after { width: 100%; }

        @keyframes navSlideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-nav-slide {
          animation: navSlideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className="bg-[#0f0f1a] border-b border-[#C8102E]/25 font-sans relative z-[1001]">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6 flex items-center justify-center md:justify-between h-10 gap-3">

            {/* Business Hours */}
            <div className="hidden lg:flex items-center gap-[7px] text-[#b0b8cc] text-[12.5px] tracking-[0.03em] shrink-0">
              <span className="text-[#C8102E]"><ClockIcon /></span>
              <span>Mon – Sat &nbsp;|&nbsp; 9:00 AM – 6:30 PM</span>
            </div>

            {/* Phone Numbers */}
            <div className="hidden md:flex items-center gap-5">
              {["+971 52 706 9469", "+971 4 569 9557"].map((num, i) => (
                <a
                  key={i}
                  href={`tel:${num.replace(/\s/g, "")}`}
                  className="flex items-center gap-[6px] text-[#d0d8e8] text-[12.5px] no-underline tracking-[0.04em] transition-colors duration-200 hover:text-[#f8a0b0]"
                >
                  <span className="text-[#C8102E]"><PhoneIcon /></span>
                  {num}
                </a>
              ))}
            </div>

            {/* Email + Socials */}
            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-[18px] shrink-0">
              <a
                href="mailto:info@ezzybiz.ae"
                className="flex items-center gap-[6px] text-[#d0d8e8] text-[12.5px] no-underline transition-colors duration-200 hover:text-[#f8a0b0]"
              >
                <span className="text-[#C8102E]"><MailIcon /></span>
                info@ezzybiz.ae
              </a>

              {/* Divider */}
              <div className="w-px h-4 bg-white/10 hidden sm:block" />

              {/* Social Icons */}
              <div className="flex items-center gap-[15px] sm:gap-[10px]">
                {[
                  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
                  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
                  { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
                  { icon: <YouTubeIcon />, label: "YouTube", href: "#" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-[#8899bb] leading-none transition-all duration-200 hover:text-[#C8102E] hover:-translate-y-0.5"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* ── MAIN NAVBAR WRAPPER ── */}
      <div className="h-[72px] w-full relative z-[1000]">
        <nav
          className={`w-full font-sans flex flex-col transition-colors duration-300 ${
            scrolled 
              ? "fixed top-0 left-0 shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white/95 backdrop-blur-md border-transparent animate-nav-slide" 
              : "absolute top-0 left-0 bg-white border-b border-[#ececec]"
          }`}
        >
          <div className="w-full">
          <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" className="no-underline flex flex-col leading-[1.1]">
              <div className="flex items-baseline gap-0.5">
                <span
                  className="font-bold text-[28px] text-[#0f0f1a] tracking-[-0.5px] font-serif"
                >
                  Ezzy
                </span>
                <span
                  className="font-bold text-[28px] text-[#C8102E] tracking-[-0.5px] font-serif"
                >
                  Biz
                </span>
              </div>
            </Link>

            {/* Desktop Nav Menu */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(idx)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  <Link
                    to={item.href || "#"}
                    className={`flex items-center gap-1 px-3 py-2 text-[#1a1a2e] no-underline text-[13.5px] font-semibold tracking-[0.02em] whitespace-nowrap transition-colors duration-200 hover:text-[#C8102E] ${
                      !item.dropdown ? "nav-underline" : ""
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <span
                        className={`text-[#C8102E] flex transition-transform duration-200 ${
                          activeDropdown === idx ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronDown />
                      </span>
                    )}
                  </Link>
                  {item.dropdown && (
                    <DropdownMenu items={item.dropdown} isOpen={activeDropdown === idx} />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="#"
              className="hidden lg:inline-flex items-center gap-[7px] bg-[#C8102E] text-white px-[22px] py-[11px] rounded font-bold text-[13px] tracking-[0.06em] no-underline uppercase shadow-[0_4px_16px_rgba(200,16,46,0.25)] transition-all duration-[220ms] ease-in-out hover:bg-[#a50d23] hover:shadow-[0_6px_24px_rgba(200,16,46,0.35)] hover:-translate-y-px whitespace-nowrap shrink-0" 
            >
              <FiMessageSquare size={14} strokeWidth={2.5} />
              Talk To Expert
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex lg:hidden bg-transparent border-none cursor-pointer text-[#1a1a2e] p-1"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={`lg:hidden grid transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="bg-white border-t-[3px] border-[#C8102E] shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-h-[80vh] overflow-y-auto flex flex-col">
              {NAV_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-[#f0f0f0]">
                  <div
                    className="flex items-center justify-between px-6 py-[14px] cursor-pointer text-[#1a1a2e] text-sm font-semibold"
                    onClick={() =>
                      item.dropdown
                        ? setMobileExpanded(mobileExpanded === idx ? null : idx)
                        : null
                    }
                  >
                    <Link to={item.href || "#"} className="no-underline text-inherit">
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <span
                        className={`text-[#C8102E] flex transition-transform duration-200 ${
                          mobileExpanded === idx ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronDown />
                      </span>
                    )}
                  </div>

                  {/* Submenu animation also using grid trick */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      item.dropdown && mobileExpanded === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 bg-[#fafafa]">
                      {item.dropdown &&
                        item.dropdown.map((sub, si) => (
                          <Link
                            key={si}
                            to={sub.href || "#"}
                            className="flex items-center gap-[10px] px-9 py-[10px] text-[13px] text-[#444] no-underline"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C8102E] shrink-0" />
                            {sub.label}
                          </Link>
                        ))}
                      <div className="h-1.5" />
                    </div>
                  </div>
                </div>
              ))}

              <div className="px-6 py-4">
                <Link
                  to="#"
                  className="block text-center bg-[#C8102E] text-white py-[13px] rounded font-bold text-[13px] tracking-[0.06em] no-underline uppercase"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </div>
    </>
  );
}