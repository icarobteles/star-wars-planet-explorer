import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { PlanetLink } from ".";

describe("PlanetLink Component", () => {
  const planetData = {
    href: "/planets/1",
    name: "Earth",
  };

  it("should render correctly with the given data", () => {
    render(
      <MemoryRouter>
        <PlanetLink href={planetData.href} name={planetData.name} />
      </MemoryRouter>,
    );

    // Verifique se o nome do planeta está presente no componente
    expect(screen.getByText(planetData.name)).toBeInTheDocument();

    // Verifique se o link está presente e possui o atributo 'href' correto
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", planetData.href);

    // Verifique se o ícone está presente
    const iconElement = linkElement.lastChild;
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("aria-label", `${planetData.name} Icon`);
  });

  it("should have appropriate accessibility attributes", () => {
    render(
      <MemoryRouter>
        <PlanetLink href={planetData.href} name={planetData.name} />
      </MemoryRouter>,
    );

    // Verifique se o link possui o atributo 'aria-label' correto
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("aria-label", planetData.name);

    // Verifique se o ícone possui o atributo 'aria-label' correto
    const iconElement = linkElement.lastChild;
    expect(iconElement).toHaveAttribute("aria-label", `${planetData.name} Icon`);
  });
});
