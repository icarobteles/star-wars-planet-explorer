import { describe, it, expect, vi } from "vitest";
import { ISwapiList, ISwapiPlanet } from "@/api/interfaces";
import { swapiInstance } from "@/api";
import { listPlanetsService } from "./ListPlanetsService";

vi.mock("@/api/instances/swapi", () => ({
  swapiInstance: {
    get: vi.fn(),
  },
}));

const planetOne: ISwapiPlanet = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/62/",
  ],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/",
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-20T20:58:18.411000Z",
  url: "https://swapi.dev/api/planets/1/",
};

describe("ListPlanetsService", () => {
  it("should return the correct search result for an existing planet name", async () => {
    vi.mocked(swapiInstance.get).mockResolvedValue({ data: { results: [planetOne] } });

    const response = await listPlanetsService({ search: planetOne.name });
    expect(response.error).toBe(false);
    expect((response.data as ISwapiList<ISwapiPlanet>).results).toEqual([planetOne]);
  });

  it("should return empty result for search for a non-existent planet", async () => {
    vi.mocked(swapiInstance.get).mockResolvedValue({ data: { results: [] } });

    const response = await listPlanetsService({ search: "non-existing" });
    expect(response.error).toBe(false);
    expect((response.data as ISwapiList<ISwapiPlanet>).results).toEqual([]);
  });
});
