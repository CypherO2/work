type Star = {
  x: number;
  y: number;
  r?: number;
  twinkle?: "fast" | "slow";
};

type Constellation = {
  name: string;
  stars: Star[];
  lines: Array<[number, number]>;
};

const SKY_W = 480;
const SKY_H = 300;

/**
 * Northern-hemisphere layout (N toward top).
 * Relative placement drawn from common sky-map relations:
 * Polaris / Ursa Minor near the pole, Ursa Major opposite Cassiopeia,
 * Cygnus + Lyra as a summer pair, Orion lower as a winter figure.
 * Crux removed (southern sky).
 */
const CONSTELLATIONS: Constellation[] = [
  {
    name: "Ursa Minor",
    stars: [
      { x: 240, y: 52, r: 0.55, twinkle: "slow" },
      { x: 248, y: 68, r: 0.28 },
      { x: 254, y: 84, r: 0.26 },
      { x: 248, y: 98, r: 0.3 },
      { x: 236, y: 104, r: 0.28 },
      { x: 228, y: 90, r: 0.26 },
      { x: 234, y: 76, r: 0.24 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 2],
    ],
  },
  {
    name: "Ursa Major",
    stars: [
      { x: 360, y: 118, r: 0.36 },
      { x: 380, y: 112, r: 0.34 },
      { x: 398, y: 122, r: 0.38, twinkle: "slow" },
      { x: 412, y: 138, r: 0.34 },
      { x: 396, y: 158, r: 0.4, twinkle: "fast" },
      { x: 372, y: 164, r: 0.36 },
      { x: 354, y: 146, r: 0.34 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
  {
    name: "Cassiopeia",
    stars: [
      { x: 96, y: 78, r: 0.4, twinkle: "fast" },
      { x: 118, y: 102, r: 0.36 },
      { x: 146, y: 80, r: 0.46, twinkle: "slow" },
      { x: 172, y: 108, r: 0.38 },
      { x: 198, y: 84, r: 0.42, twinkle: "fast" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    name: "Cygnus",
    stars: [
      { x: 78, y: 168, r: 0.32 },
      { x: 98, y: 192, r: 0.36, twinkle: "fast" },
      { x: 118, y: 220, r: 0.42, twinkle: "slow" },
      { x: 74, y: 198, r: 0.28 },
      { x: 126, y: 186, r: 0.28 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [3, 1],
      [1, 4],
    ],
  },
  {
    name: "Lyra",
    stars: [
      { x: 48, y: 148, r: 0.48, twinkle: "slow" },
      { x: 38, y: 168, r: 0.26 },
      { x: 58, y: 172, r: 0.24 },
      { x: 44, y: 188, r: 0.24 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ],
  },
  {
    name: "Orion",
    stars: [
      { x: 292, y: 208, r: 0.36 },
      { x: 328, y: 204, r: 0.34 },
      { x: 302, y: 230, r: 0.3, twinkle: "fast" },
      { x: 312, y: 236, r: 0.38, twinkle: "slow" },
      { x: 322, y: 242, r: 0.3 },
      { x: 298, y: 268, r: 0.4 },
      { x: 334, y: 262, r: 0.34 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
    ],
  },
  {
    name: "Pegasus",
    stars: [
      { x: 156, y: 230, r: 0.34 },
      { x: 196, y: 228, r: 0.32 },
      { x: 200, y: 262, r: 0.34, twinkle: "slow" },
      { x: 158, y: 266, r: 0.3 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
  },
];

/** Irregular field stars across the full sky. */
function fieldStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i += 1) {
    const x = (i * 97 + ((i * i * 13) % 89) * 3) % SKY_W;
    const y = (i * 53 + ((i * 17) % 71) * 4 + 11) % SKY_H;
    const r = 0.14 + ((i * 11) % 9) * 0.04;
    const twinkle: Star["twinkle"] =
      i % 3 === 0 ? "fast" : i % 5 === 0 ? "slow" : "fast";
    stars.push({ x, y, r, twinkle });
  }
  return stars;
}

const FIELD = fieldStars(140);

function twinkleClass(kind: Star["twinkle"]) {
  if (kind === "fast") return "star-twinkle";
  if (kind === "slow") return "star-twinkle-slow";
  return undefined;
}

function StarMark({
  x,
  y,
  r = 0.3,
  twinkle,
  bright = false,
}: Star & { bright?: boolean }) {
  const glowR = r * (bright ? 4.2 : 3.2);
  return (
    <g className={bright ? "star-bright" : "star-dim"}>
      <circle
        cx={x}
        cy={y}
        r={glowR}
        className="star-halo"
        filter="url(#star-blur)"
      />
      <circle
        cx={x}
        cy={y}
        r={r * 1.7}
        className="star-mid"
        filter="url(#star-soft)"
      />
      <circle
        cx={x}
        cy={y}
        r={r}
        className={`star-core ${twinkleClass(twinkle) ?? ""}`}
      />
    </g>
  );
}

function ConstellationGroup({ name, stars, lines }: Constellation) {
  const showLines = name === "Cassiopeia";

  return (
    <g data-name={name}>
      {showLines
        ? lines.map(([a, b]) => {
            const from = stars[a];
            const to = stars[b];
            if (!from || !to) return null;
            return (
              <g key={`${name}-${a}-${b}`} className="cassiopeia-lines">
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className="constellation-line-glow"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  filter="url(#line-blur)"
                />
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className="constellation-line"
                  strokeWidth="0.22"
                  strokeLinecap="round"
                />
              </g>
            );
          })
        : null}
      {stars.map((star, index) => (
        <StarMark
          key={`${name}-${star.x}-${star.y}`}
          {...star}
          bright
          twinkle={star.twinkle ?? (index % 2 === 0 ? "fast" : "slow")}
        />
      ))}
    </g>
  );
}

export default function Starfield() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="starfield-svg h-full w-full"
        viewBox={`0 0 ${SKY_W} ${SKY_H}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sky-glow" cx="48%" cy="28%" r="62%">
            <stop offset="0%" stopColor="var(--sky-glow-a)" />
            <stop offset="55%" stopColor="var(--sky-glow-mid)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
          <radialGradient id="sky-glow-b" cx="72%" cy="74%" r="42%">
            <stop offset="0%" stopColor="var(--sky-glow-b)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
          <filter
            id="star-blur"
            x="-120%"
            y="-120%"
            width="340%"
            height="340%"
          >
            <feGaussianBlur stdDeviation="1.15" />
          </filter>
          <filter
            id="star-soft"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="0.45" />
          </filter>
          <filter
            id="line-blur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>

        <rect width={SKY_W} height={SKY_H} fill="#01040a" />
        <rect width={SKY_W} height={SKY_H} fill="url(#sky-glow)" />
        <rect width={SKY_W} height={SKY_H} fill="url(#sky-glow-b)" />

        <g opacity="0.65">
          {FIELD.map((star) => (
            <StarMark key={`field-${star.x}-${star.y}-${star.r}`} {...star} />
          ))}
        </g>

        {CONSTELLATIONS.map((constellation) => (
          <ConstellationGroup key={constellation.name} {...constellation} />
        ))}
      </svg>
    </div>
  );
}
