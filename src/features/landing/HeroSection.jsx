


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
        className="text-(--hero-scrollhint) animate-bounce"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex items-end py-[var(--space-24)]">
      
      {/* Background Image */}
      <img
        src={BG_IMAGE}
        alt="Sheffield taxi service"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Accent Glow */}
      <div className="absolute left-0 top-0 h-full w-[var(--hero-glow-width)] bg-hero-glow" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-[var(--space-6)] pb-[var(--space-20)]">
        
        {/* Small Label */}
        <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-6)]">
          <span className="w-[var(--space-2)] h-[var(--space-2)] rounded-full bg-accent animate-pulse" />
          <span className="hero-label uppercase tracking-[var(--tracking-wide)] font-[var(--weight-semibold)]">
            Sheffield Taxi Service
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-hero-primary font-heading font-[var(--weight-extrabold)] leading-[var(--hero-heading-line-height)] tracking-[var(--tracking-tight)] text-[clamp(var(--text-hero-heading-min),8vw,var(--text-hero-heading-max))]">
          Reliable Rides
          <span className="block text-transparent stroke-text">
            Anytime.
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mt-[var(--space-6)] hero-body leading-[var(--leading-relaxed)]">
          Premium taxi service in Sheffield with professional drivers,
          fixed pricing, and fast pickups — available 24/7.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-[var(--space-4)] mt-[var(--space-10)]">
          
          {/* Call Button */}
          <Button
            href={`tel:${PHONE_RAW}`}
            ariaLabel="Call Sheffield Taxi Service"
            className="inline-flex items-center gap-[var(--space-4)] bg-accent text-hero-primary px-[var(--space-6)] py-[var(--space-4)] rounded-[var(--radius-xl)] font-[var(--weight-bold)] font-[var(--sans)] transition-all duration-300"
          >
            <span className="w-[var(--hero-button-icon-size)] h-[var(--hero-button-icon-size)] rounded-xl bg-hero-icon-bg-dark flex items-center justify-center">
              <Icon icon="ph:phone-call-fill" width={20} />
            </span>

            <div>
              <p className="hero-button-label uppercase tracking-[var(--tracking-wide)] m-0">
                Book Now
              </p>
              <p className="hero-button-copy m-0">
                {PHONE_DISPLAY}
              </p>
            </div>
          </Button>

          {/* App Button */}
          <Button
            href="/download"
            ariaLabel="Download mobile app"
            className="inline-flex items-center gap-[var(--space-4)] bg-button-secondary text-hero-primary px-[var(--space-6)] py-[var(--space-4)] rounded-[var(--radius-xl)] border border-hero-button backdrop-blur-hero-button font-[var(--weight-bold)] font-[var(--sans)] transition-all duration-300"
          >
            <span className="w-[var(--hero-button-icon-size)] h-[var(--hero-button-icon-size)] rounded-xl bg-hero-icon-bg flex items-center justify-center">
              <Icon icon="ph:device-mobile-fill" width={20} />
            </span>

            <div>
              <p className="hero-app-label uppercase tracking-[var(--tracking-wide)] m-0">
                Mobile App
              </p>
              <p className="hero-button-copy m-0">
                Download
              </p>
            </div>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-[var(--space-5)] mt-[var(--space-8)]">
          {TRUST_BADGES.map((item) => (
            <div
              key={item}
              className="flex items-center gap-[var(--space-2)] hero-badge font-[var(--weight-medium)]"
            >
              <Icon
                icon="ph:check-circle-fill"
                width={14}
                className="text-accent"
              />
              {item}
            </div>
          ))}
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

