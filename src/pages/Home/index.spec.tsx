import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./";

describe("HomePage Component", () => {
  it("should render the HomePage component correctly", () => {
    render(<HomePage />);
    const element = screen.getByText("HomePage");
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
