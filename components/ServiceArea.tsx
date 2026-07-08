import { MapPin } from "lucide-react";
import FadeUp from "./FadeUp";
import ZoomImage from "./ZoomImage";

// TODO VERIFY CITIES
const cities = [
  "Miami",
  "Fort Lauderdale",
  "West Palm Beach",
  "Boca Raton",
  "Hollywood",
  "Pompano Beach",
  "Coral Springs",
  "Delray Beach",
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-navy py-28 text-white">
      {/* Keyframes for the city marquee. The animation itself is only applied
          via Tailwind's motion-safe variant, so it never runs under
          prefers-reduced-motion. */}
      <style>{"@keyframes pp-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}"}</style>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeUp>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Proudly serving South Florida.
            </h2>
            {/* TODO EXACT CITY LIST AND HOME BASE */}
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-white/85">
              Based in South Florida and serving surrounding neighborhoods.
            </p>
            <p className="mt-2 max-w-2xl font-body text-lg leading-relaxed text-white/85">
              Not sure if we cover your neighborhood? Ask, we are expanding.
            </p>
          </FadeUp>

          <FadeUp delay={120}>
            <ZoomImage
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80"
              alt="A quiet coastal neighborhood at dusk"
              className="aspect-[4/3] w-full shadow-luxe"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </FadeUp>
        </div>

        <FadeUp delay={120}>
          <div className="relative mt-12 overflow-hidden">
            {/* Soft edges so the marquee fades into the section. */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent motion-reduce:hidden"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent motion-reduce:hidden"
              aria-hidden="true"
            />
            {/* TODO VERIFY CITIES */}
            <ul className="flex items-center motion-safe:w-max motion-safe:flex-nowrap motion-safe:[animation:pp-marquee_44s_linear_infinite] motion-safe:hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4">
              {cities.map((city) => (
                <li
                  key={city}
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap px-5"
                >
                  <MapPin
                    className="h-5 w-5 shrink-0 text-champagne"
                    aria-hidden="true"
                  />
                  <span className="font-body text-lg text-white">{city}</span>
                </li>
              ))}
              {cities.map((city) => (
                <li
                  key={`marquee-duplicate-${city}`}
                  aria-hidden="true"
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap px-5 motion-reduce:hidden"
                >
                  <MapPin
                    className="h-5 w-5 shrink-0 text-champagne"
                    aria-hidden="true"
                  />
                  <span className="font-body text-lg text-white">{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
