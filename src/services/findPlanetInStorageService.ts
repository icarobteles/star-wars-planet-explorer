import { STORAGE_ADDRESSES } from "@/constants";
import { IPlanetStorage, IStorage } from "@/interfaces";

export function findPlanetInStorage(id: string, storage: IStorage): IPlanetStorage | null {
  const storagedPlanets = storage.get(STORAGE_ADDRESSES.PLANETS);
  let findedPlanet: IPlanetStorage | null = null;

  if (storagedPlanets) {
    const parsedStoragedPlanets = JSON.parse(storagedPlanets) as IPlanetStorage[];
    parsedStoragedPlanets.forEach(planet => {
      if (planet.data.id === id) {
        findedPlanet = { ...planet };
        return findedPlanet;
      }
    });
  }

  return findedPlanet;
}
