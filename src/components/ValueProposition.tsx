"use client";

import { BookOpen, Layers, MapPin, ShieldCheck } from "lucide-react";

const ITEMS = [
  "Experiencia en logística, aduanas y gestión de riesgos.",
  "Conocimiento técnico + visión estratégica.",
  "Servicios integrados: trámites, consultoría, formación especializada y tecnología.",
  "Presencia en la Costa Caribe con alcance nacional.",
  "Foco en el cumplimiento, la eficiencia, la digitalización y el crecimiento internacional.",
];

const HUB_ITEMS = [
  { label: "Cumplimiento", icon: ShieldCheck },
  { label: "Experiencia y conocimiento", icon: BookOpen },
  { label: "Servicios integrados", icon: Layers },
  { label: "Costa Caribe", icon: MapPin },
] as const;

export function ValueProposition() {
  return (
    <section
      id="servicios"
      className="bg-primary/[0.06] py-16 md:py-20"
      aria-labelledby="value-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="value-title"
          className="mb-10 text-3xl font-semibold tracking-tight text-foreground md:mb-12 md:text-4xl"
        >
          Nuestra propuesta de valor
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <ol className="space-y-4" role="list">
            {ITEMS.map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-base text-muted-foreground md:text-lg leading-relaxed pt-0.5">
                  {text}
                </span>
              </li>
            ))}
          </ol>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-3">
                  {HUB_ITEMS.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white/80 px-4 py-3.5 transition-all duration-200 hover:-translate-x-0.5 hover:border-primary/25 hover:bg-primary/5 hover:shadow-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
