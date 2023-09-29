import { ISwapiPlanetResponse } from "./iSwapiPlanetResponse";

export interface ISwapiPlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISwapiPlanetResponse[];
}
