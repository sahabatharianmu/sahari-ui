import React, { useId } from "react";
export function Switch({ checked = false, onChange, disabled = false, label }) {
  const id = useId();
  return React.createElement("label", { htmlFor: id, style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", color: "var(--text-primary)", opacity: disabled ? 0.5 : 1 } },
    React.createElement("input", {
      id, type: "checkbox", role: "switch", checked, disabled,
      onChange: e => onChange && onChange(e.target.checked),
      style: { position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 },
    }),
    React.createElement("span", {
      "aria-hidden": true,
      style: {
        width: 46, height: 26, borderRadius: "var(--radius-pill)",
        background: checked ? "var(--brand-primary)" : "var(--border-default)",
        position: "relative", transition: "background var(--dur-base) var(--ease-standard)", flexShrink: 0,
      },
    }, React.createElement("span", {
      style: {
        position: "absolute", top: 3, left: checked ? 23 : 3, width: 20, height: 20, borderRadius: "50%",
        background: "#fff", boxShadow: "var(--shadow-sm)",
        transition: "left var(--dur-base) var(--ease-standard)",
      },
    })),
    label
  );
}
