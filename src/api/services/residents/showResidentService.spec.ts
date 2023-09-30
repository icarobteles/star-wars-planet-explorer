import { describe, it, expect, vi } from "vitest";
import { showResidentService } from "./showResidentService";
import { ISwapiResident } from "@/api/interfaces";
import { swapiInstance } from "@/api";

vi.mock("@/api/instances/swapi", () => ({
  swapiInstance: {
    get: vi.fn(),
  },
}));

const residentOne: ISwapiResident = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
  starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

describe("ShowResidentService", () => {
  it("should return data from an existing resident", async () => {
    vi.mocked(swapiInstance.get).mockResolvedValue({ data: residentOne });

    const response = await showResidentService({ id: "1" });
    expect(response.error).toBe(false);
    expect(response.data).toEqual(residentOne);
  });

  it("should trhow an error object for a non-existing resident", async () => {
    vi.mocked(swapiInstance.get).mockRejectedValue({});
    const response = await showResidentService({ id: "non-existing" });
    expect(response.error).toBe(true);
    expect(response.data).toEqual({ message: "Resident not found" });
  });
});
