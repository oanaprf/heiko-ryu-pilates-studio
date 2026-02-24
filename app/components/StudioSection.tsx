"use client";

import { useTranslation } from "react-i18next";
import { SectionDivider } from "./SectionDivider";

interface StudioBlockProps {
  imageBg: string;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  body: string;
  imageAlt: string;
}

function StudioBlock({
  imageBg,
  reverse = false,
  eyebrow,
  title,
  body,
  imageAlt,
}: StudioBlockProps) {
  return (
    <div className={`flex flex-wrap ${reverse ? "flex-row-reverse" : "flex-row"}`}>
      <div
        className={`min-h-[480px] flex-[1_1_320px] ${imageBg}`}
        role="img"
        aria-label={imageAlt}
      />
      <div className="flex flex-[1_1_320px] flex-col justify-center p-[clamp(48px,8vw,96px)]">
        <div className="mb-6 h-px w-12 bg-ocean" />
        <p className="mb-4 font-sans text-[10px] tracking-[0.3em] uppercase text-grey-500">
          {eyebrow}
        </p>
        <h2 className="mb-6 font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-light leading-[1.1] text-grey-800">
          {title}
        </h2>
        <p className="font-sans text-base font-light leading-[1.85] text-grey-500">
          {body}
        </p>
      </div>
    </div>
  );
}

export function StudioSection() {
  const { t } = useTranslation();

  return (
    <section id="studio" className="py-[clamp(80px,12vw,140px)]">
      <div className="flex flex-col">
        <StudioBlock
          imageBg="bg-[#cfe4ef]"
          eyebrow={t("studio.spaceEyebrow")}
          title={t("studio.spaceTitle")}
          body={t("studio.spaceBody")}
          imageAlt={t("studio.spaceAlt")}
        />
        <StudioBlock
          imageBg="bg-grey-800"
          reverse
          eyebrow={t("studio.equipmentEyebrow")}
          title={t("studio.equipmentTitle")}
          body={t("studio.equipmentBody")}
          imageAlt={t("studio.equipmentAlt")}
        />
      </div>

      <SectionDivider />
    </section>
  );
}
