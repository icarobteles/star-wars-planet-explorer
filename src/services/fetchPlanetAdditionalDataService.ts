/* eslint-disable @typescript-eslint/no-explicit-any */

import { ISwapiFilm, ISwapiResident, showFilmService, showResidentService } from "@/api";

interface IUrls {
  films: string[];
  residents: string[];
}

// Função genérica para fazer chamadas de serviço com base nas URLs
const fetchServiceData = async (
  urls: string[],
  serviceFn: ({ id }: { id: string }) => Promise<any>,
) => {
  const promises = urls.map(url => {
    const urlParts = url.split("/");
    const id = urlParts[urlParts.length - 2];
    return serviceFn({ id });
  });

  const responses = Promise.all(promises);
  return responses;
};

interface FetchPlanetAdditionalDataServiceOutputPort {
  films: string[];
  residents: string[];
}

export async function fetchPlanetAdditionalDataService(
  urls: IUrls,
): Promise<FetchPlanetAdditionalDataServiceOutputPort> {
  const [filmsData, residentsData] = await Promise.all([
    fetchServiceData(urls.films, showFilmService),
    fetchServiceData(urls.residents, showResidentService),
  ]);

  const filmsTitles: string[] = [];
  const residentsNames: string[] = [];

  filmsData.forEach(film => {
    if (!film.error) {
      filmsTitles.push((film.data as ISwapiFilm).title);
    }
  });

  residentsData.forEach(resident => {
    if (!resident.error) {
      residentsNames.push((resident.data as ISwapiResident).name);
    }
  });

  return { films: filmsTitles, residents: residentsNames };
}
