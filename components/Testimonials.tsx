import FadeUp from "./FadeUp";

const testimonials = [
  {
    quote:
      "The pool has never looked better and I have not touched a skimmer in months.",
    name: "Sample review, replace before launch",
  },
  {
    quote:
      "They show up every week like clockwork and the photo updates are a great touch.",
    name: "Sample review, replace before launch",
  },
  {
    quote: "Driveway looks brand new. Wish we had called sooner.",
    name: "Sample review, replace before launch",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ivory py-28">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="flex items-center gap-3 font-body text-sm font-semibold uppercase tracking-widest text-navy">
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            Happy Neighbors
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
            What homeowners say.
          </h2>
        </FadeUp>

        {/* SAMPLE TESTIMONIALS. REPLACE WITH REAL CLIENT REVIEWS BEFORE LAUNCH. DO NOT PUBLISH AS-IS. */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 120}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-luxe">
                <blockquote className="font-body text-lg italic leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-body font-semibold text-navy">
                  {item.name}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
