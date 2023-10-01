import { describe, expect, it, vi } from "vitest";
import { Filters } from ".";
import { fireEvent, render } from "@testing-library/react";

describe("Filters Component", () => {
  describe("Rendering", () => {
    it("should render the component correctly", () => {
      const { getByText } = render(<Filters sortByName={() => {}} sortByPopulation={() => {}} />);

      expect(getByText("Filter:")).toBeInTheDocument();
      expect(getByText("Name")).toBeInTheDocument();
      expect(getByText("Population")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("should call sortByName when 'Name' is clicked", () => {
      const mockSortByName = vi.fn();
      const { getByText } = render(
        <Filters sortByName={mockSortByName} sortByPopulation={() => {}} />,
      );

      fireEvent.click(getByText("Name"));
      expect(mockSortByName).toHaveBeenCalled();
    });

    it("should call sort By Population when 'Population' is clicked", () => {
      const mockSortByPopulation = vi.fn();
      const { getByText } = render(
        <Filters sortByName={() => {}} sortByPopulation={mockSortByPopulation} />,
      );

      fireEvent.click(getByText("Population"));
      expect(mockSortByPopulation).toHaveBeenCalled();
    });
  });

  describe("Integration with Filter Component", () => {
    it("should toggle 'Name' ordering correctly", () => {
      const { getByText } = render(<Filters sortByName={() => {}} sortByPopulation={() => {}} />);

      // Verifique a ordenação inicial
      const filterNameButton = getByText("Name");
      const filterNameIcon = filterNameButton.childNodes[0];
      expect(filterNameIcon).not.toHaveStyleRule("transform", "rotate(180deg)");

      // Simule um clique em "Name" e verifique a nova ordenação
      fireEvent.click(filterNameButton);
      expect(filterNameIcon).toHaveStyleRule("transform", "rotate(180deg)");

      // Simule outro clique em "Name" e verifique a ordenação reversa
      fireEvent.click(filterNameButton);
      expect(filterNameIcon).not.toHaveStyleRule("transform", "rotate(180deg)");
    });

    it("should toggle 'Population' ordering correctly", () => {
      const { getByText } = render(<Filters sortByName={() => {}} sortByPopulation={() => {}} />);

      // Verifique a ordenação inicial
      const filterPopulationButton = getByText("Population");
      const filterPopulationIcon = filterPopulationButton.childNodes[0];
      expect(filterPopulationIcon).not.toHaveStyleRule("transform", "rotate(180deg)");

      // Simule um clique em "Population" e verifique a nova ordenação
      fireEvent.click(filterPopulationButton);
      expect(filterPopulationIcon).toHaveStyleRule("transform", "rotate(180deg)");

      // Simule outro clique em "Population" e verifique a ordenação reversa
      fireEvent.click(filterPopulationButton);
      expect(filterPopulationIcon).not.toHaveStyleRule("transform", "rotate(180deg)");
    });
  });
});
