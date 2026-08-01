import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { Tabs } from "../components/tabs/tabs";

const meta = { title: "Compositions/Profile" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const stats: [string, string][] = [
  ["Sesi", "320"],
  ["Rating", "4.9"],
  ["Pengikut", "1.2rb"],
];

function ProfileDemo() {
  const [tab, setTab] = React.useState("cerita");

  return (
    <div style={{ width: 390, background: "var(--bg-base)", fontFamily: "var(--font-body)" }}>
      <div style={{ height: 96, borderRadius: "0 0 var(--radius-xl) var(--radius-xl)", background: "linear-gradient(145deg, var(--purple-400), var(--purple-600))" }} />

      <div style={{ padding: "0 18px 18px", marginTop: -40, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <span style={{ display: "inline-flex", padding: 4, background: "var(--bg-base)", borderRadius: "50%" }}>
            <Avatar name="Dr. Amara Putri" size="xl" online />
          </span>
          <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
            <Button variant="outline" size="sm">Pesan</Button>
            <Button size="sm">Ikuti</Button>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <strong style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)", fontSize: 20 }}>Dr. Amara Putri, M.Psi</strong>
            <Badge tone="brand">Terverifikasi</Badge>
          </div>
          <p style={{ margin: "6px 0 0", color: "var(--text-secondary)", fontSize: 14, lineHeight: "var(--lh-body)" }}>
            Psikolog klinis · Kecemasan &amp; stres kerja. Pendekatan hangat, berbasis CBT, mendengarkan tanpa menghakimi.
          </p>
        </div>

        <Card style={{ display: "flex", justifyContent: "space-around" }}>
          {stats.map(([label, value]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-primary)" }}>{value}</div>
              <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{label}</div>
            </div>
          ))}
        </Card>

        <Tabs
          value={tab}
          onValueChange={setTab}
          items={[
            { value: "cerita", label: "Cerita" },
            { value: "tentang", label: "Tentang" },
          ]}
        />

        {tab === "tentang" ? (
          <Card>
            <div style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 4 }}>Spesialisasi</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <Badge tone="neutral">Kecemasan</Badge>
              <Badge tone="neutral">Stres kerja</Badge>
              <Badge tone="neutral">CBT</Badge>
            </div>
          </Card>
        ) : (
          <Card>
            <p style={{ margin: 0, fontSize: 14, color: "var(--text-primary)", lineHeight: "var(--lh-body)" }}>
              Reminder: istirahat 5 menit tiap jam kerja itu perawatan diri, bukan kemalasan.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

export const PsychologistProfile: Story = { render: () => <ProfileDemo /> };
