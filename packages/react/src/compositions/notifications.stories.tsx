import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Card } from "../components/card/card";

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

function NotificationsDemo() {
  return (
    <div style={{ width: 390, display: "flex", flexDirection: "column", gap: 16, background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
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
    </div>
  );
}

export const List: Story = { render: () => <NotificationsDemo /> };
