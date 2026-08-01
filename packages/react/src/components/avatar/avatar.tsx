import * as React from "react";
import { cn } from "../../lib/cn";

export const avatarSizes = { sm: 32, md: 44, lg: 64, xl: 88 } as const;
export type AvatarSize = keyof typeof avatarSizes;
const tones = ["brand", "success", "warning", "danger", "info"] as const;
export type AvatarTone = (typeof tones)[number];
export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  src?: string;
  name?: string;
  size?: AvatarSize;
  online?: boolean;
  /** Fixes the fallback color; otherwise derived from `name` for per-person variety. */
  tone?: AvatarTone;
};

function initials(name = "") {
  return name.split(" ").filter(Boolean).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}

function toneFromName(name: string): AvatarTone {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return tones[Math.abs(hash) % tones.length]!;
}

export function Avatar({ src, name = "", size = "md", online, tone, className, style, ...props }: AvatarProps) {
  const dim = avatarSizes[size];
  return (
    <span className={cn("sh-avatar", className)} style={{ ...style, "--sh-avatar-size": `${dim}px` } as React.CSSProperties} {...props}>
      {src ? (
        <img className="sh-avatar__image" src={src} alt={name} />
      ) : (
        <span className="sh-avatar__fallback" data-tone={tone ?? toneFromName(name)} aria-hidden={name ? undefined : true}>
          {initials(name) || "?"}
        </span>
      )}
      {online != null ? <span className="sh-avatar__status" data-online={online} aria-label={online ? "Online" : "Offline"} /> : null}
    </span>
  );
}
