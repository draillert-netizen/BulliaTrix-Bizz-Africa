import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BulliaTrix-Bizz-Africa",
  description: "Empowering African Businesses with Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="text-foreground">
        {children}
      </body>
    </html>
  );
}
