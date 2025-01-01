import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/' || 
      request.nextUrl.pathname === '/about' || 
      request.nextUrl.pathname === '/contact' ||
      request.nextUrl.pathname === '/services' ||
      request.nextUrl.pathname === '/services/photography' ||
      request.nextUrl.pathname === '/services/videography' ||
      request.nextUrl.pathname === '/services/wedding' ||
      request.nextUrl.pathname === '/portfolio/videography') {
    const preferredLanguage = request.cookies.get('preferredLanguage')?.value;
    if (preferredLanguage) {
      if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(`/${preferredLanguage}`, request.url));
      }
      return NextResponse.redirect(new URL(`${request.nextUrl.pathname}/${preferredLanguage}`, request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/', 
    '/about', 
    '/contact', 
    '/services', 
    '/services/photography', 
    '/services/videography',
    '/services/wedding',
    '/portfolio/videography'
  ],
}; 