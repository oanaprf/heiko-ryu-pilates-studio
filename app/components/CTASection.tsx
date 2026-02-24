"use client";

import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-slate py-28 lg:py-36">
      {/* Decorative rings */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-ocean/10" />
      <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-ocean/10" />

      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-ocean/50" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
            {t("cta.label")}
          </span>
          <div className="h-px w-10 bg-ocean/50" />
        </div>

        <h2 className="mb-6 font-serif text-4xl font-light italic leading-snug text-white md:text-5xl lg:text-6xl">
          {t("cta.title")}
        </h2>

        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/55">
          {t("cta.sub")}
        </p>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-ocean px-8 py-4 text-sm font-medium text-white shadow-lg shadow-ocean/25 transition-all hover:-translate-y-0.5 hover:bg-ocean-dark hover:shadow-ocean/40"
        >
          {t("cta.button")}
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
    </section>
  );
}
