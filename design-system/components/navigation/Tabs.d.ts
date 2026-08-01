/**
 * Segmented tab control for switching between related views — feed vs following, upcoming vs past.
 */
export interface TabItem { label: string; value: string; }
export interface TabsProps { items?: (TabItem | string)[]; active?: string; onChange?: (v: string) => void; }
