import { ISwapiFilm, ISwapiResident, showFilmService, showResidentService } from "@/api";
import { getIdFromUrl } from "@/util/getIdFromUrl";

export const fetchCurrentPlanetAdditionalDataInApiService = async (urls: {
  films: string[];
  residents: string[];
}): Promise<{ films: string[]; residents: string[] }> => {
  const loadAdditionalData = async (
    urls: string[],
    serviceFn: ({ id }: { id: string }) => Promise<any>,
  ) => {
    const promises = urls.map(url => {
      const id = getIdFromUrl(url);
      return serviceFn({ id });
    });
    const responses = Promise.all(promises);
    return responses;
  };

  const [filmsData, residentsData] = await Promise.all([
    loadAdditionalData(urls.films, showFilmService),
    loadAdditionalData(urls.residents, showResidentService),
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
};
