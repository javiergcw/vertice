"use client";

import { useEffect, useRef, useState } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  /** 0-5 para delay escalonado */
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Solo fade, sin translateY */
  fadeOnly?: boolean;
  /** Porcentaje visible para disparar (0-1), default 0.1 */
  threshold?: number;
};

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  fadeOnly = false,
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `animate-in-delay-${delay}` : "";
  const variantClass = fadeOnly ? "animate-in-fade" : "";

  return (
    <div
      ref={ref}
      className={`animate-in ${variantClass} ${delayClass} ${visible ? "animate-in-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
