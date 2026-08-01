export interface MenuItem {
  label: React.ReactNode;
  icon?: React.ReactNode;
  onSelect: () => void;
  tone?: "default" | "danger";
  disabled?: boolean;
}
export interface MenuProps {
  /** A single focusable element (e.g. `IconButton`) that opens the menu. */
  trigger: React.ReactElement;
  items: MenuItem[];
  /** @default "start" */
  align?: "start" | "end";
  label?: string;
}
/** Dropdown action menu — report/delete/share, avatar menu, etc. */
export function Menu(props: MenuProps): JSX.Element;
