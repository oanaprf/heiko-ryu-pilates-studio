"use client";

import { useTranslation } from "react-i18next";

function MatIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <rect x="2" y="20" width="24" height="2.5" rx="1.25" />
      <circle cx="10" cy="12" r="3.5" />
      <path d="M16 12h6" />
      <path d="M13.5 15.5l1 4.5H8l1-4.5" />
    </svg>
  );
}

function ReformerIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <rect x="2" y="17" width="24" height="3.5" rx="1.5" />
      <path d="M6 17v-7M22 17v-7" />
      <path d="M6 12h16" />
      <circle cx="11" cy="8" r="2.5" />
    </svg>
  );
}

function PrivateIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7">
      <circle cx="11" cy="9" r="4" />
      <path d="M5 24v-1a6 6 0 0112 0v1" />
      <path d="M21 11l1.5 1.5L19 16l-2.5-2.5 1-1L19 14l2-2z" />
    </svg>
  );
}

const SERVICES = [
  { key: "mat", Icon: MatIcon, gradient: "from-ocean-light/60 to-cream" },
  { key: "reformer", Icon: ReformerIcon, gradient: "from-linen to-cream" },
  { key: "private", Icon: PrivateIcon, gradient: "from-ocean-light/40 to-cream" },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-ocean" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
              {t("services.label")}
            </span>
            <div className="h-px w-10 bg-ocean" />
          </div>
          <h2 className="font-serif text-4xl font-light italic text-slate md:text-5xl">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map(({ key, Icon, gradient }) => (
            <div
              key={key}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${gradient}`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm text-ocean transition-all duration-300 group-hover:bg-ocean group-hover:text-white">
                  <Icon />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-serif text-2xl font-medium italic text-slate">
                  {t(`services.${key}_title`)}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {t(`services.${key}_text`)}
                </p>
                <span className="inline-flex items-center rounded-full bg-ocean-light/60 px-3 py-1 text-xs font-medium text-ocean">
                  {t(`services.${key}_detail`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
