/**
 * Selectable filter chip for topic/specialty/interest filtering.
 */
export interface TagProps { children?: React.ReactNode; selected?: boolean; onClick?: () => void; removable?: boolean; onRemove?: () => void; }
