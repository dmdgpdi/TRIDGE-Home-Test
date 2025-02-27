import { use } from "react";
import { RouteInfoContext } from "./RouteInfoContext";

export function useGetRouteInfoContext() {
  const context = use(RouteInfoContext);

  if (!context) {
    throw new Error(
      "useGetRouteInfoContext must be used within a RouteInfoProvider",
    );
  }

  return context;
}
