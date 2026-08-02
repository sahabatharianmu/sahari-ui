import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccountSwitcher, type Account } from "./account-switcher";

const meta = { title: "Components/AccountSwitcher" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const accounts: Account[] = [
  { id: "personal", name: "Rani Wulandari", role: "Akun pribadi" },
  { id: "pro", name: "Dr. Rani Wulandari", role: "Psikolog" },
];

function MenuDemo() {
  const [active, setActive] = React.useState("personal");
  return (
    <div style={{ width: 240, padding: 12, background: "var(--bg-surface)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
      <AccountSwitcher
        accounts={accounts}
        activeAccountId={active}
        onSwitch={setActive}
        onAddAccount={() => {}}
        onLogout={() => {}}
      />
    </div>
  );
}

function SheetDemo() {
  const [active, setActive] = React.useState("personal");
  return (
    <AccountSwitcher
      variant="sheet"
      accounts={accounts}
      activeAccountId={active}
      onSwitch={setActive}
      onAddAccount={() => {}}
      onLogout={() => {}}
    />
  );
}

export const DesktopMenu: Story = { render: () => <MenuDemo /> };
export const MobileSheet: Story = { render: () => <SheetDemo /> };
