import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./avatar";

describe("Avatar", () => {
  it("derives a stable tone from the name", () => {
    const { container: a } = render(<Avatar name="Dewi Lestari" />);
    const { container: b } = render(<Avatar name="Dewi Lestari" />);
    expect(a.querySelector(".sh-avatar__fallback")?.getAttribute("data-tone")).toBe(
      b.querySelector(".sh-avatar__fallback")?.getAttribute("data-tone"),
    );
  });

  it("renders initials and online status", () => {
    render(<Avatar name="Rani Wulandari" online />);
    expect(screen.getByText("RW")).toBeInTheDocument();
    expect(screen.getByLabelText("Online")).toBeInTheDocument();
  });
});
