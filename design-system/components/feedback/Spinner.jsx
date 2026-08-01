import React from "react";
export function Spinner({ size = 16, label, style }) {
  return React.createElement("span", {
    role: label ? "status" : undefined, "aria-label": label, "aria-hidden": label ? undefined : true,
    style: {
      display: "inline-block", width: size, height: size, borderRadius: "50%",
      border: "2px solid currentColor", borderTopColor: "transparent", opacity: 0.85,
      animation: "sh-spin 0.7s linear infinite",
      ...style,
    },
  });
}
