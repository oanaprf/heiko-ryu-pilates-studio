"use client";

import "./i18n/config";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ServicesSection } from "./components/ServicesSection";
import { StudioSection } from "./components/StudioSection";
import { InstructorSection } from "./components/InstructorSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <StudioSection />
      <InstructorSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
