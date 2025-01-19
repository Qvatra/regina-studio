export type Language = 'en' | 'nl' | 'ru' | 'ua'; 

export const languages: { [key in Language]: string } = {
  en: 'English',
  nl: 'Nederlands',
  ru: 'Русский',
  ua: 'Українська'
} as const; 

export const languageCodes: { [key in Language]: string } = {
  en: 'en',
  nl: 'nl',
  ru: 'ru',
  ua: 'uk'
} as const; 