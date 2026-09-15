export type Pt = readonly [number, number];

/** Catmull-Rom → cubic Bézier smooth path through the given points. */
export function smoothPath(points: Pt[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return d;
}

export interface LineChart {
  pts: Pt[];
  line: string;
  area: string;
}

/** Builds smooth line + area path strings for a small chart. */
export function buildLineChart(
  values: number[],
  width: number,
  height: number,
  pad = 4,
): LineChart {
  const max = Math.max(...values) * 1.12;
  const min = Math.min(...values) * 0.72;
  const span = max - min || 1;
  const stepX = (width - pad * 2) / (values.length - 1);
  const pts: Pt[] = values.map((v, i) => [
    pad + i * stepX,
    pad + (height - pad * 2) * (1 - (v - min) / span),
  ]);
  const line = smoothPath(pts);
  const last = pts[pts.length - 1];
  const first = pts[0];
  const area = `${line} L ${last[0].toFixed(2)} ${height - pad} L ${first[0].toFixed(2)} ${height - pad} Z`;
  return { pts, line, area };
}
