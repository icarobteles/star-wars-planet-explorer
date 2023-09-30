export interface IPlanet {
  id: string;
  name: string;
  imageUrl: string | null;
  climate: string;
  terrain: string;
  population: number | string;
  residents: string[];
  films: string[];
}
