import type { ReactNode } from "react";

// Botão principal da LP desde 20/10/2026: "manda foto do caderno que eu cadastro". Nas primeiras
// semanas 9 pessoas chegaram no /cadastro e nenhuma começou a preencher; esse público não cria conta
// sozinho, mas manda uma foto no WhatsApp. O clique em wa.me já é contado pelo rastreio.js (whats).
// `origem` vai no texto pra saber de qual página veio a conversa.
export const WHATS_CADERNO = (origem: string) =>
    `https://wa.me/5513998087787?text=${encodeURIComponent(`Oi Luan, vi o ZentraX (${origem}) e quero mandar a foto do meu caderno de fiado`)}`;

export default function CtaCaderno({ origem, className, children }: { origem: string; className?: string; children: ReactNode }) {
    return <a href={WHATS_CADERNO(origem)} target="_blank" rel="noopener" className={className}>{children}</a>;
}
