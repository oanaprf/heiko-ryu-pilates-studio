"use client";

import "./i18n/config";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StudioSection from "./components/StudioSection";
import PhilosophySection from "./components/PhilosophySection";
import ServicesSection from "./components/ServicesSection";
import PricesSection from "./components/PricesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <StudioSection />
        <PhilosophySection />
        <ServicesSection />
        <PricesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
