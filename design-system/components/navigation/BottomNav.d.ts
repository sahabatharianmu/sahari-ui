/**
 * Mobile bottom tab bar — the primary navigation shell for the Sahari app.
 */
export interface NavItem { value: string; label: string; icon?: React.ReactNode; }
export interface BottomNavProps { items?: NavItem[]; active?: string; onChange?: (v: string) => void; }
