// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative bg-[#004b6b] text-white">
            {/* Background Decorativo */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

            {/* Ajustamos o padding inferior (pb-32) para dar espaço para a imagem "vazar" */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 lg:pt-32 lg:pb-48 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 text-center lg:text-left">
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-sm font-semibold mb-6">
                        O fim do caderninho chegou!
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                        Gestão de Cobrança <br />
                        <span className="text-cyan-400">Inteligente para sua Loja</span>
                    </h1>
                    <p className="text-lg text-slate-200 mb-10 max-w-xl mx-auto lg:mx-0">
                        Abandone o papel e a calculadora. Com o ZentraX, você controla clientes devedores, automatiza baixas e cobra pelo WhatsApp em segundos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href='/cadastro' className="bg-white cursor-pointer text-[#004b6b] hover:bg-cyan-50 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:scale-105">
                            Começar Teste Grátis
                        </a>
                        <a
                            href="#como-funciona" // Âncoras para a seção de passos que criamos
                            className="border border-white/30 hover:bg-white/10 font-medium py-4 px-8 rounded-xl transition-all text-center"
                        >
                            Ver Demonstração
                        </a>
                    </div>
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
                                    zentrax.dvls.com.br
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