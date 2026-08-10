import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parseResult = contactFormSchema.safeParse(json);

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Validation failed", details: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parseResult.data;

    // Log the enquiry locally
    console.log("New Project Enquiry:", {
      name,
      email,
      phone: phone || "Not provided",
      service,
      message: message || "No message provided",
      timestamp: new Date().toISOString(),
    });

    const supabaseKey =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Save submission into Supabase database if configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && supabaseKey) {
      const { error: dbError } = await supabase.from("enquiries").insert([
        {
          name,
          email,
          phone: phone || null,
          service,
          message: message || null,
        },
      ]);

      if (dbError) {
        console.error("Supabase Database Error:", dbError);
        return NextResponse.json(
          { error: `Database error: ${dbError.message}` },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We've received your enquiry and will get back to you within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    );
  }
}
