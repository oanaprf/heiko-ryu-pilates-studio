"use client";

import { useTranslation } from "react-i18next";
import { SectionDivider } from "./SectionDivider";

export function PhilosophySection() {
  const { t } = useTranslation();

  return (
    <section className="py-[clamp(80px,12vw,140px)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-[clamp(40px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
        <div>
          <div className="mb-6 h-px w-12 bg-ocean" />
          <p className="mb-4 font-sans text-[10px] tracking-[0.3em] uppercase text-grey-500">
            {t("philosophy.eyebrow")}
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.1] text-grey-800">
            {t("philosophy.title")}
          </h2>
        </div>

        <div>
          <blockquote className="mb-8 font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-light italic leading-snug text-grey-800">
            &ldquo;{t("philosophy.quote")}&rdquo;
          </blockquote>
          <p className="mb-5 font-sans text-base font-light leading-[1.85] text-grey-500">
            {t("philosophy.body1")}
          </p>
          <p className="font-sans text-base font-light leading-[1.85] text-grey-500">
            {t("philosophy.body2")}
          </p>
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
