import { IPlanet } from ".";

export interface IPlanetStorage {
  data: IPlanet;
  updatedAt: Date;
  urls?: {
    films: string[];
    residents: string[];
  };
}
