import { PlanetCard } from "@/components";
import { Wrapper } from "./styles";
import { useParams } from "react-router-dom";
import { Logo, LogoSubtitle, LogoTitle } from "@/styles";

export function PlanetPage() {
  const { id } = useParams();

  return (
    <Wrapper>
      <Logo>
        <LogoSubtitle>Planet Search</LogoSubtitle>
        <LogoTitle />
      </Logo>
      <PlanetCard id={id as string} />
    </Wrapper>
  );
}
