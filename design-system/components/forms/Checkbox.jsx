import React, { useId } from "react";
export function Checkbox({ label, checked = false, onChange, disabled = false }) {
  const id = useId();
  return React.createElement("label", { htmlFor: id, style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", color: "var(--text-primary)" } },
    React.createElement("input", {
      id, type: "checkbox", checked, disabled,
      onChange: e => onChange && onChange(e.target.checked),
      style: { position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 },
    }),
    React.createElement("span", {
      "aria-hidden": true,
      style: {
        width: 21, height: 21, borderRadius: 6, flexShrink: 0,
        background: checked ? "var(--brand-primary)" : "var(--bg-surface)",
        border: checked ? "none" : "1.5px solid var(--border-default)",
        outline: "2px solid transparent", outlineOffset: 2,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
      },
      className: "sahari-focusable",
    }, checked && React.createElement("span", { style: { color: "#fff", fontSize: 12, lineHeight: 1 } }, "✓")),
    label
  );
}
