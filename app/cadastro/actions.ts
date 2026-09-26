"use server";

import { headers } from "next/headers";
import { permitir } from "@/lib/rateLimit";

export async function registrarEmpresa(formData: FormData) {
    // Limite por IP do visitante (best-effort: em memória, por instância da função). O app tem um teto global à parte.
    const h = await headers();
    const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || h.get("x-real-ip") || "desconhecido";
    if (!permitir(`cadastro:h:${ip}`, 5, 60 * 60 * 1000) || !permitir(`cadastro:m:${ip}`, 2, 60 * 1000)) {
        return { error: "Muitas tentativas de cadastro. Tente novamente em alguns minutos." };
    }

    // Pegamos os dados do formulário
    const nome = formData.get("nome");
    const nomeResponsavel = formData.get("nomeResponsavel");
    const usuario = formData.get("usuario");
    const email = formData.get("email");
    const senha = formData.get("senha");

    const segmento = formData.get("segmento");
    // WhatsApp opcional (o app valida e só repassa se for um número válido)
    const whatsapp = formData.get("whatsapp") || undefined;
    // código de indicação (?ref=), vazio quando não veio de indicação
    const ref = formData.get("ref") || undefined;

    try {
        const response = await fetch("https://app.zentrax.dvls.com.br/adm/onboarding-publico", {
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
                whatsapp,
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