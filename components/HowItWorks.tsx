import FadeUp from "./FadeUp";

const steps = [
  {
    number: "1",
    title: "Request your free quote.",
    body: "Tell us about your pool and property. Takes two minutes.",
  },
  {
    number: "2",
    title: "Get your simple plan.",
    body: "We send clear pricing and a schedule that fits, no pressure.",
  },
  {
    number: "3",
    title: "Enjoy your weekends.",
    body: "We show up, do the work, and send a photo update when it is done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-pool">
            Getting Started
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold text-deepwater md:text-4xl">
            Three steps to a spotless backyard.
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 120}>
              <div>
                <span className="block font-heading text-6xl font-extrabold text-pool">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-deepwater">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-lg leading-relaxed text-charcoal">
                  {step.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
