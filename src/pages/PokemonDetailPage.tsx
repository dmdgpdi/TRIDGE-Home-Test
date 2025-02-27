import { useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonInfo } from "../queries/useFetchPokemonInfo";

export function PokemonDetailPage() {
  const { pokemon } = useParams<{ pokemon: string }>();

  if (!pokemon) {
    throw new Error("Can't find pokemon");
  }

  const { data: pokemonInfo } = useFetchPokemonInfo(pokemon);

  return (
    <div>
      <h1>Pokemon Detail Page</h1>
      <RouteBreadcrumb />
      <hr />
      <div>
        <p>name: {pokemonInfo?.name}</p>
        <p>height: {pokemonInfo?.height}</p>
        <p>weight: {pokemonInfo?.weight}</p>
      </div>
    </div>
  );
}
