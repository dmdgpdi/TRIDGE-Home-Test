import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./Breadcrumb";

import { SyncLoader } from "./SyncLoader";
import { getBreadcrumbs } from "./getBreadcrumbs";
import { ROUTES, type RoutePaths } from "./route.config";
import { useGetRouteInfoContext } from "./useGetRouteInfoContext";

export function RouteBreadcrumb() {
  const breadcrumbs = useMemo(() => {
    const pathname = location.pathname;
    const segments = [
      "/",
      ...pathname.split("/").filter((path) => path !== ""),
    ] as RoutePaths[];

    return getBreadcrumbs(ROUTES, segments);
  }, []);
  const { routeInfo } = useGetRouteInfoContext();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const useExternalName = crumb.useExternalName;
          const curRouteInfo = useExternalName
            ? routeInfo[crumb.segment]
            : null;
          const isLast = index === breadcrumbs.length - 1;
          const isLoading = curRouteInfo?.isLoading;
          const displayName = curRouteInfo ? curRouteInfo.name : crumb.name;
          const content = isLoading ? (
            <SyncLoader size={4} bounceDistance={4} />
          ) : (
            displayName
          );

          return (
            <Fragment key={crumb.path}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{content}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.path}>{content}</BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
