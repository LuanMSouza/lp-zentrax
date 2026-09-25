export default function Planos() {
    return (
        <section id="planos" className="bg-[#001529] py-20 px-6 scroll-mt-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Um plano, tudo incluso</h2>
                <p className="text-slate-400 mb-12">Teste por 7 dias e só depois decida.</p>

                <div className="bg-white/5 border border-cyan-400/25 rounded-3xl p-8 max-w-sm mx-auto shadow-xl shadow-cyan-500/10">
                    <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Plano Único</span>
                    <div className="mt-4 flex items-baseline justify-center">
                        <span className="text-4xl font-extrabold text-white">R$ 49,90</span>
                        <span className="text-slate-400 ml-1 text-lg">/mês</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">No plano anual sai por R$ 29,90/mês.</p>

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
                        <li className="flex items-center text-slate-300">
                            <svg className="h-5 w-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Sem cartão para testar
                        </li>
                        <li className="flex items-center text-slate-300">
                            <svg className="h-5 w-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Cancele quando quiser
                        </li>
                    </ul>

                    <a href="/cadastro" className="mt-10 block w-full bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] text-[#001529] font-semibold py-4 rounded-xl transition-all text-center">
                        Testar 7 dias grátis
                    </a>
                </div>
            </div>
        </section>
    );
}