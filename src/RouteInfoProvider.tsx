import { type PropsWithChildren, useState } from "react";
import { Outlet, useParams } from "react-router";
import { PokemonRouteInfoUpdater } from "./PokemonRouteInfoUpdater";
import { RouteInfoContext, type RouteInfoType } from "./RouteInfoContext";
import { SpeciesRouteInfoUpdater } from "./SpeciesRouteInfoUpdater";

export function RouteInfoProvider({
  children = <Outlet />,
}: PropsWithChildren) {
  const { species, pokemon } = useParams<{
    species: string;
    pokemon: string;
  }>();

  const [routeInfo, setRouteInfo] = useState<RouteInfoType>({
    "/": { isLoading: true, name: "" },
    ":pokemon": { isLoading: true, name: "" },
    ":species": { isLoading: true, name: "" },
    pokemons: { isLoading: true, name: "" },
    species: { isLoading: true, name: "" },
  });

  return (
    <RouteInfoContext.Provider value={{ routeInfo, setRouteInfo }}>
      {children}
      {species && <SpeciesRouteInfoUpdater species={species} />}
      {pokemon && <PokemonRouteInfoUpdater pokemon={pokemon} />}
    </RouteInfoContext.Provider>
  );
}
