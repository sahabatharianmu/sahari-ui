import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { IconButton } from "../icon-button/icon-button";
import { Menu } from "./menu";

describe("Menu", () => {
  it("opens on trigger click and reports the chosen item", async () => {
    const onSelect = vi.fn();
    render(
      <Menu
        label="Opsi"
        trigger={<IconButton aria-label="Opsi lainnya" icon={<span>...</span>} />}
        items={[{ label: "Simpan", onSelect: () => {} }, { label: "Laporkan", tone: "danger", onSelect }]}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Opsi lainnya" });
    await userEvent.click(trigger);
    expect(screen.getByRole("menu", { name: "Opsi" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("menuitem", { name: "Laporkan" }));
    expect(onSelect).toHaveBeenCalledOnce();
    expect(trigger).toHaveFocus();
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    render(
      <Menu
        trigger={<IconButton aria-label="Opsi lainnya" icon={<span>...</span>} />}
        items={[{ label: "Simpan", onSelect: () => {} }]}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Opsi lainnya" });
    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
