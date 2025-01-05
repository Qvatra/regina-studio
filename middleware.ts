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

    // Find first supported language
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
  if (request.nextUrl.pathname === '/') {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const isCrawler = /bot|crawler|spider|crawling|facebookexternalhit|ahrefsbot|semrushbot|mj12bot|rogerbot|petalbot|screaming frog|pingdom|uptimerobot|statuscake|google-structured-data|dataforseo|rankdseo|seokicks|seznambot|amazonbot|applebot|adidxbot|adsbot|feedfetcher|duckduckgo|ia_archiver|slurp|teoma|blexbot|blerkobot|applebot|yahoo! slurp|teoma|amazonbot|pingbot|uptimerobot|statuscake|screaming frog seo spider|dataforseobot|rankdseo|seokicks|archive.org_bot|google-structured-data-testing-tool|seznambot|qwantify/i.test(userAgent);

    if (isCrawler) {
      // Let crawlers see the language selector page without navigation
      return NextResponse.next();
    }

    // For real users, redirect to their preferred language or default
    const preferredLang = getPreferredLanguage(request);
    return NextResponse.redirect(new URL(`/${preferredLang}`, request.url));
  }
}

export const config = {
  matcher: ['/'],
}; 