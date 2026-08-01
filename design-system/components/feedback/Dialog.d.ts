/**
 * Centered modal for confirmations and short focused decisions — cancel booking, delete post.
 */
export interface DialogProps { open?: boolean; title: string; children?: React.ReactNode; onClose?: () => void; actions?: React.ReactNode; }
