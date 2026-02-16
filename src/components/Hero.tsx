import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <h1
              id="hero-title"
              className="flex items-start gap-3 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
              <span>Consultoría especializada en logística, comercio exterior y gestión del riesgo</span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
              Impulsamos la eficiencia, seguridad y competitividad en la cadena de suministro con enfoque técnico y visión estratégica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contactanos?motivo=consultoria"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Solicitar asesoría
              </Link>
              <Link
                href="#experiencia"
                className="inline-flex items-center justify-center rounded-lg border-2 border-border bg-white px-6 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Ver experiencia
              </Link>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border-2 border-border bg-surface shadow-sm transition-colors hover:border-accent/40 lg:aspect-square">
            <Image
              src="/Home/Contenedores-en-puerto-3-1-scaled.jpg"
              alt="Cadena de suministro y logística internacional — contenedores y comercio exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
