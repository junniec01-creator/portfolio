"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Three.js Canvas는 SSR 비활성화 (브라우저 전용 WebGL)
const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* 화면 전체를 채우는 3D 신경망 배경 (흐름에서 빼내 글자 뒤에 깔리도록) */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* 가독성용 비네트 + 하단 블렌딩 (배경과 텍스트 사이) */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[image:var(--hero-vignette)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent to-background" />

      {/* 글자 뒤 은은한 음영 — 배경 발광에 글자가 묻히지 않도록 (구는 그대로 보임) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[6] h-80 w-[44rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[image:var(--hero-glow)] blur-2xl" />

      {/* 강조 문구 (가운데) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <p className="mb-5 text-base font-bold tracking-[0.3em] text-accent [text-shadow:var(--hero-shadow-sm)]">
          PORTFOLIO
        </p>

        <h1 className="whitespace-nowrap text-4xl font-black leading-[1.05] tracking-tight text-foreground [text-shadow:var(--hero-shadow)] sm:text-7xl md:text-8xl">
          JUNHYEOK CHOE
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-bold text-foreground [text-shadow:var(--hero-shadow)] sm:text-xl">
          <span className="text-brand">AI Solution</span> Engineer
          <span className="mt-3 block text-sm font-semibold text-yellow-400 light:text-amber-700 sm:text-xl">
            Playground 팀장 · EDCL Lab 대표 · Project Manager
          </span>
          <span className="mt-2 block text-sm font-semibold text-foreground/90 sm:text-xl">
            경상국립대학교 전자공학부
          </span>
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/30 transition-colors hover:bg-accent/90 sm:px-7 sm:py-3.5 sm:text-base"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border-subtle bg-background/60 px-5 py-2.5 text-sm font-bold text-foreground backdrop-blur-sm transition-colors hover:bg-card-hover sm:px-7 sm:py-3.5 sm:text-base"
          >
            연락하기
          </a>
        </div>
      </motion.div>

      {/* 스크롤 안내 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-widest text-muted"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
