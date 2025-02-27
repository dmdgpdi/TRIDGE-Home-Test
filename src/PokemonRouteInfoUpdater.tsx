import { useFetchPokemonInfo } from "./queries/useFetchPokemonInfo";
import { useSetRouteInfo } from "./useSetRouteInfo";

interface PokemonRouteRefetchDetectorProps {
  pokemon: string;
}

export function PokemonRouteInfoUpdater({
  pokemon,
}: PokemonRouteRefetchDetectorProps) {
  const { data: pokemonInfo } = useFetchPokemonInfo(pokemon);

  useSetRouteInfo({
    routeKey: ":pokemon",
    data: pokemonInfo,
    getName: (pokemonInfo) => pokemonInfo?.name,
  });

  return null;
}
