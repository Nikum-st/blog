import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ruTranslation from './locales/ru/translation.json';
import enTranslation from './locales/en/translation.json';

i18n.use(initReactI18next).init({
	resources: {
		ru: { translation: ruTranslation },
		en: { translation: enTranslation },
	},
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
