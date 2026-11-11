import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nehal Qadeer, AI & Automation Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F5F0",
          padding: "80px 100px",
          borderLeft: "6px solid #0F766E",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "auto", marginBottom: "auto" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#1F2428",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Nehal Qadeer
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#0F766E",
              letterSpacing: "-0.01em"
            }}
          >
            AI & Automation Engineer · Python · GenAI
          </div>
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#5E6B7D",
            fontFamily: "monospace"
          }}
        >
          nehal-portfolio-one.vercel.app
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
