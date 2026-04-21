import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naya's Baby Registry 🌸 2026",
  description: "Baby shower gift registry for Latifa & Kent — little girl arriving late July or early August 2026!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
