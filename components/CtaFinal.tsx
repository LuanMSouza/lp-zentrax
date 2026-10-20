import Link from "next/link";
import CtaCaderno from "./CtaCaderno";

export default function CtaFinal() {
    return (
        <section className="bg-[#004b6b] text-white">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Em 14 dias você descobre se funciona para o seu negócio
                </h2>
                <p className="text-slate-200 mb-8">Tem tudo no caderno? Me manda uma foto que eu passo seus clientes pro sistema. Você só confere e começa a usar.</p>
                <CtaCaderno origem="rodapé" className="inline-block bg-white text-[#004b6b] hover:bg-cyan-50 active:scale-[0.98] font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-black/20">
                    Mandar foto do caderno
                </CtaCaderno>
                <p className="text-sm text-slate-300 mt-4">Ou <Link href="/cadastro" className="underline hover:text-white">crie a conta sozinho</Link> em um minuto. Sem cartão de crédito.</p>
            </div>
        </section>
    );
}
