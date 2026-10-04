// Parâmetros da LP: guarda `lid` (lead do e-mail de convite) e `ref` (código de
// indicação) na sessão pra sobreviverem à navegação LP → /cadastro. As visitas em si
// são contadas pelo rastreador único do painel (script em app/layout.tsx), que também
// lê o ?lid=. Tudo fire-and-forget: nunca pode quebrar a página.

function guardar(chave: string, valor: string | null) {
    try {
        if (valor) sessionStorage.setItem(chave, valor);
    } catch { /* storage bloqueado: segue sem */ }
}

function ler(chave: string): string | null {
    try { return sessionStorage.getItem(chave); } catch { return null; }
}

// pega ?lid= / ?ref= da URL (e guarda); senão devolve o que já estava na sessão
export function getLid(): string | null {
    guardar("zx_lid", new URLSearchParams(window.location.search).get("lid"));
    return ler("zx_lid");
}

export function getRef(): string | null {
    guardar("zx_ref", new URLSearchParams(window.location.search).get("ref"));
    return ler("zx_ref");
}

// guarda ?lid= e ?ref= na sessão logo que a pessoa chega (qualquer página), pra
// chegarem até o /cadastro mesmo navegando antes
export function lembrarParametros() {
    getLid();
    getRef();
}

// avisa o backend que a pessoa começou o cadastro (usado só pro lembrete único)
export function cadastroIniciado(email: string) {
    fetch("https://api.leads.dvls.com.br/api/zentrax-cadastro-iniciado", {
        method: "POST", keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lid: getLid() }),
    }).catch(() => { });
}
