

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      jobTitle,
      subject,
      message,
    } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "First name, last name, email and message are required." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // change after verifying your domain
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: subject
        ? `New Contact Message — ${subject}`
        : `New Contact Message from ${fullName}`,

      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4e648d;">New Contact Message</h2>

          <table style="width: 100%; border-collapse: collapse;">
            
            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:140px;">First Name</td>
              <td style="padding:10px;border:1px solid #ddd;">${firstName}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Last Name</td>
              <td style="padding:10px;border:1px solid #ddd;">${lastName}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Email</td>
              <td style="padding:10px;border:1px solid #ddd;">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Phone</td>
              <td style="padding:10px;border:1px solid #ddd;">${phone || "-"}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Job Title</td>
              <td style="padding:10px;border:1px solid #ddd;">${jobTitle || "-"}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Subject</td>
              <td style="padding:10px;border:1px solid #ddd;">${subject || "-"}</td>
            </tr>

            <tr>
              <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Message</td>
              <td style="padding:10px;border:1px solid #ddd;">${message}</td>
            </tr>

          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}