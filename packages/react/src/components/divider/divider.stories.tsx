import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./divider";

const meta = { title: "Components/Divider", component: Divider } satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 12 }}>
      <span>Cerita</span>
      <Divider />
      <span>Komentar</span>
    </div>
  ),
};
