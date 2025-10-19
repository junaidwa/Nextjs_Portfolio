import { NextResponse } from 'next/server';

export async function GET(request) {
  // ✅ Remove the cookie
  const response = NextResponse.redirect(new URL('/', request.url)); // <— full absolute URL
  response.cookies.set('adminToken', '', { maxAge: 0, path: '/' });

  return response;
}
