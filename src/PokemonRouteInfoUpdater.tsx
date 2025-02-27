import { useFetchPokemonInfo } from "./queries/useFetchPokemonInfo";
import { useSetRouteInfo } from "./useSetRouteInfo";

interface PokemonRouteRefetchDetectorProps {
  pokemon: string;
}

/**
 * props로 값을 주입받아 routeInfo를 업데이트합니다.
 */
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
