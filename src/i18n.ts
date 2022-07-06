import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translations.json';

export const createI18nConfig = (lng: string) => ({
    resources: {
        en: {
            translation: en,
        },
    },
    lng,
    fallbackLng: 'en',
    nsSeparator: '|',
    keySeparator: '>',
    interpolation: {
        escapeValue: false,
    },
});

export const createi18n = (lng: string) => i18n.use(initReactI18next).init(createI18nConfig(lng));
export default i18n;
