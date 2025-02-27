import type { JSX } from "react";
import { Route, Routes as RouterRoutes } from "react-router";
import { RouteInfoProvider } from "./RouteInfoProvider";
import { ROUTES, type ReactRouterType } from "./route.config";

const buildFullPath = (...segments: string[]) =>
  segments.join("/").replace(/\/+/g, "/");

const renderRoutes = (
  routes: readonly ReactRouterType[],
  parentPath = "",
): JSX.Element[] => {
  return routes.flatMap((route) => {
    const fullPath = buildFullPath(parentPath, route.path);

    return [
      <Route
        key={fullPath}
        path={route.nested ? route.path : fullPath}
        element={<route.element />}
      >
        {route.childRoutes
          ?.filter((c) => c.nested)
          .map((child) =>
            renderRoutes([child], route.nested ? parentPath : fullPath),
          )}
      </Route>,

      ...(route.childRoutes
        ?.filter((c) => !c.nested)
        .flatMap((child) => renderRoutes([child], fullPath)) || []),
    ];
  });
};

export function Routes() {
  return (
    <RouterRoutes>
      <Route element={<RouteInfoProvider />}>
        {renderRoutes(ROUTES)}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </RouterRoutes>
  );
}
