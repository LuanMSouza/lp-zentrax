// Tracking compartilhado da LP. Fala com o analytics self-hosted
// (api.analitcs.dvls.com.br) e guarda `lid` (lead do e-mail de convite) e
// `ref` (código de indicação) na sessão pra sobreviverem à navegação
// LP → /cadastro. Tudo fire-and-forget: nunca pode quebrar a página.

const ANALYTICS_URL = "https://api.analitcs.dvls.com.br/api/track";

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

export function track(projeto: string) {
    const params = new URLSearchParams(window.location.search);
    getRef(); // só pra persistir o ?ref= mesmo em páginas que não usam
    const payload = JSON.stringify({
        projeto_nome: projeto,
        pagina_path: window.location.pathname,
        url_completa: window.location.href,
        referrer: document.referrer || "direto",
        utm_source: params.get("utm_source") || null,
        utm_medium: params.get("utm_medium") || null,
        lid: getLid(),
        largura_tela: window.innerWidth,
        idioma: navigator.language,
        user_agent: navigator.userAgent,
    });

    try {
        if (navigator.sendBeacon) {
            navigator.sendBeacon(ANALYTICS_URL, new Blob([payload], { type: "application/json" }));
        } else {
            fetch(ANALYTICS_URL, {
                method: "POST", body: payload, keepalive: true,
                headers: { "Content-Type": "application/json" },
            }).catch(() => { });
        }
    } catch { /* ignora */ }
}

// avisa o backend que a pessoa começou o cadastro (usado só pro lembrete único)
export function cadastroIniciado(email: string) {
    fetch("https://api.leads.dvls.com.br/api/zentrax-cadastro-iniciado", {
        method: "POST", keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lid: getLid() }),
    }).catch(() => { });
}
