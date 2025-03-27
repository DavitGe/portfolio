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

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: "davitg303@gmail.com",
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

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the message" },
      { status: 500 }
    );
  }
}
