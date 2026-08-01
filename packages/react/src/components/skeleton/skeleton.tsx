import * as React from "react";
import { cn } from "../../lib/cn";

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: number | string;
  height?: number | string;
};

export function Skeleton({ width, height = 16, className, style, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("sh-skeleton", className)}
      style={{ ...style, width: width ?? "100%", height }}
      {...props}
    />
  );
}
