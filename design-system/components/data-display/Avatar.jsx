import React from "react";
const SIZES = { sm: 32, md: 44, lg: 64, xl: 88 };
export function Avatar({ src, name = "", size = "md", online }) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
  return React.createElement("span", { style: { position: "relative", display: "inline-flex", flexShrink: 0 } },
    src
      ? React.createElement("img", { src, alt: name, style: { width: dim, height: dim, borderRadius: "50%", objectFit: "cover", boxShadow: "var(--shadow-neu-raised-sm)" } })
      : React.createElement("span", {
          style: {
            width: dim, height: dim, borderRadius: "50%", background: "var(--purple-100)", color: "var(--purple-700)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-display)", fontSize: dim * 0.36,
            boxShadow: "var(--shadow-neu-raised-sm)",
          },
        }, initials),
    online != null && React.createElement("span", {
      style: {
        position: "absolute", right: 0, bottom: 0, width: dim * 0.28, height: dim * 0.28, borderRadius: "50%",
        background: online ? "var(--state-success-solid)" : "var(--neutral-300)", border: "2px solid var(--bg-surface)",
      },
    })
  );
}
