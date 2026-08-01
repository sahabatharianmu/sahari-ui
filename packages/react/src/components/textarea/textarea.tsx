import * as React from "react";
import { cn } from "../../lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, id, className, "aria-describedby": describedBy, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const messageId = hint || error ? `${textareaId}-message` : undefined;
    return (
      <div className={cn("sh-field sh-textarea", className)} data-invalid={Boolean(error)}>
        {label ? <label className="sh-field__label" htmlFor={textareaId}>{label}</label> : null}
        <div className="sh-field__control">
          <textarea
            ref={ref}
            id={textareaId}
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
Textarea.displayName = "Textarea";
