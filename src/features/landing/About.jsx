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
    <section className="my-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* ── LEFT — Image ───────────────────────────────── */}
          <div className="relative w-full lg:w-1/2 shrink-0">

            {/* Accent border frame */}
            <div
            />

            <img
              src={AboutImg}
              alt="SoloTaxis team and fleet in Sheffield"
              className=""
            />

            {/* Floating badge */}
            <div className="absolute -bottom-10 left-5 z-20 flex items-center gap-2.5 bg-white rounded-2xl shadow-md px-4 py-3 border border-gray-100">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--surface-soft)" }}
              >
                <Icon icon="ph:map-pin-fill" width={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 leading-none mb-0.5">Serving</p>
                <p className="text-[13px] font-semibold text-gray-900 leading-none">Sheffield & Beyond</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Content ────────────────────────────── */}
          <div className="flex-1">

            {/* Eyebrow */}
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-5"
              style={{ background: "var(--surface-soft)", color: "var(--accent)", border: "0.5px solid var(--accent-border)" }}
            >
              <Icon icon="ph:info" width={12} aria-hidden="true" />
              About Us
            </span>

            <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Sheffield's most <br className="hidden sm:block" />
              <span style={{ color: "var(--accent)" }}>trusted</span> taxi service
            </h2>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-4">
              SoloTaxis is Sheffield's most trusted taxi and private hire service,
              with hundreds of active driver-partners on the road every day.
            </p>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
              Our tech-driven, on-demand mobility platform supports our{" "}
              <strong className="font-semibold" style={{ color: "var(--accent)" }}>
                local Sheffield community
              </strong>
              , helping passengers and drivers thrive — 24 hours a day, 7 days a week.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--surface-soft)" }}
                  >
                    <Icon icon={s.icon} width={17} style={{ color: "var(--accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-gray-900 leading-none">{s.value}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={() => {}}
              className="inline-flex items-center gap-2 text-white text-sm font-medium px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: "var(--accent)" }}
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