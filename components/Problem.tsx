import FadeUp from "./FadeUp";
import ZoomImage from "./ZoomImage";

export default function Problem() {
  return (
    <section className="bg-navy py-28 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <FadeUp>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white">
            A pool should be a paradise, not a part-time job.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/85">
            Skimming, scrubbing, balancing chemicals, dragging bins, watching the
            driveway turn green. It adds up to hours every month, and one missed
            week can mean a cloudy pool or a repair bill. You did not buy a home in
            South Florida to spend your Saturdays maintaining it.
          </p>
          <p className="mt-6 font-heading text-2xl font-bold text-champagne">
            There is an easier way.
          </p>
        </FadeUp>

        <FadeUp delay={150}>
          {/* DECORATIVE STOCK IMAGERY, REPLACE WITH REAL JOB PHOTOS WHEN AVAILABLE. */}
          <div className="relative pb-10 pr-6 md:pb-12 md:pr-10">
            <ZoomImage
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
              alt="A resort swimming pool at dusk with cabanas and palm trees under an evening sky"
              className="aspect-[4/3] w-full shadow-luxe"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <ZoomImage
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
              alt="Sunlight on the calm water of a swimming pool"
              className="absolute bottom-0 right-0 aspect-square w-2/5 shadow-luxe ring-4 ring-champagne"
              sizes="(min-width: 768px) 20vw, 40vw"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
