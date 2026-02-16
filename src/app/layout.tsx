import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VÉRTICE | Consultoría en logística, comercio exterior y gestión del riesgo",
  description:
    "Firma boutique de consultoría especializada en logística, cadena de suministro, comercio exterior y gestión del riesgo. Costa Caribe.",
  icons: {
    icon: "/faviconnew.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTopButton />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
