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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:wght@400;500;700&family=Special+Elite&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white font-poppins">
        {children}
      </body>
    </html>
  );
}
