import * as React from "react";
import { cn } from "../../lib/cn";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  icon?: React.ReactNode;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, icon, id, className, "aria-describedby": describedBy, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const messageId = hint || error ? `${inputId}-message` : undefined;
    return (
      <div className={cn("sh-field", className)} data-invalid={Boolean(error)}>
        {label ? <label className="sh-field__label" htmlFor={inputId}>{label}</label> : null}
        <div className="sh-field__control">
          {icon}
          <input
            ref={ref}
            id={inputId}
            className="sh-field__input"
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={[describedBy, messageId].filter(Boolean).join(" ") || undefined}
            {...props}
          />
        </div>
        {error ? <span id={messageId} role="alert" className="sh-field__message" data-tone="danger">{error}</span> : hint ? <span id={messageId} className="sh-field__message">{hint}</span> : null}
      </div>
    );
  },
);
Input.displayName = "Input";
