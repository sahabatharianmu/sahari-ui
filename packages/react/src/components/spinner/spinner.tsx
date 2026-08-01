import * as React from "react";
import { cn } from "../../lib/cn";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: number;
  /** Pass a label to announce this as a standalone loading indicator; omit when it's decorative inside a labeled control like `Button`. */
  label?: string;
};

export function Spinner({ size = 16, label, className, ...props }: SpinnerProps) {
  return (
    <span
      role={label ? "status" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("sh-spinner", className)}
      style={{ width: size, height: size }}
      {...props}
    />
  );
}
