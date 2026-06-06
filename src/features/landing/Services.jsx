import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Ride",
    description:
      "Need to get across Sheffield? Request a ride in seconds and we'll connect you with a licensed local driver — ready when you are.",
    icon: "ph:car-simple",
    link: "#ride",
  },
  {
    title: "Reserve",
    description:
      "Planning ahead? Schedule your pickup in advance and travel with complete peace of mind, whether it's a morning commute or a special occasion.",
    icon: "ph:calendar-check",
    link: "#reserve",
  },
  {
    title: "Airport Transfers",
    description:
      "Start or finish your journey stress-free. We offer reliable airport runs with fixed fares, flight tracking, and plenty of room for luggage.",
    icon: "ph:airplane-takeoff",
    link: "#airport",
  },
  {
    title: "Corporate",
    description:
      "Keep your team moving smoothly. Our corporate accounts offer priority booking, consolidated invoicing, and professional service your business can rely on.",
    icon: "ph:briefcase",
    link: "#corporate",
  },
  {
    title: "Courier",
    description:
      "Send parcels and documents across Sheffield quickly and securely. Same-day delivery with live tracking and friendly, trusted drivers.",
    icon: "ph:package",
    link: "#courier",
  },
  {
    title: "Events & Tours",
    description:
      "Heading to a match, concert, or night out? Enjoy safe, comfortable travel to and from events — so you can focus on the fun.",
    icon: "ph:ticket",
    link: "#events",
  },
];

const Services = () => {
  return (
    <section className="my-20 px-4" id="services">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase rounded-full px-3.5 py-1.5 mb-4"
            style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "0.5px solid var(--accent-border)" }}
          >
            <Icon icon="ph:squares-four" width={12} aria-hidden="true" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Explore what you can do<br className="hidden sm:block" />
            with <span style={{ color: "var(--accent)" }}>Solo Taxis</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl p-6 flex flex-col justify-between min-h-48 transition-all duration-200 cursor-pointer"
            >
              {/* Top row: text + icon */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-[15px] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Icon box */}
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Icon
                    icon={service.icon}
                    width={22}
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href={service.link}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium w-fit transition-colors duration-150"
                style={{ color: "var(--accent)" }}
              >
                Learn more
                <Icon
                  icon="ph:arrow-right"
                  width={14}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;