import { ImageResponse } from "next/og";

export const alt = "JUNHYEOK CHOE | BMS · Thermal · AI Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og 기본 폰트는 라틴 문자만 지원하므로 문구는 영문으로 유지한다
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#090909",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 235,
            right: 100,
            width: 160,
            height: 160,
            borderRadius: 9999,
            background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)",
          }}
        />

        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 12,
            color: "#3b82f6",
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 92,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          JUNHYEOK CHOE
        </div>

        <div style={{ marginTop: 18, fontSize: 32, color: "#e5e7eb" }}>
          Battery · Thermal Management · AI
        </div>

        <div style={{ marginTop: 12, fontSize: 24, color: "#9ca3af" }}>
          Electronic Engineering · EDCL Lab Leader · Project Manager
        </div>
      </div>
    ),
    size
  );
}
