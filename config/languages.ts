export const languages = {
  en: 'English',
  nl: 'Dutch',
  ru: 'Russian',
} as const;

export type Language = keyof typeof languages;

export function isValidLang(lang: string): lang is Language {
  return Object.keys(languages).includes(lang);
} 