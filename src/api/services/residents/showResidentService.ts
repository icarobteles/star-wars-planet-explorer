import { swapiInstance } from "@/api/instances/swapi";
import { ShowResidentInputPort, ShowResidentOutputPort } from "./showResidentDTOs";
import { ISwapiResident } from "@/api/interfaces";

export async function showResidentService({
  id,
}: ShowResidentInputPort): Promise<ShowResidentOutputPort> {
  try {
    const response = await swapiInstance.get<ISwapiResident>(`/people/${id}`);
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true, data: { message: "Resident not found" } };
  }
}
