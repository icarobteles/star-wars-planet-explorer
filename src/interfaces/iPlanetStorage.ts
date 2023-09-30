import { IPlanet } from ".";

export interface IPlanetStorage {
  data: IPlanet;
  urls?: {
    films: string[];
    residents: string[];
  };
  storedAt: Date;
  updatedAt: Date;
}
