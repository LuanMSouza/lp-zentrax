import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Planilha grátis de controle de fiado",
    description: "Baixe grátis a planilha pra controlar o fiado: quem deve, quanto e há quantos dias está atrasado.",
    alternates: { canonical: "/planilha-fiado" },
};

export default function PlanilhaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
