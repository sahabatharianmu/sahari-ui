export interface AvatarGroupPerson {
  name: string;
  src?: string;
}
export interface AvatarGroupProps {
  people: AvatarGroupPerson[];
  /** How many avatars to show before collapsing into a "+N" overflow badge. @default 4 */
  max?: number;
  /** @default "sm" */
  size?: "sm" | "md" | "lg" | "xl";
}
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
