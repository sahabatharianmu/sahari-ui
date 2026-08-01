import * as React from "react";
import { cn } from "../../lib/cn";

export type TabItem = { label: React.ReactNode; value: string };
export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  items: TabItem[];
  value: string;
  onValueChange?: (value: string) => void;
};

export function Tabs({ items, value, onValueChange, className, ...props }: TabsProps) {
  const refs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const activate = (index: number) => {
    const item = items[index];
    if (!item) return;
    onValueChange?.(item.value);
    refs.current[index]?.focus();
  };

  return (
    <div role="tablist" className={cn("sh-tabs", className)} {...props}>
      {items.map((item, index) => (
        <button
          ref={(node) => { refs.current[index] = node; }}
          key={item.value}
          type="button"
          role="tab"
          aria-selected={item.value === value}
          className="sh-tab"
          onClick={() => onValueChange?.(item.value)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowDown") { event.preventDefault(); activate((index + 1) % items.length); }
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") { event.preventDefault(); activate((index - 1 + items.length) % items.length); }
            if (event.key === "Home") { event.preventDefault(); activate(0); }
            if (event.key === "End") { event.preventDefault(); activate(items.length - 1); }
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
