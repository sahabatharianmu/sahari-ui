import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup } from "./avatar-group";

const meta = { title: "Components/AvatarGroup" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const people = [
  { name: "Rani Wulandari" },
  { name: "Budi Santoso" },
  { name: "Dewi Lestari" },
  { name: "Amara Putri" },
  { name: "Anonim" },
  { name: "Wisnu Prakoso" },
];

export const SupportedBy: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <AvatarGroup people={people} max={4} />
      <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Didukung oleh {people.length} orang</span>
    </div>
  ),
};
