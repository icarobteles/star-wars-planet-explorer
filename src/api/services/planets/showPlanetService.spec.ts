import { describe, it, expect, vi } from "vitest";
import { showPlanetService } from "./showPlanetService";
import { ISwapiPlanet } from "@/api/interfaces";
import { swapiInstance } from "@/api";

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

describe("ShowPlanetService", () => {
  it("should return data from an existing film", async () => {
    vi.mocked(swapiInstance.get).mockResolvedValue({ data: planetOne });
    const response = await showPlanetService({ id: "1" });
    expect(response.error).toBe(false);
    expect(response.data).toEqual(planetOne);
  });

  it("should return an error object for a non-existing film", async () => {
    vi.mocked(swapiInstance.get).mockRejectedValue({});
    const response = await showPlanetService({ id: "non-existing" });
    expect(response.error).toBe(true);
    expect(response.data).toEqual({ message: "Planet not found" });
  });
});
