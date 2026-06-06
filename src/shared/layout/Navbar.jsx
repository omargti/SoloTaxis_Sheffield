
import { useState, useCallback, memo, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../ui/button";
import Logo from "../../assets/logoo.png";
import { PHONE_DISPLAY, PHONE_RAW } from "../constants/brand";

const LINKS = [
  { label: "Ride",     href: "/ride",     icon: "ph:car" },
  { label: "Drive",    href: "/drive",    icon: "ph:steering-wheel" },
  { label: "Business", href: "/business", icon: "ph:briefcase" },
  { label: "About",    href: "/about",    icon: "ph:info" },
];

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
    const focusable = el.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
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

const NavLink = memo(({ href, label, active }) => {
  const navigate = useNavigate();
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={(e) => { e.preventDefault(); navigate(href); }}
      className={`nav-link px-5 ${active ? "text-[var(--color-text-primary)]" : ""}`}
    >
      {label}
    </a>
  );
});

const PhoneLink = memo(({ compact = false }) => (
  <a
    href={`tel:${PHONE_RAW}`}
    aria-label={`Call Solo Taxis on ${PHONE_DISPLAY}`}
    className="btn-ghost !py-2 !px-4 !min-h-[44px] !text-sm"
  >
    <Icon icon="ph:phone-call-fill" width={compact ? 16 : 18} aria-hidden="true" />
    {!compact && <span>{PHONE_DISPLAY}</span>}
  </a>
));

const BookBtn = memo(({ compact = false, onClick }) => (
  <Button
    onClick={onClick}
    ariaLabel="Book a ride online"
    icon="ph:calendar-check-fill"
    iconClass="w-4 h-4"
    className={`btn-primary !py-2 !min-h-[44px] ${compact ? "!px-3 !text-xs" : "!px-4 !text-sm"}`}
  >
    {compact ? "Book" : "Book a ride"}
  </Button>
));

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate     = useNavigate();
  const scrolled     = useScrolled();
  const [open, setOpen] = useState(false);
  const drawerRef    = useRef(null);

  const close  = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(p => !p), []);
  const goBook = useCallback(() => { close(); navigate("/booking"); }, [close, navigate]);

  useFocusTrap(drawerRef, open);

  useEffect(() => {
    const el = drawerRef.current;
    if (!el) return;
    el.addEventListener("close", close);
    return () => el.removeEventListener("close", close);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header py-4 ${scrolled ? "scrolled" : ""}`}>
        <nav aria-label="Main" className="max-w-7xl mx-auto flex items-center h-14 px-4 sm:px-6 gap-4">

          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            aria-label="Home"
            className="flex items-center shrink-0"
          >
            <img src={Logo} alt="Solo Taxis logo" className="h-12 logo-white" />
          </a>

          <ul className="hidden lg:flex items-center list-none m-0 p-0 ml-4">
            {LINKS.map(({ label, href }) => (
              <li key={href}>
                <NavLink href={href} label={label} active={pathname === href} />
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center ml-auto gap-3">
            <PhoneLink />
            <BookBtn onClick={goBook} />
          </div>

          <div className="flex lg:hidden items-center ml-auto gap-2">
            <PhoneLink compact />
            <BookBtn compact onClick={goBook} />
            <button
              onClick={toggle}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-[4px] transition-colors"
              style={{ color: open ? "var(--color-primary)" : "var(--color-text-primary)" }}
            >
              <Icon icon={open ? "ph:x" : "ph:list"} width={22} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div aria-hidden="true" onClick={close}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" />

          <div
            ref={drawerRef}
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-y-0 right-0 z-50 w-72 flex flex-col lg:hidden outline-none card !rounded-none !border-l !border-y-0 !border-r-0"
          >
            <div className="flex items-center justify-between px-5 h-14 border-b border-[var(--color-border)]">
              <span className="font-display text-lg text-[var(--color-text-primary)]">
                Solo <span className="text-accent">Taxis</span>
              </span>
              <button
                onClick={close}
                aria-label="Close menu"
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-[var(--color-primary)]"
              >
                <Icon icon="ph:x" width={22} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
              <ul role="list" className="space-y-1 list-none p-0 m-0">
                {LINKS.map(({ label, href, icon }) => (
                  <li key={href}>
                    <button
                      onClick={() => { close(); navigate(href); }}
                      aria-current={pathname === href ? "page" : undefined}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-[4px] nav-link !normal-case !text-sm min-h-[44px]"
                      style={{
                        color: pathname === href ? "var(--color-text-primary)" : "var(--color-text-muted)",
                        backgroundColor: pathname === href ? "var(--accent-soft)" : "transparent",
                      }}
                    >
                      <Icon icon={icon} width={18} aria-hidden="true" className="text-accent" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-4 py-4 border-t border-[var(--color-border)] flex flex-col gap-3">
              <a href={`tel:${PHONE_RAW}`} className="btn-ghost w-full !min-h-[44px]">
                <Icon icon="ph:phone-call-fill" width={16} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <Button onClick={goBook} ariaLabel="Book a ride online" icon="ph:calendar-check-fill"
                className="btn-primary w-full !min-h-[44px]">
                Book a ride
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
