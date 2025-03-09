import type { Metadata } from "next";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Site",
  description: "Um site criado com Next.js 14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
