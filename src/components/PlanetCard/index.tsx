import { Actions, ModalButton, ModalContent, ModalInput, ModalWrapper, Wrapper } from "./styles";
import FilmsIcon from "/icons/films.svg";
import ResidentsIcon from "/icons/residents.svg";
import { PlanetSection } from "./PlanetSection";
import { PlanetData } from "./PlanetData";
import { usePlanet } from "@/hooks/usePlanet";
import { LocalStorage } from "@/adapters";
import { Link } from "react-router-dom";
import { useModal } from "@/hooks";
import { useEffect, useState } from "react";

interface PlanetCardProps {
  id: string;
}

export function PlanetCard({ id }: PlanetCardProps) {
  const storage = new LocalStorage();
  const { planet, updatePlanetName, loadingAdditionalData, loading, filmsCount } = usePlanet(
    id as string,
    storage,
  );

  const { openModal, closeModal, modalIsOpen } = useModal();
  const [inputValue, setInputValue] = useState("");

  const data = planet
    ? {
        name: planet.name,
        imageUrl: planet.imageUrl,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
      }
    : null;

  useEffect(() => {
    setInputValue(planet.name);
  }, [planet]);

  return (
    <Wrapper>
      <PlanetData data={data} />
      <PlanetSection
        iconUrl={ResidentsIcon}
        title="Residents"
        content={planet?.residents ? planet.residents.join(", ") : null}
      />
      <PlanetSection
        iconUrl={FilmsIcon}
        title={`Films (${filmsCount})`}
        content={planet?.films ? planet.films.join(", ") : null}
      />
      <Actions>
        <button onClick={openModal} type="button" title="Editar Planeta">
          <i></i>
          Editar
        </button>
        <Link to="/" title="Back">
          <i></i>
          Back
        </Link>
      </Actions>
      {modalIsOpen && (
        <ModalWrapper>
          <ModalContent>
            <ModalInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <ModalButton
              onClick={() => {
                setInputValue("");
                closeModal();
              }}
              type="button"
              title="Cancelar Alterações"
              variant="cancel"
            >
              Cancelar
            </ModalButton>
            <ModalButton
              onClick={() => {
                updatePlanetName(inputValue);
                closeModal();
              }}
              type="button"
              title="Salvar Alterações"
              variant="confirm"
            >
              Salvar
            </ModalButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </Wrapper>
  );
}
