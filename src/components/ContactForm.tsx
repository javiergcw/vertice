"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const motivoFromUrl = searchParams.get("motivo") ?? "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      motivo: formData.get("motivo") as string,
      mensaje: formData.get("mensaje") as string,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error ?? "No se pudo enviar el mensaje. Intenta de nuevo.");
        return;
      }
      setSent(true);
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg bg-primary/10 p-6 text-center">
        <p className="font-medium text-primary">
          Gracias por tu mensaje. Te contactaremos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="h-11 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="motivo" className="mb-1.5 block text-sm font-medium text-foreground">
          Motivo
        </label>
        <select
          id="motivo"
          name="motivo"
          required
          defaultValue={motivoFromUrl}
          className="h-11 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Seleccione un motivo</option>
          <option value="consultoria">Consultoría</option>
          <option value="formacion">Formación</option>
          <option value="comercio-exterior">Comercio exterior</option>
          <option value="tramites-aduaneros">Trámites aduaneros</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-foreground">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="w-full resize-y rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Escribe tu mensaje..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary px-5 py-3 text-base font-medium text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
