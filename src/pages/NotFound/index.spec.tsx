import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NotFoundPage } from ".";

describe("NotFoundPage Component", () => {
  it("should render the NotFoundPage component correctly", () => {
    render(<NotFoundPage />);
    const element = screen.getByText("NotFoundPage");
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
