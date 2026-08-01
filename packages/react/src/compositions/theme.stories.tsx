import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../components/badge/badge";
import { Button } from "../components/button/button";
import { Card } from "../components/card/card";
import { Input } from "../components/input/input";
import { PulseOrb } from "../components/pulse-orb/pulse-orb";

const meta = { title: "Foundations/Theme" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function Sample() {
  return (
    <Card style={{ width: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <PulseOrb size="sm" animated={false} />
        <div>
          <strong style={{ display: "block", color: "var(--text-primary)" }}>Sahari calm system</strong>
          <span style={{ color: "var(--text-secondary)", fontSize: 13 }}>Flat untuk baca, tactile untuk aksi.</span>
        </div>
      </div>
      <Input label="Email" placeholder="nama@email.com" />
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <Button>Mulai</Button>
        <Button variant="outline">Detail</Button>
        <Badge tone="brand">Terverifikasi</Badge>
      </div>
    </Card>
  );
}

export const Light: Story = { render: () => <Sample /> };

export const Dark: Story = {
  render: () => (
    <div data-theme="dark" style={{ minHeight: 420, padding: 32, background: "var(--bg-base)" }}>
      <Sample />
    </div>
  ),
};
