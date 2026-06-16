import type { LocaleData } from '../data/types';
import { data as en } from '../data/en';
import { data as es } from '../data/es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const bundles: Record<Locale, LocaleData> = { en, es };

export function getData(locale: string | undefined): LocaleData {
  return bundles[(locale as Locale) in bundles ? (locale as Locale) : defaultLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};
