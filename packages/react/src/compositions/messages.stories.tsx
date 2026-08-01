import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { Card } from "../components/card/card";
import { IconButton } from "../components/icon-button/icon-button";
import { Input } from "../components/input/input";

const meta = { title: "Compositions/Messages" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Conversation = {
  id: number;
  name: string;
  online: boolean;
  preview: string;
  time: string;
  unread: number;
};

const conversations: Conversation[] = [
  { id: 1, name: "Dr. Amara Putri", online: true, preview: "Sampai jumpa besok jam 10 ya, jangan lupa isi jurnal harian.", time: "2m", unread: 2 },
  { id: 2, name: "Rani Wulandari", online: false, preview: "Makasih banyak sudah dengerin cerita aku kemarin.", time: "1j", unread: 0 },
  { id: 3, name: "Anonim", online: false, preview: "Boleh tanya-tanya soal terapi CBT nggak?", time: "Kemarin", unread: 0 },
];

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12 20 4l-6 16-3-7-7-3Z" />
    </svg>
  );
}

function ConversationsDemo() {
  return (
    <div style={{ width: 390, display: "flex", flexDirection: "column", gap: 12, background: "var(--bg-base)", padding: 18, fontFamily: "var(--font-body)" }}>
      <Input placeholder="Cari percakapan" aria-label="Cari percakapan" />
      <div className="sh-stagger" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {conversations.map((c) => (
          <Card key={c.id} interactive style={{ display: "flex", gap: 10, alignItems: "center", padding: 14 }}>
            <Avatar name={c.name} size="md" online={c.online} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <strong style={{ fontSize: 14, color: "var(--text-primary)" }}>{c.name}</strong>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)", flexShrink: 0 }}>{c.time}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginTop: 2 }}>
                <span style={{ fontSize: 13, color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.preview}</span>
                {c.unread ? <Badge tone="brand">{c.unread}</Badge> : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

type Bubble = { id: number; mine: boolean; text: string; time: string };

const bubbles: Bubble[] = [
  { id: 1, mine: false, text: "Halo, gimana kabar minggu ini?", time: "09:58" },
  { id: 2, mine: true, text: "Lumayan lebih tenang, journaling malam mulai kebentuk jadi rutinitas.", time: "10:01" },
  { id: 3, mine: false, text: "Bagus sekali. Sampai jumpa besok jam 10 ya.", time: "10:02" },
];

function ChatThreadDemo() {
  return (
    <div style={{ width: 390, height: 600, display: "flex", flexDirection: "column", background: "var(--bg-base)", fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 16, background: "var(--bg-surface)", borderBottom: "1px solid var(--border-subtle)" }}>
        <Avatar name="Dr. Amara Putri" size="sm" online />
        <div style={{ flex: 1 }}>
          <strong style={{ fontSize: 14, color: "var(--text-primary)" }}>Dr. Amara Putri</strong>
          <div style={{ fontSize: 12, color: "var(--state-success-fg)" }}>Online</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, padding: 16, overflowY: "auto" }}>
        {bubbles.map((b) => (
          <div key={b.id} style={{ display: "flex", flexDirection: "column", alignItems: b.mine ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "78%",
                padding: "10px 14px",
                borderRadius: b.mine ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                background: b.mine ? "linear-gradient(145deg, var(--purple-400), var(--purple-600))" : "var(--bg-surface)",
                color: b.mine ? "#fff" : "var(--text-primary)",
                boxShadow: b.mine ? "var(--shadow-neu-brand)" : "var(--shadow-card)",
                fontSize: 14,
                lineHeight: "var(--lh-body)",
              }}
            >
              {b.text}
            </div>
            <span style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 4 }}>{b.time}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, padding: 12, background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)" }}>
        <Input placeholder="Tulis pesan..." aria-label="Tulis pesan" style={{ flex: 1 }} />
        <IconButton aria-label="Kirim pesan" variant="solid" icon={<SendIcon />} />
      </div>
    </div>
  );
}

export const ConversationList: Story = { render: () => <ConversationsDemo /> };
export const ChatThread: Story = { render: () => <ChatThreadDemo /> };
