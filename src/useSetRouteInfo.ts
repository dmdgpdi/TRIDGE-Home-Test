import { useEffect } from "react";
import type { RoutePaths } from "./route.config";
import { useGetRouteInfoContext } from "./useGetRouteInfoContext";

interface UseSetRouteInfoParamsType<T> {
  routeKey: RoutePaths;
  data: T | undefined;
  getName: (data: T) => string;
}

export function useSetRouteInfo<T>({
  routeKey,
  data,
  getName,
}: UseSetRouteInfoParamsType<T>) {
  const { setRouteInfo } = useGetRouteInfoContext();

  useEffect(
    function initializedBreadcrumbName() {
      setRouteInfo((prev) => ({
        ...prev,
        [routeKey]: { name: "", isLoading: true },
      }));
    },
    [routeKey],
  );

  useEffect(
    function setBreadcrumbName() {
      if (data) {
        const name = getName(data);
        setRouteInfo((prev) => ({
          ...prev,
          [routeKey]: { name, isLoading: false },
        }));
      }
    },
    [routeKey, data, setRouteInfo],
  );
}
