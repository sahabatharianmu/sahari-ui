import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccountSwitcher, type Account } from "../components/account-switcher/account-switcher";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { BottomNav } from "../components/bottom-nav/bottom-nav";
import { BottomSheet } from "../components/bottom-sheet/bottom-sheet";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { IconButton } from "../components/icon-button/icon-button";
import { Input } from "../components/input/input";
import { Select } from "../components/select/select";
import { SideNav } from "../components/side-nav/side-nav";
import { Switch } from "../components/switch/switch";
import { Tag } from "../components/tag/tag";

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M7 12h10M10 18h4" />
    </svg>
  );
}

const meta = { title: "Compositions/Discover" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Psychologist = {
  id: number;
  name: string;
  spec: string;
  rating: number;
  sessions: number;
  price: string;
  online: boolean;
};

const psychologists: Psychologist[] = [
  { id: 1, name: "Dr. Amara Putri, M.Psi", spec: "Kecemasan", rating: 4.9, sessions: 320, price: "Rp150rb", online: true },
  { id: 2, name: "Dr. Wisnu Prakoso, Psikolog", spec: "Hubungan", rating: 4.8, sessions: 210, price: "Rp180rb", online: true },
  { id: 3, name: "Dr. Sinta Dewi, M.Psi", spec: "Stres kerja", rating: 5.0, sessions: 450, price: "Rp200rb", online: false },
];

const topics = ["Semua", "Kecemasan", "Hubungan", "Stres kerja"];

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

function DiscoverDemo() {
  const [spec, setSpec] = React.useState("Semua");
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [onlineOnly, setOnlineOnly] = React.useState(false);
  const [sort, setSort] = React.useState("rating");
  const [nav, setNav] = React.useState("discover");
  const [account, setAccount] = React.useState("personal");
  const filtered = (spec === "Semua" ? psychologists : psychologists.filter((p) => p.spec === spec)).filter((p) => !onlineOnly || p.online);

  return (
    <div className="sh-shell">
      <div className="sh-shell__mobile-header">
        <strong style={{ color: "var(--purple-700)", fontSize: 20, fontFamily: "var(--font-display)" }}>Sahari</strong>
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

          <main className="sh-shell__main" style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div style={{ display: "flex", gap: 8 }}>
              <Input placeholder="Cari psikolog atau topik" aria-label="Cari psikolog atau topik" style={{ flex: 1 }} />
              <IconButton aria-label="Filter" icon={<FilterIcon />} onClick={() => setFilterOpen(true)} />
            </div>

            <div className="sh-chip-row">
              {topics.map((t) => (
                <Tag key={t} selected={spec === t} onClick={() => setSpec(t)}>{t}</Tag>
              ))}
            </div>

            <div className="sh-stagger" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map((p) => (
                <Card key={p.id} interactive style={{ display: "flex", gap: 12 }}>
                  <Avatar name={p.name} size="lg" online={p.online} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: 14 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: "var(--text-secondary)", margin: "2px 0 8px" }}>{p.spec} · ★ {p.rating} · {p.sessions} sesi</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      <Badge tone="brand">Terverifikasi</Badge>
                      <Badge tone={p.online ? "success" : "neutral"}>{p.online ? "Online" : "Offline"}</Badge>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: "var(--purple-700)", fontSize: 14, alignSelf: "center", whiteSpace: "nowrap" }}>{p.price}</div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <BottomNav className="sh-shell__bottom-nav" value={nav} onValueChange={setNav} items={navItems} />

      <BottomSheet
        open={filterOpen}
        title="Filter pencarian"
        onOpenChange={setFilterOpen}
        actions={(
          <>
            <Button onClick={() => setFilterOpen(false)}>Terapkan</Button>
            <Button variant="ghost" onClick={() => { setOnlineOnly(false); setSort("rating"); }}>Reset filter</Button>
          </>
        )}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Select label="Urutkan" value={sort} onValueChange={setSort} options={[{ label: "Rating tertinggi", value: "rating" }, { label: "Sesi terbanyak", value: "sessions" }, { label: "Harga terendah", value: "price" }]} />
          <Switch label="Hanya yang online sekarang" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} />
        </div>
      </BottomSheet>
    </div>
  );
}

export const App: Story = { render: () => <DiscoverDemo /> };
