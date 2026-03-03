"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const METHODOLOGY_ITEMS = [
  { letter: "V", text: "erificación y Validación de cumplimiento normativo," },
  { letter: "E", text: "strategia en comercio exterior y cadena de suministro," },
  { letter: "R", text: "etroalimentación continua y gestión integral de riesgos," },
  { letter: "T", text: "écnicas especializadas en seguridad logística y aduanas," },
  { letter: "I", text: "nnovación y mejora en procesos organizacionales," },
  { letter: "C", text: "apacitación y fortalecimiento de competencias del equipo" },
  { letter: "E", text: "cosistemas de crecimiento internacional y cumplimiento sostenible." },
];

const EXPLANATION_ITEMS = [
  "Refleja las auditorías y diagnósticos en cumplimiento normativo (OEA, BASC, ISO 28000) y validación de procesos de comercio exterior.",
  "Representa la asesoría estratégica para la expansión internacional y optimización de costos y procesos.",
  "Alude a la gestión de riesgos logísticos, operativos y sancionatorios, así como a la retroalimentación para la mejora continua.",
  "Hace referencia a las técnicas especializadas en seguridad de la cadena de suministro, transporte y trámites aduaneros.",
  "Corresponde a la innovación y digitalización de procesos, así como al cambio organizacional impulsado por la consultoría.",
  "Enfatiza la formación y capacitación especializada (presencial y virtual) para el desarrollo del talento humano.",
  "Simboliza la creación de ecosistemas organizacionales empoderados, orientados al cumplimiento, la eficiencia y crecimiento.",
];

const CAROUSEL_INTERVAL_MS = 4500;

export function VerticeMethodology() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % METHODOLOGY_ITEMS.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + METHODOLOGY_ITEMS.length) % METHODOLOGY_ITEMS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(t);
  }, [next]);

  const current = METHODOLOGY_ITEMS[activeIndex];
  const explanation = EXPLANATION_ITEMS[activeIndex];

  return (
    <section
      className="relative overflow-hidden py-0"
      aria-labelledby="methodology-title"
    >
      {/* Fondo sin card */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, var(--surface) 0%, var(--surface-muted) 45%, var(--background) 100%)",
        }}
      />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.07]"
        style={{ background: "var(--primary)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.06]"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />

      {/* Título de sección + contenido */}
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-14 md:pt-16 md:pb-20">
        <header className="border-b border-border/80 pb-8 md:pb-10">
          <h2
            id="methodology-title"
            className="flex items-center justify-center gap-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            <span
              className="h-10 w-1 shrink-0 rounded-full bg-accent md:h-12"
              aria-hidden
            />
            <span>Significado de la metodología V.É.R.T.I.C.E.</span>
          </h2>
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-sm">
            Basado en los servicios y enfoque estratégico de la firma
          </p>
        </header>
        {/* Carousel: flechas + texto que cambia */}
        <div className="mt-10 flex items-center justify-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:bg-surface hover:text-accent"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>
          <div className="min-w-0 flex-1 text-center">
            <div key={activeIndex} className="animate-methodology-fade">
              <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
                <span className="font-semibold">{current.letter}</span>
                {current.text}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {explanation}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:bg-surface hover:text-accent"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        {/* Fila de letras: una sola línea en móvil, estilo referencia */}
        <div className="mt-12 flex flex-nowrap items-center justify-center gap-2 md:gap-4">
          {METHODOLOGY_ITEMS.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver ${item.letter}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/25 ${
                  isActive
                    ? "h-9 w-9 text-sm ring-2 ring-accent-hover md:h-14 md:w-14 md:text-xl"
                    : "h-8 w-8 text-xs md:h-11 md:w-11 md:text-base hover:opacity-80"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: "var(--accent)",
                      }
                    : {
                        backgroundColor: "#94a3b8",
                        border: "1px solid #64748b",
                      }
                }
              >
                {item.letter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
