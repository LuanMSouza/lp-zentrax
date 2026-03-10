"use server";

export async function registrarEmpresa(formData: FormData) {
    // Pegamos os dados do formulário
    const nome = formData.get("nome");
    const nomeResponsavel = formData.get("nomeResponsavel");
    const usuario = formData.get("usuario");
    const senha = formData.get("senha");

    const moduloPet = formData.get("modulo_pet") === "true";

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
                senha,
                // Repassando a flag para a API configurar o dashboard correto
                modulo_pet: moduloPet,
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