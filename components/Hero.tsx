// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-[#004b6b] text-white">
            {/* Background Decorativo */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

            {/* Ajustamos o padding inferior (pb-32) para dar espaço para a imagem "vazar" */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 lg:pt-32 lg:pb-48 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/15 text-cyan-300 text-sm font-medium mb-6">
                        Para quem vende fiado
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-6 tracking-tight">
                        Chega de caderninho.<br />
                        <span className="text-cyan-400 block text-balance">Saiba quem te deve e quanto.</span>
                    </h1>
                    <p className="text-lg text-slate-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Cadastre o cliente, lance as notas e cobre pelo WhatsApp com a mensagem pronta. Quando pagarem, dê baixa, inclusive parcial.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-x-6 gap-y-4 items-center justify-center lg:justify-start">
                        <Link href="/cadastro" className="bg-white text-[#004b6b] hover:bg-cyan-50 active:scale-[0.98] font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-black/20">
                            Testar 7 dias grátis
                        </Link>
                        <a href="#como-funciona" className="text-slate-200 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">
                            Ver como funciona
                        </a>
                    </div>
                    <p className="text-sm text-slate-300/80 mt-4">Sem cartão de crédito. Cancele quando quiser.</p>
                </div>

                {/* A Mágica do Overflow está aqui */}
                <div className="flex-1 relative w-full lg:translate-y-16"> {/* Joga a imagem para baixo */}
                    <div className="relative group">
                        {/* Brilho de fundo mais suave */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 to-blue-500/50 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                        <div className="relative bg-[#001529] rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                            {/* Barra do Navegador */}
                            <div className="bg-slate-800/80 px-4 py-3 flex gap-1.5 items-center border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                <div className="ml-4 bg-slate-700/50 rounded text-[10px] px-3 py-1 text-slate-400 font-mono">
                                    app.zentrax.dvls.com.br
                                </div>
                            </div>

                            {/* Imagem do Sistema com Aspect Ratio fixo */}
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    src="/image (35).png"
                                    alt="Dashboard ZentraX"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divisor de onda ou degradê para suavizar a transição para a próxima seção */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
        </section>
    );
}