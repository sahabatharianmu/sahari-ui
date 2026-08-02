import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccountSwitcher, type Account } from "../components/account-switcher/account-switcher";
import { Avatar } from "../components/avatar/avatar";
import { BottomNav } from "../components/bottom-nav/bottom-nav";
import { Card } from "../components/card/card";
import { SideNav } from "../components/side-nav/side-nav";

const meta = { title: "Compositions/Notifications" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Notification = {
  id: number;
  name: string;
  action: string;
  time: string;
  unread: boolean;
};

const today: Notification[] = [
  { id: 1, name: "Rani Wulandari", action: "menyukai cerita kamu.", time: "10m", unread: true },
  { id: 2, name: "Dr. Amara Putri", action: "mengonfirmasi jadwal sesi besok, 10:00.", time: "2j", unread: true },
];

const earlier: Notification[] = [
  { id: 3, name: "Budi Santoso", action: "membalas komentar kamu.", time: "Kemarin", unread: false },
  { id: 4, name: "Anonim", action: "mengirim dukungan di cerita kamu.", time: "3 hari lalu", unread: false },
];

function NotificationRow({ item }: { item: Notification }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "10px 0" }}>
      <Avatar name={item.name} size="sm" />
      <p style={{ flex: 1, margin: 0, fontSize: 14, color: "var(--text-primary)", lineHeight: "var(--lh-body)" }}>
        <strong>{item.name}</strong> {item.action}
        <span style={{ display: "block", marginTop: 2, fontSize: 12, color: "var(--text-tertiary)" }}>{item.time}</span>
      </p>
      {item.unread ? <span aria-label="Belum dibaca" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand-primary)", marginTop: 6, flexShrink: 0 }} /> : null}
    </div>
  );
}

const accounts: Account[] = [
  { id: "personal", name: "Kamu", role: "Akun pribadi" },
  { id: "pro", name: "Dr. Kamu", role: "Psikolog" },
];

const navItems = [
  { value: "home", label: "Beranda" },
  { value: "discover", label: "Temukan" },
  { value: "messages", label: "Pesan" },
  { value: "profile", label: "Profil" },
];

function NotificationsDemo() {
  const [nav, setNav] = React.useState("home");
  const [account, setAccount] = React.useState("personal");

  return (
    <div className="sh-shell">
      <div className="sh-shell__mobile-header">
        <strong style={{ color: "var(--purple-700)", fontSize: 20, fontFamily: "var(--font-display)" }}>Notifikasi</strong>
        <AccountSwitcher variant="auto" accounts={accounts} activeAccountId={account} onSwitch={setAccount} onAddAccount={() => {}} onLogout={() => {}} />
      </div>

      <div className="sh-shell__body">
        <div className="sh-shell__grid">
          <aside className="sh-shell__sidebar">
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <strong style={{ color: "var(--purple-700)", fontSize: 22, fontFamily: "var(--font-display)", padding: "0 14px" }}>Sahari</strong>
              <SideNav value={nav} onValueChange={setNav} items={navItems} />
            </div>
            <AccountSwitcher variant="auto" accounts={accounts} activeAccountId={account} onSwitch={setAccount} onAddAccount={() => {}} onLogout={() => {}} />
          </aside>

          <main className="sh-shell__main" style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: .4, marginBottom: 6 }}>Hari ini</div>
              <Card style={{ display: "flex", flexDirection: "column" }}>
                {today.map((item, i) => (
                  <div key={item.id} style={{ borderBottom: i < today.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                    <NotificationRow item={item} />
                  </div>
                ))}
              </Card>
            </div>

            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: .4, marginBottom: 6 }}>Sebelumnya</div>
              <Card style={{ display: "flex", flexDirection: "column" }}>
                {earlier.map((item, i) => (
                  <div key={item.id} style={{ borderBottom: i < earlier.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                    <NotificationRow item={item} />
                  </div>
                ))}
              </Card>
            </div>
          </main>
        </div>
      </div>

      <BottomNav className="sh-shell__bottom-nav" value={nav} onValueChange={setNav} items={navItems} />
    </div>
  );
}

export const App: Story = { render: () => <NotificationsDemo /> };
