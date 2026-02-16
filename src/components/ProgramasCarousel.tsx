"use client";

import {
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Globe,
  Handshake,
  PackageCheck,
  ShieldAlert,
} from "lucide-react";
import { useRef } from "react";

const ICON_MAP = {
  Globe,
  ShieldAlert,
  PackageCheck,
  ClipboardCheck,
  Handshake,
} as const;

export type ProgramaItem = {
  title: string;
  description: string;
  /** Descripción completa para la lista (si no se define, se usa description) */
  descriptionLista?: string;
  /** Nombre del icono Lucide (serializable para Server Components) */
  icon?: string;
  /** Color en hex para el icono */
  iconColor?: string;
};

type ProgramasCarouselProps = {
  items: ProgramaItem[];
  /** id del heading para accesibilidad (no usado en vista multi-card) */
  headingId?: string;
};

export function ProgramasCarousel({ items, headingId }: ProgramasCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next", target?: HTMLButtonElement) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth;
    el.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
    target?.blur();
  };

  if (items.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex w-full gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth md:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Programas de formación"
      >
        {items.map((item) => {
          const IconComponent = item.icon && item.icon in ICON_MAP ? ICON_MAP[item.icon as keyof typeof ICON_MAP] : null;
          return (
          <article
            key={item.title}
            className="flex shrink-0 snap-start rounded-2xl border border-border bg-card-bg p-6 shadow-sm md:p-8 w-full min-w-full sm:w-[calc((100%-1rem)/2)] sm:min-w-[calc((100%-1rem)/2)] md:w-[calc((100%-2*1.5rem)/3)] md:min-w-[calc((100%-2*1.5rem)/3)] lg:w-[calc((100%-3*1.5rem)/4)] lg:min-w-[calc((100%-3*1.5rem)/4)]"
          >
            <div className="min-w-0 flex-1">
              {IconComponent ? (
                <span
                  className="mb-2 flex shrink-0 justify-start"
                  style={{ color: item.iconColor ?? "currentColor" }}
                  aria-hidden
                >
                  <IconComponent size={24} strokeWidth={2} className="shrink-0" />
                </span>
              ) : null}
              <h3
                id={headingId}
                className="text-lg font-semibold text-primary md:text-xl"
              >
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={(e) => scroll("prev", e.currentTarget)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label="Ver programas anteriores"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={(e) => scroll("next", e.currentTarget)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label="Ver programas siguientes"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
