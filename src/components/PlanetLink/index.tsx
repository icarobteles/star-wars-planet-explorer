import { Link } from "react-router-dom";
import { Wrapper } from "./styles";

interface PlanetLinkProps {
  href: string;
  name: string;
}

export function PlanetLink({ href, name }: PlanetLinkProps) {
  return (
    <Wrapper>
      <Link to={href} title={name} aria-label={name}>
        <h4>{name}</h4>
        <i aria-label={`${name} Icon`}></i>
      </Link>
    </Wrapper>
  );
}
