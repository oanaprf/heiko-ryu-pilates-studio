"use client";

import { useTranslation } from "react-i18next";

function CoreIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <circle cx="14" cy="14" r="11" />
      <circle cx="14" cy="14" r="5" />
      <path d="M14 3v4M14 21v4M3 14h4M21 14h4" />
    </svg>
  );
}

function FlowIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <path d="M3 9c3-4 10-4 14 0s11 4 11 0" />
      <path d="M3 14c3-4 10-4 14 0s11 4 11 0" />
      <path d="M3 19c3-4 10-4 14 0s11 4 11 0" />
    </svg>
  );
}

function MindIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <circle cx="14" cy="10" r="5" />
      <path d="M7 26c0-4.5 3.1-8 7-8s7 3.5 7 8" />
      <path d="M21 12c2 0 4 1.5 4 4" />
    </svg>
  );
}

const ICONS = [CoreIcon, FlowIcon, MindIcon];

export default function PhilosophySection() {
  const { t } = useTranslation();

  const cards = [
    { key: "card1", Icon: ICONS[0] },
    { key: "card2", Icon: ICONS[1] },
    { key: "card3", Icon: ICONS[2] },
  ];

  return (
    <section className="bg-linen py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-ocean" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
              {t("benefits.label")}
            </span>
            <div className="h-px w-10 bg-ocean" />
          </div>
          <h2 className="font-serif text-4xl font-light italic text-slate md:text-5xl">
            {t("benefits.title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ key, Icon }) => (
            <div
              key={key}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-ocean-light/60 text-ocean transition-all duration-300 group-hover:bg-ocean group-hover:text-white">
                <Icon />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium italic text-slate">
                {t(`benefits.${key}_title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {t(`benefits.${key}_text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
