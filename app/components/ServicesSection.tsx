"use client";

import { useTranslation } from "react-i18next";
import { SectionDivider } from "./SectionDivider";

interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  meta: string;
}

export function ServicesSection() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as ServiceItem[];

  return (
    <section id="services" className="py-[clamp(80px,12vw,140px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(24px,5vw,80px)]">
        <div className="mb-[clamp(48px,6vw,72px)] text-center">
          <p className="mb-4 font-sans text-[10px] tracking-[0.3em] uppercase text-grey-500">
            {t("services.eyebrow")}
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-grey-800">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {items.map((service, i) => (
            <div
              key={service.num}
              className={`group border-t-2 border-transparent px-[clamp(32px,4vw,48px)] py-[clamp(32px,4vw,48px)] transition-colors duration-200 hover:border-ocean ${
                i > 0 ? "border-l border-ocean/15" : ""
              }`}
            >
              <span className="mb-5 block font-sans text-[11px] tracking-[0.15em] text-ocean">
                {service.num}
              </span>
              <h3 className="mb-4 font-serif text-[clamp(1.6rem,2.5vw,1.9rem)] font-light leading-[1.15] text-grey-800">
                {service.title}
              </h3>
              <p className="mb-6 font-sans text-[15px] font-light leading-[1.85] text-grey-500">
                {service.desc}
              </p>
              <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-ocean">
                {service.meta}
              </span>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
