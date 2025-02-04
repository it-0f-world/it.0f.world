import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    lng: "ru",
    resources: {
        en: {
            translation: {
                title: "[ SPACE OF IT DECISIONS ]",
                description: "< Information Technologies Development, Artistic  & Technical Design />",
            }
        },
        ru: {
            translation: {
                title: "[ ПРОСТРАНСТВО IT РЕШЕНИЙ ]",
                description: "< Разработка Информационно-Вычислительных Программ, Художественный и Технический Дизайн />",
            }
        },
        ar: {
            translation: {
                title: "[ مساحة حلول تكنولوجيا المعلومات ]",
                description: "< تطوير برامج المعلومات والحوسبة والتصميم الفني والتقني />",
            }
        }
    }
});