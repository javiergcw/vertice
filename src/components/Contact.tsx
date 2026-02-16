import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contacto"
      className="bg-white py-16 md:py-20"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          id="contact-title"
          className="mb-4 inline-block border-b-2 border-accent pb-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Contacto
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
          ¿Listo para fortalecer su cadena de suministro? Escríbenos o llámanos.
        </p>
        <Link
          href="/contactanos"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
