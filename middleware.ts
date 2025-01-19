import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Language, languages } from './config/languages';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // if (pathname === '/') {
  //   const preferredLanguage = request.cookies.get('preferredLanguage')?.value;
  //   const isValidLanguage = preferredLanguage && Object.keys(languages).includes(preferredLanguage as Language);
  //   const defaultLang = isValidLanguage ? preferredLanguage : 'en';
    
  //   return NextResponse.redirect(new URL(`/${defaultLang}`, request.url), {
  //     status: 308 // Permanent redirect
  //   });
  // }

  const response = NextResponse.next()

  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  return response
}

export const config = {
  matcher: ['/'],
};