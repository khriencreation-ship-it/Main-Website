import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');

  if (key === process.env.OWNER_SECRET) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set('owner-access', key!, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid key' }, { status: 401 });
}
