"use client";

import { useTranslation } from "react-i18next";

const TESTIMONIALS = [
  { key: "q1", accent: "ocean" },
  { key: "q2", accent: "gold" },
  { key: "q3", accent: "sage" },
];

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-ocean" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
              {t("testimonials.label")}
            </span>
            <div className="h-px w-10 bg-ocean" />
          </div>
          <h2 className="font-serif text-4xl font-light italic text-slate md:text-5xl">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ key }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl bg-linen p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-3xl bg-ocean-light/25" />

              {/* Quote mark */}
              <div className="mb-4 select-none font-serif text-7xl font-light leading-none text-ocean/20">
                &ldquo;
              </div>

              <blockquote className="relative mb-8 font-serif text-xl font-light italic leading-relaxed text-slate">
                {t(`testimonials.${key}`)}
              </blockquote>

              <footer className="relative">
                <div className="mb-0.5 flex items-center gap-3">
                  <div className="h-px w-6 bg-ocean" />
                  <span className="text-sm font-medium text-slate">
                    {t(`testimonials.${key}_author`)}
                  </span>
                </div>
                <p className="pl-9 text-xs text-muted">{t(`testimonials.${key}_role`)}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
