import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = { title: "Components/Button", component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button>Mulai</Button>
      <Button variant="secondary">Nanti dulu</Button>
      <Button variant="outline">Lihat detail</Button>
      <Button variant="ghost">Kembali</Button>
      <Button variant="danger">Hapus</Button>
      <Button disabled>Memproses</Button>
      <Button loading>Menyimpan</Button>
    </div>
  ),
};
