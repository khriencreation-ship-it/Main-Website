import * as React from 'react';

interface ContactNotificationEmailProps {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    contactMethod: string;
}

export function ContactNotificationEmail({
    firstname,
    lastname,
    email,
    phone,
    subject,
    message,
    contactMethod,
}: ContactNotificationEmailProps) {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        color: '#333',
    };

    const contentStyle = {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #ddd',
    };

    const headerStyle = {
        borderBottom: '2px solid #55E5A4', // Brand Green
        paddingBottom: '10px',
        marginBottom: '20px',
    };

    const labelStyle = {
        fontWeight: 'bold' as const,
        color: '#555',
        marginRight: '10px',
    };

    const fieldStyle = {
        marginBottom: '10px',
    };

    const messageBoxStyle = {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        borderRadius: '5px',
        borderLeft: '4px solid #55E5A4',
        marginTop: '20px',
        whiteSpace: 'pre-wrap' as const,
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    <h2 style={{ margin: 0, color: '#000' }}>New Contact Inquiry</h2>
                    <p style={{ margin: '5px 0 0 0', color: '#666' }}>Khrien Landing Page</p>
                </div>

                <div style={fieldStyle}>
                    <span style={labelStyle}>Name:</span>
                    <span>{firstname} {lastname}</span>
                </div>

                <div style={fieldStyle}>
                    <span style={labelStyle}>Email:</span>
                    <a href={`mailto:${email}`} style={{ color: '#007bff' }}>{email}</a>
                </div>

                <div style={fieldStyle}>
                    <span style={labelStyle}>Phone:</span>
                    <span>{phone}</span>
                </div>

                <div style={fieldStyle}>
                    <span style={labelStyle}>Subject:</span>
                    <span>{subject}</span>
                </div>

                <div style={fieldStyle}>
                    <span style={labelStyle}>Preferred Contact:</span>
                    <span style={{ textTransform: 'capitalize' }}>{contactMethod}</span>
                </div>

                <div style={messageBoxStyle}>
                    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>Message:</p>
                    <p style={{ margin: 0 }}>{message}</p>
                </div>

                <div style={{ marginTop: '30px', fontSize: '12px', color: '#888', textAlign: 'center' }}>
                    This email was sent from the contact form on Khrien Creative Excellence website.
                </div>
            </div>
        </div>
    );
}
