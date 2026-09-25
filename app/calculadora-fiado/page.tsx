"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { track } from "@/lib/tracking";

// Calculadora simples: dá uma noção do dinheiro parado no fiado. As contas são
// só aritmética sobre o que a pessoa digita, sem número de mercado inventado.
const moeda = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CalculadoraFiado() {
    const [faturamento, setFaturamento] = useState("");
    const [pctFiado, setPctFiado] = useState("20");
    const [pctAtraso, setPctAtraso] = useState("10");

    useEffect(() => { track("ZentraX-LP"); }, []);

    const fat = parseFloat(faturamento.replace(",", ".")) || 0;
    const noFiado = fat * (Math.min(Math.max(parseFloat(pctFiado) || 0, 0), 100) / 100);
    const atrasado = noFiado * (Math.min(Math.max(parseFloat(pctAtraso) || 0, 0), 100) / 100);
    const mostrar = fat > 0;

    const campo = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10";

    return (
        <div className="min-h-screen bg-[#001529] flex items-center justify-center p-4">
            <div className="w-full max-w-[480px]">
                <h1 className="text-3xl font-extrabold text-white text-center mb-2">Quanto o fiado está segurando?</h1>
                <p className="text-slate-400 text-center mb-8">Preencha com valores aproximados.</p>

                <div className="bg-white rounded-3xl p-8 space-y-5">
                    <label className="block">
                        <span className="text-xs font-bold text-slate-500 uppercase">Quanto você vende por mês (R$)</span>
                        <input inputMode="decimal" value={faturamento} onChange={e => setFaturamento(e.target.value)} placeholder="Ex.: 15000" className={campo} />
                    </label>
                    <label className="block">
                        <span className="text-xs font-bold text-slate-500 uppercase">Que % dessas vendas é fiado?</span>
                        <input inputMode="numeric" value={pctFiado} onChange={e => setPctFiado(e.target.value)} className={campo} />
                    </label>
                    <label className="block">
                        <span className="text-xs font-bold text-slate-500 uppercase">Que % do fiado costuma atrasar?</span>
                        <input inputMode="numeric" value={pctAtraso} onChange={e => setPctAtraso(e.target.value)} className={campo} />
                    </label>

                    {mostrar && (
                        <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5 space-y-2 text-slate-800">
                            <p>Por mês, você deixa <strong>{moeda(noFiado)}</strong> para receber depois.</p>
                            <p>Desse total, cerca de <strong>{moeda(atrasado)}</strong> fica em atraso.</p>
                            <p className="text-sm text-slate-500">Cálculo simples com os números que você informou.</p>
                        </div>
                    )}

                    <Link href="/cadastro?utm_source=calculadora&utm_medium=organico&utm_campaign=calculadora_fiado"
                        className="block text-center bg-[#004b6b] text-white hover:bg-[#003a54] font-bold py-4 rounded-xl transition-all">
                        Organizar meu fiado grátis por 14 dias
                    </Link>
                </div>
            </div>
        </div>
    );
}
