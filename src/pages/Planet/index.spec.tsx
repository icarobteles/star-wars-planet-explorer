import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PlanetPage } from "./";

describe("PlanetPage Component", () => {
  it("should render the PlanetPage component correctly", () => {
    render(<PlanetPage />);
    const element = screen.getByText("PlanetPage");
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
