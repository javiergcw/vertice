"use client";

import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const SCROLL_THRESHOLD = 300;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Subir al inicio"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-2 ring-white/30 transition-all duration-500 ease-out hover:scale-110 hover:bg-primary-hover hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUp
        className="h-7 w-7 animate-scroll-up-hint"
        strokeWidth={2.5}
      />
    </button>
  );
}
