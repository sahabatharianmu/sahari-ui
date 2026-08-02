import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccountSwitcher, type Account } from "../components/account-switcher/account-switcher";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { EmptyState } from "../components/empty-state/empty-state";
import { BottomNav } from "../components/bottom-nav/bottom-nav";
import { IconButton } from "../components/icon-button/icon-button";
import { Menu } from "../components/menu/menu";
import { Reaction } from "../components/reaction/reaction";
import { SideNav } from "../components/side-nav/side-nav";
import { Skeleton } from "../components/skeleton/skeleton";
import { Textarea } from "../components/textarea/textarea";

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 1 1-3.4-6.5L21 4l-1 3.6A7.96 7.96 0 0 1 21 12Z" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  );
}

function FeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16M4 12h16M4 19h10" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4M12 17h.01M10.3 3.9 2.7 17a1.6 1.6 0 0 0 1.4 2.4h15.8a1.6 1.6 0 0 0 1.4-2.4L13.7 3.9a1.6 1.6 0 0 0-2.8 0Z" />
    </svg>
  );
}

function PostSkeleton() {
  return (
    <Card style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Skeleton width={32} height={32} style={{ borderRadius: "50%" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <Skeleton width="40%" height={12} />
          <Skeleton width="25%" height={10} />
        </div>
      </div>
      <Skeleton height={12} />
      <Skeleton height={12} width="70%" />
    </Card>
  );
}

const meta = { title: "Compositions/Feed" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Post = {
  id: number;
  name: string;
  anon: boolean;
  time: string;
  tag: string;
  text: string;
  likes: number;
};

const accounts: Account[] = [
  { id: "personal", name: "Kamu", role: "Akun pribadi" },
  { id: "pro", name: "Dr. Kamu", role: "Psikolog" },
];

const posts: Post[] = [
  { id: 1, name: "Rani Wulandari", anon: false, time: "2j", tag: "Kecemasan", text: "Hari ini aku coba journaling sebelum tidur, ternyata bikin pikiran lebih tenang. Ada yang punya rutinitas malam serupa?", likes: 24 },
  { id: 2, name: "Anonim", anon: true, time: "5j", tag: "Hubungan", text: "Lagi belajar bilang \u201Ctidak apa-apa untuk tidak baik-baik saja\u201D. Pelan-pelan, tapi progres tetap progres.", likes: 41 },
  { id: 3, name: "Budi Santoso", anon: false, time: "1h", tag: "Stres kerja", text: "Psikolog aku bilang istirahat 5 menit tiap jam itu bukan kemalasan, itu perawatan diri.", likes: 58 },
];

function FeedList() {
  const [liked, setLiked] = React.useState<Record<number, boolean>>({});

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, fontFamily: "var(--font-body)" }}>
      <Card style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <Avatar name="Kamu" size="md" />
        <Textarea placeholder="Bagikan perasaanmu hari ini, dengan aman..." rows={2} style={{ flex: 1 }} />
      </Card>

      <div className="sh-stagger" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {posts.map((post) => (
        <Card key={post.id} interactive>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
            <Avatar name={post.anon ? "Anonim" : post.name} size="sm" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-primary)" }}>{post.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-tertiary)" }}>
                {post.time}
                <Badge tone="brand">{post.tag}</Badge>
              </div>
            </div>
            <Menu
              label="Opsi cerita"
              align="end"
              trigger={<IconButton aria-label="Opsi lainnya" variant="ghost" size="sm" icon={<MoreIcon />} />}
              items={[
                { label: "Simpan cerita", onSelect: () => {} },
                { label: "Bagikan", onSelect: () => {} },
                { label: "Laporkan", tone: "danger", onSelect: () => {} },
              ]}
            />
          </div>

          <p style={{ margin: "0 0 12px", fontSize: 14, color: "var(--text-primary)", lineHeight: "var(--lh-body)" }}>{post.text}</p>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Reaction
              aria-label={liked[post.id] ? "Batalkan dukungan" : "Beri dukungan"}
              icon={<span aria-hidden="true">♡</span>}
              activeIcon={<span aria-hidden="true">♥</span>}
              active={!!liked[post.id]}
              count={post.likes + (liked[post.id] ? 1 : 0)}
              onClick={() => setLiked((l) => ({ ...l, [post.id]: !l[post.id] }))}
            />
            <Reaction aria-label="Lihat komentar" icon={<ChatIcon />} count={6} />
            <Button variant="ghost" size="sm" style={{ marginLeft: "auto" }}>Kirim dukungan</Button>
          </div>
        </Card>
      ))}
      </div>
    </div>
  );
}

const navItems = [
  { value: "home", label: "Beranda" },
  { value: "discover", label: "Temukan" },
  { value: "messages", label: "Pesan" },
  { value: "profile", label: "Profil" },
];

function SuggestionsRail() {
  return (
    <Card>
      <strong style={{ display: "block", marginBottom: 12, color: "var(--text-primary)", fontSize: 14 }}>Psikolog untuk kamu</strong>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[{ name: "Dr. Amara Putri", spec: "Kecemasan" }, { name: "Dr. Sinta Dewi", spec: "Stres kerja" }].map((p) => (
          <div key={p.name} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Avatar name={p.name} size="sm" online />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{p.spec}</div>
            </div>
            <Button variant="outline" size="sm">Lihat</Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

/**
 * One responsive shell: bottom nav + single column under 768px, sidebar (+ rail
 * from 1024px) above it. Toggle the Storybook viewport toolbar to see it adapt
 * live — no separate mobile/desktop stories.
 */
export const App: Story = {
  render: () => {
    const [nav, setNav] = React.useState("home");
    const [account, setAccount] = React.useState("personal");

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

            <main className="sh-shell__main">
              <FeedList />
            </main>

            <aside className="sh-shell__rail">
              <SuggestionsRail />
            </aside>
          </div>
        </div>

        <BottomNav className="sh-shell__bottom-nav" value={nav} onValueChange={setNav} items={navItems} />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => (
    <div style={{ width: 390, display: "flex", flexDirection: "column", gap: 14, background: "var(--bg-base)", padding: 18 }}>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: 390, background: "var(--bg-base)", padding: 18 }}>
      <EmptyState
        icon={<FeedIcon />}
        title="Belum ada cerita di sini"
        description="Jadi yang pertama berbagi, atau coba topik lain untuk menemukan cerita dari komunitas."
        action={<Button>Tulis cerita</Button>}
      />
    </div>
  ),
};

export const ErrorState: Story = {
  name: "Error",
  render: () => (
    <div style={{ width: 390, background: "var(--bg-base)", padding: 18 }}>
      <EmptyState
        tone="danger"
        icon={<WarningIcon />}
        title="Gagal memuat feed"
        description="Periksa koneksi internet kamu, lalu coba lagi."
        action={<Button variant="outline">Coba lagi</Button>}
      />
    </div>
  ),
};
