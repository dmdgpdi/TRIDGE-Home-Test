import { NavLink, useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpeciesInfo } from "../queries/useFetchPokemonSpeciesInfo";
import { useSetRouteInfo } from "../useSetRouteInfo";

export function PokemonOverviewPage() {
  const { species } = useParams<{ species: string }>();

  if (!species) {
    throw new Error("Can't find species");
  }

  const { data: pokemonInfo } = useFetchPokemonSpeciesInfo(species);
  useSetRouteInfo({
    routeKey: ":species",
    data: pokemonInfo,
    getName: (pokemonInfo) => pokemonInfo?.name,
  });

  if (!pokemonInfo) {
    return (
      <div>
        <h1>Pokemon Overview Page</h1>
        <RouteBreadcrumb />
        <hr />
        loading...
      </div>
    );
  }

  return (
    <div>
      <h1>Pokemon Overview Page</h1>
      <RouteBreadcrumb />
      <hr />

      <NavLink to={"pokemons"}>
        <h2>go to {pokemonInfo?.name} Pokemon Varieties List</h2>
      </NavLink>

      <br />
      <h2>Info</h2>
      <p>{`color: ${pokemonInfo?.color.name}`}</p>
      <p>{`base_happiness: ${pokemonInfo?.base_happiness}`}</p>
    </div>
  );
}
