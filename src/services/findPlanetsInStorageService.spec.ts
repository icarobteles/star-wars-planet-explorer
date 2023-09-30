import { InMemoryStorage } from "@/adapters";
import { STORAGE_ADDRESSES } from "@/constants";
import { IPlanet, IPlanetStorage, IStorage } from "@/interfaces";
import { beforeEach, describe, expect, it } from "vitest";
import { findPlanetsInStorage } from "./findPlanetsInStorageService";

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

describe("Find Planets In Storage by Search Name", () => {
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

  it("should find all stored planets whose names are included in the name searched", () => {
    storage.set(
      STORAGE_ADDRESSES.PLANETS,
      JSON.stringify([
        planetStorage,
        { ...planetStorage, data: { ...planetStorage.data, name: "Tatooine", id: "2" } },
        { ...planetStorage, data: { ...planetStorage.data, name: "Never", id: "3" } },
      ]),
    );

    const storagedPlanets = findPlanetsInStorage(planetExample.name, storage);
    expect(storagedPlanets).toHaveLength(2);
    expect(storagedPlanets[0].data.name).toContain(planetExample.name);
    expect(storagedPlanets[1].data.name).toContain(planetExample.name);
  });

  it("should return an empty result if it finds no stored planets", () => {
    const storagedPlanets = findPlanetsInStorage(planetExample.name, storage);
    expect(storagedPlanets).toHaveLength(0);
  });
});
