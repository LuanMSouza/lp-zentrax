// Depoimento real para a home: Jefferson, da Maresia Bebidas (pai do Luan, usa o ZentraX
// desde 2024; frase que ele mesmo repete; nome autorizado pelo Luan em 2026-10-01).
// Deixe `null` para esconder a seção; ela some sozinha quando está vazio (não inventamos depoimento).
export type Depoimento = { texto: string; nome: string; negocio: string };
export const DEPOIMENTO: Depoimento | null = {
    texto: "Antes eu anotava tudo à mão e perdia o controle. Agora está tudo num lugar só e eu cobro pelo WhatsApp com a mensagem pronta.",
    nome: "Jefferson",
    negocio: "Maresia Bebidas · cliente desde 2024",
};
