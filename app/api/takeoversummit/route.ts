import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { TakeoverSummitEmail } from '@/components/TakeoverSummitEmail';
import { TakeoverSummitRegistrantEmail } from '@/components/TakeoverSummitRegistrantEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_SPOTS = 5;
const ALERT_RECIPIENT = 'eniibukun@khrien.com';
const DEFAULT_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbz7PdRHw4MkfpFaNvuosQkAhX0qvR9m6v11zt0bRq1a39vG4_tiOvJSF348Yd26MyK3Xw/exec';

const ALLOWED_COURSES = [
  'AI',
  'UI/UX',
  'Cyber Security',
  'Fullstack Development',
  'Product Management',
  'Customer Success and Operations',
  'Graphics Design',
  'Video Editing',
] as const;

export async function GET() {
  const sheetUrl = process.env.TAKEOVER_SUMMIT_SHEET_URL || DEFAULT_SHEET_URL;

  try {
    const response = await fetch(sheetUrl, {
      method: 'GET',
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Sheet status check failed (${response.status})`);
    }

    const data = await response.json();
    return NextResponse.json({
      maxSpots: data.maxSpots ?? MAX_SPOTS,
      spotsTaken: data.spotsTaken ?? 0,
      spotsRemaining: data.spotsRemaining ?? MAX_SPOTS,
      isFull: Boolean(data.isFull),
    });
  } catch (err) {
    console.error('Takeover Summit GET error:', err);
    return NextResponse.json(
      {
        maxSpots: MAX_SPOTS,
        spotsTaken: 0,
        spotsRemaining: MAX_SPOTS,
        isFull: false,
        error: 'Unable to fetch live spot count',
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const sheetUrl = process.env.TAKEOVER_SUMMIT_SHEET_URL || DEFAULT_SHEET_URL;

    const body = await req.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const phone = String(body.phone || '').trim();
    const course = String(body.course || '').trim();

    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!ALLOWED_COURSES.includes(course as (typeof ALLOWED_COURSES)[number])) {
      return NextResponse.json(
        { success: false, error: 'Please select a valid course.' },
        { status: 400 }
      );
    }

    // Submit to Google Apps Script (handles atomic 5-spot lock + waitlist + duplicate check)
    const sheetResponse = await fetch(sheetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, course }),
      cache: 'no-store',
    });

    if (!sheetResponse.ok) {
      throw new Error(`Google Sheet request failed (${sheetResponse.status})`);
    }

    const sheetResult = await sheetResponse.json();

    if (sheetResult.duplicate) {
      return NextResponse.json(
        {
          success: false,
          duplicate: true,
          status: sheetResult.status,
          message:
            sheetResult.message || 'This email has already been submitted.',
        },
        { status: 409 }
      );
    }

    if (!sheetResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: sheetResult.error || 'Could not process your registration.',
        },
        { status: 500 }
      );
    }

    // Send emails via Resend
    if (sheetResult.status === 'winner') {
      const spotNumber = Number(sheetResult.spotNumber || 1);
      const isFinalSpot = spotNumber >= MAX_SPOTS;

      const [adminEmailResult, registrantEmailResult] = await Promise.all([
        // 1. Instant alert to eniibukun@khrien.com
        resend.emails.send({
          from: 'Khrien Takeover Summit <hello@khrien.com>',
          to: [ALERT_RECIPIENT],
          subject: `🎉 [Spot ${spotNumber}/${MAX_SPOTS}${isFinalSpot ? ' — FULL!' : ''}] Takeover Summit 40% Discount: ${name} (${course})`,
          react: TakeoverSummitEmail({
            name,
            email,
            phone,
            course,
            spotNumber,
            maxSpots: MAX_SPOTS,
            submittedAt: new Date().toLocaleString('en-NG', {
              dateStyle: 'medium',
              timeStyle: 'short',
            }),
          }),
        }),
        // 2. 40% Discount confirmation email to the registrant
        resend.emails.send({
          from: 'Khrien <hello@khrien.com>',
          to: [email],
          subject: `🎉 You Claimed 40% Off! — Khrien Next Cohort (Spot #${spotNumber}/${MAX_SPOTS})`,
          react: TakeoverSummitRegistrantEmail({
            name,
            course,
            status: 'winner',
            spotNumber,
            maxSpots: MAX_SPOTS,
          }),
        }),
      ]);

      if (adminEmailResult.error) {
        console.error('Takeover Summit admin Resend error:', adminEmailResult.error);
      }
      if (registrantEmailResult.error) {
        console.error(
          'Takeover Summit winner confirmation Resend error:',
          registrantEmailResult.error
        );
      }
    } else {
      // Waitlist confirmation email to the registrant
      const waitlistEmailResult = await resend.emails.send({
        from: 'Khrien <hello@khrien.com>',
        to: [email],
        subject: `You're on the Waitlist! — Khrien Next Cohort`,
        react: TakeoverSummitRegistrantEmail({
          name,
          course,
          status: 'waitlist',
          maxSpots: MAX_SPOTS,
        }),
      });

      if (waitlistEmailResult.error) {
        console.error(
          'Takeover Summit waitlist confirmation Resend error:',
          waitlistEmailResult.error
        );
      }
    }

    return NextResponse.json({
      success: true,
      status: sheetResult.status,
      spotNumber: sheetResult.spotNumber ?? null,
      spotsRemaining: sheetResult.spotsRemaining ?? 0,
    });
  } catch (err) {
    console.error('Takeover Summit POST error:', err);
    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
