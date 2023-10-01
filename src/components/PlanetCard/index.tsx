import { Actions, ModalButton, ModalContent, ModalInput, ModalWrapper, Wrapper } from "./styles";
import FilmsIcon from "/icons/films.svg";
import ResidentsIcon from "/icons/residents.svg";
import { PlanetSection } from "./PlanetSection";
import { PlanetData } from "./PlanetData";
import { Link, useNavigate } from "react-router-dom";
import { useModal } from "@/hooks";
import { useEffect, useState } from "react";
import { usePlanets } from "@/providers/planets";
import { appPlanetsStorage } from "@/main";

interface PlanetCardProps {
  id: string;
}

export function PlanetCard({ id }: PlanetCardProps) {
  const {
    currentPlanet,
    loadingCurrentPlanet,
    updateCurrentPlanetName,
    currentPlanetFilmsCount,
    fetchCurrentPlanetData,
  } = usePlanets();

  const { openModal, closeModal, modalIsOpen } = useModal();
  const [inputValue, setInputValue] = useState("");

  const data = currentPlanet ? currentPlanet.data : null;
  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(data?.name || "");
  }, [data]);

  useEffect(() => {
    try {
      fetchCurrentPlanetData(id, appPlanetsStorage);
    } catch (error) {
      return navigate("/404");
    }
  }, [id, navigate]);

  return (
    <Wrapper>
      <PlanetData data={data} loading={loadingCurrentPlanet.data} />
      <PlanetSection
        iconUrl={ResidentsIcon}
        title="Residents"
        content={data?.residents ? data.residents.join(", ") : null}
        loading={loadingCurrentPlanet.additionalData}
      />
      <PlanetSection
        iconUrl={FilmsIcon}
        title={`Films (${currentPlanetFilmsCount})`}
        content={data?.films ? data.films.join(", ") : null}
        loading={loadingCurrentPlanet.additionalData}
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
                updateCurrentPlanetName(inputValue);
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
