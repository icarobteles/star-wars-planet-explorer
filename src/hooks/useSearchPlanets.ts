import { STORAGE_ADDRESSES } from "@/constants";
import { IPlanetStorage, IStorage } from "@/interfaces";
import { fetchSearchedPlanetsService } from "@/services/fetchSearchedPlanetsService";
import { useState } from "react";

export function useSearchPlanets(storage: IStorage) {
  const [planets, setPlanets] = useState<IPlanetStorage[]>([]);
  const [loading, setLoading] = useState(false);

  const sortByName = (order: "asc" | "desc") => {
    setPlanets(prevPlanets => {
      const sortedPlanets = [...prevPlanets]; // Crie uma cópia da matriz para evitar a mutação direta.

      sortedPlanets.sort((a, b) => {
        if (order === "asc") {
          return a.data.name.localeCompare(b.data.name); // Use localeCompare para ordenação sensível a idioma.
        } else {
          return b.data.name.localeCompare(a.data.name); // Inverta a ordem para "desc".
        }
      });

      return sortedPlanets; // Retorne a nova matriz ordenada.
    });
  };

  const sortByPopulation = (order: "asc" | "desc") => {
    setPlanets(prevPlanets => {
      const sortedPlanets = [...prevPlanets]; // Crie uma cópia da matriz para evitar a mutação direta.

      sortedPlanets.sort((a, b) => {
        const populationA = a.data.population === "unknown" ? 0 : Number(a.data.population);
        const populationB = b.data.population === "unknown" ? 0 : Number(b.data.population);

        if (order === "asc") {
          return populationA - populationB;
        } else {
          return populationB - populationA; // Inverta a ordem para "desc".
        }
      });

      return sortedPlanets; // Retorne a nova matriz ordenada.
    });
  };

  const searchAPIAndUpdatePlanets = async (search: string, storagePlanets: IPlanetStorage[]) => {
    try {
      setLoading(true);
      const apiResults = await fetchSearchedPlanetsService({ search });
      const currentPlanetsIds = new Set(storagePlanets.map(planet => planet.data.id));
      const uniqueAPIResults: IPlanetStorage[] = [];
      for (const apiResult of apiResults) {
        if (!currentPlanetsIds.has(apiResult.data.id)) {
          uniqueAPIResults.push(apiResult);
          currentPlanetsIds.add(apiResult.data.id);
        }
      }

      // Se a API retornar resultados únicos, esses resultados são adicionados ao estado
      if (uniqueAPIResults.length > 0) {
        console.log(uniqueAPIResults);
        setPlanets(prevPlanets => {
          const updatedPlanets = [...prevPlanets, ...uniqueAPIResults];
          storage.set(STORAGE_ADDRESSES.PLANETS, JSON.stringify(updatedPlanets));
          return updatedPlanets;
        });
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const searchStorage = (search: string) => {
    const storedPlanets = storage.get(STORAGE_ADDRESSES.PLANETS);

    if (storedPlanets) {
      const parsedStoredPlanets = JSON.parse(storedPlanets) as IPlanetStorage[];
      const searchedStoredPlanets = parsedStoredPlanets.filter(storedPlanet =>
        storedPlanet.data.name.toLowerCase().includes(search.toLowerCase()),
      );

      return searchedStoredPlanets;
    } else {
      return [];
    }
  };

  const search = async (search: string) => {
    const storageResults = searchStorage(search);

    if (storageResults.length > 0) {
      console.log(storageResults);
      setPlanets(storageResults);
    }

    await searchAPIAndUpdatePlanets(search, storageResults);
  };

  return { planets, loading, search, sortByName, sortByPopulation };
}
