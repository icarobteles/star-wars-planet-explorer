import { STORAGE_ADDRESSES } from "@/constants";
import { IPlanetStorage, IStorage } from "@/interfaces";

export function findPlanetsInStorage(name: string, storage: IStorage): IPlanetStorage[] {
  const storagedPlanets = storage.get(STORAGE_ADDRESSES.PLANETS);
  const planets: IPlanetStorage[] = [];

  if (storagedPlanets) {
    const parsedStoragedPlanets = JSON.parse(storagedPlanets) as IPlanetStorage[];
    parsedStoragedPlanets.forEach(planet => {
      if (planet.data.name.includes(name)) {
        planets.push(planet);
      }
    });
  }

  return planets;
}
