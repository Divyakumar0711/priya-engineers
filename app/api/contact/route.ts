// import { supabase } from "@/lib/supabaseClient";

// export interface ContactForm {
//   name: string;
//   email: string;
//   number?: string;
//   product?: string;
//   message?: string;
// }

// export async function POST(request: Request) {
//   try {
//     const data: ContactForm = await request.json();

//     const { error } = await supabase.from("contacts").insert([
//       { 
//         name: data.name,
//         email: data.email,
//         number: data.number,
//         product: data.product,
//         message: data.message,
//       },
//     ]);

//     if (error) {
//       return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//     }

//     return new Response(JSON.stringify({ message: "Contact saved successfully!" }), { status: 200 });
//   } catch (err: any) {
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Example: store to DB or send email
    console.log("Contact form submitted:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}