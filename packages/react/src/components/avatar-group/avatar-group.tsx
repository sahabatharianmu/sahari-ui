import * as React from "react";
import { Avatar, avatarSizes, type AvatarSize } from "../avatar/avatar";
import { cn } from "../../lib/cn";

export type AvatarGroupProps = {
  people: Array<{ name: string; src?: string }>;
  max?: number;
  size?: AvatarSize;
  className?: string;
};

/** Stacked avatars with a "+N" overflow, e.g. "liked by Rani, Budi +12 others". */
export function AvatarGroup({ people, max = 4, size = "sm", className }: AvatarGroupProps) {
  const visible = people.slice(0, max);
  const overflow = people.length - visible.length;

  return (
    <div className={cn("sh-avatar-group", className)}>
      {visible.map((person, index) => (
        <Avatar key={index} name={person.name} src={person.src} size={size} />
      ))}
      {overflow > 0 ? (
        <span className="sh-avatar-group__more" style={{ "--sh-avatar-size": `${avatarSizes[size]}px` } as React.CSSProperties}>
          +{overflow}
        </span>
      ) : null}
    </div>
  );
}
