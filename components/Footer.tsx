import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#001529] text-white py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Coluna 1: Logo e Bio */}
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
                        <div className="relative h-10 w-32">
                            <Image
                                src="/Logo.png"
                                alt="ZentraX Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Simplificando a gestão de cobranças para pequenos negócios. Recupere seu faturamento com inteligência e agilidade.
                        </p>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Sistema</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#funcionalidades" className="hover:text-cyan-400 transition-colors">Funcionalidades</Link></li>
                            <li><Link href="#planos" className="hover:text-cyan-400 transition-colors">Planos</Link></li>
                            <li><Link href="https://app.zentrax.dvls.com.br" className="hover:text-cyan-400 transition-colors">Acessar Painel</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Suporte */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Suporte</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="https://wa.me/5513998087787" className="hover:text-cyan-400 transition-colors">Central de Ajuda</a></li>
                            <li><a href="mailto:luan.soya@gmail.com.br" className="hover:text-cyan-400 transition-colors">E-mail</a></li>
                            <li className="text-xs italic text-slate-500">Atendimento seg à sex, 09h às 18h</li>
                        </ul>
                    </div>

                    {/* Coluna 4: Desenvolvedor (LS Dev) */}
                    <div className="flex flex-col items-start md:items-end">
                        <p className="text-slate-400 text-[10px] mb-2 uppercase tracking-[0.2em] font-medium">
                            Desenvolvido por
                        </p>
                        <div className="flex items-center gap-3 group">
                            <div className="relative w-8 h-8 rounded-md overflow-hidden bg-slate-800 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                <Image
                                    src="/Logo dark-padrao.png"
                                    alt="LS Dev Logo"
                                    fill
                                    className="object-cover scale-110"
                                />
                            </div>
                            <span className="font-bold text-lg tracking-tighter group-hover:text-cyan-400 transition-colors">
                                LUAN SOUZA <span className="text-cyan-400">DEV</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Linha Final: Copyright */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © 2026 ZentraX - Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500 font-medium">
                        <Link href="/termos" className="hover:text-slate-300">Termos de Uso</Link>
                        <Link href="/privacidade" className="hover:text-slate-300">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}