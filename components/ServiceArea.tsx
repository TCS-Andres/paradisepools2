import { MapPin } from "lucide-react";
import FadeUp from "./FadeUp";

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
      <div className="mx-auto max-w-6xl px-4">
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
          {/* TODO VERIFY CITIES */}
          <ul className="mt-10 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
            {cities.map((city) => (
              <li key={city} className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-champagne" aria-hidden="true" />
                <span className="font-body text-lg text-white">{city}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
