import { ArrowRight, Droplets, SprayCan, Trash2 } from "lucide-react";
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
    <section id="services" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-wider text-navy">
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy">
            Everything outside your house, handled.
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.title} delay={index * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-transparent bg-white p-8 shadow-luxe transition-all duration-300 ease-out hover:border-gold motion-safe:hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/40">
                    <Icon className="h-6 w-6 text-navy" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-ink">
                    {service.body}
                  </p>
                  <a
                    href="#quote"
                    className="group mt-auto inline-flex items-center gap-2 pt-6 font-body font-semibold text-navy"
                  >
                    Get a quote for this
                    <ArrowRight
                      className="h-4 w-4 text-gold transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1"
                      aria-hidden="true"
                    />
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
