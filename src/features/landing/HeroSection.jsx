import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";
import BG_IMAGE from "../../assets/sheffield.png";
import { PHONE_DISPLAY, PHONE_RAW } from "../../shared/constants/brand";

const TRUST_ITEMS = [
  { icon: "ph:check-circle-fill", label: "Fixed Prices" },
  { icon: "ph:check-circle-fill", label: "No Hidden Fees" },
  { icon: "ph:check-circle-fill", label: "24/7 Service" },
];

function ScrollHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    const hide = () => setVisible(false);
    window.addEventListener("scroll", hide, { once: true, passive: true });
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
      <Icon icon="ph:mouse-simple-light" width={22} className="text-muted animate-bounce" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src={BG_IMAGE}
        alt="Sheffield taxi service"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 hero-overlay-gradient" />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[var(--space-6)] py-[var(--space-20)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline */}
          <div>
            <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-6)]">
              <span className="w-[var(--space-2)] h-[var(--space-2)] rounded-full bg-accent animate-pulse" />
              <span className="hero-label uppercase tracking-[var(--tracking-wide)] font-[var(--weight-medium)]">
                Sheffield Taxi Service
              </span>
            </div>

            <h1 className="hero-headline max-w-4xl">
              Reliable Rides
              <span className="hero-accent-word block mt-2">Anytime.</span>
            </h1>
            <div className="hero-red-bar" aria-hidden="true" />

            <p className="hero-subhead mt-[var(--space-6)]">
              Premium taxi service in Sheffield with professional drivers,
              fixed pricing, and fast pickups — available 24/7.
            </p>
          </div>

          {/* Right — booking CTA panel */}
          <div className="card-elevated">
            <div className="flex gap-6 mb-6 border-b border-[var(--color-border)] pb-4">
              <span className="text-sm font-medium text-[var(--color-text-primary)] border-b-2 border-[var(--color-primary)] pb-2 -mb-[17px]">
                Book Now
              </span>
              <a href="/booking" className="text-sm text-[var(--color-text-muted)] pb-2 hover:text-[var(--color-text-primary)] transition-colors">
                Get a Quote
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                href={`tel:${PHONE_RAW}`}
                ariaLabel="Call to book"
                className="btn-primary w-full justify-start gap-4 !rounded-[4px]"
              >
                <Icon icon="ph:phone-call-fill" width={20} aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wider opacity-90">Call to book</span>
                  <span className="text-base font-semibold">{PHONE_DISPLAY}</span>
                </span>
              </Button>

              <Button
                href="/booking"
                ariaLabel="Book online"
                className="btn-primary w-full justify-start gap-4 !rounded-[4px]"
              >
                <Icon icon="ph:calendar-check-fill" width={20} aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wider opacity-90">Book Online</span>
                  <span className="text-base font-semibold">Quick &amp; easy</span>
                </span>
              </Button>

              <Button
                href="/app"
                ariaLabel="Download mobile app"
                className="btn-primary w-full justify-start gap-4 !rounded-[4px]"
              >
                <Icon icon="ph:device-mobile-fill" width={20} aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wider opacity-90">Mobile App</span>
                  <span className="text-base font-semibold">Download</span>
                </span>
              </Button>
            </div>

            <div className="trust-row">
              {TRUST_ITEMS.map((item) => (
                <span key={item.label} className="trust-item">
                  <Icon icon={item.icon} width={14} className="text-accent" aria-hidden="true" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
