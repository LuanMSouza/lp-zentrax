import { UserPlus, FileEdit, Send } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: "1. Cadastre o cliente",
            description: "Adicione o nome e o WhatsApp do cliente. O ZentraX valida duplicidade para você não se confundir."
        },
        {
            icon: <FileEdit size={32} />,
            title: "2. Lance as notas",
            description: "Registre as dívidas com descrição e valor. O sistema calcula o saldo devedor total automaticamente."
        },
        {
            icon: <Send size={32} />,
            title: "3. Cobre e receba",
            description: "Escolha um template, mande pro WhatsApp e dê baixa (total ou parcial) assim que receber."
        }
    ];

    return (
        <section id="como-funciona" className="py-20 bg-white scroll-mt-16">
            < div className="max-w-7xl mx-auto px-6" >
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-[#001529]">Simples como deve ser</h2>
                    <p className="text-slate-500 mt-4">Três passos para organizar o financeiro da sua loja</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Linha conectora (visível apenas no desktop) */}
                    <div className="hidden md:block absolute top-10 left-[16%] w-[68%] h-0.5 bg-slate-200" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-[#004b6b] text-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h3>
                            <p className="text-slate-600 px-4">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
}