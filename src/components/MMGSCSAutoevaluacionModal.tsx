"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";

const DARK_BLUE = "#002855";
const LIGHT_GRAY = "#f4f4f4";
const BTN_GRAY = "#706f6c";

const PAISES = [
  "Colombia",
  "México",
  "Argentina",
  "Chile",
  "Perú",
  "Ecuador",
  "Panamá",
  "Costa Rica",
  "Guatemala",
  "República Dominicana",
  "Estados Unidos",
  "España",
  "Brasil",
  "Otro",
];

const TIPOS_EMPRESA = [
  "Exportador",
  "Importador",
  "Operador logístico",
  "Agente de aduanas",
  "Fabricante / industrial",
  "Comercializadora",
  "Otro",
];

const TIPOS_PROGRAMA = [
  "BASC",
  "OEA (Operador Económico Autorizado)",
  "ISO 28000",
  "C-TPAT / programa equivalente",
  "Programa interno de seguridad",
  "Otro / varios",
];

const TIEMPOS_CERT = [
  "Menos de 1 año",
  "Entre 1 y 3 años",
  "Entre 3 y 5 años",
  "Más de 5 años",
  "En implementación / sin certificación",
];

type MMGSCSAutoevaluacionModalProps = {
  open: boolean;
  onClose: () => void;
};

