import { NavLink } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpecies } from "../queries/useFetchPokemonSpecies";
import { containerStyle, linkButtonStyle, titleStyle } from "./page.css";

export function PokemonSpeciesListPage() {
  const { data } = useFetchPokemonSpecies();

  if (!data) {
    return <div>loading...</div>;
  }

  const { results: pokemonSpecies } = data;

  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Pokemon Species List Page</h1>
      <RouteBreadcrumb />
      <hr />
      {pokemonSpecies.map((pokemon) => {
        return (
          <div key={pokemon.url}>
            <div>
              <NavLink to={`${pokemon.name}`} className={linkButtonStyle}>
                <h2>{pokemon.name}</h2>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
