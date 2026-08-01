import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge";
import { Tag } from "../tag/tag";

const meta = { title: "Components/Badges & Tags", component: Badge } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { tone: "brand", children: "Terverifikasi" },
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 18 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge>Netral</Badge>
        <Badge tone="brand">Terverifikasi</Badge>
        <Badge tone="success">Online</Badge>
        <Badge tone="warning">Menunggu</Badge>
        <Badge tone="danger">Butuh tinjauan</Badge>
        <Badge tone="info">Info</Badge>
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Tag selected>Semua</Tag>
        <Tag>Kecemasan</Tag>
        <Tag>Stres kerja</Tag>
        <Tag>Hubungan</Tag>
      </div>
    </div>
  ),
};
