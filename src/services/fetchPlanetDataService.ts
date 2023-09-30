/* eslint-disable @typescript-eslint/no-explicit-any */

import { ISwapiPlanet, showPlanetService } from "@/api";
import { PLANETS_IMAGES_URLS, STORAGE_ADDRESSES } from "@/constants";
import { IPlanet, IPlanetStorage, IStorage } from "@/interfaces";

export async function fetchPlanetDataService(
  id: string,
  storage: IStorage,
): Promise<IPlanetStorage> {
  const currentStorage = storage.get(STORAGE_ADDRESSES.PLANETS);
  const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

  if (currentStorage) {
    const parsedCurrentStorage = JSON.parse(currentStorage) as IPlanetStorage[];
    const planetStoragedIndex = parsedCurrentStorage.findIndex(planet => planet.data.id === id);

    if (
      planetStoragedIndex === -1 ||
      shouldUpdatePlanet(parsedCurrentStorage[planetStoragedIndex], ONE_DAY_IN_MILLISECONDS)
    ) {
      const response = await showPlanetService({ id });

      if (response.error) {
        throw new Error((response.data as { message: string }).message);
      }

      const planet = extractPlanetData(response.data as ISwapiPlanet);

      const now = new Date();

      const planetStorage: IPlanetStorage = {
        data: { ...planet },
        storedAt: now,
        updatedAt: now,
        urls: extractPlanetUrls(response.data as ISwapiPlanet),
      };

      if (planetStoragedIndex === -1) {
        parsedCurrentStorage.push(planetStorage); // Adicione o novo planeta
      } else {
        parsedCurrentStorage[planetStoragedIndex] = planetStorage; // Atualize o planeta existente
      }

      storage.set(STORAGE_ADDRESSES.PLANETS, JSON.stringify(parsedCurrentStorage));

      return planetStorage;
    } else {
      return parsedCurrentStorage[planetStoragedIndex];
    }
  } else {
    const response = await showPlanetService({ id });

    if (response.error) {
      throw new Error((response.data as { message: string }).message);
    }

    const planet = extractPlanetData(response.data as ISwapiPlanet);

    const now = new Date();

    const planetStorage: IPlanetStorage = {
      data: { ...planet },
      storedAt: now,
      updatedAt: now,
      urls: extractPlanetUrls(response.data as ISwapiPlanet),
    };

    storage.set(STORAGE_ADDRESSES.PLANETS, JSON.stringify([planetStorage]));

    return planetStorage;
  }
}

// Função para verificar se deve atualizar o planeta
function shouldUpdatePlanet(planetStorage: IPlanetStorage, threshold: number): boolean {
  if (!planetStorage) return false;
  const currentTime = new Date().getTime();
  const lastUpdateTime = new Date(planetStorage.updatedAt).getTime() || 0;
  return currentTime - lastUpdateTime > threshold;
}

function getImageUrl(name: string): string | null {
  return PLANETS_IMAGES_URLS.get(name.toLowerCase()) ?? PLANETS_IMAGES_URLS.get("default")!;
}

// Função para extrair dados do planeta da resposta da API
function extractPlanetData(apiData: ISwapiPlanet): IPlanet {
  const { climate, name, population, terrain } = apiData;
  const id = getIdFromUrl(apiData.url);
  return {
    id,
    climate,
    films: [],
    residents: [],
    imageUrl: getImageUrl(name),
    name,
    population: Number(population) || population,
    terrain,
  };
}

// Função para extrair URLs relacionadas ao planeta da resposta da API
function extractPlanetUrls(apiData: ISwapiPlanet): { films: string[]; residents: string[] } {
  return {
    films: apiData.films || [],
    residents: apiData.residents || [],
  };
}

// Função para extrair o ID do planeta a partir da URL
function getIdFromUrl(url: string): string {
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 2];
}
