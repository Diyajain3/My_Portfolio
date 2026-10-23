import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diya Jain — Full Stack Developer",
  description: "Portfolio of Diya Jain, a full-stack developer building useful things for the web with React, Node.js and modern databases.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body>{children}</body></html>;
}
