import * as React from "react";

export type TooltipProps = {
  label: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "bottom";
};

/** Hover/focus label for icon-only triggers, e.g. `IconButton`. Complements `aria-label`, doesn't replace it. */
export function Tooltip({ label, children, side = "top" }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const id = React.useId();

  const childProps = children.props as Record<string, unknown>;
  const cloned = React.cloneElement(children, {
    "aria-describedby": open ? id : (childProps["aria-describedby"] as string | undefined),
    onMouseEnter: (event: React.MouseEvent) => { (childProps.onMouseEnter as ((e: React.MouseEvent) => void) | undefined)?.(event); setOpen(true); },
    onMouseLeave: (event: React.MouseEvent) => { (childProps.onMouseLeave as ((e: React.MouseEvent) => void) | undefined)?.(event); setOpen(false); },
    onFocus: (event: React.FocusEvent) => { (childProps.onFocus as ((e: React.FocusEvent) => void) | undefined)?.(event); setOpen(true); },
    onBlur: (event: React.FocusEvent) => { (childProps.onBlur as ((e: React.FocusEvent) => void) | undefined)?.(event); setOpen(false); },
  } as Record<string, unknown>);

  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      {cloned}
      {open ? (
        <span role="tooltip" id={id} className="sh-tooltip" data-side={side}>
          {label}
        </span>
      ) : null}
    </span>
  );
}
