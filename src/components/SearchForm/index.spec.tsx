import { render, fireEvent, screen, act } from "@testing-library/react";
import { SearchForm } from ".";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("SearchForm Component", () => {
  const mockSearch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render correctly with the initial state", () => {
    render(<SearchForm loading={false} search={mockSearch} />);

    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();

    const inputElement = screen.getByRole("search");
    const buttonElement = screen.getByRole("button");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should submit the form correctly", async () => {
    render(<SearchForm loading={false} search={mockSearch} />);

    const inputElement = screen.getByRole("search");
    fireEvent.change(inputElement, { target: { value: "Test Search" } });

    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);

    await act(async () => {
      expect(mockSearch).toHaveBeenCalledWith("Test Search");
    });
  });

  it("should handle validation errors correctly", async () => {
    render(<SearchForm loading={false} search={mockSearch} />);

    const inputElement = screen.getByRole("search");
    fireEvent.change(inputElement, { target: { value: "  " } });

    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);

    expect(mockSearch).not.toHaveBeenCalled();

    const errorElement = screen.getByText("The search cannot be empty");
    expect(errorElement).toBeInTheDocument();
  });
});
