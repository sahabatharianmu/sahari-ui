import * as React from "react";
import { cn } from "../../lib/cn";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "role"> & {
  label?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, id, className, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className={cn("sh-switch", className)} data-disabled={disabled || undefined}>
        <input ref={ref} id={inputId} type="checkbox" role="switch" disabled={disabled} className="sh-sr-only" {...props} />
        <span className="sh-switch__track" aria-hidden="true"><span className="sh-switch__thumb" /></span>
        {label}
      </label>
    );
  },
);
Switch.displayName = "Switch";
