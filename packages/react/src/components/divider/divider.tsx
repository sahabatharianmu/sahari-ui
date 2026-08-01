import * as React from "react";
import { cn } from "../../lib/cn";

export function Divider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn("sh-divider", className)} {...props} />;
}
