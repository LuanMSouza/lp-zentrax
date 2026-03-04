export default function Planos() {
    return (
        <section id="planos" className="bg-slate-900 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Preço justo para o seu negócio</h2>
                <p className="text-slate-400 mb-12">Comece agora e recupere suas dívidas em poucos cliques.</p>

                <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-8 max-w-sm mx-auto shadow-xl shadow-cyan-500/10 hover:scale-105 transition-all duration-300">
                    <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Plano Único</span>
                    <div className="mt-4 flex items-baseline justify-center">
                        <span className="text-4xl font-extrabold text-white">R$ 49</span>
                        <span className="text-slate-400 ml-1 text-lg">/mês</span>
                    </div>

                    <ul className="mt-8 space-y-4 text-left">
                        <li className="flex items-center text-slate-300">
                            <svg className="h-5 w-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Clientes Ilimitados
                        </li>
                        <li className="flex items-center text-slate-300">
                            <svg className="h-5 w-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Cobranças ilimitadas no WhatsApp
                        </li>
                        <li className="flex items-center text-slate-300">
                            <svg className="h-5 w-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            7 dias de teste grátis
                        </li>
                    </ul>

                    <a href="/cadastro" className="mt-10 block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-4 rounded-xl transition-all text-center">
                        COMEÇAR TESTE GRÁTIS
                    </a>
                </div>
            </div>
        </section>
    );
}