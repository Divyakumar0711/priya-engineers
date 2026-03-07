import { supabase } from "@/lib/supabaseClient";

export interface ContactForm {
  name: string;
  email: string;
  number?: string;
  product?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json();

    const { error } = await supabase.from("contacts").insert([
      { 
        name: data.name,
        email: data.email,
        number: data.number,
        product: data.product,
        message: data.message,
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Contact saved successfully!" }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}