import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from ".";

describe("Footer Component", () => {
  it("should render the footer component correctly", () => {
    render(<Footer />);
    const image = screen.getByAltText("Star Wars Logo");
    expect(image).toBeInTheDocument();
    expect(image.parentNode).toBeInTheDocument();
    expect(image.nodeName).toBe("IMG");
    expect(image.parentNode?.nodeName).toBe("FOOTER");
    expect(image.parentNode?.children).toHaveLength(3);
  });
});
