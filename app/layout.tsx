import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZentraX | Gestão de Cobrança Inteligente para Lojistas",
  description: "Abandone o caderninho! Controle clientes devedores, automatize cobranças via WhatsApp e organize suas vendas com o ZentraX.",
  keywords: ["gestão de cobrança", "controle de devedores", "sistema para lojistas", "automação WhatsApp", "ZentraX"],
  authors: [{ name: "Luan Souza Dev" }],
  openGraph: {
    title: "ZentraX - O fim do caderninho chegou",
    description: "Sua loja organizada e suas cobranças em dia.",
    url: "https://zentrax.dvls.com.br",
    siteName: "ZentraX",
    images: [
      {
        url: "/favicon.png", // Uma imagem legal para quando compartilhar no Whats/Insta
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
