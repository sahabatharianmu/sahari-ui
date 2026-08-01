/**
 * Transient confirmation banner for background actions — post published, booking confirmed.
 */
export interface ToastProps { tone?: "success" | "info" | "warning"; title: string; description?: string; onClose?: () => void; }
