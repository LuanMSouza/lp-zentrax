// Depoimento de cliente real para a home. Autorizado por quem o deu (lojista que usa o ZentraX desde 2024, frase que ele
// mesmo repete). Deixe `null` para esconder a seção; ela some sozinha quando está vazio (não inventamos depoimento).
export type Depoimento = { texto: string; nome: string; negocio: string };
export const DEPOIMENTO: Depoimento | null = {
    texto: "Antes eu anotava tudo à mão e perdia o controle. Agora está tudo num lugar só e eu cobro pelo WhatsApp com a mensagem pronta.",
    nome: "Lojista",
    negocio: "cliente desde 2024",
};
