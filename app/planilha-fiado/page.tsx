"use client";
import { useEffect } from "react";
import Link from "next/link";
import { lembrarParametros } from "@/lib/tracking";
import { TRIAL_DIAS } from "@/lib/config";

// Isca do Instagram (20/10/2026): quem comenta FIADO no @zentrax.dvls recebe este link no direct.
// A planilha é de graça de verdade; o convite pro teste vem depois do download, sem obrigar cadastro.
const ARQUIVO = "/planilha-controle-de-fiado.xlsx";

export default function PlanilhaFiado() {
    useEffect(() => { lembrarParametros(); }, []);
    return (
        <div className="min-h-screen bg-[#001529] flex items-center justify-center p-4">
            <div className="w-full max-w-[520px] py-10">
                <p className="text-cyan-300 text-sm font-bold uppercase tracking-wider text-center mb-3">De graça</p>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-3">Planilha de controle de fiado</h1>
                <p className="text-slate-300 text-center mb-8">Anota cada venda a prazo e a planilha te mostra quem tá devendo, quanto falta e há quantos dias tá atrasado.</p>

                <div className="bg-white rounded-3xl p-8 text-slate-800">
                    <ul className="space-y-3 mb-7 text-[15px]">
                        <li><strong>Falta e dias de atraso</strong> calculam sozinhos</li>
                        <li><strong>Atrasado fica vermelho</strong>, pago fica verde</li>
                        <li><strong>Resumo</strong> com quanto você tem na rua e quanto tá atrasado</li>
                        <li>Abre no Excel, no Google Planilhas e no celular</li>
                    </ul>
                    <a href={ARQUIVO} download
                        className="block text-center bg-[#ffd23f] text-[#001529] hover:brightness-95 font-extrabold py-4 rounded-xl transition-all text-lg">
                        Baixar a planilha grátis
                    </a>
                    <p className="text-xs text-slate-500 text-center mt-3">Sem cadastro. É só baixar.</p>
                </div>

                <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-[#002338] p-7 text-center">
                    <p className="text-white font-bold text-lg mb-2">Cansou de planilha?</p>
                    <p className="text-slate-300 text-sm mb-5">No ZentraX você lança a venda pelo celular e vê na hora quem tá atrasado, sem fórmula pra quebrar.</p>
                    <Link href="/cadastro?utm_source=instagram&utm_medium=planilha&utm_campaign=planilha_fiado"
                        className="block text-center bg-[#004b6b] text-white hover:bg-[#003a54] font-bold py-4 rounded-xl transition-all">
                        Testar {TRIAL_DIAS} dias grátis
                    </Link>
                </div>
            </div>
        </div>
    );
}
