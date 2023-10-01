import { swapiInstance } from "@/api/instances/swapi";
import { ShowPlanetInputPort, ShowPlanetOutputPort } from "./showPlanetDTOs";
import { ISwapiPlanet } from "@/api/interfaces";

export async function showPlanetService({
  id,
}: ShowPlanetInputPort): Promise<ShowPlanetOutputPort> {
  try {
    const response = await swapiInstance.get<ISwapiPlanet>(`/planets/${id}`);
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: { message: "Planet not found" } };
  }
}
