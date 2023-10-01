import type { ISwapiResident } from "@/api/interfaces/index";

export interface ShowResidentInputPort {
  id: string;
}

export interface ShowResidentOutputPort {
  error: boolean;
  data: ISwapiResident | { message: string };
}
