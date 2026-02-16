"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef, useState } from "react";

export const ADDRESS = "Vía 40 con 98 — Parque Logístico LOGIKA";
// Coordenadas aproximadas: Parque Logístico LOGIKA, Barranquilla (Vía 40 #85-999)
const CENTER: [number, number] = [10.975, -74.782];
const ZOOM = 15;

function createDefaultIcon() {
  return L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

type MapViewProps = {
  className?: string;
  showPopup?: boolean;
};

export function MapView({ className = "", showPopup = true }: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const map = L.map(containerRef.current).setView(CENTER, ZOOM);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const marker = L.marker(CENTER, { icon: createDefaultIcon() }).addTo(map);
    if (showPopup) {
      marker.bindPopup(`<strong>VÉRTICE</strong><br/>${ADDRESS}`).openPopup();
    }

    return () => {
      map.remove();
    };
  }, [mounted, showPopup]);

  return (
    <div
      ref={containerRef}
      className={`relative z-0 h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-border bg-surface-muted ${className}`}
      aria-label="Mapa: ubicación de VÉRTICE"
    />
  );
}
