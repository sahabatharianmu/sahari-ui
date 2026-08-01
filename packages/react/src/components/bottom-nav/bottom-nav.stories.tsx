import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNav } from "./bottom-nav";

const meta = { title: "Components/BottomNav", component: BottomNav } satisfies Meta<typeof BottomNav>;
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
};
