import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("is decorative and hidden from assistive tech", () => {
    const { container } = render(<Skeleton width={40} height={12} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
