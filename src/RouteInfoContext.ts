import { createContext } from "react";
import type { RoutePaths } from "./route";

export type RouteInfoType = Record<
  RoutePaths,
  { isLoading: boolean; name: string }
>;

type RouteInfoContextType = {
  routeInfo: RouteInfoType;
  setRouteInfo: (
    value: RouteInfoType | ((prevState: RouteInfoType) => RouteInfoType),
  ) => void;
} | null;

export const RouteInfoContext = createContext<RouteInfoContextType>(null);
