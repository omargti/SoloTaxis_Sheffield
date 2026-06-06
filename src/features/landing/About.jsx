import { Icon } from "@iconify/react";
import AboutImg from "../../assets/about.png";
import Button from "../../shared/ui/button";
import { ABOUT_SECTION_ID } from "../../shared/utils/scrollToSection";

const STATS = [
  { value: "500+", label: "Driver Partners",  icon: "ph:steering-wheel" },
  { value: "24/7", label: "Always Available", icon: "ph:clock"           },
  { value: "98%",  label: "On-Time Rate",     icon: "ph:check-circle"    },
  { value: "10k+", label: "Happy Riders",     icon: "ph:users"           },
];

const About = () => {
  return (
    <section className="py-20 px-4" id={ABOUT_SECTION_ID}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[var(--space-14)]">

          {/* ── LEFT — Image ───────────────────────────────── */}
          <div className="relative w-full lg:w-1/2 shrink-0">

            {/* Accent border frame */}
            <div />

            <img
              src={AboutImg}
              alt="Solo Taxis team and fleet in Sheffield"
              className="block w-full"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-10 left-5 z-20 flex items-center gap-2.5 card px-4 py-3">
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
            <span className="section-eyebrow mb-5">
              <Icon icon="ph:info" width={12} aria-hidden="true" />
              About Us
            </span>

            <h2 className="section-heading mb-5">
              Your local <br className="hidden sm:block" />
              <span className="text-accent">Sheffield</span> taxi firm
            </h2>

            <p className="text-(--text-body-sm) text-muted leading-[var(--leading-relaxed)] mb-[var(--space-4)]">
              Solo Taxis is a locally based taxi and private hire company serving Sheffield
              and the surrounding area. We are proud to be part of the community we serve — connecting
              passengers with licensed, professional drivers who know the city inside and out.
            </p>
            <p className="text-(--text-body-sm) text-muted leading-[var(--leading-relaxed)] mb-[var(--space-4)]">
              Whether you need a quick ride across town, a pre-booked airport transfer, or a
              reliable lift home after a night out, we make getting around simple. Book by phone,
              online, or through our app — and enjoy fixed, transparent fares with service you
              can count on, 24 hours a day.
            </p>
            <p className="text-(--text-body-sm) text-muted leading-[var(--leading-relaxed)] mb-[var(--space-8)]">
              At Solo Taxis, we believe great taxi service starts locally: friendly drivers,
              fair pricing, and a team that is always here when Sheffield needs us.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-[var(--space-3)] mb-[var(--space-8)]">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-3 card px-4 py-3">
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
            <Button onClick={() => {}} className="btn-primary">
              <Icon icon="ph:arrow-right" width={15} aria-hidden="true" />
              More about Solo Taxis
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;