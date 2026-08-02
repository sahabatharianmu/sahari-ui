import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Combobox } from "./combobox";

const options = [
  { label: "Kecemasan", value: "anxiety" },
  { label: "Hubungan", value: "relationship" },
  { label: "Stres kerja", value: "work-stress" },
];

describe("Combobox", () => {
  it("filters options as the user types and commits on select", async () => {
    const onValueChange = vi.fn();
    render(<Combobox label="Topik" options={options} onValueChange={onValueChange} />);

    const input = screen.getByRole("combobox", { name: "Topik" });
    await userEvent.click(input);
    expect(screen.getAllByRole("option")).toHaveLength(3);

    await userEvent.type(input, "stres");
    expect(screen.getAllByRole("option")).toHaveLength(1);

    await userEvent.click(screen.getByRole("option", { name: "Stres kerja" }));
    expect(onValueChange).toHaveBeenCalledWith("work-stress");
    expect(input).toHaveValue("Stres kerja");
  });

  it("navigates and commits with the keyboard", async () => {
    const onValueChange = vi.fn();
    render(<Combobox label="Topik" options={options} onValueChange={onValueChange} />);

    const input = screen.getByRole("combobox", { name: "Topik" });
    input.focus();
    await userEvent.keyboard("{ArrowDown}{Enter}");

    expect(onValueChange).toHaveBeenCalledWith("relationship");
  });

  it("shows an empty message when nothing matches", async () => {
    render(<Combobox label="Topik" options={options} />);
    const input = screen.getByRole("combobox", { name: "Topik" });
    await userEvent.type(input, "xyz");

    expect(screen.getByText("Tidak ditemukan")).toBeInTheDocument();
  });

  it("closes and reverts on Escape", async () => {
    render(<Combobox label="Topik" options={options} defaultValue="anxiety" />);
    const input = screen.getByRole("combobox", { name: "Topik" });
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "xyz");
    await userEvent.keyboard("{Escape}");

    expect(input).toHaveValue("Kecemasan");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
