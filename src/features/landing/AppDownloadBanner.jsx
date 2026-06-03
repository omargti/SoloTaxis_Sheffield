import { Icon } from "@iconify/react";

const APP_DOWNLOAD_URL = "https://apps.apple.com/app/solotaxis";
const DRIVE_APPLY_URL  = "/drive/apply";

// ─── Data ─────────────────────────────────────────────────────────────────────

const RIDER_FEATURES = [
  { icon: "ph:lightning-fill",    text: "Book in under 60 seconds"  },
  { icon: "ph:map-pin-fill",      text: "Live driver tracking"       },
  { icon: "ph:shield-check-fill", text: "Safe, vetted drivers"       },
];

const DRIVER_FEATURES = [
  { icon: "ph:currency-gbp",      text: "Competitive weekly earnings" },
  { icon: "ph:clock-fill",        text: "Flexible hours — you decide" },
  { icon: "ph:handshake-fill",    text: "Full onboarding support"     },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Eyebrow({ icon, text }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-5"
      style={{
        background: "#fdf0f0",
        color: "var(--accent)",
        border: "0.5px solid #f5bfbf",
      }}
    >
      <Icon icon={icon} width={12} aria-hidden="true" />
      {text}
    </span>
  );
}

function Feature({ icon, text }) {
  return (
    <li className="flex items-center gap-3 text-[13.5px] text-gray-500">
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "#fdf0f0" }}
      >
        <Icon icon={icon} width={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
      </span>
      {text}
    </li>
  );
}

function StoreBtn({ href, icon, label, sub }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <Icon icon={icon} width={20} className="text-gray-800 shrink-0" aria-hidden="true" />
      <div className="text-left">
        <p className="text-[10px] text-gray-400 leading-none mb-0.5">Download on</p>
        <p className="text-[13px] font-semibold text-gray-900 leading-none">{sub}</p>
      </div>
    </a>
  );
}

// ─── Left Panel — Rider ───────────────────────────────────────────────────────

function RiderPanel() {
  return (
    <div className="relative flex flex-col justify-between gap-8 p-10 bg-white overflow-hidden">

      {/* Watermark */}
      <Icon
        icon="ph:device-mobile"
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 pointer-events-none select-none"
        style={{ color: "rgba(196,29,36,0.04)" }}
        width={260}
      />

      <div className="relative z-10">
        <Eyebrow icon="ph:device-mobile" text="Ride with us" />

        <h2
          id="download-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3"
        >
          Your ride,<br />
          <span style={{ color: "var(--accent)" }}>on demand.</span>
        </h2>

        <p className="text-[14.5px] text-gray-400 leading-relaxed max-w-xs mb-7">
          Book instantly across Sheffield. Track your driver in real-time and
          arrive in comfort — every single time.
        </p>

        <ul className="space-y-3 mb-8">
          {RIDER_FEATURES.map((f) => (
            <Feature key={f.text} {...f} />
          ))}
        </ul>
      </div>

      {/* Store buttons */}
      <div className="flex flex-wrap gap-3 relative z-10">
        <StoreBtn
          href={APP_DOWNLOAD_URL}
          icon="ph:apple-logo"
          label="Download SoloTaxis on the App Store"
          sub="App Store"
        />
        <StoreBtn
          href={APP_DOWNLOAD_URL}
          icon="ph:google-play-logo"
          label="Download SoloTaxis on Google Play"
          sub="Google Play"
        />
      </div>
    </div>
  );
}

// ─── Right Panel — Driver ─────────────────────────────────────────────────────

function DriverPanel() {
  return (
    <div
      className="relative flex flex-col justify-between gap-8 p-10 overflow-hidden"
      style={{ background: "var(--accent)" }}
    >
      {/* Grid pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Watermark */}
      <Icon
        icon="ph:steering-wheel"
        aria-hidden="true"
        className="absolute -bottom-8 -right-8 pointer-events-none select-none"
        style={{ color: "rgba(0,0,0,0.08)" }}
        width={260}
      />

      <div className="relative z-10">
        {/* Eyebrow — inverted */}
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-5 bg-white/15 text-white border border-white/20">
          <Icon icon="ph:steering-wheel" width={12} aria-hidden="true" />
          Drive with us
        </span>

        <h2
          id="drive-heading"
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-3"
        >
          Be your<br />
          own boss.
        </h2>

        <p className="text-[14.5px] text-white/70 leading-relaxed max-w-xs mb-7">
          Partner with SoloTaxis and start earning on your schedule. Immediate
          opportunities available across Sheffield.
        </p>

        <ul className="space-y-3 mb-8">
          {DRIVER_FEATURES.map((f) => (
            <li key={f.text} className="flex items-center gap-3 text-[13.5px] text-white/80">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/15">
                <Icon icon={f.icon} width={14} className="text-white" aria-hidden="true" />
              </span>
              {f.text}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="relative z-10">
        <a
          href={DRIVE_APPLY_URL}
          aria-label="Apply to drive with SoloTaxis"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white font-semibold text-sm transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 hover:bg-gray-50 group"
          style={{ color: "var(--accent)" }}
        >
          Apply to drive
          <Icon
            icon="ph:arrow-right"
            width={15}
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function DownloadDriveSection() {
  return (
    <section
      aria-labelledby="download-heading"
      className="my-20 px-4"
    >
      <div className=" mx-auto  overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 lg:grid-cols-2">
        <RiderPanel />
        <DriverPanel />
      </div>
    </section>
  );
}