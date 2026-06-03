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

const AVATAR_STYLES = {
  red:   { bg: "var(--surface-soft)", color: "var(--accent)" },
  blue:  { bg: "#e6f1fb", color: "#185fa5" },
  green: { bg: "#eaf3de", color: "#3b6d11" },
  amber: { bg: "#faeeda", color: "#854f0b" },
  teal:  { bg: "#e1f5ee", color: "#0f6e56" },
};

// ─── Sub-components ────────────────────────────────────────────────────────────

const Stars = memo(({ rating }) => {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: full  }).map((_, i) => (
        <Icon key={`f${i}`} icon="ph:star-fill"      width={13} className="text-amber-400" />
      ))}
      {half && <Icon icon="ph:star-half-fill" width={13} className="text-amber-400" />}
      {Array.from({ length: empty }).map((_, i) => (
        <Icon key={`e${i}`} icon="ph:star"           width={13} className="text-amber-200" />
      ))}
    </div>
  );
});

const Avatar = memo(({ initials, color }) => {
  const style = AVATAR_STYLES[color] || AVATAR_STYLES.red;
  return (
    <div
      className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-medium shrink-0"
      style={{ background: style.bg, color: style.color }}
    >
      {initials}
    </div>
  );
});

const Card = memo(({ t }) => (
  <div
    className={`relative flex flex-col gap-3 rounded-2xl p-5 transition-all duration-200 group
      bg-white border hover:border-gray-200 hover:shadow-md
      ${t.featured
        ? "border-(--accent) shadow-sm lg:col-span-2"
        : "border-gray-100"}`}
  >
    {/* Featured badge */}
    {t.featured && (
      <span
        className="absolute -top-3 left-4 text-white text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full"
        style={{ background: "var(--accent)" }}
      >
        Top review
      </span>
    )}

    {/* Quote icon */}
    <Icon
      icon="ph:quotes"
      width={22}
      style={{ color: "var(--accent)", opacity: 0.55 }}
      aria-hidden="true"
    />

    {/* Review text */}
    <p className={`text-gray-500 leading-relaxed flex-1 ${t.featured ? "text-[15px]" : "text-[13.5px]"}`}>
      {t.text}
    </p>

    {/* Stars */}
    <Stars rating={t.rating} />

    {/* Footer */}
    <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
      <Avatar initials={t.initials} color={t.color} />
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-medium text-gray-900 truncate">{t.name}</p>
        <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
          <Icon icon={t.metaIcon} width={11} aria-hidden="true" />
          {t.meta}
        </p>
      </div>
      {t.tag && (
        <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1 shrink-0">
          <Icon icon={t.tagIcon} width={11} aria-hidden="true" />
          {t.tag}
        </span>
      )}
    </div>
  </div>
));

const StatCard = memo(({ stat }) => (
  <div className="flex flex-col items-center gap-1 bg-gray-50 rounded-xl px-5 py-4">
    <Icon icon={stat.icon} width={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
    <span className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>{stat.value}</span>
    <span className="text-[11px] text-gray-400 tracking-wide uppercase">{stat.label}</span>
  </div>
));

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-4"
            style={{ background: "var(--surface-soft)", color: "var(--accent)", border: "0.5px solid var(--accent-border)" }}
          >
            <Icon icon="ph:seal-check-fill" width={13} aria-hidden="true" />
            Trusted by thousands
          </span>

          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-none mb-3"
          >
            Riders love{" "}
            <span style={{ color: "var(--accent)" }}>SoloTaxis</span>
          </h2>

          <p className="text-gray-400 text-[15px] max-w-sm mx-auto">
            Honest reviews from real passengers across every route.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-12">
          {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {TESTIMONIALS.map((t) => <Card key={t.id} t={t} />)}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2"
            style={{ background: "var(--accent)" }}
          >
            <Icon icon="ph:phone-call" width={15} aria-hidden="true" />
            Book your ride
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-gray-500 text-sm border border-gray-200 bg-white hover:bg-gray-50 transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
            <Icon icon="ph:chat-circle-text" width={15} aria-hidden="true" />
            See all reviews
          </button>
        </div>

      </div>
    </section>
  );
}