import type { RoutePaths, RouteType } from "./route.config";

interface BreadcrumbItemType {
  name: string;
  path: RouteType["path"];
  useExternalName: Required<RouteType["useExternalName"]>;
  segment: RoutePaths;
}

export const getBreadcrumbs = (
  routes: readonly RouteType[],
  segments: RoutePaths[],
  breadcrumbs: BreadcrumbItemType[] = [],
  parentPath = "",
): BreadcrumbItemType[] => {
  if (segments.length === 0) {
    return breadcrumbs;
  }

  const currentSegment = segments[0];
  const matchedRoute = routes.find(
    (route) => route.path === currentSegment || route.path.startsWith(":"),
  );

  if (matchedRoute) {
    const currentPath = `${parentPath}/${currentSegment}`.replace(/\/+/g, "/");
    const name =
      typeof matchedRoute.name === "function"
        ? matchedRoute.name(currentSegment)
        : matchedRoute.name;

    const newBreadcrumbs = [
      ...breadcrumbs,
      {
        name,
        path: currentPath,
        useExternalName: matchedRoute.useExternalName,
        segment: matchedRoute.path as RoutePaths,
      },
    ];

    if (matchedRoute.childRoutes) {
      return getBreadcrumbs(
        matchedRoute.childRoutes,
        segments.slice(1),
        newBreadcrumbs,
        currentPath,
      );
    }
    return newBreadcrumbs;
  }

  return breadcrumbs;
};
