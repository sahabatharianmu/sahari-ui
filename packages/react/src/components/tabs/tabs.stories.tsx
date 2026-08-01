import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./tabs";

const meta = { title: "Components/Tabs", component: Tabs } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    value: "foryou",
    items: [
      { value: "foryou", label: "Untukmu" },
      { value: "account", label: "Akun" },
      { value: "post", label: "Post" },
    ],
  },
};
