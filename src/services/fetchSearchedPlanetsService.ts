import { ISwapiList, ISwapiPlanet } from "@/api";
import { listPlanetsService } from "@/api/services/planets/ListPlanetsService";
import { PLANETS_IMAGES_URLS } from "@/constants";
import { IPlanet, IPlanetStorage } from "@/interfaces";

interface FetchSearchedPlanetsServiceInputPort {
  search: string;
}

type FetchSearchedPlanetsServiceOutputPort = IPlanetStorage[];

function getImageUrl(name: string): string | null {
  return PLANETS_IMAGES_URLS.get(name.toLowerCase()) ?? PLANETS_IMAGES_URLS.get("default")!;
}

export async function fetchSearchedPlanetsService({
  search,
}: FetchSearchedPlanetsServiceInputPort): Promise<FetchSearchedPlanetsServiceOutputPort> {
  const searchResult = await listPlanetsService({ search });

  if (searchResult.error) {
    throw new Error((searchResult.data as { message: string }).message);
  }

  const planets: IPlanetStorage[] = [];

  for (const result of (searchResult.data as ISwapiList<ISwapiPlanet>).results) {
    const { climate, name, population, terrain, url, films, residents } = result;
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];
    const planet: IPlanet = {
      id,
      climate,
      films: [],
      name,
      population,
      residents: [],
      terrain,
      imageUrl: getImageUrl(name),
    };
    const now = new Date();
    const planetStorage: IPlanetStorage = {
      data: { ...planet },
      storedAt: now,
      updatedAt: now,
      urls: {
        films,
        residents,
      },
    };
    planets.push(planetStorage);
  }

  return planets;
}
