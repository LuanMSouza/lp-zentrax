// Segmentos com página própria de SEO (/para/<slug>). Texto descritivo e
// honesto: sem depoimento, nota ou número inventado (o JSON-LD com nota falsa
// já foi removido antes). Pra criar mais uma página basta acrescentar aqui.
export type Segmento = {
    slug: string;
    plural: string;        // "barbearias"
    quem: string;          // "dono de barbearia"
    dor: string;           // frase específica de como o fiado aparece nesse negócio
    exemplos: string[];    // 3 situações reais do dia a dia
};

export const SEGMENTOS: Segmento[] = [
    { slug: "barbearias", plural: "barbearias", quem: "dono de barbearia",
      dor: "cliente fixo que corta e paga só no fim do mês, pacote de cortes e barba anotado no papel.",
      exemplos: ["Cliente que \"acerta depois\" e esquece do corte da semana passada", "Pacote mensal com parcelas que ninguém lembra se foram pagas", "Fiado de produto (pomada, óleo) misturado com o de serviço"] },
    { slug: "personal-trainer", plural: "personal trainers", quem: "personal trainer",
      dor: "mensalidades e pacotes de aulas pagos em datas diferentes por cada aluno.",
      exemplos: ["Aluno que atrasa a mensalidade e você fica sem graça de cobrar", "Pacote de 10 aulas em que ninguém sabe quantas sobraram", "Aula avulsa combinada de pagar \"na próxima\""] },
    { slug: "escola-de-musica", plural: "escolas de música", quem: "dono de escola de música",
      dor: "mensalidade por aluno, matrícula parcelada e venda de material com pagamento em duas vezes.",
      exemplos: ["Mensalidade em atraso de vários alunos ao mesmo tempo", "Matrícula parcelada em que cada parcela vence numa data", "Venda de instrumento ou método pago aos poucos"] },
    { slug: "banho-e-tosa", plural: "pet shops e banho e tosa", quem: "dono de pet shop",
      dor: "tutor que leva o pet toda semana e paga tudo junto depois, mais pacotes de banho.",
      exemplos: ["Tutor que deixa o pet e diz que paga na busca do mês", "Pacote de 4 banhos em que ninguém sabe quantos foram usados", "Fiado de ração e banho no mesmo caderno"] },
    { slug: "funilaria-e-pintura", plural: "funilarias e oficinas", quem: "dono de funilaria",
      dor: "serviço de valor alto, parcelado ou pago quando o seguro ou o cliente liberar.",
      exemplos: ["Serviço entregue com a metade paga e o resto \"na semana que vem\"", "Vários orçamentos e saldos em aberto ao mesmo tempo", "Cliente antigo com histórico de atraso que você não lembra"] },
    { slug: "floriculturas", plural: "floriculturas", quem: "dono de floricultura",
      dor: "empresas e clientes recorrentes que compram para eventos e pagam depois.",
      exemplos: ["Arranjo para evento faturado para o fim do mês", "Cliente de empresa com vários pedidos em aberto", "Encomenda com sinal e saldo a receber"] },
    { slug: "fisioterapeutas", plural: "fisioterapeutas e clínicas", quem: "fisioterapeuta",
      dor: "pacotes de sessões pagos em partes e pacientes que atrasam entre uma sessão e outra.",
      exemplos: ["Pacote de sessões parcelado em que a parcela vence no meio do tratamento", "Paciente que faltou e deixou saldo em aberto", "Sessões avulsas anotadas na agenda e não no financeiro"] },
    { slug: "chaveiros", plural: "chaveiros", quem: "chaveiro",
      dor: "serviço para empresas, condomínios e imobiliárias que pagam depois de 15 ou 30 dias.",
      exemplos: ["Condomínio ou imobiliária que paga no fechamento do mês", "Vários serviços pequenos somados numa conta só", "Cobrança que ninguém lembra de fazer no prazo certo"] },
    { slug: "nutricionistas", plural: "nutricionistas", quem: "nutricionista",
      dor: "consulta e retorno em pacotes, com pagamento combinado por paciente.",
      exemplos: ["Pacote de retornos pago em parcelas", "Paciente que some e deixa a última consulta em aberto", "Valores diferentes combinados para cada paciente"] },
    { slug: "artes-marciais", plural: "academias de artes marciais", quem: "dono de academia de artes marciais",
      dor: "mensalidade de dezenas de alunos, além de graduação e uniforme parcelados.",
      exemplos: ["Aluno que atrasa a mensalidade por meses sem você perceber", "Taxa de graduação e kimono pagos em partes", "Família com mais de um aluno e uma conta única"] },
];

export const pegarSegmento = (slug: string) => SEGMENTOS.find(s => s.slug === slug);
