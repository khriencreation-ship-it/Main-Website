import * as React from 'react';

interface TakeoverSummitEmailProps {
  name: string;
  email: string;
  phone: string;
  course: string;
  spotNumber: number;
  maxSpots: number;
  submittedAt: string;
}

export function TakeoverSummitEmail({
  name,
  email,
  phone,
  course,
  spotNumber,
  maxSpots,
  submittedAt,
}: TakeoverSummitEmailProps) {
  const isFinalSpot = spotNumber >= maxSpots;

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '24px',
        backgroundColor: '#0f0f0f',
        color: '#111111',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '32px',
          borderRadius: '14px',
          maxWidth: '580px',
          margin: '0 auto',
          border: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            borderBottom: '3px solid #f7a619',
            paddingBottom: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: isFinalSpot ? '#934ab3' : '#2eb781',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              padding: '4px 10px',
              borderRadius: '999px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            Spot {spotNumber} of {maxSpots}
            {isFinalSpot ? ' — All Spots Filled!' : ' — 40% Discount Claimed'}
          </div>
          <h2 style={{ margin: 0, color: '#000000', fontSize: '22px' }}>
            New Takeover Summit Discount Winner
          </h2>
          <p style={{ margin: '6px 0 0 0', color: '#555555', fontSize: '14px' }}>
            Submitted via /takeoversummit
          </p>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '15px',
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#555555',
                  width: '130px',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                Full Name
              </td>
              <td
                style={{
                  padding: '10px 0',
                  color: '#111111',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                {name}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#555555',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                Email
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <a
                  href={`mailto:${email}`}
                  style={{ color: '#934ab3', textDecoration: 'none' }}
                >
                  {email}
                </a>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#555555',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                Phone Number
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                <a
                  href={`tel:${phone}`}
                  style={{ color: '#111111', textDecoration: 'none' }}
                >
                  {phone}
                </a>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#555555',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                Course
              </td>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#111111',
                  borderBottom: '1px solid #f0f0f0',
                }}
              >
                {course}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '10px 0',
                  fontWeight: 'bold',
                  color: '#555555',
                }}
              >
                Submitted At
              </td>
              <td style={{ padding: '10px 0', color: '#555555' }}>
                {submittedAt}
              </td>
            </tr>
          </tbody>
        </table>

        {isFinalSpot && (
          <div
            style={{
              marginTop: '20px',
              padding: '14px 16px',
              backgroundColor: '#fef3c7',
              borderLeft: '4px solid #f7a619',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#78350f',
            }}
          >
            All {maxSpots} discount spots are now claimed! Subsequent applicants
            will automatically be added to the <strong>Waitlist</strong> tab in
            your Google Sheet.
          </div>
        )}

        <div
          style={{
            marginTop: '28px',
            fontSize: '12px',
            color: '#888888',
            textAlign: 'center',
          }}
        >
          Khrien Takeover Summit • 40% Cohort Discount Offer
        </div>
      </div>
    </div>
  );
}
