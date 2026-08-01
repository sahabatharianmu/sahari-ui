import React from "react";
const SIZES = { sm: 56, md: 96, lg: 160 };
export function PulseOrb({ size = "md", animated = true }) {
  const dim = SIZES[size] || SIZES.md;
  return React.createElement("div", {
    style: { width: dim, height: dim, position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" },
  },
    animated && React.createElement("span", {
      style: {
        position: "absolute", inset: 0, borderRadius: "50%",
        background: "radial-gradient(circle, color-mix(in oklch, var(--purple-400) 55%, transparent) 0%, transparent 72%)",
        animation: "sahari-pulse 2.6s var(--ease-standard) infinite",
      },
    }),
    React.createElement("span", {
      style: {
        width: dim * 0.62, height: dim * 0.62, borderRadius: "50%",
        background: "linear-gradient(150deg, var(--purple-300), var(--purple-600))",
        boxShadow: "var(--shadow-neu-brand)",
      },
    })
  );
}
