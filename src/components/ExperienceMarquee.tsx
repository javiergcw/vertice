"use client";

import Image from "next/image";
import Link from "next/link";

const MARQUEE_ITEMS = [
  { logo: "/experience/prodeco.png", name: "Grupo Prodeco" },
  { logo: "/experience/puerto_barranquilla.png", name: "Puerto de Barranquilla" },
  { logo: "/experience/ferrero.png", name: "Ferrero Rocher" },
  { logo: "/experience/sodimac.png", name: "Sodimac" },
  { logo: "/experience/puerto_bahia.png", name: "Puerto Bahía" },
  { logo: "/experience/bitco.png", name: "BITCO" },
  { logo: "/experience/cannon.png", name: "Cannon" },
  { logo: "/experience/paz_rio.png", name: "PazdelRío" },
  { logo: "/experience/agrolife.png", name: "AGROlife Colombia" },
  { logo: "/experience/procaps.png", name: "Procaps" },
  { logo: "/experience/komatsu.png", name: "Komatsu" },
  { logo: "/experience/eticos.png", name: "Eticos" },
  { logo: "/experience/daluca.png", name: "Daluca International" },
];

function LogoItem({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-white px-6 grayscale transition hover:border-accent/60 hover:grayscale-0">
      <div className="relative h-full w-full">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    </div>
  );
}

export function ExperienceMarquee() {
  const duplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

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
            {duplicated.map((item, i) => (
              <LogoItem key={`${item.name}-${i}`} logo={item.logo} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
