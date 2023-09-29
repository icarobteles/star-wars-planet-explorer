export interface IPlanet {
  name: string;
  imageUrl: string | null;
  climate: string;
  terrain: string;
  population: number | null;
  residents: string[];
  films: string[];
}
