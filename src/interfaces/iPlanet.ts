export interface IPlanet {
  id: string;
  name: string;
  imageUrl: string;
  climate: string;
  terrain: string;
  population: number | null;
  residents: string[];
  films: string[];
}
