import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BottomNav } from "./bottom-nav";

describe("BottomNav", () => {
  it("uses nav semantics and native buttons", async () => {
    const onValueChange = vi.fn();
    render(<BottomNav value="home" onValueChange={onValueChange} items={[{ value: "home", label: "Beranda" }, { value: "profile", label: "Profil" }]} />);

    expect(screen.getByRole("navigation", { name: "Navigasi utama" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Beranda" })).toHaveAttribute("aria-current", "page");

    const profile = screen.getByRole("button", { name: "Profil" });
    await userEvent.click(profile);
    expect(onValueChange).toHaveBeenCalledWith("profile");
  });
});
