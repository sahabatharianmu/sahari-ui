import React from "react";
export function Divider({ style } = {}) {
  return React.createElement("hr", {
    style: { border: 0, borderTop: "1px solid var(--border-subtle)", margin: 0, ...style },
  });
}
