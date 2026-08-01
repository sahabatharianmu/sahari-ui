import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../components/avatar/avatar";
import { Badge } from "../components/badge/badge";
import { BottomNav } from "../components/bottom-nav/bottom-nav";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { Input } from "../components/input/input";
import { Tag } from "../components/tag/tag";

const meta = { title: "Compositions/Sahari Mobile" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const DiscoveryCard: Story = {
  render: () => (
    <div style={{ width: 390, minHeight: 680, background: "var(--neu-surface)", padding: 18, display: "flex", flexDirection: "column", gap: 14, fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ color: "var(--text-tertiary)", fontSize: 13 }}>Temukan dukungan</div>
          <strong style={{ color: "var(--purple-700)", fontSize: 22 }}>Psikolog untuk kamu</strong>
        </div>
        <Avatar name="Dewi Lestari" size="md" online />
      </div>

      <Input placeholder="Cari psikolog atau topik" aria-label="Cari psikolog atau topik" />

      <div className="sh-chip-row">
        <Tag selected>Semua</Tag>
        <Tag>Kecemasan</Tag>
        <Tag>Stres kerja</Tag>
        <Tag>Hubungan</Tag>
      </div>

      <Card interactive>
        <div style={{ display: "flex", gap: 12 }}>
          <Avatar name="Dr. Amara Putri" size="lg" online />
          <div style={{ flex: 1 }}>
            <strong style={{ display: "block", color: "var(--text-primary)" }}>Dr. Amara Putri, M.Psi</strong>
            <div style={{ color: "var(--text-secondary)", fontSize: 13, margin: "2px 0 8px" }}>Kecemasan · 4.9 · 320 sesi</div>
            <div style={{ display: "flex", gap: 6 }}>
              <Badge tone="brand">Terverifikasi</Badge>
              <Badge tone="success">Online</Badge>
            </div>
          </div>
        </div>
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.55, fontSize: 14 }}>Pendekatan hangat, mendengarkan tanpa menghakimi, berbasis CBT.</p>
        <Button style={{ width: "100%" }}>Pilih jadwal</Button>
      </Card>

      <div style={{ marginTop: "auto", marginInline: -18, marginBottom: -18 }}>
        <BottomNav
          value="discover"
          items={[
            { value: "home", label: "Beranda" },
            { value: "discover", label: "Temukan" },
            { value: "messages", label: "Pesan" },
            { value: "profile", label: "Profil" },
          ]}
        />
      </div>
    </div>
  ),
};
