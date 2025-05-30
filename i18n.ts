import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslation from "./src/locales/en.json";
import ruTranslation from "./src/locales/ru.json";
import uzTranslation from "./src/locales/uz.json";

let language = localStorage.getItem("i18nextLng") || "uz"

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      uz: {
        translation: uzTranslation,
      }
    },
    fallbackLng: language,

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
