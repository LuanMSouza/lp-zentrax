import Link from "next/link";

export default function CtaFinal() {
    return (
        <section className="bg-[#004b6b] text-white">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Em 14 dias você descobre se funciona para o seu negócio
                </h2>
                <p className="text-slate-200 mb-8">Crie a conta em um minuto. Sem cartão de crédito.</p>
                <Link href="/cadastro" className="inline-block bg-white text-[#004b6b] hover:bg-cyan-50 active:scale-[0.98] font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-black/20">
                    Testar 14 dias grátis
                </Link>
            </div>
        </section>
    );
}
