import { Home, CalendarCheck, Camera } from "lucide-react";
import FadeUp from "./FadeUp";
import ZoomImage from "./ZoomImage";

const proofChips = [
  { icon: Home, label: "Local and family-run" },
  { icon: CalendarCheck, label: "Consistent weekly schedule" },
  { icon: Camera, label: "Photo updates after every visit" },
];

export default function WhyUs() {
  return (
    <section className="bg-pearl py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <FadeUp>
          {/* PLACEHOLDER REPLACE WITH REAL TEAM PHOTO */}
          <div className="relative">
            <ZoomImage
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
              alt="A resort-style swimming pool glowing at dusk"
              className="aspect-[4/3] w-full shadow-luxe"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <ZoomImage
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
              alt="A backyard pool lit softly at dusk"
              className="absolute bottom-4 right-4 aspect-[3/4] w-28 shadow-luxe ring-4 ring-ivory sm:w-40"
              sizes="(min-width: 768px) 160px, 112px"
            />
            {/* Small champagne-bordered detail accent. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 h-12 w-12 rounded-xl border-2 border-champagne"
            />
          </div>
        </FadeUp>

        <FadeUp delay={120}>
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              A local family business that treats your home like ours.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink">
              Paradise Pools &amp; Pressure Cleaning is run by a South Florida
              family that believes showing up on time and doing the job right is
              the whole business. No call centers, no rotating strangers in your
              backyard. The same friendly faces, week after week.
            </p>
            {/* TODO VERIFY YEARS */}
            <p className="mt-4 font-body text-lg leading-relaxed text-ink">
              Proudly serving our neighbors year after year.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {proofChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="font-body text-sm font-semibold text-ink">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
