import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";

const PHONE_RAW = "01179252626";
const PHONE_DISPLAY = "01179 25 26 26";
const APP_STORE_URL = "https://apps.apple.com/app/solotaxis";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/solotaxis";
const CURRENT_YEAR = new Date().getFullYear();

/** Four footer navigation columns */

const NAV_COLUMNS = [
  {
    label: "Ride",
    links: [
      { label: "Ride",      href: "/ride"      },
      { label: "Services",  href: "/services"  },
      { label: "Locations", href: "/locations" },
      { label: "Airports",  href: "/airports"  },
      { label: "Help",      href: "/help"      },
      { label: "Feedback",  href: "/feedback"  },
      { label: "Students",  href: "/students"  },
    ],
  },
  {
    label: "Business",
    links: [
      { label: "Business",          href: "/business"           },
      { label: "Corporate accounts", href: "/business/corporate" },
      { label: "Events transport",   href: "/business/events"    },
    ],
  },
  {
    label: "Drive",
    links: [
      { label: "Drive",            href: "/drive"              },
      { label: "Become a driver",  href: "/drive/apply"        },
      { label: "Requirements",     href: "/drive/requirements" },
      { label: "Earnings",         href: "/drive/earnings"     },
    ],
  },
  {
    label: "About",
    links: [
      { label: "About soloTaxis", href: "/about"         },
      { label: "Our history",     href: "/about/history" },
      { label: "Brands",          href: "/brands"        },
      { label: "Partners",        href: "/partners"      },
      { label: "App",             href: "/app"           },
      { label: "Careers",         href: "/careers"       },
      { label: "Press",           href: "/press"         },
    ],
  },
];

/** Legal / policy links in bottom bar */
const LEGAL_LINKS = [
  { label: "Privacy policy",   href: "/privacy"       },
  { label: "Terms of service", href: "/terms"         },
  { label: "Cookie settings",  href: "/cookies"       },
  { label: "Accessibility",    href: "/accessibility" },
];

