import { useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonInfo } from "../queries/useFetchPokemonInfo";
import { containerStyle, titleStyle } from "./page.css";

export function PokemonDetailPage() {
  const { pokemon } = useParams<{ pokemon: string }>();

  if (!pokemon) {
    throw new Error("Can't find pokemon");
  }

  const { data: pokemonInfo } = useFetchPokemonInfo(pokemon);

  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Pokemon Detail Page</h1>
      <RouteBreadcrumb />
      <hr />

      <p>name: {pokemonInfo?.name}</p>
      <p>height: {pokemonInfo?.height}</p>
      <p>weight: {pokemonInfo?.weight}</p>
    </div>
  );
}
