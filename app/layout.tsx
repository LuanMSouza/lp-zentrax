import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 1. Configuração de Viewport (Essencial para Mobile SEO)
export const viewport: Viewport = {
  themeColor: "#001529", // Cor do navegador no Android
  width: "device-width",
  initialScale: 1,
};

// 2. Metadata Robusta
export const metadata: Metadata = {
  title: {
    default: "ZentraX | Gestão de Cobrança e Controle de Devedores",
    template: "%s | ZentraX"
  },
  description: "A solução definitiva para lojistas abandonarem o caderninho. Controle devedores, automatize cobranças via WhatsApp e recupere seu crédito com o ZentraX.",
  keywords: ["gestão de cobrança", "controle de devedores", "sistema para lojistas", "automação WhatsApp", "ZentraX", "cobrança inteligente", "gestão financeira varejo"],
  authors: [{ name: "Luan Souza Dev" }],
  creator: "LS Dev",
  publisher: "ZentraX SaaS",
  alternates: {
    canonical: "https://zentrax.dvls.com.br", // Evita conteúdo duplicado
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "ZentraX - O fim do caderninho de cobrança chegou",
    description: "Sua loja organizada e suas cobranças no automático via WhatsApp.",
    url: "https://zentrax.dvls.com.br",
    siteName: "ZentraX",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/icon.png", width: 500, height: 500, alt: "ZentraX Logo" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // 3. JSON-LD (Diz ao Google exatamente o que é o seu software)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZentraX",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Teste grátis por 7 dias"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120"
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}