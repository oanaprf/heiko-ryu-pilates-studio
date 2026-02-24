"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#studio", label: t("nav.about") },
    { href: "#prices", label: t("nav.prices") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-serif text-2xl italic tracking-wide text-slate">
            Heiko Ryu
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-slate"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-ocean px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-ocean-dark hover:-translate-y-px md:block"
            >
              {t("nav.book")}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex flex-col items-end gap-1.5 p-1 md:hidden"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-6 rounded-full bg-slate" />
              <span className="block h-0.5 w-4 rounded-full bg-slate" />
              <span className="block h-0.5 w-6 rounded-full bg-slate" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        bookLabel={t("nav.book")}
      />
    </>
  );
}
