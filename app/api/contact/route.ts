

// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       jobTitle,
//       subject,
//       message,
//     } = await req.json();

//     // Basic validation
//     if (!firstName || !lastName || !email || !message) {
//       return NextResponse.json(
//         { error: "First name, last name, email and message are required." },
//         { status: 400 }
//       );
//     }

//     const fullName = `${firstName} ${lastName}`;

//     const { error } = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>", // change after verifying your domain
//       to: process.env.CONTACT_EMAIL!,
//       replyTo: email,
//       subject: subject
//         ? `New Contact Message — ${subject}`
//         : `New Contact Message from ${fullName}`,

//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #4e648d;">New Contact Message</h2>

//           <table style="width: 100%; border-collapse: collapse;">
            
//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:140px;">First Name</td>
//               <td style="padding:10px;border:1px solid #ddd;">${firstName}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Last Name</td>
//               <td style="padding:10px;border:1px solid #ddd;">${lastName}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Email</td>
//               <td style="padding:10px;border:1px solid #ddd;">${email}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Phone</td>
//               <td style="padding:10px;border:1px solid #ddd;">${phone || "-"}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Job Title</td>
//               <td style="padding:10px;border:1px solid #ddd;">${jobTitle || "-"}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Subject</td>
//               <td style="padding:10px;border:1px solid #ddd;">${subject || "-"}</td>
//             </tr>

//             <tr>
//               <td style="padding:10px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;">Message</td>
//               <td style="padding:10px;border:1px solid #ddd;">${message}</td>
//             </tr>

//           </table>
//         </div>
//       `,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json(
//         { error: "Failed to send email." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (err) {
//     console.error("API route error:", err);
//     return NextResponse.json(
//       { error: "Something went wrong." },
//       { status: 500 }
//     );
//   }
// }

// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY);

// Use service role key here — this is server-only, never exposed to browser
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, company, product, quantity, message } = body;

    // ── 1. Validate required fields ──────────────────────────────────────────
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // ── 2. Save enquiry to Supabase ──────────────────────────────────────────
    const { error: dbError } = await supabase.from("enquiries").insert([
      {
        name,
        phone,
        email: email || null,
        company: company || null,
        product: product || null,
        quantity: quantity || null,
        message: message || null,
      },
    ]);

    if (dbError) {
      console.error("[contact] Supabase insert error:", dbError);
      // Don't block email sending if DB insert fails — still attempt email
    }

    // ── 3. Send email via Resend ─────────────────────────────────────────────
    const { error: emailError } = await resend.emails.send({
      from: "Priya Engineers Website <onboarding@resend.dev>", // replace with your verified domain email
      to: ["divyakumarapatel0711@gmail.com"],
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} — ${product || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background-color: rgb(78,100,141); padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 1px;">
              New Enquiry — Priya Engineers
            </h1>
          </div>

          <!-- Body -->
          <div style="padding: 32px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 35%;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: #111827;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: #111827;">${phone}</span>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: #111827;">${email}</span>
                </td>
              </tr>` : ""}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Company</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: #111827;">${company}</span>
                </td>
              </tr>` : ""}
              ${product ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Product</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: rgb(225,6,0); font-weight: bold;">${product}</span>
                </td>
              </tr>` : ""}
              ${quantity ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Quantity</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 15px; color: #111827;">${quantity}</span>
                </td>
              </tr>` : ""}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <span style="font-size: 12px; font-weight: bold; color: rgb(78,100,141); text-transform: uppercase; letter-spacing: 1px;">Message</span>
                </td>
                <td style="padding: 10px 0;">
                  <span style="font-size: 15px; color: #374151; line-height: 1.6;">${message}</span>
                </td>
              </tr>` : ""}
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              This enquiry was submitted via the Priya Engineers website contact form.
            </p>
          </div>

        </div>
      `,
    });

    if (emailError) {
      console.error("[contact] Resend error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try WhatsApp or call directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}