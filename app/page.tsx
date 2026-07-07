import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Problem from "@/components/Problem";
import Membership from "@/components/Membership";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Problem />
      <Membership />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <QuoteForm />
    </main>
  );
}
