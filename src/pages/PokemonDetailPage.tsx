import { useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonInfo } from "../queries/useFetchPokemonInfo";
import { useSetRouteInfo } from "../useSetRouteInfo";

export function PokemonDetailPage() {
  const { pokemon } = useParams<{ pokemon: string }>();

  if (!pokemon) {
    throw new Error("Can't find pokemon");
  }

  const { data: pokemonInfo } = useFetchPokemonInfo(pokemon);
  useSetRouteInfo({
    routeKey: ":pokemon",
    data: pokemonInfo,
    getName: (pokemonInfo) => pokemonInfo?.name,
  });

  return (
    <div>
      <h1>Pokemon Detail Page</h1>
      <RouteBreadcrumb />
    </div>
  );
}
