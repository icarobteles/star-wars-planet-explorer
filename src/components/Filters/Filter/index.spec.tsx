import { describe, expect, it, vi } from "vitest";
import { Filter } from ".";
import { fireEvent, render } from "@testing-library/react";

describe("Filter Component", () => {
  it("should render the component correctly", () => {
    const { getByText, getByTitle } = render(
      <Filter fieldname="Name" order="asc" setOrder={() => {}} />,
    );

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByTitle("Filter by Name")).toBeInTheDocument();
  });

  it("should call the setOrder function when clicked", () => {
    const mockSetOrder = vi.fn();
    const { getByText } = render(
      <Filter fieldname="Population" order="desc" setOrder={mockSetOrder} />,
    );

    fireEvent.click(getByText("Population"));

    expect(mockSetOrder).toHaveBeenCalled();
  });
});
