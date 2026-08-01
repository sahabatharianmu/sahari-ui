import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../card/card";
import { Skeleton } from "./skeleton";

const meta = { title: "Components/Skeleton", component: Skeleton } satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { width: 240, height: 16 },
};

export const PostLoading: Story = {
  render: () => (
    <Card style={{ width: 340, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Skeleton width={36} height={36} style={{ borderRadius: "50%" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <Skeleton width="50%" height={12} />
          <Skeleton width="30%" height={10} />
        </div>
      </div>
      <Skeleton height={12} />
      <Skeleton height={12} width="80%" />
    </Card>
  ),
};
