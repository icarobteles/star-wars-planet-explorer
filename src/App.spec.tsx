import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("App Component", () => {
  it("should render the App component correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const element = screen.getByText("HomePage");
    screen.debug();
    expect(element).toBeInTheDocument();
  });
});
