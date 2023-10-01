import ClimateIcon from "/icons/climate.svg";
import PopulationIcon from "/icons/population.svg";
import TerrainIcon from "/icons/terrain.svg";

import { Item, ItemIcon, ItemInfo, Wrapper } from "./styles";
import { capitalizeString } from "@/util/capitalizeString";

interface PlanetListProps {
  climate?: string;
  terrain?: string;
  population?: number | null;
}

export function PlanetList({ climate, terrain, population }: PlanetListProps) {
  const capitalizedClimate = climate ? capitalizeString(climate) : "";
  const capitalizedTerrain = terrain ? capitalizeString(terrain) : "";

  return (
    <Wrapper>
      <Item>
        <ItemIcon iconUrl={ClimateIcon} />
        <ItemInfo>
          <strong>Climate: </strong> {capitalizedClimate}
        </ItemInfo>
      </Item>

      <Item>
        <ItemIcon iconUrl={TerrainIcon} />
        <ItemInfo>
          <strong>Terrain: </strong> {capitalizedTerrain}
        </ItemInfo>
      </Item>

      <Item>
        <ItemIcon iconUrl={PopulationIcon} />
        <ItemInfo>
          <strong>Population: </strong> {population ?? "Unknown"}
        </ItemInfo>
      </Item>
    </Wrapper>
  );
}
