import React, { memo } from "react";

/**
 * Reusable global SVG Line component for graphic diagrams, maps & network visualisations.
 */
export const Line = memo(({
  x1,
  y1,
  x2,
  y2,
  stroke = "rgba(255,255,255,0.2)",
  strokeWidth = 1,
  strokeDasharray = "4 7",
  strokeOpacity,
  vectorEffect = "non-scaling-stroke",
  className = "",
  style,
  ...props
}) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeOpacity={strokeOpacity}
      vectorEffect={vectorEffect}
      className={className}
      style={style}
      {...props}
    />
  );
});

Line.displayName = "GraphicLine";

export default Line;
