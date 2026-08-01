import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AvatarGroup } from "./avatar-group";

describe("AvatarGroup", () => {
  it("caps visible avatars and shows an overflow count", () => {
    const people = [{ name: "Rani" }, { name: "Budi" }, { name: "Dewi" }, { name: "Amara" }, { name: "Anonim" }];
    render(<AvatarGroup people={people} max={3} />);

    expect(screen.getAllByText(/^[A-Z]{1,2}$/).length).toBe(3);
    expect(screen.getByText("+2")).toBeInTheDocument();
  });
});
