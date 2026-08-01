import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { EmptyState } from "./empty-state";

const meta = { title: "Components/EmptyState", component: EmptyState } satisfies Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

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

export const Empty: Story = {
  args: {
    icon: <FeedIcon />,
    title: "Belum ada cerita di sini",
    description: "Jadi yang pertama berbagi, atau coba topik lain untuk menemukan cerita dari komunitas.",
    action: <Button>Tulis cerita</Button>,
  },
};

export const ErrorState: Story = {
  name: "Error",
  args: {
    tone: "danger",
    icon: <WarningIcon />,
    title: "Gagal memuat feed",
    description: "Periksa koneksi internet kamu, lalu coba lagi.",
    action: <Button variant="outline">Coba lagi</Button>,
  },
};
