import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#001529] text-white py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* Lado Esquerdo: ZentraX */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="relative h-12 w-40"> {/* Container para controlar o tamanho visual */}
                        <Image
                            src="/Logo.png"
                            alt="ZentraX Logo"
                            fill // Ocupa o container acima
                            className="object-contain" // Mantém a proporção sem esticar
                            priority
                        />
                    </div>
                    <p className="text-slate-400 text-sm">© 2024 ZentraX - Gestão Inteligente.</p>
                </div>

                {/* Lado Direito: LS Dev */}
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-slate-400 text-[10px] mb-2 uppercase tracking-[0.2em] font-medium">
                        Desenvolvido por
                    </p>
                    <div className="flex items-center gap-3 group">
                        <div className="relative w-8 h-8 rounded-md overflow-hidden bg-slate-800">
                             <Image
                                src="/Logo dark-padrao.png"
                                alt="LS Dev Logo"
                                fill
                                className="object-cover scale-110" // Ajuste para o logo preencher bem o quadradinho
                            />
                        </div>
                        <span className="font-bold text-lg tracking-tighter">
                            LUAN SOUZA <span className="text-cyan-400">DEV</span>
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}