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
    src: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80",
    alt: "A villa and its pool glowing under warm lights in the evening",
  },
  {
    src: "https://images.unsplash.com/photo-1631752674874-9994662712af?auto=format&fit=crop&w=1200&q=80",
    alt: "Poolside lounge chairs on a deck in warm evening light",
  },
  {
    src: "https://images.unsplash.com/photo-1657383543368-7d929944be6a?auto=format&fit=crop&w=1200&q=80",
    alt: "A backyard pool and lit outdoor fireplace glowing at dusk",
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
