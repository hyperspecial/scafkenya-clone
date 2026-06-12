import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCAFKENYA - Sickle Cell Awareness Foundation Kenya",
  description: "A community health center dedicated to sickle cell awareness and support in Mombasa, Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
