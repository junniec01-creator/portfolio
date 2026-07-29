import ScrollReveal from "@/components/ui/ScrollReveal";

const INFO = [
  { label: "소속", value: "경상국립대학교 전자공학부\nGyeongsang National University\nElectronic Engineering" },
  {
    label: "회사(팀)",
    value: "Playground(AI Solution) 대표",
  },
  {
    label: "연구실",
    value: "EDCL ( Electronic Design Circuit Lab ) 대표",
  },
  { label: "관심사", value: "AI Solution · BMS ( Battery Management System ) · Thermal Management\nAI 기반 배터리 상태 예측" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <ScrollReveal>
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h2>
        <div className="mb-12 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-purple" />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-muted">
          **Playground** 운영 팀의 대표를 맡아 운영중이며, 
          팀원들과 AI Solution을 다양한 분야에 적용시키고 있습니다. 
          EDCL 연구실 대표로 프로젝트를 기획하고 이끌며, 
          배터리 관리 시스템(BMS)과 열 관리를 중심으로 연구하고 있습니다.
          해당 연구실에서는 연구팀원들과 함께 Ansys · MATLAB 기반 해석에
          AI 모델을 접목해 배터리 상태를 예측하는 방향으로 역량을 넓히고 있습니다.
        </p>
      </ScrollReveal>

      <div className="space-y-6">
        {INFO.map((item, i) => (
          <ScrollReveal key={item.label} delay={0.15 + i * 0.1}>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <p className="w-24 shrink-0 text-sm font-medium text-accent">
                {item.label}
              </p>
              <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                {item.value}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
