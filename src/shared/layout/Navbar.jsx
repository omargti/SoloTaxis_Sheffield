

import { useState, useCallback, memo, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../ui/button";
import Logo from "../../assets/logoo.png";

// ─── Constants ────────────────────────────────────────────────────────────

const LINKS = [
  { label: "Ride",     href: "/ride",     icon: "ph:car" },
  { label: "Drive",    href: "/drive",    icon: "ph:steering-wheel" },
  { label: "Business", href: "/business", icon: "ph:briefcase" },
  { label: "About",    href: "/about",    icon: "ph:info" },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > threshold));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [threshold]);
  return scrolled;
}

function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const el = ref.current;
    const focusable = el.querySelectorAll(
      'a,button,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first)?.focus();
      }
    };
    const esc = (e) => { if (e.key === "Escape") el.dispatchEvent(new Event("close")); };

    el.addEventListener("keydown", trap);
    el.addEventListener("keydown", esc);
    return () => { el.removeEventListener("keydown", trap); el.removeEventListener("keydown", esc); };
  }, [active, ref]);
}

// ─── Sub-components (memo = skip re-render if props unchanged) ────────────────

const NavLink = memo(({ href, label, active }) => {
  const navigate = useNavigate();
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); navigate(href); }}
      className="relative flex items-center h-full px-5 border-l transition-colors duration-150 group"
      style={{
        borderColor: "var(--border)",
        color: active ? "var(--accent)" : "var(--text)",
        fontSize: "var(--text-body-xs)",
        fontWeight: active ? "var(--weight-medium)" : "var(--weight-regular)",
        backgroundColor: "transparent"
      }}
      onMouseEnter={(e) => !active && (e.target.style.color = "var(--text-b)", e.target.style.backgroundColor = "rgba(0, 0, 0, 0.02)")}
      onMouseLeave={(e) => !active && (e.target.style.color = "var(--text)", e.target.style.backgroundColor = "transparent")}
    >
      {label}
      <span
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-0.5 origin-left transition-transform duration-200"
        style={{
          backgroundColor: "var(--accent)",
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left"
        }}
        onMouseEnter={(e) => !active && (e.parentElement.style.transform = "scaleX(1)")}
        onMouseLeave={(e) => !active && (e.parentElement.style.transform = "scaleX(0)")}
      />
    </a>
  );
});

const BookBtn = memo(({ compact = false, onClick }) => (
  <Button
    onClick={onClick}
    ariaLabel="Book a ride"
    icon="ph:phone-call"
    iconClass={compact ? "w-3.5 h-3.5" : "w-3.5 h-3.5"}
    className="flex p-3 items-center gap-1.5 rounded-md border-[1.5px] font-medium
      transition-all duration-150 active:scale-95 focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-offset-2"
    style={{
      borderColor: "var(--text-b)",
      color: "var(--text-b)",
      backgroundColor: "var(--bg)",
      fontSize: compact ? "var(--text-body-xs)" : "var(--text-body-sm)",
      "--tw-ring-color": "var(--text-b)"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "var(--text-b)";
      e.currentTarget.style.color = "var(--bg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "var(--bg)";
      e.currentTarget.style.color = "var(--text-b)";
    }}
  >
    {compact ? "Book" : "Book a ride"}
  </Button>
));

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const { pathname }          = useLocation();
  const navigate              = useNavigate();
  const scrolled              = useScrolled();
  const [open, setOpen]       = useState(false);
  const drawerRef             = useRef(null);

  const close    = useCallback(() => setOpen(false), []);
  const toggle   = useCallback(() => setOpen(p => !p), []);
  const goBook   = useCallback(() => { close(); navigate("/booking"); }, [close, navigate]);

 
  useFocusTrap(drawerRef, open);

  
  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    el.addEventListener("close", close);
    return () => el.removeEventListener("close", close);
  }, [close]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 py-5 transition-shadow duration-200" style={{ backgroundColor: "var(--bg)", boxShadow: scrolled ? "var(--shadow)" : "none" }}>
        <nav aria-label="Main" className="max-w-7xl mx-auto flex items-stretch h-14 px-4 sm:px-6">

          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            aria-label="Home"
            className="flex items-center pr-4 font-bold tracking-tight"
            style={{ color: "var(--text-b)" }}
          >
            <img src={Logo} alt="SoloTaxis logo" className="h-16" />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-stretch list-none m-0 p-0">
            {LINKS.map(({ label, href }) => (
              <li key={href} className="flex items-center">
                <NavLink href={href} label={label} active={pathname === href} />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center ml-auto">
            <BookBtn onClick={goBook} />
          </div>

          {/* Mobile: compact book + hamburger */}
          <div className="flex lg:hidden items-center ml-auto gap-2">
            <BookBtn compact onClick={goBook} />
            <button
              onClick={toggle}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2"
              style={{
                color: "var(--text)",
                "--tw-ring-color": "var(--accent)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-b)", e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)", e.currentTarget.style.backgroundColor = "transparent")}
            >
              <Icon icon={open ? "ph:x" : "ph:list"} width={20} aria-hidden="true" />
            </button>
          </div>

        </nav>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────────── */}
      {open && (
        <>
          {/* Backdrop */}
          <div aria-hidden="true" onClick={close}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 lg:hidden" />

          {/* Drawer */}
          <div
            ref={drawerRef}
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-y-0 right-0 z-50 w-64 shadow-2xl flex flex-col lg:hidden outline-none"
            style={{ backgroundColor: "var(--bg)" }}
          >

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-14 border-b" style={{ borderColor: "var(--border)" }}>
              <span className="font-bold" style={{ color: "var(--text-b)" }}>
                Solo<span style={{ color: "var(--accent)" }}>Taxis</span>
              </span>
              <button
                onClick={close}
                aria-label="Close menu"
                className="p-1.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2"
                style={{ color: "var(--text)", "--tw-ring-color": "var(--accent)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--text-b)", e.target.style.backgroundColor = "rgba(0, 0, 0, 0.05)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--text)", e.target.style.backgroundColor = "transparent")}
              >
                <Icon icon="ph:x" width={18} aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
              <ul role="list" className="space-y-0.5 list-none p-0 m-0">
                {LINKS.map(({ label, href, icon }) => (
                  <li key={href}>
                    <button
                      onClick={() => { close(); navigate(href); }}
                      aria-current={pathname === href ? "page" : undefined}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2"
                      style={{
                        color: pathname === href ? "var(--accent)" : "var(--text)",
                        backgroundColor: pathname === href ? "var(--accent-soft)" : "transparent",
                        fontWeight: pathname === href ? "var(--weight-medium)" : "var(--weight-regular)",
                        fontSize: "var(--text-body-sm)",
                        "--tw-ring-color": "var(--accent)"
                      }}
                      onMouseEnter={(e) => !pathname && (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.03)")}
                      onMouseLeave={(e) => !pathname && (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <Icon icon={icon} width={18} aria-hidden="true" style={{ color: pathname === href ? "var(--accent)" : "var(--text-grey)" }} />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Drawer CTA */}
            <div className="px-4 py-4 border-t" style={{ borderColor: "var(--border)" }}>
              <Button
                onClick={goBook}
                ariaLabel="Book a ride"
                icon="ph:phone-call"
                iconClass="w-3.75 h-3.75"
                className="w-full py-2.5 rounded-lg font-medium transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: "var(--text-b)",
                  color: "var(--bg)",
                  fontSize: "var(--text-body-sm)",
                  "--tw-ring-color": "var(--text-b)"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--text-b)")}
              >
                Book a ride
              </Button>
            </div>

          </div>
        </>
      )}
    </>
  );
}
