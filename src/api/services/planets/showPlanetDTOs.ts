import type { ISwapiPlanet } from "@/api/interfaces/index";

export interface ShowPlanetInputPort {
  id: string;
}

export interface ShowPlanetOutputPort {
  error: boolean;
  data: ISwapiPlanet | { message: string };
}
