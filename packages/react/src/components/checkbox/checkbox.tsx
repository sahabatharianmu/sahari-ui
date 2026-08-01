import * as React from "react";
import { cn } from "../../lib/cn";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className={cn("sh-choice", className)} data-kind="checkbox" data-disabled={disabled || undefined}>
        <input ref={ref} id={inputId} type="checkbox" disabled={disabled} className="sh-sr-only" {...props} />
        <span className="sh-choice__mark" aria-hidden="true" />
        {label}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
