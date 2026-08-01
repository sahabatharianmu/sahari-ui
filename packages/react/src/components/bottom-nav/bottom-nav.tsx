import * as React from "react";
import { cn } from "../../lib/cn";

export type BottomNavItem = { label: React.ReactNode; value: string; icon?: React.ReactNode };
export type BottomNavProps = React.HTMLAttributes<HTMLElement> & {
  items: BottomNavItem[];
  value: string;
  onValueChange?: (value: string) => void;
  "aria-label"?: string;
};

export function BottomNav({ items, value, onValueChange, className, "aria-label": ariaLabel = "Navigasi utama", ...props }: BottomNavProps) {
  return (
    <nav aria-label={ariaLabel} className={cn("sh-bottom-nav", className)} {...props}>
      {items.map((item) => (
        <button key={item.value} type="button" data-active={item.value === value} aria-current={item.value === value ? "page" : undefined} className="sh-bottom-nav__item" onClick={() => onValueChange?.(item.value)}>
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
}
