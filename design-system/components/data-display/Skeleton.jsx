import React from "react";
export function Skeleton({ width = "100%", height = 16, style }) {
  return React.createElement("div", {
    "aria-hidden": true,
    style: {
      display: "block", width, height, borderRadius: "var(--radius-md)",
      background: "linear-gradient(90deg, var(--border-subtle) 25%, var(--border-default) 37%, var(--border-subtle) 63%)",
      backgroundSize: "200% 100%", animation: "sh-shimmer 1.4s ease-in-out infinite",
      ...style,
    },
  });
}
