


import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";
import BG_IMAGE from "../../assets/sheffield.png";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_RAW = "0114 463 4444";
const PHONE_DISPLAY = "0114 463 4444";

const TRUST_BADGES = [
  "Licensed & Insured",
  "24/7 Available",
  "Fixed Fares",
];

function ScrollHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);

    const hide = () => setVisible(false);

    window.addEventListener("scroll", hide, {
      once: true,
      passive: true,
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", hide);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Icon
        icon="ph:mouse-simple-light"
        width={22}
        className="text-white/30 animate-bounce"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-30 overflow-hidden flex items-end">
      
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--hero-overlay)" }}
      />

      {/* Soft Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--hero-gradient-start) 0%, var(--hero-gradient-mid) 45%, var(--hero-gradient-end) 100%)",
        }}
      />

      {/* Accent Glow */}
      <div
        className="absolute left-0 top-0 h-full w-75"
        style={{
          background:
            "linear-gradient(to right, var(--hero-glow), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        
        {/* Small Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-(--accent) animate-pulse" />
          <span className="text-[11px] uppercase tracking-[3px] font-semibold text-(--accent)">
            Sheffield Taxi Service
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-(--hero-primary-text) font-black leading-[0.92] tracking-tight max-w-4xl"
          style={{
            fontSize: "clamp(52px, 8vw, 110px)",
          }}
        >
          Reliable Rides
          <span className="block text-transparent stroke-text">
            Anytime.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-(--hero-muted-text) text-[15px] leading-relaxed">
          Premium taxi service in Sheffield with professional drivers,
          fixed pricing, and fast pickups — available 24/7.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          
          {/* Call Button */}
          <Button
            href={`tel:${PHONE_RAW}`}
            ariaLabel="Call Sheffield Taxi Service"
            className="inline-flex items-center gap-4 bg-(--accent) hover:bg-(--accent-hover) transition-all duration-300 text-(--hero-primary-text) px-6 py-4 rounded-2xl font-bold"
          >
            <span className="w-11 h-11 rounded-xl bg-black/20 flex items-center justify-center">
              <Icon icon="ph:phone-call-fill" width={20} />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-(--hero-muted-text)">
                Book Now
              </p>
              <p className="text-[18px] font-black">
                {PHONE_DISPLAY}
              </p>
            </div>
          </Button>

          {/* App Button */}
          <Button
            href="/download"
            ariaLabel="Download mobile app"
            className="inline-flex items-center gap-4 border border-white/10 bg-(--button-secondary) hover:bg-(--button-secondary-hover) backdrop-blur-md transition-all duration-300 text-(--hero-primary-text) px-6 py-4 rounded-2xl font-bold"
          >
            <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
              <Icon icon="ph:device-mobile-fill" width={20} />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-(--hero-badge-text)">
                Mobile App
              </p>
              <p className="text-[18px] font-black">
                Download
              </p>
            </div>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-5 mt-8">
          {TRUST_BADGES.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-(--hero-badge-text) text-[12px] font-medium"
            >
              <Icon
                icon="ph:check-circle-fill"
                width={14}
                className="text-(--accent)"
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      <ScrollHint />

      {/* Text Stroke */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px var(--hero-stroke);
        }
      `}</style>
    </section>
  );
}

