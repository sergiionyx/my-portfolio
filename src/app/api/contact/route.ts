import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY || "",
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, recaptchaToken } = await request.json();

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required" },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Send email using Resend with improved deliverability
    const { data, error } = await resend.emails.send({
      from: "Sergii from Create Website 4U <contact@createwebsite4u.com>", // Use your verified domain
      to: ["www.createwebsite4u.com@gmail.com"],
      replyTo: email, // Important: allows direct replies to the sender
      subject: `Website Inquiry from ${name} - ${email}`, // More personal subject
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Website Inquiry</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 14px;">
            This inquiry was sent from your portfolio contact form at createwebsite4u.com
          </p>
          
          <p style="color: #6b7280; font-size: 14px;">
            <strong>Quick Reply:</strong> Click "Reply" in your email client to respond directly to ${name}.
          </p>
        </div>
      `,
      text: `
New Website Inquiry

From: ${name}
Email: ${email}
Date: ${new Date().toLocaleDateString()}

Message:
${message}

---
This inquiry was sent from your portfolio contact form at createwebsite4u.com
Quick Reply: Reply to this email to respond directly to ${name}.
      `, // Plain text version for better deliverability
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Failed to send email. Please try again or contact us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        error:
          "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
