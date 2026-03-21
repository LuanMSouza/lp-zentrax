"use client";
import { useEffect, useState } from "react";
import { registrarEmpresa } from "./actions";
import Image from "next/image";
import { Building2, User, ShieldCheck, ArrowRight, Loader2, Dog } from "lucide-react";

export default function PageCadastro() {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

    // 

    const trackAccess = () => {
        const params = new URLSearchParams(window.location.search);

        const payload = JSON.stringify({
            projeto_nome: 'ZentraX-Cadastro',
            pagina_path: window.location.pathname,
            url_completa: window.location.href,
            referrer: document.referrer || 'direto',
            utm_source: params.get('utm_source') || null,
            utm_medium: params.get('utm_medium') || null,
            largura_tela: window.innerWidth,
            idioma: navigator.language,
            user_agent: navigator.userAgent,
        });

        const url = "https://api.analitcs.dvls.com.br/api/track";

        if (navigator.sendBeacon) {
            const blob = new Blob([payload], { type: 'application/json' });
            navigator.sendBeacon(url, blob);
        } else {
            fetch(url, {
                method: 'POST',
                body: payload,
                headers: { 'Content-Type': 'application/json' },
                keepalive: true // Garante que a requisição termine mesmo se sair da página
            }).catch(() => { }); // Falha silenciosa
        }
    };

    useEffect(() => {
        trackAccess()
    }, [])

    // 

    async function clientAction(formData: FormData) {
        setLoading(true);
        setErro("");

        const result = await registrarEmpresa(formData);

        if (result?.error) {
            setErro(result.error);
            setLoading(false);
        } else {
            window.location.href = "https://app.zentrax.dvls.com.br/login?msg=sucesso";
        }
    }

    return (
        <div className="min-h-screen bg-[#001529] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorativo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-[450px] relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-white/5 rounded-2xl border border-white/10 mb-4 backdrop-blur-sm">
                        <Image src="/Logo.png" alt="ZentraX" width={48} height={48} priority />
                    </div>
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Comece sua jornada <span className="text-cyan-400">ZentraX</span>
                    </h1>
                    <p className="text-slate-400 mt-2">7 dias grátis • Sem cartão de crédito</p>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">

                    <div className="p-8">
                        {erro && (
                            <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-800 p-4 rounded-xl mb-6 text-sm flex items-center gap-3 animate-pulse">
                                <ShieldCheck className="text-amber-500" size={20} />
                                <div className="flex flex-col">
                                    <span className="font-bold">Não foi possível avançar:</span>
                                    <span>{erro}</span>
                                </div>
                            </div>
                        )}

                        <form action={clientAction} className="space-y-5">

                            {/* Input Empresa */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Dados da Loja</label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        name="nome"
                                        placeholder="Nome da sua Empresa"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* NOVO: Seletor de Módulo Pet */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Segmento do Negócio</label>
                                <div className="relative">
                                    <Dog className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <select
                                        name="segmento"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 appearance-none cursor-pointer transition-all"
                                    >
                                        <option value="geral">Padrão (Vendas em Geral)</option>
                                        <option value="pet">Módulo Pet (Creche, Hotel e Banho) 🐾</option>
                                    </select>
                                </div>
                            </div>

                            {/* Input Responsável */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Responsável</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        name="nomeResponsavel"
                                        placeholder="Seu nome completo"
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                    />
                                </div>
                            </div>

                            <hr className="border-slate-100 my-2" />

                            {/* Acesso */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Credenciais de Acesso</label>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        name="usuario"
                                        placeholder="Usuário (ex: joao_admin)"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                    />
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input
                                            name="senha"
                                            type="password"
                                            placeholder="Crie uma senha forte"
                                            required
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#004b6b] hover:bg-[#003a54] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 group disabled:opacity-70"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        Criar minha conta agora
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-500">
                            Já tem uma conta? <a href="https://app.zentrax.dvls.com.br" className="text-cyan-600 font-bold hover:underline">Fazer login</a>
                        </p>
                    </div>
                </div>

                <p className="text-center text-slate-500 text-xs mt-8">
                    Ao criar sua conta, você concorda com nossos termos de uso. <br />
                    Desenvolvido com foco na sua privacidade.
                </p>
            </div>
        </div>
    );
}