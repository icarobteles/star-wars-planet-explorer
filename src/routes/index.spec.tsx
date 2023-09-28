import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from ".";

describe("AppRoute", () => {
  it("should render a HomePage when trying to access the '/' route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    const page = screen.getByText("HomePage");
    expect(page).toBeInTheDocument();
  });

  it("should render a PlanetPage when trying to access the '/planets/:id' route", () => {
    render(
      <MemoryRouter initialEntries={["/planets/1"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    const page = screen.getByText("PlanetPage");
    expect(page).toBeInTheDocument();
  });

  it("should render NotFoundPage when trying to access a non-existent route", () => {
    render(
      <MemoryRouter initialEntries={["/nonexistent"]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    const page = screen.getByText("NotFoundPage");
    expect(page).toBeInTheDocument();
  });
});
