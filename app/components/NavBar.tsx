"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "#services", key: "nav.services" },
  { href: "#about", key: "nav.about" },
  { href: "#studio", key: "nav.studio" },
  { href: "#contact", key: "nav.contact" },
];

export function NavBar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ocean/20 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-[clamp(24px,5vw,80px)]">
        <a
          href="#"
          className="font-serif text-[15px] font-light italic tracking-[0.2em] text-ocean"
        >
          HEIKO RYU
        </a>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-[12px] tracking-[0.1em] uppercase transition-colors duration-200 ${
                scrolled
                  ? "text-grey-500 hover:text-grey-800"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className={`py-2 px-5 font-sans text-[11px] tracking-[0.15em] uppercase transition-all duration-200 ${
              scrolled
                ? "border border-ocean text-ocean hover:bg-ocean hover:text-hero-dark"
                : "border border-ocean/60 text-ocean hover:bg-ocean hover:text-hero-dark"
            }`}
          >
            {t("nav.book")}
          </a>
        </div>

        <button
          className="flex cursor-pointer flex-col gap-1.5 border-0 bg-transparent p-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={mobileOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px w-[22px] transition-all duration-200 ${
                scrolled ? "bg-grey-800" : "bg-white"
              } ${mobileOpen && i === 0 ? "translate-y-[6px] rotate-45" : ""} ${
                mobileOpen && i === 2 ? "-translate-y-[6px] -rotate-45" : ""
              } ${mobileOpen && i === 1 ? "opacity-0" : "opacity-100"}`}
            />
          ))}
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
