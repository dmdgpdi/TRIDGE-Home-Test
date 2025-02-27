import { useFetchPokemonSpeciesInfo } from "./queries/useFetchPokemonSpeciesInfo";
import { useSetRouteInfo } from "./useSetRouteInfo";

interface SpeciesRouteRefetchDetectorProps {
  species: string;
}

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
