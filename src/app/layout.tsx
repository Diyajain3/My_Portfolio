import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diya Portfolio",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
