import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("requires an accessible label", () => {
    render(<IconButton aria-label="Notifikasi" icon={<span aria-hidden="true">N</span>} />);
    expect(screen.getByRole("button", { name: "Notifikasi" })).toHaveAttribute("data-variant", "surface");
  });
});
