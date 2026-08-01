import * as React from "react";
import { cn } from "../../lib/cn";

export type EmptyStateTone = "neutral" | "danger";
export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  tone?: EmptyStateTone;
};

export function EmptyState({ icon, title, description, action, tone = "neutral", className, ...props }: EmptyStateProps) {
  return (
    <div className={cn("sh-empty-state", className)} {...props}>
      {icon ? <span className="sh-empty-state__icon" data-tone={tone} aria-hidden="true">{icon}</span> : null}
      <strong className="sh-empty-state__title">{title}</strong>
      {description ? <p className="sh-empty-state__description">{description}</p> : null}
      {action ? <div className="sh-empty-state__action">{action}</div> : null}
    </div>
  );
}
