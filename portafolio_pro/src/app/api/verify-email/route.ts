import { NextResponse } from "next/server";

const BLOCKED_USERNAMES = ["test", "fake", "noname", "example", "correo"];

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const username = email.split("@")[0].toLowerCase();

    // Bloqueo manual obvio
    if (BLOCKED_USERNAMES.some(w => username.includes(w))) {
      return NextResponse.json({ isValid: false });
    }

    const res = await fetch(
      `https://emailreputation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=${email}`
    );

    const data = await res.json();

    const isValid =
      data.email_deliverability.is_format_valid &&
      data.email_deliverability.is_mx_valid &&
      !data.email_quality.is_disposable &&
      data.email_quality.score >= 0.6;

    return NextResponse.json({ isValid });
  } catch {
    // Fallback: NO bloquear usuarios reales
    return NextResponse.json({ isValid: true });
  }
}
