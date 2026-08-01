import * as React from "react";
import { cn } from "../../lib/cn";

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, id, className, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    return (
      <label htmlFor={inputId} className={cn("sh-choice", className)} data-kind="radio" data-disabled={disabled || undefined}>
        <input ref={ref} id={inputId} type="radio" disabled={disabled} className="sh-sr-only" {...props} />
        <span className="sh-choice__mark" aria-hidden="true" />
        {label}
      </label>
    );
  },
);
Radio.displayName = "Radio";
