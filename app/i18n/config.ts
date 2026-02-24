import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ro from "./locales/ro.json";

i18next.use(initReactI18next).init({
  lng: "ro",
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  interpolation: { escapeValue: false },
  initImmediate: false,
});

export default i18next;
