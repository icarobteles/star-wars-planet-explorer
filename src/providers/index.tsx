import { PropsWithChildren } from "react";
import { PlanetsProvider } from "./planets";

export function Providers({ children }: PropsWithChildren) {
  return <PlanetsProvider>{children}</PlanetsProvider>;
}
