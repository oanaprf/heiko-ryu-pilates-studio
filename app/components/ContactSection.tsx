"use client";

import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-hero-dark py-[clamp(100px,14vw,160px)] text-center">
      <div className="mx-auto max-w-[1200px] px-[clamp(24px,5vw,80px)]">
        <div className="mb-10 inline-flex items-center border-l-2 border-ocean pl-3">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-ocean">
            {t("contact.eyebrow")}
          </span>
        </div>

        <h2 className="mx-auto mb-8 max-w-[800px] font-serif text-[clamp(3rem,7vw,6.5rem)] font-light italic leading-[0.95] text-white">
          {t("contact.title")}
        </h2>

        <p className="mx-auto mb-12 max-w-[400px] font-sans text-base font-light leading-[1.8] text-white/55">
          {t("contact.body")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/heikoryupilates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ocean px-10 py-3.5 font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-hero-dark transition-colors duration-200 hover:bg-white hover:text-grey-800"
          >
            {t("contact.bookCta")}
          </a>
          <a
            href="https://instagram.com/heikoryupilates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/25 px-10 py-3.5 font-sans text-[11px] font-light tracking-[0.15em] uppercase text-white/60 transition-all duration-200 hover:border-white hover:text-white"
          >
            {t("contact.followCta")}
          </a>
        </div>

        <p className="mt-12 font-sans text-[11px] tracking-[0.05em] text-white/30">
          {t("contact.note")}
        </p>
      </div>
    </section>
  );
}
