import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./spinner";

const meta = { title: "Components/Spinner", component: Spinner } satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, color: "var(--brand-primary)" }}>
      <Spinner size={14} />
      <Spinner size={20} />
      <Spinner size={28} />
    </div>
  ),
};

export const Standalone: Story = {
  args: { label: "Memuat cerita", size: 24 },
};
