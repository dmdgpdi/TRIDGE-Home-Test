import { createContext } from "react";
import type { RoutePaths } from "./route.config";

/**
 * 외부 데이터를 기반으로 하고, data를 loading 중인지 판단합니다.
 */
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
