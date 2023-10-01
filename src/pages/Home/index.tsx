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
import { usePlanets } from "@/providers/planets";

export function HomePage() {
  const { planets, loadingPlanets, searchPlanets, sortPlanets, noSearchDone } = usePlanets();

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
          <SearchForm loading={loadingPlanets} search={searchPlanets} />
          <Filters sort={sortPlanets} />
          <MainPlanetsList>
            {!noSearchDone && planets.length === 0 && !loadingPlanets && (
              <>Nenhum planeta encontrado</>
            )}
            {planets.length > 0 &&
              planets.map(({ data: { id, name } }) => (
                <PlanetLink key={id} href={`/planets/${id}`} name={name} />
              ))}
            {loadingPlanets && (
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
