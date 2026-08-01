import * as React from "react";
import { cn } from "../../lib/cn";

export type StepperProps = React.HTMLAttributes<HTMLDivElement> & {
  steps: string[];
  /** 0-based index of the active step. */
  current: number;
};

export function Stepper({ steps, current, className, ...props }: StepperProps) {
  return (
    <div role="group" aria-label="Progres" className={cn("sh-stepper", className)} {...props}>
      {steps.map((label, index) => (
        <div key={label} className="sh-stepper__step" data-done={index <= current} aria-current={index === current ? "step" : undefined}>
          <span className="sh-stepper__bar" aria-hidden="true" />
          <span className="sh-stepper__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
