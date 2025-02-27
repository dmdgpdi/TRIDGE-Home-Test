import { NavLink, useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpeciesInfo } from "../queries/useFetchPokemonSpeciesInfo";
import type { RoutePaths } from "../route.config";
import { containerStyle, linkButtonStyle, titleStyle } from "./page.css";

export function PokemonVarietiesListPage() {
  const { species } = useParams<Partial<Record<RoutePaths, string>>>();

  if (!species) {
    throw new Error("can't found species");
  }

  const { data: pokemonInfo } = useFetchPokemonSpeciesInfo(species);

  if (!pokemonInfo) {
    return <div className={containerStyle}> loading...</div>;
  }

  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Pokemon Varieties ListPage</h1>
      <RouteBreadcrumb />
      <hr />

      {pokemonInfo?.varieties.map((varieties) => {
        return (
          <NavLink
            key={varieties.pokemon.url}
            to={varieties?.pokemon.name}
            className={linkButtonStyle}
          >
            <h2>go to {varieties?.pokemon.name} Pokemon Page</h2>
          </NavLink>
        );
      })}
    </div>
  );
}
