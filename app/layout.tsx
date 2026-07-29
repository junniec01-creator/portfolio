import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  // 배포 후 실제 도메인으로 교체 — OG 이미지 절대경로 생성에 쓰인다
  metadataBase: new URL("https://junhyeok-portfolio.vercel.app"),
  title: "포트폴리오 | 전자공학도 · BMS · Thermal · AI",
  description:
    "경상국립대학교 전자공학부 · EDCL Lab 대표 · BMS / 열관리 연구와 AI를 다루는 최준혁 포트폴리오",
  openGraph: {
    title: "JUNHYEOK CHOE | BMS · Thermal · AI 포트폴리오",
    description:
      "배터리와 열을 다루는 엔지니어, 근데 이제 AI와 기획까지 곁들인 — 경상국립대 전자공학부 · EDCL Lab 대표",
    url: "/",
    siteName: "JUNHYEOK CHOE Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JUNHYEOK CHOE | BMS · Thermal · AI 포트폴리오",
    description:
      "배터리와 열을 다루는 엔지니어, 근데 이제 AI와 기획까지 곁들인 — 전자공학전공 · EDCL Lab 대표 · Project Manager",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
