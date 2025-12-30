import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deployed Next.js App",
  description: "Automatically deployed via GitHub and Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}