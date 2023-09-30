import { ISwapiPlanet, showPlanetService } from "@/api";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { IPlanet, IPlanetStorage, IStorage } from "@/interfaces";
import { InMemoryStorage } from "@/adapters";
import { STORAGE_ADDRESSES } from "@/constants";
import { fetchPlanetDataService } from "./fetchPlanetDataService";

vi.mock("@/api", () => ({
  showPlanetService: vi.fn(),
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

const planetExample: IPlanet = {
  id: "1",
  name: "Tat",
  climate: "arid",
  terrain: "desert",
  imageUrl: null,
  population: 200000,
  residents: [],
  films: [],
};

const planetExampleResidents = [
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
];

const planetExampleFilms = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/3/",
  "https://swapi.dev/api/films/4/",
  "https://swapi.dev/api/films/5/",
  "https://swapi.dev/api/films/6/",
];

describe("Fetch Planet Additional Data Service", () => {
  let storage: IStorage;
  let planetStorage: IPlanetStorage;
  let now: Date;

  beforeEach(() => {
    now = new Date();
    storage = new InMemoryStorage();
    storage.clear();
    planetStorage = {
      data: planetExample,
      urls: {
        films: planetExampleFilms,
        residents: planetExampleResidents,
      },
      storedAt: now,
      updatedAt: now,
    };
  });

  it("should return the names of the films and residents correctly", async () => {
    storage.set(
      STORAGE_ADDRESSES.PLANETS,
      JSON.stringify([
        planetStorage,
        { ...planetStorage, data: { ...planetStorage.data, name: "Tatooine", id: "2" } },
        { ...planetStorage, data: { ...planetStorage.data, name: "Never", id: "3" } },
      ]),
    );

    vi.mocked(showPlanetService).mockResolvedValue({ error: false, data: planetOne });

    const urlParts = planetOne.url.split("/");
    const planetOneId = urlParts[urlParts.length - 2];

    const data = await fetchPlanetDataService(planetOneId, storage);
    expect(data.data.id).toBe(planetOneId);
  });
});
