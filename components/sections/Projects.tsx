import ProjectScroller from "@/components/ui/ProjectScroller";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  // body가 flex 컨테이너라 w-full이 없으면 가로 스크롤 영역 때문에
  // 섹션이 내용 크기대로 부풀어 페이지 전체가 가로로 넘친다
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
      <ScrollReveal>
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-purple" />
      </ScrollReveal>

      <ProjectScroller />
    </section>
  );
}
