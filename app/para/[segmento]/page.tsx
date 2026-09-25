import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Track from "@/components/Track";
import CtaCadastro from "@/components/CtaCadastro";
import { SEGMENTOS, pegarSegmento } from "@/lib/segmentos";

export const dynamicParams = false;
export function generateStaticParams() {
    return SEGMENTOS.map(s => ({ segmento: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ segmento: string }> }): Promise<Metadata> {
    const s = pegarSegmento((await params).segmento);
    if (!s) return {};
    const titulo = `Controle de fiado para ${s.plural} | ZentraX`;
    const descricao = s.descricao;
    return {
        title: titulo,
        description: descricao,
        alternates: { canonical: `https://zentrax.dvls.com.br/para/${s.slug}` },
        openGraph: { title: titulo, description: descricao, url: `https://zentrax.dvls.com.br/para/${s.slug}`, type: "website" },
    };
}

export default async function PaginaSegmento({ params }: { params: Promise<{ segmento: string }> }) {
    const s = pegarSegmento((await params).segmento);
    if (!s) notFound();
    const cta = `/cadastro?utm_source=seo&utm_medium=organico&utm_campaign=${s.slug}`;

    return (
        <>
            <Track />
            <section className="bg-[#004b6b] text-white">
                <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-sm font-semibold mb-6">
                        Para {s.plural}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                        Chega de anotar fiado no caderno, <span className="text-cyan-400">{s.quem}</span>
                    </h1>
                    <p className="text-lg text-slate-200 mb-10">
                        No dia a dia de {s.plural}, o fiado costuma ser {s.dor} O ZentraX mostra quanto cada cliente deve, quando vence e permite cobrar pelo WhatsApp em segundos.
                    </p>
                    <CtaCadastro hrefBase={cta} className="inline-block bg-white text-[#004b6b] hover:bg-cyan-50 font-bold py-4 px-8 rounded-xl transition-all shadow-lg">
                        Começar teste grátis de 7 dias
                    </CtaCadastro>
                    <p className="text-sm text-slate-300 mt-3">Sem cartão de crédito e sem compromisso.</p>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Situações que você provavelmente conhece</h2>
                    <ul className="space-y-3 mb-12">
                        {s.exemplos.map(e => (
                            <li key={e} className="flex gap-3 text-slate-700"><span className="text-cyan-600 font-bold">•</span>{e}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Como o ZentraX ajuda</h2>
                    <ul className="space-y-3 mb-12 text-slate-700">
                        <li><strong>Saldo de cada cliente à mão.</strong> Veja em segundos quem deve e quanto.</li>
                        <li><strong>Vencimentos claros.</strong> Saiba o que vence hoje e o que já atrasou.</li>
                        <li><strong>Cobrança pelo WhatsApp.</strong> Mande a mensagem de cobrança sem digitar tudo de novo.</li>
                        <li><strong>Baixa de pagamentos.</strong> Registre o que entrou e o saldo se atualiza.</li>
                    </ul>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 mb-12">
                        <p className="text-slate-700 mb-3">Quer saber quanto o fiado pode estar custando por mês?</p>
                        <Link href="/calculadora-fiado?utm_source=seo" className="text-[#004b6b] font-semibold underline">Use a calculadora do fiado</Link>
                    </div>

                    <CtaCadastro hrefBase={cta} className="inline-block bg-[#004b6b] text-white hover:bg-[#003a54] font-bold py-4 px-8 rounded-xl transition-all">
                        Testar o ZentraX grátis
                    </CtaCadastro>
                </div>
            </section>
            <Footer />
        </>
    );
}
