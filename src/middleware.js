import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('adminToken');
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/admin') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
