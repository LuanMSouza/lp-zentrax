// Depoimento de cliente real para a home. Deixe `null` até ter um texto autorizado por quem o deu:
// a seção some sozinha quando está vazio (não inventamos depoimento nem número).
export type Depoimento = { texto: string; nome: string; negocio: string };
export const DEPOIMENTO: Depoimento | null = null;
// exemplo do formato:
// export const DEPOIMENTO: Depoimento = { texto: "Uso todo dia e não voltei pro caderninho.", nome: "Nome", negocio: "Tipo de negócio" };
