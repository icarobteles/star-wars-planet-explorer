import type { ISwapiFilm } from "@/api/interfaces/index";

export interface ShowFilmInputPort {
  id: string;
}

export interface ShowFilmOutputPort {
  error: boolean;
  data: ISwapiFilm | { message: string };
}
