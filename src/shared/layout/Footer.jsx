import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";
import GooglePlayBadge from "../../assets/google-playstore-android-app.webp";
import { APP_STORE_URL, BRAND_NAME, FACEBOOK_URL, GOOGLE_PLAY_URL, INSTAGRAM_URL } from "../constants/brand";

const PHONE_RAW = "01179252626";
const PHONE_DISPLAY = "01179 25 26 26";
const CURRENT_YEAR = new Date().getFullYear();

const SERVICES = [
  "Ride",
  "Reserve",
  "Airport Transfers",
  "Corporate",
  "Courier",
  "Events & Tours",
];

/** Legal / policy links in bottom bar */
const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
];

/** Social media channels */
const SOCIAL_LINKS = [
  {
    label: `${BRAND_NAME} on Facebook`,
    href: FACEBOOK_URL,
    icon: "ph:facebook-logo",
  },
  {
    label: `${BRAND_NAME} on X (Twitter)`,
    href: "https://x.com/solotaxis",
    icon: "ph:x-logo",
  },
  {
    label: `${BRAND_NAME} on Instagram`,
    href: INSTAGRAM_URL,
    icon: "ph:instagram-logo",
  },
  {
    label: `${BRAND_NAME} on LinkedIn`,
    href: "https://linkedin.com/company/solotaxis",
    icon: "ph:linkedin-logo",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Solo Taxis wordmark */
function FooterLogo() {
  return (
    <a
      href="/"
      aria-label={`${BRAND_NAME} — back to homepage`}
      className="select-none focus-visible:outline-none focus-visible:ring-2 font-display"
      style={{
        fontSize: "var(--text-footer-logo)",
        fontWeight: 700,
        letterSpacing: "var(--tracking-tight)",
        color: "var(--footer-text-hover)",
        borderRadius: "var(--radius-sm)",
        "--tw-ring-color": "var(--accent)",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
    >
      {BRAND_NAME}
      <span aria-hidden="true" style={{ color: "var(--color-primary)" }}>.</span>
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
      ariaLabel={`Download ${BRAND_NAME} on the App Store`}
      icon="ph:apple-logo"
      imgSrc={GooglePlayBadge}
      iconClass="w-5.5 h-5.5"
      className="transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        padding: "var(--space-2_5) var(--space-4)",
        minWidth: "var(--footer-button-min-width)",
        borderColor: "var(--footer-cta-border)",
        borderRadius: "var(--radius-lg)",
        color: "var(--bg)",
        backgroundColor: "transparent",
        fontFamily: "var(--sans)",
        lineHeight: "var(--leading-tight)",
        "--tw-ring-color": "var(--bg)",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
    >
      <span className="flex flex-col" style={{ lineHeight: "var(--leading-tight)" }}>
        <span style={{ color: "var(--footer-text-muted-soft)", fontSize: "var(--text-footer-caption)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" }}>
          Download on the
        </span>
        <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-semibold)" }}>
          App Store
        </span>
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
      ariaLabel={`Get ${BRAND_NAME} on Google Play`}
      className="transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        padding: "var(--space-2_5) var(--space-4)",
        minWidth: "var(--footer-button-min-width)",
        borderColor: "var(--footer-cta-border)",
        borderRadius: "var(--radius-lg)",
        color: "var(--bg)",
        backgroundColor: "transparent",
        fontFamily: "var(--sans)",
        lineHeight: "var(--leading-tight)",
        "--tw-ring-color": "var(--bg)",
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
        <path d="M3 20.5v-17l17 8.5-17 8.5z" fill="var(--google-play-icon-green)" />
        <path d="M3 3.5l9.5 9.5L3 20.5V3.5z" fill="var(--google-play-icon-light-green)" />
        <path d="M3 3.5l9.5 9.5 4.5-4.5L3 3.5z" fill="var(--google-play-icon-red)" />
        <path d="M3 20.5l9.5-9.5 4.5 4.5L3 20.5z" fill="var(--google-play-icon-amber)" />
      </svg>
      <span className="flex flex-col" style={{ lineHeight: "var(--leading-tight)" }}>
        <span style={{ color: "var(--footer-text-muted-soft)", fontSize: "var(--text-footer-caption)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" }}>
          Get it on
        </span>
        <span style={{ fontSize: "var(--text-body-sm)", fontWeight: "var(--weight-semibold)" }}>
          Google Play
        </span>
      </span>
    </Button>
  );
}

/** Services offered — displayed as bullet points */
function ServicesList() {
  return (
    <div>
      <h3
        className="font-display focus-visible:outline-none focus-visible:ring-2"
        style={{
          color: "var(--footer-text-muted)",
          fontSize: "14px",
          letterSpacing: "0.1em",
          fontWeight: 600,
          textTransform: "uppercase",
          marginBottom: "var(--space-4)",
        }}
      >
        Our Services
      </h3>
      <ul role="list" className="footer-services">
        {SERVICES.map((service) => (
          <li key={service}>{service}</li>
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
      className="flex items-center justify-center border transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        width: "var(--footer-social-size)",
        height: "var(--footer-social-size)",
        borderColor: "var(--footer-social-border)",
        color: "var(--footer-social-icon)",
        borderRadius: "var(--radius-lg)",
        backgroundColor: "transparent",
        "--tw-ring-color": "white",
        "--tw-ring-offset-color": "var(--footer-bg)"
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = "var(--footer-social-border-hover)";
        e.target.style.backgroundColor = "var(--footer-social-bg-hover)";
        e.target.style.color = "var(--footer-social-hover)";
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = "var(--footer-social-border)";
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "var(--footer-social-icon)";
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
      className="sticky bottom-0 z-50 backdrop-blur-sm flex items-center justify-center lg:hidden"
      style={{
        gap: "var(--space-3)",
        padding: "var(--space-3) var(--space-4)",
        backgroundColor: "var(--footer-quickbar-bg)",
        borderTop: "1px solid var(--footer-quickbar-border)"
      }}
    >
      <Button
        href={`tel:${PHONE_RAW}`}
        ariaLabel={`Call ${BRAND_NAME} on ${PHONE_DISPLAY}`}
        icon="ph:phone-call"
        iconClass="w-3.75 h-3.75"
        className="flex-1 rounded-lg justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          padding: "var(--space-2_5) var(--space-4)",
          backgroundColor: "var(--bg)",
          color: "var(--text-b)",
          fontSize: "var(--text-footer-cta)",
          fontWeight: "var(--weight-medium)",
          borderRadius: "var(--radius-lg)",
          "--tw-ring-color": "var(--text-b)",
          "--tw-ring-offset-color": "var(--footer-bg)"
        }}
      >
        <span style={{ color: "var(--footer-cta-muted)", fontWeight: "var(--weight-regular)", fontSize: "var(--text-footer-caption)" }}>
          Book on
        </span>
        <span style={{ fontWeight: "var(--weight-semibold)", fontSize: "var(--text-footer-cta)" }}>
          {PHONE_DISPLAY}
        </span>
      </Button>
      <Button
        href={APP_STORE_URL}
        ariaLabel={`Download the ${BRAND_NAME} app`}
        icon="ph:download-simple"
        iconClass="w-3.75 h-3.75"
        className="flex-1 rounded-lg justify-center border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          padding: "var(--space-2_5) var(--space-4)",
          backgroundColor: "var(--footer-cta-bg)",
          color: "var(--footer-cta-text)",
          fontSize: "var(--text-footer-cta)",
          fontWeight: "var(--weight-medium)",
          borderRadius: "var(--radius-lg)",
          borderColor: "var(--footer-cta-border)",
          "--tw-ring-color": "var(--footer-cta-text)",
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
      className=""
      style={{ backgroundColor: "var(--footer-bg)", fontFamily: "var(--sans)" }}
    >

      {/* ── Top row: Logo + App store buttons ── */}
      <div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between border-b"
        style={{
          padding: "var(--space-14) var(--space-8)",
          gap: "var(--space-8)",
          borderColor: "var(--footer-border)"
        }}
      >
        <FooterLogo />
        <div
          className="flex flex-col sm:flex-row"
          style={{ gap: "var(--space-3)" }}
          aria-label={`Download the ${BRAND_NAME} app`}
        >
          <AppStoreButton />
          <GooglePlayButton />
        </div>
      </div>

      {/* ── Services ── */}
      <section
        aria-label="Services offered"
        className="max-w-6xl mx-auto"
        style={{
          padding: "var(--space-10) var(--space-8)",
          borderBottom: "1px solid var(--footer-border)",
        }}
      >
        <ServicesList />
      </section>

      {/* ── Bottom bar: copyright + legal + social ── */}
      <div className="footer-copyright-bar">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between flex-wrap"
        style={{
          padding: "var(--space-6) var(--space-8)",
          gap: "var(--space-4)"
        }}
      >

        {/* Copyright */}
        <p style={{ color: "var(--footer-text-muted)", fontSize: "var(--text-footer-legal)" }}>
          &copy; {CURRENT_YEAR} {BRAND_NAME} Ltd. All rights reserved.
        </p>

        {/* Legal links */}
        <nav
          aria-label="Legal links"
          className="flex flex-wrap justify-center"
          style={{ columnGap: "var(--space-5)", rowGap: "var(--space-1)" }}
        >
          {LEGAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 rounded-sm"
              style={{
                color: "var(--footer-text-muted)",
                fontSize: "var(--text-footer-legal)",
                borderRadius: "var(--radius-sm)"
              }}
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
          className="flex"
          style={{ gap: "var(--space-2)" }}
        >
          {SOCIAL_LINKS.map((social) => (
            <SocialButton key={social.href} {...social} />
          ))}
        </div>

      </div>
      </div>
    </footer>
  );
}

