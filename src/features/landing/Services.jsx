import { Icon } from "@iconify/react";

const services = [
  {
    title: "Ride",
    description:
      "Need to get across Sheffield? Request a ride in seconds and we'll connect you with a licensed local driver — ready when you are.",
    icon: "ph:car-simple",
    link: "/booking",
  },
  {
    title: "Reserve",
    description:
      "Planning ahead? Schedule your pickup in advance and travel with complete peace of mind, whether it's a morning commute or a special occasion.",
    icon: "ph:calendar-check",
    link: "/booking",
  },
  {
    title: "Airport Transfers",
    description:
      "Start or finish your journey stress-free. We offer reliable airport runs with fixed fares, flight tracking, and plenty of room for luggage.",
    icon: "ph:airplane-takeoff",
    link: "/booking",
  },
  {
    title: "Corporate",
    description:
      "Keep your team moving smoothly. Our corporate accounts offer priority booking, consolidated invoicing, and professional service your business can rely on.",
    icon: "ph:briefcase",
    link: "/booking",
  },
  {
    title: "Courier",
    description:
      "Send parcels and documents across Sheffield quickly and securely. Same-day delivery with live tracking and friendly, trusted drivers.",
    icon: "ph:package",
    link: "/booking",
  },
  {
    title: "Events & Tours",
    description:
      "Heading to a match, concert, or night out? Enjoy safe, comfortable travel to and from events — so you can focus on the fun.",
    icon: "ph:ticket",
    link: "/booking",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow mb-4">
            <Icon icon="ph:squares-four" width={12} aria-hidden="true" />
            Our Services
          </span>
          <h2 className="section-heading">
            Explore what you can do<br className="hidden sm:block" />
            with <span className="text-accent">Solo Taxis</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {services.map((service) => (
            <div key={service.title} className="service-card group flex flex-col justify-between min-h-48">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)] uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-[1.7]">
                    {service.description}
                  </p>
                </div>
                <Icon icon={service.icon} width={32} className="text-accent shrink-0" aria-hidden="true" />
              </div>

              <a href={service.link} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent w-fit">
                Book now
                <Icon icon="ph:arrow-right" width={14} className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
