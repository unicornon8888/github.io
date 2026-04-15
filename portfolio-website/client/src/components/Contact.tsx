/*
 * Contact Section - Company Contact Information & Quote Request Form
 * Address, map, WhatsApp, Email, and Quote Request Form
 * Military Command Center Aesthetic
 */
import { useEffect, useState, useRef } from "react";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import QuoteRequest from "./QuoteRequest";

const WHATSAPP_QR = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/cKcphuvaIxLCBiTd.jpeg";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <>
      {/* Contact Information Section */}
      <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1628]">
        <div className="relative container">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                Get in Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Contact <span className="text-gold">Us</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Info */}
            <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-lg text-steel-light leading-relaxed mb-10" style={{ fontFamily: "var(--font-body)" }}>
                For inquiries regarding our defense products and services, partnership opportunities, or quotation requests, please do not hesitate to reach out to our team. We are committed to providing prompt and professional responses to all communications.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Contact Person */}
                <div className="flex items-start gap-4 p-5 border border-border/40 bg-[#0d1a2e]/60 hover:border-gold/30 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 bg-gold/5 shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                      CONTACT PERSON
                    </h4>
                    <p className="text-steel-light text-base" style={{ fontFamily: "var(--font-body)" }}>Alex Wang</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8613982226936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 border border-border/40 bg-[#0d1a2e]/60 hover:border-gold/30 transition-colors duration-300 group no-underline"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 bg-gold/5 shrink-0">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                      WHATSAPP
                    </h4>
                    <p className="text-steel-light text-base group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                      +86 139 8222 6936
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-steel opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </a>

                {/* Email */}
                <a
                  href="mailto:unicornon@hotmail.com"
                  className="flex items-start gap-4 p-5 border border-border/40 bg-[#0d1a2e]/60 hover:border-gold/30 transition-colors duration-300 group no-underline"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 bg-gold/5 shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                      EMAIL
                    </h4>
                    <p className="text-steel-light text-base group-hover:text-gold transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                      unicornon@hotmail.com
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-steel opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 border border-border/40 bg-[#0d1a2e]/60 hover:border-gold/30 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 bg-gold/5 shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                      REGISTERED OFFICE
                    </h4>
                    <p className="text-steel-light text-base" style={{ fontFamily: "var(--font-body)" }}>
                      137-139 Connaught Road Central,
                      <br />
                      Sheung Wan, Hong Kong SAR, China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Map & QR Code */}
            <div className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-6">
                {/* Map */}
                <div className="w-full h-[400px] border border-border/40 overflow-hidden">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8!2d114.15!3d22.287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2s137-139+Connaught+Rd+Central%2C+Sheung+Wan%2C+Hong+Kong!5e0!3m2!1sen!2shk!4v1700000000000!5m2!1sen!2shk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px", filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                {/* WhatsApp QR Code */}
                <div className="border border-border/40 bg-[#0d1a2e]/60 p-6 flex flex-col items-center">
                  <h4 className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>
                    SCAN TO CONTACT ON WHATSAPP
                  </h4>
                  <img src={WHATSAPP_QR} alt="WhatsApp QR Code" className="w-48 h-48 border border-gold/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1628]">
        <div className="relative container">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                Request a Quote
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Get a <span className="text-gold">Quotation</span>
            </h2>
            <p className="text-lg text-steel-light max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Submit your product requirements and specifications below. Our team will review your request and provide a competitive quotation within 24 hours.
            </p>
          </div>

          {/* Quote Request Form */}
          <div className="max-w-4xl mx-auto">
            <QuoteRequest />
          </div>
        </div>
      </section>
    </>
  );
}
