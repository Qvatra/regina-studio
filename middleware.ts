import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { aboutContent } from './content/about';

const SUPPORTED_LANGUAGES = Object.keys(aboutContent);
const DEFAULT_LANGUAGE = 'en';

function getPreferredLanguage(request: NextRequest): string {
  // Check cookie first
  const cookieLang = request.cookies.get('preferredLanguage')?.value;
  if (cookieLang && SUPPORTED_LANGUAGES.includes(cookieLang)) {
    return cookieLang;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].split('-')[0].toLowerCase());

    const matchedLanguage = preferredLanguages.find(lang => 
      SUPPORTED_LANGUAGES.includes(lang)
    );
    
    if (matchedLanguage) {
      return matchedLanguage;
    }
  }

  return DEFAULT_LANGUAGE;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
}

export const config = {
  matcher: ['/'],
}; 