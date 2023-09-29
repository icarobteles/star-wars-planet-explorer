import { PlanetCard } from "@/components";
import { Wrapper } from "./styles";
import { Link, useParams } from "react-router-dom";
import { IPlanet } from "@/interfaces";

const PLANET_EXAMPLE: IPlanet = {
  name: "Tatooine",
  climate: "arid",
  terrain: "desert",
  population: 200000,
  imageUrl: "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png",
  residents: [
    "People 01",
    "People 02",
    "People 04",
    "People 06",
    "People 07",
    "People 08",
    "People 09",
    "People 11",
    "People 43",
    "People 62",
  ],
  films: ["Films 1", "Films 3", "Films 4", "Films 5", "Films 6"],
};

export function PlanetPage() {
  const { id } = useParams();

  return (
    <Wrapper>
      <PlanetCard {...PLANET_EXAMPLE} />
      <Link to="/" title="Back">
        Back
      </Link>
    </Wrapper>
  );
}
