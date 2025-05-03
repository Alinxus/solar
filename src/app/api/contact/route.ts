// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  
  // Test with direct values
  const SMTP_SERVER = 'mail.spacemail.com';
  const NC_SMTP_PORT = 465;
  const NC_SMTP_USER = 'info@maxsolarpowercompany.com';
  const NC_SMTP_PASS = 'Maxsolarpowercompany@123';
  const CONTACT_RECEIVER = 'info@maxsolarpowercompany.com';
  
  console.log('Creating transporter with:', {
    host: SMTP_SERVER,
    port: NC_SMTP_PORT,
    secure: true, // Set to true for port 465
    auth: {
      user: NC_SMTP_USER,
      pass: 'REDACTED', // Don't log the actual password
    },
  });

  const transporter = nodemailer.createTransport({
    host: SMTP_SERVER,
    port: NC_SMTP_PORT,
    secure: true, // Set to true for port 465
    auth: {
      user: NC_SMTP_USER,
      pass: NC_SMTP_PASS,
    },
    debug: true, // Show debug output
    logger: true, // Log information into the console
  });

  try {
    console.log('Attempting to send email...');
    
    const info = await transporter.sendMail({
      from: `"${name} via MSP Solar" <${NC_SMTP_USER}>`, // Use our own email as from
      replyTo: email, // Add the user's email as reply-to
      to: CONTACT_RECEIVER,
      subject: 'New message from MSP Solar site',
      text: `From: ${name} (${email})\n\nMessage: ${message}`,
      html: `
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    console.log('Message sent:', info.messageId);
    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (err: any) {
    console.error('SMTP_ERROR', err);
    return NextResponse.json({ 
      error: 'Email failed to send', 
      details: err.message 
    }, { status: 500 });
  }
}