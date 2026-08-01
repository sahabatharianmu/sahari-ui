import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./tabs";

describe("Tabs", () => {
  it("uses tab semantics and activates with keyboard", async () => {
    const onValueChange = vi.fn();
    render(<Tabs value="feed" onValueChange={onValueChange} items={[{ value: "feed", label: "Feed" }, { value: "accounts", label: "Akun" }]} />);

    const feed = screen.getByRole("tab", { name: "Feed" });
    expect(feed).toHaveAttribute("aria-selected", "true");

    feed.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onValueChange).toHaveBeenCalledWith("accounts");
    expect(screen.getByRole("tab", { name: "Akun" })).toHaveFocus();
  });
});
