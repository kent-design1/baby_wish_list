import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latifa's Baby Registry 🌸 July 2026",
  description: "Baby shower gift registry for Latifa & Kent — little girl arriving July 2026!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
