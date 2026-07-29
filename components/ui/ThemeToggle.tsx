"use client";

import { useTheme } from "@/components/ui/ThemeProvider";

export default function ThemeToggle() {
  const { toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      // 아이콘 전환은 CSS 변형으로만 처리해 하이드레이션 시 깜빡임이 없다
      aria-label="라이트 · 다크 모드 전환"
      title="라이트 · 다크 모드 전환"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors hover:border-accent hover:text-foreground sm:h-9 sm:w-9"
    >
      {/* 다크일 때: 해 (누르면 밝아진다) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="h-5 w-5 light:hidden"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>

      {/* 라이트일 때: 달 (누르면 어두워진다) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-5 w-5 light:block"
        aria-hidden="true"
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
