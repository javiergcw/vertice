"use client";

import {
  Award,
  BookOpen,
  FileCheck,
  Globe,
  GraduationCap,
  Package,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const BULLETS = [
  { label: "Aduanero", icon: FileCheck },
  { label: "Logística y Cadena de Suministros", icon: Truck },
  { label: "Normativo", icon: BookOpen },
  { label: "Formación especializada", icon: GraduationCap },
] as const;

const NODES = [
  { label: "Equipo senior", icon: Users },
  { label: "Logística", icon: Package },
  { label: "Gestión de riesgos", icon: ShieldCheck },
  { label: "Comercio exterior", icon: Globe },
] as const;

export function WhoWeAre() {
  return (
    <section
      id="quienes-somos"
      className="relative bg-surface/80 py-16 md:py-20"
      aria-labelledby="who-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-6">
            <h2
              id="who-title"
              className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              ¿Quiénes somos?
            </h2>
            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">
              Somos una firma boutique de consultoría especializada con amplia experiencia en los sectores:
            </p>
            <ul className="space-y-3" role="list">
              {BULLETS.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-base text-muted-foreground transition-colors hover:text-foreground md:text-lg"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-white"
                    aria-hidden
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <p className="pt-2 text-base text-muted-foreground md:text-lg leading-relaxed">
              Orientada al fortalecimiento estratégico y operativo de las organizaciones.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-3 rounded-xl border-2 border-primary/20 bg-primary/5 px-6 py-4 transition-colors hover:border-primary/30 hover:bg-primary/10">
                    <Award className="h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
                    <span className="text-sm font-semibold text-primary">
                      Empresa especializada
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {NODES.map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-white px-4 py-4 text-center shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-4 w-4" strokeWidth={2} />
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
      </div>
    </section>
  );
}
