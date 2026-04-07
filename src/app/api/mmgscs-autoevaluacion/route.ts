import { CONTACT_EMAIL } from "@/data/contact";
import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

type MMGSCSBody = {
  correo: string;
  cargo: string;
  pais: string;
  tipoEmpresa: string;
  tipoPrograma: string;
  tiempoCertificacion: string;
};

function validateBody(body: unknown): body is MMGSCSBody {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  const fields = [
    "correo",
    "cargo",
    "pais",
    "tipoEmpresa",
    "tipoPrograma",
    "tiempoCertificacion",
  ] as const;
  for (const key of fields) {
    const v = b[key];
    if (typeof v !== "string" || v.trim() === "") return false;
  }
  return true;
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "VÉRTICE Web";

  if (!apiKey || !senderEmail) {
    console.error("MMGSCS API: BREVO_API_KEY o BREVO_SENDER_EMAIL no configurados.");
    return NextResponse.json(
      { error: "Configuración del servidor incompleta." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la solicitud inválido." },
      { status: 400 }
    );
  }

  if (!validateBody(body)) {
    return NextResponse.json(
      { error: "Faltan datos del formulario o hay campos vacíos." },
      { status: 400 }
    );
  }

  const subject = `[VÉRTICE] MMGSCS — Solicitud de autoevaluación (${body.correo})`;
  const htmlContent = `
    <h2>Solicitud desde formulario(autoevaluación)</h2>
    <p><strong>Correo:</strong> ${escapeHtml(body.correo)}</p>
    <p><strong>Cargo del responsable:</strong> ${escapeHtml(body.cargo)}</p>
    <p><strong>País (sede / registro):</strong> ${escapeHtml(body.pais)}</p>
    <p><strong>Tipo de empresa:</strong> ${escapeHtml(body.tipoEmpresa)}</p>
    <p><strong>Tipo de programa:</strong> ${escapeHtml(body.tipoPrograma)}</p>
    <p><strong>Tiempo de certificación:</strong> ${escapeHtml(body.tiempoCertificacion)}</p>
    <p><em>Enviado desde verticeconsulting.co — MMGSCS</em></p>
  `.trim();

  try {
    const res = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: CONTACT_EMAIL, name: "VÉRTICE" }],
        subject,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo API error (MMGSCS):", res.status, err);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud. Intenta más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("MMGSCS API error:", e);
    return NextResponse.json(
      { error: "Error al enviar la solicitud. Intenta más tarde." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
