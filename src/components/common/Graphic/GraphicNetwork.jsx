import React, { memo } from "react";
import Line from "./Line";
import Circle from "./Circle";


export const DEFAULT_NETWORK_LINES = [
  { x1: 90, y1: 105, x2: 260, y2: 170 },
  { x1: 260, y1: 170, x2: 445, y2: 120 },
  { x1: 260, y1: 170, x2: 350, y2: 300 },
  { x1: 350, y1: 300, x2: 505, y2: 255 },
  { x1: 90, y1: 105, x2: 350, y2: 300 },
  { x1: 445, y1: 120, x2: 505, y2: 255 },
  { x1: 350, y1: 300, x2: 175, y2: 335 },
];


export const DEFAULT_NETWORK_CIRCLES = [
  { cx: 90, cy: 105, r: 6, fill: "#111318", stroke: "#ffffff", strokeWidth: 1.2 },
  { cx: 260, cy: 170, r: 9, fill: "#b400e8", stroke: "#b400e8", strokeWidth: 1.2 },
  { cx: 445, cy: 120, r: 6, fill: "#111318", stroke: "#ffffff", strokeWidth: 1.2 },
  { cx: 350, cy: 300, r: 8, fill: "#111318", stroke: "#ffffff", strokeWidth: 1.2 },
  { cx: 505, cy: 255, r: 6, fill: "#111318", stroke: "#ffffff", strokeWidth: 1.2 },
  { cx: 175, cy: 335, r: 5, fill: "#111318", stroke: "#ffffff", strokeWidth: 1.2 },
  { cx: 260, cy: 170, r: 3, fill: "#b400e8" },
  { cx: 350, cy: 300, r: 3, fill: "#b400e8" },
];


export const GraphicNetwork = memo(({
  lines = DEFAULT_NETWORK_LINES,
  circles = DEFAULT_NETWORK_CIRCLES,
  viewBox = "0 0 620 410",
  preserveAspectRatio = "none",
  className = "pointer-events-none absolute inset-0 h-full w-full",
  defaultLineProps = {
    stroke: "rgba(255,255,255,0.2)",
    strokeWidth: 1,
    strokeDasharray: "4 7",
  },
  defaultCircleProps = {
    r: 4,
    fill: "#bd00f2",
    stroke: "rgba(255,255,255,0.4)",
  },
  children,
}) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
    >
      {lines.map((line, idx) => {
        const lineProps = Array.isArray(line)
          ? { x1: line[0], y1: line[1], x2: line[2], y2: line[3] }
          : line;

        return <Line key={`line-${idx}`} {...defaultLineProps} {...lineProps} />;
      })}

      {circles.map((circle, idx) => {
        const circleProps = Array.isArray(circle)
          ? { cx: circle[0], cy: circle[1], r: circle[2] || 4 }
          : circle;

        return <Circle key={`circle-${idx}`} {...defaultCircleProps} {...circleProps} />;
      })}

      {children}
    </svg>
  );
});

GraphicNetwork.displayName = "GraphicNetwork";

export default GraphicNetwork;
