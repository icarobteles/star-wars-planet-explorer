import { ISwapiList, ISwapiPlanet, showPlanetService } from "@/api";
import { listPlanetsService } from "@/api/services/planets/ListPlanetsService";
import { IPlanetsStorageRepository } from "@/domain";
import { IPlanetStorage, IPlanet } from "@/interfaces";
import { fetchCurrentPlanetAdditionalDataInApiService } from "@/services";
import { getIdFromUrl } from "@/util/getIdFromUrl";
import { getPlanetImageUrl } from "@/util/getPlanetImageUrl";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type IOrder = "asc" | "desc";
type IBy = "name" | "population";

interface IPlanetsContext {
  planets: IPlanetStorage[];
  currentPlanet: IPlanetStorage | null;
  currentPlanetFilmsCount: number;
  loadingPlanets: boolean;
  loadingCurrentPlanet: { data: boolean; additionalData: boolean };
  noSearchDone: boolean;
  sortPlanets: (by: IBy, order: IOrder) => void;
  updateCurrentPlanetName: (newName: string) => void;
  searchPlanets: (name: string, planetsRepository: IPlanetsStorageRepository) => Promise<void>;
  fetchCurrentPlanetData: (
    id: string,
    planetsRepository: IPlanetsStorageRepository,
  ) => Promise<void>;
}

export const PlanetsContext = createContext<IPlanetsContext>({
  planets: [],
  currentPlanet: null,
  currentPlanetFilmsCount: 0,
  loadingPlanets: true,
  loadingCurrentPlanet: { data: false, additionalData: false },
  noSearchDone: true,
  searchPlanets: async () => {},
  fetchCurrentPlanetData: async () => {},
  sortPlanets: () => {},
  updateCurrentPlanetName: () => {},
});

const comparePlanetsNames = (name1: string, name2: string, order: IOrder) => {
  if (order === "asc") {
    return name1.localeCompare(name2);
  } else {
    return name2.localeCompare(name1);
  }
};

const comparePlanetsPopulation = (population1: number, population2: number, order: IOrder) => {
  if (order === "asc") {
    return population1 - population2;
  } else {
    return population2 - population1;
  }
};

