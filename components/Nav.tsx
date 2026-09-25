import Image from "next/image";
import Link from "next/link";

// Cabeçalho fixo: antes a home começava direto no hero, sem logo no topo, sem
// link de login e sem CTA visível ao rolar. Âncoras usam /#... pra funcionar
// também nas páginas de segmento.
export default function Nav() {
    return (
        <header className="sticky top-0 z-50 bg-[#001529]/85 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="ZentraX, página inicial">
                    <Image src="/Logo.png" alt="" width={32} height={32} priority />
                    <span className="text-white font-semibold tracking-tight text-lg">ZentraX</span>
                </Link>

                <nav aria-label="Principal" className="hidden md:flex items-center gap-8 text-sm text-slate-300">
                    <Link href="/#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</Link>
                    <Link href="/#como-funciona" className="hover:text-white transition-colors">Como funciona</Link>
                    <Link href="/#planos" className="hover:text-white transition-colors">Preço</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <a href="https://app.zentrax.dvls.com.br" className="text-sm text-slate-300 hover:text-white transition-colors px-2 py-2">
                        Entrar
                    </a>
                    <Link href="/cadastro" className="bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] text-[#001529] text-sm font-semibold px-4 py-2 rounded-lg transition-all">
                        Teste grátis
                    </Link>
                </div>
            </div>
        </header>
    );
}
