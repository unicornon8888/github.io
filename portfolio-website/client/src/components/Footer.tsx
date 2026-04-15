/**
 * Footer - Sentinel Arms International
 * Military Command Center Aesthetic
 */
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-border/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-gold" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-widest text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  SENTINEL ARMS
                </span>
                <span className="text-[9px] tracking-[0.3em] text-gold-dim" style={{ fontFamily: "var(--font-mono)" }}>
                  INTERNATIONAL
                </span>
              </div>
            </div>
            <p className="text-steel text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Global defense trade solutions provider headquartered in Hong Kong, serving sovereign nations since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-gold uppercase mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {["About", "Products", "Philosophy", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-steel text-sm hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-gold uppercase mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h4>
            <div className="space-y-2 text-steel text-sm" style={{ fontFamily: "var(--font-mono)" }}>
              <p>Alex Wang</p>
              <p>unicornon@hotmail.com</p>
              <p>WhatsApp: +86 139 8222 6936</p>
              <p>Hong Kong SAR, China</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            &copy; {new Date().getFullYear()} Sentinel Arms International. All rights reserved.
          </p>
          <p className="text-steel/50 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            Compliant with UN Arms Trade Treaty (ATT)
          </p>
        </div>
      </div>
    </footer>
  );
}
