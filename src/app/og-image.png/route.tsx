import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#edf1f6",
          padding: "80px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px"
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              backgroundColor: "#2f9e8f"
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: 600,
              color: "#2b6cb0",
              letterSpacing: "0.08em"
            }}
          >
            PORTFOLIO · MANNHEIM, GERMANY
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#16233d",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 24px 0"
          }}
        >
          Nehal Qadeer
        </h1>

        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#2b6cb0",
            fontFamily: "monospace",
            margin: 0
          }}
        >
          AI & Automation Engineer · Python · GenAI
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
