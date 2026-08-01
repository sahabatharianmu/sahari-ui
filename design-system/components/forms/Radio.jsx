import React, { useId } from "react";
export function Radio({ label, checked = false, onChange, disabled = false, name }) {
  const id = useId();
  return React.createElement("label", { htmlFor: id, style: { display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-body)", fontSize: "var(--fs-body)", color: "var(--text-primary)" } },
    React.createElement("input", {
      id, type: "radio", name, checked, disabled,
      onChange: e => onChange && onChange(e.target.checked),
      style: { position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0 },
    }),
    React.createElement("span", {
      "aria-hidden": true,
      style: {
        width: 21, height: 21, borderRadius: "50%", flexShrink: 0, background: "var(--bg-surface)",
        border: `1.5px solid ${checked ? "var(--brand-primary)" : "var(--border-default)"}`,
        display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "border-color var(--dur-fast) var(--ease-standard)",
      },
    }, checked && React.createElement("span", { style: { width: 11, height: 11, borderRadius: "50%", background: "var(--brand-primary)" } })),
    label
  );
}
