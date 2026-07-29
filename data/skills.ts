export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Role",
    items: [
      "Project Manager",
      "Backend Developer",
      "AI Developer",
      "Hardware Developer",
      "Data Analyst",
    ],
  },
  {
    category: "Development Language",
    items: ["Python", "C++"],
  },
  {
    category: "Language",
    items: ["Korean", "English"],
  },
  {
    category: "Domain",
    items: [
      "BMS ( Battery Management System )",
      "Thermal Management",
      "AI Starter",
    ],
  },
  {
    category: "Tools",
    items: ["Ansys", "PSpice ( ORCAD )", "MATLAB"],
  },
  {
    category: "자격증",
    items: ["OPIC ( IH )", "ADsP", "SQLD"],
  },
];
