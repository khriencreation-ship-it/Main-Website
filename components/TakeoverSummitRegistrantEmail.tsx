import * as React from 'react';

interface TakeoverSummitRegistrantEmailProps {
  name: string;
  course: string;
  status: 'winner' | 'waitlist';
  spotNumber?: number | null;
  maxSpots?: number;
}

export function TakeoverSummitRegistrantEmail({
  name,
  course,
  status,
  spotNumber,
  maxSpots = 5,
}: TakeoverSummitRegistrantEmailProps) {
  const isWinner = status === 'winner';

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
            borderBottom: `3px solid ${isWinner ? '#f7a619' : '#934ab3'}`,
            paddingBottom: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              backgroundColor: isWinner ? '#2eb781' : '#934ab3',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 'bold',
              padding: '4px 12px',
              borderRadius: '999px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {isWinner
              ? `40% Discount Confirmed • Spot #${spotNumber ?? 1} of ${maxSpots}`
              : 'Priority Waitlist Confirmed'}
          </div>
          <h2 style={{ margin: 0, color: '#000000', fontSize: '24px' }}>
            {isWinner
              ? `Congratulations, ${name}! 🎉`
              : `You're on the Waitlist, ${name}!`}
          </h2>
          <p style={{ margin: '6px 0 0 0', color: '#555555', fontSize: '14px' }}>
            Takeover Summit • Khrien Next Cohort
          </p>
        </div>

        {isWinner ? (
          <>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#222222',
                margin: '0 0 16px 0',
              }}
            >
              Thank you for attending the{' '}
              <strong>AI &amp; Global Tech Career</strong> session at Takeover
              Summit!
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#222222',
                margin: '0 0 20px 0',
              }}
            >
              You were one of the <strong>first {maxSpots} applicants</strong>,
              which means your <strong>40% discount</strong> for our next cohort
              is officially locked in!
            </p>

            <div
              style={{
                backgroundColor: '#fef9ec',
                borderLeft: '4px solid #f7a619',
                borderRadius: '8px',
                padding: '16px 18px',
                marginBottom: '22px',
              }}
            >
              <p
                style={{
                  margin: '0 0 6px 0',
                  fontSize: '13px',
                  color: '#78350f',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Your Reserved Offer
              </p>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#111' }}>
                <strong>Course:</strong> {course}
              </p>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#111' }}>
                <strong>Discount:</strong> 40% Off Next Cohort
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: '#111' }}>
                <strong>Spot Number:</strong> #{spotNumber ?? 1} of {maxSpots}
              </p>
            </div>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#333333',
                margin: '0 0 8px 0',
              }}
            >
              <strong>What happens next?</strong> Our team will reach out to you
              shortly via email and phone with your enrollment details and
              cohort start date. Keep this email as confirmation of your 40%
              discount.
            </p>
          </>
        ) : (
          <>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#222222',
                margin: '0 0 16px 0',
              }}
            >
              Thank you for attending the{' '}
              <strong>AI &amp; Global Tech Career</strong> session at Takeover
              Summit!
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#222222',
                margin: '0 0 20px 0',
              }}
            >
              All {maxSpots} summit discount spots were claimed just before your
              entry, so we&apos;ve added you to our{' '}
              <strong>priority waitlist</strong> for the next cohort.
            </p>

            <div
              style={{
                backgroundColor: '#f6f0fa',
                borderLeft: '4px solid #934ab3',
                borderRadius: '8px',
                padding: '16px 18px',
                marginBottom: '22px',
              }}
            >
              <p
                style={{
                  margin: '0 0 6px 0',
                  fontSize: '13px',
                  color: '#581c87',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Your Waitlist Details
              </p>
              <p style={{ margin: '0 0 4px 0', fontSize: '15px', color: '#111' }}>
                <strong>Selected Course:</strong> {course}
              </p>
              <p style={{ margin: 0, fontSize: '15px', color: '#111' }}>
                <strong>Status:</strong> Priority Waitlist
              </p>
            </div>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#333333',
                margin: '0 0 8px 0',
              }}
            >
              <strong>What happens next?</strong> You&apos;ll be among the first
              to hear as soon as enrollment opens for the next cohort — and if
              any discount slot opens up, we&apos;ll notify the waitlist first.
            </p>
          </>
        )}

        <div
          style={{
            marginTop: '28px',
            paddingTop: '16px',
            borderTop: '1px solid #eeeeee',
            fontSize: '12px',
            color: '#888888',
            textAlign: 'center',
          }}
        >
          Warm regards,
          <br />
          <strong>The Khrien Team</strong>
        </div>
      </div>
    </div>
  );
}
