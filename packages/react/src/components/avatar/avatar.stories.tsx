import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./avatar";

const meta = { title: "Components/Avatar", component: Avatar } satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { name: "Rani Wulandari", size: "md", online: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
      <Avatar name="Rani Wulandari" size="sm" online />
      <Avatar name="Dewi Lestari" size="md" online />
      <Avatar name="Amara Putri" size="lg" />
      <Avatar name="Anonim" size="xl" online={false} />
    </div>
  ),
};

export const NameToneVariety: Story = {
  name: "Per-person color",
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      {["Rani Wulandari", "Budi Santoso", "Anonim", "Dewi Lestari", "Amara Putri"].map((name) => (
        <Avatar key={name} name={name} size="md" />
      ))}
    </div>
  ),
};