/** Social media channels */
const SOCIAL_LINKS = [
  {
    label: "soloTaxis on Facebook",
    href: "https://facebook.com/solotaxis",
    icon: "ph:facebook-logo",
  },
  {
    label: "soloTaxis on X (Twitter)",
    href: "https://x.com/solotaxis",
    icon: "ph:x-logo",
  },
  {
    label: "soloTaxis on Instagram",
    href: "https://instagram.com/solotaxis",
    icon: "ph:instagram-logo",
  },
  {
    label: "soloTaxis on LinkedIn",
    href: "https://linkedin.com/company/solotaxis",
    icon: "ph:linkedin-logo",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** soloTaxis wordmark */
function FooterLogo() {
  return (
    <a
      href="/"
      aria-label="soloTaxis — back to homepage"
      className="
        font-['Syne',sans-serif] text-[22px] font-extrabold
        text-white tracking-tight select-none
        focus-visible:outline-none focus-visible:ring-2
        rounded-sm
      "
      style={{
        "--tw-ring-color": "var(--accent)",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
    >
      soloTaxis
      <span aria-hidden="true" style={{ color: "var(--accent)" }}>.</span>
    </a>
  );
}

/** Apple App Store button */
function AppStoreButton() {
  return (
    <Button
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="Download soloTaxis on the App Store"
      icon="ph:apple-logo"
      iconClass="w-5.5 h-5.5"
      className="
        px-4 py-2.5 min-w-37
        border rounded-[10px] text-white
        transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2
      "
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
        "--tw-ring-color": "white",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
    >
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] uppercase tracking-wide" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Download on the</span>
        <span className="text-[14px] font-semibold">App Store</span>
      </span>
    </Button>
  );
}

/** Google Play button */
function GooglePlayButton() {
  return (
    <Button
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="Get soloTaxis on Google Play"
      className="
        px-4 py-2.5 min-w-37
        border rounded-[10px] text-white
        transition-all duration-150
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2
      "
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
        "--tw-ring-color": "white",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M3 20.5v-17l17 8.5-17 8.5z" fill="#4CAF50" />
        <path d="M3 3.5l9.5 9.5L3 20.5V3.5z" fill="#81C784" />
        <path d="M3 3.5l9.5 9.5 4.5-4.5L3 3.5z" fill="#E53935" />
        <path d="M3 20.5l9.5-9.5 4.5 4.5L3 20.5z" fill="#FFC107" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] uppercase tracking-wide" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Get it on</span>
        <span className="text-[14px] font-semibold">Google Play</span>
      </span>
    </Button>
  );
}

/** Single navigation column */
function NavColumn({ label, links }) {
  return (
    <div>
      <h3 className="text-[10px] uppercase tracking-[2.5px] font-medium mb-4.5" style={{ color: "var(--footer-text-muted)" }}>
        {label}
      </h3>
      <ul role="list" className="flex flex-col gap-2.75">
        {links.map(({ label: linkLabel, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-[15px] text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm"
              style={{
                "--tw-ring-color": "var(--accent)",
                "--tw-ring-offset-color": "var(--footer-bg)"
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--footer-text-hover)")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Social icon button */
function SocialButton({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8.5 h-8.5 flex items-center justify-center border rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        borderColor: "var(--footer-social-border)",
        color: "rgba(255, 255, 255, 0.6)",
        "--tw-ring-color": "white",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
        e.target.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = "var(--footer-social-border)";
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "rgba(255, 255, 255, 0.6)";
      }}
    >
      <Icon icon={icon} width={15} height={15} aria-hidden="true" />
    </a>
  );
}

// ─── Sticky bottom CTA bar (matches reference screenshot) ─────────────────────
// Appears on scroll — can be toggled or always visible on mobile.

export function StickyBookBar() {
  return (
    <div
      aria-label="Quick booking bar"
      className="sticky bottom-0 z-50 backdrop-blur-sm flex items-center justify-center gap-3 px-4 py-3 lg:hidden"
      style={{
        backgroundColor: "rgba(31, 41, 55, 0.95)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      <Button
        href={`tel:${PHONE_RAW}`}
        ariaLabel={`Call soloTaxis on ${PHONE_DISPLAY}`}
        icon="ph:phone-call"
        iconClass="w-3.75 h-3.75"
        className="flex-1 px-4 py-2.5 rounded-lg text-[13px] font-medium justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: "white",
          color: "#111827",
          "--tw-ring-color": "#111827",
          "--tw-ring-offset-color": "var(--footer-bg)"
        }}
      >
        <span style={{ color: "#9ca3af", fontWeight: "normal" }}>Book on</span>
        <span style={{ fontWeight: "600" }}>{PHONE_DISPLAY}</span>
      </Button>
      <Button
        href={APP_STORE_URL}
        ariaLabel="Download the soloTaxis app"
        icon="ph:download-simple"
        iconClass="w-3.75 h-3.75"
        className="flex-1 px-4 py-2.5 rounded-lg text-[13px] font-medium justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          borderColor: "rgba(255, 255, 255, 0.2)",
          "--tw-ring-color": "white",
          "--tw-ring-offset-color": "var(--footer-bg)"
        }}
      >
        Download the app
      </Button>
    </div>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="font-['DM_Sans',sans-serif]"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >

      {/* ── Top row: Logo + App store buttons ── */}
      <div className="max-w-6xl mx-auto px-8 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-b" style={{ borderColor: "var(--footer-border)" }}>
        <FooterLogo />
        <div
          className="flex flex-col sm:flex-row gap-3"
          aria-label="Download the soloTaxis app"
        >
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>

      {/* ── Navigation columns ── */}
      <nav
        aria-label="Footer navigation"
        className="max-w-6xl mx-auto px-8 py-10 border-b"
        style={{ borderColor: "var(--footer-border)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {NAV_COLUMNS.map((col) => (
            <NavColumn key={col.label} label={col.label} links={col.links} />
          ))}
        </div>
      </nav>

      {/* ── Bottom bar: copyright + legal + social ── */}
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">

        {/* Copyright */}
        <p className="text-[12px] order-3 md:order-1" style={{ color: "var(--footer-text-muted)" }}>
          &copy; {CURRENT_YEAR} soloTaxis Ltd. All rights reserved.
        </p>

        {/* Legal links */}
        <nav
          aria-label="Legal links"
          className="flex flex-wrap justify-center gap-x-5 gap-y-1 order-2"
        >
          {LEGAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[12px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 rounded-sm"
              style={{ color: "var(--footer-text-muted)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--footer-text-hover)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--footer-text-muted)")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div
          aria-label="Social media"
          className="flex gap-2 order-1 md:order-3"
        >
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.href} {...social} />
          ))}
        </div>

      </div>
    </footer>
  );
}

