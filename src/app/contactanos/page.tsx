import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MapViewDynamic } from "@/components/MapViewDynamic";
import Image from "next/image";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos | VÉRTICE",
  description:
    "Contacte a VÉRTICE. Oficinas en Vía 40 con 98 — Parque Logístico LOGIKA.",
};

const ADDRESS = "Vía 40 con 98 — Parque Logístico LOGIKA";

export default function ContactanosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Título */}
        <section className="border-b border-border bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="flex items-start gap-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="mt-1.5 h-12 w-1 shrink-0 rounded-full bg-accent md:h-14" aria-hidden />
              <span>Contáctanos</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              Escríbenos o visítanos. Estamos listos para apoyar su cadena de suministro, comercio exterior y gestión del riesgo.
            </p>
          </div>
        </section>

        {/* Fila 1: Formulario | Foto (horizontal) */}
        <section className="border-b border-border bg-surface/80 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
              <div className="order-2 rounded-2xl border border-border bg-white p-6 shadow-sm lg:order-1 md:p-8">
                <h2 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
                  Envíanos un mensaje
                </h2>
                <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-surface-muted" />}>
                  <ContactForm />
                </Suspense>
              </div>
              <div className="order-1 relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-surface-muted lg:order-2 lg:min-h-0">
                <Image
                  src="/Contact/customer_service_management-1024x683.jpg"
                  alt="Equipo y consultoría en logística"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fila 2: Dónde estamos — todo en horizontal */}
        <section id="donde-estamos" className="relative z-0 scroll-mt-24 bg-white py-12 md:py-16" aria-labelledby="donde-estamos-title">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="donde-estamos-title" className="mb-8 text-xl font-semibold tracking-tight text-foreground md:mb-10 md:text-2xl">
              Dónde estamos
            </h2>
            <div className="grid gap-8 md:grid-cols-3 md:gap-10">
              {/* Oficinas */}
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  aria-hidden
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-foreground">Oficinas</p>
                  <p className="text-base text-muted-foreground md:text-lg">{ADDRESS}</p>
                </div>
              </div>
              {/* Contacto directo */}
              <div className="flex items-start gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                  aria-hidden
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-foreground">Contacto directo</p>
                  <ul className="mt-1 space-y-1 text-base text-muted-foreground" role="list">
                    <li>
                      <a href="mailto:contacto@vertice.com" className="hover:text-primary">contacto@vertice.com</a>
                    </li>
                    <li>
                      <a href="tel:+573001234567" className="hover:text-primary">+57 300 123 4567</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Mapa */}
              <div className="md:col-span-1">
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <MapViewDynamic className="h-full w-full" showPopup />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
