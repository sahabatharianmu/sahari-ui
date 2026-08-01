import * as React from "react";
import { cn } from "../../lib/cn";

export type SideNavItem = { label: React.ReactNode; value: string; icon?: React.ReactNode };
export type SideNavProps = React.HTMLAttributes<HTMLElement> & {
  items: SideNavItem[];
  value: string;
  onValueChange?: (value: string) => void;
  "aria-label"?: string;
};

/** Desktop/web counterpart to `BottomNav` — same item shape, vertical layout. */
export function SideNav({ items, value, onValueChange, className, "aria-label": ariaLabel = "Navigasi utama", ...props }: SideNavProps) {
  return (
    <nav aria-label={ariaLabel} className={cn("sh-side-nav", className)} {...props}>
      {items.map((item) => (
        <button key={item.value} type="button" data-active={item.value === value} aria-current={item.value === value ? "page" : undefined} className="sh-side-nav__item" onClick={() => onValueChange?.(item.value)}>
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
}
