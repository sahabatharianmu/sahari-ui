import type { Meta, StoryObj } from "@storybook/react-vite";
import { SideNav } from "./side-nav";

const meta = { title: "Components/SideNav", component: SideNav } satisfies Meta<typeof SideNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    value: "home",
    items: [
      { value: "home", label: "Beranda" },
      { value: "discover", label: "Temukan" },
      { value: "messages", label: "Pesan" },
      { value: "profile", label: "Profil" },
    ],
  },
  render: (args) => <div style={{ width: 220 }}><SideNav {...args} /></div>,
};
