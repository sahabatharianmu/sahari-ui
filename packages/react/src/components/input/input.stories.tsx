import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { Textarea } from "../textarea/textarea";
import { Select } from "../select/select";

const meta = { title: "Components/Fields", component: Input } satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: "Email", placeholder: "nama@email.com", hint: "Kami kirim pengingat sesi ke email ini." },
};

export const Fields: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 360 }}>
      <Input label="Email" placeholder="nama@email.com" hint="Kami kirim pengingat sesi ke email ini." />
      <Input label="Password" type="password" error="Password minimal 8 karakter." />
      <Input label="Nomor telepon" placeholder="Belum diisi" disabled />
      <Select label="Topik" placeholder="Pilih topik" options={[{ label: "Kecemasan", value: "anxiety" }, { label: "Stres kerja", value: "work-stress" }]} />
      <Select label="Metode" defaultValue="video" disabled options={[{ label: "Video call", value: "video" }]} />
      <Textarea label="Catatan" placeholder="Ceritakan singkat yang ingin kamu bahas." />
    </div>
  ),
};
