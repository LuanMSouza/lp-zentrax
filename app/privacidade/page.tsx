import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade",
};

export default function PoliticaDePrivacidade() {
    return (
        <>
            <div className="bg-[#001529] text-white py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="text-cyan-400 hover:underline text-sm">&larr; Voltar para o início</Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold mt-4">Política de Privacidade</h1>
                    <p className="text-slate-400 mt-2">Última atualização: setembro de 2026</p>
                </div>
            </div>

            <div className="bg-white py-12 px-6">
                <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-8">

                    <p className="text-sm text-amber-700 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                        Este documento é um modelo inicial e ainda não passou por revisão jurídica.
                        Recomenda-se validação com um advogado especializado em LGPD antes de considerá-lo definitivo
                        para uso comercial.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">1. Quem somos</h2>
                        <p>
                            O ZentraX é operado por LS Dev / Luan Souza, que atua como controlador dos dados
                            cadastrais da sua conta e como operador dos dados que você insere no sistema sobre os
                            seus próprios clientes, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018
                            — LGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">2. Dados que coletamos</h2>
                        <p className="mb-2"><strong>Dados da sua conta:</strong> nome, nome de usuário, senha (armazenada de forma criptografada), nome e segmento da sua empresa.</p>
                        <p className="mb-2"><strong>Dados de uso:</strong> registros de acesso e de ações realizadas no sistema, para fins de segurança e auditoria (histórico de atividades).</p>
                        <p className="mb-2"><strong>Dados de navegação no site (qualquer visitante):</strong> ao visitar este site ou a página de cadastro, coletamos automaticamente a página acessada, o site de origem (referrer), parâmetros de campanha (UTM), largura de tela, idioma do navegador e o user agent (identificação técnica do navegador/dispositivo). Esses dados são usados de forma agregada, apenas para contabilizar volume de acessos e entender a origem do tráfego — não são usados para identificar individualmente o visitante.</p>
                        <p><strong>Dados que você insere sobre seus clientes:</strong> nome, número de WhatsApp, CPF/CNPJ (opcional) e valores de notas/pagamentos. Esses dados são inseridos por você, não coletados diretamente por nós, e você atua como controlador dessas informações perante seus próprios clientes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">3. Para que usamos os dados</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Viabilizar o funcionamento do ZentraX (login, dashboard, cobrança via WhatsApp);</li>
                            <li>Medir volume e origem de acessos ao site, de forma agregada (quantidade de visitas, não perfis individuais);</li>
                            <li>Comunicar avisos sobre sua assinatura (ex.: vencimento próximo);</li>
                            <li>Garantir a segurança da plataforma (ex.: bloqueio após tentativas de login incorretas, registro de auditoria);</li>
                            <li>Cumprir obrigações legais, quando aplicável.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">4. Compartilhamento de dados</h2>
                        <p>
                            Não vendemos dados pessoais. Os dados podem ser compartilhados com prestadores de
                            infraestrutura estritamente necessários para operar o serviço (ex.: hospedagem do
                            banco de dados e do servidor da aplicação), sempre sob obrigação de confidencialidade.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">5. Armazenamento e segurança</h2>
                        <p>
                            Os dados são armazenados em banco de dados protegido por autenticação, com senhas
                            armazenadas de forma criptografada (hash) e conexões protegidas. Nenhum sistema é
                            100% livre de risco, mas adotamos medidas técnicas razoáveis para proteger os dados
                            contra acesso não autorizado.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">6. Seus direitos como titular</h2>
                        <p className="mb-2">
                            Nos termos da LGPD, você pode solicitar a qualquer momento: confirmação da existência de
                            tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados
                            pessoais, bem como informações sobre com quem compartilhamos seus dados.
                        </p>
                        <p>
                            Se você é cliente de um lojista que usa o ZentraX (ou seja, seus dados foram inseridos
                            por ele no sistema), essas solicitações devem ser feitas diretamente ao lojista, que é o
                            controlador desses dados. Podemos auxiliar tecnicamente quando necessário.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">7. Retenção e exclusão</h2>
                        <p>
                            Mantemos os dados enquanto sua conta estiver ativa. Ao excluir um cliente ou cancelar a
                            conta, os dados associados podem ser removidos permanentemente do sistema, conforme
                            solicitado, respeitados prazos legais de guarda quando aplicáveis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">8. Contato</h2>
                        <p>
                            Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em
                            contato pelo e-mail{" "}
                            <a href="mailto:luan@dvls.com.br" className="text-cyan-700 hover:underline">luan@dvls.com.br</a>.
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </>
    );
}
