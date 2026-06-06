import { memo } from "react";
import { Icon } from "@iconify/react";

const STATS = [
  { value: "4.9", label: "Avg rating", icon: "ph:star-fill" },
  { value: "12k+", label: "Reviews", icon: "ph:chat-circle-text" },
  { value: "98%", label: "On time", icon: "ph:clock" },
];

const TESTIMONIALS = [
  {
    id: 1,
    featured: true,
    text: "Solo Taxis has completely changed how I commute. The driver was early, the car was spotless, and I made my morning meeting with five minutes to spare. I've tried every taxi app in the city — none come close to this level of reliability. Absolute game changer.",
    rating: 5,
    name: "Sarah Rahman",
    initials: "SR",
    meta: "London → Heathrow",
    metaIcon: "ph:map-pin",
    tag: "Airport run",
    tagIcon: "ph:car",
  },
  {
    id: 2,
    text: "Booked late at night and the driver arrived in under 8 minutes. Professional, quiet, and safe. Exactly what you want at midnight.",
    rating: 5,
    name: "James Mitchell",
    initials: "JM",
    meta: "Late night ride",
    metaIcon: "ph:moon",
  },
  {
    id: 3,
    text: "Used Solo Taxis for my whole team's airport transfers. Every single car showed up on time. Will 100% use again for company travel.",
    rating: 4.5,
    name: "Priya Kapoor",
    initials: "PK",
    meta: "Business travel",
    metaIcon: "ph:briefcase",
  },
  {
    id: 4,
    text: "The phone booking was so easy and the driver called ahead. My elderly mum uses Solo Taxis now — they treat her brilliantly every time.",
    rating: 5,
    name: "David Walsh",
    initials: "DW",
    meta: "Regular rider",
    metaIcon: "ph:heart",
  },
  {
    id: 5,
    text: "Fair pricing, no surge nonsense. The car was clean and the driver helped with my luggage without being asked. That's rare these days.",
    rating: 5,
    name: "Leila Nazari",
    initials: "LN",
    meta: "Airport transfer",
    metaIcon: "ph:airplane-takeoff",
  },
];

const Stars = memo(({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Icon key={`f${i}`} icon="ph:star-fill" width={13} className="text-accent" />
      ))}
      {half && <Icon icon="ph:star-half-fill" width={13} className="text-accent" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Icon key={`e${i}`} icon="ph:star" width={13} className="text-[var(--color-border)]" />
      ))}
    </div>
  );
});

const Avatar = memo(({ initials }) => (
  <div className="flex items-center justify-center w-9 h-9 rounded-full text-micro font-medium shrink-0 bg-[var(--color-surface-2)] text-[var(--color-primary)] border border-[var(--color-border)]">
    {initials}
  </div>
));

const Card = memo(({ t }) => (
  <div className={`relative flex flex-col gap-3 card p-5 transition-all duration-200 ${t.featured ? "lg:col-span-2 border-[var(--color-primary)]" : ""}`}>
    {t.featured && (
      <span className="absolute -top-3 left-4 text-overline font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-accent text-[var(--color-text-primary)]">
        Top review
      </span>
    )}

    <Icon icon="ph:quotes" width={48} className="testimonial-quote opacity-100" aria-hidden="true" />

    <p className={`text-muted leading-relaxed flex-1 ${t.featured ? "text-body-sm" : "text-caption"}`}>
      {t.text}
    </p>

    <Stars rating={t.rating} />

    <div className="flex items-center gap-2.5 pt-3 border-t border-[var(--color-border)]">
      <Avatar initials={t.initials} />
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-caption text-[var(--color-text-primary)] truncate">{t.name}</p>
        <p className="text-micro text-muted flex items-center gap-1 mt-0.5">
          <Icon icon={t.metaIcon} width={11} aria-hidden="true" />
          {t.meta}
        </p>
      </div>
      {t.tag && (
        <span className="inline-flex items-center gap-1 text-micro text-muted bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-full px-2.5 py-1 shrink-0">
          <Icon icon={t.tagIcon} width={11} aria-hidden="true" />
          {t.tag}
        </span>
      )}
    </div>
  </div>
));

const StatCard = memo(({ stat }) => (
  <div className="flex flex-col items-center gap-1 card px-5 py-4">
    <Icon icon={stat.icon} width={18} className="text-accent" aria-hidden="true" />
    <span className="text-h4 font-semibold text-accent">{stat.value}</span>
    <span className="text-micro text-muted tracking-wide uppercase">{stat.label}</span>
  </div>
));

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-surface)]" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-11">
          <span className="section-eyebrow mb-4">
            <Icon icon="ph:seal-check-fill" width={13} aria-hidden="true" />
            Trusted by thousands
          </span>
          <h2 id="testimonials-heading" className="section-heading mb-3">
            Riders love <span className="text-accent">Solo Taxis</span>
          </h2>
          <p className="text-muted text-body-sm max-w-sm mx-auto">
            Honest reviews from real passengers across every route.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-11">
          {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {TESTIMONIALS.map((t) => <Card key={t.id} t={t} />)}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-11">
          <a href="/booking" className="btn-primary">
            <Icon icon="ph:calendar-check-fill" width={15} aria-hidden="true" />
            Book your ride
          </a>
          <button type="button" className="btn-secondary">
            <Icon icon="ph:chat-circle-text" width={15} aria-hidden="true" />
            See all reviews
          </button>
        </div>
      </div>
    </section>
  );
}
