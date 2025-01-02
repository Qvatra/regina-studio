import { Language } from '../content/about';

export const languages: { [key in Language]: string } = {
  en: 'English',
  nl: 'Nederlands',
  ru: 'Русский',
  ua: 'Українська'
} as const; 