import React, { memo } from "react";

export const Circle = memo(({
  cx,
  cy,
  r = 4,
  fill = "none",
  stroke = "rgba(255,255,255,0.2)",
  strokeWidth = 1,
  strokeDasharray,
  strokeOpacity,
  className = "",
  style,
  ...props
}) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      strokeOpacity={strokeOpacity}
      className={className}
      style={style}
      {...props}
    />
  );
});

Circle.displayName = "GraphicCircle";

export default Circle;
