// Números REAIS do banco de produção (consulta em 2026-09-25): 1.591 notas,
// 1.260 pagamentos, primeira nota válida em nov/2024. Arredondados pra baixo e
// escritos como "mais de", pra continuarem verdadeiros. Só existe 1 empresa
// usando hoje, então NÃO afirmar "empresas"/"clientes" aqui. Atualizar à mão
// quando os números crescerem (ex.: +2.000 notas).
const NUMEROS = [
    { valor: "+1.500", rotulo: "notas de fiado registradas" },
    { valor: "+1.200", rotulo: "pagamentos com baixa" },
    { valor: "Desde 2024", rotulo: "em uso diário num comércio real" },
];

export default function ProvaSocial() {
    return (
        <section aria-label="Números de uso" className="bg-slate-50 pt-28 pb-2">
            <div className="max-w-5xl mx-auto px-6">
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-slate-200 text-center">
                    {NUMEROS.map(n => (
                        <div key={n.rotulo} className="sm:px-8">
                            <dt className="sr-only">{n.rotulo}</dt>
                            <dd className="text-3xl md:text-4xl font-semibold tracking-tight text-[#004b6b] tabular-nums">{n.valor}</dd>
                            <dd className="mt-1 text-sm text-slate-600">{n.rotulo}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
