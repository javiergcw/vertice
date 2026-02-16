import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export type ExperienciaCardItem = {
  id: string;
  name: string;
  logo?: string;
  description: string;
  /** Solo algunos tienen sitio web; si no está, no se muestra el botón */
  website?: string;
};

function LogoPlaceholder({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className="flex h-16 w-full max-w-[4rem] items-center justify-center rounded-md border border-border bg-surface text-xl font-semibold text-primary"
      aria-hidden
    >
      {initial}
    </div>
  );
}

type ExperienciaCardProps = {
  item: ExperienciaCardItem;
};

export function ExperienciaCard({ item }: ExperienciaCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="flex min-h-0 flex-1 flex-col p-4">
        {item.logo ? (
          <div className="relative mb-2 h-16 w-16 shrink-0 overflow-hidden rounded-md bg-surface">
            <Image
              src={item.logo}
              alt=""
              fill
              className="object-contain p-1"
              sizes="64px"
            />
          </div>
        ) : (
          <LogoPlaceholder name={item.name} />
        )}
        <h2 className="mt-2 text-sm font-semibold text-foreground">
          {item.name}
        </h2>
        <p className="mt-1 min-h-0 flex-1 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-2 flex min-h-9 items-center">
          {item.website ? (
            <Link
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <ExternalLink className="h-3 w-3" strokeWidth={2} />
              Ver sitio web
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
