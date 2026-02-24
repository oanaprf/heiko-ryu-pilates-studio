"use client";

import { useTranslation } from "react-i18next";

export default function StudioSection() {
  const { t } = useTranslation();

  const stats = [
    { value: t("studio.stat1_val"), label: t("studio.stat1") },
    { value: t("studio.stat2_val"), label: t("studio.stat2") },
    { value: t("studio.stat3_val"), label: t("studio.stat3") },
  ];

  return (
    <section id="studio" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text column */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-ocean" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
                {t("studio.label")}
              </span>
            </div>

            <h2 className="mb-6 font-serif text-4xl font-light italic leading-snug text-slate md:text-5xl">
              {t("studio.title")}
            </h2>

            <p className="mb-12 max-w-lg text-base leading-relaxed text-muted">
              {t("studio.text")}
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 font-serif text-4xl font-light italic text-ocean">
                    {s.value}
                  </div>
                  <div className="text-xs leading-snug text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="relative">
            {/* Decorations behind */}
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl bg-ocean-light/50" />
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-xl border border-border bg-linen" />

            {/* Image placeholder */}
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl bg-linen">
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-light/50 via-cream/20 to-linen" />
              <div className="absolute left-1/4 top-1/4 h-44 w-44 rounded-full border border-ocean/20" />
              <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full border border-gold/25" />
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="select-none font-serif text-9xl font-light italic text-ocean/15">
                  HR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
