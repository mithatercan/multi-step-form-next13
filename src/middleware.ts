import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/steps/info', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
