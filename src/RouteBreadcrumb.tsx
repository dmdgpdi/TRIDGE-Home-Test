import { useMemo } from "react";
import { NavLink } from "react-router";
import { Fragment } from "react/jsx-runtime";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./Breadcrumb";
import {
  hiddenOnMobileStyle,
  visibleOnMobileStyle,
} from "./RouteBreadcrumb.css";
import { SyncLoader } from "./SyncLoader";
import { getBreadcrumbs } from "./getBreadcrumbs";
import { ROUTES, type RoutePaths } from "./route.config";
import { useGetRouteInfoContext } from "./useGetRouteInfoContext";

interface RouteBreadcrumbProps {
  isShowMobile?: boolean;
}

export function RouteBreadcrumb({ isShowMobile = true }: RouteBreadcrumbProps) {
  const breadcrumbs = useMemo(() => {
    const pathname = location.pathname;
    const segments = [
      "/",
      ...pathname.split("/").filter((path) => path !== ""),
    ] as RoutePaths[];

    return getBreadcrumbs(ROUTES, segments);
  }, []);

  const mobileBreadcrumbs = useMemo(() => {
    if (breadcrumbs.length <= 1) {
      return [breadcrumbs[0]];
    }

    if (breadcrumbs.length <= 2) {
      return [breadcrumbs[0], breadcrumbs[breadcrumbs.length - 1]];
    }

    return [breadcrumbs[0], "ellipsis", breadcrumbs[breadcrumbs.length - 1]];
  }, [breadcrumbs]);

  const { routeInfo } = useGetRouteInfoContext();

  return (
    <Breadcrumb>
      <BreadcrumbList className={isShowMobile ? hiddenOnMobileStyle : ""}>
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
                  <BreadcrumbLink asChild>
                    <NavLink to={crumb.path}>{content}</NavLink>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>

      {isShowMobile && (
        <BreadcrumbList className={visibleOnMobileStyle}>
          {mobileBreadcrumbs.map((crumb, index) => {
            if (typeof crumb === "string") {
              return (
                <Fragment key={crumb}>
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              );
            }

            const useExternalName = crumb.useExternalName;
            const curRouteInfo = useExternalName
              ? routeInfo[crumb.segment]
              : null;
            const isLast = index === mobileBreadcrumbs.length - 1;
            const isLoading = curRouteInfo?.isLoading;
            const displayName = curRouteInfo ? curRouteInfo.name : crumb.name;
            const content = isLoading ? (
              <SyncLoader size={4} bounceDistance={4} />
            ) : (
              displayName
            );

            return (
              <Fragment key={`mobile-${crumb.path}`}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{content}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <NavLink to={crumb.path}>{content}</NavLink>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {index < mobileBreadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
}
