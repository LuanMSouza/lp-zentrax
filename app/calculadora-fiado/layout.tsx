import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora do fiado",
    alternates: { canonical: "/calculadora-fiado" },
};

export default function CalculadoraLayout({ children }: { children: React.ReactNode }) {
    return children;
}
