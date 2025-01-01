import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow direct access to /about for SEO
  if (request.nextUrl.pathname === '/about') {
    // If it's a user (has cookie), redirect to preferred language
    const preferredLanguage = request.cookies.get('preferredLanguage')?.value;
    if (preferredLanguage) {
      return NextResponse.redirect(new URL(`/about/${preferredLanguage}`, request.url));
    }
    // Otherwise, show the language selection page
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/about',
}; 