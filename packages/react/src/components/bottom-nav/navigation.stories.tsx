import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNav } from "./bottom-nav";
import { Tabs } from "../tabs/tabs";
import { IconButton } from "../icon-button/icon-button";

const meta = { title: "Components/Navigation" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const MobileNavigation: Story = {
  render: () => {
    const [nav, setNav] = React.useState("home");
    const [tab, setTab] = React.useState("foryou");
    return (
      <div style={{ display: "grid", gap: 24, width: 390 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <strong style={{ color: "var(--purple-700)", fontSize: 20 }}>Sahari</strong>
          <IconButton aria-label="Notifikasi" icon={<span aria-hidden="true">N</span>} />
        </div>
        <Tabs
          value={tab}
          onValueChange={setTab}
          items={[
            { value: "foryou", label: "Untukmu" },
            { value: "account", label: "Akun" },
            { value: "post", label: "Post" },
          ]}
        />
        <BottomNav
          value={nav}
          onValueChange={setNav}
          items={[
            { value: "home", label: "Beranda" },
            { value: "discover", label: "Temukan" },
            { value: "messages", label: "Pesan" },
            { value: "profile", label: "Profil" },
          ]}
        />
      </div>
    );
  },
};
