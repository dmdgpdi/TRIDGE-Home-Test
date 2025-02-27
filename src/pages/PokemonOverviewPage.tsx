import { NavLink, useParams } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { useFetchPokemonSpeciesInfo } from "../queries/useFetchPokemonSpeciesInfo";
import { containerStyle, linkButtonStyle, titleStyle } from "./page.css";

export function PokemonOverviewPage() {
  const { species } = useParams<{ species: string }>();

  if (!species) {
    throw new Error("Can't find species");
  }

  const { data: pokemonSpeciesInfo } = useFetchPokemonSpeciesInfo(species);

  if (!pokemonSpeciesInfo) {
    return (
      <div className={containerStyle}>
        <h1 className={titleStyle}>Pokemon Overview Page</h1>
        <RouteBreadcrumb />
        <hr />
        loading...
      </div>
    );
  }

  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Pokemon Overview Page</h1>
      <RouteBreadcrumb />
      <hr />

      <NavLink to={"pokemons"} className={linkButtonStyle}>
        <h2>go to {pokemonSpeciesInfo?.name} Pokemon Varieties List</h2>
      </NavLink>

      <br />
      <h2>Info</h2>
      <p>{`color: ${pokemonSpeciesInfo?.color.name}`}</p>
      <p>{`base_happiness: ${pokemonSpeciesInfo?.base_happiness}`}</p>
    </div>
  );
}
