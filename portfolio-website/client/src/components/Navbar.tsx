/**
 * Navbar - Military Command Center Aesthetic
 * Dark navy background, gold accent, Barlow Condensed typography
 * Sticky top navigation with transparent-to-solid transition on scroll
 */
import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group no-underline"
        >
          <Shield className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span
              className="text-lg lg:text-xl font-bold tracking-widest text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SENTINEL ARMS
            </span>
            <span
              className="text-[10px] lg:text-xs tracking-[0.3em] text-gold-dim"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              INTERNATIONAL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-[0.2em] text-steel-light hover:text-gold transition-colors duration-300 uppercase"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/8613982226936"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 border border-gold text-gold text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-navy-dark transition-all duration-300 no-underline"
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-gold/20">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base tracking-[0.2em] text-steel-light hover:text-gold transition-colors duration-300 uppercase py-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/8613982226936"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 border border-gold text-gold text-sm tracking-[0.15em] uppercase text-center hover:bg-gold hover:text-navy-dark transition-all duration-300 no-underline"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
