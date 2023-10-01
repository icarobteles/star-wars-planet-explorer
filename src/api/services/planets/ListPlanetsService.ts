import { swapiInstance } from "@/api/instances/swapi";
import { ListPlanetsInputPort, ListPlanetsOutputPort } from "./ListPlanetsDTOs";
import { ISwapiList, ISwapiPlanet } from "@/api/interfaces";

export async function listPlanetsService({
  search,
}: ListPlanetsInputPort): Promise<ListPlanetsOutputPort> {
  try {
    const response = await swapiInstance.get<ISwapiList<ISwapiPlanet>>(
      `/planets/?search=${search}`,
    );
    return { error: false, data: response.data };
  } catch (error) {
    return {
      error: true,
      data: { message: "Oops! An unexpected error occurred, please try again later" },
    };
  }
}
