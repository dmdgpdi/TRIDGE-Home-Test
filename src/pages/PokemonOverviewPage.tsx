import { Outlet } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { StaticBreadcrumb } from "../StaticBreadcrumb";

export function PokemonOverviewPage() {
  return (
    <div>
      <h1>PokemonOverviewPage</h1>
      <StaticBreadcrumb />
      <h2>dynamic</h2>
      <RouteBreadcrumb />
      <h2>-------------------</h2>
      <Outlet />
    </div>
  );
}
