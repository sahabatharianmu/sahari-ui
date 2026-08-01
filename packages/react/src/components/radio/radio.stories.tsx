import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./radio";

const meta = { title: "Components/Radio", component: Radio } satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { label: "Video call", name: "format", defaultChecked: true },
};
