"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const GAP_PX = 24; // gap-6

// 2행 고정이라 카드 2개가 한 열을 이룬다 — 점 하나가 곧 한 열
const COLUMNS = Math.ceil(projects.length / 2);

export default function ProjectScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // 한 열의 폭(카드 폭 + 간격). 뷰포트에 따라 달라져 그때그때 잰다.
  const columnStep = useCallback((track: HTMLDivElement) => {
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + GAP_PX : track.clientWidth * 0.8;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      // 마지막 열은 폭이 남지 않아 step 배수에 닿지 못하므로 끝에서는 따로 처리
      if (max > 0 && track.scrollLeft >= max - 1) {
        setActive(COLUMNS - 1);
        return;
      }
      const step = columnStep(track);
      const index = step > 0 ? Math.round(track.scrollLeft / step) : 0;
      setActive(Math.min(COLUMNS - 1, Math.max(0, index)));
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, [columnStep]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({ left: index * columnStep(track), behavior: "smooth" });
    },
    [columnStep],
  );

  return (
    <div className="relative">
      {/* 2행 고정 · 열 방향으로 채우고 넘치면 가로 스크롤 */}
      <div
        ref={trackRef}
        className="no-scrollbar grid snap-x snap-mandatory auto-cols-[85%] grid-flow-col grid-rows-2 gap-6 overflow-x-auto pb-1 sm:auto-cols-[360px]"
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

      {/* 현재 위치 표시 겸 이동 버튼 */}
      {COLUMNS > 1 && (
        <div className="mt-5 flex items-center justify-center gap-1">
          {Array.from({ length: COLUMNS }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`프로젝트 ${i + 1}번째 묶음 보기`}
              aria-current={i === active}
              className="group flex h-9 w-9 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-accent"
                    : "w-2 bg-border-subtle group-hover:bg-muted"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
