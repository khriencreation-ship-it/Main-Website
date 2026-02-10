import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbxy4EoxoATyE0KmsagdmfvFqx1adHqVgxDEIp_gD4J_j3dHe7iHCGLwPqs6yyC7K3YuEw/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          contactMethod: data.contactMethod,
        }),
      }
    );
    const text = await response.text();
    console.log({ success: true, message: text });
    return NextResponse.json({ success: true, message: text });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
