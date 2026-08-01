import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./empty-state";

describe("EmptyState", () => {
  it("renders title, description, and hides decorative icon", () => {
    render(<EmptyState icon={<span>icon</span>} title="Belum ada cerita" description="Coba topik lain." />);

    expect(screen.getByText("Belum ada cerita")).toBeInTheDocument();
    expect(screen.getByText("Coba topik lain.")).toBeInTheDocument();
    expect(screen.getByText("icon").closest("[aria-hidden]")).toHaveAttribute("aria-hidden", "true");
  });
});
