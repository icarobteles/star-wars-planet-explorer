import type { ISwapiList, ISwapiPlanet } from "@/api/interfaces";

export interface ListPlanetsInputPort {
  search: string;
}

export interface ListPlanetsOutputPort {
  error: boolean;
  data: ISwapiList<ISwapiPlanet> | { message: string };
}
