"use client";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

// Botão pro /cadastro que preserva a origem: quem chegou por e-mail/WhatsApp
// (utm_source/utm_medium/utm_campaign na URL) mantém essa atribuição, em vez de
// virar "seo". O `lid` já vive na sessão (lib/tracking.ts), então não precisa
// ir na URL. Sem UTM na entrada, usa o padrão orgânico passado em hrefBase.
export default function CtaCadastro({ hrefBase, className, children }: { hrefBase: string; className?: string; children: ReactNode }) {
    const [href, setHref] = useState(hrefBase);

    useEffect(() => {
        const atual = new URLSearchParams(window.location.search);
        if (!atual.get("utm_source")) return;
        const novo = new URLSearchParams();
        for (const k of ["utm_source", "utm_medium", "utm_campaign"]) {
            const v = atual.get(k);
            if (v) novo.set(k, v);
        }
        setHref(`/cadastro?${novo.toString()}`);
    }, [hrefBase]);

    return <Link href={href} className={className}>{children}</Link>;
}
