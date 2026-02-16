"use client";

import dynamic from "next/dynamic";

const MapViewClient = dynamic(
  () => import("@/components/MapView").then((m) => ({ default: m.MapView })),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-surface-muted" />
    ),
  }
);

type MapViewDynamicProps = {
  className?: string;
  showPopup?: boolean;
};

export function MapViewDynamic({ className, showPopup = true }: MapViewDynamicProps) {
  return <MapViewClient className={className} showPopup={showPopup} />;
}
