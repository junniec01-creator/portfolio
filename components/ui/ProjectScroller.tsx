"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const GAP_PX = 24; // gap-6

export default function ProjectScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setAtStart(track.scrollLeft <= 1);
      // 스크롤이 필요 없을 만큼 카드가 적으면 max가 0이라 양쪽 끝으로 판정된다
      setAtEnd(track.scrollLeft >= max - 1);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollByColumn = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + GAP_PX : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      {/* 2행 고정 · 열 방향으로 채우고 넘치면 가로 스크롤 */}
      <div
        ref={trackRef}
        className="grid snap-x snap-mandatory auto-cols-[80%] grid-flow-col grid-rows-2 gap-6 overflow-x-auto pb-4 sm:auto-cols-[360px]"
      >
        {projects.map((project, i) => (
          <ScrollReveal
            key={project.id}
            delay={Math.floor(i / 2) * 0.1}
            className="snap-start"
          >
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* 마우스 사용자를 위한 좌우 버튼 — 터치로 넘길 수 있는 모바일에서는 숨긴다 */}
      <button
        type="button"
        aria-label="이전 프로젝트"
        onClick={() => scrollByColumn(-1)}
        className={`absolute -left-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-card/90 text-lg text-foreground backdrop-blur transition-all hover:border-accent/50 hover:bg-card-hover sm:flex ${
          atStart ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        ←
      </button>
      <button
        type="button"
        aria-label="다음 프로젝트"
        onClick={() => scrollByColumn(1)}
        className={`absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-card/90 text-lg text-foreground backdrop-blur transition-all hover:border-accent/50 hover:bg-card-hover sm:flex ${
          atEnd ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        →
      </button>
    </div>
  );
}
