import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tag } from "./tag";

describe("Tag", () => {
  it("exposes selected state as pressed", () => {
    render(<Tag selected>Kecemasan</Tag>);
    expect(screen.getByRole("button", { name: "Kecemasan" })).toHaveAttribute("aria-pressed", "true");
  });
});
