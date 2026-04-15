/**
 * About Section - Company Profile
 * Partners, country flags, and company history
 * Military Command Center Aesthetic
 */
import { useEffect, useState, useRef } from "react";

const ABOUT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ugze53yCfkMhNrttLdFEu9/sandbox/7Aaij9WEH3VGEwUZUoHCME-img-2_1771998036000_na1fn_c2VudGluZWwtYWJvdXQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWd6ZTUzeUNma01oTnJ0dExkRkV1OS9zYW5kYm94LzdBYWlqOVdFSDNWR0V3VVpVb0hDTUUtaW1nLTJfMTc3MTk5ODAzNjAwMF9uYTFmbl9jMlZ1ZEdsdVpXd3RZV0p2ZFhRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oG-ctWoTv9xkTK3JY33au3weVohlZcB42TIw1561V7rmpOty10Zz5oKw-HlpIfNm92OjEQnFXSLgx1Agz-xD8R51fdWL7HM0Dhbt75AYbrXZXQggcCpKJJTjIScAkpILOjAZUqzOm08tCsE1JDwUm0QUesrsN4QCLpIjvBy5ITIPytFiz68w0tskH703fZY8r9BlAGJTJfwsqoTENFS4D~tepUuPlMTcYkqNqtmGIIGoY~LjhiusuemRWLz1iQ5Xb54yFFGN9yBBCkUcPL5kxqiziF~p4KF9DyvbzqJ7uiow-0sYLd0yfGIKDeZt~Al-SKe2EQ~RhOPWV9cTT1jbWA__";

const countries = [
  { name: "UAE", code: "ae" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Azerbaijan", code: "az" },
  { name: "Turkey", code: "tr" },
  { name: "Yemen", code: "ye" },
  { name: "Ethiopia", code: "et" },
  { name: "Chad", code: "td" },
  { name: "DR Congo", code: "cd" },
  { name: "Nigeria", code: "ng" },
  { name: "Colombia", code: "co" },
];

const partners = [
  { name: "EDGE Group", country: "UAE" },
  { name: "Azersilah", country: "Azerbaijan" },
  { name: "Turkish Defense Industries", country: "Turkey" },
];

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

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ABOUT_BG} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]" />
      </div>

      <div className="relative container">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Company Profile
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            About <span className="text-gold">Sentinel Arms</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Text Content (3 cols) */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-lg text-steel-light leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Founded in 2018 and headquartered in Hong Kong, Sentinel Arms International has rapidly established itself as a trusted partner in the global defense trade sector. With a steadfast commitment to integrity, compliance, and long-term partnerships, we serve sovereign nations and defense organizations worldwide.
            </p>
            <p className="text-lg text-steel-light leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
              Our primary areas of operation span the Middle East and Africa, where we have built enduring relationships with government defense agencies and leading defense corporations. From ammunition and firearms to cutting-edge UAV systems and robotic platforms, we deliver comprehensive defense solutions tailored to each client's operational requirements.
            </p>

            {/* Key Milestones */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { year: "2018", text: "Company established in Hong Kong" },
                { year: "2020", text: "Expanded to Middle East markets" },
                { year: "2022", text: "UAV & Robotics division launched" },
                { year: "2024", text: "Operations in 15+ countries" },
              ].map((m) => (
                <div key={m.year} className="border-l-2 border-gold/40 pl-4 py-2">
                  <span className="text-gold font-bold text-sm" style={{ fontFamily: "var(--font-mono)" }}>{m.year}</span>
                  <p className="text-steel text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Partners & Flags (2 cols) */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Strategic Partners */}
            <div className="mb-10">
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Strategic Partners
              </h3>
              <div className="space-y-4">
                {partners.map((p) => (
                  <div key={p.name} className="flex items-center gap-4 p-4 border border-border/50 bg-navy-light/30 hover:border-gold/30 transition-colors duration-300">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 shrink-0">
                      <span className="text-gold font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                        {p.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-white font-semibold text-sm block" style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>{p.name}</span>
                      <span className="text-steel text-xs" style={{ fontFamily: "var(--font-mono)" }}>{p.country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries Served */}
            <div>
              <h3 className="text-sm tracking-[0.2em] text-gold uppercase mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Countries Served
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {countries.map((c) => (
                  <div key={c.code} className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-8 overflow-hidden border border-border/30 group-hover:border-gold/50 transition-colors duration-300">
                      <img
                        src={`https://flagcdn.com/w80/${c.code}.png`}
                        alt={c.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[9px] text-steel text-center leading-tight" style={{ fontFamily: "var(--font-mono)" }}>
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line mt-20" />
      </div>
    </section>
  );
}
