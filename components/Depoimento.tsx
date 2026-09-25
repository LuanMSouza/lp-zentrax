import { DEPOIMENTO } from "@/lib/depoimento";

// Só aparece quando há um depoimento real em lib/depoimento.ts.
export default function Depoimento() {
    if (!DEPOIMENTO) return null;
    return (
        <section className="bg-white py-20">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <figure>
                    <blockquote className="text-2xl md:text-3xl font-medium text-[#001529] leading-snug tracking-tight">
                        &ldquo;{DEPOIMENTO.texto}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 text-slate-600 text-sm">
                        <span className="font-semibold text-slate-900">{DEPOIMENTO.nome}</span> · {DEPOIMENTO.negocio}
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
