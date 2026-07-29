export type ProjectCategory = "hardware" | "backend" | "ai" | "web";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image?: string; // 선택 — 비워두거나 생략하면 썸네일 영역이 표시되지 않음
  period: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lab Research",
    description:
      "배터리 팩 내 TGL ( Thermal Guiding Layer ) 설계",
    tech: ["Ansys", "MATLAB", "LSTM", "Python"],
    github: "",
    demo: "",
    image: "",
    period: "2026.03 ~ 현재",
    category: "hardware",
  },
  {
    id: 2,
    title: "Ai-rookie",
    description: "환자이송의 골든타임 준수를 위한 환자상태 분석 및 매칭 시스템",
    tech: ["LLM", "Python", "FastAPI", "React"],
    github: "",
    demo: "",
    image: "",
    period: "2026.05 ~ 현재",
    category: "ai",
  },
  {
    id: 3,
    title: "Psycology quant",
    description: "심리학 기반 Quant 투자",
    tech: ["LSTM", "LLM", "Python"],
    github: "",
    demo: "",
    image: "",
    period: "2026.08 ~ 현재",
    category: "ai",
  },
  {
    id: 4,
    title: "School official reservation system",
    description: "경상국립대학교 전자공학부 공식 예약 시스템",
    tech: ["Python", "FastAPI", "React", "MySQL"],
    github: "",
    demo: "",
    image: "",
    period: "2026.07 ~ 현재",
    category: "web",
  },
  {
    id: 5,
    title: "Lab Research",
    description:
      "AI 기반 DC-DC 컨버터 리플 활용한 배터리 SoH 추정 연구",
    tech: ["Ansys", "MATLAB", "LSTM", "Python", "PSpice"],
    github: "",
    demo: "",
    image: "",
    period: "2026.03 ~ 현재",
    category: "ai",
  },
  {
    id: 6,
    title: "Loreal",
    description:
      "AI, Hardware 기반 개인 맞춤 향수 제작 기기 개발 아이디어 제안",
    tech: [""],
    github: "",
    demo: "",
    image: "",
    period: "2026.01 ~ 2026.04",
    category: "hardware",
  },
  {
    id: 7,
    title: "카카오 관광데이터 앱 웹 개발",
    description:
      "관광데이터 활용 강원도 최적 여행경로 AI 추천 시스템",
    tech: ["Ansys", "MATLAB", "LSTM", "Python", "PSpice"],
    github: "",
    demo: "",
    image: "",
    period: "2026.05 ~ 현재",
    category: "ai",
  }
];
