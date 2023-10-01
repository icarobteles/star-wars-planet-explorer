import { render, screen } from "@testing-library/react";
import { SearchButton } from ".";
import { describe, expect, it } from "vitest";

describe("SearchButton Component", () => {
  it("should render correctly with the given attributes", () => {
    const loading = false;
    render(<SearchButton loading={loading} />);

    // Verifique se o botão está presente
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("data-loading", loading.toString());
    expect(buttonElement).toHaveAttribute("aria-label", "Search");

    const iconElement = screen.getByRole("img");
    expect(iconElement).toBeInTheDocument();
  });

  it("should render the button as disabled when loading is true", () => {
    const loading = true;
    render(<SearchButton loading={loading} />);

    const buttonElement = screen.getByRole("button", { name: "Search" });
    expect(buttonElement).toHaveAttribute("data-loading", loading.toString());
    expect(buttonElement).toBeDisabled();
  });
});
