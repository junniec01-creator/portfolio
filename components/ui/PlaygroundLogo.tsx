// Playground 팀 로고 마크 — 육각 노드 3개를 잇는 "A" 형태.
// 색은 --logo-from/mid/to CSS 변수를 따라가므로 다크·라이트에서 각각 알맞게 보인다.
export default function PlaygroundLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 44"
      className={className}
      role="img"
      aria-label="Playground"
    >
      <defs>
        <linearGradient id="pg-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--logo-from)" />
          <stop offset="55%" stopColor="var(--logo-mid)" />
          <stop offset="100%" stopColor="var(--logo-to)" />
        </linearGradient>
      </defs>

      <g
        stroke="url(#pg-logo-grad)"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* 노드를 잇는 뼈대 — 바깥 두 다리 + 가운데 기둥 + 접합부에서 갈라지는 두 가지 */}
        <path
          d="M24 8 L8.5 34 M24 8 L39.5 34 M24 8 L24 25 M24 25 L8.5 34 M24 25 L39.5 34"
          strokeWidth="3.2"
        />

        {/* 육각 노드 3개 — 굵은 선 + round join으로 모서리를 둥글린다 */}
        <g fill="url(#pg-logo-grad)" strokeWidth="3">
          <path d="M24 2.5 L28.8 5.25 L28.8 10.75 L24 13.5 L19.2 10.75 L19.2 5.25 Z" />
          <path d="M8.5 28.5 L13.3 31.25 L13.3 36.75 L8.5 39.5 L3.7 36.75 L3.7 31.25 Z" />
          <path d="M39.5 28.5 L44.3 31.25 L44.3 36.75 L39.5 39.5 L34.7 36.75 L34.7 31.25 Z" />
        </g>
      </g>
    </svg>
  );
}
