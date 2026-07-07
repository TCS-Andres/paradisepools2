import { Droplets, SprayCan, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeUp from "./FadeUp";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    icon: Droplets,
    title: "Pool Maintenance",
    body: "Weekly cleaning, chemical balancing, filter checks, and skimming so your pool is always swim-ready. Never wonder about your water again.",
  },
  {
    icon: SprayCan,
    title: "Pressure Washing",
    body: "Driveways, patios, pool decks, and walkways restored to like-new. One visit and the whole property looks sharper.",
  },
  {
    icon: Trash2,
    title: "Trash Bin Cleaning",
    body: "We sanitize and deodorize your bins right at the curb. The chore nobody wants, gone for good.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-pool">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold text-deepwater">
            Everything outside your house, handled.
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:shadow-xl motion-safe:hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pool/10">
                    <Icon className="h-6 w-6 text-pool" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-deepwater">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-charcoal">{service.body}</p>
                  <a
                    href="#quote"
                    className="mt-auto pt-6 font-body font-semibold text-sunburst"
                  >
                    Get a quote for this
                  </a>
                </article>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
