import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message, product } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Quote Request <onboarding@resend.dev>", // change after verifying your domain
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Quote Request — ${product || "General Enquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4e648d;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold; width: 140px;">Product</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${product || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
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