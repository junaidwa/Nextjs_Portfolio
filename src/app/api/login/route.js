
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  // For simplicity, hardcode the admin email and password
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    // Create the cookie (valid for 1 day)
    res.cookies.set('adminToken', 'true', {
      httpOnly: true, // prevents access via JS
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
