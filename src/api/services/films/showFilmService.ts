import { swapiInstance } from "@/api/instances/swapi";
import { ShowFilmInputPort, ShowFilmOutputPort } from "./showFilmDTOs";
import { ISwapiFilm } from "@/api/interfaces";

export async function showFilmService({ id }: ShowFilmInputPort): Promise<ShowFilmOutputPort> {
  try {
    const response = await swapiInstance.get<ISwapiFilm>(`/films/${id}`);
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: { message: "Film not found" } };
  }
}
