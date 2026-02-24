"use client";

import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-svh items-center bg-hero-dark">
      <div className="mx-auto w-full max-w-[1200px] px-[clamp(24px,5vw,80px)] pb-[100px] pt-[100px]">
        <div className="max-w-[900px]">
          <p className="mb-8 flex items-center gap-4 border-l-2 border-ocean pl-4 font-sans text-[10px] tracking-[0.3em] uppercase text-ocean">
            {t("hero.eyebrow")}
          </p>

          <h1 className="mb-10 font-serif text-[clamp(4rem,9vw,8.5rem)] font-light italic leading-[0.95] text-white">
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </h1>

          <p className="mb-12 max-w-[440px] font-sans text-base font-light leading-[1.8] text-white/60">
            {t("hero.body")}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-block bg-ocean px-8 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-hero-dark transition-colors duration-200 hover:bg-white hover:text-grey-800"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#services"
              className="font-sans text-xs text-ocean/60 transition-colors duration-200 hover:text-ocean"
            >
              {t("hero.explore")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-ocean/60">
          {t("hero.scroll")}
        </span>
        <div className="h-10 w-px bg-ocean/40" />
      </div>
    </section>
  );
}
