import * as React from "react";
import { cn } from "../../lib/cn";

export type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  ({ selected = false, children, className, type = "button", ...props }, ref) => (
    <button ref={ref} type={type} data-selected={selected} aria-pressed={selected} className={cn("sh-tag", className)} {...props}>
      {children}
    </button>
  ),
);
Tag.displayName = "Tag";