export function PlanetsProvider({ children }: PropsWithChildren) {
  const [planets, setPlanets] = useState<IPlanetStorage[]>([]);
  const [currentPlanet, setCurrentPlanet] = useState<IPlanetStorage | null>(null);
  const [loadingPlanets, setLoadingPlanets] = useState(false);
  const [loadingCurrentPlanet, setLoadingCurrentPlanet] = useState({
    data: false,
    additionalData: false,
  });

  const [noSearchDone, setNoSearchDone] = useState(true);

  const currentPlanetFilmsCount = useMemo(() => {
    const filmsCount = currentPlanet?.urls?.films.length || currentPlanet?.data.films.length || 0;
    return filmsCount;
  }, [currentPlanet]);

  const changeLoadingCurrentPlanet = (key: "data" | "additionalData", value: boolean) => {
    setLoadingCurrentPlanet(prevState => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const sortPlanets = (by: IBy, order: IOrder): void => {
    console.log(by, order);
    setPlanets(prevPlanets => {
      if (by === "name") {
        const sortedPlanets = prevPlanets
          .slice()
          .sort((a, b) => comparePlanetsNames(a.data.name, b.data.name, order));

        return sortedPlanets;
      } else {
        const sortedPlanets = prevPlanets
          .slice()
          .sort((a, b) =>
            comparePlanetsPopulation(a.data.population || 0, b.data.population || 0, order),
          );

        return sortedPlanets;
      }
    });
  };

  const searchPlanets = async (
    name: string,
    planetsRepository: IPlanetsStorageRepository,
  ): Promise<void> => {
    const { findByName, save } = planetsRepository;
    const storagedPlanets = findByName(name);
    setNoSearchDone(false);
    setPlanets([...storagedPlanets]);

    setLoadingPlanets(true);
    const response = await listPlanetsService({ search: name });

    const storagedPlanetsIds = storagedPlanets.map(planet => planet.data.id);

    if (response.error) {
      // tratar os erros inesperados com um toast
    } else {
      const { results } = response.data as ISwapiList<ISwapiPlanet>;
      setPlanets(prevPlanets => {
        const updatedPlanets: IPlanetStorage[] = prevPlanets.slice();
        for (let i = 0; i < results.length; i++) {
          const { climate, films, name, population, residents, terrain, url } = results[i];
          const planetId = getIdFromUrl(url);
          if (!storagedPlanetsIds.includes(planetId)) {
            const planet: IPlanet = {
              id: planetId,
              climate,
              films,
              name,
              population: Number(population) || null,
              residents,
              terrain,
              imageUrl: getPlanetImageUrl(name),
            };
            const planetStorage: IPlanetStorage = {
              data: planet,
              updatedAt: new Date(),
              urls: { films, residents },
            };
            updatedPlanets.push(planetStorage);
          }
        }
        save(updatedPlanets);
        return updatedPlanets;
      });
    }

    setLoadingPlanets(false);
  };

  const fetchCurrentPlanetData = async (
    id: string,
    planetsRepository: IPlanetsStorageRepository,
  ): Promise<void> => {
    const { findOne } = planetsRepository;
    const storagedPlanet = findOne(id);

    if (storagedPlanet) {
      setCurrentPlanet({ ...storagedPlanet });

      if (storagedPlanet.urls) {
        const { films, residents } = storagedPlanet.data;
        await fetchCurrentPlanetAdditionalData({ films, residents }, planetsRepository);
      }
    } else {
      changeLoadingCurrentPlanet("data", true);
      const response = await showPlanetService({ id });

      if (response.error) {
        // tratar os erros
      } else {
        const { climate, films, name, population, residents, terrain, url } =
          response.data as ISwapiPlanet;
        const planet: IPlanet = {
          id: getIdFromUrl(url),
          climate,
          films,
          name,
          population: Number(population) || null,
          residents,
          terrain,
          imageUrl: getPlanetImageUrl(name),
        };
        const planetStorage: IPlanetStorage = {
          data: planet,
          updatedAt: new Date(),
          urls: { films, residents },
        };
        setCurrentPlanet({ ...planetStorage });
        changeLoadingCurrentPlanet("data", false);

        await fetchCurrentPlanetAdditionalData({ films, residents }, planetsRepository);
      }
    }
  };

  const fetchCurrentPlanetAdditionalData = async (
    urls: { films: string[]; residents: string[] },
    planetsRepository: IPlanetsStorageRepository,
  ): Promise<void> => {
    try {
      changeLoadingCurrentPlanet("additionalData", true);
      const { films, residents } = await fetchCurrentPlanetAdditionalDataInApiService(urls);
      const { saveOne } = planetsRepository;

      setCurrentPlanet(prevPlanet => {
        if (prevPlanet) {
          const updatedPlanet: IPlanetStorage = {
            data: { ...prevPlanet.data, films, residents },
            updatedAt: new Date(),
          };

          setPlanets(prevPlanets =>
            prevPlanets.map(planet => {
              if (planet.data.id === prevPlanet.data.id) {
                return { ...updatedPlanet };
              }
              return planet;
            }),
          );

          saveOne(updatedPlanet);
          return { ...updatedPlanet };
        }
        return null;
      });
    } catch (error) {
      console.error(error);
      // tratar os erros aqui
    }

    changeLoadingCurrentPlanet("additionalData", false);
  };

  const updateCurrentPlanetName = (newName: string) => {
    if (currentPlanet) {
      setCurrentPlanet(prevPlanet => {
        if (prevPlanet) {
          const updatedPlanet: IPlanetStorage = {
            ...prevPlanet,
            data: { ...prevPlanet.data, name: newName },
          };

          setPlanets(prevPlanets =>
            prevPlanets.map(planet => {
              if (planet.data.id === prevPlanet.data.id) {
                planet = { ...updatedPlanet };
              }
              return planet;
            }),
          );

          return { ...updatedPlanet };
        }
        return null;
      });
    }
  };

  return (
    <PlanetsContext.Provider
      value={{
        planets,
        currentPlanet,
        currentPlanetFilmsCount,
        fetchCurrentPlanetData,
        loadingCurrentPlanet,
        loadingPlanets,
        noSearchDone,
        searchPlanets,
        sortPlanets,
        updateCurrentPlanetName,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
}

export const usePlanets = () => useContext(PlanetsContext);
