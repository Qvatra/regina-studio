import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For root path, /about, /contact, /services and service subpages
  if (request.nextUrl.pathname === '/' || 
      request.nextUrl.pathname === '/about' || 
      request.nextUrl.pathname === '/contact' ||
      request.nextUrl.pathname === '/services' ||
      request.nextUrl.pathname === '/services/photography' ||
      request.nextUrl.pathname === '/services/videography' ||
      request.nextUrl.pathname === '/services/wedding') {
    // If it's a user (has cookie), redirect to preferred language
    const preferredLanguage = request.cookies.get('preferredLanguage')?.value;
    if (preferredLanguage) {
      if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL(`/${preferredLanguage}`, request.url));
      }
      return NextResponse.redirect(new URL(`${request.nextUrl.pathname}/${preferredLanguage}`, request.url));
    }
    // Otherwise, show the language selection page
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
    '/services/wedding'
  ],
}; 