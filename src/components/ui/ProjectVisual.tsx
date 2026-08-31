import type { Project } from "@/data/projects";

const LINE = "#24304A";
const MUTED = "#8C99AF";
const SIGNAL = "#E8A33D";
const VERIFY = "#6FE3D9";

function ScanVisual() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="0" y="0" width="400" height="300" fill="#141C2B" />
      <polygon
        points="200,70 260,110 250,180 150,180 140,110"
        fill="none"
        stroke={MUTED}
        strokeWidth="1"
        opacity="0.7"
      />
      <line x1="200" y1="70" x2="200" y2="180" stroke={MUTED} strokeWidth="1" opacity="0.4" />
      <line x1="140" y1="110" x2="260" y2="110" stroke={MUTED} strokeWidth="1" opacity="0.4" />
      <rect x="110" y="55" width="180" height="150" fill="none" stroke={SIGNAL} strokeWidth="1.5" opacity="0.8" />
      <line x1="110" y1="55" x2="290" y2="55" stroke={VERIFY} strokeWidth="2" opacity="0.9" />
      <text x="115" y="225" fill={VERIFY} fontSize="11" fontFamily="monospace" letterSpacing="1">
        OPENVINO INFERENCE · 11.2ms
      </text>
    </svg>
  );
}

function NetworkVisual() {
  const nodes: [number, number][] = [
    [70, 150],
    [160, 90],
    [160, 210],
    [260, 60],
    [260, 150],
    [260, 240],
    [340, 150]
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 5],
    [3, 6],
    [4, 6],
    [5, 6]
  ];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="0" y="0" width="400" height="300" fill="#141C2B" />
      {edges.map(([a, b], i) => {
        const start = nodes[a];
        const end = nodes[b];
        if (!start || !end) return null;
        return (
          <line
            key={i}
            x1={start[0]}
            y1={start[1]}
            x2={end[0]}
            y2={end[1]}
            stroke={LINE}
            strokeWidth="1.5"
          />
        );
      })}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 6 ? 7 : 5}
          fill={i === 6 ? SIGNAL : "#0D1420"}
          stroke={i === 6 ? SIGNAL : VERIFY}
          strokeWidth="1.5"
        />
      ))}
      <text x="30" y="280" fill={SIGNAL} fontSize="10" fontFamily="monospace">
        APIFY + SELENIUM · 2K–4K RECS/RUN
      </text>
    </svg>
  );
}

function FlowVisual() {
  const steps = [60, 160, 260, 340];
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="0" y="0" width="400" height="300" fill="#141C2B" />
      <line x1="60" y1="150" x2="340" y2="150" stroke={LINE} strokeWidth="1.5" />
      {steps.map((x, i) => (
        <g key={x}>
          <rect
            x={x - 24}
            y={126}
            width="48"
            height="48"
            rx="4"
            fill="#0D1420"
            stroke={i === steps.length - 1 ? SIGNAL : VERIFY}
            strokeWidth="1.5"
          />
          <text x={x} y={196} fill={MUTED} fontSize="10" fontFamily="monospace" textAnchor="middle">
            0{i + 1}
          </text>
        </g>
      ))}
      <text x="30" y="280" fill={VERIFY} fontSize="10" fontFamily="monospace">
        ZAPIER + GOOGLE OAUTH · 4-APP FLOW
      </text>
    </svg>
  );
}

const VISUALS: Record<Project["visual"], () => JSX.Element> = {
  scan: ScanVisual,
  network: NetworkVisual,
  flow: FlowVisual
};

export function ProjectVisual({ variant }: { variant: Project["visual"] }) {
  const Visual = VISUALS[variant] || ScanVisual;
  return <Visual />;
}
