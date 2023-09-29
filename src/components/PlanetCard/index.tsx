import { IPlanet } from "@/interfaces";
import { Wrapper } from "./styles";
import FilmsIcon from "/icons/films.svg";
import ResidentsIcon from "/icons/residents.svg";
import { PlanetSection } from "./PlanetSection";
import { PlanetData } from "./PlanetData";

export function PlanetCard({
  climate,
  films,
  imageUrl,
  name,
  population,
  residents,
  terrain,
}: IPlanet) {
  const data = { name, imageUrl, climate, terrain, population };

  return (
    <Wrapper>
      <PlanetData data={data} />
      <PlanetSection iconUrl={ResidentsIcon} title="Residents" content={residents.join(", ")} />
      <PlanetSection
        iconUrl={FilmsIcon}
        title={`Films (${films.length})`}
        content={films.join(", ")}
      />
    </Wrapper>
  );
}
