import { MessageSquare, LayoutDashboard, History, CheckCircle, Users, ShieldCheck } from 'lucide-react';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => (
    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-cyan-100 text-[#004b6b] rounded-lg flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

export default function Features() {
    const features = [
        {
            icon: <MessageSquare size={24} />,
            title: "Cobrança via WhatsApp",
            description: "Envie mensagens personalizadas com 4 modelos de templates prontos. O sistema gera o texto com nome e valor do cliente em um clique."
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Baixa Inteligente",
            description: "Pagamentos avulsos são distribuídos automaticamente entre as notas mais antigas, facilitando o controle de saldos parciais."
        },
        {
            icon: <History size={24} />,
            title: "Histórico e Auditoria",
            description: "Saiba exatamente quem fez cada alteração. O sistema registra logs de novos clientes, pagamentos e exclusões para sua segurança."
        },
        {
            icon: <LayoutDashboard size={24} />,
            title: "Gestão de Notas",
            description: "Lançamento rápido de pedidos com controle de saldo restante, permitindo edições e visualização clara do total devedor."
        },
        {
            icon: <Users size={24} />,
            title: "Multi-Usuários",
            description: "Perfis de Gestor e Administrador. Controle permissões e veja quem da sua equipe está operando o sistema."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Contas Futuras",
            description: "Além de receber, organize seus pagamentos internos com o módulo de contas a pagar integrado."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Tudo o que você precisa para organizar sua loja
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Saia do amadorismo e tenha uma gestão financeira profissional com ferramentas pensadas para o comércio local.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}