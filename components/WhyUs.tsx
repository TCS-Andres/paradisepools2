import Image from "next/image";
import { Home, CalendarCheck, Camera } from "lucide-react";
import FadeUp from "./FadeUp";

const proofChips = [
  { icon: Home, label: "Local and family-run" },
  { icon: CalendarCheck, label: "Consistent weekly schedule" },
  { icon: Camera, label: "Photo updates after every visit" },
];

export default function WhyUs() {
  return (
    <section className="bg-wavetint py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <FadeUp>
          {/* PLACEHOLDER REPLACE WITH REAL TEAM PHOTO */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
              alt="Clean, well-kept backyard swimming pool"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeUp>

        <FadeUp delay={120}>
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-deepwater md:text-4xl">
              A local family business that treats your home like ours.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-charcoal">
              Paradise Pools &amp; Pressure Cleaning is run by a South Florida
              family that believes showing up on time and doing the job right is
              the whole business. No call centers, no rotating strangers in your
              backyard. The same friendly faces, week after week.
            </p>
            {/* TODO VERIFY YEARS */}
            <p className="mt-4 font-body text-lg leading-relaxed text-charcoal">
              Proudly serving our neighbors year after year.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {proofChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-pool" aria-hidden="true" />
                  <span className="font-body text-sm font-semibold text-charcoal">
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
