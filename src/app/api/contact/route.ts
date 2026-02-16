import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

type ContactBody = {
  nombre: string;
  email: string;
  motivo: string;
  mensaje: string;
};

const MOTIVO_LABELS: Record<string, string> = {
  consultoria: "Consultoría",
  formacion: "Formación",
  "comercio-exterior": "Comercio exterior",
  "tramites-aduaneros": "Trámites aduaneros",
  otro: "Otro",
};

function validateBody(body: unknown): body is ContactBody {
  return (
    typeof body === "object" &&
    body !== null &&
    "nombre" in body &&
    "email" in body &&
    "motivo" in body &&
    "mensaje" in body &&
    typeof (body as ContactBody).nombre === "string" &&
    typeof (body as ContactBody).email === "string" &&
    typeof (body as ContactBody).motivo === "string" &&
    typeof (body as ContactBody).mensaje === "string"
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "VÉRTICE Web";
  const contactEmail = process.env.BREVO_CONTACT_EMAIL || senderEmail;

  if (!apiKey || !senderEmail) {
    console.error("Contact API: BREVO_API_KEY o BREVO_SENDER_EMAIL no configurados.");
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
      { error: "Faltan campos requeridos: nombre, email, motivo, mensaje." },
      { status: 400 }
    );
  }

  const motivoLabel = MOTIVO_LABELS[body.motivo] || body.motivo;
  const subject = `[VÉRTICE] Nuevo mensaje de contacto — ${body.nombre}`;
  const htmlContent = `
    <h2>Nuevo mensaje desde el formulario de contacto</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(body.nombre)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Motivo:</strong> ${escapeHtml(motivoLabel)}</p>
    <p><strong>Mensaje:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(body.mensaje)}</pre>
    <p><em>Enviado desde vertice.com.co</em></p>
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
        to: [{ email: contactEmail, name: "VÉRTICE" }],
        subject,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo API error:", res.status, err);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta más tarde." },
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
