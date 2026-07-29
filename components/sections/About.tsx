import ScrollReveal from "@/components/ui/ScrollReveal";

const INFO = [
  { label: "소속", value: "경상국립대학교 전자공학부\nGyeongsang National University\nElectronic Engineering" },
  {
    label: "회사(팀)",
    value: "Playground ( AI Solution ) 팀장",
  },
  {
    label: "연구실",
    value: "EDCL ( Electronic Design Circuit Lab ) 대표",
  },
  { label: "관심사", value: "AI Solution · BMS ( Battery Management System ) · Thermal Management\nAI 기반 배터리 상태 예측" },
];

// 한 문장에 하나씩만 담아 짧게 끊어 읽히도록 한다
const INTRO = [
  "팀원들과 함께 AI를 여러 분야에 직접 적용합니다.",
  "AI Solution 팀 Playground 팀장",
  "EDCL 연구실 대표",
  "주요 분야 - 배터리 관리 시스템(BMS), 열 관리, 배터리 상태 추정",
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

      <div className="mb-14 max-w-3xl space-y-3">
        {INTRO.map((line, i) => (
          <ScrollReveal key={line} delay={0.1 + i * 0.06}>
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              {line}
            </p>
          </ScrollReveal>
        ))}
      </div>

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
