import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";
import PhoneImg from "../../assets/mobileApp.svg";
import CarImg   from "../../assets/car.png";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_RAW       = "01144634444";
const PHONE_DISPLAY   = "0114 463 4444";
const APP_STORE_URL   = "https://apps.apple.com/app/solotaxis";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/solotaxis";

// ─── Ride Section Stats ───────────────────────────────────────────────────────

const RIDE_STATS = [
  { value: "500+",  label: "Driver Partners", icon: "ph:steering-wheel"  },
  { value: "24/7",  label: "Always On",       icon: "ph:clock"           },
  { value: "4 min", label: "Avg. Pickup",     icon: "ph:timer"           },
];

// ─── App Features ─────────────────────────────────────────────────────────────

const APP_FEATURES = [
  { icon: "ph:lightning",     title: "Priority Pickup",    desc: "Skip the queue — app bookings get served first."      },
  { icon: "ph:map-pin",       title: "Live Tracking",      desc: "Watch your driver approach in real-time on the map."  },
  { icon: "ph:credit-card",   title: "Flexible Payments",  desc: "Cash, card, Apple Pay or Google Pay — your choice."   },
  { icon: "ph:shield-check",  title: "Vetted Drivers",     desc: "Every driver-partner is background-checked & rated."  },
];

// ─── Eyebrow Label ────────────────────────────────────────────────────────────

function Eyebrow({ icon, children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-6 bg-(--accent-soft) text-(--accent) border border-(--accent-border)"
    >
      <Icon icon={icon} width={11} aria-hidden="true" />
      {children}
    </span>
  );
}

// ─── Store Buttons ────────────────────────────────────────────────────────────

