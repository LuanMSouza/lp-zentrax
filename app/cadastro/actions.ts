"use server";

export async function registrarEmpresa(formData: FormData) {
    // Pegamos os dados do formulário
    const nome = formData.get("nome");
    const nomeResponsavel = formData.get("nomeResponsavel");
    const usuario = formData.get("usuario");
    const email = formData.get("email");
    const senha = formData.get("senha");

    const segmento = formData.get("segmento");
    // código de indicação (?ref=), vazio quando não veio de indicação
    const ref = formData.get("ref") || undefined;

    try {
        const response = await fetch("https://api.devedores.dvls.com.br/adm/onboarding-publico", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome,
                nomeResponsavel,
                usuario,
                email,
                senha,
                segmento,
                ref,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { error: data.error || "Erro ao criar conta." };
        }

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "Erro de conexão com o servidor." };
    }
}