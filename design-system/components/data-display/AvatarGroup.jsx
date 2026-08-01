import React from "react";
const SIZES = { sm: 32, md: 44, lg: 64, xl: 88 };
function initialsOf(name) {
  return name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}
export function AvatarGroup({ people = [], max = 4, size = "sm" }) {
  const dim = SIZES[size] || SIZES.sm;
  const visible = people.slice(0, max);
  const overflow = people.length - visible.length;
  return React.createElement("div", { style: { display: "inline-flex", alignItems: "center" } },
    visible.map((person, i) => React.createElement("span", {
      key: i,
      style: {
        position: "relative", marginLeft: i === 0 ? 0 : -10, boxShadow: "0 0 0 2px var(--bg-surface)", borderRadius: "50%",
      },
    },
      person.src
        ? React.createElement("img", { src: person.src, alt: person.name, style: { width: dim, height: dim, borderRadius: "50%", objectFit: "cover", display: "block" } })
        : React.createElement("span", {
            style: {
              width: dim, height: dim, borderRadius: "50%", background: "var(--purple-100)", color: "var(--purple-700)",
              display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-display)", fontSize: dim * 0.36,
            },
          }, initialsOf(person.name))
    )),
    overflow > 0 && React.createElement("span", {
      style: {
        width: dim, height: dim, marginLeft: -10, borderRadius: "50%", background: "var(--neutral-200)", color: "var(--text-secondary)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-display)", fontSize: dim * 0.32,
        boxShadow: "0 0 0 2px var(--bg-surface)",
      },
    }, `+${overflow}`)
  );
}
