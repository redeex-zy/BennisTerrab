import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groupe Scolaire Bennis et Terrab",
  description: "Middle School & High School in Kenitra, Morocco.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
