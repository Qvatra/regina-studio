import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // For root path, /about and /contact
  if (request.nextUrl.pathname === '/' || 
      request.nextUrl.pathname === '/about' || 
      request.nextUrl.pathname === '/contact') {
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
  matcher: ['/', '/about', '/contact'],
}; 