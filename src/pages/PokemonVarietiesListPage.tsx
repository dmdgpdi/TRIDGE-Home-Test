import { NavLink, useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpeciesInfo } from "../queries/useFetchPokemonSpeciesInfo";
import type { RoutePaths } from "../route.config";

export function PokemonVarietiesListPage() {
  const { species } = useParams<Partial<Record<RoutePaths, string>>>();

  if (!species) {
    throw new Error("can't found species");
  }

  const { data: pokemonInfo } = useFetchPokemonSpeciesInfo(species);

  if (!pokemonInfo) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Pokemon Varieties ListPage</h1>
      <RouteBreadcrumb />
      <hr />

      {pokemonInfo?.varieties.map((varieties) => {
        return (
          <NavLink key={varieties.pokemon.url} to={varieties?.pokemon.name}>
            <h2>go to {varieties?.pokemon.name} Pokemon Page</h2>
          </NavLink>
        );
      })}
    </div>
  );
}
