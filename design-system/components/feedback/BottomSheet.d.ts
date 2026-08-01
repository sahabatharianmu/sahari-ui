export interface BottomSheetProps {
  open?: boolean;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
}
/** Mobile-first alternative to `Dialog` — slides up from the bottom instead of centering. */
export function BottomSheet(props: BottomSheetProps): JSX.Element | null;
