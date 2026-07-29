export interface Award {
  id: number;
  title: string;
  organizer: string;
  year: string;
  rank: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: 1,
    title: "2025 스페이스 해커톤",
    organizer: "우주항공청",
    year: "2025",
    rank: "최우수",
    description: "초소형 위성의 군집운용과 링크를 통한 **북극항로 개척 시스템**",
  },
  {
    id: 2,
    title: "제2회 부산 글로벌허브도시 청년 해커톤",
    organizer: "부산광역시",
    year: "2025",
    rank: "우수",
    description:
      "글로벌허브도시 부산 조성을 위해, 참신한 아이디어와 정책 제안\n부산 **구도심 지역의 늘어나는 공실을 활용**한 글로벌 미디어 타운",
  },
  {
    id: 3,
    title: "GNU-SDGs/ESG 공모전",
    organizer: "경상국립대학교",
    year: "2025",
    rank: "장려",
    description:
      "경남 지역문제의 혁신적인 해결방안을 도출하는 경진대회\n재활용 **유리병 반환 시 현금 보상 대신 포인트 지급으로 참여도 활성화** 아이디어",
  },
];
