import { memo } from "react";
import { Icon } from "@iconify/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "4.9", label: "Avg rating", icon: "ph:star-fill" },
  { value: "12k+", label: "Reviews", icon: "ph:chat-circle-text" },
  { value: "98%", label: "On time", icon: "ph:clock" },
];

const TESTIMONIALS = [
  {
    id: 1,
    featured: true,
    text: "SoloTaxis has completely changed how I commute. The driver was early, the car was spotless, and I made my morning meeting with five minutes to spare. I've tried every taxi app in the city — none come close to this level of reliability. Absolute game changer.",
    rating: 5,
    name: "Sarah Rahman",
    initials: "SR",
    meta: "London → Heathrow",
    metaIcon: "ph:map-pin",
    tag: "Airport run",
    tagIcon: "ph:car",
    color: "red",
  },
  {
    id: 2,
    text: "Booked late at night and the driver arrived in under 8 minutes. Professional, quiet, and safe. Exactly what you want at midnight.",
    rating: 5,
    name: "James Mitchell",
    initials: "JM",
    meta: "Late night ride",
    metaIcon: "ph:moon",
    color: "blue",
  },
  {
    id: 3,
    text: "Used SoloTaxis for my whole team's airport transfers. Every single car showed up on time. Will 100% use again for company travel.",
    rating: 4.5,
    name: "Priya Kapoor",
    initials: "PK",
    meta: "Business travel",
    metaIcon: "ph:briefcase",
    color: "green",
  },
  {
    id: 4,
    text: "The phone booking was so easy and the driver called ahead. My elderly mum uses SoloTaxis now — they treat her brilliantly every time.",
    rating: 5,
    name: "David Walsh",
    initials: "DW",
    meta: "Regular rider",
    metaIcon: "ph:heart",
    color: "amber",
  },
  {
    id: 5,
    text: "Fair pricing, no surge nonsense. The car was clean and the driver helped with my luggage without being asked. That's rare these days.",
    rating: 5,
    name: "Leila Nazari",
    initials: "LN",
    meta: "Airport transfer",
    metaIcon: "ph:airplane-takeoff",
    color: "teal",
  },
];

// ─── Avatar colors ─────────────────────────────────────────────────────────────

const AVATAR_CLASSES = {
  red:   "bg-surface-soft text-(--accent)",
  blue:  "bg-(--avatar-blue-soft) text-(--avatar-blue)",
  green: "bg-(--avatar-green-soft) text-(--avatar-green)",
  amber: "bg-(--avatar-amber-soft) text-(--avatar-amber)",
  teal:  "bg-(--avatar-teal-soft) text-(--avatar-teal)",
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const Stars = memo(({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-(--space-2_5)">
      {Array.from({ length: full }).map((_, i) => (
        <Icon key={`f${i}`} icon="ph:star-fill" width={13} className="text-(--accent)" />
      ))}
      {half && <Icon icon="ph:star-half-fill" width={13} className="text-(--accent)" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Icon key={`e${i}`} icon="ph:star" width={13} className="text-(--accent-border)" />
      ))}
    </div>
  );
});

const Avatar = memo(({ initials, color }) => {
  const classes = AVATAR_CLASSES[color] || AVATAR_CLASSES.red;
  return (
    <div className={`flex items-center justify-center w-(--space-9) h-(--space-9) rounded-(--radius-full) text-(--text-micro) font-(--weight-medium) shrink-0 ${classes}`}>
      {initials}
    </div>
  );
});

const Card = memo(({ t }) => (
  <div
    className={`relative flex flex-col gap-(--space-3) rounded-xl p-(--space-5) transition-all duration-200 group bg-surface-white border hover:border-(--accent-border) hover:shadow-md ${t.featured ? "border-(--accent) shadow-sm lg:col-span-2" : "border-(--border)"}`}
  >
    {t.featured && (
      <span className="absolute -top-(--space-3) left-(--space-4) text-white fs-overline font-(--weight-medium) tracking-wider uppercase px-(--space-3) py-(--space-1_5) rounded-(--radius-full) bg-(--accent)">
        Top review
      </span>
    )}

    <Icon icon="ph:quotes" width={22} className="text-(--accent) opacity-60" aria-hidden="true" />

    <p className={`text-muted leading-relaxed flex-1 ${t.featured ? "fs-body-sm" : "fs-caption"}`}>
      {t.text}
    </p>

    <Stars rating={t.rating} />

    <div className="flex items-center gap-(--space-2_5) pt-(--space-3) border-t border-(--border)">
      <Avatar initials={t.initials} color={t.color} />
      <div className="flex-1 min-w-0">
        <p className="fs-caption font-(--weight-medium) text-(--text-b) truncate">{t.name}</p>
        <p className="fs-micro text-muted flex items-center gap-(--space-1) mt-(--space-0_5)">
          <Icon icon={t.metaIcon} width={11} aria-hidden="true" />
          {t.meta}
        </p>
      </div>
      {t.tag && (
        <span className="inline-flex items-center gap-(--space-1) fs-micro text-muted bg-surface-white-soft border border-(--border) rounded-(--radius-full) px-(--space-2_5) py-(--space-1) shrink-0">
          <Icon icon={t.tagIcon} width={11} aria-hidden="true" />
          {t.tag}
        </span>
      )}
    </div>
  </div>
));

const StatCard = memo(({ stat }) => (
  <div className="flex flex-col items-center gap-(--space-1) bg-surface-white-soft rounded-xl px-(--space-5) py-(--space-4)">
    <Icon icon={stat.icon} width={18} className="text-(--accent)" aria-hidden="true" />
    <span className="fs-h4 font-(--weight-semibold) text-(--accent)">{stat.value}</span>
    <span className="fs-micro text-muted tracking-wide uppercase">{stat.label}</span>
  </div>
));

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section className="py-(--space-20) px-(--space-4) sm:px-(--space-6) bg-surface-white" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-(--space-11)">
          <span className="inline-flex items-center gap-(--space-2_5) fs-micro font-(--weight-medium) tracking-wider uppercase rounded-(--radius-full) px-(--space-3_5) py-(--space-1_5) mb-(--space-4) bg-surface-soft text-(--accent) border border-(--accent-border)">
            <Icon icon="ph:seal-check-fill" width={13} aria-hidden="true" />
            Trusted by thousands
          </span>

          <h2 id="testimonials-heading" className="fs-display-lg sm:fs-display-xl font-heading font-(--weight-bold) text-(--text-b) tracking-tight leading-none mb-(--space-3)">
            Riders love <span className="text-(--accent)">SoloTaxis</span>
          </h2>

          <p className="text-muted fs-body-sm max-w-sm mx-auto">
            Honest reviews from real passengers across every route.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-(--space-3) max-w-sm mx-auto mb-(--space-11)">
          {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--space-4) auto-rows-fr">
          {TESTIMONIALS.map((t) => <Card key={t.id} t={t} />)}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-(--space-3) mt-(--space-11)">
          <button className="inline-flex items-center gap-(--space-2) px-(--space-6) py-(--space-3) rounded-xl text-(--hero-primary-text) fs-body-sm font-(--weight-medium) bg-(--accent) transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2">
            <Icon icon="ph:phone-call" width={15} aria-hidden="true" />
            Book your ride
          </button>
          <button className="inline-flex items-center gap-(--space-2) px-(--space-6) py-(--space-3) rounded-xl text-muted fs-body-sm border border-(--border) bg-surface-white hover:bg-surface-white-soft transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--border)">
            <Icon icon="ph:chat-circle-text" width={15} aria-hidden="true" />
            See all reviews
          </button>
        </div>

      </div>
    </section>
  );
}