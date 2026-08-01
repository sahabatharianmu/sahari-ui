export interface SkeletonProps {
  /** @default "100%" */
  width?: number | string;
  /** @default 16 */
  height?: number | string;
  style?: React.CSSProperties;
}
/** Shimmering placeholder block for content that's still loading. */
export function Skeleton(props?: SkeletonProps): JSX.Element;
