/**
 * Products Section - Defense Product Catalog
 * Tabbed interface for product categories
 * Military Command Center Aesthetic
 */
import { useState, useEffect, useRef } from "react";
import { Crosshair, Plane, Shield, Bot, Shirt, Bomb } from "lucide-react";

const PRODUCTS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/ugze53yCfkMhNrttLdFEu9/sandbox/7Aaij9WEH3VGEwUZUoHCME-img-3_1771998034000_na1fn_c2VudGluZWwtcHJvZHVjdHMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWd6ZTUzeUNma01oTnJ0dExkRkV1OS9zYW5kYm94LzdBYWlqOVdFSDNWR0V3VVpVb0hDTUUtaW1nLTNfMTc3MTk5ODAzNDAwMF9uYTFmbl9jMlZ1ZEdsdVpXd3RjSEp2WkhWamRITXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V5fLVSeWVxPej45-ddJh3x34UW162hvh9P-Mcy1D36BY22oiKw5H-6tF9hKyLXga-EuFAEMaMj81KjN7uxcrwfGMcVzIvlO91c0TwU3sxDXQFIrl0c2M0ZKf-MU1gFjumCgdC-~Q4NiR5651iHPgFGytXuMXoMlCSzggYZ~8YufLPeIEnwkoDt0Ldygff6x20eCzWeWnQUDY0LW~ToSuNjiNdkQPC6vtSGkPqwfn2HT9XHFh9mwcYo~yRaat5NlgPGYWJatfOKS8tXmje~LlZkzpDFvS~ESIwmWMEUgkQsPv5QkHFHnUOBRIMrP5T-~MgJOiE8Dn8ZWKQFcvZi6JIA__";

const FPV_DRONE_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/BizqBrDgIKjFQYvT.jpeg";
const JOUAV_CW40D_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/HkJqcwwykcPvFhLp.png";
const CH5_LARGE_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/qUsjibJYkzJGXEhh.jpeg";
const LYNX_M20_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/kslzOJEfLjJmtSAn.jpeg";
const UGV_ARMED_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/ZXWuqfzjBdoWmytY.jpeg";
const AMMO_7_62_39_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/TVNMBoVjYaZYvbvW.jpeg";
const AMMO_7_62_54_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/syDWXuvPzYyFBSTA.jpeg";
const AMMO_12_7_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/laorNnuvVbFLOAkB.jpeg";
const AMMO_14_5_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/ECAanSsXgMqFVYDy.jpeg";
const AMMO_23_IMG = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663381580403/gEGOmtMIvRZJZIGd.jpeg";

const TACTICAL_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/ugze53yCfkMhNrttLdFEu9/sandbox/7Aaij9WEH3VGEwUZUoHCME-img-5_1771998024000_na1fn_c2VudGluZWwtdGFjdGljYWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWd6ZTUzeUNma01oTnJ0dExkRkV1OS9zYW5kYm94LzdBYWlqOVdFSDNWR0V3VVpVb0hDTUUtaW1nLTVfMTc3MTk5ODAyNDAwMF9uYTFmbl9jMlZ1ZEdsdVpXd3RkR0ZqZEdsallXdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wt0hMdjcoTG220B4N~5PXiU5BfDLMHR2brnI69nXJs4zvP-l6c-RqpsyohgpqCTweWIYw2vRTowyrTXBr6Rabz21AOx-r6umDKaTHktPnYz1zUBKK8xM3-4UNP6jGRnG2Z4l~CKAQsqD6zjV0ljJNe86wcnRsOXY4PoMqHkKlvfIC6yoFdb4qedlUa5QgUtPIDGTk4~7oeUAWk82yef9i5WI52Z2q5YDTEL9xjzKgvjiPKgywBX6kGNC1vwaGBkbC9~tSh4x7ANEJJ9NPt2vUIuKSoN9YSpedylriVeHJiEbgwS89a~e8wFNPuvAHinLSpATwMADWZEnyy0eX5qXzA__";

type Category = {
  id: string;
  label: string;
  icon: typeof Crosshair;
  description: string;
  products: { name: string; spec: string; image?: string }[];
};

