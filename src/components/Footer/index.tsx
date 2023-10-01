import { Wrapper } from "./styles";
import StarWarsLogo from "/images/star-wars.svg";

export function Footer() {
  return (
    <Wrapper>
      <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
      <hr />
      <img aria-label="Star Wars Logo" src={StarWarsLogo} alt="Star Wars Logo" />
    </Wrapper>
  );
}
