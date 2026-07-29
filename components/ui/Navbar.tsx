"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlaygroundLogo from "@/components/ui/PlaygroundLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

// 고정 상단바(h-16) 높이 + 여유. 목적지가 상단바에 가리지 않도록 이만큼 위를 띄운다.
const NAV_OFFSET = 72;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // 모바일 메뉴는 닫히면서 높이가 줄어든다. 그 도중에 스크롤을 시작하면
  // 이동이 중간에 끊기므로, 닫힘이 끝난 뒤로 미뤄 둘 목적지를 담아 둔다.
  const pending = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTarget = useCallback((href: string) => {
    const target = href === "#" ? null : document.querySelector(href);
    if (!target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const top =
      target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  }, []);

  // 브라우저 기본 #해시 이동에 맡기지 않고 직접 스크롤한다.
  // (모바일에서 메뉴가 닫히는 애니메이션과 겹쳐 이동이 무시되던 문제)
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (open) {
        pending.current = href;
        setOpen(false);
        return;
      }
      scrollToTarget(href);
    },
    [open, scrollToTarget],
  );

  const runPending = useCallback(() => {
    const href = pending.current;
    pending.current = null;
    if (href) scrollToTarget(href);
  }, [scrollToTarget]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-2"
        >
          <PlaygroundLogo className="h-7 w-7" />
          <span className="bg-gradient-to-r from-brand-from to-brand-to bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Playground
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          {/* 데스크톱 메뉴 */}
          <ul className="hidden items-center gap-8 text-sm text-muted sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center sm:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <AnimatePresence onExitComplete={runPending}>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-subtle bg-background/95 sm:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-card-hover active:bg-card-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
