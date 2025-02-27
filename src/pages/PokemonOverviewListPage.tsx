import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { StaticBreadcrumb } from "../StaticBreadcrumb";

export function PokemonOverviewListPage() {
  return (
    <div>
      <h1>Pokemon Overview ListPage</h1>
      <StaticBreadcrumb />
      <h2>dynamic</h2>
      <RouteBreadcrumb />
    </div>
  );
}
