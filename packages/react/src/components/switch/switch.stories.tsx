import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./switch";

const meta = { title: "Components/Switch", component: Switch } satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: "Notifikasi push", defaultChecked: true },
};
