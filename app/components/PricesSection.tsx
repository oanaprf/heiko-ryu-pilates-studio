"use client";

import { useTranslation } from "react-i18next";
import { cn } from "../lib/cn";

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-4 w-4 shrink-0", featured ? "text-white" : "text-ocean")}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8l3 3 7-7" />
    </svg>
  );
}

const PLANS = [
  { key: "s", featured: false },
  { key: "m", featured: true },
  { key: "p", featured: false },
];

export default function PricesSection() {
  const { t } = useTranslation();

  return (
    <section id="prices" className="bg-linen py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-ocean" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-ocean">
              {t("prices.label")}
            </span>
            <div className="h-px w-10 bg-ocean" />
          </div>
          <h2 className="font-serif text-4xl font-light italic text-slate md:text-5xl">
            {t("prices.title")}
          </h2>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          {PLANS.map(({ key, featured }) => {
            const features = [
              t(`prices.${key}_f1`),
              t(`prices.${key}_f2`),
              t(`prices.${key}_f3`),
            ];
            return (
              <div
                key={key}
                className={cn(
                  "relative rounded-2xl p-8 transition-all duration-300",
                  featured
                    ? "scale-105 bg-ocean text-white shadow-2xl shadow-ocean/30"
                    : "border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
                )}
              >
                {featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate px-4 py-1.5 text-xs font-medium text-white">
                    {t("prices.popular")}
                  </div>
                )}

                <p className={cn("mb-2 text-xs font-medium uppercase tracking-widest", featured ? "text-white/70" : "text-muted")}>
                  {t(`prices.${key}_name`)}
                </p>

                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="font-serif text-4xl font-light">
                    {t(`prices.${key}_price`)}
                  </span>
                  <span className={cn("text-sm", featured ? "text-white/70" : "text-muted")}>
                    {t("prices.currency")}
                  </span>
                </div>

                <p className={cn("mb-8 text-xs", featured ? "text-white/60" : "text-muted")}>
                  {t(`prices.${key}_period`)} · {t(`prices.${key}_desc`)}
                </p>

                <ul className="mb-8 space-y-3">
                  {features.map((f) => (
                    <li key={f} className={cn("flex items-center gap-3 text-sm", featured ? "text-white/90" : "text-slate")}>
                      <CheckIcon featured={featured} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "block rounded-full px-6 py-3 text-center text-sm font-medium transition-all",
                    featured
                      ? "bg-white text-ocean hover:bg-white/90"
                      : "bg-ocean text-white hover:bg-ocean-dark"
                  )}
                >
                  {t(`prices.${key}_cta`)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
