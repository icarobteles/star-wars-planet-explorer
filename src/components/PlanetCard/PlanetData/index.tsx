import { PlanetList } from "../PlanetList";
import { Wrapper, Content, Image, PlanetName } from "./styles";

interface PlanetDataProps {
  data: {
    name: string;
    imageUrl: string | null;
    climate: string;
    terrain: string;
    population: number | null;
  };
}
export function PlanetData({ data }: PlanetDataProps) {
  const { name, imageUrl, climate, terrain, population } = data;

  return (
    <Wrapper>
      <Image src={imageUrl || ""} alt={`Planet ${name}`} />
      <Content>
        <PlanetName>
          Planet: <strong>{name}</strong>
        </PlanetName>
        <PlanetList climate={climate} terrain={terrain} population={population} />
      </Content>
    </Wrapper>
  );
}
