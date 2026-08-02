import * as React from "react";
import { Avatar } from "../avatar/avatar";
import { BottomSheet } from "../bottom-sheet/bottom-sheet";
import { Button } from "../button/button";
import { Menu, type MenuItem } from "../menu/menu";
import { cn } from "../../lib/cn";
import { useMediaQuery } from "../../lib/use-media-query";

export type Account = {
  id: string;
  name: string;
  /** e.g. "Akun pribadi" or "Psikolog". */
  role?: string;
  avatarSrc?: string;
};

export type AccountSwitcherProps = {
  accounts: Account[];
  activeAccountId: string;
  onSwitch: (id: string) => void;
  onAddAccount?: () => void;
  onLogout?: () => void;
  /** `menu`: desktop popover (e.g. sidebar footer). `sheet`: mobile bottom sheet. `auto`: picks based on viewport width (768px), for a single component that adapts across the same page. */
  variant?: "menu" | "sheet" | "auto";
  /** Only used by `variant="menu"` — opens upward for triggers pinned to the bottom of the viewport. */
  side?: "top" | "bottom";
  className?: string;
};

function ChevronsUpDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function LogOutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

function AccountRow({ account, active }: { account: Account; active?: boolean }) {
  return (
    <span className="sh-account-row">
      <Avatar name={account.name} src={account.avatarSrc} size="sm" />
      <span className="sh-account-row__text">
        <span className="sh-account-row__name">{account.name}</span>
        {account.role ? <span className="sh-account-row__role">{account.role}</span> : null}
      </span>
      {active ? <CheckIcon /> : null}
    </span>
  );
}

const Trigger = React.forwardRef<HTMLButtonElement, { account: Account; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ account, className, ...props }, ref) => (
    <button ref={ref} type="button" className={cn("sh-account-switcher__trigger", className)} {...props}>
      <Avatar name={account.name} src={account.avatarSrc} size="sm" />
      <span className="sh-account-row__text">
        <span className="sh-account-row__name">{account.name}</span>
        {account.role ? <span className="sh-account-row__role">{account.role}</span> : null}
      </span>
      <ChevronsUpDownIcon />
    </button>
  ),
);
Trigger.displayName = "AccountSwitcherTrigger";

export function AccountSwitcher({ accounts, activeAccountId, onSwitch, onAddAccount, onLogout, variant = "menu", side = "top", className }: AccountSwitcherProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const resolvedVariant = variant === "auto" ? (isDesktop ? "menu" : "sheet") : variant;
  const active = accounts.find((account) => account.id === activeAccountId) ?? accounts[0];
  const [sheetOpen, setSheetOpen] = React.useState(false);

  if (!active) return null;

  if (resolvedVariant === "sheet") {
    return (
      <>
        <Trigger account={active} className={className} aria-haspopup="dialog" aria-expanded={sheetOpen} onClick={() => setSheetOpen(true)} />
        <BottomSheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          title="Akun kamu"
          actions={(
            <>
              {onAddAccount ? <Button variant="outline" onClick={() => { setSheetOpen(false); onAddAccount(); }}>Tambah akun</Button> : null}
              {onLogout ? <Button variant="ghost" onClick={() => { setSheetOpen(false); onLogout(); }}>Keluar</Button> : null}
            </>
          )}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {accounts.map((account) => (
              <button
                key={account.id}
                type="button"
                className="sh-account-switcher__item"
                onClick={() => { onSwitch(account.id); setSheetOpen(false); }}
              >
                <AccountRow account={account} active={account.id === active.id} />
              </button>
            ))}
          </div>
        </BottomSheet>
      </>
    );
  }

  const items: MenuItem[] = [
    ...accounts.map((account) => ({
      label: <AccountRow account={account} active={account.id === active.id} />,
      onSelect: () => onSwitch(account.id),
    })),
    ...(onAddAccount ? [{ label: "Tambah akun", icon: <PlusIcon />, onSelect: onAddAccount }] : []),
    ...(onLogout ? [{ label: "Keluar", icon: <LogOutIcon />, tone: "danger" as const, onSelect: onLogout }] : []),
  ];

  return (
    <Menu
      label="Beralih akun"
      align="start"
      side={side}
      trigger={<Trigger account={active} className={className} />}
      items={items}
    />
  );
}
