"use client";

import { useTranslation } from "react-i18next";
import { InstagramIcon } from "./InstagramIcon";
import { SectionDivider } from "./SectionDivider";

export function InstructorSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-[clamp(80px,12vw,140px)]">
      <div className="mx-auto max-w-[640px] px-[clamp(24px,5vw,80px)] text-center">
        <div
          className="mx-auto mb-12 h-[120px] w-[120px] rounded-full border-2 border-ocean bg-grey-200"
          role="img"
          aria-label={t("instructor.portraitAlt")}
        />

        <p className="mb-4 font-sans text-[10px] tracking-[0.3em] uppercase text-grey-500">
          {t("instructor.eyebrow")}
        </p>
        <h2 className="mb-10 font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-grey-800">
          {t("instructor.title")}
        </h2>

        <div className="flex flex-col gap-5 text-left">
          <p className="font-sans text-base font-light leading-[1.85] text-grey-500">
            {t("instructor.body1")}
          </p>
          <p className="font-sans text-base font-light leading-[1.85] text-grey-500">
            {t("instructor.body2")}
          </p>
          <p className="font-sans text-base font-light leading-[1.85] text-grey-500">
            {t("instructor.body3")}
          </p>
        </div>

        <a
          href="https://instagram.com/heikoryupilates"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-sans text-[13px] text-grey-500 transition-colors duration-200 hover:text-ocean"
          aria-label={t("instructor.instagramAria")}
        >
          <InstagramIcon size={16} />
          {t("instructor.instagramHandle")}
        </a>
      </div>

      <SectionDivider />
    </section>
  );
}
