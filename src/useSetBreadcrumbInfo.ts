import { useEffect } from "react";
import type { RoutePaths } from "./route.config";
import { useGetRouteInfoContext } from "./useGetRouteInfoContext";

interface UseSetBreadcrumbInfoParamsType<T> {
  routeKey: RoutePaths;
  data: T | undefined;
  getName: (data: T) => string;
}

export function useSetBreadcrumbInfo<T>({
  routeKey,
  data,
  getName,
}: UseSetBreadcrumbInfoParamsType<T>) {
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
