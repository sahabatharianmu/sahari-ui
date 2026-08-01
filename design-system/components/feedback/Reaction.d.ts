export interface ReactionProps {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  count?: number;
  active?: boolean;
  onClick?: () => void;
}
/** Small tappable icon+count control for likes/reactions on a feed post or comment. */
export function Reaction(props: ReactionProps): JSX.Element;
