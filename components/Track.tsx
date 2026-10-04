"use client";
import { useEffect } from "react";
import { lembrarParametros } from "@/lib/tracking";

// guarda ?lid=/?ref= nas páginas server-rendered (segmento); a contagem de visitas
// é do rastreador único em app/layout.tsx
export default function Track() {
    useEffect(() => { lembrarParametros(); }, []);
    return null;
}
