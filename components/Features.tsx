import { MessageSquare, LayoutDashboard, History, CheckCircle, Users } from 'lucide-react';
import type { ReactNode } from 'react';

type Feature = { icon: ReactNode; title: string; description: string; destaque?: boolean };

const FEATURES: Feature[] = [
    {
        icon: <MessageSquare size={24} />,
        title: "Cobrança pelo WhatsApp",
        description: "Escolha entre 4 modelos de mensagem. O sistema preenche o nome e o valor do cliente e você envia em um clique.",
        destaque: true,
    },
    {
        icon: <CheckCircle size={22} />,
        title: "Baixa automática",
        description: "Um pagamento avulso abate as notas mais antigas primeiro, e o saldo de quem pagou só uma parte fica certo.",
    },
    {
        icon: <LayoutDashboard size={22} />,
        title: "Controle de notas",
        description: "Lance pedidos e acompanhe o saldo restante de cada um. Edite quando precisar e veja o total devedor.",
    },
    {
        icon: <History size={22} />,
        title: "Histórico de alterações",
        description: "Veja quem cadastrou, alterou ou excluiu cada cliente, pagamento ou nota.",
    },
    {
        icon: <Users size={22} />,
        title: "Equipe com permissões",
        description: "Perfis de gestor e de usuário, para cada pessoa fazer só o que deve.",
    },
];

// Bento em vez de 5 cards iguais numa grade 3+2: o destaque (WhatsApp, que é o
// que o cliente mais quer) ocupa 2 colunas e a grade fecha em duas linhas cheias.
export default function Features() {
    return (
        <section id="funcionalidades" className="py-24 bg-slate-50 scroll-mt-16">
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
