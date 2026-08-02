import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AccountSwitcher } from "./account-switcher";

const accounts = [
  { id: "personal", name: "Rani Wulandari", role: "Akun pribadi" },
  { id: "pro", name: "Dr. Rani Wulandari", role: "Psikolog" },
];

describe("AccountSwitcher", () => {
  it("menu variant: opens and reports the switched account", async () => {
    const onSwitch = vi.fn();
    render(<AccountSwitcher accounts={accounts} activeAccountId="personal" onSwitch={onSwitch} onLogout={() => {}} />);

    const trigger = screen.getByRole("button", { name: /Rani Wulandari/ });
    await userEvent.click(trigger);

    expect(screen.getByRole("menu", { name: "Beralih akun" })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("menuitem", { name: /Dr\. Rani Wulandari/ }));
    expect(onSwitch).toHaveBeenCalledWith("pro");
  });

  it("sheet variant: opens a bottom sheet listing accounts", async () => {
    const onSwitch = vi.fn();
    render(<AccountSwitcher variant="sheet" accounts={accounts} activeAccountId="personal" onSwitch={onSwitch} />);

    await userEvent.click(screen.getByRole("button", { name: /Rani Wulandari/ }));
    expect(screen.getByRole("dialog", { name: "Akun kamu" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Dr\. Rani Wulandari/ }));
    expect(onSwitch).toHaveBeenCalledWith("pro");
  });
});