const categories: Category[] = [
  {
    id: "ammunition",
    label: "Ammunition",
    icon: Crosshair,
    description: "Full range of military-grade ammunition from standard infantry calibers to heavy anti-materiel rounds, manufactured to NATO and GOST specifications.",
    products: [
      { name: "7.62×39mm", spec: "Velocity: 710-725 m/s | Length: 56mm" },
      { name: "7.62×54mm", spec: "Velocity: 800-855 m/s | Length: 77.16mm" },
      { name: "12.7mm API", spec: "Velocity: 770-785 m/s | Armor-Piercing Incendiary" },
      { name: "14.5×114mm", spec: "Velocity: 1006 m/s | Anti-Materiel" },
      { name: "23mm", spec: "Anti-Aircraft / Vehicle-Mounted Systems" },
    ],
  },
  {
    id: "firearms",
    label: "Firearms",
    icon: Shield,
    description: "Battle-proven firearms platform including assault rifles, general-purpose and heavy machine guns for infantry and vehicle-mounted applications.",
    products: [
      { name: "Type 56 / AK-47", spec: "7.62×39mm | Effective Range: 400m | Total Length: 1100mm",  },
      { name: "Type 67-2 / PKM", spec: "7.62mm GPMG | Rate: 600 rpm | Effective Range: 1000m" },
      { name: "W85 / DShK", spec: "12.7×108mm | Range: 1600m ground / 1500m AA | Weight: 39kg" },
    ],
  },
  {
    id: "explosives",
    label: "Explosives",
    icon: Bomb,
    description: "Military-grade explosive compounds and civilian pyrotechnic products, supplied in compliance with international arms trade regulations.",
    products: [
      { name: "C4 Plastic Explosive", spec: "Military-grade composition | Controlled substance" },
      { name: "TNT", spec: "Standard military explosive | Multiple form factors" },
      { name: "Civilian Pyrotechnics", spec: "Professional-grade fireworks & signaling devices" },
    ],
  },
  {
    id: "uav",
    label: "UAV Systems",
    icon: Plane,
    description: "Comprehensive unmanned aerial vehicle portfolio from compact FPV drones to heavy-lift VTOL platforms for reconnaissance, strike, and logistics missions.",
    products: [
      { name: "FPV Drone Series (7-13 inch)", spec: "Carbon fiber | 450g-1.5kg | 2-5km range | TNT payload capable" },
      { name: "Reconnaissance Drones", spec: "Black Falcon Micro to Dragon Fish L5 VTOL | Up to 158min endurance" },
      { name: "Strike/Bombing Drones", spec: "HD Large to 56-inch Vehicle-Mounted | Up to 50kg payload" },
      { name: "100KG Transport Drone", spec: "75kg body | 50-70kg payload | 80km/h cruise | 35km range" },
      { name: "CW-40D VTOL System", spec: "JOUAV | Hybrid power | 9-10hr endurance | 200km range" },
      { name: "CH-5 Large Combat UAV", spec: "Tactical reconnaissance & strike | 100kg payload | 20hr endurance" },
    ],
  },
  {
    id: "robotics",
    label: "Robotics",
    icon: Bot,
    description: "Next-generation robotic platforms for ground operations including quadruped robot dogs and unmanned ground vehicles with modular weapon stations.",
    products: [
      { name: "LYNX M20 Robot Dog", spec: "33kg | 15kg payload | IP66 | -20°C to 55°C | 5m/s max speed" },
      { name: "LYNX M20 Pro", spec: "Enhanced sensors | Dual LiDAR | Octa-core processors" },
      { name: "Unmanned Combat Vehicle (UCV)", spec: "Modular weapon station | AI-enabled targeting | 50kg+ payload" },
      { name: "Unmanned Boat C170", spec: "40kg | 50kg load | 4m/s | Strike & EOD variants" },
    ],
  },
  {
    id: "tactical",
    label: "Tactical Gear",
    icon: Shirt,
    description: "Complete individual tactical equipment systems from body armor and helmets to field gear, uniforms, and personal protection equipment.",
    products: [
      { name: "Ballistic Helmet", spec: "NIJ IIIA | Poli Etilen | <1.65kg | Full accessories", image: TACTICAL_IMG },
      { name: "Bulletproof Vest", spec: "NIJ III.44 | 900D Oxford + PE | Quick release" },
      { name: "Armor Plates (Front/Back)", spec: "NIJ Level III | ICW LCP3 | 250×300mm | 2.2kg" },
      { name: "Assault Vest & Holster Set", spec: "MOLLE compatible | Multiple configurations" },
      { name: "Field Equipment", spec: "Backpacks, sleeping systems, compass, optics, tools" },
      { name: "Anti-Riot Equipment", spec: "Shields, suits, batons, spray gas, detectors" },
    ],
  },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("ammunition");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={PRODUCTS_BG} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#080e1a]/80" />
      </div>

      <div className="relative container">
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Defense Catalog
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Products & <span className="text-gold">Services</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm tracking-[0.1em] uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-gold text-navy-dark border-gold font-bold"
                    : "bg-transparent text-steel border-border/50 hover:border-gold/40 hover:text-gold"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className={`transition-all duration-500 ${inView ? "opacity-100" : "opacity-0"}`}>
          {/* Category Description */}
          <p className="text-steel-light text-base leading-relaxed mb-8 max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
            {activeCategory.description}
          </p>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.products.map((product, i) => (
              <div
                key={product.name}
                className="group border border-border/40 bg-navy-dark/50 hover:border-gold/40 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Product Image (if available) */}
                {product.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="p-5">
                  <h4
                    className="text-white font-bold text-base mb-2 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-steel text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {product.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line mt-20" />
      </div>
    </section>
  );
}
