import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso",
};

export default function TermosDeUso() {
    return (
        <>
            <div className="bg-[#001529] text-white py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="text-cyan-400 hover:underline text-sm">&larr; Voltar para o início</Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-4">Termos de Uso</h1>
                    <p className="text-slate-400 mt-2">Última atualização: setembro de 2026</p>
                </div>
            </div>

            <div className="bg-white py-12 px-6">
                <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-8">

                    <p className="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                        Este documento é um modelo inicial e ainda não passou por revisão jurídica.
                        Recomenda-se validação com um advogado antes de considerá-lo definitivo para uso comercial.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">1. Sobre o ZentraX</h2>
                        <p>
                            O ZentraX é um sistema de gestão de cobrança e controle de devedores, oferecido como
                            software como serviço (SaaS) por LS Dev, de titularidade de Luan Souza ("nós", "nossa
                            empresa"). Ao criar uma conta ou utilizar o ZentraX, você ("cliente", "usuário") concorda
                            com estes Termos de Uso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">2. Cadastro e conta</h2>
                        <p>
                            Para usar o ZentraX, é necessário criar uma conta com dados verdadeiros, completos e
                            atualizados. Você é responsável por manter a confidencialidade das credenciais de acesso
                            da sua conta e de todos os usuários que criar dentro dela, bem como por todas as
                            atividades realizadas sob essas credenciais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">3. Plano, cobrança e teste grátis</h2>
                        <p>
                            O ZentraX é oferecido mediante assinatura mensal recorrente, com um período de teste
                            grátis conforme divulgado no momento da contratação. O valor, a forma e a periodicidade
                            de cobrança podem ser alterados mediante aviso prévio. O não pagamento pode resultar na
                            suspensão ou cancelamento do acesso à conta.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">4. Uso permitido</h2>
                        <p>
                            Você se compromete a utilizar o ZentraX apenas para fins lícitos, relacionados à gestão
                            do seu próprio negócio, e a não utilizar o sistema para armazenar, processar ou divulgar
                            dados de forma que viole a legislação aplicável, incluindo a Lei Geral de Proteção de
                            Dados (Lei nº 13.709/2018 — LGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">5. Responsabilidade sobre os dados inseridos</h2>
                        <p>
                            Você é o único responsável pela exatidão, legalidade e adequação dos dados que insere no
                            ZentraX, incluindo dados de clientes de terceiros (nome, WhatsApp, documento e valores em
                            aberto). Ao inserir dados de terceiros no sistema, você declara possuir base legal e
                            legitimidade para fazê-lo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">6. Disponibilidade do serviço</h2>
                        <p>
                            Envidamos esforços razoáveis para manter o ZentraX disponível de forma contínua, mas não
                            garantimos disponibilidade ininterrupta. Manutenções, atualizações ou fatores fora do
                            nosso controle podem causar indisponibilidade temporária.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">7. Cancelamento</h2>
                        <p>
                            Você pode cancelar sua assinatura a qualquer momento entrando em contato pelos canais de
                            suporte informados no rodapé do site. Após o cancelamento, o acesso à conta poderá ser
                            suspenso e os dados eventualmente removidos após um prazo razoável, respeitada a
                            legislação aplicável.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">8. Alterações destes termos</h2>
                        <p>
                            Estes termos podem ser atualizados periodicamente. Alterações relevantes serão
                            comunicadas pelos canais habituais de contato com o cliente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">9. Contato</h2>
                        <p>
                            Dúvidas sobre estes Termos de Uso podem ser enviadas para{" "}
                            <a href="mailto:luan@dvls.com.br" className="text-cyan-700 hover:underline">luan@dvls.com.br</a>.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </>
    );
}
