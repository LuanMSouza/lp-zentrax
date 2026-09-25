import Link from "next/link";
import { SEGMENTOS } from "@/lib/segmentos";

// "Para quem é": a home não dizia isso em lugar nenhum. Cada item leva à página
// do segmento (também vira link interno pro SEO dessas páginas).
export default function ParaQuem() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold text-[#001529] tracking-tight mb-3">Feito para quem vende fiado</h2>
                <p className="text-slate-600 mb-8 max-w-xl">Se você anota quem deve, quanto e até quando, o ZentraX é para o seu negócio.</p>
                <ul className="flex flex-wrap gap-2.5">
                    {SEGMENTOS.map(s => (
                        <li key={s.slug}>
                            <Link
                                href={`/para/${s.slug}`}
                                className="inline-block px-4 py-2 rounded-full bg-white ring-1 ring-slate-900/10 text-sm text-slate-700 hover:ring-[#004b6b] hover:text-[#004b6b] transition-colors first-letter:uppercase"
                            >
                                {s.plural}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
