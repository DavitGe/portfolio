import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, projectType, message } = body;

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Email validation using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com", // fallback for development
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // fallback for development
      },
    });

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.EMAIL_USER || "davitg303@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject || "New Message"}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "Not provided"}
Project Type: ${projectType || "Not specified"}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
  <h2 style="color: #5b21b6;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
  <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
  <h3 style="margin-top: 20px; color: #5b21b6;">Message:</h3>
  <p style="white-space: pre-line;">${message}</p>
</div>
      `,
    };

    // Auto-reply content for the contact
    const autoReplyMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Thank You for Your Message",
      text: `
Dear ${name},

Thank you for reaching out to me through my portfolio website. I appreciate your interest and will review your message shortly.

I will get back to you as soon as possible, typically within 24-48 hours.

Best regards,
Davit Gelovani
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px;">
  <h2 style="color: #5b21b6;">Thank You for Your Message</h2>
  <p>Dear ${name},</p>
  <p>Thank you for reaching out to me through my portfolio website. I appreciate your interest and will review your message shortly.</p>
  <p>I will get back to you as soon as possible, typically within 24-48 hours.</p>
  <p style="margin-top: 20px;">Best regards,<br />Davit Gelovani</p>
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 0.8em; color: #777;">
    <p>This is an automated response. Please do not reply directly to this email.</p>
  </div>
</div>
      `,
    };

    // Send admin notification email
    await transporter.sendMail(adminMailOptions);

    // Send auto-reply email to contact
    await transporter.sendMail(autoReplyMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the message" },
      { status: 500 }
    );
  }
}
