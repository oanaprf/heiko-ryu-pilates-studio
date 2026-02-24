"use client";

import { useTranslation } from "react-i18next";
import { InstagramIcon } from "./InstagramIcon";

const NAV_LINKS = [
  { href: "#services", key: "footer.nav.services" },
  { href: "#about", key: "footer.nav.about" },
  { href: "#studio", key: "footer.nav.studio" },
  { href: "#contact", key: "footer.nav.contact" },
];

export function SiteFooter() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-black pb-8 pt-16">
      <div className="mx-auto max-w-[1200px] px-[clamp(24px,5vw,80px)]">
        <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10">
          <div>
            <p className="mb-2 font-serif text-[15px] font-light italic tracking-[0.2em] text-gold">
              HEIKO RYU
            </p>
            <p className="font-sans text-xs font-light italic text-white/30">
              {t("footer.tagline")}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-1.5 font-sans text-xs tracking-[0.08em] text-white/40 transition-colors duration-200 hover:text-ocean"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div>
            <p className="mb-3 font-sans text-[10px] tracking-[0.25em] uppercase text-white/25">
              {t("footer.follow")}
            </p>
            <a
              href="https://instagram.com/heikoryupilates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[13px] text-white/50 transition-colors duration-200 hover:text-ocean"
              aria-label={t("footer.instagramAria")}
            >
              <InstagramIcon size={14} />
              {t("footer.instagramHandle")}
            </a>
          </div>
        </div>

        <div className="mb-12 flex justify-center gap-6">
          {(["en", "ro"] as const).map((l) => (
            <button
              key={l}
              onClick={() => i18n.changeLanguage(l)}
              aria-pressed={i18n.language === l}
              aria-label={l === "en" ? t("footer.switchToEn") : t("footer.switchToRo")}
              className={`cursor-pointer border-b bg-transparent pb-1 font-sans text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 ${
                i18n.language === l
                  ? "border-ocean text-ocean"
                  : "border-transparent text-white/30"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-2 border-t border-white/10 pt-6">
          <p className="font-sans text-[11px] text-white/20">
            {t("footer.copyright")}
          </p>
          <p className="font-sans text-[11px] text-white/15">
            {t("footer.studioType")}
          </p>
        </div>
      </div>
    </footer>
  );
}
