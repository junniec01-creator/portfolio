import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ThemeProvider from "@/components/ui/ThemeProvider";

// 페인트 전에 <html data-theme>을 확정해 첫 화면이 반대 색으로 깜빡이는 것을 막는다.
// 저장된 선택이 있으면 그것을, 없으면 기기 설정을 따른다.
const THEME_INIT = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export const metadata: Metadata = {
  // 배포 후 실제 도메인으로 교체 — OG 이미지 절대경로 생성에 쓰인다
  metadataBase: new URL("https://junhy-portfolio.vercel.app"),
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

// 모바일 브라우저 주소창 색까지 테마에 맞춘다
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5f8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
