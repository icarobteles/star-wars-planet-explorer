import { PlanetList } from "../PlanetList";
import { Wrapper, Content, Image, PlanetName } from "./styles";

interface PlanetDataProps {
  data: {
    name: string;
    imageUrl: string | null;
    climate: string;
    terrain: string;
    population: number | string;
  } | null;
}
export function PlanetData({ data }: PlanetDataProps) {
  console.log(data?.imageUrl);
  return (
    <Wrapper>
      <Image src={data?.imageUrl || ""} alt={`Planet ${name}`} />
      <Content>
        <PlanetName>
          Planet: <strong>{data?.name}</strong>
        </PlanetName>
        <PlanetList climate={data?.climate} terrain={data?.terrain} population={data?.population} />
      </Content>
    </Wrapper>
  );
}
