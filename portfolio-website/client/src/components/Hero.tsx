/**
 * Hero Section - Military Command Center Aesthetic
 * Full-screen cinematic hero with command center background
 * Gold accent lines, counter animations for key stats
 */
import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ugze53yCfkMhNrttLdFEu9/sandbox/7Aaij9WEH3VGEwUZUoHCME-img-1_1771998030000_na1fn_c2VudGluZWwtaGVybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWd6ZTUzeUNma01oTnJ0dExkRkV1OS9zYW5kYm94LzdBYWlqOVdFSDNWR0V3VVpVb0hDTUUtaW1nLTFfMTc3MTk5ODAzMDAwMF9uYTFmbl9jMlZ1ZEdsdVpXd3RhR1Z5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=T-wOVecsFKjcV3DqycRX~tHrf7asQlO1jwxkq6h4sa3myiIWTijcPLgDAXWvu7Jy0-H8MaNZbZ-HFUmCzioZMRkTemehMp-DlIAybQ7ZVjGnQBD1zG6lDqq73EH-UIlrpzgGUJT2wRbT3QUAhKsWqRSym5mt77Guj4TG2VW0mRQIMZjnG3sBV-nfny8CmhtPXE-a~1Y0jR9LIb91oozEFSpD~nMl-IKw-DaDH5O~COe4QTN~LTNT811rjNME96r7qhRqbMr9zbidW8qMmZTbG~zpl33ALRHMOLyalL0~tlDK3N7utd68Hf0geRGZ1dgiY1SQsfzPDfbBEJmFF6192w__";

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const years = useCounter(8, 2000, visible);
  const countries = useCounter(15, 2000, visible);
  const categories = useCounter(7, 2000, visible);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Military command center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-12 h-px bg-gold" />
            <span
              className="text-gold text-sm tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Est. 2018 — Hong Kong
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Global Defense
            <br />
            <span className="text-gold">Trade Solutions</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-steel-light leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Delivering advanced defense products and integrated military solutions
            to sovereign nations across the Middle East, Africa, and Latin America.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() =>
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gold text-navy-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-dim transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View Products
            </button>
            <button
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border border-white/30 text-white font-bold text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 lg:gap-16 transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {[
              { value: `${years}+`, label: "Years of Experience" },
              { value: `${countries}+`, label: "Countries Served" },
              { value: `${categories}+`, label: "Product Categories" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="text-3xl lg:text-4xl font-bold text-gold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs tracking-[0.15em] text-steel uppercase mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-[10px] tracking-[0.3em] text-steel uppercase"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gold" />
      </div>
    </section>
  );
}