function StoreButton({ href, icon, label, sub, dark = false }) {
  return (
    <Button
      href={href}
      ariaLabel={`Download SoloTaxis on ${label}`}
      icon={icon}
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)
        ${dark
          ? "bg-(--surface-white-soft) border-(--surface-white-soft-border) hover:bg-(--surface-white-soft-strong) text-(--hero-primary-text)"
          : "bg-(--text-b) border-(--text-b) hover:bg-surface-dark-strong text-(--hero-primary-text)"
        }`}
      iconClass="shrink-0 h-5 w-5"
    >
      <div className="text-left">
        <p className="text-[9px] tracking-wider uppercase text-hero-primary-soft">{sub}</p>
        <p className="text-[13px] font-semibold leading-tight">{label}</p>
      </div>
    </Button>
  );
}

// ─── Phone Book Button ────────────────────────────────────────────────────────

function PhoneButton() {
  return (
    <Button
      href={`tel:${PHONE_RAW}`}
      ariaLabel={`Call SoloTaxis — ${PHONE_DISPLAY}`}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-(--border) bg-(--hero-primary-text) hover:border-(--accent-border) hover:shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) group"
    >
      <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-surface-soft">
        <Icon icon="ph:phone-call" width={16} className="text-(--accent)" aria-hidden="true" />
      </span>
      <div>
        <p className="text-[9px] tracking-wider uppercase text-muted">Call to book</p>
        <p className="text-[13px] font-semibold text-(--text-b)">{PHONE_DISPLAY}</p>
      </div>
    </Button>
  );
}

// ─── Section 1: Ride Section ──────────────────────────────────────────────────

export function RideSection() {
  return (
    <section aria-labelledby="ride-heading" className="bg-surface-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── LEFT — Car image ── */}
          <div className="relative w-full lg:w-1/2 shrink-0 flex items-center justify-center">

            {/* Soft glow ring behind car */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-10 scale-75 bg-accent"
              aria-hidden="true"
            />

            {/* Stat pills — floating */}
            <div className="absolute top-4 left-0 z-10 flex flex-col gap-2">
              {RIDE_STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2.5 bg-(--hero-primary-text) border border-(--border) shadow-sm rounded-2xl px-3.5 py-2.5"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-surface-soft">
                    <Icon icon={s.icon} width={14} className="text-(--accent)" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-(--text-b) leading-none">{s.value}</p>
                    <p className="text-[10px] text-muted mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <img
              src={CarImg}
              alt="SoloTaxis vehicle ready for pickup in Sheffield"
              className="relative z-10 w-full max-w-md drop-shadow-xl"
            />
          </div>

          {/* ── RIGHT — Copy ── */}
          <div className="flex-1">
            <Eyebrow icon="ph:map-pin">Sheffield's #1 Taxi Service</Eyebrow>

            <h2
              id="ride-heading"
              className="text-(--text-display-lg) lg:text-(--text-display-xl) font-bold text-(--text-b) tracking-tight leading-[1.1] mb-5"
            >
              Ride anywhere <br />
              with{" "}
              <span className="text-accent">SoloTaxis</span>
            </h2>

            <p className="text-(--text-body-sm) text-muted leading-relaxed mb-3 max-w-md">
              SoloTaxis partners with hundreds of local driver-partners across Sheffield,
              ready to take you to your destination safely and comfortably — around the clock.
            </p>
            <p className="text-(--text-body-xs) text-muted leading-relaxed mb-8 max-w-md">
              Pre-book, hail on demand, or schedule an airport transfer. Cash, card,
              Apple Pay and Google Pay all accepted on every single ride.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <PhoneButton />
              <StoreButton
                href={APP_STORE_URL}
                icon="ph:download-simple"
                label="Download App"
                sub="Get the"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Section 2: App Section ───────────────────────────────────────────────────

export function AppSection() {
  return (
    <section
      aria-labelledby="app-heading"
      className="relative py-24 px-4 overflow-hidden bg-surface-dark"
    >
      {/* Subtle dot-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-dot-grid"
      />

      {/* Accent glow — top right */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none bg-accent"
      />

      {/* Accent glow — bottom left */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none bg-accent"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── LEFT — Copy & features ── */}
          <div className="flex-1 order-2 lg:order-1">
            <Eyebrow icon="ph:device-mobile">Book in two taps</Eyebrow>

            <h2
              id="app-heading"
              className="text-(--text-display-lg) lg:text-(--text-display-xl) font-bold text-(--hero-primary-text) tracking-tight leading-[1.1] mb-5"
            >
              Your ride,{" "}
              <span className="px-3 py-1 rounded-xl inline-block bg-accent">
                one tap
              </span>{" "}
              away
            </h2>

            <p className="text-(--text-body-xs) text-muted-on-dark leading-relaxed mb-10 max-w-md">
              Our app puts Sheffield's best drivers at your fingertips. Request instantly,
              track in real-time, and pay however you like. Download on the{" "}
              <a
                href={APP_STORE_URL}
                className="text-hero-primary-softer underline underline-offset-2 hover:text-(--hero-primary-text) transition-colors"
              >
                App Store
              </a>{" "}
              or{" "}
              <a
                href={GOOGLE_PLAY_URL}
                className="text-hero-primary-softer underline underline-offset-2 hover:text-(--hero-primary-text) transition-colors"
              >
                Google Play
              </a>
              .
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {APP_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 bg-surface-white-soft border border-surface-white-soft rounded-2xl px-4 py-4 hover:bg-surface-white-soft-strong transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-accent-soft-strong">
                    <Icon icon={f.icon} width={15} className="text-(--accent)" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-(--text-body-sm) font-semibold text-(--hero-primary-text) mb-0.5">{f.title}</p>
                    <p className="text-muted-on-dark leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-3">
              <StoreButton
                href={APP_STORE_URL}
                icon="ph:apple-logo"
                label="App Store"
                sub="Download on the"
                dark
              />
              <StoreButton
                href={GOOGLE_PLAY_URL}
                icon="ph:google-play-logo"
                label="Google Play"
                sub="Get it on"
                dark
              />
            </div>
          </div>

          {/* ── RIGHT — Phone mockup ── */}
          <div className="relative w-full lg:w-[42%] shrink-0 order-1 lg:order-2 flex justify-center">

            {/* Glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute inset-x-8 inset-y-8 rounded-3xl blur-2xl opacity-20 pointer-events-none bg-accent"
            />

            {/* Floating badge — top right */}
            <div className="absolute top-4 -right-2 z-20 bg-(--hero-primary-text) rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 border border-(--border)">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-surface-soft">
                <Icon icon="ph:star-fill" width={13} className="text-(--accent)" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-(--text-b) leading-none">4.9</p>
                <p className="text-[10px] text-muted">App rating</p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-8 -left-2 z-20 bg-(--hero-primary-text) rounded-2xl shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 border border-(--border)">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-surface-soft">
                <Icon icon="ph:car" width={13} className="text-(--accent)" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-(--text-b) leading-none">4 min</p>
                <p className="text-[10px] text-muted">Avg. arrival</p>
              </div>
            </div>

            <img
              src={PhoneImg}
              alt="SoloTaxis mobile app showing live driver tracking"
              className="relative z-10 w-64 lg:w-72 drop-shadow-2xl rounded-3xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Default Export ───────────────────────────────────────────────────────────

export default function RideAndAppSections() {
  return (
    <>
      <RideSection />
      <AppSection />
    </>
  );
}