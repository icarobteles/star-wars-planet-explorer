import { IPlanet, IStorage } from "@/interfaces";
import { fetchPlanetAdditionalDataService } from "@/services/fetchPlanetAdditionalDataService";
import { fetchPlanetDataService } from "@/services/fetchPlanetDataService";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function usePlanet(id: string, storage: IStorage) {
  const [planet, setPlanet] = useState<IPlanet>({} as IPlanet);
  const [loading, setLoading] = useState(true);
  const [loadingAdditionalData, setLoadingAdditionalData] = useState(false);

  const navigate = useNavigate();

  const filmsUrls = useRef<string[]>([]);
  const residentsUrls = useRef<string[]>([]);

  const updatePlanetName = (name: string): void => {
    setPlanet(prevState => {
      return { ...prevState, name };
    });
  };

  const fetchAdditionalData = async () => {
    try {
      if (loadingAdditionalData && !loading) {
        const additionalData = await fetchPlanetAdditionalDataService({
          films: filmsUrls.current,
          residents: residentsUrls.current,
        });

        setPlanet(prevPlanet => {
          return {
            ...prevPlanet,
            films: additionalData.films,
            residents: additionalData.residents,
          };
        });
        setLoadingAdditionalData(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPlanetData = async () => {
    try {
      const response = await fetchPlanetDataService(id, storage);
      setPlanet({ ...response.data });
      if (response.urls) {
        filmsUrls.current = response.urls.films;
        residentsUrls.current = response.urls.residents;
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      return navigate("/404");
    }
  };

  useEffect(() => {
    fetchPlanetData();
    setLoadingAdditionalData(true);
  }, [id, navigate]);

  useEffect(() => {
    fetchAdditionalData();
  }, [loadingAdditionalData, loading]);

  return {
    planet,
    updatePlanetName,
    loading,
    loadingAdditionalData,
    filmsCount: filmsUrls.current.length,
  };
}
