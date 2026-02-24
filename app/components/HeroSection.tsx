"use client";

import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      {/* Decorative rings */}
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full border border-ocean/15" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full border border-ocean/20" />
      <div className="absolute -right-8 top-[38%] h-52 w-52 rounded-full border border-ocean/25" />

      {/* Soft glow blobs */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-ocean-light/30 blur-3xl" />
      <div className="absolute right-1/4 top-16 h-48 w-48 animate-float rounded-full bg-ocean/8 blur-2xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32">
        <div className="max-w-3xl">
          {/* Pill label */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/80 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ocean" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              {t("hero.label")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up mb-6 font-serif text-5xl font-light italic leading-[1.1] text-slate sm:text-6xl md:text-7xl lg:text-8xl">
            {t("hero.headline_1")}
            <span className="block text-ocean">{t("hero.headline_2")}</span>
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up delay-200 mb-10 max-w-lg text-lg leading-relaxed text-muted">
            {t("hero.sub")}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-ocean px-8 py-4 text-sm font-medium text-white shadow-lg shadow-ocean/20 transition-all hover:-translate-y-0.5 hover:bg-ocean-dark hover:shadow-ocean/35"
            >
              {t("hero.cta")}
            </a>
            <a
              href="#studio"
              className="group flex items-center gap-2 text-sm font-medium text-slate transition-colors hover:text-ocean"
            >
              {t("hero.learn")}
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-800 absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted/60">
            {t("hero.scroll")}
          </span>
          <div className="h-10 w-px animate-draw-line bg-gradient-to-b from-ocean/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
