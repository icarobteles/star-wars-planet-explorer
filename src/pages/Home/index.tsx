import { Filters, LoadingBar, PlanetLink, SearchForm } from "@/components";
import {
  Main,
  MainContent,
  MainContentTitle,
  MainPicture,
  MainPlanetsList,
  Spaceship,
  Wrapper,
} from "./styles";
import MainImageJpg from "/images/home-image.jpg";
import MainImageJpg2x from "/images/home-image@2x.jpg";
import SpaceshipPng from "/images/spaceship.png";
import { Logo, LogoSubtitle, LogoTitle } from "@/styles";
import { useSearchPlanets } from "@/hooks";
import { appStorage } from "@/main";

export function HomePage() {
  const { loading, planets, search, sortByName, sortByPopulation } = useSearchPlanets(appStorage);

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
          <SearchForm loading={loading} search={search} />
          <Filters sortByName={sortByName} sortByPopulation={sortByPopulation} />
          <MainPlanetsList>
            {planets.map(({ data: { id, name } }) => (
              <PlanetLink key={id} href={`/planets/${id}`} name={name} />
            ))}
            {loading && (
              <li className="loading-bar" key={"loading-planets-1"}>
                <LoadingBar />
              </li>
            )}
          </MainPlanetsList>
        </MainContent>
        <Spaceship src={SpaceshipPng} alt="Spaceship" />
      </Main>
    </Wrapper>
  );
}
