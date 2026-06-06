import { Icon } from "@iconify/react";
import AboutImg from "../../assets/about.png";
import Button from "../../shared/ui/button";

const STATS = [
  { value: "500+", label: "Driver Partners",  icon: "ph:steering-wheel" },
  { value: "24/7", label: "Always Available", icon: "ph:clock"           },
  { value: "98%",  label: "On-Time Rate",     icon: "ph:check-circle"    },
  { value: "10k+", label: "Happy Riders",     icon: "ph:users"           },
];

const About = () => {
  return (
    <section className="my-[var(--space-20)] px-[var(--space-4)]" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[var(--space-14)]">

          {/* ── LEFT — Image ───────────────────────────────── */}
          <div className="relative w-full lg:w-1/2 shrink-0">

            {/* Accent border frame */}
            <div />

            <img
              src={AboutImg}
              alt="SoloTaxis team and fleet in Sheffield"
              className="block w-full"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-[var(--space-10)] left-[var(--space-5)] z-20 flex items-center gap-[var(--space-2_5)] bg-surface-white rounded-[var(--radius-xl)] shadow-md px-[var(--space-4)] py-[var(--space-3)] border border-(--border)">
              <div className="w-[var(--space-9)] h-[var(--space-9)] rounded-xl flex items-center justify-center shrink-0 bg-surface-soft">
                <Icon icon="ph:map-pin-fill" width={18} className="text-(--accent)" aria-hidden="true" />
              </div>
              <div>
                <p className="text-(--text-micro) text-muted leading-[var(--leading-none)] mb-[var(--space-0_5)]">Serving</p>
                <p className="text-(--text-caption) font-[var(--weight-semibold)] text-(--text-b) leading-[var(--leading-none)]">Sheffield & Beyond</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Content ────────────────────────────── */}
          <div className="flex-1">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-[var(--space-2_5)] text-(--text-micro) font-[var(--weight-medium)] tracking-[var(--tracking-wider)] uppercase rounded-[var(--radius-full)] px-[var(--space-3_5)] py-[var(--space-1_5)] mb-[var(--space-5)] bg-surface-soft text-(--accent) border border-(--accent-border)">
              <Icon icon="ph:info" width={12} aria-hidden="true" />
              About Us
            </span>

            <h2 className="text-(--text-display-lg) font-heading font-[var(--weight-bold)] text-(--text-b) tracking-[var(--tracking-tight)] leading-[var(--leading-tight)] mb-[var(--space-5)]">
              Sheffield's most <br className="hidden sm:block" />
              <span className="text-(--accent)">trusted</span> taxi service
            </h2>

            <p className="text-(--text-body-sm) text-muted leading-[var(--leading-relaxed)] mb-[var(--space-4)]">
              SoloTaxis is Sheffield's most trusted taxi and private hire service,
              with hundreds of active driver-partners on the road every day.
            </p>
            <p className="text-(--text-body-sm) text-muted leading-[var(--leading-relaxed)] mb-[var(--space-8)]">
              Our tech-driven, on-demand mobility platform supports our{' '}
              <strong className="font-[var(--weight-semibold)] text-(--accent)">
                local Sheffield community
              </strong>
              , helping passengers and drivers thrive — 24 hours a day, 7 days a week.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-[var(--space-3)] mb-[var(--space-8)]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-[var(--space-3)] bg-surface-white-soft border border-(--border) rounded-[var(--radius-xl)] px-[var(--space-4)] py-[var(--space-3)]"
                >
                  <div className="w-[var(--space-9)] h-[var(--space-9)] rounded-xl flex items-center justify-center shrink-0 bg-surface-soft">
                    <Icon icon={s.icon} width={17} className="text-(--accent)" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-(--text-body-sm) font-[var(--weight-bold)] text-(--text-b) leading-[var(--leading-none)]">{s.value}</p>
                    <p className="text-(--text-micro) text-muted mt-[var(--space-0_5)]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={() => {}}
              className="inline-flex items-center gap-[var(--space-2)] !text-white text-(--text-body-xs) font-[var(--weight-medium)] px-[var(--space-7)] py-[var(--space-3_5)] rounded-[var(--radius-xl)] transition-all duration-200 active:scale-95 bg-accent"
            >
              <Icon icon="ph:arrow-right" width={15} aria-hidden="true" />
              More about SoloTaxis
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;