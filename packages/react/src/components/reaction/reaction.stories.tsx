import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Reaction } from "./reaction";

const meta = { title: "Components/Reaction" } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function Demo() {
  const [active, setActive] = React.useState(false);
  const [count, setCount] = React.useState(24);
  return (
    <div style={{ display: "flex", gap: 18 }}>
      <Reaction
        aria-label="Dukung"
        icon={<span aria-hidden="true">♡</span>}
        activeIcon={<span aria-hidden="true">♥</span>}
        active={active}
        count={count}
        onClick={() => { setActive((v) => !v); setCount((c) => c + (active ? -1 : 1)); }}
      />
      <Reaction aria-label="Komentar" icon={<span aria-hidden="true">💬</span>} count={6} />
    </div>
  );
}

export const Toggle: Story = { render: () => <Demo /> };
