export type Language = 'en' | 'nl' | 'ru' | 'ua';

export const languages: { [key in Language]: string } = {
  en: 'English',
  nl: 'Nederlands',
  ru: 'Русский',
  ua: 'Українська'
} as const;

export function isValidLang(lang: string): lang is Language {
  return Object.keys(languages).includes(lang);
} 