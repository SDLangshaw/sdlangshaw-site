import { ImageResponse } from "next/og";

export const alt = "Sean Langshaw, founder and developer of AI-driven treasury software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10110e",
          color: "#ebe6dc",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "#e4c78f", fontSize: 28, letterSpacing: 4 }}>
            SEAN LANGSHAW
          </div>
          <div style={{ color: "#a88b5c", fontSize: 22 }}>FOUNDER · DEVELOPER</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>
            The software that holds the money, the model, and the record.
          </div>
          <div style={{ color: "#b1aa9e", fontSize: 28 }}>
            DeFi AI Technologies · KTE · EcoSip
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(235,230,220,0.2)",
            paddingTop: 24,
            color: "#e4c78f",
            fontSize: 22,
          }}
        >
          <div>defiai.finance</div>
          <div>kte.finance</div>
          <div>ecosip.io</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
