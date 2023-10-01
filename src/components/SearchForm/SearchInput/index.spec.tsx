import { render, screen } from "@testing-library/react";
import { SearchInput } from ".";
import { describe, expect, it } from "vitest";

describe("SearchInput Component", () => {
  it("should render correctly with the given attributes", () => {
    render(<SearchInput />);

    const inputElement = screen.getByPlaceholderText("Enter the name in the planet");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeRequired();
    expect(inputElement).toHaveAttribute("aria-required", "true");
  });

  it("should use a descriptive label", () => {
    render(<SearchInput />);

    const labelElement = screen.getByText("Enter the name in the planet");
    expect(labelElement).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Enter the name in the planet");
    expect(inputElement).toHaveAttribute("id", labelElement.getAttribute("for"));
  });
});
