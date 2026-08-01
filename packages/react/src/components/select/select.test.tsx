import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./select";

const options = [
  { label: "Kecemasan", value: "anxiety" },
  { label: "Hubungan", value: "relationship" },
];

describe("Select", () => {
  it("opens a listbox and reports the chosen value", async () => {
    const onValueChange = vi.fn();
    render(<Select label="Topik" placeholder="Pilih topik" options={options} onValueChange={onValueChange} />);

    const trigger = screen.getByRole("button", { name: "Topik" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(screen.getByRole("option", { name: "Hubungan" }));
    expect(onValueChange).toHaveBeenCalledWith("relationship");
    expect(trigger).toHaveTextContent("Hubungan");
    expect(trigger).toHaveFocus();
  });

  it("navigates and selects with the keyboard", async () => {
    const onValueChange = vi.fn();
    render(<Select label="Topik" placeholder="Pilih topik" options={options} onValueChange={onValueChange} />);

    const trigger = screen.getByRole("button", { name: "Topik" });
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowDown}{Enter}");

    expect(onValueChange).toHaveBeenCalledWith("relationship");
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    render(<Select label="Topik" placeholder="Pilih topik" options={options} />);
    const trigger = screen.getByRole("button", { name: "Topik" });

    await userEvent.click(trigger);
    await userEvent.keyboard("{Escape}");

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveFocus();
  });
});
