"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import InstagramIcon from "./InstagramIcon";

export default function SiteFooter() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const changeLang = (l: string) => {
    i18n.changeLanguage(l);
    setLang(l);
  };

  return (
    <footer id="contact" className="bg-slate-mid pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-3 font-serif text-2xl italic text-white">Heiko Ryu</div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/50">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-white/35">
              {t("footer.contact_title")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/55">
              <li>{t("footer.address")}</li>
              <li>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="transition-colors hover:text-ocean"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("footer.phone").replace(/\s/g, "")}`}
                  className="transition-colors hover:text-ocean"
                >
                  {t("footer.phone")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Language */}
          <div>
            <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-white/35">
              {t("footer.follow")}
            </h4>
            <a
              href="https://www.instagram.com/heikoryupilates/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-ocean"
            >
              <InstagramIcon className="h-5 w-5" />
              @heikoryupilates
            </a>

            <h4 className="mb-4 mt-8 text-xs font-medium uppercase tracking-[0.15em] text-white/35">
              {t("footer.lang_title")}
            </h4>
            <div className="flex gap-2">
              {(["ro", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    lang === l
                      ? "bg-ocean text-white"
                      : "text-white/45 hover:text-white/75"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/25">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
