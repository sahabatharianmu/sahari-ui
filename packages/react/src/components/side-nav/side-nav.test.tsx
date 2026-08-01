import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SideNav } from "./side-nav";

describe("SideNav", () => {
  it("uses nav semantics and marks the active item", async () => {
    const onValueChange = vi.fn();
    render(<SideNav value="home" onValueChange={onValueChange} items={[{ value: "home", label: "Beranda" }, { value: "discover", label: "Temukan" }]} />);

    expect(screen.getByRole("navigation", { name: "Navigasi utama" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Beranda" })).toHaveAttribute("aria-current", "page");

    await userEvent.click(screen.getByRole("button", { name: "Temukan" }));
    expect(onValueChange).toHaveBeenCalledWith("discover");
  });
});
