import { ONE_DAY_IN_MILLISECONDS, STORAGE_ADDRESSES } from "@/constants";
import { IPlanetStorage, IStorage } from "@/interfaces";

export interface IPlanetsStorageRepository {
  findByName(name: string): IPlanetStorage[];
  save(data: IPlanetStorage[]): void;
  remove(): void;
  clear(): void;
  saveOne(data: IPlanetStorage): void;
  removeOne(id: string): void;
  findOne(id: string): IPlanetStorage | null;
}

export function planetsStorage(storage: IStorage): IPlanetsStorageRepository {
  const address = STORAGE_ADDRESSES.PLANETS;

  const stringify = <T>(data: T): string => {
    return JSON.stringify(data);
  };

  const parse = <T>(str: string): T => {
    return JSON.parse(str) as T;
  };

  const findAndRemoveOutdated = () => {
    const storagedPlanets = storage.get(address);

    if (storagedPlanets) {
      const now = new Date().getTime();
      const parsedStoragedPlanets = parse(storagedPlanets) as IPlanetStorage[];
      const filteredStoragedPlanet = parsedStoragedPlanets.filter(
        planet => now - new Date(planet.updatedAt).getTime() <= ONE_DAY_IN_MILLISECONDS,
      );

      storage.set(address, stringify(filteredStoragedPlanet));
      return filteredStoragedPlanet;
    }

    return [];
  };

  const find = (): IPlanetStorage[] => {
    //Procura todos os planetas e remove todos os desatualizados
    const storagedPlanets = findAndRemoveOutdated();
    return storagedPlanets;
  };

  const findByName = (name: string): IPlanetStorage[] => {
    const storagedPlanets = find();
    if (storagedPlanets) {
      return storagedPlanets.filter(planet =>
        planet.data.name.toLowerCase().includes(name.toLowerCase()),
      );
    } else {
      throw new Error("Storage doesn't exist");
    }
  };

  const save = (data: IPlanetStorage[]): void => {
    storage.set(address, stringify(data));
  };

  const clear = (): void => {
    storage.set(address, stringify([]));
  };

  const remove = (): void => {
    storage.remove(address);
  };

  const saveOne = (data: IPlanetStorage): void => {
    const storagedPlanets = find();

    if (storagedPlanets) {
      const updatedStoragedPlanets = storagedPlanets.slice();
      const findedStoragedPlanet = storagedPlanets.findIndex(
        planet => planet.data.id === data.data.id,
      );

      if (findedStoragedPlanet === -1) {
        updatedStoragedPlanets.push(data);
      } else {
        updatedStoragedPlanets[findedStoragedPlanet] = { ...data };
      }

      storage.set(address, stringify(updatedStoragedPlanets));
    } else {
      throw new Error("Storage doesn't exist");
    }
  };

  const removeOne = (id: string): void => {
    const storagedPlanets = find();

    if (storagedPlanets) {
      const filteredStoragedPlanet = storagedPlanets.filter(planet => planet.data.id !== id);

      if (storagedPlanets.length === filteredStoragedPlanet.length) {
        throw new Error("Planet not found in storage");
      }

      storage.set(address, stringify(filteredStoragedPlanet));
    } else {
      throw new Error("Storage doesn't exist");
    }
  };

  const findOne = (id: string): IPlanetStorage | null => {
    const storagedPlanets = find();

    if (storagedPlanets) {
      const findedStoragedPlanet = storagedPlanets.find(planet => planet.data.id === id);
      return findedStoragedPlanet ?? null;
    }

    return null;
  };

  return { clear, findByName, findOne, remove, removeOne, save, saveOne };
}
