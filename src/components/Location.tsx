import { MapViewDynamic } from "./MapViewDynamic";

const ADDRESS = "Vía 40 con 98 — Parque Logístico LOGIKA";

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative scroll-mt-24 bg-surface/80 py-16 md:py-20"
      aria-labelledby="location-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="location-title"
          className="mb-8 text-3xl font-semibold tracking-tight text-foreground md:mb-10 md:text-4xl"
        >
          Ubicación
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-foreground">Oficinas</p>
              <p className="text-base text-muted-foreground md:text-lg">{ADDRESS}</p>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl">
            <MapViewDynamic className="h-full w-full" showPopup />
          </div>
        </div>
      </div>
    </section>
  );
}
