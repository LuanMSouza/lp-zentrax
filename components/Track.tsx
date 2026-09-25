"use client";
import { useEffect } from "react";
import { track } from "@/lib/tracking";

// pageview beacon pra páginas server-rendered (segmento, calculadora)
export default function Track({ projeto = "ZentraX-LP" }: { projeto?: string }) {
    useEffect(() => { track(projeto); }, [projeto]);
    return null;
}
