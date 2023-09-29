import { Filters, SearchForm } from "@/components";
import { Main, MainContent, MainContentTitle, MainPicture, Spaceship, Wrapper } from "./styles";
import MainImageJpg from "/images/home-image.jpg";
import MainImageJpg2x from "/images/home-image@2x.jpg";
import SpaceshipPng from "/images/spaceship.png";
import { Logo, LogoSubtitle, LogoTitle } from "@/styles";

export function HomePage() {
  return (
    <Wrapper>
      <Logo>
        <LogoSubtitle>Planet Search</LogoSubtitle>
        <LogoTitle />
      </Logo>
      <Main>
        <MainPicture>
          <source media="(min-width: 768px)" srcSet={MainImageJpg2x} />
          <img src={MainImageJpg} alt="Background Image" />
        </MainPicture>
        <MainContent>
          <MainContentTitle>
            Discover all the information about Planets of the Star Wars Saga
          </MainContentTitle>
          <SearchForm />
          <Filters />
        </MainContent>
        <Spaceship src={SpaceshipPng} alt="Spaceship" />
      </Main>
    </Wrapper>
  );
}
