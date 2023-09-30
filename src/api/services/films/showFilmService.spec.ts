import { describe, it, expect, vi } from "vitest";
import { showFilmService } from "./showFilmService";
import { ISwapiFilm } from "@/api/interfaces";
import { swapiInstance } from "@/api";

vi.mock("@/api/instances/swapi", () => ({
  swapiInstance: {
    get: vi.fn(),
  },
}));

const filmOne: ISwapiFilm = {
  title: "A New Hope",
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  director: "George Lucas",
  producer: "Gary Kurtz, Rick McCallum",
  release_date: "1977-05-25",
  characters: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/5/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/10/",
    "https://swapi.dev/api/people/12/",
    "https://swapi.dev/api/people/13/",
    "https://swapi.dev/api/people/14/",
    "https://swapi.dev/api/people/15/",
    "https://swapi.dev/api/people/16/",
    "https://swapi.dev/api/people/18/",
    "https://swapi.dev/api/people/19/",
    "https://swapi.dev/api/people/81/",
  ],
  planets: [
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/planets/2/",
    "https://swapi.dev/api/planets/3/",
  ],
  starships: [
    "https://swapi.dev/api/starships/2/",
    "https://swapi.dev/api/starships/3/",
    "https://swapi.dev/api/starships/5/",
    "https://swapi.dev/api/starships/9/",
    "https://swapi.dev/api/starships/10/",
    "https://swapi.dev/api/starships/11/",
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/13/",
  ],
  vehicles: [
    "https://swapi.dev/api/vehicles/4/",
    "https://swapi.dev/api/vehicles/6/",
    "https://swapi.dev/api/vehicles/7/",
    "https://swapi.dev/api/vehicles/8/",
  ],
  species: [
    "https://swapi.dev/api/species/1/",
    "https://swapi.dev/api/species/2/",
    "https://swapi.dev/api/species/3/",
    "https://swapi.dev/api/species/4/",
    "https://swapi.dev/api/species/5/",
  ],
  created: "2014-12-10T14:23:31.880000Z",
  edited: "2014-12-20T19:49:45.256000Z",
  url: "https://swapi.dev/api/films/1/",
};

describe("ShowFilmService", () => {
  it("should return data from an existing film", async () => {
    vi.mocked(swapiInstance.get).mockResolvedValue({ data: filmOne });
    const response = await showFilmService({ id: "1" });
    expect(response.error).toBe(false);
    expect(response.data).toEqual(filmOne);
  });

  it("should trhow an error object for a non-existing film", async () => {
    vi.mocked(swapiInstance.get).mockRejectedValue({});
    const response = await showFilmService({ id: "non-existing" });
    expect(response.error).toBe(true);
    expect(response.data).toEqual({ message: "Film not found" });
  });
});
