"use client";
import BecomeMember from "./becomeMember";
import FAQs from "./faqs";
import HeroSection from "./hero";
import HomeFooter from "./homeFooter";
import HowWeWork from "./howWeWork";
import Location from "./location";
import Pricing from "./pricing";
import Services from "./services";

export default function HomeSection() {
  return (
    <>
      <main>
        <HeroSection />
        <HowWeWork />
        <Services />
        <Pricing />
        <BecomeMember />
        <FAQs />
        <Location />
        <HomeFooter />
      </main>
    </>
  );
}
