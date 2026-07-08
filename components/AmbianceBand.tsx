import FadeUp from "./FadeUp";
import ZoomImage from "./ZoomImage";

// DECORATIVE STOCK IMAGERY, REPLACE WITH REAL JOB PHOTOS WHEN AVAILABLE.
// Purely atmospheric band. Asserts nothing: not "our work", not "recent projects".
type Ambiance = {
  src: string;
  alt: string;
};

const images: Ambiance[] = [
  {
    src: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
    alt: "A modern home with a swimming pool at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80",
    alt: "A poolside terrace in warm evening light",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    alt: "A resort-style home exterior lit at dusk",
  },
];

export default function AmbianceBand() {
  return (
    <section className="bg-pearl py-28">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="flex items-center justify-center gap-3 font-body text-sm font-semibold uppercase tracking-wider text-navy">
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            The Paradise Standard
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <FadeUp key={image.src} delay={index * 120}>
              <ZoomImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full shadow-luxe"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
