"use client";

import Link from "next/link";

const LOGO_PLACEHOLDERS = [
  "Empresa 1",
  "Empresa 2",
  "Empresa 3",
  "Empresa 4",
  "Empresa 5",
  "Empresa 6",
];

function LogoItem({ label }: { label: string }) {
  return (
    <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-white px-6 grayscale transition hover:border-accent/60 hover:grayscale-0">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

export function ExperienceMarquee() {
  const duplicated = [...LOGO_PLACEHOLDERS, ...LOGO_PLACEHOLDERS];

  return (
    <section
      id="experiencia"
      className="overflow-hidden bg-white py-16 md:py-20"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-nowrap items-baseline justify-between gap-4 md:mb-12">
          <h2
            id="experience-title"
            className="min-w-0 flex-1 border-l-4 border-accent pl-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Nuestra experiencia
          </h2>
          <Link
            href="/experiencia"
            className="shrink-0 text-sm text-muted-foreground underline-offset-2 transition-colors hover:text-accent hover:underline"
          >
            Ver más
          </Link>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
            {duplicated.map((label, i) => (
              <LogoItem key={`${label}-${i}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
