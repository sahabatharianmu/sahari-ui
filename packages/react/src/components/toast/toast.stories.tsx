import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, ToastViewport } from "./toast";

const meta = { title: "Components/Toast" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Tones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, width: 360 }}>
      <Toast tone="success" title="Pembayaran berhasil" description="Sesi kamu sudah masuk jadwal." />
      <Toast tone="info" title="Pengingat aktif" description="Kami ingatkan 1 jam sebelum sesi." />
      <Toast tone="warning" title="Lengkapi profil" description="Tambahkan nomor telepon agar psikolog mudah menghubungi kamu." />
    </div>
  ),
};

export const Viewport: Story = {
  render: () => (
    <div style={{ minHeight: 280 }}>
      <ToastViewport position="bottom-center">
        <Toast tone="success" title="Booking selesai" description="Kamu akan menerima pengingat sebelum sesi." />
      </ToastViewport>
    </div>
  ),
};