export function MMGSCSAutoevaluacionModal({ open, onClose }: MMGSCSAutoevaluacionModalProps) {
  const titleId = useId();
  const thankYouTitleId = useId();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClose = useCallback(() => {
    setShowThankYou(false);
    onClose();
  }, [onClose]);

  const dismissThankYou = useCallback(() => {
    setShowThankYou(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    setSubmitError(null);
    setShowThankYou(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (showThankYou) dismissThankYou();
      else handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleClose, showThankYou, dismissThankYou]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      correo: String(fd.get("correo") ?? "").trim(),
      cargo: String(fd.get("cargo") ?? "").trim(),
      pais: String(fd.get("pais") ?? "").trim(),
      tipoEmpresa: String(fd.get("tipoEmpresa") ?? "").trim(),
      tipoPrograma: String(fd.get("tipoPrograma") ?? "").trim(),
      tiempoCertificacion: String(fd.get("tiempoCertificacion") ?? "").trim(),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/mmgscs-autoevaluacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setSubmitError(data.error ?? "No se pudo enviar. Intenta de nuevo.");
        return;
      }
      form.reset();
      setShowThankYou(true);
    } catch {
      setSubmitError("Error de conexión. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-[10000] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={handleClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-2xl lg:max-w-7xl xl:max-w-[min(96vw,90rem)]"
      >
        {/* Barra superior */}
        <header
          className="relative flex shrink-0 items-center justify-center px-10 py-3 sm:px-12 sm:py-4"
          style={{ backgroundColor: DARK_BLUE }}
        >
          <h2
            id={titleId}
            className="text-center text-xs font-semibold uppercase tracking-wide text-white sm:text-sm md:text-base"
          >
            Autoevaluación MMGSCS
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 sm:right-4"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </header>

        <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-2 lg:overflow-hidden">
          {/* Columna izquierda — información (arriba en móvil) */}
          <div
            className="flex flex-col gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:max-h-[calc(90vh-56px)] lg:overflow-y-auto"
            style={{ backgroundColor: LIGHT_GRAY }}
          >
            <h3
              className="text-sm font-bold uppercase leading-snug sm:text-base"
              style={{ color: DARK_BLUE }}
            >
              Herramienta de autoevaluación de modelo madurez para la gestión de la seguridad en la
              cadena de suministros (MMGSCS 1.0)
            </h3>
            <p className="text-sm leading-relaxed sm:text-base" style={{ color: DARK_BLUE }}>
              Esta herramienta de autoevaluación está diseñada para completarse en un periodo de{" "}
              <strong>25 a 30 minutos</strong> por los líderes designados o responsables del sistema.
              Para obtener resultados efectivos, es fundamental realizar la evaluación con{" "}
              <strong>objetividad y sin sesgos</strong>. Los resultados obtenidos pueden servir como
              una valiosa oportunidad para impulsar el crecimiento y fomentar la mejora continua del
              sistema de <strong>Gestión de la Seguridad en la Cadena de Suministros</strong> en su
              organización.
            </p>
          </div>

          {/* Columna derecha — formulario (debajo en móvil) */}
          <div
            className="flex flex-col px-4 py-5 sm:px-6 sm:py-6 lg:max-h-[calc(90vh-56px)] lg:overflow-y-auto"
            style={{ backgroundColor: DARK_BLUE }}
          >
            <h3 className="mb-4 text-center text-xs font-bold uppercase leading-snug text-white sm:text-sm md:text-left md:text-base">
              Complete el formulario para iniciar la autoevaluación
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col rounded-xl bg-white shadow-md"
            >
              {submitError && (
                <div className="rounded-t-xl border-b border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 sm:px-5">
                  {submitError}
                </div>
              )}
              <div className="divide-y divide-border">
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Correo
                  </span>
                  <input
                    name="correo"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="correo@empresa.com"
                  />
                </label>
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Cargo que desempeña el responsable del programa o sistema de gestión de
                    seguridad en la cadena de suministro internacional
                  </span>
                  <input
                    name="cargo"
                    type="text"
                    required
                    className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder=""
                  />
                </label>
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Seleccione el país en el que su empresa tiene su sede o está registrada:
                  </span>
                  <select
                    name="pais"
                    required
                    className="w-full appearance-none rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione…
                    </option>
                    {PAISES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Seleccione su tipo de empresa:
                  </span>
                  <select
                    name="tipoEmpresa"
                    required
                    className="w-full appearance-none rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione…
                    </option>
                    {TIPOS_EMPRESA.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Tipo de programa para la gestión de seguridad en la cadena de suministro
                    internacional
                  </span>
                  <select
                    name="tipoPrograma"
                    required
                    className="w-full appearance-none rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione…
                    </option>
                    {TIPOS_PROGRAMA.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block px-4 py-3 sm:px-5 sm:py-4">
                  <span className="mb-1.5 block text-xs font-medium text-foreground sm:text-sm">
                    Tiempo de certificación del programa o sistema de gestión de seguridad en la
                    cadena de suministro internacional
                  </span>
                  <select
                    name="tiempoCertificacion"
                    required
                    className="w-full appearance-none rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione…
                    </option>
                    {TIEMPOS_CERT.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="p-4 sm:p-5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-md py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
                  style={{ backgroundColor: BTN_GRAY }}
                >
                  {submitting ? "Enviando…" : "Iniciar Autoevaluación"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const thankYouLayer =
    showThankYou ? (
      <div
        className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
        role="presentation"
      >
        <button
          type="button"
          aria-label="Cerrar"
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={dismissThankYou}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={thankYouTitleId}
          className="relative w-full max-w-lg rounded-2xl border border-border bg-white p-6 shadow-2xl sm:p-8"
        >
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
              aria-hidden
            >
              <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
            </span>
            <h2
              id={thankYouTitleId}
              className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              Solicitud registrada correctamente
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Agradecemos su confianza en VÉRTICE. Hemos recibido sus datos y un miembro de nuestro
              equipo se pondrá en contacto con usted a la mayor brevedad para coordinar los
              siguientes pasos y acompañarle en el inicio del proceso de autoevaluación MMGSCS,
              resolviendo con el rigor que merece su organización cualquier consulta previa.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Mientras tanto, puede revisar su bandeja de entrada (y la carpeta de spam) por si
              requerimos información adicional.
            </p>
            <button
              type="button"
              onClick={dismissThankYou}
              className="mt-8 w-full rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return createPortal(
    <>
      {overlay}
      {thankYouLayer}
    </>,
    document.body
  );
}

type MMGSCSAutoevaluacionLauncherProps = {
  className?: string;
};

/** Botón dorado de la página MMGSCS + estado del modal */
export function MMGSCSAutoevaluacionLauncher({ className }: MMGSCSAutoevaluacionLauncherProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "inline-flex rounded-md bg-[#D1B078] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-sm transition-colors hover:bg-[#c4a36d] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:text-base"
        }
      >
        Iniciar autoevaluación
      </button>
      <MMGSCSAutoevaluacionModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
