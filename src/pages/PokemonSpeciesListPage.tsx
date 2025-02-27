import { NavLink } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpecies } from "../queries/useFetchPokemonSpecies";

export function PokemonSpeciesListPage() {
  const { data } = useFetchPokemonSpecies();

  if (!data) {
    return <div>loading...</div>;
  }

  const { results: pokemonSpecies } = data;

  return (
    <div>
      <h1>Pokemon Species List Page</h1>
      <RouteBreadcrumb />
      <hr />
      {pokemonSpecies.map((pokemon) => {
        return (
          <div key={pokemon.url}>
            <div>
              <NavLink to={`${pokemon.name}`}>
                <h2>{pokemon.name}</h2>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
