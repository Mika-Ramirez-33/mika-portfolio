import {
  defaultLang,
  ui,
  type Language,
} from './ui';

export function getLangFromLocale(
  locale?: string
): Language {
  return locale === 'en'
    ? 'en'
    : defaultLang;
}

export function useTranslations(
  locale?: string
) {
  const lang =
    getLangFromLocale(locale);

  return function t(
    key: keyof typeof ui.es
  ) {
    return ui[lang][key];
  };
}