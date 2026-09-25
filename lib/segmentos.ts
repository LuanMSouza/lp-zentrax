// Segmentos com página própria de SEO (/para/<slug>). Texto descritivo e
// honesto: sem depoimento, nota ou número inventado (o JSON-LD com nota falsa
// já foi removido antes). Pra criar mais uma página basta acrescentar aqui.
export type Segmento = {
    slug: string;
    descricao: string;     // meta description única (≤155 caracteres)
    plural: string;        // "barbearias"
    quem: string;          // "dono de barbearia"
    dor: string;           // frase específica de como o fiado aparece nesse negócio
    exemplos: string[];    // 3 situações reais do dia a dia
};

export const SEGMENTOS: Segmento[] = [
    { slug: "barbearias", descricao: "Controle o fiado da barbearia sem caderno: saldo de cada cliente, pacotes de corte e barba e cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "barbearias", quem: "dono de barbearia",
      dor: "cliente fixo que corta e paga só no fim do mês, pacote de cortes e barba anotado no papel.",
      exemplos: ["Cliente que \"acerta depois\" e esquece do corte da semana passada", "Pacote mensal com parcelas que ninguém lembra se foram pagas", "Fiado de produto (pomada, óleo) misturado com o de serviço"] },
    { slug: "personal-trainer", descricao: "Mensalidades e pacotes de aulas organizados: veja quem atrasou, quantas aulas sobraram e cobre o aluno pelo WhatsApp. Teste grátis por 7 dias.", plural: "personal trainers", quem: "personal trainer",
      dor: "mensalidades e pacotes de aulas pagos em datas diferentes por cada aluno.",
      exemplos: ["Aluno que atrasa a mensalidade e você fica sem graça de cobrar", "Pacote de 10 aulas em que ninguém sabe quantas sobraram", "Aula avulsa combinada de pagar \"na próxima\""] },
    { slug: "escola-de-musica", descricao: "Mensalidades, matrículas parceladas e vendas de material sob controle na sua escola de música. Cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "escolas de música", quem: "dono de escola de música",
      dor: "mensalidade por aluno, matrícula parcelada e venda de material com pagamento em duas vezes.",
      exemplos: ["Mensalidade em atraso de vários alunos ao mesmo tempo", "Matrícula parcelada em que cada parcela vence numa data", "Venda de instrumento ou método pago aos poucos"] },
    { slug: "banho-e-tosa", descricao: "Fiado de banho, tosa e ração e pacotes por tutor, sem caderno: saldo de cada cliente e cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "pet shops e banho e tosa", quem: "dono de pet shop",
      dor: "tutor que leva o pet toda semana e paga tudo junto depois, mais pacotes de banho.",
      exemplos: ["Tutor que deixa o pet e diz que paga na busca do mês", "Pacote de 4 banhos em que ninguém sabe quantos foram usados", "Fiado de ração e banho no mesmo caderno"] },
    { slug: "funilaria-e-pintura", descricao: "Saldos de serviços de alto valor e pagamentos parcelados da funilaria organizados por cliente, com cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "funilarias e oficinas", quem: "dono de funilaria",
      dor: "serviço de valor alto, parcelado ou pago quando o seguro ou o cliente liberar.",
      exemplos: ["Serviço entregue com a metade paga e o resto \"na semana que vem\"", "Vários orçamentos e saldos em aberto ao mesmo tempo", "Cliente antigo com histórico de atraso que você não lembra"] },
    { slug: "floriculturas", descricao: "Encomendas para eventos, sinal e saldo e clientes de empresa que pagam depois: tudo no controle, com cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "floriculturas", quem: "dono de floricultura",
      dor: "empresas e clientes recorrentes que compram para eventos e pagam depois.",
      exemplos: ["Arranjo para evento faturado para o fim do mês", "Cliente de empresa com vários pedidos em aberto", "Encomenda com sinal e saldo a receber"] },
    { slug: "fisioterapeutas", descricao: "Pacotes de sessões parcelados e pacientes com saldo em aberto sob controle, com lembrete de cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "fisioterapeutas e clínicas", quem: "fisioterapeuta",
      dor: "pacotes de sessões pagos em partes e pacientes que atrasam entre uma sessão e outra.",
      exemplos: ["Pacote de sessões parcelado em que a parcela vence no meio do tratamento", "Paciente que faltou e deixou saldo em aberto", "Sessões avulsas anotadas na agenda e não no financeiro"] },
    { slug: "chaveiros", descricao: "Serviços para condomínios, imobiliárias e empresas que pagam em 15 ou 30 dias, com saldo por cliente e cobrança no prazo. Teste grátis por 7 dias.", plural: "chaveiros", quem: "chaveiro",
      dor: "serviço para empresas, condomínios e imobiliárias que pagam depois de 15 ou 30 dias.",
      exemplos: ["Condomínio ou imobiliária que paga no fechamento do mês", "Vários serviços pequenos somados numa conta só", "Cobrança que ninguém lembra de fazer no prazo certo"] },
    { slug: "nutricionistas", descricao: "Pacotes de consultas e retornos pagos em parcelas, com saldo por paciente e cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "nutricionistas", quem: "nutricionista",
      dor: "consulta e retorno em pacotes, com pagamento combinado por paciente.",
      exemplos: ["Pacote de retornos pago em parcelas", "Paciente que some e deixa a última consulta em aberto", "Valores diferentes combinados para cada paciente"] },
    { slug: "artes-marciais", descricao: "Mensalidade de dezenas de alunos, graduação e uniforme parcelados: veja quem atrasou e cobre pelo WhatsApp. Teste grátis por 7 dias.", plural: "academias de artes marciais", quem: "dono de academia de artes marciais",
      dor: "mensalidade de dezenas de alunos, além de graduação e uniforme parcelados.",
      exemplos: ["Aluno que atrasa a mensalidade por meses sem você perceber", "Taxa de graduação e kimono pagos em partes", "Família com mais de um aluno e uma conta única"] },
    { slug: "oficinas-mecanicas", descricao: "Serviços e peças a prazo, com saldo por cliente e cobrança no vencimento: controle o fiado da sua oficina mecânica. Teste grátis por 7 dias.", plural: "oficinas mecânicas", quem: "dono de oficina",
      dor: "serviço e peças com valor alto, pagos parte agora e parte depois, e cliente antigo que \"acerta na semana que vem\".",
      exemplos: ["Carro entregue com o saldo do serviço em aberto", "Frota de empresa que paga tudo junto no fim do mês", "Peça comprada por conta do cliente e cobrada depois"] },
    { slug: "psicologos-e-terapeutas", descricao: "Pacotes de sessões, pacientes com saldo em aberto e retornos combinados sob controle, com lembrete discreto pelo WhatsApp. Teste grátis por 7 dias.", plural: "psicólogos e terapeutas", quem: "profissional de saúde",
      dor: "sessões pagas por pacote ou no fim do mês, e paciente que atrasa e fica sem jeito de tocar no assunto.",
      exemplos: ["Pacote de sessões pago em parcelas", "Paciente que faltou e deixou a última sessão em aberto", "Valores diferentes combinados para cada paciente"] },
    { slug: "estudios-e-academias", descricao: "Mensalidades de yoga, pilates, dança e natação organizadas: veja quem atrasou e cobre pelo WhatsApp sem constrangimento. Teste grátis por 7 dias.", plural: "estúdios e academias", quem: "dono de estúdio",
      dor: "mensalidades de muitos alunos com vencimentos diferentes, planos trimestrais e aluno que some sem pagar.",
      exemplos: ["Aluno com mensalidade atrasada há meses sem você perceber", "Plano trimestral pago em parcelas", "Aula experimental que virou matrícula e ninguém cobrou a primeira parcela"] },
    { slug: "escolas-e-cursos", descricao: "Mensalidades, matrículas e material de cursos e escolas livres controlados por aluno, com cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "escolas e cursos", quem: "dono de escola ou curso",
      dor: "mensalidade por aluno, matrícula parcelada e material vendido em duas vezes, com pais ou alunos que atrasam.",
      exemplos: ["Vários alunos com mensalidade em atraso ao mesmo tempo", "Matrícula parcelada com cada parcela numa data", "Família com mais de um filho e uma cobrança única"] },
    { slug: "lojas", descricao: "Fiado de loja sem caderno: saldo de cada cliente, vencimentos e cobrança pelo WhatsApp para roupas, ótica, móveis e materiais. Teste grátis por 7 dias.", plural: "lojas", quem: "lojista",
      dor: "cliente de confiança que leva agora e paga depois, crediário no caderno e compra parcelada sem controle de vencimento.",
      exemplos: ["Cliente antigo com várias compras anotadas em folhas diferentes", "Crediário parcelado em que ninguém sabe quantas parcelas faltam", "Cobrança que depende de você lembrar de mandar mensagem"] },
    { slug: "coach", descricao: "Mentorias e programas pagos em parcelas: veja quem está em dia, quem atrasou e cobre pelo WhatsApp sem perder o clima. Teste grátis por 7 dias.", plural: "coaches e consultores", quem: "coach",
      dor: "programas e mentorias pagos em parcelas, com aluno que atrasa e uma cobrança que parece desconfortável.",
      exemplos: ["Programa de 6 meses com parcelas mensais", "Aluno que atrasa e você adia a cobrança para não gerar climão", "Pacote de sessões avulsas com saldo a receber"] },
    { slug: "beleza-e-estetica", descricao: "Pacotes de sessões, procedimentos com sinal e saldo e clientes fixas sob controle no seu estúdio de beleza, com cobrança pelo WhatsApp. Teste grátis por 7 dias.", plural: "estúdios de beleza e estética", quem: "profissional de beleza",
      dor: "pacotes de sessões pagos em partes, procedimento com sinal e saldo e cliente fixa que acerta só no fim do mês.",
      exemplos: ["Pacote de sessões parcelado em que ninguém sabe quantas faltam", "Procedimento com sinal pago e saldo esquecido", "Cliente fixa que junta vários atendimentos para pagar depois"] },
    { slug: "servicos-sob-encomenda", descricao: "Orçamento aprovado com sinal e saldo na entrega: controle o que cada cliente já pagou e o que falta receber. Teste grátis por 7 dias, sem cartão.", plural: "marcenarias, vidraçarias e serviços sob encomenda", quem: "dono de negócio sob encomenda",
      dor: "orçamento aprovado com sinal, saldo na entrega e cliente que atrasa o restante depois do serviço pronto.",
      exemplos: ["Serviço entregue com a última parcela em aberto", "Vários orçamentos com sinal e saldo ao mesmo tempo", "Cliente de empresa que paga só depois de 15 ou 30 dias"] },
    { slug: "gastronomia", descricao: "Encomendas com sinal, clientes fixos e empresas que pagam no fim do mês: controle o que cada cliente deve na sua doceria ou restaurante. Teste grátis por 7 dias.", plural: "docerias, restaurantes e pizzarias", quem: "dono de negócio de alimentação",
      dor: "encomendas com sinal, clientes fixos que pagam depois e empresas que pedem para acertar no fim do mês.",
      exemplos: ["Encomenda de festa com sinal pago e saldo a receber", "Cliente de empresa com pedidos somados no mês", "Cliente de confiança que leva agora e paga na próxima semana"] },
];

export const pegarSegmento = (slug: string) => SEGMENTOS.find(s => s.slug === slug);
