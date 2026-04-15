/**
 * Philosophy Section - Company Values & Mission
 * Military Command Center Aesthetic
 */
import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Handshake, Globe, Scale } from "lucide-react";

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

const values = [
  {
    icon: Globe,
    title: "Advanced Technology Export",
    description: "We are committed to delivering cutting-edge defense technology products to the global market, bridging the gap between innovation and operational deployment for our international partners.",
  },
  {
    icon: Handshake,
    title: "Integrity & Long-Term Partnership",
    description: "Our business philosophy is rooted in honesty, transparency, and mutual respect. We build enduring relationships with our clients through consistent reliability and unwavering commitment to our promises.",
  },
  {
    icon: Scale,
    title: "International Compliance",
    description: "We strictly adhere to the United Nations Arms Trade Treaty (ATT) and all applicable international regulations governing defense trade, ensuring every transaction meets the highest standards of legal and ethical compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Defense Trade",
    description: "As a responsible participant in the international defense industry, we recognize our obligation to contribute to global security and stability. Every partnership is evaluated through the lens of responsible trade practices.",
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#0d1a2e]">
      <div className="relative container">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Our Philosophy
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Mission & <span className="text-gold">Values</span>
          </h2>
          <p className="text-xl md:text-2xl text-steel-light italic max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            "Experience the future of innovation with our revolutionary product, where cutting-edge technology meets unparalleled performance."
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className={`relative p-8 border border-border/40 bg-navy-dark/40 hover:border-gold/40 transition-all duration-500 group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors duration-300" />

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-gold/30 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-steel text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gold divider */}
        <div className="gold-line mt-20" />
      </div>
    </section>
  );
}
