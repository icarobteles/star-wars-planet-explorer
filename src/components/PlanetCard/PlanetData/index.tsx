import { PLANETS_IMAGES_URLS } from "@/constants";
import { PlanetList } from "../PlanetList";
import { Wrapper, Content, Image, PlanetName } from "./styles";
import { Suspense } from "react";

interface PlanetDataProps {
  data: {
    name: string;
    imageUrl: string;
    climate: string;
    terrain: string;
    population: number | null;
  } | null;
  loading: boolean;
}
export function PlanetData({ data }: PlanetDataProps) {
  return (
    <Wrapper>
      <Image
        loading="lazy"
        src={data?.imageUrl || PLANETS_IMAGES_URLS.get("default")}
        alt={`Planet ${data?.name}`}
      />
      <Content>
        <PlanetName>
          Planet:{" "}
          <Suspense fallback={<>...</>}>
            <strong>{data?.name}</strong>
          </Suspense>
        </PlanetName>
        <PlanetList climate={data?.climate} terrain={data?.terrain} population={data?.population} />
      </Content>
    </Wrapper>
  );
}
