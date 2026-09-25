import { ImageResponse } from "next/og";

// Imagem de compartilhamento (WhatsApp, LinkedIn, etc.). Antes era o ícone
// 500x500, que aparece cortado e pequeno no preview do link.
export const alt = "ZentraX: controle de fiado e cobrança pelo WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div style={{
                width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
                padding: "80px", background: "linear-gradient(135deg, #001529 0%, #004b6b 100%)", color: "white",
            }}>
                <div style={{ fontSize: 34, color: "#22d3ee", marginBottom: 28, display: "flex" }}>ZentraX</div>
                <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, display: "flex", flexDirection: "column" }}>
                    <span>Chega de caderninho.</span>
                    <span style={{ color: "#22d3ee" }}>Saiba quem te deve.</span>
                </div>
                <div style={{ fontSize: 32, color: "#cbd5e1", marginTop: 36, display: "flex" }}>
                    Controle de fiado e cobrança pelo WhatsApp. 14 dias grátis.
                </div>
            </div>
        ),
        size,
    );
}
