import { type PropsWithChildren, useState } from "react";
import { RouteInfoContext, type RouteInfoType } from "./RouteInfoContext";

export function RouteInfoProvider({ children }: PropsWithChildren) {
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
    </RouteInfoContext.Provider>
  );
}
