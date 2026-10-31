import { MessageSquare, Printer, Smartphone, BarChart3, IdCard, Wallet, CheckCircle, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';

type Feature = { icon: ReactNode; title: string; description: string; destaque?: boolean };

const FEATURES: Feature[] = [
    {
        icon: <MessageSquare size={24} />,
        title: "Cobrança pelo WhatsApp, com Pix",
        description: "O ZentraX monta a mensagem com o nome do cliente, o valor e o Pix copia e cola. Você cobra os atrasados um atrás do outro e lembra quem combinou de pagar hoje.",
        destaque: true,
    },
    {
        icon: <Printer size={22} />,
        title: "Comprovante na térmica",
        description: "Mostra quanto ele devia, quanto pagou, quais notas abateu e o QR do Pix com o que falta. Sai com a logo da sua loja.",
    },
    {
        icon: <Smartphone size={22} />,
        title: "Extrato no celular do cliente",
        description: "Você manda um link e o cliente vê as notas dele. Não precisa de login nem de app.",
    },
    {
        icon: <BarChart3 size={22} />,
        title: "Relatórios",
        description: "Quem mais compra, quem mais paga, quem demora e quem sumiu. Todo dia 1º o resumo do mês chega no seu e-mail.",
    },
    {
        icon: <IdCard size={22} />,
        title: "Ficha do cliente",
        description: "Limite de fiado, aniversário, observações e quantos dias ele costuma levar pra pagar.",
    },
    {
        icon: <Wallet size={22} />,
        title: "Fechamento do caixa",
        description: "Quanto entrou no dia em dinheiro, Pix e cartão. Dá pra conferir na tela ou imprimir.",
    },
    {
        icon: <CheckCircle size={22} />,
        title: "Baixa automática",
        description: "Um pagamento avulso abate as notas mais antigas primeiro, e o saldo de quem pagou só uma parte fica certo.",
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Equipe com permissões",
        description: "Você decide o que cada atendente pode ver e fazer, e o histórico mostra quem fez o quê.",
    },
];

// Bento: o destaque (WhatsApp, que é o que o cliente mais quer) ocupa 2 colunas; com mais 7 cards a grade fecha
// em três linhas cheias (2+1, 3, 3). Mudou a quantidade? Confere se a última linha não fica com buraco.
export default function Features() {
    return (
        <section id="funcionalidades" className="pt-16 pb-24 bg-slate-50 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
                        Tudo o que o caderninho fazia, sem perder nenhuma nota
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Controle de clientes, notas e cobranças feito para o comércio local.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {FEATURES.map(f => (
                        <div
                            key={f.title}
                            className={
                                f.destaque
                                    ? "md:col-span-2 p-8 md:p-10 rounded-3xl bg-[#004b6b] text-white flex flex-col justify-between gap-10 min-h-[240px]"
                                    : "p-8 rounded-3xl bg-white ring-1 ring-slate-900/5 hover:ring-cyan-500/30 transition-shadow"
                            }
                        >
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${f.destaque ? "bg-white/10 text-cyan-300" : "bg-cyan-50 text-[#004b6b]"}`}>
                                {f.icon}
                            </div>
                            <div>
                                <h3 className={`font-semibold mb-2 tracking-tight ${f.destaque ? "text-2xl" : "text-lg text-slate-900"}`}>{f.title}</h3>
                                <p className={`leading-relaxed ${f.destaque ? "text-slate-200 max-w-md" : "text-slate-600 text-[15px]"}`}>{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
