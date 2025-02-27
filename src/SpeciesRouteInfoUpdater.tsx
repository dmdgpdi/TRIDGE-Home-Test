import { useFetchPokemonSpeciesInfo } from "./queries/useFetchPokemonSpeciesInfo";
import { useSetRouteInfo } from "./useSetRouteInfo";

interface SpeciesRouteRefetchDetectorProps {
  species: string;
}

/**
 * props로 값을 주입받아 routeInfo를 업데이트합니다.
 */
export function SpeciesRouteInfoUpdater({
  species,
}: SpeciesRouteRefetchDetectorProps) {
  const { data: pokemonSpeciesInfo } = useFetchPokemonSpeciesInfo(species);
  useSetRouteInfo({
    routeKey: ":species",
    data: pokemonSpeciesInfo,
    getName: (pokemonSpeciesInfo) => pokemonSpeciesInfo?.name,
  });

  return null;
}
