import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Criar conta",
    alternates: { canonical: "/cadastro" },
};

export default function CadastroLayout({ children }: { children: React.ReactNode }) {
    return children;
}
